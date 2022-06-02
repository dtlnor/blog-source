---
title: 在 hexo-theme-material 主题上使用 highlight.js 进行代码高亮/显示行号
date: 2019-04-19 12:25:07
updated: 2019-04-19 12:25:07
thumbnail: https://ae01.alicdn.com/kf/HTB1ufPFQ6DpK1RjSZFrq6y78VXa0.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/H9b910b5398b449fcae72ca936115a1baF.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/4168b3a0cd7ad926b42653ab78360f4b32369.jpg
thumbnail_color: data:image/jpeg;base64,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
---

Hexo 自带了在渲染网页时进行代码高亮的功能，现在本站正在使用的主题 [Material Theme
](https://github.com/viosey/hexo-theme-material) 也加入了 [prettify.js](https://github.com/google/code-prettify) 和 [hanabi](https://github.com/egoist/hanabi) 两种代码高亮工具的支持。

然鹅小透明出于以下理由还是想折腾一下，使用 [highlight.js](https://highlightjs.org/) 来进行代码高亮～

* 不知道是哪里出了问题，Hexo 自带的代码高亮完全没有任何效果( ｡･\_･｡)
* hanabi 的颜色过于鲜艳，而且不论类型对每一块代码的着色似乎是完全随机的？！Σ（ﾟдﾟlll）
* prettify.js 的效果其实也不算差啦～( ๑´•ω•)۶
* highlight.js 有~~宇宙第一 IDE~~ Visual Studio 的配色主题！\_(•̀ω•́ 」∠)\_~~好像这个才是真实原因吧~~

<img data-src-webp="https://ae01.alicdn.com/kf/U5b063f6ba52647ee91573301e67c1f255.jpg" data-src="https://ae01.alicdn.com/kf/HTB1LOzeQ4TpK1RjSZFM762G_VXaw.png">

左上是 Hexo 自带的~~高亮~~（根本没有颜色），右上是 hanabi，左下是使用了 `GitHub v2` 主题的 prettify.js，右下是使用了 `VS 2015` 主题（以及按这里的步骤进行魔改后）的 highlight.js。

吐槽一下，代码高亮工具并不能做到和 IDE 的效果一模一样……比如 `puts()` 是个函数，结果还是被 hanabi 和 highlight.js 着色了(っ ̯ -｡)

# 引入 highlight.js

首先要把 Hexo 和 Material Theme 自带的高亮关掉(。・`ω´・)
```yaml
# Writing
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```
```yaml
# Code highlight
#   Prettify
prettify:
  enable: false
  theme: "github-v2"

#   Hanabi (https://github.com/egoist/hanabi)
hanabi:
  enable: false
  line_number: true
  includeDefaultColors: true
  customColors:
```

然后在生成的网页上引入 highlight.js 的本体和主题( つ•̀ω•́)つ

涉及到的页面模板的路径为 `\themes\hexo-theme-material\layout\_partial` 目录下的 `import_js.ejs` 和 `config_css.ejs` 两个文件，把下面的代码（也可以修改 CSS 使用别的主题）写在文件的最后面。

~~[jsDelivr](https://www.jsdelivr.com/) 是本站唯一钦定的前端资源公用 CDN 库~~

```html
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/highlight.min.js"></script>
<script>
    hljs.initHighlightingOnLoad();
</script>
```
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/vs2015.min.css">
```

按理来说，这样就已经可以有 highlight.js 的代码高亮效果了……但是官网的演示中，`VS 2015` 主题下代码块的背景色应该是黑色，这里怎么还是白色背景呢？(っ'-')╮

<img data-src-webp="https://ae01.alicdn.com/kf/Uc6e76df5b8304039bf56a36f0d9bdf0f5.jpg" data-src="https://ae01.alicdn.com/kf/HTB12wvjQVzqK1RjSZFo762fcXXaU.png">

highlight.js 默认对 `<pre><code>...</code><pre>` 的代码块着色，然后会给 `<code>` 加上类 `hljs`，主题的背景色写进了 CSS 的 `.hljs` **类选择器**。然而 Material Theme 的文章本体包含在 `<div id="post-content">`中，代码块背景色写进了 CSS 的 `#post-content pre` 选择器，有一个 **ID 选择器**，自然要优先于 `hljs` 这个类选择器了。

简单直接的解决方法就是把背景色等被覆盖的样式再抄一遍，然后加上 `!important` 提高优先级咯～（\*‘ε·\*）

```css
/* highlight.js: vs2015.css */
.hljs {
    /* 其余部分略 */
    background: #1e1e1e;
}

/* Material Theme: style.css*/
#post-content pre {
    /* 其余部分略 */
    background-color: #f7f7f7;
}

/* 在config_css.ejs中加入的内容，使用!important提高优先级 */
/* 如果不使用公用CDN库，可以直接修改CSS文件 */
pre {
    background-color: #1e1e1e !important;
    font-size: 15px !important;
}

.hljs {
    margin: 0 0 0 0 !important;
    padding-left: 0 !important;
    line-height: 1.5em !important;
}

/* （可选）把highlight.js主题加入的斜体去掉，Visual Studio的注释并不是斜体啊喂！ */
.hljs-comment {
    font-style: normal;
}
```

到这里，文章中代码的颜色就已经是 Visual Studio 的形状了～٩( 'ω' )و

<img data-src-webp="https://ae01.alicdn.com/kf/Uc74eda24d1b94ab4b44cddc648995d633.jpg" data-src="https://ae01.alicdn.com/kf/HTB1XLLsQ7PoK1RjSZKb7601IXXaL.png">

# 为 highlight.js 添加行号显示功能

~~prettify.js 已经自带行号显示了~~

highlight.js 本身没有行号显示功能，开发者甚至[在说明书中专门写了几段话](https://highlightjs.readthedocs.io/en/latest/line-numbers.html)说明自己为什么不愿意加入这个功能←\_←

>Many highlighters, in my opinion, are overdoing it with such things as separate colors for every single type of lexemes, striped backgrounds, fancy buttons around code blocks and — yes — line numbers. The more fancy stuff resides around the code the more it distracts a reader from understanding it.
>This is why it’s not a straightforward decision: this new feature will not just make highlight.js better, it might actually make it worse simply by making it look more bloated in blog posts around the Internet.

嗯……别人可以不用，但是你不能没有啊(⑉･̆-･̆⑉)

不过加上行号也不难，HTML 的有序列表 `<ol>` 可以在列表的每一项前面显示一个序号。把每一行代码写进 `<li>` 放进这个有序列表里面，显示的序号就相当于行号了。实际上 prettify.js 的行号显示就是这么实现的～

从[这里](https://juejin.im/entry/5b3047db6fb9a00e523989fc#5)找到了一段 JS，在使用 `hljs.initHighlightingOnLoad()` 进行高亮之前，可以通过 `<li>` 标签替换换行符 `\n`，把代码弄成有序列表的形式。

```js
//Material Theme主题本身已经用到了jQuery，可以直接使用
$("pre code").each(function(){
    $(this).html("<ol><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ol>");
});

//不过，如果不想使用jQuery，而是使用原生JS实现的话……
Array.from(document.querySelectorAll("pre code")).forEach(function(codeBlock){
    codeBlock.innerHTML = "<ol><li>" + codeBlock.innerHTML.replace(/\n/g, "\n</li><li>") + "\n</li></ol>";
});

//IE11不支持使用Array.from，所以也可以用这种写法代替
[].slice.call(document.querySelectorAll("pre code")).forEach(function(codeBlock){
    codeBlock.innerHTML = "<ol><li>" + codeBlock.innerHTML.replace(/\n/g, "\n</li><li>") + "\n</li></ol>";
});
```

<img data-src-webp="https://ae01.alicdn.com/kf/Ub6c00f0791a4455b96a1b72014e9ab99K.jpg" data-src="https://ae01.alicdn.com/kf/HTB1dE_sQ9zqK1RjSZFH7623CpXaK.png">

效果已经很不错了！ᕦ( ᐛ )ᘎ

不过还有些不完美的地方……这个代码块的上下边距比较大（调整 `margin` 或 `padding` 就可以解决）、最后还多出了一个空行、和 Visual Studio 的行号显示还是有点差别：Visual Studio 的黑色主题中行号是水蓝色的，而且数字的后面没有点。

<img data-src-webp="https://ae01.alicdn.com/kf/U6caff37c5c2c46ac88d816ff17e0491a5.jpg" data-src="https://ae01.alicdn.com/kf/HTB1zg_wQ9zqK1RjSZFp761kSXXaF.png">

`<ol>` 和 `<ul>` 有个名为 [`list-style-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-type) 的 CSS 属性可以改变列表前面的序号格式，不过没有只有数字的样式，而且序号的颜色只能和列表内的文本颜色一样，所以要实现 Visual Studio 的行号显示大概不能指望这个了……\_(:\_」∠)\_

小透明后来从 Stack Overflow 上找到了[另外一个方法](https://stackoverflow.com/questions/40842277/create-line-numbers-on-pre-with-css-only)～

这个方法的原理是对每一行使用 CSS 的 `:before` 伪元素。`:before` 和 `:after` 两个伪元素可以在网页上的**元素内部**的前面和后面添加内容，CSS 还有 `counter()` 函数和 `counter-reset`、`counter-increment` 两个属性，配合起来可以实现“计数器”的效果，于是就可以对每一行进行计数（相当于行号），并显示在每一行开头的 `:before` 里面|ω•`)

用伪元素实现行号后，也就不需要添加 `<ol>` 了。复制代码的时候也不会复制到行号，因为伪元素是不能被选中的。

```js
//使用jQuery实现
$("pre code").each(function(){
    $(this).html("<li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li>");
});

//使用原生JS实现
Array.from(document.querySelectorAll("pre code")).forEach(function(codeBlock){
    codeBlock.innerHTML = "<li>" + codeBlock.innerHTML.replace(/\n/g, "\n</li><li>") + "\n</li>";
});
```

```css
.hljs {
    margin: 0 0 0 0 !important;
    padding-left: 0 !important;
    line-height: 1.5em !important;
    list-style: none !important;
    counter-reset: item; /* 为每个代码块指定名为item的计数器，计数从0开始 */
}

.hljs > li:before {
    content: counter(item); /* 在伪元素中显示计数器item的值 */
    counter-increment: item; /* 计数器item的值+1 */
    display: inline-block; /* 实现Visual Studio行号右对齐的效果 */
    text-align: right; /* 实现Visual Studio行号右对齐的效果 */
    min-width: 2em; /* 文章中行号一般不会超过两位数，所以设定行号区的宽度为两个数字 */
    margin-right: 1em; /* 行号和代码有一个字符的间隔 */
    color: #2b91af; /* Visual Studio的行号颜色 */
}
```

最后的空行很容易解决。CSS 有 `:last-of-type` 选择器，指定符合选择条件的最后一个元素，正好可以用来隐藏掉最后的空行～

```css
.hljs > li:last-of-type {
    display: none;
}
```

这样就实现了一开始那张图的效果了！不考虑那个绿色的 `puts()`，这个代码高亮效果和 Visual Studio 已经一模一样了～

<img data-src-webp="https://ae01.alicdn.com/kf/U0c81d0f89e2e4c21ad495e3213f5f36bd.jpg" data-src="https://ae01.alicdn.com/kf/HTB1yfYMQ7voK1RjSZPf760PKFXab.png">

另外，在使用 Markdown 进行写作的时候，指定某个代码块的语言类型为 `plain` 或 `text` 可以让 highlight.js 不对这个代码块进行操作。这些没有被着色的代码块不会被加上类 `hljs`，所以需要再添加一些 CSS 进行特殊处理(´っω･｡｀)

```css
.hljs > li:last-of-type, code.plain > li:last-of-type, code.text > li:last-of-type {
    display: none;
}

code.plain, code.text {
    list-style: none !important; /* 不显示行号 */
    color: #dcdcdc; /* 和着色后代码的主要颜色相同 */
    display: block; /* 左右滚动代码块 */
    overflow-x: auto; /* 左右滚动代码块 */
}
```

<img data-src-webp="https://ae01.alicdn.com/kf/U00d0b4a14bfa4de19c5e7599612bdd394.jpg" data-src="https://ae01.alicdn.com/kf/HTB1uzDLQ4TpK1RjSZFM762G_VXaX.png">

不进行处理的效果是左边，处理后的效果是右边～