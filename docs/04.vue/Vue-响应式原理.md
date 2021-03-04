---
title: Vue-响应式原理
date: 2021-02-22
lang: 'zh-CN'
sidebar: 'auto'
location: HangZhou
---


# Heading
[[toc]]
源码版本vue：`2.6.10`
参考链接：https://segmentfault.com/a/1190000018659584

## 简易双向绑定

<<< @/src/vue/reactive.html

## 核心思想
**核心思想：Object.defineProperty(obj, key, {set, get})**
::: details Observer类，收集依赖&触发更新
```js
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
export class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that have this object as root $data

  constructor (value: any) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    def(value, '__ob__', this)
    // def如下
    // Object.defineProperty(value, '__ob__', {
    //     value: this,
    //     enumerable: !!enumerable,
    //     writable: true,
    //     configurable: true
    // })
    if (Array.isArray(value)) {
      if (hasProto) {
        //通过原型链添加方法
        protoAugment(value, arrayMethods)
      } else {
        //通过 def定义隐藏属性 添加方法
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
//对于对象的每一个属性，遍历转换成getter/setters
  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }

  /**
   * Observe a list of Array items.
   */
//遍历数组，调用new Observer(value)
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }
}
```
:::  

::: 定义响应式属性
```js
/**
 * Define a reactive property on an Object.
 */
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean //浅的
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get
  const setter = property && property.set
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {//target（Watcher） 目标watcher，同一时间只能有一个watcher被计算
        dep.depend()
        //收集依赖  Dep.target.addDep(this)
            // this.newDepIds.add(id) Array<Dep>
            // this.newDeps.push(dep) SimpleSet
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 当数组被访问时收集依赖，因为我们不能像对象一样拦截数组 ？？
 */            
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
          //这是为了判断NaN吧……
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)//如果是深
      dep.notify()//通知订阅者Watcher更新
    }
  })
}
```
:::

::: 当一个属性的setter触发时 notify通知订阅者
```js
  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()//订阅者
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
//触发Watcher的run方法执行job
//   update () {
//     /* istanbul ignore else */
//     if (this.lazy) {
//       this.dirty = true
//     } else if (this.sync) {
//       this.run()
//     } else {
//       queueWatcher(this)
//     }
//   }
    }
  }
```
:::  


