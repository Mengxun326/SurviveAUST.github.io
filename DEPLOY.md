# 部署指南

本指南将帮助你将安徽理工大学生存指南部署到 GitHub Pages。

## 前置要求

- GitHub 账号
- Node.js 18+ 已安装
- Git 已安装

## 部署步骤

### 1. 创建 GitHub 仓库

1. 登录 GitHub
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称建议：`SurviveAUST.github.io`（这样可以直接使用 `username.github.io` 域名）
4. 设置为 Public
5. 点击 "Create repository"

### 2. 上传代码到 GitHub

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 安徽理工大学生存指南"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YourUsername/SurviveAUST.github.io.git

# 推送到 GitHub
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入仓库的 Settings 页面
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "GitHub Actions" 作为部署源
4. 保存设置

### 4. 触发部署

GitHub Actions 会在你推送代码到 main 分支时自动触发部署。

你也可以手动触发：
1. 进入仓库的 "Actions" 标签
2. 选择 "Deploy VitePress site to Pages" 工作流
3. 点击 "Run workflow"

### 5. 访问网站

部署完成后，你的网站将在以下地址可用：
- 如果仓库名为 `SurviveAUST.github.io`：`https://YourUsername.github.io/SurviveAUST.github.io/`
- 如果使用自定义域名：按照 GitHub Pages 文档配置

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看本地预览。

### 构建

```bash
npm run build
```

构建产物在 `docs/.vitepress/dist` 目录。

## 更新内容

1. 修改文档内容
2. 提交更改：
   ```bash
   git add .
   git commit -m "更新内容"
   git push
   ```
3. GitHub Actions 会自动部署更新

## 自定义域名（可选）

1. 在仓库 Settings > Pages 中添加自定义域名
2. 按照提示配置 DNS 记录
3. 在项目根目录创建 `CNAME` 文件，内容为你的域名

## 故障排除

### 部署失败

- 检查 GitHub Actions 日志
- 确认 Node.js 版本兼容
- 检查配置文件是否正确

### 页面无法访问

- 确认 GitHub Pages 已启用
- 检查部署是否成功
- 等待几分钟让 DNS 生效

## 参考资源

- [VitePress 文档](https://vitepress.dev/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)

---

如有问题，欢迎提 Issue！

