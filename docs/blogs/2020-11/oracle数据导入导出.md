---
title: oracle数据导入导出
date: 2020-11-11
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - oracle
tags: 
  - oracle exp imp expdb impdb
location: HangZhou
---


## exp 导出
  - 导出所有用户 
  `exp user/passwd@instance file=./XXX.dmp full=y`
  - 导出指定用户
  `exp user/passwd@instance file=./XXX.dmp owner=user,user2`
  - 导出指定表
  `exp user/passwd@instance file=./XXX.dmp tables=tableName,tableName2`

## imp 导入
  `imp user/passwd@instance file=./XXX.dmp full=y ignore=y`

## expdb

## impdb