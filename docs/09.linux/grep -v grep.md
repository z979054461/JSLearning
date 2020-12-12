---
title: grep -v grep
date: 2020-11-30
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - Linux
tags: 
  - grep 
location: HangZhou
---

# Heading
[[toc]]

- grep 是查找含有指定文本行的意思，比如grep test 就是查找含有test的文本的行
- grep -v 是反向查找的意思，比如 grep -v grep 就是查找不含有 grep 字段的行
通常使用`grep -v grep`用于排除grep进程本身