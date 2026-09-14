import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'markdown-files-plugin',
      configResolved(config) {
        const filesDir = path.resolve(config.root, 'files');
        if (fs.existsSync(filesDir)) {
          const files = fs.readdirSync(filesDir).filter(f => f.endsWith('.md'));
          const manifest = JSON.stringify(files);
          fs.writeFileSync(path.resolve(config.root, 'public/files.json'), manifest);
        }
      }
    }
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
