---
title: freeze seal preventExtensions 对比
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JS
tags: 
location: HangZhou
---

---

比较项目|判断方法|添加新的属性|修改已有属性的值|删除已有属性|修改已有属性的Descriptor
:-|:-|-:|-:|-:|-:
freeze|Object.isFrozen()|N|N|N|N
seal|Object.isSealed()|N|Y|N|N
preventExtensions|Object.isExtensible()|N|Y|Y|Y