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
    const fileName = params.get('file');

    if (fileName) {
        showFile(fileName);
    } else {
        showFileList();
    }
}

function showFileList() {
    let html = '<header><h1>tym\'s Markdown File List</h1><p>Click on a file to view its content</p></header>';
    html += '<ul id="file-list">';
    files.forEach(file => {
        html += '<li><a href="?file=' + encodeURIComponent(file) + '">' + file.replace('.md', '') + '</a></li>';
    });
    html += '</ul>';
    app.innerHTML = html;
}

async function showFile(fileName) {
    try {
        const response = await fetch('/files/' + fileName);
        if (!response.ok) throw new Error('File not found');
        const text = await response.text();

        const content = marked.parse(text);
        app.innerHTML = '<a class="back-btn" href="/">← Return to File List</a><div id="viewer">' + content + '</div>';
        document.title = fileName.replace('.md', '') + ' - Markdown File List';
    } catch (error) {
        app.innerHTML = '<a class="back-btn" href="/">← Return to File List</a><p>Error: Could Not Found the file</p>';
    }
}

init();