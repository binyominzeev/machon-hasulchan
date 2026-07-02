import { existsSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const rootDir = process.cwd();
const rootPdfsDir = join(rootDir, 'pdfs');
const publicPdfsDir = join(rootDir, 'public', 'pdfs');
const outDir = join(rootDir, 'out');

if (!existsSync(publicPdfsDir)) {
  console.error('Missing required directory: public/pdfs');
  process.exit(1);
}

if (existsSync(rootPdfsDir)) {
  const duplicatePdfFiles = readdirSync(rootPdfsDir).filter((name) => name.toLowerCase().endsWith('.pdf'));

  if (duplicatePdfFiles.length > 0) {
    console.error('Build blocked: duplicate PDF source found in ./pdfs');
    console.error('Use only ./public/pdfs as the single source of truth.');
    console.error('Move or delete these files:');
    for (const file of duplicatePdfFiles) {
      console.error(`- pdfs/${file}`);
    }
    process.exit(1);
  }
}

// Clean static export output to avoid stale files from previous builds.
rmSync(outDir, { recursive: true, force: true });
console.log('Prebuild checks passed. Using ./public/pdfs as single source.');
