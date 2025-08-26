---
title: rsync
date: 2025-08-26
lang: 'zh-CN'
sidebar: 'auto'
categories:
  - Linux
tags:
  - rsync
location: HangZhou
---

# Heading

[[toc]]

## rsync 简介

rsync 是一个高效的文件同步/复制工具，支持本地目录之间、经由 SSH 的远程主机之间，或通过自身守护进程协议进行增量传输。它以“只传变化的部分”为核心，常用于备份、镜像、部署和数据分发。

核心特点

- 增量同步：使用时间戳/大小判断变化，必要时计算块级差异，只传改动内容，节省带宽。
- 断点续传与临时文件：支持中断后继续；可将更新先写入临时文件，完成后原子替换。
- 保持属性：可保留权限、所有者、时间戳、硬链接、ACL、xattr 等。
- 多种传输方式：本地文件系统、通过 SSH（最常用）、或 rsync 守护进程（rsync://）。
- 选择性同步：灵活的 include/exclude 规则、按列表同步、跨平台可用。
- 安全与可靠：用 SSH 时传输加密；可校验文件一致性；支持“试运行”。

## 常用选项

- -a 相当于 -rlptgoD（递归、保留权限/时间/所有者/组/设备等）
- -v 详细输出；
- -h 人类可读大小；
- --progress 或 --info=progress2 显示整体进度
- -z 压缩（慢网有利，快网/CPU 受限时可不加）

## 同步文件夹

- 普通同步
  `rsync -a --delete <源目录> <目标目录>`

- 展示进度
  `rsync -ah --delete --info=progress2 --inplace <源目录> <目标目录>`
