---
title: transform
date: 2021-03-23
lang: "zh-CN"
sidebar: "auto"
categories:
  - CSS
tags:
location: HangZhou
---

# Heading

[[toc]]
参考列表：

- [transform-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function#matrix)

**transform-function** CSS 数据类型用于对元素的显示做变换。通常，这种变换可以由矩阵表示，并且可以使用每个点上的矩阵乘法来确定所得到的图像。

## matrix()

CSS 函数 matrix() 用六个指定的值来指定一个均匀的**二维（2D）变换矩阵**。这个矩形中的常量值是不作为参数进行传递的，其他的参数则在主要列的顺序中描述。

_matrix(a, b, c, d, tx, ty)_ 是 *matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)*的简写。

::: tip
matrix(a, b, c, d, tx, ty)
:::
将矩阵乘法用于上述坐标系中的每个点，一个变换就形成了：
![](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3440/c91ee9368732b144faf56fce6a68ffc4/transform_functions_generic_transformation_cart.png)

## matrix3d()

CSS 函数 matrix3d() 用一个 4 × 4 的齐次矩阵来描述一个**三维（3D）变换**。16 个参数都在主要列的顺序中描述。

::: tip
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
:::

## perspective()

TODO 没试出来有什么用……

**perspective()** 这个 CSS 函数定义了 z=0 平面与用户之间的距离，以便给三维定位元素一定透视度。当每个 3D 元素的 z>0 时会显得比较大，而在 z<0 时会显得比较小。其影响的程度由这个属性的值来决定。

::: tip
perspective(len)
该参数是一个 `<length>` 给定从用户（显示屏）到 z = 0 平面的距离。 它用于将透视图转换应用于元素。 如果它是 0 或负值，则不应用透视变换
:::

## rotate()

**The rotate()** CSS 函数 定义一个旋转属性，将元素在不变形的情况下旋转到不动点周围(如 `transform-origin` 属性所指定) 。 移动量由指定角度定义;如果为正值，则运动将为顺时针，如果为负值，则为逆时针 。 180° 的旋转称为`点反射` (point reflection)。

::: tip
rotate(a)
该参数表示 `<angle>` 旋转的角度。正角表示顺时针旋转，负角表示逆时针旋转。
:::

## rotate3d()

**rotate3d()** 这个 CSS 函数定义一个 3D 旋转功能，该旋转使元素能够绕固定轴移动而不变形。 其中移动量由指定角度定义；如果为正值，则运动将为顺时针，如果为负值，则为逆时针。
在三维空间中，旋转有三个自由度，各表示某条旋转轴。 _旋转轴由[x，y，z]向量定义，且过原点_（由 transform-origin CSS 属性定义）。 如果向量没有标准化，即它的三个坐标的平方之和不是 1，它将在内部被标准化。 不可标准化的向量，如空向量[0,0,0]，将导致旋转不被应用，但不会影响整个 CSS 属性。

::: tip
rotate3d(x, y, z, a)
旋转轴向量的 x、y、z 坐标，a:旋转的角度
:::

### rotateX()

**rotateX()** 这个 CSS 函数定义了将元素**在横坐标上旋转**而不使其变形的方法。 其运动的程度由指定的角度来定义；如果是正的，则为顺时针旋转，如果是负的，则是逆时针旋转。

_rotateX(a)是 rotate3D(1, 0, 0, a)的简写形式_

::: tip
rotateX(a)
a:旋转的角度
:::

### rotateY()

**rotateY()** 这个 CSS 函数定义了将元素**在纵坐标上旋转**而不使其变形的方法。 其运动的程度由指定的角度来定义；如果是正的，则为顺时针旋转，如果是负的，则是逆时针旋转。

_rotateY(a) 是 rotate3D(0, 1, 0, a) 的简写形式_

::: tip
rotateY(a)
a:旋转的角度
:::

### rotateZ()

**rotateZ()**这个 CSS 函数定义了将元素**在 z 轴上旋转**而不使其变形的方法。 其运动的程度由指定的角度来定义；如果是正的，则为顺时针旋转，如果是负的，则是逆时针旋转。

_rotateZ(a) 是 rotate3D(0, 0, 1, a) 的简写形式。_

::: tip
rotateZ(a)
a:旋转的角度
:::

## scale()

**scale()** CSS 函数可改变元素的大小。 它可以**增大或减小元素的大小**，并且缩放量由矢量定义，并且它可以使在一个方向上比另一个方向更多。

这种变换的特点是矢量的坐标可定义*在每个不同方向上各子完成一定比例缩放*。如果矢量的两个坐标相等，则缩放是均匀的或各向同性的，并且元素的形状被保留。在这种情况下，缩放函数定义了一个**同调变换**。

当超出 [-1, 1]范围外时，缩放将在坐标方向上放大元素；当在该范围内时，它在该方向收缩元素。当等于 1 时，它什么也不做，当它为负时，它执行点反射和大小修改。

::: tip
scale(sx) or
scale(sx, sy)
sx,sy： 横纵坐标,如果 sy 不存在，则其默认值为 sx，从而导致保持元素形状进行均匀缩放。
:::

## scale3d()

**scale3d()** CSS 函数可改变元素的大小。由于缩放的量由矢量定义，因此可以改变不同方向的尺寸。

这种变换的特点是矢量的坐标定义**在每个方向上完成多少缩放**。如果矢量的三个坐标都相等，则缩放是均匀的或各向同性的，并且保持元素形状。在这种情况下，这个缩放函数就是定义了一个同调变换。

当超出`[-1，1]`的范围之外时，缩放比例将在坐标方向上放大元素；当在`[-1，1]`范围内时，它在当前方向收缩元素。当等于 1 时，它什么也不做，当它为负时，它执行点反射和大小修改。

::: tip
scale3d(sx, sy, sz)
:::

### scaleX()

**scaleX()** 这个 CSS 函数是用一个常数因子来修改每个单元点的横坐标，在比例因子是 1 的情况下该函数是恒等变换。 缩放不是各向同性的，元素的角度也不守恒。
_scaleX(sx) 是 scale(sx, 1) 和 scale3d(sx, 1, 1) 的简写形式_

scaleX(-1) 表示通过原点的垂直轴定义轴对称（由 transform-origin 属性指定）。
::: tip
scaleX(s)
s:缩放因子
:::

### scaleY()

scaleY(sy) 是 scale(1, sy) 和 scale3d(1, sy, 1) 的简写形式。

### scaleZ()

scaleZ(sz) 是 scale3d(1, 1, sz) 的简写形式。

## skew()

**skew()** 这个 CSS 函数是一种用于**拉伸，或者说是平移**，该函数会使得在每个方向上扭曲元素上的每个点以一定角度。这是通过将每个坐标增加一个与指定角度成比例的值和到原点的距离来完成的。离原点越远，拉伸的值就越大。

::: tip
skew(ax) 或
skew(ax, ay)
ax:用于沿着横坐标扭曲元素的角度
ay:用于沿纵坐标扭曲元素的角度
:::

### skewX()

**skewX()** 这个 CSS 函数是用于水平拉伸，它将元素的每个点在**水平方向上扭曲一定角度**。这是通过将横坐标增加一个与指定角度成比例的值以及到原点的距离来完成的。离原点越远，拉伸的值就越大。

::: tip
skewX(a)
a:沿着横坐标扭曲元素的角度
:::

### skewY()

**skewY()** 这个 CSS 函数是用于垂直拉伸，它将元素的每个点在**垂直方向上扭曲一定角度**。这是通过将纵坐标增加一个与指定角度成比例的值以及到原点的距离来完成的。离原点越远，拉伸的值就越大。

::: tip
skewY(a)
a:沿着纵坐标扭曲元素的角度
:::

## translate()

**translate()** 这个 CSS 函数用于**移动元素在平面上的位置**。这种变换的特点是矢量的坐标定义了它在每个方向上的移动量。

::: tip
translate(tx)  
translate(tx, ty)
tx:移动矢量的横坐标
ty:移动矢量的纵坐标，默认为 0
:::

## translate3d()

**translate3d()** 这个 CSS 函数用于**移动元素在 3D 空间中的位置**。 这种变换的特点是三维矢量的坐标定义了它在每个方向上的移动量。
::: tip
translate3d(tx, ty, tz)
tx:移动矢量的横坐标 px 或%
ty:移动矢量的纵坐标 px 或%
tz:移动矢量的 z 轴坐标。该值不能使用百分比，如果使用会被认为是无效属性。
:::

### translateX()

translateX(tx) 是 translate(tx, 0) 的简写形式

### translateY()

translateY(ty) 是 translate(0, ty)的简写形式

### translateZ()

translateZ(tz) 是 translate3d(0, 0, tz) 的简写形式
