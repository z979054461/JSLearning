---
title: HTTP的发展
date: 2021-03-09
lang: "zh-CN"
sidebar: "auto"
categories:
  - JS
tags:
  - HTTP1.0
  - HTTP1.1
  - HTTP2.0
location: HangZhou
---

# Heading

[[toc]]

参考列表：

- [HTTP1.0、HTTP1.1 和 HTTP2.0 的区别](https://www.cnblogs.com/heluan/p/8620312.html)
- [HTTP 的发展](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#http2_-_%E4%B8%BA%E4%BA%86%E6%9B%B4%E4%BC%98%E5%BC%82%E7%9A%84%E8%A1%A8%E7%8E%B0)

**HTTP**（HyperText Transfer Protocol）是万维网（World Wide Web）的基础协议。自 Tim Berners-Lee 博士和他的团队在 1989-1991 年间创造出它以来，HTTP 已经发生了太多的变化，在保持协议简单性的同时，不断扩展其灵活性。如今，HTTP 已经从一个只在实验室之间交换文件的早期协议进化到了可以传输图片，高分辨率视频和 3D 效果的现代复杂互联网协议。

## 万维网的发明

1989 年， 当时在 CERN 工作的 Tim Berners-Lee 博士写了一份关于建立一个通过网络传输超文本系统的报告。这个系统起初被命名为 Mesh，在随后的 1990 年项目实施期间被更名为万维网（World Wide Web）。它在现有的 TCP 和 IP 协议基础之上建立，由四个部分组成：

- 一个用来表示超文本文档的文本格式，_超文本标记语言（HTML）_。
- 一个用来交换超文本文档的简单协议，_超文本传输协议（HTTP）_。
- 一个显示（以及编辑）超文本文档的客户端，即网络浏览器。第一个网络浏览器被称为 _WorldWideWeb_。
- 一个服务器用于提供可访问的文档，即 _httpd_ 的前身。

这四个部分完成于 1990 年底，且第一批服务器已经在 1991 年初在 CERN 以外的地方运行了。 1991 年 8 月 16 日，Tim Berners-Lee 在公开的超文本新闻组上发表的文章被视为是万维网公共项目的开始。

HTTP 在应用的早期阶段非常简单，后来被称为 **HTTP/0.9**，有时也叫做单行（one-line）协议。

## HTTP/0.9 – 单行协议

最初版本的 HTTP 协议并没有版本号，后来它的版本号被定位在 0.9 以区分后来的版本。 **HTTP/0.9 极其简单：请求由单行指令构成，以唯一可用方法 GET 开头，其后跟目标资源的路径**（一旦连接到服务器，协议、服务器、端口号这些都不是必须的）。

::: tip
GET /mypage.html
:::

响应也极其简单的：只包含响应文档本身。

::: tip

<HTML>
这是一个非常简单的HTML页面
</HTML>
:::

跟后来的版本不同，**HTTP/0.9 的响应内容并不包含 HTTP 头，这意味着只有 HTML 文件可以传送，无法传输其他类型的文件；也没有状态码或错误代码**：一旦出现问题，一个特殊的包含问题描述信息的 HTML 文件将被发回，供人们查看。

## HTTP/1.0 – 构建可扩展性

由于 HTTP/0.9 协议的应用十分有限，浏览器和服务器迅速扩展内容使其用途更广：

- *协议版本信息*现在会随着每个请求发送（HTTP/1.0 被追加到了 GET 行）。
- *状态码*会在响应开始时发送，使浏览器能了解请求执行成功或失败，并相应调整行为（如更新或使用本地缓存）。
- 引入了*HTTP 头*的概念，无论是对于请求还是响应，允许传输元数据，使协议变得非常灵活，更具扩展性。
- 在新 HTTP 头的帮助下，_具备了传输除纯文本 HTML 文件以外其他类型文档的能力_（感谢 Content-Type 头）。

::: details 一个典型的请求看起来就像这样：
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html

<HTML>
一个包含图片的页面
  <IMG SRC="/myimage.gif">
</HTML>
:::

::: details 接下来是第二个连接，请求获取图片：
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(这里是图片内容)
:::

在 1991-1995 年，这些新扩展并没有被引入到标准中以促进协助工作，而仅仅作为一种尝试：服务器和浏览器添加这些新扩展功能，但出现了大量的互操作问题。直到*1996 年 11 月*，为了解决这些问题，一份新文档（RFC 1945）被发表出来，用以描述如何操作实践这些新扩展功能。文档 RFC 1945 _定义了 HTTP/1.0，但它是狭义的，并不是官方标准_。

## HTTP/1.1 – 标准化的协议

HTTP/1.0 多种不同的实现方式在实际运用中显得有些混乱，自 1995 年开始，即 HTTP/1.0 文档发布的下一年，就开始修订 HTTP 的第一个标准化版本。在 _1997_ 年初，_HTTP1.1 标准发布_，就在 HTTP/1.0 发布的几个月后。

HTTP/1.1 消除了大量歧义内容并引入了多项改进：

- **连接可以复用**，节省了多次打开 TCP 连接加载网页文档资源的时间。
- 增加**管线化技术**，支持**长连接**（PersistentConnection），允许在第一个应答被完全发送之前就发送第二个请求，以降低通信延迟。在一个 TCP 连接上可以传送多个 HTTP 请求和响应，减少了建立和关闭连接的消耗和延迟，在 HTTP1.1 中默认开启`Connection： keep-alive`，一定程度上弥补了 HTTP1.0 每次请求都要创建连接的缺点。
- 支持**响应分块**。
- 引入额外的**缓存控制机制**。在 HTTP1.0 中主要使用 header 里的`If-Modified-Since`,`Expires`来做为缓存判断的标准，HTTP1.1 则*引入了更多的缓存控制策略*例如`Entity tag`，`If-Unmodified-Since`, `If-Match`, `If-None-Match`等更多可供选择的缓存头来控制缓存策略。
- 引入**内容协商机制**，包括语言，编码，类型等，并允许客户端和服务器之间约定以最合适的内容进行交换。
- **Host 头**，能够*使不同域名配置在同一个 IP 地址的服务器上*。在 HTTP1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（`hostname`）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（`Multi-homed Web Servers`），并且它们共享一个 IP 地址。HTTP1.1 的请求消息和响应消息都应支持 Host 头域，且请求消息中如果没有 Host 头域会报告一个错误（`400 Bad Request`）。
- **资源的部分请求**。HTTP1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持*断点续传*功能，HTTP1.1 则在请求头引入了`range`头域，它允许只请求资源的某个部分，即返回码是 206（`Partial Content`），这样就方便了开发者自由的选择以便于充分利用带宽和连接。
- **错误通知的管理**。在 HTTP1.1 中*新增了 24 个错误状态响应码*，如 409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。

::: details 一个典型的请求流程， 所有请求都通过一个连接实现，看起来就像这样：
GET /en-US/docs/Glossary/Simple*header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/\_;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)

GET /static/img/header-background.png HTTP/1.1
Host: developer.cdn.mozilla.net
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: _/_
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

(image content of 3077 bytes)
:::

HTTP/1.1 在 1997 年 1 月以 RFC 2068 文件发布。

## 超过 15 年的扩展

由于 HTTP 协议的可扩展性 – 创建新的头部和方法是很容易的 – 即使 HTTP/1.1 协议进行过两次修订，RFC 2616 发布于 1999 年 6 月，而另外两个文档 RFC 7230-RFC 7235 发布于 2014 年 6 月，作为 HTTP/2 的预览版本。**HTTP 协议已经稳定使用超过 15 年了**。

### HTTP 用于安全传输

HTTP 最大的变化发生在 1994 年底。HTTP 在基本的 TCP/IP 协议栈上发送信息，网景公司（Netscape Communication）在此基础上创建了一个额外的加密传输层：**SSL** 。SSL 1.0 没有在公司以外发布过，但 SSL 2.0 及其后继者 SSL 3.0 和 SSL 3.1 允许通过加密来保证服务器和客户端之间交换消息的真实性，来创建电子商务网站。SSL 在标准化道路上最终成为 **TLS**,随着版本 1.0, 1.1, 1.2 的出现成功地关闭漏洞。TLS 1.3 目前正在形成。

与此同时，人们对一个加密传输层的需求也愈发高涨：因为 Web 最早几乎是一个学术网络，相对信任度很高，但如今不得不面对一个险恶的丛林：广告客户、随机的个人或者犯罪分子争相劫取个人信息，将信息占为己有，甚至改动将要被传输的数据。随着通过 HTTP 构建的应用程序变得越来越强大，可以访问越来越多的私人信息，如地址簿，电子邮件或用户的地理位置，即使在电子商务使用之外，对 TLS 的需求也变得普遍。

### HTTP 用于复杂应用

Tim Berners-Lee 对于 Web 的最初设想不是一个只读媒体。 他设想一个 Web 是可以远程添加或移动文档，是一种分布式文件系统。 大约 1996 年，HTTP 被扩展到允许创作，并且创建了一个名为 WebDAV 的标准。 它进一步扩展了某些特定的应用程序，如 CardDAV 用来处理地址簿条目，CalDAV 用来处理日历。 但所有这些 \*DAV 扩展有一个缺陷：它们必须由要使用的服务器来实现，这是非常复杂的。并且他们在网络领域的使用必须保密。

在 2000 年，一种*新的使用 HTTP 的模式*被设计出来：representational state transfer (或者说 **REST**)。 **由 API 发起的操作不再通过新的 HTTP 方法传达，而只能通过使用基本的 HTTP / 1.1 方法访问特定的 URI**。 这允许任何 Web 应用程序通过提供 API 以允许查看和修改其数据，而无需更新浏览器或服务器：all what is needed was embedded in the files served by the Web sites through standard HTTP/1.1。 REST 模型的缺点在于每个网站都定义了自己的非标准 RESTful API，并对其进行了全面的控制；不同于 \*DAV 扩展，客户端和服务器是可互操作的。 RESTful API 在 2010 年变得非常流行。

自 2005 年以来，可用于 Web 页面的 API 大大增加，其中几个 API 为特定目的扩展了 HTTP 协议，大部分是新的特定 HTTP 头：

- Server-sent events，服务器可以偶尔推送消息到浏览器。
- WebSocket，一个新协议，可以通过升级现有 HTTP 协议来建立。

### 放松 Web 的安全模型

HTTP 和 Web 安全模型--同源策略是互不相关的。事实上，当前的 Web 安全模型是在 HTTP 被创造出来后才被发展的！这些年来，已经证实了它如果能通过在特定的约束下移除一些这个策略的限制来管的宽松些的话，将会更有用。这些策略导致大量的成本和时间被花费在通过转交到服务端来添加一些新的 HTTP 头来发送。这些被定义在了 Cross-Origin Resource Sharing (**CORS**) or the Content Security Policy (**CSP**)规范里。

不只是这大量的扩展，很多的其他的头也被加了进来，有些只是实验性的。比较著名的有 Do Not Track (DNT) 来控制隐私，X-Frame-Options, 还有很多。

### HTTP 的基本优化

影响一个 HTTP 网络请求的因素主要有两个：**带宽和延迟**。

- **带宽**：如果说我们还停留在拨号上网的阶段，带宽可能会成为一个比较严重影响请求的问题，但是现在网络基础建设已经使得带宽得到极大的提升，我们不再会担心由带宽而影响网速，那么就只剩下延迟了。
- **延迟**：

  - _浏览器阻塞（HOL blocking）_：浏览器会因为一些原因阻塞请求。浏览器对于同一个域名，同时只能有 4 个连接（这个根据浏览器内核不同可能会有所差异），超过浏览器最大连接数限制，后续请求就会被阻塞。

  - _DNS 查询（DNS Lookup）_：浏览器需要知道目标服务器的 IP 才能建立连接。将域名解析为 IP 的这个系统就是 DNS。这个通常可以利用 DNS 缓存结果来达到减少这个时间的目的。

  - _建立连接（Initial connection）_：HTTP 是基于 TCP 协议的，浏览器最快也要在第三次握手时才能捎带 HTTP 请求报文，达到真正的建立连接，但是这些连接无法复用会导致*每次请求都经历三次握手和慢启动*。三次握手在高延迟的场景下影响较明显，慢启动则对文件类大请求影响较大。

## HTTPS 与 HTTP 的一些区别

- HTTPS 协议*需要到 CA 申请证书*，一般免费证书很少，需要交费。
- HTTP 协议运行在 TCP 之上，所有传输的内容都是明文，HTTPS 运行在 SSL/TLS 之上，SSL/TLS 运行在 TCP 之上，所有传输的*内容都经过加密*的。
- HTTP 和 HTTPS 使用的是*完全不同的连接方式*，用的端口也不一样，前者是 80，后者是 443。
- HTTPS 可以有效的防止运营商劫持，解决了*防劫持*的一个大问题。

## HTTP/2 - 为了更优异的表现

这些年来，网页愈渐变得的复杂，甚至演变成了独有的应用，可见媒体的播放量，增进交互的脚本大小也增加了许多：更多的数据通过 HTTP 请求被传输。**HTTP/1.1 链接需要请求以正确的顺序发送，理论上可以用一些并行的链接（尤其是 5 到 8 个），带来的成本和复杂性堪忧。比如，HTTP 管线化（pipelining）就成为了 Web 开发的负担。**

在 2010 年到 2015 年，谷歌通过实践了一个实验性的*SPDY 协议*，证明了一个在客户端和服务器端交换数据的另类方式。其收集了浏览器和服务器端的开发者的焦点问题。明确了响应数量的增加和解决复杂的数据传输，**SPDY 成为了 HTTP/2 协议的基础**。

**HTTP/2 在 HTTP/1.1 有几处基本的不同:**

- HTTP/2 是**二进制协议**而不是文本协议。不再可读，也不可无障碍的手动创建，改善的优化技术现在可被实施。
- **多路复用**。并行的请求能在同一个链接中处理，_移除了 HTTP/1.x 中顺序和阻塞的约束_。
- **headers 压缩**。因为 headers 在一系列请求中常常是相似的，通讯双方各自 cache 一份 header fields 表，既避免了重复 header 的传输，又减小了需要传输的大小。
- **服务器推送**（server push）。其允许服务器在客户端缓存中填充数据，通过一个叫服务器推送（server push）的机制来提前请求。例如我的网页有一个 sytle.css 的请求，在客户端收到 sytle.css 数据的同时，服务端会将 sytle.js 的文件推送给客户端，当客户端再次尝试获取 sytle.js 时就可以直接从缓存中获取到，不用再发请求了。
- **请求优先级**（request prioritization）。多路复用带来一个新的问题是，在连接共享的基础之上有可能会导致关键请求被阻塞。SPDY 允许给每个 request 设置优先级，这样重要的请求就会优先得到响应。比如浏览器加载首页，首页的 html 内容应该优先展示，之后才是各种静态资源文件，脚本文件等加载，这样可以保证用户能第一时间看到网页内容。

**HTTP/2 和 SPDY 的区别：**

- HTTP/2 _支持明文 HTTP 传输_，而 SPDY 强制使用 HTTPS
- HTTP/2 *消息头的压缩算法*采用 HPACK http://http2.github.io/http2-spec/compression.html，而非 SPDY 采用的 DEFLATE http://zh.wikipedia.org/wiki/DEFLATE

在 2015 年 5 月正式标准化后，HTTP/2 取得了极大的成功，在 2016 年 7 月前，8.7%的站点已经在使用它，代表超过 68%的请求[2] 。高流量的站点最迅速的普及，在数据传输上节省了可观的成本和支出。
这种迅速的普及率很可能是因为 HTTP2 不需要站点和应用做出改变：使用 HTTP/1.1 和 HTTP/2 对他们来说是透明的。拥有一个最新的服务器和新点的浏览器进行交互就足够了。只有一小部分群体需要做出改变，而且随着陈旧的浏览器和服务器的更新，而不需 Web 开发者做什么，用的人自然就增加了。

## 后 HTTP/2 进化

随着 HTTP/2.的发布，就像先前的 HTTP/1.x 一样，HTTP 没有停止进化，HTTP 的扩展性依然被用来添加新的功能。特别的，我们能列举出**2016 年里 HTTP 的新扩展**：

- 对 Alt-Svc 的支持允许了给定资源的位置和资源鉴定，允许了更智能的 CDN 缓冲机制。
- Client-Hints 的引入允许浏览器或者客户端来主动交流它的需求，或者是硬件约束的信息给服务端。
- 在 Cookie 头中引入安全相关的的前缀，现在帮助保证一个安全的 cookie 没被更改过。

HTTP 的进化证实了它良好的扩展性和简易性，释放了很多应用程序的创造力并且情愿使用这个协议。今天的 HTTP 的使用环境已经于早期 1990 年代大不相同。HTTP 的原先的设计不负杰作之名，允许了 Web 在 25 年间和平稳健得发展。修复漏洞，同时却也保留了使 HTTP 如此成功的灵活性和扩展性，HTTP/2 的普及也预示着这个协议的大好前程。

## HTTP2.0 的多路复用和 HTTP1.X 中的长连接复用有什么区别？

- HTTP/1.\* 一次请求-响应，建立一个连接，用完关闭；**每一个请求都要建立一个连接**；
- HTTP/1.1 Pipeling 解决方式为，若干个请求排队**串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会**，一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；
- HTTP/2**多个请求可同时在一个连接上并行执行**。某个请求任务耗时严重，不会影响到其它连接的正常执行；

![](/JS/http2Multiplexing.jpg)