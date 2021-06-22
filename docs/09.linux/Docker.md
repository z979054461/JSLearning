---
title: Docker
date: 2020-11-17
lang: "zh-CN"
sidebar: "auto"
categories:
  - Linux
tags:
  - Docker
location: HangZhou
---

# Heading

[[toc]]

## 进入指定容器

- docker ps
  ![](/docker1.png)
- docker exec -it 779b37744346 /bin/bash
  ![](/docker2.png)

## 拷贝(不管容器是否启动，都会生效)
- 从宿主机拷贝到容器
`docker cp mycontainer:/opt/file.txt /opt/test/`
- 从容器拷贝到宿主机
`docker cp /opt/test/ mycontainer:/opt/file.txt`