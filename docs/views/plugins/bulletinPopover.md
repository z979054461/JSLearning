---
title: bulletin-popover
date: 2020-09-14
---

## 介绍 <GitHubLink repo="vuepress-reco/vuepress-plugin-bulletin-popover/"/>

<img src="./images/bulletin-popover.png" width="260" />

Bulletin popover plugin for vuepress-theme-reco or other vuepress theme.

### 名字

- **As plugin**: `@vuepress-reco/vuepress-plugin-bulletin-popover`

## 使用

```js
plugins: [
  ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    width: '300px', // 默认 260px
    title: '消息提示',
    body: [
      {
        type: 'title',
        content: '欢迎加入QQ交流群 🎉🎉🎉',
        style: 'text-aligin: center;'
      },
      {
        type: 'image',
        src: '/rvcode_qq.png'
      }
    ],
    footer: [
      {
        type: 'button',
        text: '打赏',
        link: '/donate'
      },
      {
        type: 'button',
        text: '打赏',
        link: '/donate'
      }
    ]
  }]
]
```

弹窗分为三部分，公告标题、公告内容和公告底部操作。其中标题是普通文本，公告内容和公告底部操作内容均为数组，支持 4 种 dom，需要通过 schema 配置来控制显示效果，可以根据需要自由组合：

**标题**

```json
{
  type: 'title',
  content: '这里显示 h5 标题'
}
```

**文本**

```json
{
  type: 'text',
  content: '这里显示普通文本'
}
```

**图片**

```json
{
  type: 'image',
  src: '/rvcode_qq.png'
}
```

**按钮**

```json
{
  type: 'button',
  text: '打赏',
  link: '/donate'
}
```

**给 dom 添加样式**

```json
{
  type: 'title',
  content: '这里显示 h5 标题',
  style: 'text-aligin: center;'
}
```

## 贡献者

<Contributors user="vuepress-reco" repo="vuepress-plugin-back-to-top"></Contributors>
