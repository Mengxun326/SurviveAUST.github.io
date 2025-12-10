# 快速开始

欢迎参与安徽理工大学生存指南项目！本指南将帮助你快速上手。

## 项目结构

```
SurviveAUST/
├── docs/                    # 文档目录
│   ├── .vitepress/         # VitePress 配置
│   │   ├── config.js       # 配置文件
│   │   └── theme/          # 主题配置
│   ├── 人生篇/             # 人生篇文档
│   ├── 入学篇/             # 入学篇文档
│   ├── 研学篇/             # 研学篇文档
│   ├── 路线篇/             # 路线篇文档
│   ├── 保研篇/             # 保研篇文档
│   ├── 考研篇/             # 考研篇文档
│   ├── 备考篇/             # 备考篇文档
│   ├── 生活篇/             # 生活篇文档
│   ├── 社团篇/             # 社团篇文档
│   ├── index.md            # 首页
│   ├── 前言.md             # 前言
│   └── 贡献指南.md         # 贡献指南
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── package.json            # 项目配置
├── README.md               # 项目说明
└── DEPLOY.md               # 部署指南
```

## 本地开发

### 1. 克隆项目

```bash
git clone https://github.com/YourUsername/SurviveAUST.github.io.git
cd SurviveAUST.github.io
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看本地预览。

### 4. 构建

```bash
npm run build
```

## 添加内容

### 添加新文章

1. 在相应的目录下创建 Markdown 文件
2. 在 `docs/.vitepress/config.js` 中添加导航和侧边栏配置
3. 提交更改

### 编辑现有文章

1. 找到对应的 Markdown 文件
2. 编辑内容
3. 提交更改

## 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 文档规范

### Markdown 格式

- 使用标准 Markdown 语法
- 标题层级清晰
- 适当使用列表、代码块等
- 添加必要的链接

### 内容要求

- 使用简体中文
- 保持客观、实用
- 提供具体、可操作的建议
- 避免过于主观或偏激的观点

## 常见问题

### Q: 如何添加图片？

A: 将图片放在 `docs/public/` 目录下，然后在 Markdown 中使用相对路径引用。

### Q: 如何修改导航栏？

A: 编辑 `docs/.vitepress/config.js` 中的 `nav` 配置。

### Q: 如何修改侧边栏？

A: 编辑 `docs/.vitepress/config.js` 中的 `sidebar` 配置。

## 获取帮助

- 查看 [贡献指南](./docs/贡献指南.md)
- 查看 [部署指南](./DEPLOY.md)
- 在 GitHub 上提 Issue

---

**感谢你的贡献！**

