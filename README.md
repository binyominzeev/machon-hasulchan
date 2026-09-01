# Machon Hasulchan - PDF workflow

This project uses Next.js static export (`output: export`).
The deployed site should serve the `out/` directory.

## Single source of truth

Use only:

- `public/pdfs/`

Do not use:

- `pdfs/` (root-level folder)

`npm run build` now runs a prebuild check that:

1. Fails the build if any `.pdf` file exists in `./pdfs`
2. Removes `out/` before building, to avoid stale exported files

## Update process

1. Replace the PDF file in `public/pdfs/` (same filename if you want to keep links unchanged)
2. Run `npm run build`
3. Deploy/sync the generated `out/` directory to your nginx document root
4. Hard-refresh browser cache (or use versioned filenames)

## Optional cache-safe update

If browser/proxy caching is aggressive, rename updated files with a version suffix and update the filename in `src/data/simanim.ts`.

## Quick PDF-only deploy (skip build)

For PDF-only changes, upload directly to the live `out/pdfs` directory over SFTP instead of doing a full `git pull` + `npm run build` on the server:

1. Copy `.env.example` to `.env` and fill in the SFTP credentials and `SFTP_REMOTE_DIR`
2. Run `npm run deploy:pdfs` — uploads only PDFs whose size differs from the remote copy
3. Commit and push `public/pdfs` separately (keeps git/source in sync; not done by this script)

This only updates the live `out/pdfs` directory; the next full `git pull` + `npm run build` on the server will regenerate it from the committed `public/pdfs` anyway.
