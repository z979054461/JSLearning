---
title: CSS样式的优先顺序
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - CSS
tags: 
location: HangZhou
---

# Heading
[[toc]]

`!important，使用此标记的CSS属性总是最优先的。 `
## !important->id->class->tag 
important 比 内联优先级高,但内联比 id 要高；如果两个规则的特殊性相同，那么后定义的会覆盖先定义的；
情况一：1.多重样式优先级 
多重样式（Multiple Styles）：如果外部样式、内部样式和内联样式同时应用于同一个元素，就是使多重样式的情况。
一般情况下，优先级如下：
`（外部样式）External style sheet <（内部样式）Internal style sheet <（内联样式）Inline style`
注意：有个例外的情况，就是如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。


内联样式表的权值最高 1000； 
ID 选择器的权值为 100 
Class 类选择器的权值为 10 
HTML 标签选择器的权值为 1
(1).css优先级
是由四个级别和各个级别出现的次数决定的，值从左到右，左面的最大，一级大于一级
3.需要注意
!important的优先级是最高的，但出现冲突时则需比较”四位数“
优先级相同时，则采用就近原则
继承得来的属性，其优先级最低
