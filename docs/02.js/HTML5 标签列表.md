---
title: HTML5 标签列表
date: 2021-03-08
lang: "zh-CN"
sidebar: "auto"
categories:
  - JS
tags:
location: HangZhou
---

# Heading

[[toc]]

参考链接：
- [HTML5 标签列表](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/HTML/Element#%E6%96%87%E6%A1%A3%E5%85%83%E6%95%B0%E6%8D%AE)

## 根元素

<componentBlock :header='header' :gridData='gridData.root'></componentBlock>

## 文档元数据

<componentBlock :header='header' :gridData='gridData.meta'></componentBlock>

## 脚本

<componentBlock :header='header' :gridData='gridData.script'></componentBlock>

## 章节

<componentBlock :header='header' :gridData='gridData.section'></componentBlock>

## 组织内容

<componentBlock :header='header' :gridData='gridData.content'></componentBlock>

## 文字形式

<componentBlock :header='header' :gridData='gridData.wordStyle'></componentBlock>

## 编辑

<componentBlock :header='header' :gridData='gridData.edit'></componentBlock>

## 嵌入内容

<componentBlock :header='header' :gridData='gridData.embed'></componentBlock>

## 表格

<componentBlock :header='header' :gridData='gridData.table'></componentBlock>

## 表单

<componentBlock :header='header' :gridData='gridData.form'></componentBlock>

## 交互元素

<componentBlock :header='header' :gridData='gridData.interactive'></componentBlock>

<script>
export default {
    data() {
        return {
            header:['Element','Description','HTML5 added'],
            gridData:{
                root:[
                    ['<html>', '代表 HTML 或 XHTML 文档的根。其他所有元素必须是这个元素的子节点。',''],
                ],
                meta:[
                    ['<head>','代表关于文档元数据的一个集合，包括脚本或样式表的链接或内容。',''],
                    ['<title>','定义文档的标题，将显示在浏览器的标题栏或标签页上。该元素只能包含文本，包含的标签不会被解释。',''],
                    ['<base>','定义页面上相对 URL 的基准 URL。',''],
                    ['<link>','用于链接外部资源到该文档。',''],
                    ['<meta>','定义其他 HTML 元素无法描述的元数据。',''],
                    ['<style>','用于内联 CSS。',''],
                ],
                script:[
                    ['<script>','定义一个内联脚本或链接到外部脚本。脚本语言是 JavaScript。',''],
                    ['<noscript>','定义当浏览器不支持脚本时显示的替代文字。',''],
                    ['<template>','通过 JavaScript 在运行时实例化内容的容器。','是'],
                ],
                section:[
                    ['<body>','代表 HTML 文档的内容。在文档中只能有一个 <body> 元素。',''],
                    ['<section>','定义文档中的一个章节。','是'],
                    ['<nav>','定义只包含导航链接的章节。','是'],
                    ['<article>','定义可以独立于内容其余部分的完整独立内容块。','是'],
                    ['<aside>','定义和页面内容关联度较低的内容——如果被删除，剩下的内容仍然很合理。','是'],
                    ['<h1>,<h2>,<h3>,<h4>,<h5>,<h6>','标题元素实现了六层文档标题，<h1> 是最大的标题，<h6> 是最小的标题。标题元素简要地描述章节的主题。',''],
                    ['<header>','定义页面或章节的头部。它经常包含 logo、页面标题和导航性的目录。','是'],
                    ['<footer>','定义页面或章节的尾部。它经常包含版权信息、法律信息链接和反馈建议用的地址。','是'],
                    ['<address>','定义包含联系信息的一个章节。',''],
                    ['<main>','定义文档中主要或重要的内容。','是'],
                    ['',''],
                ],
                content:[
                    ['<p>','定义一个段落。',''],
                    ['<hr>','代表章节、文章或其他长内容中段落之间的分隔符。',''],
                    ['<pre>','代表其内容已经预先排版过，格式应当保留 。',''],
                    ['<blockquote>','代表引用自其他来源的内容。',''],
                    ['<ol>','定义一个有序列表。',''],
                    ['<ul>','定义一个无序列表。',''],
                    ['<li>','定义列表中的一个列表项。',''],
                    ['<dl>','定义一个定义列表（一系列术语和其定义），通常用于展示词汇表或者元数据 (键-值对列表)。',''],
                    ['<dt>','代表一个由下一个 <dd> 定义的术语。',''],
                    ['<dd>','代表出现在它之前术语的定义。',''],
                    ['<figure>','代表一个和文档有关的图例。','是'],
                    ['<figcaption>','代表一个图例的说明。','是'],
                    ['<div>','代表一个通用的容器，没有特殊含义。',''],
                ],
                wordStyle:[
                    ['<a>','代表一个链接到其他资源的超链接 。',''],
                    ['<em>','代表强调。',''],
                    ['<strong>','代表特别重要。',''],
                    ['<small>','代表注释 ，如免责声明、版权声明等，对理解文档不重要。將使文本的字体变小一号（font-size:0.8em）。',''],
                    ['<s>','代表不准确或不相关 的内容。使用删除线来渲染文本。使用 <s> 元素来表示不再相关，或者不再准确的事情。但是当表示文档编辑时，不提倡使用 <s> ；为此，提倡使用 <del> 和 <ins> 元素。',''],
                    ['<cite>','表示一个作品的引用，且必须包含作品的标题。',''],
                    ['<q>','表示一个封闭的并且是短的行内引用的文本. 这个标签是用来引用短的文本，所以请不要引入换行符; 对于长的文本的引用请使用 <blockquote> 替代.',''],
                    ['<dfn>','代表一个术语包含在其最近祖先内容中的定义 。术语定义应当在 <p>, <section>或定义列表 (通常是<dt>, <dd> 对)中给出。',''],
                    ['<abbr>','代表省略 或缩写 ，其完整内容在 title 属性中。',''],
                    ['<data>','关联一个内容的机器可读的等价形式 （该元素只在 WHATWG 版本的 HTML 标准中，不在 W3C 版本的 HTML5 标准中）。','是'],
                    ['<time>','代表日期 和时间 值；机器可读的等价形式通过 datetime 属性指定。','是'],
                    ['<code>','代表计算机代码 。默认情况下, 它以浏览器的默认等宽字体显示.',''],
                    ['<var>','代表代码中的变量 。',''],
                    ['<samp>','代表程序或电脑的输出 。通常使用浏览器缺省的 monotype 字体（例如 Lucida Console）。',''],
                    ['<kbd>','代表用户输入 ，一般从键盘输出，但也可以代表其他输入，如语音输入。',''],
                    ['<sub>,<sup>','分别代表下标 和上标 。',''],
                    ['<i>','代表一段不同性质 的文字，如技术术语、外文短语或是小说中人物的思想活动等。它的内容通常以斜体显示。',''],
                    ['<b>','代表一段需要被关注 的文字。不应将 <b> 元素用于显示粗体文字。不要将<b>元素与 <strong>、<em>或<mark>元素混淆。 <strong>元素表示某些重要性的文本，<em>强调文本，而<mark>元素表示某些相关性的文本。 <b>元素不传达这样的特殊语义信息；仅在没有其他合适的元素时使用它。',''],
                    ['<u>','表示一个需要标注为非文本化（non-textual）的内联文本域，如标记出拼写错误的文字等。默认情况下渲染为一个实线下划线，可以用CSS替换。',''],
                    ['<mark>','代表一段需要被高亮的引用 文字。','是'],
                    ['<ruby>','代表被ruby 注释 标记的文本，如中文汉字和它的拼音。','是'],
                    ['<rt>','代表ruby 注释 ，如中文拼音。','是'],
                    ['<rp>','代表 ruby 注释两边的额外插入文本 ，用于在不支持 ruby 注释显示的浏览器中提供友好的注释显示。','是'],
                    ['<bdi>','双向隔离元素。代表需要脱离 父元素文本方向的一段文本。它允许嵌入一段不同或未知文本方向格式的文本。','是'],
                    ['<bdo>','双向文本替代元素。指定子元素的文本方向 ，显式地覆盖默认的文本方向。ltr：从左到右 rtl：从右到左','是'],
                    ['<span>','代表一段没有特殊含义的文本，当其他语义元素都不适合文本时候可以使用该元素。',''],
                    ['<br>','代表换行 。不要用 <br> 来增加文本之间的行间隔；应使用 CSS margin 属性或<p> 元素。',''],
                    ['<wbr>','代表建议换行 (Word Break Opportunity) ，当文本太长需要换行时将会在此处添加换行符。用于避免将标点符号留在行尾，这会让读者将 URL 的末尾搞错。','是'],
                ],
                edit:[
                    ['<ins>','定义增加 到文档的内容。',''],
                    ['<del>','定义从文档移除 的内容。',''],                
                ],
                embed:[
                    ['<img>','代表一张图片 。',''],
                    ['<iframe>','代表一个内联的框架 。',''],
                    ['<embed>','代表一个嵌入 的外部资源，如应用程序或交互内容。','是'],
                    ['<object>','代表一个外部资源 ，如图片、HTML 子文档、插件等。',''],
                    ['<param>','代表 <object> 元素所指定的插件的参数 。',''],
                    ['<video>','代表一段视频 及其视频文件和字幕，并提供了播放视频的用户界面。','是'],
                    ['<audio>','代表一段声音 ，或音频流 。','是'],
                    ['<source>','为 <video> 或 <audio> 这类媒体元素指定多个媒体源 。它通常用于以不同浏览器支持的多种格式提供相同的媒体内容。','是'],
                    ['<track>','为 <video> 或 <audio> 这类媒体元素指定文本轨道（字幕） 。','是'],
                    ['<canvas>','代表位图区域 ，可以通过脚本在它上面实时呈现图形，如图表、游戏绘图等。','是'],
                    ['<map>','与 <area> 元素共同定义图像映射 区域。',''],
                    ['<area>','与 <map> 元素共同定义图像映射 区域。元素 在图片上定义一个热点区域，可以关联一个超链接。<area>元素仅在<map>元素内部使用。',''],
                    ['<svg>','定义一个嵌入式矢量图 。','是'],
                    ['<math>','定义一段数学公式 。','是'],
                ],
                table:[
                    ['<table>','定义多维数据 。',''],
                    ['<caption>','代表表格的标题 。',''],
                    ['<colgroup>','代表表格中一组单列或多列 。',''],
                    ['<col>','代表表格中的列 。',''],
                    ['<tbody>','代表表格中一块具体数据 （表格主体）。',''],
                    ['<thead>','代表表格中一块列标签 （表头）。',''],
                    ['<tfoot>','代表表格中一块列摘要 （表尾）。',''],
                    ['<tr>','代表表格中的行 。',''],
                    ['<td>','代表表格中的单元格 。',''],
                    ['<th>','代表表格中的头部单元格 。',''],
                ],
                form:[
                    ['<form>','代表一个表单 ，由控件组成。',''],
                    ['<fieldset>','代表控件组 。',''],
                    ['<legend>','代表 <fieldset> 控件组的标题 。',''],
                    ['<label>','代表表单控件的标题 。将一个 <label> 和一个 <input> 元素匹配在一起，你需要给 <input> 一个 id 属性。而 <label> 需要一个 for 属性，其值和  <input> 的 id 一样。另外，你也可以将 <input> 直接放在 <label> 里，此时则不需要 for 和 id 属性，因为关联已隐含存在。',''],
                    ['<input>','代表允许用户编辑数据的数据区 （文本框、单选框、复选框等）。',''],
                    ['<button>','代表按钮 。',''],
                    ['<select>','代表下拉框 。',''],
                    ['<datalist>','代表提供给其他控件的一组预定义选项 。select可以多选，设置缺省值，datalist不可以。datalist可以查找、增添选项，select不可以。','是'],
                    ['<optgroup>','代表一个选项分组 。',''],
                    ['<option>','代表一个 <select> 元素或 <datalist> 元素中的一个选项',''],
                    ['<textarea>','代表多行文本框 。',''],
                    ['<keygen>（已废弃）','代表一个密钥对生成器 控件。','是'],
                    ['<output>','代表计算值 。','是'],
                    ['<progress>','代表进度条 。','是'],
                    ['<meter>','代表滑动条 。','是'],
                ],
                interactive:[
                    ['<details>','代表一个用户可以(点击)获取额外信息或控件的小部件 。','是'],
                    ['<summary>','代表 <details> 元素的综述 或标题 。','是'],
                    ['<menuitem>（已废弃 HTML5.2）','代表一个用户可以点击的菜单项。','是'],
                    ['<menu>（Experimental）','代表菜单。','是'],
                ]
            }
        }
    }
}
</script>
