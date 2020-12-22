---
title: oracle启停
date: 2020-12-10
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - oracle
tags: 
  - oracle 
location: HangZhou
---


## 以oracle身份登录数据库
`su -oracle`
## 进入Sqlplus控制台
`sqlplus /nolog`
## 以系统管理员登录
`connect / as sysdba`
## 启动数据库
`startup`
## 如果是关闭数据库
`shutdown immediate`
## 退出sqlplus控制台
`exit`
## 进入监听器控制台
`lsnrctl`
## 启动监听器
`start`
## 退出监听器控制台
`exit`