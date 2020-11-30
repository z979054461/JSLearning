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
  全量导入
  `imp user/passwd@instance file=./XXX.dmp full=y ignore=y`
  按用户导入
  `imp user/passwd@instance file=./XXX.dmp fromuser=A touser=B ignore=y`

## expdb 
  - 导出当前用户
  `expdp user/passwd@instance file=./XXX.dmp` 
  - 全量导出（全部用户） 
  `expdp user/passwd@instance file=./XXX.dmp full=y`
  - 导出指定用户
  `expdp user/passwd@instance schemas=user file=./XXX.dmp`
  - 导出指定表空间
  `expdp user/passwd@instance tablespace=tbs1,tbs2 file=./XXX.dmp`
  - 导出指定表
  `expdp user/passwd@instance file=./XXX.dmp tables=tableName,tableName2`
  - 按条件导出
  `expdp user/passwd@instance tables=table1='where number=1234' file=./XXX.dmp`

## impdb
  - 全量导入
  `impdp user/passwd@instance file=./XXX.dmp full=y logfile=test.log`
  - 同名用户导入
  `impdp A/passwd schemas=A file=./XXX.dmp logfile=impdp.log;　`


https://www.cnblogs.com/chinas/p/8300955.html#_label3