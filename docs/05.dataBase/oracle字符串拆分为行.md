---
title: oracle字符串拆分为行
date: 2020-12-05
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - oracle
tags: 
  - oracle 
location: HangZhou
---

# Heading
[[toc]]

## 结论
```sql
SELECT REGEXP_SUBSTR ('1,2,3', '[^,]+', 1,rownum)
from dual connect by rownum<=LENGTH ('1,2,3') - LENGTH (regexp_replace('1,2,3', ',', ''))+1;
```

## REGEXP_SUBSTR
>function REGEXP_SUBSTR(String, pattern, position, occurrence, modifier)
>>__srcstr     ：需要进行正则处理的字符串
>>__pattern    ：进行匹配的正则表达式
>>__position   ：起始位置，从第几个字符开始正则表达式匹配（默认为1）
>>__occurrence ：标识第几个匹配组，默认为1
>>__modifier   ：模式（'i'不区分大小写进行检索；'c'区分大小写进行检索。默认为'c'。）

__occurrence示例：
```sql
select regexp_substr('1,2,3','[^,]+',1,`1`) result from dual;
-- 1
select regexp_substr('1,2,3','[^,]+',1,`2`) result from dual;
-- 2
```

## connect by
```sql
select rownum from dual connect by rownum<=4; 
-- 1
-- 2
-- 3
-- 4
```
可见通过connect by可以构造连续的值 

## 计算分隔匹配组数量
通过原字符串长度和被替换后字符串长度相减，可以得到原字符串中的逗号数量，加1后得到需要提取的匹配字段数量
组长度 = `LENGTH ('1,2,3') - LENGTH (regexp_replace('1,2,3', ',', ''))+1` 

参考：https://blog.csdn.net/sofeien/article/details/80534557