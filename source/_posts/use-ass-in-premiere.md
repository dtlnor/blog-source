---
title: 通过 VapourSynth 在 Premiere 中使用 ASS 字幕
date: 2019-08-03 18:10:30
updated: 2019-08-03 18:10:30
excerpt: 很久以前就想解决的问题，因为 PR 的内置字幕工具实在太难用了……(｡･ˇ_ˇ･｡:)
thumbnail: https://ae01.alicdn.com/kf/Hb8d8d07611014cfa86d83b186cca4e405.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/H5c8877543e164d2cbf02a2f69faceac77.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/7420cc32f43b2ef4dbbfa35d2d454f7651060.jpg
thumbnail_color: data:image/jpeg;base64,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
---

> 封面图：[Pixiv ID: 62550768 「エロマンガ先生」 by 幽灵Genkyo](https://www.pixiv.net/member_illust.php?mode=medium&illust_id=62550768)

{%
    aplayerlite
    "adrenaline!!!"
    "TrySail"
    "https://fs-im-kefu.7moor-fs2.com/im/2768a390-5474-11ea-afc9-7b323e3e16c0/dR7-w8ZD.m4a"
    "https://ae01.alicdn.com/kf/H820451e04d6f494b8474c282041248efl.jpg"
%}

说到外挂字幕，像小透明这样的肥宅比较熟悉的应该是用 [Aegisub](http://www.aegisub.org/) 弄出来的 ASS 格式的字幕，几乎所有动画字幕组发外挂字幕的时候使用的都是这种格式。ASS 格式本身不难掌握，Aegisub 又是全平台的**免费开源软件**，有些字幕组还把 ASS 玩出了花，在每一集动画的 OP 和 ED 还有插曲处使用 Aegisub 弄出使字幕文件大小**增加数百 KB 甚至 MB** 的“卡拉 OK 特效字幕”，用这一套东西给视频加上字幕当然是坠吼的啦～(っ´ω｀)ﾉ

然而比较尴尬的是 ASS 字幕是开源产物，并没有成为工业标准，所以和 MKV 视频一样并不能直接拖进正统的非编软件里使用，至少小透明使用的 Premiere 是不行的。之前小透明也找到过一些解决方法，不过都不怎么完美(｡í _ ì｡)

# 不完美的解决方法

## 使用 AviSynth 脚本读取插件

一种方法是使用动画压制组（以前）经常使用的视频处理工具 [AviSynth](http://avisynth.nl/index.php/Main_Page)。AviSynth 简单来说是一个通过**写脚本**来给视频加上缩放、切边、添加外挂字幕等各种滤镜的视频处理工具，x264 和 x265 之类的视频编码器可以通过 AviSynth 从脚本中获取（处理后的）每一帧视频数据进行编码。

AVS 脚本也不能直接拖进非编软件。对于 PR，有人编写了插件使 AVS 脚本在 PR 中可以被读取成可用的视频片段（具体请搜索“Premiere CS AVS Importer x64”）。

然而小透明在最新的 CC 2019 版 PR 中使用这个插件读取 AVS 脚本时会直接报错，也许是插件原作者没有继续维护，结果就不能兼容最新版本……总之是个过时的方法(='_'=)

## 使用 ArcTime 将字幕导出成图片和序列

小透明在接触 Aegisub 之前也用过 [ArcTime](http://arctime.cn/) 这个字幕制作软件，它有个功能可以把 ASS 字幕的每一条字幕渲染成 PNG 图片，然后生成包含各张图片起止时间的 XML 文件，导入到 PR 中就可以根据起止时间组合成一个序列（可以当成是只有字幕的透明背景视频），叠加到正片上～(´ﾟωﾟ｀)

不过当时在小透明使用的低配渣机上使用 ArcTime 很容易卡顿，所以小透明后来就没有继续研究这个软件了\_(:\_」∠)\_

性能的问题嘛……加钱加电脑配置就可以了，但是这个方法的缺陷是生成一大堆图片实在是太不优雅了！(╯‵□′)╯︵┻━┻ 一般的字幕还好，但是碰到那种“卡拉 OK 特效字幕”，每一个字的**出现、显示、消失各算一条字幕**，如果有粒子效果的话**每一个粒子也要算一条字幕**，那一句歌词，一首 OP 或 ED 的字幕要生成多少张图片，序列的时间线要堆上多少东西呢？

不过这个思路至少是可行的。按照 ArcTime 原作者的解释，用 XML 保存的序列是工业标准格式，兼容包括 PR 在内的各种非编软件。

ArcTime 有[收费项目](http://arctime.cn/service.html)可以解锁“软字幕序列”的导出功能，这种情况下导出的字幕是 PR 的专用格式，可以在 PR 中继续修改，不需要导出一大堆图片。收费的解决方案这里就不考虑啦～

## 使用 FFmpeg 生成带有字幕的透明背景视频

> 参见：[在Premiere中添加ASS字幕 - 無位小站](https://halu.lu/post/add-subtitles-in-premiere/)

和使用 ArcTime 一样，本质上是将字幕直接弄成视频素材放进 PR 中使用，不过使用 [FFmpeg](https://ffmpeg.org) 的话就可以直接生成视频了(*′ ▽‘)

```plaintext
ffmpeg -f lavfi -i "color=color=black@0.0:size=1920x1080,format=rgba,subtitles=subtitle.ass:alpha=1" -c:v qtrle -t "00:00:05.000" -r 60 subtitle.mov
```

以上的命令可以生成一个时长为五秒的 1080p 60fps 透明视频，并且 `subtitle.ass` 的字幕内容也会被渲染进去。把最后生成的 `subtitle.mov` 拖进 PR 的时间轴上就可以了～

这个方法唯一的缺点来自于生成的视频文件本身。虽然上面的命令使用了 QuickTime 的无损压缩编码 `qtrle`，但是生成的视频文件本身还是要占用硬盘空间的，而且视频分辨率和帧率越高、时间越长，视频文件的大小也会更大。

# VapourSynth 大法好！

上面的那些解决方法是小透明很久以前折腾的了。现在小透明因为学业不得不接触 Python，再加上小透明知道的<ruby>某知名动画压制组<rt>VCB-Studio</rt></ruby>在自家的网站和论坛上公开了很多 VapourSynth 的教程，所以小透明也就开始接触这个东西啦！然后就发现用它可以完美满足在 PR 中使用 ASS 字幕的需求～

VapourSynth 和 AviSynth 差不多，也是写脚本处理视频输出给编码器的工具。不过 VapourSynth 使用 Python 作为脚本语言（当然它的使用也依赖于 Python 环境），更容易入门，而且生态比历史悠久、开发几乎陷入停滞的 AviSynth 好了很多（小透明放弃 AviSynth 的原因之一就是因为装的是 x64 版，然后发现很多十几年前的处理滤镜只有 x86 版且无人移植……）

## 配置 VapourSynth 压制环境

先去 [Python 的官方网站](https://www.python.org/downloads/)上下载安装 Python 运行环境，再去 [VapourSynth 的官方 GitHub 仓库](https://github.com/vapoursynth/vapoursynth/releases) 下载安装 VapourSynth。如果没有问题的话，安装 VapourSynth 的时候会自动识别出之前安装的 Python 运行环境，总之下一步就可以了(´• ᵕ •`)*

虽然写 VapourSynth 的脚本用的是 Python，但是对于简单的压制脚本，实际上只会涉及到很小一部分的 Python 语法，大部分时候调用函数和赋值就完事了……而且仅仅是为了实现在 PR 中使用 ASS 字幕的话，更是只需要使用一个自带滤镜，不需要再安装别的东西。

在 Python 中输入以下代码，能显示 VapourSynth 的版本号就算是配置完了٩( 'ω' )و

```python
# 引入VapourSynth
import vapoursynth as vs
# 获取一个用于处理视频的对象
core = vs.get_core()
# 获取VapourSynth的版本并输出
print(core.version())
```

<img data-src-webp="https://ae01.alicdn.com/kf/Hf8381f0d6994478d974b386cacd9ef473.jpg" data-src="https://ae01.alicdn.com/kf/Heabde53c17b4479baa3b07cea9bbba1fJ.png">

## 字幕视频脚本的编写和 `avfs` 的使用

实际压片时，一般都是把脚本保存为扩展名为 `*.vpy` 的文件来使用的。用记事本新建一个文本文档，输入下面的代码就可以创建一个带有字幕的视频：

（这里使用的例子是《埃罗芒阿老师》的 NCED 的特效字幕。从[这里](https://files.catbox.moe/2zx0en.mp4)和[这里](https://files.catbox.moe/0gwn5t.ass)分别可以下载片源和字幕。）

```python
# -*- coding: utf-8 -*-

import vapoursynth as vs
core = vs.get_core()

# 将clip设为一个两分钟的1080p 60fps黑色空白视频
clip = core.std.BlankClip(width=1920, height=1080, length=60 * 120, fpsnum=60, fpsden=1)

# 使用sub.TextFile()函数将字幕渲染到clip上，返回渲染后的视频并赋值给subs
# 记得替换字幕文件的路径，路径前面加个r是禁用Python对字符串的转义
subs = core.sub.TextFile(clip, r"G:\Anime\[VCB-Studio] Eromanga Sensei [Ma10p_1080p]\SPs\Subs\[VCB-Studio] Eromanga Sensei [NCED02][Ma10p_1080p][x265_flac].ass")

# 设置字幕视频subs为脚本的输出
subs.set_output()
```

脚本写完了，不过怎么才能看到视频呢？这就要用的 `avfs` 这个小工具了。

`avfs` 全称“AviSynth Virtual File System”，看这名字就知道和 AviSynth 有一些关系，实际上它来自于一个[为 AviSynth 编写的插件](https://turtlewar.org/avfs/)，可以在电脑中虚拟出一个包含了无损 AVI 文件的目录，那个 AVI 文件就是 AVS 脚本处理后的视频数据。VapourSynth 安装时也自带了这个组件，还可以把 `*.vpy` 的脚本拿过去用～

把 `*.vpy` 的“打开方式”设为 VapourSynth 安装目录下的 `core` 文件夹中的 `avfs.exe`，打开后就会弹出命令行窗口显示虚拟的视频目录的路径，退出时记得按 <kbd>Ctrl+C</kbd> 而不是直接按右上角红叉，虚拟目录会自动消失。

如果没有视频文件，大概是脚本写错了，在 `error.log` 里可以看到报错信息。如果修改了脚本，需要退出 `avfs` 然后重新打开才能应用更改。

<img data-src-webp="https://ae01.alicdn.com/kf/Hbc0f0d00dee044cf9629d9a83a3a990bq.jpg" data-src="https://ae01.alicdn.com/kf/H3b9cbf29949e445da2af08060f40213aI.png">

双击 AVI 文件就可以直接播放脚本处理后的视频了，实际上是 AviSynth / VapourSynth 在实时处理并输出视频数据。虽然文件看起来很大（要把小透明的硬盘塞满了……？），不过因为这个目录都是**虚拟出来的**，所以实际上完全不占用硬盘存储空间，不像上面的两个方法一样需要生成大量“中间产物”。

（还可以使用 VapourSynth 自带的另一个工具 `vspipe` 将脚本处理后的视频数据输出给编码器，具体方法略）

## 使用“遮罩”组合出字幕视频

现在这个虚拟的 AVI 文件就可以拖到 PR 的时间线上了～不过 VapourSynth 不支持输出带有透明度的视频，所以字幕的视频仍然是**黑色背景色**，即使能在非编中使用也没有意义ﾍ(´ー｀ﾍ)

`sub.TextFile()` 函数有个布尔类型的参数 `blend`，默认为 `True`，表示返回在源视频上渲染了字幕后的视频，如果设为 `False` 的话，就会返回带有两个视频的数组：

* 第一个视频是以 `RGB24` 的颜色格式保存的，在黑色背景上渲染的字幕视频。
* 第二个视频是以 `GRAY8` 的颜色格式（也就是只有灰度）保存的遮罩用视频。

<img data-src-webp="https://ae01.alicdn.com/kf/H3b25194252dc4c4d836dae0d1edbe7a0x.jpg" data-src="https://ae01.alicdn.com/kf/H41b919cfa57e4c4abb3831537ba009d2S.jpg">

上面分别是遮罩视频、字幕视频和在片源上渲染了字幕的视频。遮罩视频的白到黑对应字幕视频每个像素 0~100% 的不透明度，例如这里的最后一个字符是半透明的，在遮罩中就显示为灰色。

因此就需要准备两个脚本，分别命名为 `subtitle_source.vpy` 和 `subtitle_mask.vpy`，对应字幕视频和遮罩视频，脚本内容几乎没有什么区别：

```python
# -*- coding: utf-8 -*-

import vapoursynth as vs
core = vs.get_core()

clip = core.std.BlankClip(width=1920, height=1080, length=60 * 120, fpsnum=60, fpsden=1)
subtitle_path = r"G:\Anime\[VCB-Studio] Eromanga Sensei [Ma10p_1080p]\SPs\Subs\[VCB-Studio] Eromanga Sensei [NCED02][Ma10p_1080p][x265_flac].ass"

# 以下两行二选一：

# 在subtitle_source.vpy中使用这一行，获取字幕视频（取下标为0的一项）
subs = core.sub.TextFile(clip, subtitle_path, blend=False)[0]
# 在subtitle_mask.vpy中使用这一行，获取遮罩视频（取下标为1的一项）
subs = core.sub.TextFile(clip, subtitle_path, blend=False)[1]

subs.set_output()
```

然后把两个虚拟的 AVI 文件拖到 PR 的时间线上，片源放在轨道 1，字幕视频放在轨道 2，遮罩视频放在轨道 3 并隐藏输出。然后……“效果”→“视频效果”→“通道”→**“设置遮罩”**，把这个拖到字幕视频上，在它的“效果控件”中选择获取遮罩的图层为**遮罩视频所在的轨道 3**，“用于遮罩”选择“红色/绿色/蓝色通道”或“明亮度”或“变亮”之一（因为遮罩视频是单色灰度，所以没有区别啦～），这样轨道 2 上的就是带有透明度的字幕视频了！( ´▽` )ﾉ

<img data-src-webp="https://ae01.alicdn.com/kf/Hc5835bf91a3f48dbba84f3a0ef0119d7W.jpg" data-src="https://ae01.alicdn.com/kf/H001032fce27145db9ece0291d7f0d129G.png">

（这里把片源换成了彩条）

现在对于使用 PR 剪辑的视频，就可以根据下面的流程加上 ASS 格式的字幕了ヽ(´•ω•`)､

1. 完成视频的剪辑
2. 导出一份码率较低、分辨率较低、帧率较低……（总之能让视频导出的时间缩短就行）的临时视频
3. 在 Aegisub 中用临时视频制作出字幕
4. 用以上的方法将字幕弄成虚拟 AVI 文件，导入时间轴
5. 导出正片

---

其实也可以直接导出正片再制作字幕，然后从 AviSynth、VapourSynth、FFmpeg、x264、x265……选择自己喜欢的工具进行硬字幕的压制。不过这样相当于进行了二压，画质会有损失，小透明还是有点介意这个的啦┓( ´∀` )┏

最后来一个用上面的那个特效字幕压制的硬字幕版的《埃罗芒阿老师》的 NCED，这种特效还是挺有意思的～

<video src="https://alilin-my.sharepoint.com/personal/ebolyhgj_xlu_me/_layouts/15/download.aspx?share=ET-jSopkm-hCtPolcu-8VtUBldARfWcNOP9Hzt4ZT2Lyww" poster="https://ae01.alicdn.com/kf/Hb58b7b199a874a4d886f8076a06ee0ddy.jpg" controls preload="metadata"></video>