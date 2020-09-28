var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
// get方法可以继承
// let obj = Object.create(new Proxy(obj,{}));
// obj.foo // "GET foo"
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
//利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。
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
//如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。
//   VM3651:1 Uncaught TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected '123' but got '123')
//     at <anonymous>:1:7


//set
//用于校验
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
//用于防止私有变量访问
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

// 第四个参数receiver，指的是原始的操作行为所在的那个对象，一般情况下是proxy实例本身
const proxy = new Proxy({}, {
    set: function (obj, prop, value, receiver) {
        obj[prop] = receiver;
    }
});
const myObj = {};
Object.setPrototypeOf(myObj, proxy);

myObj.foo = 'bar';
myObj.foo === myObj // true


//apply
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


//has
// 1、如果原对象不可配置或者禁止扩展，这时has拦截会报错。
// Uncaught TypeError: 'has' on proxy: trap returned falsish for property 'a' but the proxy target is not extensible
//     at <anonymous>:1:5
// 2、has方法拦截的是HasProperty操作，而不是HasOwnProperty操作，即has方法不判断一个属性是对象自身的属性，还是继承的属性。
// 3、虽然for...in循环也用到了in运算符，但是has拦截对for...in循环不生效