import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIRTUAL_MODULE_ID = 'virtual:file-list';
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID;

// Recursively scan directory for .md files, returning flat paths with forward slashes
function scanMarkdownFiles(dir, prefix = '') {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const relPath = prefix ? prefix + '/' + entry.name : entry.name;
        if (entry.isDirectory()) {
            results = results.concat(scanMarkdownFiles(path.join(dir, entry.name), relPath));
        } else if (entry.name.endsWith('.md')) {
            results.push(relPath);
        }
    }
    return results;
}

export default defineConfig({
  plugins: [
    {
      name: 'markdown-auto-scan',
      resolveId(id) {
        if (id === VIRTUAL_MODULE_ID) {
          return RESOLVED_VIRTUAL_MODULE_ID;
        }
      },
      load(id) {
        if (id === RESOLVED_VIRTUAL_MODULE_ID) {
          const filesDir = path.resolve(__dirname, 'public/files');
          const files = scanMarkdownFiles(filesDir).sort();
          const moduleCode = 'export default ' + JSON.stringify(files) + ';';
          return moduleCode;
        }
      },
      configureServer(server) {
        const filesDir = path.resolve(__dirname, 'public/files');
        if (fs.existsSync(filesDir)) {
          server.watcher.add(filesDir);
          server.watcher.on('change', (filePath) => {
            if (filePath.startsWith(filesDir) && filePath.endsWith('.md')) {
              const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID);
              if (mod) {
                server.moduleGraph.invalidateModule(mod);
                server.ws.send({ type: 'full-reload' });
              }
            }
          });
        }
      }
    }
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});