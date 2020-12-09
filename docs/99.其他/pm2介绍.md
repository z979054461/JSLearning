---
title: pm2介绍
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - other
tags: 
  - pm2
location: HangZhou
---

 ## 安装 node 
- 下载  `wget https://nodejs.org/dist/v12.19.0/node-v12.19.0-linux-x64.tar.xz`
- 解压  `tar xvf node-v12.19.0-linux-x64.tar.xz`
- 创建软链接 `ln -s /home/yuetx/node-v12.19.0-linux-x64/bin/node /usr/local/bin/node`
            `ln -s /home/yuetx/node-v12.19.0-linux-x64/bin/npm /usr/local/bin/npm`  
 ## 安装 pm2
 `npm i -g pm2`
  创建软链接 `ln -s /home/yuetx/node-v12.19.0-linux-x64/bin/pm2 /usr/local/bin/pm2`
 ## 启动工程
  ```javascript
 - 解压front.zip 生成文件夹front
 - 启动命令(xxxx为端口)：
  `pm2 serve ./front --name testname xxxx` 
 - 查看当前服务 `pm2 ls`
 - 访问 http://127.0.00.1:xxxx
  ```

![](/pm2.png)