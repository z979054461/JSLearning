---
title: HTTP cookies
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JS
tags: 
location: HangZhou
---

HTTP Cookie（也叫Web Cookie或浏览器Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie使基于无状态的HTTP协议记录稳定的状态信息成为了可能。

## Cookie主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

Cookie曾一度用于客户端数据的存储，因当时并没有其它合适的存储办法而作为唯一的存储手段，但现在随着现代浏览器开始支持各种各样的存储方式，Cookie渐渐被淘汰。由于服务器指定Cookie后，浏览器的每次请求都会携带Cookie数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器API已经允许开发者直接将数据存储到本地，如使用 Web storage API （本地存储和会话存储）或 IndexedDB 。


## 会话期Cookie
会话期Cookie是最简单的Cookie：浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。会话期Cookie不需要指定过期时间（Expires）或者有效期（Max-Age）。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期Cookie也会被保留下来，就好像浏览器从来没有关闭一样。

## 持久性Cookie
和关闭浏览器便失效的会话期Cookie不同，持久性Cookie可以指定一个特定的过期时间（Expires）或有效期（Max-Age）。
```javascript
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```
::: tip
 当Cookie的过期时间被设定时，设定的日期和时间只与客户端相关，而不是服务端。
:::

## Cookie的Secure 和HttpOnly 标记

标记为 Secure 的Cookie只应通过被HTTPS协议加密过的请求发送给服务端。但即便设置了 Secure 标记，敏感信息也不应该通过Cookie传输，因为Cookie有其固有的不安全性，Secure 标记也无法提供确实的安全保障。从 Chrome 52 和 Firefox 52 开始，不安全的站点（http:）无法使用Cookie的 Secure 标记。

为避免跨域脚本 (XSS) 攻击，通过JavaScript的 Document.cookie API无法访问带有 HttpOnly 标记的Cookie，它们只应该发送给服务端。`如果包含服务端 Session 信息的 Cookie 不想被客户端 JavaScript 脚本调用，那么就应该为其设置 HttpOnly 标记`。
```javascript
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```
## Cookie的作用域
Domain 和 Path 标识定义了Cookie的作用域：即Cookie应该发送给哪些URL。

Domain 标识指定了哪些主机可以接受Cookie。如果不指定，默认为当前文档的主机（不包含子域名）。如果指定了Domain，则一般包含子域名。

例如，如果设置 Domain=mozilla.org，则Cookie也包含在子域名中（如developer.mozilla.org）。

Path 标识指定了主机下的哪些路径可以接受Cookie（该URL路径必须存在于请求URL中）。以字符 %x2F ("/") 作为路径分隔符，子路径也会被匹配。

例如，设置 Path=/docs，则以下地址都会匹配：
- /docs
- /docs/Web/
- /docs/Web/HTTP

## SameSite Cookies 实验性API
SameSite Cookie允许服务器要求某个cookie在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。

SameSite cookies是相对较新的一个字段，所有主流浏览器都已经得到支持。

下面是例子：
```javascript
Set-Cookie: key=value; SameSite=Strict
```
SameSite可以有下面三种值：
- None
浏览器会在同站请求、跨站请求下继续发送cookies，不区分大小写。
- Strict
浏览器将只发送相同站点请求的cookie(即当前网页URL与请求目标URL完全一致)。如果请求来自与当前location的URL不同的URL，则不包括标记为Strict属性的cookie。
- Lax
在新版本浏览器中，为默认选项，Same-site cookies 将会为一些跨站子请求保留，如图片加载或者frames的调用，但只有当用户从外部站点导航到URL时才会发送。如link链接

::: tip
以前，如果SameSite属性没有设置，或者没有得到运行浏览器的支持，那么它的行为等同于None，Cookies会被包含在任何请求中——包括跨站请求。

但是，在新版本的浏览器中，SameSite的默认属性是SameSite=Lax。换句话说，当Cookie没有设置SameSite属性时，将会视作SameSite属性被设置为Lax——这意味着Cookies将会在当前用户使用时被自动发送。如果想要指定Cookies在同站、跨站请求都被发送，那么需要明确指定SameSite为None
:::

## JavaScript通过Document.cookie访问Cookie
通过Document.cookie属性可创建新的Cookie，也可通过该属性访问非HttpOnly标记的Cookie。
```javascript
document.cookie = "yummy_cookie=choco"; 
document.cookie = "tasty_cookie=strawberry"; 
console.log(document.cookie); 
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```
请留意在安全节提到的安全隐患问题，JavaScript可以通过跨站脚本攻击（XSS）的方式来窃取Cookie。


## WebStorage和Cookie的区别

### 与服务器交互 
Web Storage 中的数据仅在存在本地，不与服务器发生交互。 
Cookie 中的数据会在浏览器和服务器中来回传递。 
### 存储空间 
Web Storage 存储空间更大，可以达到 5M ；Cookie 数据大小不超过 4KB 。 
### 接口 
Web Storage 提供 setItem ， getItem ， removeItem ， clear 等方法 
Cookie 需要自己封装 setCookie ， getCookie方法 
### 跨域问题 
cookie 需要指定作用域，不可以跨域调用，但 Web Storage 可以跨域调用 
### 存储时间 
cookie 中的数据在过期时间之前均有效， Web Storage 则不同， sessionStorage 中的 数据在当前浏览器窗口关闭后自动删除， localStorage 持久存储数据，除非主动删除数据
注： 但 Cookie 是不可以或缺的： Cookie 的作用是与服务器进行交互，作为 HTTP 规范的一部分而存在 ，而 Web Storage 仅仅是为了在本地 “ 存储 ” 更大容量数据而生。


https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies
