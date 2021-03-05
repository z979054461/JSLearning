---
title: requestAnimationFrame
date: 2021-03-05
lang: "zh-CN"
sidebar: "auto"
categories:
  - JS
tags:
  - requestAnimationFrame
location: HangZhou
---

# Heading

[[toc]]

参考链接：

- [window.requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

## 概念

`window.requestAnimationFrame()` 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在**浏览器下一次重绘之前执行**

::: tip
注意：若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 window.requestAnimationFrame()
:::

当你准备更新动画时你应该调用此方法。这将使浏览器在下一次重绘之前调用你传入给该方法的动画函数(即你的回调函数)。回调函数执行次数**通常是每秒 60 次**，但在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。为了提高性能和电池寿命，因此在大多数浏览器里，当 requestAnimationFrame() **运行在后台标签页或者隐藏的\<iframe\> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命**。

回调函数会被传入[DOMHighResTimeStamp](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp)参数，DOMHighResTimeStamp 指示当前被 requestAnimationFrame() 排序的回调函数被触发的时间。在**同一个帧中的多个回调函数，它们每一个都会接受到一个相同的时间戳**，即使在计算上一个回调函数的工作负载期间已经消耗了一些时间。该时间戳是一个十进制数，单位毫秒，最小精度为 1ms(1000μs)。

::: warning
请确保总是使用第一个参数(或其它获得当前时间的方法)计算每次调用之间的时间间隔，否则动画在高刷新率的屏幕中会运行得更快。请参考下面例子的做法。
:::

## 语法

```js
window.requestAnimationFrame(callback);
```

- 参数
  - callback 下一次重绘之前更新动画帧所调用的函数(即上面所说的回调函数)。该回调函数会被传入 DOMHighResTimeStamp 参数，该参数与 performance.now()的返回值相同，它表示 requestAnimationFrame() 开始去执行回调函数的时刻。
- 返回值
  - 一个 long 整数，请求 ID ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给 `window.cancelAnimationFrame()` 以取消回调函数。
 
## 例子

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start;

function step(timestamp) {
  if (start === undefined) start = timestamp;
  const elapsed = timestamp - start;

  //这里使用`Math.min()`确保元素刚好停在200px的位置。
  element.style.transform =
    "translateX(" + Math.min(0.1 * elapsed, 200) + "px)";

  if (elapsed < 2000) {
    // 在两秒后停止动画
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

::: details 点击查看代码
<<<@/src/CSS/requestAnimationFrame.html
:::