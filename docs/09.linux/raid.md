---
title: RAID/mdadm与阵列状态
date: 2025-08-26
lang: 'zh-CN'
sidebar: 'auto'
categories:
  - Linux
tags:
  - RAID mdadm
location: HangZhou
---

# Heading

[[toc]]

## RAID/mdadm 与阵列状态

- 列出系统可识别的所有阵列行（用于生成 mdadm.conf）  
  `mdadm --detail --scan`
- 查看阵列详情（阵列级别、成员、事件计数、状态）  
  `mdadm --detail /dev/md1`
- 检查成员上的超级块（看 Array UUID、Name、Events 等）  
  `mdadm --examine /dev/sdb4`
- 阵列总体同步/重建进度  
  `cat /proc/mdstat`
- 将成员加回阵列（以系统区 md0 为例）  
  `mdadm --manage /dev/md0 --add /dev/sdb2`
- 自动组装所有已知阵列（系统启动时也会用到）  
  `mdadm --assemble --scan`
- 停止某阵列（卸载后再用）  
  `mdadm --stop /dev/mdX`
- 生成/更新 mdadm 配置（Asustor 建议两处都存）  
  `mdadm --detail --scan | tee /etc/mdadm.conf /usr/etc/mdadm.conf`

## 磁盘与文件系统识别/挂载

- 识别分区/阵列的 UUID、类型  
  `blkid`
- 分区表与磁盘布局（如果 lsblk 不在，可用 fdisk -l）  
  `lsblk -f`  
  `fdisk -l`
- 查看已挂载（ADM 无 findmnt，用这个）  
  `cat /proc/mounts | grep -E '(/dev/md|/volume|/share)'`
- 安全只读挂载一个卷（出问题时先只读查看）  
  `mkdir -p /mnt/test`
  `mount -o ro,noload /dev/md1 /mnt/test`
- 读写重挂  
  `mount -o remount,rw /volume1`
- 非破坏性检查 ext4 超级块/参数（不修复）  
  `tune2fs -l /dev/md1 | head`
  `e2fsck -n /dev/md1`
