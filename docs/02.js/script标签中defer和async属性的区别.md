---
title: script标签中defer和async属性的区别
date: 2021-03-04
lang: "zh-CN"
sidebar: "auto"
categories:
  - JS
tags:
  - defer
  - async
location: HangZhou
---

# Heading

[[toc]]

参考列表：

- [defer 和 async 的区别](https://segmentfault.com/q/1010000000640869)
- [async vs defer attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

![](/JS/script-defer.png)

## 概念解释

1. <script src="script.js"></script>

没有 defer 或 async，遇到 script 脚本，立即停止 html 解析，下载文件并执行。

1. <script async src="script.js"></script>

有 async，下载文件和 html 解析并发，下载完成后停止 html 解析，执行 js 脚本。

3. <script defer src="myscript.js"></script>

有 defer，下载文件和 html 解析并发，不会阻止 html 解析，html 解析完成后执行 js 脚本。

## 具体使用时机

Typically you want to use async where possible, then defer then no attribute. Here are some general rules to follow:

- If the script is _modular_ and _does not rely on any scripts_ then use `async`.
- If the script _relies upon or is relied upon by another script_ then use `defer`.
- If the script is _small and is relied upon by an async script_ then use an inline script with no attributes placed above the async scripts.

## 支持程度

IE9 and below have some pretty bad bugs in their implementation of defer such that the execution order isn’t guaranteed. _If you need to support <= IE9 I recommend not using defer at all_ and include your scripts with no attribute if the execution order matters. [Read the specifics here](https://github.com/h5bp/lazyweb-requests/issues/42).

## 执行顺序

![](/JS/script-order.png)
