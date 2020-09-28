# pm2介绍

 ## 安装 node 
- http://nodejs.cn/
- node中内置 npm
 ## 安装 cnpm 

 `npm install -g cnpm --registry=https://registry.npm.taobao.org`

 ## 安装 pm2
 `cnpm i -g pm2`

 ## 启动工程
  ```javascript
 - 解压ois-huiclient.zip 生成文件夹ois-huiclient
 - 启动命令(xxxx为端口)：
  `pm2 serve ./ois-huiclient -name testname xxxx` 
 - 查看当前服务 `pm2 ls`
 - 访问 http://127.0.00.1:xxxx
  ```

![](/pm2.png)