---
title: css实现一侧固定另一侧自适应
date: 2021-03-04
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - CSS
tags: 
location: HangZhou
---

# Heading
[[toc]]

html布局如下
::: details 点击查看代码
<<<@/src/CSS/autoResize.html
:::

## margin + float
对固定宽度的元素设置float，自适应的一侧（块级元素）通过margin避免两元素的重叠，本质还是利用块级元素具有默认继承父元素宽度的特性。
<<<@/src/CSS/autoResize.css

## 绝对定位
对自适应元素设置absolute定位，通过left： 200px， right： 0对自适应元素进行宽度拉伸

<<<@/src/CSS/autoResize1.css

## flex
<<<@/src/CSS/autoResize2.css

## 其他
calc( 100% - 200px )
calc( 100vw - 200px )
TODO  不知道%计算宽度为什么会有5px差距  
<<<@/src/CSS/autoResize3.css