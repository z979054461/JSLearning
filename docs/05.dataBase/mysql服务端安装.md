---
title: mysql服务端安装
date: 2020-11-22
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - database
tags: 
  - mysql
location: HangZhou
---

# Heading
[[toc]]


## Windows
### 下载、解压
  [mysql 8.0.22](https://dev.mysql.com/downloads/mysql/)

### 设置环境变量
  path增加bin目录，如：
  `D:\Program Files\mysql-8.0.22-winx64\bin`

### 初始化
  `mysqld --initialize-insecure`

### 安装服务
  `mysqld --install`

### 启动服务端
  `mysqld --console` 或 `net start mysql`

### 修改root密码
  登录：`mysql -u root -p` （第一次无密码直接回车） 
  设置密码：`set password for root@localhost = root;` 

### 关闭服务
  `net stop mysql`

