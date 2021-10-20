---
title: 记录一些常用命令和问题
date: 2020-7-7
lang: "zh-CN"
sidebar: "auto"
categories:
  - git
tags:
  - git
location: HangZhou
---

[[toc]]

## 参考链接

- [git cherry-pick 教程](http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

## 常用命令解释

- git stash 备份当前的工作区的内容，从最近的一次提交中读取相关内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到 Git 栈中。
- git stash save {stashName} 对暂存stash命名
- git stash pop: 从 Git 栈中读取最近一次保存的内容，恢复工作区的相关内容。由于可能存在多个 Stash 的内容，所以用栈来管理，pop 会从最近的一个 stash 中读取内容并恢复。
- git stash list: 显示 Git 栈内的所有备份，可以利用这个列表来决定从那个地方恢复。
- git stash clear: 清空 Git 栈。此时使用 gitg 等图形化工具会发现，原来 stash 的哪些节点都消失了。
- git stash apply stash@{X} : 取出相应的暂存
- git stash drop stash@{X} : 将记录列表中取出的对应暂存记录删除
- git branch: 查看本地分支
- git branch -r 查看远程分支
- git branch -a 查看所有分支
- git checkout [master] 切换分支
- git checkout -b [iss53] 新建并切换分支
- git branch [iss53] 新建分支
- git branch -d [branchname] 删除分支
- git push origin --delete [branchname] 删除远程分支
- git fetch -p 清理本地无效分支（远程已删除）
- git reset --hard origin/test 指针重置到另一个分支，用于分支覆盖
- git cherry-pick 转移提交，在目标分支下执行
  - git cherry-pick feature 转移 feature 分支的最新一次 commit
  - git cherry-pick `<HashA>` `<HashB>` 转移多个 commit
  - git cherry-pick A..B commitA 到 commitB，不包括 A
  - git cherry-pick A^..B commitA 到 commitB，包括 A
- git clone `<Repo>` `<DestinationDirectory>` clone时重命名文件夹
- git symbolic-ref --short HEAD 获取当前分支名
- git rev-parse HEAD 获取当前commit
- git rev-parse --short HEAD  获取当前分支名

## 将原分支的最新代码合并到当前分支（当前有未提交代码）

1. git status
2. git stash
3. git rebase origin/XXX（原分支）
4. git push origin XXX（当前分支） -f
5. git stash pop
