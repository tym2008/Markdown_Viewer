# Markdown 文档库

这是一个用于展示和查看 Markdown 文件的静态网站。

## 项目结构

- index.html: 主页面，包含文件列表展示和 Markdown 渲染逻辑。
- iles.json: 文件列表索引，部署前需手动维护。
- iles/: 存放所有 Markdown 文件的目录。

## 部署说明

1. **推送到 GitHub**：
   `ash
   git add .
   git commit -m 'Initial commit'
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   `

2. **部署到 Cloudflare Pages**：
   - 登录 Cloudflare Dashboard。
   - 进入 Workers & Pages -> Create a project -> Pages -> Connect to Git。
   - 选择你的 GitHub 仓库。
   - 设置构建设置（通常为 None，因为这是静态 HTML）。
   - 部署后，你将获得一个公开访问的 URL。

## 添加新文档

1. 将 Markdown 文件放入 iles 目录。
2. 编辑根目录下的 iles.json，将文件名添加到数组中（例如：['example.md', 'new-doc.md']）。
3. 提交并推送更改。

## 直接访问特定文档

你可以通过以下格式直接访问某个文档：
<your-deployment-url>/index.html?file=example.md

