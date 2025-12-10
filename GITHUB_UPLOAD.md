# GitHub 上传指南

本指南将帮助你将项目上传到 GitHub 并部署到 GitHub Pages。

## 步骤 1: 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com/)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `SurviveAUST.github.io`（推荐，这样可以直接使用 `username.github.io` 域名）
   - **Description**: 安徽理工大学生存指南
   - **Visibility**: Public（必须公开才能使用免费的 GitHub Pages）
   - **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）
4. 点击 "Create repository"

## 步骤 2: 配置 Git（如果还没配置）

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

## 步骤 3: 初始化并上传项目

在项目根目录下执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 安徽理工大学生存指南"

# 添加远程仓库（替换 YourUsername 为你的 GitHub 用户名）
git remote add origin https://github.com/YourUsername/SurviveAUST.github.io.git

# 推送到 GitHub（如果遇到问题，可能需要先设置分支）
git branch -M main
git push -u origin main
```

## 步骤 4: 配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 "Settings"（设置）
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分：
   - 选择 "GitHub Actions" 作为部署源
5. 保存设置

## 步骤 5: 更新配置文件

在推送代码之前，需要更新以下文件中的 GitHub 用户名：

1. **docs/.vitepress/config.js** - 第 127 行
   ```javascript
   { icon: 'github', link: 'https://github.com/YourUsername/SurviveAUST' }
   ```
   将 `YourUsername` 替换为你的 GitHub 用户名

2. **README.md** - 第 5 行
   ```markdown
   git clone https://github.com/YourUsername/SurviveAUST.github.io.git
   ```
   将 `YourUsername` 替换为你的 GitHub 用户名

## 步骤 6: 触发部署

### 自动部署

当你推送代码到 main 分支时，GitHub Actions 会自动触发部署。

### 手动触发

1. 进入仓库的 "Actions" 标签
2. 选择 "Deploy VitePress site to Pages" 工作流
3. 点击 "Run workflow" 按钮
4. 选择 "main" 分支
5. 点击 "Run workflow"

## 步骤 7: 访问网站

部署完成后（通常需要几分钟），你的网站将在以下地址可用：

- 如果仓库名为 `SurviveAUST.github.io`：
  `https://YourUsername.github.io/SurviveAUST.github.io/`

- 如果仓库名为其他名称：
  `https://YourUsername.github.io/仓库名/`

## 后续更新

每次更新内容后，只需：

```bash
git add .
git commit -m "更新内容描述"
git push
```

GitHub Actions 会自动部署更新。

## 故障排除

### 问题 1: 推送被拒绝

**解决方案**:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 问题 2: GitHub Actions 部署失败

**检查**:
1. 查看 Actions 标签中的错误日志
2. 确认 `package.json` 中的依赖正确
3. 确认 Node.js 版本兼容（需要 18+）

### 问题 3: 页面无法访问

**检查**:
1. 确认 GitHub Pages 已启用
2. 确认部署成功（查看 Actions）
3. 等待几分钟让 DNS 生效
4. 检查仓库设置中的 Pages 配置

### 问题 4: 样式或链接错误

**检查**:
1. 确认 `docs/.vitepress/config.js` 中的 `base` 配置正确
2. 如果仓库名不是 `username.github.io`，需要设置 `base: '/仓库名/'`

## 自定义域名（可选）

如果你想使用自定义域名：

1. 在仓库 Settings > Pages 中添加自定义域名
2. 按照提示配置 DNS 记录
3. 在项目根目录创建 `CNAME` 文件，内容为你的域名
4. 提交并推送更改

## 参考资源

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [VitePress 文档](https://vitepress.dev/)

---

**祝你部署顺利！如有问题，欢迎提 Issue。**

