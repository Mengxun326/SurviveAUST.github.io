import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SurviveAUST',
  description: '安徽理工大学生存指南',
  lang: 'zh-CN',
  base: '/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '前言', link: '/前言' },
      { text: '贡献指南', link: '/贡献指南' },
      { text: '人生篇', link: '/人生篇/' },
      { text: '入学篇', link: '/入学篇/' },
      { text: '研学篇', link: '/研学篇/' },
      { text: '路线篇', link: '/路线篇/' },
      { text: '保研篇', link: '/保研篇/' },
      { text: '考研篇', link: '/考研篇/' },
      { text: '备考篇', link: '/备考篇/' },
      { text: '生活篇', link: '/生活篇/' },
      { text: '社团篇', link: '/社团篇/' }
    ],

    sidebar: {
      '/人生篇/': [
        {
          text: '人生篇',
          items: [
            { text: '欢迎来到安徽理工大学', link: '/人生篇/欢迎来到安徽理工大学' },
            { text: '失败的思维方式', link: '/人生篇/失败的思维方式' },
            { text: '反对PUA', link: '/人生篇/反对PUA' },
            { text: '你的身价是多少', link: '/人生篇/你的身价是多少' },
            { text: '正确地浪费剩下的时间', link: '/人生篇/正确地浪费剩下的时间' },
            { text: '总有更值得做的事情', link: '/人生篇/总有更值得做的事情' }
          ]
        }
      ],
      '/入学篇/': [
        {
          text: '入学篇',
          items: [
            { text: '入学准备', link: '/入学篇/入学准备' },
            { text: '校园介绍', link: '/入学篇/校园介绍' },
            { text: '新生常见问题', link: '/入学篇/新生常见问题' }
          ]
        }
      ],
      '/研学篇/': [
        {
          text: '研学篇',
          items: [
            { text: '选课原则与选课技巧', link: '/研学篇/选课原则与选课技巧' },
            { text: '学习方法', link: '/研学篇/学习方法' },
            { text: '考试备考', link: '/研学篇/考试备考' },
            { text: '成绩解读', link: '/研学篇/成绩解读' }
          ]
        }
      ],
      '/路线篇/': [
        {
          text: '路线篇',
          items: [
            { text: '学习路线规划', link: '/路线篇/学习路线规划' },
            { text: '专业方向选择', link: '/路线篇/专业方向选择' }
          ]
        }
      ],
      '/保研篇/': [
        {
          text: '保研篇',
          items: [
            { text: '保研概述', link: '/保研篇/保研概述' },
            { text: '保研准备', link: '/保研篇/保研准备' },
            { text: '保研流程', link: '/保研篇/保研流程' }
          ]
        }
      ],
      '/考研篇/': [
        {
          text: '考研篇',
          items: [
            { text: '考研概述', link: '/考研篇/考研概述' },
            { text: '考研准备', link: '/考研篇/考研准备' },
            { text: '考研流程', link: '/考研篇/考研流程' }
          ]
        }
      ],
      '/备考篇/': [
        {
          text: '备考篇',
          items: [
            { text: '考试技巧', link: '/备考篇/考试技巧' },
            { text: '复习方法', link: '/备考篇/复习方法' }
          ]
        }
      ],
      '/生活篇/': [
        {
          text: '生活篇',
          items: [
            { text: '校园生活', link: '/生活篇/校园生活' },
            { text: '住宿指南', link: '/生活篇/住宿指南' },
            { text: '饮食指南', link: '/生活篇/饮食指南' },
            { text: '交通指南', link: '/生活篇/交通指南' }
          ]
        }
      ],
      '/社团篇/': [
        {
          text: '社团篇',
          items: [
            { text: '社团介绍', link: '/社团篇/社团介绍' },
            { text: '如何选择社团', link: '/社团篇/如何选择社团' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mengxun326/SurviveAUST.github.io' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present SurviveAUST Contributors'
    },

    search: {
      provider: 'local'
    }
  }
})

