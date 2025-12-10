# 项目总结

## 项目概述

安徽理工大学生存指南（SurviveAUST）是一个基于 VitePress 构建的静态网站项目，旨在为安徽理工大学的同学们提供实用的校园生活、学习、升学等方面的经验和建议。

## 技术栈

- **框架**: VitePress 1.0+
- **语言**: Markdown + JavaScript
- **部署**: GitHub Pages + GitHub Actions
- **包管理**: npm

## 项目结构

```
SurviveAUST/
├── docs/                          # 文档目录
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.js            # 主配置文件
│   │   └── theme/               # 主题配置
│   │       ├── index.js        # 主题入口
│   │       └── custom.css      # 自定义样式
│   ├── 人生篇/                   # 人生篇文档
│   ├── 入学篇/                   # 入学篇文档
│   ├── 研学篇/                   # 研学篇文档
│   ├── 路线篇/                   # 路线篇文档
│   ├── 保研篇/                   # 保研篇文档
│   ├── 考研篇/                   # 考研篇文档
│   ├── 备考篇/                   # 备考篇文档
│   ├── 生活篇/                   # 生活篇文档
│   ├── 社团篇/                   # 社团篇文档
│   ├── index.md                 # 首页
│   ├── 前言.md                   # 前言
│   └── 贡献指南.md               # 贡献指南
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions 部署配置
├── .gitignore                   # Git 忽略文件
├── package.json                 # 项目配置
├── LICENSE                      # MIT 许可证
├── README.md                    # 项目说明
├── DEPLOY.md                    # 部署指南
├── GITHUB_UPLOAD.md            # GitHub 上传指南
├── QUICKSTART.md               # 快速开始指南
└── PROJECT_SUMMARY.md          # 项目总结（本文件）
```

## 内容结构

### 主要章节

1. **人生篇** - 关于大学生活的态度和思维方式
2. **入学篇** - 新生入学指南
3. **研学篇** - 学习方法和技巧
4. **路线篇** - 学习路线规划
5. **保研篇** - 保研相关信息
6. **考研篇** - 考研相关信息
7. **备考篇** - 考试备考技巧
8. **生活篇** - 校园生活指南
9. **社团篇** - 社团相关信息

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 构建

```bash
npm run build
```

### 部署

参考 [GITHUB_UPLOAD.md](./GITHUB_UPLOAD.md) 了解如何上传到 GitHub 并部署。

## 下一步

1. **上传到 GitHub**
   - 按照 [GITHUB_UPLOAD.md](./GITHUB_UPLOAD.md) 的步骤操作
   - 记得更新配置文件中的 GitHub 用户名

2. **添加内容**
   - 根据实际情况补充各章节内容
   - 添加学校相关信息
   - 邀请同学贡献内容

3. **自定义**
   - 添加 Logo 和 Favicon
   - 自定义主题颜色
   - 添加更多功能

4. **推广**
   - 在校园内推广
   - 邀请更多同学贡献
   - 持续更新内容

## 参考项目

- [上海交通大学生存手册](https://github.com/SurviveSJTU/SurviveSJTUManual)
- [西安交通大学生存指南](https://github.com/SurviveXJTU/SurviveXJTU.github.io)

## 贡献

欢迎所有安徽理工大学的同学贡献内容！请查看 [贡献指南](./docs/贡献指南.md) 了解如何参与。

## 许可证

本项目采用 MIT 许可证，详见 [LICENSE](./LICENSE) 文件。

---

**祝项目顺利！**

