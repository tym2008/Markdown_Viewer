import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import 'katex/dist/katex.min.css';
import './style.css';
import files from 'virtual:file-list';

marked.use(markedKatex({
    throwOnError: false,
    nonStandard: true
}));

const app = document.getElementById('app');

function init() {
    const params = new URLSearchParams(window.location.search);
    const folder = params.get('folder') || '';
    const fileName = params.get('file');

    if (fileName) {
        showFile(fileName);
    } else {
        showFolder(folder);
    }
}

// Build a tree from flat file paths
function buildTree(filePaths) {
    const root = { name: '', children: {}, files: [] };
    for (const fp of filePaths) {
        const parts = fp.split('/');
        let current = root;
        for (let i = 0; i < parts.length - 1; i++) {
            if (!current.children[parts[i]]) {
                current.children[parts[i]] = { name: parts[i], children: {}, files: [] };
            }
            current = current.children[parts[i]];
        }
        current.files.push(parts[parts.length - 1]);
    }
    return root;
}

function getFolderNode(folderPath) {
    const tree = buildTree(files);
    if (!folderPath) return tree;
    const parts = folderPath.split('/');
    let current = tree;
    for (const part of parts) {
        if (!current.children[part]) return null;
        current = current.children[part];
    }
    return current;
}

function buildBreadcrumbs(folderPath) {
    if (!folderPath) return '';
    const parts = folderPath.split('/');
    let crumbs = '<a href="/">根目录</a>';
    let accumulated = '';
    for (const part of parts) {
        accumulated += (accumulated ? '/' : '') + part;
        crumbs += ' / <a href="?folder=' + encodeURIComponent(accumulated) + '">' + part + '</a>';
    }
    return crumbs;
}

function showFolder(folderPath) {
    const node = getFolderNode(folderPath);
    if (!node) {
        app.innerHTML = '<p>文件夹不存在。</p>';
        return;
    }

    const subFolders = Object.keys(node.children).sort();
    const mdFiles = node.files.sort();

    let html = '<header><h1>我的 Markdown 文档库</h1></header>';

    // Breadcrumbs
    if (folderPath) {
        html += '<div id="breadcrumbs">' + buildBreadcrumbs(folderPath) + '</div>';
    }

    // Sub folders
    if (subFolders.length > 0) {
        html += '<h2>📁 文件夹</h2><ul id="folder-list">';
        for (const folder of subFolders) {
            const target = folderPath ? folderPath + '/' + folder : folder;
            html += '<li class="folder-item"><a href="?folder=' + encodeURIComponent(target) + '">📂 ' + folder + '</a></li>';
        }
        html += '</ul>';
    }

    // Markdown files
    if (mdFiles.length > 0) {
        html += '<h2>📄 文件</h2><ul id="file-list">';
        for (const file of mdFiles) {
            const fullPath = folderPath ? folderPath + '/' + file : file;
            html += '<li class="file-item"><a href="?file=' + encodeURIComponent(fullPath) + '">' + file.replace('.md', '') + '</a></li>';
        }
        html += '</ul>';
    }

    if (subFolders.length === 0 && mdFiles.length === 0) {
        html += '<p>此文件夹为空。</p>';
    }

    app.innerHTML = html;
}

async function showFile(fileName) {
    try {
        const response = await fetch('/files/' + fileName);
        if (!response.ok) throw new Error('File not found');
        const text = await response.text();

        // Extract folder path from file name for back link
        const lastSlash = fileName.lastIndexOf('/');
        const folderPath = lastSlash >= 0 ? fileName.substring(0, lastSlash) : '';

        const content = marked.parse(text);
        const backHref = folderPath ? '/?folder=' + encodeURIComponent(folderPath) : '/';
        app.innerHTML = '<a class="back-btn" href="' + backHref + '">← 返回</a><div id="viewer">' + content + '</div>';
        document.title = fileName.split('/').pop().replace('.md', '') + ' - Markdown 文档库';
    } catch (error) {
        app.innerHTML = '<a class="back-btn" href="/">← 返回</a><p>错误：无法找到或读取该文件。</p>';
    }
}

init();