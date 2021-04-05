---
title: call apply bind
date: 2021-03-15
lang: "zh-CN"
sidebar: "auto"
categories:
  - JS
tags:
  - call
  - apply
  - bind
location: HangZhou
---

# Heading

[[toc]]

参考链接：

- [Function.prototype.call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Function.prototype.bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

`call()` 方法的语法和作用与 `apply()` 方法类似，只有一个区别，就是 **call() 方法接受的是一个参数列表**，而 **apply() 方法接受的是一个包含多个参数的数组**。
`bind()` 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

## Function.prototype.call()

**call()**方法使用一个`指定的 this 值`和`单独给出的一个或多个参数`来调用一个函数。

::: tip
function.call(thisArg, arg1, arg2, ...)
:::

this 可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

**可以使用 call 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）**

### 使用 call 方法调用父构造函数

在一个子构造函数中，你可以通过调用父构造函数的 call 方法来实现继承，类似于 Java 中的写法。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

var cheese = new Food("feta", 5);
var fun = new Toy("robot", 40);
```

### 使用 call 方法调用匿名函数

```js
var animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Fail" },
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    //匿名函数
    //为每个数据元素对象添加print方法
    this.print = function() {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }.call(animals[i], i));
}
```

### 使用 call 方法调用函数并且指定上下文的 'this'

```js
function greet() {
  var reply = [this.animal, "typically sleep between", this.sleepDuration].join(
    " "
  );
  console.log(reply);
}

var obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

### 使用 call 方法调用函数并且不指定第一个参数（argument）

如果没有传递第一个参数，this 的值将会被绑定为全局对象。

```js
var sData = "Wisen";

function display() {
  console.log("sData value is %s ", this.sData);
}

display.call(); // sData value is Wisen
```

::: warning
注意：在严格模式下，this 的值将会是 undefined。
:::

```js
"use strict";

var sData = "Wisen";

function display() {
  console.log("sData value is %s ", this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined
```

## Function.prototype.apply()

**apply()** 方法调用一个具有`给定this值`的函数，以及以`一个数组（或类数组对象）`的形式提供的参数。

::: tip
func.apply(thisArg, [argsArray])
:::

**与 call 一样，可以使用 apply 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）**

`apply` 可以使用数组字面量（array literal），如 `fun.apply(this, ['eat', 'bananas'])`，或数组对象， 如 `fun.apply(this, new Array('eat', 'bananas'))`。也可以使用 `arguments对象`作为 argsArray 参数。

### 用 apply 将数组各项添加到另一个数组

```js
var array = ["a", "b"];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### 使用 apply 和内置函数

对于一些*需要写循环以便历数组各项的需求*，我们可以用 apply 完成以避免循环。

下面是示例，我们将用 Math.max/Math.min 求得数组中的最大/小值。

```js
/* 找出数组中最大/小的数字 */
var numbers = [5, 6, 2, 3, 7];

/* 使用Math.min/Math.max以及apply 函数时的代码 */
var max = Math.max.apply(
  null,
  numbers
); /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* 对比：简单循环算法 */
(max = -Infinity), (min = +Infinity);

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}
```

::: warning
注意：如果按上面方式调用 apply，有超出 JavaScript 引擎参数长度上限的风险。一个方法传入过多参数（比如一万个）时的后果在不同 JavaScript 引擎中表现不同。（JavaScriptCore 引擎中有被硬编码的 参数个数上限：65536）。这是因为此限制（实际上也是任何用到超大栈空间的行为的自然表现）是不明确的。一些引擎会抛出异常，更糟糕的是其他引擎会直接限制传入到方法的参数个数，导致参数丢失。比如：假设某个引擎的方法参数上限为 4（实际上限当然要高得多）, 这种情况下，上面的代码执行后, 真正被传递到 apply 的参数为 5, 6, 2, 3 ，而不是完整的数组。
:::

如果你的参数数组可能非常大，那么推荐使用下面这种**混合策略：将数组切块后循环传入目标方法**：

```js
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```

### 使用 apply 来链接构造器

你可以使用 apply 来链接一个**对象构造器**，类似于 Java。在接下来的例子中我们会创建一个全局 Function 对象的 construct 方法 ，来使你能够在构造器中使用一个类数组对象而非参数列表。

没太懂具体有什么用，参考以下：  
[Using apply to chain constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_to_chain_constructors)

## Function.prototype.bind()

`bind()` 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。**bind()返回一个原函数的拷贝，并拥有指定的 this 值和初始参数**。

::: tip
function.bind(thisArg[, arg1[, arg2[, ...]]])
:::

**第一个参数 thisArg**是*调用绑定函数时作为 this 参数*传递给目标函数的值。 如果*使用 new 运算符*构造绑定函数，则忽略该值。当使用 bind 在 setTimeout 中创建一个函数（作为回调提供）时，_作为 thisArg 传递的任何原始值都将转换为 object_。如果 bind 函数的参数列表为空，或者 thisArg 是 null 或 undefined，_执行作用域的 this_ 将被视为新函数的 thisArg。

**bind()** 函数会创建一个新的**绑定函数**（bound function，BF）。绑定函数是一个 `exotic function object`（`怪异函数对象`，ECMAScript 2015 中的术语），它包装了原函数对象。调用**绑定函数**通常会导致**执行包装函数**。

**绑定函数**具有以下内部属性：

- [[BoundTargetFunction]] - 包装的函数对象
- [[BoundThis]] - 在调用包装函数时始终作为 this 值传递的值。
- [[BoundArguments]] - 列表，在对包装函数做任何调用都会优先用列表元素填充参数列表。
- [[Call]] - 执行与此对象关联的代码。通过函数调用表达式调用。内部方法的参数是一个 this 值和一个包含通过调用表达式传递给函数的参数的列表。

当调用绑定函数时，它调用 [[BoundTargetFunction]] 上的内部方法 [[Call]]，就像这样 `Call(boundThis, args)`。其中，boundThis 是 [[BoundThis]]，args 是 **[[BoundArguments]] 加上通过函数调用传入的参数列表**。

**绑定函数也可以使用 new 运算符构造**，它会表现为目标函数已经被构建完毕了似的。提供的 this 值会被忽略，但前置参数仍会提供给模拟函数。

### 创建绑定函数

```js
this.x = 9; // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() {
    return this.x;
  },
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

### 偏函数

bind() 的另一个最简单的用法是**使一个函数拥有预设的初始参数**。只要将这些参数（如果有的话）作为 bind() 的参数写在 this 后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。
(可以了解下函数柯里化)

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var result1 = addArguments(1, 2); // 3

// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = list.bind(null, 37);

// 创建一个函数，它拥有预设的第一个参数
var addThirtySeven = addArguments.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]

var result2 = addThirtySeven(5);
// 37 + 5 = 42

var result3 = addThirtySeven(5, 10);
// 37 + 5 = 42 ，第二个参数被忽略
```

### 配合 setTimeout
在默认情况下，*使用 window.setTimeout() 时，this 关键字会指向 window （或 global）对象*。当类的方法中需要 this 指向类的实例时，你可能需要显式地把 this 绑定到回调函数，就不会丢失该实例的引用。
当然ES6引入了**箭头函数**可以更好地解决这个问题。
```js
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 在 1 秒钟后声明 bloom
LateBloomer.prototype.bloom = function() {
  //当前环境的this是bloom被调用时的this
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();  // 一秒钟后, 调用 'declare' 方法
```

### 作为构造函数使用的绑定函数

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

//使用bind改变构造函数
YAxisPoint = Point.bind({}, 0/*x*/);//或者 YAxisPoint = Point.bind(null, 0/*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
//第二个参数42会被忽略
new YAxisPoint(17, 42) instanceof Point; // true

```

如果你希望一个绑定函数要么只能用 new 操作符，要么只能直接调用，那你**必须在目标函数上显式规定这个限制**。

### 快捷调用
bind() 为一个需要**特定的 this 值**的函数创建一个**捷径（shortcut）**

可以用 Array.prototype.slice 来将一个类似于数组的对象（array-like object）转换成一个真正的数组  
```js
var slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

用 bind()可以使这个过程变得简单。在下面这段代码里面，slice 是 Function.prototype 的 apply() 方法的绑定函数，并且**将 Array.prototype 的 slice() 方法作为 this 的值**。这意味着我们压根儿用不着上面那个 apply()调用了。

```js
// 与前一段代码的 "slice" 效果相同
var slice = Function.prototype.apply.bind(Array.prototype.slice);
// ...

slice(arguments);
```