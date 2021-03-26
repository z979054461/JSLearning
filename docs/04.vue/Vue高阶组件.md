---
title: Vue高阶组件
date: 2021-03-26
lang: "zh-CN"
sidebar: "auto"
categories:
  - vue
  - HOC
tags:
location: HangZhou
---

# Heading

[[toc]]

参考列表：
[Vue 高阶组件](https://blog.csdn.net/z609373067/article/details/81258966)

## 高阶组件介绍

vue 高阶组件的认识，在 React 中组件是以复用代码实现的，而 Vue 中是以 mixins 实现，并且官方文档中也缺少一些高阶组件的概念,因为在 vue 中实现高阶组很困难，并不像 React 简单

所谓高阶组件其实就是一个高阶函数, 即返回一个组件函数的函数，Vue 中怎么实现呢？ 注意 高阶组件有如下特点

1. 高阶组件(HOC)应该是无副作用的纯函数，且不应该修改原组件,即原组件不能有变动
2. 高阶组件(HOC)不关心你传递的数据(props)是什么，并且新生成组件不关心数据来源
3. 高阶组件(HOC)接收到的 props 应该透传给被包装组件即直接将原组件 prop 传给包装组件
4. 高阶组件完全可以添加、删除、修改 props

## 高阶组件举例

Base.vue

```vue
<template>
  <div>
    <p @click="Click">props: {{ test }}</p>
  </div>
</template>
<script>
export default {
  name: "Base",
  props: {
    test: Number,
  },
  methods: {
    Click() {
      this.$emit("Base-click");
    },
  },
};
</script>
```

Vue 组件主要就是三点：`props`、`event` 以及 `slots`。对于 Base 组件 组件而言，它接收一个数字类型的 props 即 test，并触发一个自定义事件，事件的名称是：Base-click，没有 slots。我们会这样使用该组件：

```html
<Base @Base-click="xxxx" :test="100" /></Base>
```

现在我们需要 base-component 组件每次挂载完成的时候都打印一句话：haha，同时这也许是很多组件的需求，

### 使用 mixin 实现

所以按照 mixins 的方式，我们可以这样做:
consoleMixin.js:

```js
export default consoleMixin {
  mounted () {
    console.log('haha')
  }
}
```

然后在 Base 组件中将 consoleMixin 混入：
`mixins: [ consoleMixin ]`

### 使用高阶组件（HOC）实现

```js
function Console(WrappedComponent) {
  return {
    mounted() {
      console.log("haha");
    },
    props: WrappedComponent.props,
    render(h) {
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        // 手动更正 context
        .map((vnode) => {
          // Vue要求以下等式成立
          // this.$vnode.context === this.$vnode.componentOptions.children[0].context
          // 强制把slot的归属权给高阶组件 而不是 父组件 通过当前实例 _self 属性访问当实例本身，而不是直接使用 this，因为 this 是一个代理对象
          vnode.context = this._self; //绑定到高阶组件上
          return vnode;
        });

      return h(
        WrappedComponent,
        {
          on: this.$listeners,
          props: this.$props,
          attrs: this.$attrs,
        },
        slots
      );
    },
  };
}
```
