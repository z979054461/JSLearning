---
title: oracle字段默认值
date: 2020-11-11
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - blog
tags: 
  - oracle default value
location: HangZhou
---

```sql
ALTER TABLE "TEST" 
ADD ("SCORE1" NUMBER(255,0)) --不设置
ADD ("SCORE2" NUMBER(255,0) DEFAULT '') --设置为EMPTY STRING
ADD ("SCORE3" NUMBER(255,0) DEFAULT NULL) --设置为NULL
ADD ("SCORE4" NUMBER(255,0) DEFAULT '0') --设置为0字符串
```
结论：除了`'0'`会设置为`0`其他均为NULL
![结果](/oracle_default_demo.png)