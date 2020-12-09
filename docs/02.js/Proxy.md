---
title: Proxy
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JS
tags: 
  - Proxy
  - ES6
location: HangZhou
---

# Proxy

Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义。

```js
var obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
        console.log("getting " + propKey + "!");
        return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log("setting " + propKey + "!");
        return Reflect.set(target, propKey, value, receiver);
    }
});
var reactive = function (obj) {
    return new Proxy(obj, {
        get: function (target, propKey, receiver) {
            console.log({ target: target, propKey: propKey, receiver: receiver });
            console.log("getting " + propKey);
            var ret = Reflect.get(target, propKey, receiver);
            return typeof ret !== 'object' || ret === null ? ret : reactive(obj);
        },
        set: function (target, propKey, value, receiver) {
            console.log({ target: target, propKey: propKey, value: value, receiver: receiver });
            console.log("setting " + propKey);
            return Reflect.set(target, propKey, value, receiver);
        }
    });
};
```

## 拦截操作

- `get(target, propKey, receiver)`：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
- `set(target, propKey, value, receiver)`：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
- `has(target, propKey)`：拦截propKey in proxy的操作，返回一个布尔值。
- `deleteProperty(target, propKey)`：拦截delete proxy[propKey]的操作，返回一个布尔值。
- `ownKeys(target)`：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一 个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- `getOwnPropertyDescriptor(target, propKey)`：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
- `defineProperty(target, propKey, propDesc)`：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- `preventExtensions(target)`：拦截Object.preventExtensions(proxy)，返回一个布尔值。
- `getPrototypeOf(target)`：拦截Object.getPrototypeOf(proxy)，返回一个对象。
- `isExtensible(target)`：拦截Object.isExtensible(proxy)，返回一个布尔值。
- `setPrototypeOf(target, proto)`：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- `apply(target, object, args)`：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
- `construct(target, args)`：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

### get
```js
var ObjEx = function (obj) {
    return new Proxy(obj, {
        get: function (target, propKey, receiver) {
            if (Reflect.has(target, propKey)) {
                return target[propKey];
            }
            else {
                throw new Error("no prop[" + propKey + "]");
            }
        }
    });
};
```
- get方法可以继承
```js
let proto = new Proxy({}, {
  get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});

let obj = Object.create(proto);
obj.foo // "GET foo"
```
- 数组读取负数的索引
```js
function createArray() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new Proxy(__spreadArrays(elements), {
        get: function (target, propKey, receiver) {
            propKey = Number(propKey);
            if (propKey >= -target.length && propKey <= target.length - 1) {
                // return propKey < 0 ? target[target.length + +propKey] : target[propKey]
                var index = propKey < 0 ? target.length + +propKey : propKey;
                return Reflect.get(target, index, receiver);
            }
            else {
                throw new RangeError('out of Array Range');
            }
        }
    });
}
```
- 利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。
```js
var pipe = function (value) {
    var funcStack = [];
    var oproxy = new Proxy({}, {
        get: function (pipeObject, fnName) {
            if (fnName === 'get') {
                return funcStack.reduce(function (val, fn) { return fn(val); }, value);
            }
            funcStack.push(window[fnName]);
            return oproxy;
        }
    });
    return oproxy;
};
```

- 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。
```
VM3651:1 Uncaught TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected '123' but got '123')
    at <anonymous>:1:7
```

### set

- 用于校验
```js
function ageValidator(obj) {
    return new Proxy(obj, {
        set: function (target, p, value, receiver) {
            if (p === 'age') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('age must be an Integer');
                }
                if (value < 0 || value > 200) {
                    throw new RangeError('age must between 0 and 200');
                }
            }
            return Reflect.set(target, p, value, receiver);
        }
    });
}
```
- 用于防止私有变量访问
```js
function privateGetSet(obj = {}) {
    const invariant = (key, action) => {
        if (key[0] === '_') {
            throw new Error(`Invalid attempt to ${action} private "${key}" property`);
        }
    }

    return new Proxy(obj, {
        get(target, key) {
            invariant(key, 'get');
            return target[key];
        },
        set(target, key, value) {
            invariant(key, 'set');
            target[key] = value;
            return true;
        }
    })
}
```
-  第四个参数receiver，指的是原始的操作行为所在的那个对象，一般情况下是proxy实例本身
```js
const proxy = new Proxy({}, {
    set: function (obj, prop, value, receiver) {
        obj[prop] = receiver;
    }
});
const myObj = {};
Object.setPrototypeOf(myObj, proxy);

myObj.foo = 'bar';
myObj.foo === myObj // true
```

### has
1. 如果原对象不可配置或者禁止扩展，这时has拦截会报错。
```
Uncaught TypeError: 'has' on proxy: trap returned falsish for property 'a' but the proxy target is not extensible
    at <anonymous>:1:5
```
2. has方法拦截的是HasProperty操作，而不是HasOwnProperty操作，即has方法不判断一个属性是对象自身的属性，还是继承的属性。
3. 虽然for...in循环也用到了in运算符，但是has拦截对for...in循环不生效
- 隐藏私有属性
```js
function hidePrivate(obj){
    return new Proxy(obj,{
        has:(target,p) =>{
            if(p[0] === '_'){
                return false
            }
            return Reflect.has(target,p)
        }
    })
}
```

### deleteProperty
- 目标对象自身的不可配置（configurable）的属性，不能被deleteProperty方法删除，否则报错。
```js
function protectPrivate(obj){
    return new Proxy(obj, {
        deleteProperty: (target, key) => {
            if (key[0] === '_') {
                throw new Error(`Invalid attempt to delete private "${key}" property`)
            }
            return Reflect.deleteProperty(target, key)
        }
    })
}
```

### ownKeys
- 拦截对象自身属性的读取操作。
  - Object.getOwnPropertyNames()
  - Object.getOwnPropertySymbols()
  - Object.keys()
  - for...in循环
- 三类属性会被ownKeys()方法自动过滤，不会返回
  - 目标对象上不存在的属性
  - 属性名为 Symbol 值
  - 不可遍历（enumerable）的属性
- ownKeys()方法返回的数组成员，只能是字符串或 Symbol 值。如果有其他类型的值，或者返回的根本不是数组，就会报错。
- 如果目标对象自身包含不可配置的属性，则该属性必须被ownKeys()方法返回，否则报错。
- 如果目标对象是不可扩展的（non-extensible），这时ownKeys()方法返回的数组之中，必须包含原对象的所有属性，且不能包含多余的属性，否则报错。

### getOwnPropertyDescriptor
- 拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined

### defineProperty
- 如果目标对象不可扩展（non-extensible），则defineProperty()不能增加目标对象上不存在的属性，否则会报错(尝试了一下没有报错)
- 如果目标对象的某个属性不可写（writable）或不可配置（configurable），则defineProperty()方法不得改变这两个设置。
```js
function preventAdd(obj) {
    return new Proxy(obj, {
        defineProperty: (target, key, desc) => {
            // return false
            desc = { writable: false }
            return Reflect.defineProperty(target, key, desc)
        }
    })
}
```

### preventExtensions
- 必须返回一个布尔值，否则会被自动转为布尔值。
- 只有目标对象不可扩展时（即Object.isExtensible(proxy)为false），proxy.preventExtensions才能返回true，否则会报错。
通常自己调用一下
```js
var proxy = new Proxy({}, {
  preventExtensions: function(target) {
    Reflect.preventExtensions(target);
    return true;
  }
});
```

### getPrototypeOf
- 拦截获取对象原型
  - Object.prototype.__proto__
  - Object.prototype.isPrototypeOf()
  - Object.getPrototypeOf()
  - Reflect.getPrototypeOf()
  - instanceof

- getPrototypeOf()方法的返回值**必须是对象或者null**，否则报错
- 如果目标对象不可扩展（non-extensible）， getPrototypeOf()方法**必须返回目标对象的原型对象**


### isExtensible
- 拦截Object.isExtensible()操作
- 只能返回布尔值，否则返回值会被自动转为布尔值
- 返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误

### setPrototypeOf
- 该方法只能返回布尔值，否则会被自动转为布尔值。
- 如果目标对象不可扩展（non-extensible），setPrototypeOf()方法不得改变目标对象的原型

```js
var handler = {
  setPrototypeOf (target, proto) {
      // proxy.__proto__ = {}
      // Object.setPrototypeOf(proxy, {});
    throw new Error('Changing the prototype is forbidden');
  }
};
```
### apply
```js
var twice = {
    apply(target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
    }
};
function sum(left, right) {
    return left + right;
};
var proxy = new Proxy(sum, twice);
proxy(1, 2) // 6
proxy.call(null, 5, 6) // 22
proxy.apply(null, [7, 8]) // 30
Reflect.apply(proxy, null, [9, 10]) // 38
```

### construct
- 拦截new命令
- 由于construct()拦截的是构造函数，所以它的目标对象必须是函数，否则就会报错
- 必须返回对象，否则会报错
- construct()方法中的this指向的是handler（普通函数），而不是实例对象

```js
function constructObj(obj) {
    const handler = {
        construct: function (target, argArray, newTarget) {
            console.log(this !== target, this === handler, target === newTarget, this === window)
            //箭头函数： true false false true
            //普通函数： true true false false
            // return new target(...argArray)
            return {
                value: argArray.toString()
            }
        }
    }
    return new Proxy(obj, handler)
}
```

## Proxy.revocable()
- Proxy.revocable()的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问
- 调用revoke函数将报错`VM2942:1 Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked`
```js
p = Proxy.revocable({},{})
// {
//     proxy: Proxy {}
//     revoke: ƒ ()
// }
```

## this 问题
- 正常情况下（箭头函数除外），Proxy代理的钩子函数中的this指向的是Proxy代理实例（construct钩子函数除外，该钩子函数中this指向的是handler)
- 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也`无法保证与目标对象的行为一致`。主要原因就是在 Proxy 代理的情况下，目标对象内部的`this关键字会指向 Proxy 代理`。
- 有些原生对象的内部属性(Date.getDate)，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性。this绑定原始对象，就可以解决这个问题。
```js
const target = new Date('2015-01-01');
const handler = {
    //TODO  为什么是拦截get而不是apply？
  get(target, prop) {
    if (prop === 'getDate') {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  }
};
const proxy = new Proxy(target, handler);
proxy.getDate() // 1
//不绑定this - TypeError: this is not a Date object.
```