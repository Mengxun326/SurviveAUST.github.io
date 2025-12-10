# 上传和部署步骤指南

## 当前状态

✅ Git 仓库已初始化
✅ 代码已提交
✅ 远程仓库已配置：`https://github.com/Mengxun326/SurviveAUST.github.io.git`
✅ 分支已重命名为 `main`

## 步骤 1: 创建 GitHub 仓库（如果还没有）

1. 打开浏览器，访问 https://github.com
2. 登录你的账号（Mengxun326）
3. 点击右上角的 "+" 号，选择 "New repository"
4. 填写仓库信息：
   - **Repository name**: `SurviveAUST.github.io`
   - **Description**: 安徽理工大学生存指南
   - **Visibility**: 选择 **Public**（必须公开才能使用免费的 GitHub Pages）
   - **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）
5. 点击 "Create repository"

## 步骤 2: 推送代码到 GitHub

在终端中执行：

```bash
git push -u origin main
```

**如果遇到网络问题**，可以尝试：

### 方法 1: 使用 SSH（推荐）

1. 生成 SSH 密钥（如果还没有）：
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. 将公钥添加到 GitHub：
   - 复制 `~/.ssh/id_ed25519.pub` 的内容
   - 在 GitHub Settings > SSH and GPG keys > New SSH key 中添加

3. 更改远程仓库地址为 SSH：
   ```bash
   git remote set-url origin git@github.com:Mengxun326/SurviveAUST.github.io.git
   ```

4. 再次推送：
   ```bash
   git push -u origin main
   ```

### 方法 2: 配置代理（如果有代理）

```bash
git config --global http.proxy http://127.0.0.1:端口号
git config --global https.proxy http://127.0.0.1:端口号
```

### 方法 3: 使用 GitHub Desktop

如果命令行有问题，可以使用 GitHub Desktop 图形界面工具。

## 步骤 3: 配置 GitHub Pages

推送成功后：

1. 进入你的 GitHub 仓库页面：https://github.com/Mengxun326/SurviveAUST.github.io
2. 点击 "Settings"（设置）标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分：
   - 选择 **"GitHub Actions"** 作为部署源
5. 保存设置

## 步骤 4: 触发部署

### 自动部署

GitHub Actions 会在你推送代码后自动触发部署。等待几分钟后，Actions 标签中会显示部署进度。

### 手动触发（如果需要）

1. 进入仓库的 "Actions" 标签
2. 选择 "Deploy VitePress site to Pages" 工作流
3. 点击 "Run workflow" 按钮
4. 选择 "main" 分支
5. 点击 "Run workflow"

## 步骤 5: 访问网站

部署完成后（通常需要 2-5 分钟），你的网站将在以下地址可用：

**https://mengxun326.github.io/SurviveAUST.github.io/**

## 验证部署

1. 检查 Actions 标签，确认部署成功（绿色 ✓）
2. 访问网站地址，确认可以正常访问
3. 测试各个页面和功能

## 常见问题

### Q: 推送时提示认证失败

A: 需要配置 Git 凭据：
```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

或者使用 Personal Access Token：
1. GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. 生成新 token，勾选 `repo` 权限
3. 推送时使用 token 作为密码

### Q: Actions 部署失败

A: 检查：
1. Actions 标签中的错误日志
2. 确认 `package.json` 中的依赖正确
3. 确认 Node.js 版本兼容（需要 18+）

### Q: 页面无法访问

A: 检查：
1. GitHub Pages 是否已启用
2. 部署是否成功（查看 Actions）
3. 等待几分钟让 DNS 生效

## 后续更新

每次更新内容后，只需：

```bash
git add .
git commit -m "更新内容描述"
git push
```

GitHub Actions 会自动部署更新。

---

**需要帮助？** 查看详细文档或提 Issue。

