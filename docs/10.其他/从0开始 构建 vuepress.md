# 从0开始 构建 vuepress

    官网 https://vuepress.vuejs.org/zh/
## 依赖
 - 安装 node http://nodejs.cn/
    node中内置 npm
 - 安装 cnpm 
    `npm install -g cnpm --registry=https://registry.npm.taobao.org`

 - 全局安装 vuepress
    `cnpm i -g vuepress`

## 快速上手

 ```javascript
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .

# 将默认主题复制到 .vuepress/theme 目录，以供自定义。
vuepress eject .
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


::: tip
 `Pandora -o file.md file.docx —extract-media=file` docx2md不会丢失图片
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::