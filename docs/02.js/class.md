---
title: class
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JS
tags: 
  - ES6
location: HangZhou
---

# ES6 class

## 静态方法、静态属性、私有方法、私有属性

```js
class Point {
    _count = 0;//实例属性的新书写方法
    #count = 0;//【提案】私有属性
    static classProp = 123;//【提案】静态属性
    static #classProp = 1234;//静态私有属性

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    //静态方法
    static classMethod() {
        return 'hello';
    }
    //【提案】私有方法
    #sum() {
        return this.#a + this.#b;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: '+value);
    }

    * [Symbol.iterator]() {
        for (let arg of this.args) {
            yield arg;
        }
    }
}
```

## new.target

```js
function Person(name) {
    // if (new.target !== undefined) {
    if (new.target === Person) {
        this.name = name;
    } else {
        throw new Error('必须使用 new 命令生成实例');
    }
}
```
Class 内部调用new.target，返回当前 Class。  
子类继承父类时，new.target会返回子类。  

## class继承

### extents
```js
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
```
子类必须在constructor方法中调用super方法，否则新建实例时会报错。  
ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。  
父类的静态方法，也会被子类继承。  
在子类的构造函数中，只有调用super之后，才可以使用this关键字。  
如果子类没有定义constructor方法，这个方法会被默认添加。  

### Object.getPrototypeOf
Object.getPrototypeOf方法可以用来从子类上获取父类。  

### super

- super作为函数调用时，代表父类的构造函数（ES6 要求，子类的构造函数必须执行一次super函数）
```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();//A.prototype.constructor.call(this)
  }
}
```
- super作为对象时，在普通方法中，指向父类的原型对象(BASE.prototype)；在静态方法中，指向父类(BASE)。  

由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。

### __proto__和prototype
每一个对象都有__proto__属性，指向对应的构造函数的prototype属性  
```js
    a = []
    a.__proto__ === Array.prototype //true
```
Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。  
1. 子类的__proto__属性，表示`构造函数的继承`，总是指向父类。  
2. 子类prototype属性的__proto__属性，表示`方法的继承`，总是指向父类的prototype属性。  
```js
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```
类的继承
```js
//一个有prototype属性的函数
class A {//由于函数都有prototype属性（除了Function.prototype函数），因此A可以是任意函数。
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);
// B.prototype.__proto__ = A.prototype;
// B.prototype = Object.create(A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);
// B.__proto__ = A;
// B = Object.create(A);

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

### 原生构造函数的继承
- Boolean()
- Number()
- String()
- Array()
- Date()
- Function()
- RegExp()
- Error()
- Object()

ES5 是先新建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。比如，Array构造函数有一个内部属性[[DefineOwnProperty]]，用来定义新属性时，更新length属性，这个内部属性无法在子类获取，导致子类的length属性行为不正常。  
ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。  
