---
title: Storage
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JS
tags: 
 - sessionStorage
 - localStorage
location: HangZhou
---


Fired when a storage area (localStorage or sessionStorage) has been modified in the context of another document.
Also available via the onstorage 属性。
- Window.onstorage
    Called when there is a change in session storage or local storage. See storage event
- StorageEvent
    Property	Type	Description
    target 只读	EventTarget	事件目标(DOM 树中的最大目标)
    type 只读	DOMString	事件的类型
    bubbles 只读	Boolean	事件通常是否会出现冒泡
    cancelable 只读	Boolean	事件是否可取消
    key 只读	DOMString (string)	键更改时
    oldValue 只读	DOMString (string)	正在更改键的旧值
    newValue 只读	DOMString (string)	正在更改键的新值
    url 只读	DOMString (string)	键更改的文档的地址
    storageArea 只读	Storage	受影响的存储对象

## sessionStorage 
sessionStorage 属性允许你访问一个 session Storage 对象。它与 localStorage 相似，不同之处在于 localStorage 里面存储的数据没有过期时间设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。`在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话`，这点和 session cookies 的运行方式不同。

应该注意，存储在sessionStorage或localStorage中的数据特定于该页面的协议。
```javascript
// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value');

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key');

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key');

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();
```
## localStorage 
只读的localStorage 属性允许你访问一个Document 源（origin）的对象 Storage；存储的数据将保存在浏览器会话中。localStorage 类似 sessionStorage，但其区别在于：`存储在 localStorage 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 sessionStorage 的数据会被清除`。

应注意，无论数据存储在 localStorage 还是 sessionStorage ，它们都特定于页面的协议。

另外，localStorage 中的键值对总是以字符串的形式存储。 (需要注意, 和js对象相比, 键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).
```javascript
localStorage.setItem('myCat', 'Tom');
let cat = localStorage.getItem('myCat');
localStorage.removeItem('myCat');
// 移除所有
localStorage.clear();
```