import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    {
      name: 'markdown-files-plugin',
      configResolved(config) {
        const filesDir = path.resolve(__dirname, 'files');
        if (fs.existsSync(filesDir)) {
          const files = fs.readdirSync(filesDir).filter(f => f.endsWith('.md'));
          const manifest = JSON.stringify(files);
          
          const publicDir = path.resolve(__dirname, 'public');
          if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
          
          fs.writeFileSync(path.resolve(publicDir, 'files.json'), manifest);
        }
      }
    }
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});