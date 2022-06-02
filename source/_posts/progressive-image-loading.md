---
title: 图片渐进式加载的实现方法
date: 2021-11-04 22:48:47
updated: 2021-11-04 22:48:47
excerpt: 其实这是之前自己写现在使用的这个主题的时候就想记下来的东西，不过一直咕到今天才写 …_φ(･ω･` )
thumbnail: https://yzf.qq.com/fsnb/kf-file/kf_pic/20211104/KFPIC_2L_WXIMAGE_d2df66813c314d8281c626ff1a6871fb.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/H1d22bd938a2d42dd86298dea5055473aa.jpg
thumbnail_avif: https://ae01.alicdn.com/kf/H97d9655700794f97896649b6ef7a3266l.jpg
thumbnail_color: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wCEAA0NDQ0ODQ4QEA4UFhMWFB4bGRkbHi0gIiAiIC1EKjIqKjIqRDxJOzc7STxsVUtLVWx9aWNpfZeHh5e+tb75+f8BDQ0NDQ4NDhAQDhQWExYUHhsZGRseLSAiICIgLUQqMioqMipEPEk7NztJPGxVS0tVbH1pY2l9l4eHl761vvn5///AABEIACAALQMBIgACEQEDEQH/xABwAAADAQEBAAAAAAAAAAAAAAADBAUGAgcQAAIBAwIGAwEAAAAAAAAAAAECAwAEERIhBRQiMUFREzJhQgEAAwEAAAAAAAAAAAAAAAAAAgMEAREAAQQCAgIDAAAAAAAAAAAAAQACAxESMQQhBRMycYH/2gAMAwEAAhEDEQA/ALt/wSKcfLbOKiS2piV0Zwujq3G5rVGIxuJIjjGNvBruU2t2hjuYtBI7+KBvLeDWdhPPHG8f0Lzjk7uC4E1sMlO4rWcNT5ZEaUaC5IRR+DOKOtgFkASQspxpOdwRT9m/KQzJOAhVjh/B1VYeQXsyb89Kb004h1FuwmOWRg0ccjI5HUO4x+0nb2N+DKXitmBbYuuTTiSG2tDLcTqxwSXAxnPak45VMamKUOvvJoMnHouA+0ZaNhpIGqT0pqdcXEcK5bc+F8k0NrkyRzSayEQfyPtUO+4vbwywIiFxG2WqeLx78g6Q13oJx5jccYxZrZWpt4gIhJLKTM52AONz/I/KI0yO3JjDFCpc+M1I4FM13NLJr1Gqptit00qnA9Y3J9mmTStjlcHnQ6QNjJaKqyhX5zIg0l1A+nuura3gto9LqgJ3NNHPTqBNJyxSs+QM0uKUS9HpbJG9lFq//9k
---

其实这是之前自己写现在使用的这个 Hexo 主题的时候就想记下来的东西，不过一直咕到今天才写 …_φ(･ω･` )

在我写主题的过程中，为了节省流量而大量地对图片使用了懒加载。而各位应该很容易就可以发现，对于文章的封面图还有个额外的“从模糊变清晰”的加载效果。

<video src="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2021-11-03/8042b498-dca0-4752-bcc4-3b405280fdf1null" poster="https://yzf.qq.com/fsnb/kf-file/kf_pic/20211103/KFPIC_2D_WXIMAGE_e3a9891e73a44b1082b24e40846c0d0a.jpg" controls></video>

这类加载方式一般被称为渐进式加载（Progressive Loading），对于图片来说，也就是在加载的过程中先展示一部分模糊的图片，等加载完成了再展示完整的原始图片。虽然渐进式加载不能从根本上提高图片的加载速度，但是因为用户**看到图片的时间提前了**（虽然还不是完整图片），因此可以给用户一种“看上去加载得比较快”的错觉，而不是对着未加载时图片位置的一片空白干等，可以提升使用体验。

# 图片格式中的渐进解码功能

现在常用的一些图片格式中都加入了渐进式解码的功能，可以在只加载了图片的部分数据的情况下显示出模糊的图像。由于是解码器直接提供支持，因此展示图片时并不需要额外的配置，只需要在保存图片时注意设置“渐进/连续（Progressive）”或者“交错（Interlace）”之类的选项就可以了。

下面就是模拟较慢的网速下加载以相同质量压缩的非渐进式和渐进式 JPEG 图片的效果，非渐进式是像扫描仪一样从上往下逐渐显示，而渐进式就先显示了大致的轮廓，在加载过程中再逐渐变清晰，“扫描”完第二遍时就已经是可以接受的图片质量了。

<video src="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2021-11-03/8bb22ec9-43ab-4bc2-8f83-afa8bc6dd809null" poster="https://yzf.qq.com/fsnb/kf-file/kf_pic/20211103/KFPIC_wV_WXIMAGE_614c92082fc2447fa7a1d7b6cf4f3763.jpg" controls></video>

如果使用 [mozjpeg](https://github.com/mozilla/mozjpeg) 压图的话，默认就已经启用了参数 `-progressive` 启用渐进式解码，但是默认的解码方式是按顺序解码 Y、U、V 三个通道（即使用 `-dc-scan-opt 1`），效果是图片会先以黑白形式显示，再逐渐填充错误的颜色，最后变成正常的颜色，这样看上去的效果不太好，因此可以通过使用 `-dc-scan-opt 0` 改为同时加载三个通道，就可以达到上面的效果。还可以无损地将已有的非渐进式 JPEG 图片（也被称为 Baseline JPEG）转换为渐进式，文件大小稍微会小一点。

另外两个经典的图片格式 GIF 和 PNG 也支持渐进式解码，但是对这两个格式启用渐进式解码反而会使文件大小增加，实际使用也似乎不是很多。

那现代图片格式 WebP 和 AVIF 呢？遗憾的是，它们都不支持渐进式解码 ╮(╯_╰)╭

Google 已经在 WebP 的文档中表示[不支持渐进式解码的功能](https://developers.google.com/speed/webp/faq#does_webp_support_progressive_or_interlaced_display)了。而 AVIF 最初也不支持渐进式解码，后来有人在 GitHub 上提出了相关的 [Issue](https://github.com/AOMediaCodec/av1-avif/issues/102)，但是似乎是由于对编码格式的修改过于复杂而无法实装，作为替代有人提出了另一个 [Issue](https://github.com/AOMediaCodec/libavif/issues/605)，通过在 AVIF 中内置缩略图来实现类似的效果，不过也没有什么进展……所以大约的确也是不行的。

# 懒加载和“从模糊变清晰”的加载效果

在和图片相关的优化中，懒加载其实是更有必要做的优化。毕竟渐进式的图片加载只能做到视觉上的优化，但是懒加载可是实打实地减少了 HTTP 请求数量和流量消耗。一般的懒加载是在未加载的图片的位置上放一个固定的占位图，等需要加载图片的时候再用原图替换掉，类似的还有“省流模式”，只是将加载图片的时机从出现在屏幕上变成了用户手动点击图片。总之，如果把这张占位图改成图片的缩略图之类的话，就是上面提到的“从模糊变清晰”的渐进式加载效果了。

这个缩略图有哪些要求呢？

* 缩略图应该立即显示在页面上，如果进行了额外的加载，那么加载之前图片仍然是一片空白。
* 缩略图还应该尽可能地小。
* 如果从缩略图直接切换到原图就太生硬了，应该有个渐变的效果，可以通过将缩略图的不透明度逐渐变成 0 来实现，于是这个缩略图应该作为单独的一层覆盖到原图上。

因此这个缩略图应该以 Data URL 的形式直接嵌入到页面中，并且使用几十像素的尺寸就足够了。下面就是将一个 32x18 的缩略图（大小只有 434 B）覆盖在 1280x720 的原图上的演示，点击下面的按钮可以模拟图片被加载时显示的图片从缩略图平滑过渡到原图的效果：

<div style="position:relative">
    <img id="example-0-blurred" style="position:absolute;width:100%;max-height:none;transition:opacity 1s" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wCEABcXFxcYFxocHBokJiImJDUwLCwwNVA5PTk9OVB5S1hLS1hLeWuBaWJpgWvAl4WFl8DeurC63v/w8P////////8BFxcXFxgXGhwcGiQmIiYkNTAsLDA1UDk9OT05UHlLWEtLWEt5a4FpYmmBa8CXhYWXwN66sLre//Dw///////////AABEIABIAIAMBIQACEQEDEQH/xABrAAADAQAAAAAAAAAAAAAAAAACBAUAEAACAgEEAQUAAAAAAAAAAAABAgMRAAQSITETBRRBcrEBAQEBAQAAAAAAAAAAAAAAAAQCAwERAAEDBAIDAQAAAAAAAAAAAAEAAgMEESExMoEiQUJx/9oADAMBAAIRAxEAPwCvBIXBLU1DvGoZt70XU4Gm0kSN5W9IxML6odXi04YG405+WrLqm+GAoi5ZK0KyXRPGHUEcm5dqspFnOUusqnnNh2lJi0DJ5WBDbrUnEV9QRqQIxA7JxczDLEAwjKyjcGvub4Vx+IzkrWk+z1WCpeXS0+VJ1TFoNEWJJ8bfuBB0fsMfHo/jlkdr/9k">
    <img id="example-0-source" style="width:100%;max-height:none;visibility:hidden" data-src="https://yzf.qq.com/fsnb/kf-file/kf_pic/20211108/KFPIC_XB_WXIMAGE_a8dd780066f142798a2e3ee8d58e31e0.jpg" data-src-webp="https://ae01.alicdn.com/kf/H72e7b8fb35d548f59bd6b70eba55f22b1.jpg" data-src-avif="https://ae01.alicdn.com/kf/H6003b911c8e34ac294617bd172d141b7p.jpg">
</div>
<button id="example-0-load">加载图片</button>
<button id="example-0-unload">恢复初始状态</button>
<button id="example-0-blur">切换缩略图模糊</button>
<!--
<script>
(() => {
const getElementById = e => document.getElementById(e);
const prefix = 'example-0-';
const blurred = getElementById(prefix+'blurred');
const source = getElementById(prefix+'source');
const load = getElementById(prefix+'load');
const unload = getElementById(prefix+'unload');
const blur = getElementById(prefix+'blur');
load.onclick = () => {
    blurred.style.opacity = 0;
    source.style.visibility = '';
};
unload.onclick = () => {
    blurred.style.opacity = 1;
    source.style.visibility = 'hidden';
};
blur.onclick = () => (blurred.style.filter = blurred.style.filter ? '' : 'blur(10px)');
})()
</script>
-->
<script>(()=>{const e=e=>document.getElementById(e),l="example-0-",t=e(l+"blurred"),i=e(l+"source"),c=e(l+"load"),o=e(l+"unload"),s=e(l+"blur");c.onclick=()=>{t.style.opacity=0,i.style.visibility=""},o.onclick=()=>{t.style.opacity=1,i.style.visibility="hidden"},s.onclick=()=>t.style.filter=t.style.filter?"":"blur(10px)"})()</script>

```html
<div style="position:relative">
    <!-- 缩略图，显示的尺寸和位置都要设定为和原图一致 -->
    <img
        style="position:absolute;width:100%;transition:opacity 1s"
        src="data:image/jpeg;base64,..."
    >
    <!-- 原图 -->
    <img
        style="width:100%"
        src="https://..."
    >
</div>
```

由于浏览器缩放显示图片时默认使用的是双线性插值（除此之外只能通过修改 `image-rendering: pixelated` 设置为邻近取样，没有更好的缩放算法了），在将缩略图放大数倍时会出现明显的菱形和十字图形，比较难看。在缩略图上通过 `filter: blur(10px)` 添加模糊一定程度上可以掩盖这个问题，上面的演示中也可以通过自由切换来比较使用与不使用模糊的视觉效果区别。

但是，使用 CSS 的模糊滤镜又带来了别的问题。在演示中可以注意到，将缩略图模糊时缩略图的边缘也一起被模糊了，导致的后果就是点击“加载图片”时在边缘位置仍然是没有任何过渡地直接显示了图片，非常生硬。

如何解决呢？我首先找到了[一篇来自 CSS-Tricks 的文章](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)，同样介绍了如何实现“从模糊变清晰”的渐进式加载效果，但是它使用了另一种不同的方法实现缩略图的模糊显示：不在 CSS 的 `filter` 中使用自带的 `blur` 模糊滤镜，而是以 SVG 滤镜的形式将模糊和修改透明度结合到一起。这个结合后的 SVG 滤镜是：

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <filter id="$">
        <feGaussianBlur stdDeviation="10" />
        <feComponentTransfer>
            <feFuncA type="discrete" tableValues="1 1" />
        </feComponentTransfer>
    </filter>
</svg>
```

`<feGaussianBlur>` 和 CSS 自带的 `blur` 一样，表示对图片进行指定半径的模糊处理。而 `<feComponentTransfer>` 则是对图片的每个像素的 RGBA 通道颜色值进行映射（就像 Photoshop 里的“曲线”一样），这里的设定是将 A 通道固定为 1（范围为 0-1），也就是使整个图像变得不透明。

给这个 SVG 滤镜任意添加一个 ID（可以短到只有一个字符），然后压缩，编码成使用 URL 编码的 Data URL，再像 HTML 中使用 `#` 指向有某个 ID 的元素一样引用这个滤镜，写入到 CSS 的 `filter` 中，就可以得到下面的 CSS 代码：

```css
filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='$'%3E%3CfeGaussianBlur stdDeviation='9'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3C/svg%3E#$")
```

这是目前这个主题正在对文章封面图的使用模糊方法。看上去似乎也没什么问题，但是在写这篇的时候我尝试对上面的演示中的缩略图使用，结果在图片边框出现了严重的色彩溢出现象，溢出的部分甚至还超出了图片的显示区域……

<img data-src="https://yzf.qq.com/fsnb/kf-file/kf_pic/20211104/KFPIC_IC_WXIMAGE_243a94bab112447a9cb4c1347d26abfa.jpg" data-src-webp="https://ae01.alicdn.com/kf/H77595992cb184c9083c09f8c5e4fff004.jpg" data-src-avif="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2021-11-04/fd1de76e-b097-46a3-b330-1c143914d600null">

那为什么 CSS-Tricks 那边的使用以及对这个主题的封面图使用就没有问题呢？因为那两个情况下的图片都是通过 `background-image` 显示的，但是这里使用的是 `<img>`，稍微有点区别。至于为什么在 `<img>` 中使用就会在显示区域之外出现色彩溢出的部分，我也无法解释…… (;-_-)

后来我又找到了一个 [Stack Overflow 上的回答](https://stackoverflow.com/questions/20443283#answer-48095387)，给出了另一个 SVG 模糊滤镜：

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <filter id="$">
        <feGaussianBlur stdDeviation="10" />
        <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0" />
        <feComposite in2="SourceGraphic" operator="in" />
    </filter>
</svg>
```
`<feColorMatrix>` 是使用变换矩阵处理每个像素的 RGBA 通道颜色值，上面的滤镜中的矩阵相当于将 A 通道的颜色值乘上 9，其他通道不变，对于被模糊（实际上是半透明）的边缘位置来说基本上就和设成 1 差不多了，并且这种实现方法不会在显示区域之外再出现什么奇怪的东西。对应的 CSS 代码：

```css
filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='$'%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0,0 1 0 0 0,0 0 1 0 0,0 0 0 9 0'/%3E%3CfeComposite in2='SourceGraphic' operator='in'/%3E%3C/filter%3E%3C/svg%3E#$");
```

用这个滤镜替代最初的演示中使用的 CSS 自带的模糊滤镜：

<div style="position:relative">
    <img id="example-1-blurred" style="position:absolute;width:100%;max-height:none;transition:opacity 1s;filter:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22$%22%3E%3CfeGaussianBlur stdDeviation=%2210%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%221 0 0 0 0,0 1 0 0 0,0 0 1 0 0,0 0 0 9 0%22/%3E%3CfeComposite in2=%22SourceGraphic%22 operator=%22in%22/%3E%3C/filter%3E%3C/svg%3E#$')" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wCEABcXFxcYFxocHBokJiImJDUwLCwwNVA5PTk9OVB5S1hLS1hLeWuBaWJpgWvAl4WFl8DeurC63v/w8P////////8BFxcXFxgXGhwcGiQmIiYkNTAsLDA1UDk9OT05UHlLWEtLWEt5a4FpYmmBa8CXhYWXwN66sLre//Dw///////////AABEIABIAIAMBIQACEQEDEQH/xABrAAADAQAAAAAAAAAAAAAAAAACBAUAEAACAgEEAQUAAAAAAAAAAAABAgMRAAQSITETBRRBcrEBAQEBAQAAAAAAAAAAAAAAAAQCAwERAAEDBAIDAQAAAAAAAAAAAAEAAgMEESExMoEiQUJx/9oADAMBAAIRAxEAPwCvBIXBLU1DvGoZt70XU4Gm0kSN5W9IxML6odXi04YG405+WrLqm+GAoi5ZK0KyXRPGHUEcm5dqspFnOUusqnnNh2lJi0DJ5WBDbrUnEV9QRqQIxA7JxczDLEAwjKyjcGvub4Vx+IzkrWk+z1WCpeXS0+VJ1TFoNEWJJ8bfuBB0fsMfHo/jlkdr/9k">
    <img id="example-1-source" style="width:100%;max-height:none;visibility:hidden" data-src="https://yzf.qq.com/fsnb/kf-file/kf_pic/20211108/KFPIC_XB_WXIMAGE_a8dd780066f142798a2e3ee8d58e31e0.jpg" data-src-webp="https://ae01.alicdn.com/kf/H72e7b8fb35d548f59bd6b70eba55f22b1.jpg" data-src-avif="https://ae01.alicdn.com/kf/H6003b911c8e34ac294617bd172d141b7p.jpg">
</div>
<button id="example-1-load">加载图片</button>
<button id="example-1-unload">恢复初始状态</button>
<!--
<script>
(() => {
const getElementById = e => document.getElementById(e);
const prefix = 'example-1-';
const blurred = getElementById(prefix+'blurred');
const source = getElementById(prefix+'source');
const load = getElementById(prefix+'load');
const unload = getElementById(prefix+'unload');
load.onclick = () => {
    blurred.style.opacity = 0;
    source.style.visibility = '';
};
unload.onclick = () => {
    blurred.style.opacity = 1;
    source.style.visibility = 'hidden';
};
})()
</script>
-->
<script>(()=>{const e=e=>document.getElementById(e),l="example-1-",t=e(l+"blurred"),i=e(l+"source"),c=e(l+"load"),o=e(l+"unload");c.onclick=()=>{t.style.opacity=0,i.style.visibility=""},o.onclick=()=>{t.style.opacity=1,i.style.visibility="hidden"}})()</script>

这样的效果就很完美了！( つ•̀ω•́)つ

# 除了小尺寸的 JPEG，还能用什么作为缩略图？

CSS-Tricks 的文章还提到了 Facebook 技术团队的[另一篇文章](https://engineering.fb.com/2015/08/06/android/the-technology-behind-preview-photos/)，介绍他们是如何在自家的 APP 中实现图片渐进式加载，使用的方法仍然是先立即显示模糊的缩略图再展示完整图片，但是他们的目标是**将缩略图的大小压到 200 B 左右**。为此他们使用了相同的质量和Huffman 表等参数进行压图，这样得到的图片就有了固定的标头，只要传输剩下的部分，在客户端再和固定的标头拼接起来，就可以得到使用的缩略图了。

> So the final format became one byte for version number, one byte each for width and height, and finally the approximately 200 byte payload. The server would just send this format as part of the GraphQL response, and then the client could simply append the JPEG body to the predefined JPEG header, patch the width and height, and treat it as a regular JPEG image.
>
> After the standard JPEG decoding, the client could run the predetermined Gaussian blur and scale it to fit the window size.
>
> 最终的数据格式先是各占 1 B 的版本号和图片的宽度和高度，剩下的部分就是 200 B 左右的负载。服务端只需要从 GraphQL 响应中返回这些数据，客户端简单地将负载拼接到预定义的 JPEG 头部后面，再填上宽度和高度，就可以当成一般的 JPEG 图片使用了。
>
> 在进行 JPEG 图片解码后，客户端就可以对图片添加高斯模糊并把它缩放到需要的大小。

<img data-src="https://yzf.qq.com/fsnb/kf-file/kf_pic/20211104/KFPIC_Bh_WXIMAGE_610648a58cc248fbbc9bf46ff07bb2eb.jpg" data-src-webp="https://ae01.alicdn.com/kf/He09b01afdc6b43e9a0dd6981c824c938U.jpg" data-src-avif="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2021-11-04/2088042f-02fc-45a7-b53b-23a34a8b0a14null">

自己实现图片渐进式加载的时候当然不一定要做如此极端的优化，制作缩略图时，用任意一个软件把图片的宽度和高度压到 40px 左右，控制压缩 JPEG 的质量使大小在 2 KB 以内其实就可以了。

但是用更少的数据来表示缩略图确实是可行的，这里就需要介绍 [BlurHash](https://blurha.sh/) 这个工具了。BlurHash 的算法主要是对原图进行了离散余弦变换，提取出最多 10x10=100 个系数，以 0-18 的范围（也就是大约 4.25 bit 的精度，不过对于缩略图已经够用了）表示颜色，按照一些紧凑的规则编码成二进制数据，再使用特别选择的字母表进行 Base83 编码，保证在 URL 和 JSON 等地方不需要额外转义就可以直接传输。详细的编码规则可以参见[这里](https://github.com/woltapp/blurhash/blob/master/Algorithm.md)。

<img data-src="https://yzf.qq.com/fsnb/kf-file/kf_pic/20211104/KFPIC_7d_WXIMAGE_2558c80751954f3994dcc0575c102555.jpg" data-src-webp="https://ae01.alicdn.com/kf/H1f07c7a514754eccb5c2594d62cc7594z.jpg" data-src-avif="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2021-11-04/6569ff73-bb1a-486c-8d31-4930dd4775e0null">

在系数数量为 6x4 的情况下从上面的缩略图得到的 BlurHash 只有 52 B。即使将 10x10 个系数用满，由此得到的最长的 BlurHash 也只有 166 B，这个数据量比 Facebook 的极端优化还要小。

需要展示缩略图的时候，只要使用解码库就可以直接将 BlurHash 解码成任意尺寸的位图。系数越少得到的图片就越模糊（或者说是平滑？），但是就算是 10x10 也比前面使用的添加了高斯模糊的低分辨率 JPEG 还要模糊。也许有人会因为想要在模糊的缩略图中多展示一些图片细节而仍然选择低分辨率 JPEG，不过这就是个人喜好不同了 (´▽｀)ノ♪

在搜索的过程中，我另外还发现了一个名为 [Primitive](https://github.com/fogleman/primitive) 的比较有意思的工具，可以用数百个椭圆、矩形、三角形等简单的图形对图片进行拟合，还支持以 SVG 的矢量格式输出。

<img data-src="https://yzf.qq.com/fsnb/kf-file/kf_pic/20211104/KFPIC_hl_WXIMAGE_3467bde7c69240b9987b77a04e082bbf.png" data-src-webp="https://ae01.alicdn.com/kf/H92de47be5bd94d07a50f34bcde1e9fd3l.jpg" data-src-avif="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2021-11-04/a422724f-c79f-47fa-9f62-81fa598b641enull">

这个工具是用 Go 写的，不过遗憾的是我没有 Go 语言环境，因此就没办法亲自体验了，作者提供的预编译版也只有 macOS 版。这种图片也是可以当缩略图使用的，虽然压到 2 KB 以内大概是做不到了……不过这种画风本身还是挺有趣的 (っ'ω')っ

> 封面图：[Pixiv ID: 83265679 「チノちゃんと遊園地デート」 by チノマロン](https://www.pixiv.net/artworks/83265679)