---
title: cpuinfo
date: 2020-02-24
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - Linux
tags: 
  - cpuinfo
location: HangZhou
---

# Heading
[[toc]]

## 查询CPU信息的常用命令
总逻辑CPU数 = 物理CPU个数 * 每颗物理CPU的核数 * 超线程数  

- CPU个数：`cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l`
- 核数：`cat /proc/cpuinfo| grep "cpu cores"| uniq`
- 逻辑CPU总数：`cat /proc/cpuinfo| grep "processor"| wc -l`
- 型号：`cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c`