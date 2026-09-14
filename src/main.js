import { marked } from 'marked';
import './style.css';

const app = document.getElementById('app');

async function init() {
    const params = new URLSearchParams(window.location.search);
    const fileName = params.get('file');

    if (fileName) {
        await showFile(fileName);
    } else {
        await showFileList();
    }
}

async function showFileList() {
    try {
        const response = await fetch('/files.json');
        const files = await response.json();
        
        let html = '<header><h1>我的 Markdown 文档库</h1><p>点击下方文件查看内容</p></header>';
        html += '<ul id="file-list">';
        files.forEach(file => {
            html += '<li><a href="?file=' + encodeURIComponent(file) + '">' + file.replace('.md', '') + '</a></li>';
        });
        html += '</ul>';
        app.innerHTML = html;
    } catch (error) {
        app.innerHTML = '<p>无法加载文件列表。</p>';
    }
}

async function showFile(fileName) {
    try {
        const response = await fetch('/files/' + fileName);
        if (!response.ok) throw new Error('File not found');
        const text = await response.text();
        
        const content = marked.parse(text);
        app.innerHTML = '<a class="back-btn" href="/">← 返回文件列表</a><div id="viewer">' + content + '</div>';
        document.title = fileName.replace('.md', '') + ' - Markdown 文档库';
    } catch (error) {
        app.innerHTML = '<a class="back-btn" href="/">← 返回文件列表</a><p>错误：无法找到或读取该文件。</p>';
    }
}

init();
