import 'dotenv/config';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import SftpClient from 'ssh2-sftp-client';

const rootDir = process.cwd();
const localPdfsDir = join(rootDir, 'public', 'pdfs');

const requiredEnv = ['SFTP_HOST', 'SFTP_USER', 'SFTP_REMOTE_DIR'];
const missing = requiredEnv.filter((name) => !process.env[name]);

if (!process.env.SFTP_PASSWORD && !process.env.SFTP_PRIVATE_KEY_PATH) {
  missing.push('SFTP_PASSWORD or SFTP_PRIVATE_KEY_PATH');
}

if (missing.length > 0) {
  console.error('Missing required environment variables:');
  for (const name of missing) console.error(`- ${name}`);
  console.error('Copy .env.example to .env and fill in the values.');
  process.exit(1);
}

const localFiles = readdirSync(localPdfsDir).filter((name) => name.toLowerCase().endsWith('.pdf'));

if (localFiles.length === 0) {
  console.error('No PDF files found in public/pdfs.');
  process.exit(1);
}

const connectConfig = {
  host: process.env.SFTP_HOST,
  port: Number(process.env.SFTP_PORT) || 22,
  username: process.env.SFTP_USER,
};

// Private key takes precedence over password when both are set.
if (process.env.SFTP_PRIVATE_KEY_PATH) {
  connectConfig.privateKey = readFileSync(process.env.SFTP_PRIVATE_KEY_PATH);
  if (process.env.SFTP_PRIVATE_KEY_PASSPHRASE) {
    connectConfig.passphrase = process.env.SFTP_PRIVATE_KEY_PASSPHRASE;
  }
} else {
  connectConfig.password = process.env.SFTP_PASSWORD;
}

const remoteDir = process.env.SFTP_REMOTE_DIR;

const uploaded = [];
const skipped = [];
const failed = [];

const sftp = new SftpClient();

try {
  await sftp.connect(connectConfig);

  for (const fileName of localFiles) {
    const localPath = join(localPdfsDir, fileName);
    const remotePath = `${remoteDir}/${fileName}`;

    try {
      const localSize = statSync(localPath).size;
      const remoteExists = await sftp.exists(remotePath);
      const remoteSize = remoteExists ? (await sftp.stat(remotePath)).size : null;

      if (remoteSize === localSize) {
        skipped.push(fileName);
        continue;
      }

      await sftp.put(localPath, remotePath);
      uploaded.push(fileName);
      console.log(`Uploaded: ${fileName}`);
    } catch (err) {
      failed.push(fileName);
      console.error(`Failed: ${fileName} - ${err.message}`);
    }
  }
} finally {
  await sftp.end();
}

console.log('');
console.log(`Uploaded: ${uploaded.length}, unchanged: ${skipped.length}, failed: ${failed.length}`);

if (failed.length > 0) {
  process.exit(1);
}
