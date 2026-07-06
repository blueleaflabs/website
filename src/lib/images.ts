import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const IMG_DIR = 'public/images/uploads';
const IMG_URL = '/images/uploads';

// Returns the URL of <prefix>-1.<ext> if it exists, else null.
export function heroImage(prefix?: string): string | null {
  if (!prefix) return null;
  const esc = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`^${esc}-1\\.(png|jpe?g|webp|avif|gif)$`, 'i');
  let files: string[] = [];
  try { files = readdirSync(join(process.cwd(), IMG_DIR)); } catch { /* none */ }
  const hit = files.find((f) => re.test(f));
  return hit ? `${IMG_URL}/${hit}` : null;
}

// Returns URLs of <prefix>-photo-1..N.<ext>, numerically sorted (the 2x2 gallery).
export function galleryImages(prefix?: string): string[] {
  if (!prefix) return [];
  const esc = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`^${esc}-photo-(\\d+)\\.(png|jpe?g|webp|avif|gif)$`, 'i');
  let files: string[] = [];
  try { files = readdirSync(join(process.cwd(), IMG_DIR)); } catch { /* none */ }
  return files
    .map((f) => { const m = f.match(re); return m ? { f, n: parseInt(m[1], 10) } : null; })
    .filter((x): x is { f: string; n: number } => x !== null)
    .sort((a, b) => a.n - b.n)
    .map((x) => `${IMG_URL}/${x.f}`);
}
