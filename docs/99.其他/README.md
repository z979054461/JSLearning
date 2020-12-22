---
title: Samples
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
location: HangZhou
---

# Heading
[[toc]]


## TODO-LIST
- [ ] 多行字符串怎么实现KMP算法？  
- [ ] CI/CD  
- [x] giuhub tag https://www.jianshu.com/p/36202c29e6ae  
- [ ] Node.js
- [ ] TypeScript
- [ ] 数据结构-排序
- [ ] 数据结构-图
- [ ] webpack
- [ ] 数据结构 - 链表实现（双链表、循环链表）

## 自定义容器
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 点击查看代码
这是一个详情块，在 IE / Edge 中不生效
:::

## 代码块中的语法高亮
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
行数区间: 例如 {5-8}, {3-10}, {10-17}
多个单行: 例如 {4,7,9}
行数区间与多个单行: 例如 {4,7-13,16,23-27,40}

## emoji
完整路径：https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json  

:tada: :100:
 

## 文件部分导入 
<<< @/docs/99.其他/pm2介绍.md#test2
<<< @/docs/99.其他/testsnippet.js#test2

## 流程图

**FLOW**

```mermaid
graph TD
    id[带文本的矩形]
    id4(带文本的圆角矩形)
    id3>带文本的不对称的矩形]
    id1{带文本的菱形}
    id2((带文本的圆形))
```

```mermaid
graph TD
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

### **Sequence**  
```mermaid
sequenceDiagram
Alice->>John: Hello John, how are you?
loop Healthcheck
    John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
```
### **Gantt**
```mermaid
gantt
section Section
Completed :done,    des1, 2014-01-06,2014-01-08
Active        :active,  des2, 2014-01-07, 3d
Parallel 1   :         des3, after des1, 1d
Parallel 2   :         des4, after des1, 1d
Parallel 3   :         des5, after des3, 1d
Parallel 4   :         des6, after des4, 1d
```

### **Class**

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
<<interface>> Class01
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
class Class10 {
  <<service>>
  int id
  size()
}
```

### **State**
```mermaid
stateDiagram-v2
[*] --> Still
Still --> [*]
Still --> Moving
Moving --> Still
Moving --> Crash
Crash --> [*]
```
### **Pie**
```mermaid
pie
"Dogs" : 386
"Cats" : 85
"Rats" : 15
```

### **User Journey**
```mermaid
  journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 3: Me
```

### **Git**
```mermaid
Coming soon!
```
### iframe
<iframe style="height: -webkit-fill-available;width: -webkit-fill-available;" src="//player.bilibili.com/player.html?aid=457634965&bvid=BV185411L7Vj&cid=253515113&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>