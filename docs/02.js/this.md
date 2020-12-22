---
title: this
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JS
tags: 
location: HangZhou
---

# Heading
[[toc]]

## 概述
在绝大多数情况下，函数的调用方式决定了this的值。this不能在执行期间被赋值，并且在每次函数被调用时this的值也可能会不同。ES5引入了bind方法来设置函数的this值，而不用考虑函数如何被调用的，ES2015 引入了支持this词法解析的箭头函数（它在闭合的执行环境内设置this的值）。

## 不同场景下的this指向

### 全局环境
无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象。
浏览器中，全局对象是window  node中，全局对象是global。以下均采用window代表全局对象。
```javascript
console.log(this === window); // true
```

### 函数（运行内）环境

- 简单调用
```javascript
function f1(){
  return this; //this指向window
}
f1() === window;

function f2(){
  "use strict"; // 严格模式
  return this; //this指向undefined
}

f2() === undefined; // true
```
- call or apply
如果要想把 this 的值从一个环境传到另一个，就要用 call 或者apply 方法。
```javascript
var obj = {a: 'fromObj'};
var a = 'fromWindow';
function fn(arg) {
  return this.a;  // this的值取决于函数的调用方式
}

fn();          // 'fromWindow'
fn.call(obj);  // 'fromObj'
fn.apply(obj); // 'fromObj'
```

- bind
ECMAScript 5 引入了 Function.prototype.bind。调用f.bind(obj)会创建一个与f具有相同函数体和作用域的函数，但是在这个新函数中，this将永久地被绑定到了bind的第一个参数，**无论这个函数是如何被调用的**。
```javascript
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); // bind只生效一次！
console.log(h()); // azerty

var o = {a:37, f, g, h};
console.log(o.f(), o.g(), o.h()); // 37, azerty, azerty
```

- 箭头函数
函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
this指向取决于外层函数的this指向。
```javascript
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

var obj = {foo};
console.log(obj.foo() === globalObject); // true

// 尝试使用call来设定this
console.log(foo.call(obj) === globalObject); // true

// 尝试使用bind来设定this
foo = foo.bind(obj);
console.log(foo() === globalObject); // true

//other eg：
var obj = {
  bar: function() {
    var x = (() => this);//它的this被永久绑定到了它外层函数bar的this
    return x;
  }
};

var fn = obj.bar();//被obj调用的，bar的this指向obj
fn() === obj //true

var fn2 = obj.bar;
fn2()() == window //true  被window调用的，bar的this指向objwindow
```

- 作为对象的方法
当函数作为对象里的方法被调用时，它们的 this 是调用该函数的对象。
this 的绑定只受最靠近的成员引用的影响。
```javascript
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};
console.log(o.f()); //37

var o = {prop: 37};
function independent() {
  return this.prop;
}
o.f = independent;
console.log(o.f()); //37

o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42
```

- 原型链中的 this
如果该方法存在于一个对象的原型链上，那么this指向的是调用这个方法的对象，就像该方法在对象上一样。
```javascript
var o = {
  f: function() { 
    return this.a + this.b; 
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

- getter 与 setter 中的 this
用作 getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象。

- 作为构造函数
当一个函数用作构造函数时（使用new关键字），它的this被绑定到正在构造的新对象。
**虽然构造器返回的默认值是this所指的那个对象，但它仍可以手动返回其他的对象（如果返回值不是一个对象或者null，则返回this对象）。**
```javascript
/*
 * 构造函数这样工作:
 *
 * function MyConstructor(){
 *   // 函数实体写在这里
 *   // 根据需要在this上创建属性，然后赋值给它们，比如：
 *   this.fum = "nom";
 *   // 等等...
 *
 *   // 如果函数具有返回对象的return语句，
 *   // 则该对象将是 new 表达式的结果。 
 *   // 否则，表达式的结果是当前绑定到 this 的对象。
 *   //（即通常看到的常见情况）。
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38
```

- 作为一个DOM事件处理函数
当函数被用作事件处理函数时，它的this指向触发事件的元素（一些浏览器在使用非addEventListener的函数动态添加监听函数时不遵守这个约定）。

- 作为一个内联事件处理函数
当代码被内联on-event 处理函数调用时，它的this指向监听器所在的DOM元素：

```css
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```
显示button

在这种情况下，没有设置内部函数的this，所以它指向 global/window 对象（即非严格模式下调用的函数未设置this时指向的默认对象）。
```css
<button onclick="alert((function(){return this})());">
  Show inner this
</button>
```
显示[object Window]

## **more**
[this MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
