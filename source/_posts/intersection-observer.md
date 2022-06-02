---
title: 用 Intersection Observer 来自己造个图片懒加载的轮子₍₍ (ง ˙ω˙)ว ⁾⁾
date: 2020-03-26 14:33:08
updated: 2020-03-26 14:33:08
excerpt: 一些食用方法和实例～　除了懒加载，还可以用来实现别的功能呢( ॑꒳ ॑ )
thumbnail: https://ae01.alicdn.com/kf/H40d56c8b01024071bce5f8fed26a011bM.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/H070780d73c714d2fa6c63cd72bb9cf98b.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/6073b2c140bf1f43d53c70251e20435928501.jpg
thumbnail_color: data:image/jpeg;base64,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
---

> 封面图：[Pixiv ID: 80105763 「アッカリーン」 by cedar](https://www.pixiv.net/artworks/80105763)

Intersection Observer 这东西之前我是一直没听说过的，至于为什么发现了它……这个过程就有点奇怪了(〃′▽`)

1. 寒假的时候尝试着用 [Vue](https://cn.vuejs.org) 和 [MDUI](https://mdui.org) 搞了点大新闻。
2. 在搜索其他 Material Design 风格的界面框架时，发现了 [Vuetify](https://vuetifyjs.com/zh-Hans/) 这个 Vue 组件库。
3. 翻了 Vuetify 的文档，它的功能比 MDUI 丰富了不少，居然还有个[懒加载](https://vuetifyjs.com/zh-Hans/components/lazy/)功能！
4. 懒加载的实现靠的是 [Intersection Observer](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)，这是……哎？这么神奇的东西原来浏览器就自带啊！(｡•́ - •̀｡)

<img data-src-webp="https://ae01.alicdn.com/kf/H8d54be408aa0420eae0c284e1102b3b1p.jpg" data-src="https://ae01.alicdn.com/kf/H22154757dc6a4bc880ac5eecf84cd0241.jpg">

# 基本的食用方法

Intersection Observer 可以用于检测网页上两个元素的交集的变化，并且在这个“交集”改变到一定程度时自动调用一个函数。

下面是一个实例，虽然是一片空白，但是可以试着滑啊滑～当两个一组的色块组合开始显示/移出、显示/移出了一半、完全显示/移出时下面的输出都会更新。

<div id="demo-1-main" style="max-height: 200px; overflow-y: auto;">
    <div>
        <div style="height: 300px;"></div>
        <div id="demo-1-target-1">
            <div style="height: 75px; background-color: red;"></div>
            <div style="height: 75px; background-color: green;"></div>
        </div>
        <div style="height: 300px;"></div>
        <div id="demo-1-target-2">
            <div style="height: 75px; background-color: blue;"></div>
            <div style="height: 75px; background-color: yellow;"></div>
        </div>
        <div style="height: 300px;"></div>
    </div>
</div>
<pre id="demo-1-log"></pre>
<script>
(function (document) {
    var observer = new IntersectionObserver(function (e) {
        var text = '';
        e.forEach(function (e) {
            for (var i in e) {
                text += i + ': ' + e[i] + '<br>';
            }
        });
        document.getElementById('demo-1-log').innerHTML = text;
    }, {
        root: document.getElementById('demo-1-main'),
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, .5, 1],
    });
    observer.observe(document.getElementById('demo-1-target-1'));
    observer.observe(document.getElementById('demo-1-target-2'));
})(document);
</script>

首先要创建一个 Intersection Observer 对象，并设定好要自动调用的函数以及根元素：

```js
let callback = entries => {console.log(entries)};

let observer = new IntersectionServer(callback, {
    root: document.getElementById('root'),
    rootMargin: '1px 2px 4px 8px',
    threshold: [0, .5, 1],
});
```

* `callback` 是调用的函数，稍后再说明～
* `root` 是**根元素**的 DOM，不设定的话就是浏览器窗口。
* `rootMargin` 是根元素的**边距**（相当于将根元素的范围扩大了），写法和 CSS 的 `margin` 是一样的。
* `threshold` 是其他元素和根元素的**交集的阈值**，交集为 `0` 代表该元素在根元素之外，`1` 代表该元素完全与根元素完全重合。阈值可以设为一个或多个值（数组），不设定的话就是 `0`。

这样就相当于有了一个属于上面的“根元素”的“观察器”，接下来就可以设定它要观察哪些元素与根元素的交集变化了：

```js
// 开始观察某个元素
observer.observe(document.getElementById('target-1'));
observer.observe(document.getElementById('target-2'));

// 还可以取消观察某个元素
observer.unobserve(document.getElementById('target-1'));

// 或者取消观察所有元素
observer.disconnect();
```

使用 `observe` **开始观察某个元素时**，或是某个被观察的元素（可能不唯一）与根元素的交集**增加或减少**并且**经过了上面设定的阈值**时，就会执行 `callback` 函数。调用函数时使用的唯一的参数是由 [`IntersectionObserverEntry`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry) 对象组成的数组。


<img data-src-webp="https://ae01.alicdn.com/kf/Hfe988c32bf4c4b7b80b9da1c1a5ac50df.jpg" data-src="https://ae01.alicdn.com/kf/Hb5bd0aee0ff047588874e33dd1ed1b36W.png">

这个对象包含了和元素交叉的事件有关的一些信息，部分比较常用的属性：
* `time` 是从新建“观察器”到触发函数间隔的时间，单位是毫秒。
* `isIntersecting` 和 `intersectionRatio` 分别表示被观察的元素和根元素是否有交集以及交集的大小，对应上面的 `threshold`。
* `target` 是被观察的元素。

触发函数时，`intersectionRatio` 和设定的 `threshold` 可能会有少量的误差～例如设定 `threshold` 为 `0.5`，进入和离开根元素时 `intersectionRatio` 会略高于 / 略低于 `0.5`。另外**开始观察某个元素时会立即触发一次函数**，因此虽然设定了 `threshold` 但是在这里仍然需要对 `intersectionRatio` 进行检查。

上面的演示的完整代码：

```html
<div id="demo-1-main" style="max-height: 200px; overflow-y: auto;">
    <div>
        <div style="height: 300px;"></div>
        <div id="demo-1-target-1">
            <div style="height: 75px; background-color: red;"></div>
            <div style="height: 75px; background-color: green;"></div>
        </div>
        <div style="height: 300px;"></div>
        <div id="demo-1-target-2">
            <div style="height: 75px; background-color: blue;"></div>
            <div style="height: 75px; background-color: yellow;"></div>
        </div>
        <div style="height: 300px;"></div>
    </div>
</div>
<pre id="demo-1-log"></pre>

<script>
let observer = new IntersectionObserver(entries => {
    let text = '';
    entries.forEach(e => {
        for (var key in e) {
            text += key + ': ' + e[key] + '<br>';
        }
    });
    document.getElementById('demo-1-log').innerHTML = text;
}, {
    root: document.getElementById('demo-1-main'),
    rootMargin: '0px 0px 0px 0px',
    threshold: [0, .5, 1],
});
observer.observe(document.getElementById('demo-1-target-1'));
observer.observe(document.getElementById('demo-1-target-2'));
</script>
```

# 实例：“懒加载”

如果一个网页上有很多图片的话，不是所有人都会一直滑到底的，那些没有显示出来的图片实际上也没有被加载的必要，所以就有了“懒加载”这种操作，当图片（的占位符）进入页面时再加载～

*实际上“图片”也可以替换成其他需要按需加载的东西，比如在用 Vue 折腾的单页应用上，不同页面的 JS 代码也可以懒加载了。*

以前的各种懒加载实现，都需要自己**手动获取屏幕 / 图片的尺寸和位置**，然后来个 `setInterval` 定时进行比较或者写进 `onscroll` 事件，后者还得加个去抖（debounce）或节流（throttle）。

……但是手动计算不麻烦吗？这么多参数怎么可能记得住？真的不会弄混吗？(╯‵□′)╯︵┻━┻

<img data-src-webp="https://ae01.alicdn.com/kf/Hf89dd86cb9704880bffd1737af941106K.jpg" data-src="https://ae01.alicdn.com/kf/Hdfdc3317a8f640118e982fdaca43b2a5q.png">

也有用 jQuery 实现的例子，不过这种落后的东西就没有什么学习的必要了嘛……

但是 Intersection Observer 就很适合拿来实现懒加载哦੭ ᐕ)੭*⁾⁾ 只要以窗口为根元素，观察所有的 `<img>`，在回调函数里设定它们的 `src`，就可以简单地实现懒加载了(⑉･̆-･̆⑉)

```js
// 图片的URL不写在src而是写在别的属性里
// 例如：<img data-src="image.jpg">

// 新建“观察器”
// 可以设定一些垂直方向的边距，提前一段时间加载图片
let observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        // 只有图片进入根元素时才执行
        if (!e.isIntersecting) return;

        // 设定为src的值，图片加载过以后就可以取消观察了
        let t = e.target;
        if (!t.src) t.src = t.getAttribute('data-src');
        observer.unobserve(t);
    });
}, {rootMargin: '64px 0px'});

// 观察所有图片的位置
document.querySelectorAll('img[data-src]').forEach(e => {
    observer.observe(e);
});
```

而且这个功能已经在本站实装了～用的就是上面的自己写的代码(\*´∀`\*)

~~其实现在用着的主题是自带懒加载功能的，不过用的是[一个 jQuery 插件](https://github.com/jieyou/lazyload)，很久之前还被我砍掉了~~

~~然后我发现了另一个[原生 JS 实现的懒加载插件](https://github.com/tuupola/lazyload)，也是用到了 Intersection Observer，所以我自己造了个轮子？！~~

# 实例：“无限滚动”

很多“信息流”的网站，例如○乎和○浪微博，都实现了无限滚动功能，滑到页面底部就自动再加载一些东西放到时间线上。~~于是用户就这样不知不觉沉浸于由算法推荐的“信息饲料”中，出不去了~~

加载可以用 AJAX 实现，然后用 Intersection Observer 检查“信息流”的末尾是否出现，出现后就立即加载更多数据。下面的实例中，往下滑啊滑，出现“我们是有底线的”这行字就会自动加载下一个色块了～（为了展示效果，添加了少量的延迟）

<div id="demo-2-main" style="max-height: 200px; overflow-y: auto;">
    <div id="demo-2-timeline">
        <div style="height: 75px; background-color: red;"></div>
        <div style="height: 75px; background-color: green;"></div>
        <div style="height: 75px; background-color: blue;"></div>
        <div style="height: 75px; background-color: yellow;"></div>
    </div>
    <div id="demo-2-end" style="text-align: center;">我们是有底线的</div>
</div>
<script>
(function (document) {
    var observer = new IntersectionObserver(function (e) {
        if (!e[0].isIntersecting) return;
        setTimeout(function () {
            var el = document.createElement('div');
            el.style.cssText = 'height:75px;background-color:rgb(' + [1, 2, 3].map(function () {return Math.floor(256 * Math.random())}).join() + ')';
            document.getElementById('demo-2-timeline').appendChild(el);
        }, 200);
    }, {root: document.getElementById('demo-2-main')});
    observer.observe(document.getElementById('demo-2-end'));
})(document);
</script>

```js
let observer = new IntersectionObserver(function (e) {
    if (!e[0].isIntersecting) return;
    let el = document.createElement('div');
    el.style.cssText = `height:75px;background-color:rgb(${[1, 2, 3].map(() => Math.floor(256 * Math.random())).join()})`;
    document.getElementById('timeline').appendChild(el);
}, {root: document.getElementById('main')});
observer.observe(document.getElementById('end'));
```

# 实例：视频的“小窗播放”

这个例子是得到了 [CSS-Tricks 的一篇文章](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/#article-header-id-2)的启发，不过那里面提到的是检测到视频离开窗口就自动暂停播放，其实还可以有更多的功能嘛……(・▽・〃)

经常上睿站看视频的小伙伴应该比较熟悉这个“小窗播放”的功能，在查看评论区的时候视频会自动切换到右下角的一个小窗口继续播放～

<img data-src-webp="https://ae01.alicdn.com/kf/H2fe822ff19a0484681fdc94b32140920Y.jpg" data-src="https://ae01.alicdn.com/kf/Hbe1a31f3463c4afaac583455f0fc5743M.jpg">

查看评论区的时候视频会出现在浏览器窗口外面，因此用 Intersection Observer 动态改变视频的位置就能实现上面的效果。我自己写了个简单的实例，点[这里](https://jsbin.com/rakovoyexu/edit?html,output)就能查看效果了(´ﾟωﾟ｀)

---

> &nbsp;
> W3C 呢……<ruby>[最近](https://github.com/w3c/IntersectionObserver/blob/master/explainer.md)<rt>2017 年</rt></ruby>发表了一个报告说呢……浏览器会通过<ruby>一些渠道<rt>Intersection Observer</rt></ruby>去影响、干预元素的交集，你对这个看法有什么回应呢？

Intersection Observer 是个比较新的功能，如果问浏览器资词不资词，大多数都是资词的，除了~~思想江化的~~ IE 和（旧版）Safari。

<img data-src-webp="https://ae01.alicdn.com/kf/H1a02f7f6cdca4b8b9deaebf95672e7da2.jpg" data-src="https://ae01.alicdn.com/kf/Ha8dbbb191d264cfa9074a6ba37381998H.png">

为了给这些~~思想江化的~~浏览器提高姿势水平，可以使用 W3C 钦定的一个 [Polyfill](https://github.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js)。

```js
window.IntersectionObserver||function(e){var n=e.createElement("script");n.src="https://cdn.jsdelivr.net/gh/w3c/IntersectionObserver/polyfill/intersection-observer.min.js",e.body.appendChild(n)}(document)
```