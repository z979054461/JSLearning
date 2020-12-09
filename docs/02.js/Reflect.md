---
title: Reflect
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JS
tags: 
 - Reflect
location: HangZhou
---

## 概述
与大多数全局对象不同，Reflect不是一个构造函数。你不能将其与一个new运算符一起使用，或者将Reflect对象作为一个函数来调用。Reflect的所有属性和方法都是静态的（就像Math对象）。设计目的：
- 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
- 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。
- 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。
- Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。

## 静态方法
Reflect对象一共有 13 个静态方法。

```javascript
Reflect.apply(target, thisArg, args)
//通过指定的参数列表发起对目标(target)函数的调用,等同于Function.prototype.apply.call(func, thisArg, args)。
Reflect.construct(target, args)
//对构造函数进行 new 操作，相当于执行 new target(...args)。
Reflect.get(target, name, receiver)
//查找并返回target对象的name属性，如果没有该属性，则返回undefined。与从对象 (target[propertyKey]) 中读取属性类似，但它是通过一个函数执行来操作的。
//如果name属性部署了读取函数（getter），则读取函数的this绑定receiver
Reflect.set(target, name, value, receiver)
//设置target对象的name属性等于value。返回一个Boolean，如果更新成功，则返回true。
//如果name属性设置了赋值函数(setter)，则赋值函数的this绑定receiver。
Reflect.defineProperty(target, name, desc)
//基本等同于Object.defineProperty()方法，唯一不同是返回Boolean值。Object.defineProperty将会被逐渐废除。
Reflect.deleteProperty(target, name)
//等同于delete obj[name]，用于删除对象的属性。返回一个Boolean。如果删除成功，或者被删除的属性不存在，返回true；删除失败，被删除的属性依然存在，返回false。
Reflect.has(target, name)
//对应name in obj里面的in运算符。
Reflect.ownKeys(target)
//返回对象的所有属性(不包含继承属性)，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
Reflect.isExtensible(target)
//对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展(即是否能够添加新的属性)。
Reflect.preventExtensions(target)
//对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。
Reflect.getOwnPropertyDescriptor(target, name)
//基本等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者。
Reflect.getPrototypeOf(target)
//与 Object.getPrototypeOf() 方法是一样的。都是返回指定对象的原型（即，构造函数的[[Prototype]] 属性，或者自身的__proto__属性）。
Reflect.setPrototypeOf(target, prototype)
//用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。
```
上面这些方法的作用，大部分与Object对象的同名方法的作用都是相同的，而且它与Proxy对象的方法是一一对应的。

## more
[Reflect MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

[Reflect 阮一峰](http://es6.ruanyifeng.com/#docs/reflect)