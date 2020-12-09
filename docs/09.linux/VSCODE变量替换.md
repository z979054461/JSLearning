---
title: VSCODE变量替换
date: 2020-11-11
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - other
tags: 
  - VSCODE
location: HangZhou
---

## 基础
1. 查找 Ctrl+F 
2. 查找替换 Ctrl+H 
3. 整个文件夹中查找 Ctrl+Shift+F 

快捷键：  
  - alt + enter 选中所有匹配项 
  - 选中后按方向键，可以移动所有光标 
    比如在所有匹配项Ctrl后面增加逗号：
    示例1：
    查找`Ctrl`,按`→`，输入`,`
    ```bash
    Ctrl+F
    Ctrl+H  
    Ctrl+Shift+F 
    ```
    =>
    ```bash
    Ctrl,+F
    Ctrl,+H  
    Ctrl,+Shift+F 
    ```
  - enter 向下移动选中项 
  - shift + enter 向上移动选中项 

## 进阶
  - `.*`表示任意`.`匹配任意一个字符，匹配`.`时使用转义`\.`
  - 
示例1：
    
    ```bash
    Ctrl+F
    Ctrl+H  
    Ctrl+Shift+F 
    ```
    `Ctrl\+.*`匹配`Ctrl+`开头的完整行
    `Ctrl\+(.*)`匹配`Ctrl`开头的完整行，替换值`【$1】`
    =>
    ```bash
    【F】
    【H  】
    【Shift+F 】
    ```
示例2：


[正则表达式官方API](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)
[VSCODE官方快捷键](https://code.visualstudio.com/docs/getstarted/keybindings)
