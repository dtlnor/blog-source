---
title: 提高摸鱼技术：用 IDA 破解录屏软件 OverSpeed
date: 2019-07-09 21:18:39
updated: 2019-07-09 21:18:39
excerpt: “本软件仅供学习交流，请于下载后二十四小时内删除。”
thumbnail: https://ae01.alicdn.com/kf/HTB1rI85dQxz61VjSZFrq6xeLFXaQ.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/Hbf975422d9f443fbb0b3b60e83bfbb09V.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/002bd822e0981a2326b7ca72149b3cfb57956.jpg
thumbnail_color: data:image/jpeg;base64,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
---

> 封面图：[Pixiv ID: 27167260 「存在感をアピールするために取った行動」 by ケースワベ【K-SUWABE】](https://www.pixiv.net/member_illust.php?mode=medium&illust_id=27167260)

因为复习期末考的关系，已经连续一个月都没有更新了……\_(:\_」∠)\_

# 软件介绍

先介绍一下 [OverSpeed](http://liga.tech/OverSpeed/) 这东西，是由一位独立开发者制作的录屏软件，单文件，绿色版，录制的视频画质极高且非常流畅～(੭ ˙ᗜ˙ )੭

<img data-src-webp="https://ae01.alicdn.com/kf/Ud4b6f69e9f6f4e828278870337782e4dK.jpg" data-src="https://ae01.alicdn.com/kf/HTB1ltixe79E3KVjSZFG76319XXaO.png">

根据反编译后的代码来看，这个软件应该是使用了 DXGI 1.2 加入的 [Desktop Duplication API](https://docs.microsoft.com/en-us/windows/desktop/direct3ddxgi/desktop-dup-api) 通过显卡获取屏幕的图像数据，因此性能比传统的使用 GDI 截图不知道高到哪里去了d(ﾟ∀ﾟd) 由于这个 API 是 Windows 8 才加入的，所以 OverSpeed 也只能在 Windows 8 或以上系统使用。

这个软件唯一的但是也是非常严重的缺点是……虽然软件录屏的视频编码是广泛使用的 **H.264**，但是为了做到录屏画质的近乎无损，**图像采样使用的是 4:4:4，色彩空间直接使用了 RGB**，结果就是录制的视频**兼容性极差**。MPC-HC、VLC 等开源视频播放器可以正常播放，但 Windows 10 自带的视频播放器“电影和电视”就不能播放了。即使真的可以播放，但是**拉一下进度条都会卡住**，更不要说在 Adobe Premiere Pro 之类的视频编辑软件中导入/正常编辑，不存在的ﾍ(´ー｀ﾍ)

> 根据[作者自己的说法](https://tieba.baidu.com/p/5515880835#post_content_122368471096)，作者也没打算适配视频编辑软件就是了。不过“符合规范”不一定等于“广受支持”……吧？
>
> <img data-src-webp="https://ae01.alicdn.com/kf/U8c7b4565460243a7bdca280eac153121A.jpg" data-src="https://ae01.alicdn.com/kf/HTB1uFPwXlv0gK0jSZKb762K2FXaP.png">

一般我们接触到的 MP4 视频，视频部分使用的是 YUV 4:2:0 的 H.264 编码。H.264 编码使用 YUV 4:4:4 的已经很少见，使用 RGB 的就更少见了╮( •́ω•̀ )╭

作为补偿，OverSpeed 也提供了调用 FFmpeg 将录制的视频一键转码成兼容性较好的 H.264 YUV 4:2:0 的功能。根据反编译的代码来看，软件会根据是否要将系统声音和麦克风声音的两条音轨混合，使用两种压制参数（不过视频部分是一样的）：

```plaintext
ffmpeg -i input.mp4 -map 0 -c:v libx264 -qp 16 -pix_fmt yuv420p -f mp4 -filter_complex amix=inputs=2 -b:a 192k output.mp4
ffmpeg -i input.mp4 -map 0 -c:v libx264 -c:a:0 copy -c:a:1 copy -qp 16 -pix_fmt yuv420p -f mp4 output.mp4"
```

当然也可以自己设参数自己压。

所以作者给 OverSpeed 定位为“**非主流小众**屏幕录制软件”不是没有道理，**录屏画质确实几乎无损**，但是学会压片也是使用这软件的一部分，不会不要用(　^ω^)

不过要是真的想学习压片的话，把 GitHub 上的[《如何使用 FFmpeg 进行视频转码》](https://github.com/FiveYellowMice/how-to-convert-videos-with-ffmpeg-zh/blob/master/index.md)和动画压制组 VCB-Studio 写的[《视频格式基础知识》](https://vcb-s.com/archives/2726)差不多看懂就足够可以入门了。

---

跑题了跑题了，为什么压片和破解软件会有关系？σ*ゝω･)

OverSpeed 的版本可以分成早期的免费版和现在的收费版：
* 免费版的开发一直持续到 2016 年年底，作者还给这一阶段最后的 4.0 版加上了“Final Version”的代号。免费版录屏后视频部分保存为一个 `.264` 文件，音频部分保存为无损 FLAC 文件，还需要手动进行转码封装。
* 收费版从 2018 年开始开发，代号“vNext”，定价 66.6 元。收费版相对免费版新增的功能主要是录制的视频直接保存为 MP4 文件以及对全屏游戏录制的支持（然鹅**全屏游戏里按不了录制的快捷键**，只能用 <kbd>Alt</kbd> + <kbd>Tab</kbd> 切回桌面点击窗口上的按钮开始/停止录制，而且桌面分辨率必须和游戏分辨率一样），同时砍掉了无损录音，改成使用 192 Kbps 的有损 AAC 编码录制。**在未注册的情况下，录制视频的帧率固定为 15。**

OverSpeed 的作者要吃饭，不过之前的免费版就有高帧率录屏的功能（虽然旧版本也很好找就是了～），而且看在小透明所学的专业的份上……**要不要破解一下试试看？**( • ̀ω ⁃᷄)✧

~~如果有女朋友的话，当然就是选择和她一起出去丸啦～怎么还会闲得没事干去破解一个小软件呢……( ・_ゝ・)~~

# 破解过程

尝试破解的软件版本是 `5.0.2018.721`，小透明使用的破解工具是 IDA Pro 7.0 ヾ(•ω•`。)

软件样本可以从[这里](https://files.catbox.moe/eexjo1.zip)下载（从官方网站转存至 Catbox），IDA 可以从[这里](https://www.52pojie.cn/thread-675251-1-1.html)下载。

（因为是第一次尝试破解软件，所以下面的内容可能会有错误的地方ﾍ('.'o)）

## 了解 IDA 的使用

因为这次破解的大部分内容都是在改程序逻辑中的跳转，所以应该不会用到很多比较复杂的功能……吧？꜀(｡௰｡ ꜆)꜄

使用 IDA 打开软件本体的可执行文件后，第一眼看到的是这样的界面：

<img data-src-webp="https://ae01.alicdn.com/kf/Ub05806d62a8742be9651f7d1ad06108dM.jpg" data-src="https://ae01.alicdn.com/kf/HTB1FxTSdQxz61VjSZFr760eLFXaY.png">

不能在一开始被弄晕了……总之，主要用到的是左边的函数区和右边的工作区～函数区列出了程序中的所有函数，工作区则是又分成了几个选项卡：

* IDA View：显示反编译后的汇编代码。（也就是上面的截图显示的东西）
* Hex View：像十六进制编辑器一样，显示程序文件的十六进制数据。
* Structures/Enums：看名字应该就可以知道是什么意思。
* Imports：导入表。“导入”的效果是程序可以使用来自动态链接库（DLL）的函数，比如 Windows API 的一大堆函数。
* Exports：导出表。与导入表相反，包含的是可以被别的程序调用的函数。

IDA 分析程序时，还会自动命名一些东西：`sub` 开头的是子程序/函数，也就是程序逻辑中的一小段；`loc` 开头的是 IDA 为程序逻辑添加的标签，用来标识跳转的位置；`qword`、`dword` 之类开头的是占用一定字节的全局变量。

在这次破解中，这些选项卡里面经常用到的只有 IDA View ╮(╯_╰)╭ IDA View 里面的汇编代码显示了程序的运行逻辑，左边的小箭头还显示了运行中的跳转。（当然可读性还是极差……）

双击左边的某个函数，IDA View 就会用**流程图（Graph View）**的形式显示函数的运行逻辑，还会用不同颜色的箭头标出一般跳转和条件跳转的路径：

<img data-src-webp="https://ae01.alicdn.com/kf/U9490514c5f8b4f2b893d8e40804e6457r.jpg" data-src="https://ae01.alicdn.com/kf/HTB1xtAEbMFY.1VjSZFq761dbXXaF.png">

在流程图中按下 <kbd>F5</kbd>，IDA 就会把这个函数解析成 C 语言风格的伪代码显示在“Pseudocode”的选项卡中，局部变量依次用 `v1`、`v2`、`v3`……表示。这下总算是有可以看得懂的东西了！ヾ(´∀｀。ヾ)

流程图和伪代码都可以**下断点**用于动态调试（反过来说，不需要运行程序，直接看代码来了解程序运行逻辑的做法叫“静态分析”），不过这次破解不需要动态调试的说……

<img data-src-webp="https://ae01.alicdn.com/kf/U793f81d146bc490baf031b08dfc1235ej.jpg" data-src="https://ae01.alicdn.com/kf/HTB1K2IjeWWs3KVjSZFx761WUXXae.png">

至于如何修改代码……**伪代码是不能直接修改的**，只能对着汇编来改。先把光标放在要修改的某一行汇编代码上，在上面的菜单中选择“Edit”，找到“Patch Program”，选择“Assamble”，就可以在弹出的窗口里**输入汇编代码**进行修改。“Patch Program”里面还有个“Apply patches to input file”，点了这个就会将之前的修改应用到可执行文件中。

<img data-src-webp="https://ae01.alicdn.com/kf/U2d7076f7f1ec4279bcca11bf14b45066J.jpg" data-src="https://ae01.alicdn.com/kf/HTB1.OUFbMFY.1VjSZFq761dbXXaB.png">

另外一个需要用到的选项卡是“String View”。程序中出现的字符串一般是被直接明文存入可执行文件的，在这个选项卡中会全部列出。菜单中选择“View”，“Open Subviews”，“Strings”或者直接使用快捷键 <kbd>Shift</kbd> + <kbd>F12</kbd> 就可以打开～

<img data-src-webp="https://ae01.alicdn.com/kf/U853f5a27f3e4487fbcf4cfd256f1930al.jpg" data-src="https://ae01.alicdn.com/kf/HTB1rTZve.GF3KVjSZFm762qPXXac.png">

显示中文字符串的功能是 7.0 版的 IDA 新加入的功能，不过上面的图中还有一些乱码的字符串（例如最上面的“-峱Ndko忲N”）没能被识别出来，这时就需要手动指定显示的字符编码。双击乱码字符串，进入 IDA View，在字符串上按下 <kbd>Alt</kbd> + <kbd>A</kbd>，就会显示修改显示编码的窗口。

<img data-src-webp="https://ae01.alicdn.com/kf/U0f1d773ce1114f31ac6fa35317a276f9x.jpg" data-src="https://ae01.alicdn.com/kf/HTB1Kpsze.uF3KVjSZK9762VtXXaK.png">

中文字符是使用每个字符固定占用两个字节的 UTF-16 LE 编码存储的，所以这里选择“Unicode C-style (16 bits)”，乱码就会变成正确的字符串“购买此软件”，对于其他乱码也可以同样处理|ω•`)

<img data-src-webp="https://ae01.alicdn.com/kf/U99e0aa45cd314ede851191caacf679deM.jpg" data-src="https://ae01.alicdn.com/kf/HTB1qJkAe8WD3KVjSZKP761p7FXaY.png">

小透明在摸爬滚打中了解了以上的基本功能后，就可以开始准备搞事啦！

## 跳过注册码验证

OverSpeed 的注册方式是：用户通过软件内的支付宝收款码向作者付款，并在留言中注明软件给出的八位十六进制数字组成的机器识别码（通过汇编指令 `cpuid` 获取），作者收到付款后向用户发送带有注册码的文件 `OverSpeed.key`，和软件本体放在同一目录就算是激活完成了。

所有的破解，就要从这个 `OverSpeed.key` 开始……

既然注册码是需要读取的文件，那么文件名就很有可能是预定义的字符串了，附近也许就有和激活有关的代码。在“String View”中 <kbd>Ctrl</kbd> + <kbd>F</kbd> 搜索这个文件名，果然有东西૮(ﾟ∀ﾟ)ა 接下来就应该去找调用它的位置。

双击后，在字符串上右键，有个“Xrefs graph to...”，这是查看调用的工具。

<img data-src-webp="https://ae01.alicdn.com/kf/U98b03d3e37fa4f7f94b8a93a260a52d2w.jpg" data-src="https://ae01.alicdn.com/kf/HTB1RRUye.CF3KVjSZJn762nHFXaJ.png">

点击后就会出现一个窗口，里面有这个字符串（对函数、变量也可以使用）的调用示意图。可以看到，唯一一个调用该字符串的地方在 `sub_14003DF50` 处。

<img data-src-webp="https://ae01.alicdn.com/kf/U216b376f5bb942b7b5d63429724fb617g.jpg" data-src="https://ae01.alicdn.com/kf/HTB1tX3ndQxz61VjSZFt761DSVXaZ.png">

那就看一下这个函数里面都写了些什么吧～按下 <kbd>F5</kbd> 来查看伪代码：

<img data-src-webp="https://ae01.alicdn.com/kf/U0f1eedbc05f14e54a035fae2019463efC.jpg" data-src="https://ae01.alicdn.com/kf/HTB1ZhwIeWWs3KVjSZFx761WUXXax.png">

信息量挺大的啊……比如 167 行就写着一个 `__asm { cpuid }`，然后 174 行有一个 `"%08X%08X"`，学过 C 语言的话就可以看出这里的 `sub_140043B80` 极有可能就是将格式化后的数据写入字符串的 `sprintf` 函数。这里写入的字符串是 `v147`，它就是保存机器识别码的变量。

> `cpuid` 这条汇编指令会将[和本机 CPU 有关的信息](https://c9x.me/x86/html/file_module_x86_id_45.html)以一定格式保存到 `eax`、`ebx`、`ecx` 和 `edx` 四个 32 位寄存器中，每个寄存器保存 32 bit 的内容。
>
> 根据动态调试的结果来看，机器识别码是由 `edx` 的高 8 bit 和 `eax` 的低 24 bit 拼成的。例如在小透明的电脑上正常运行程序时显示的识别码是 `BF0906EA`，而执行 `cpuid` 后 `edx` 的值为 `BFEBFBFF`（高 8 bit 为 `BF`），`eax` 的值为 `000906EA`（低 24 bit 为 `0906EA`），符合上面的规律。

继续往下找一下有没有什么重要的东西：

<img data-src-webp="https://ae01.alicdn.com/kf/Ub0f1c5acff3f4539915054584e0802c4N.jpg" data-src="https://ae01.alicdn.com/kf/HTB17nZ5bMFY.1VjSZFq761dbXXaF.png">

嗯……226 行的这个 `v21` 也很可疑啊？(｡•́ - •̀｡)

`v21` 的赋值有一大堆与的判断（应该就是用来判断注册码是否正确的？），而且判断中 `v105`、`v12`、`v10` 等变量也和上面保存机器识别码的 `v147` 有关，然后被用来给全局变量 `byte_1403B5F31` 赋值，而这个变量又出现在了 253 行的 `if` 语句（后面还有好几个）中，可以在软件的菜单上添加“购买此软件”的按钮。`sub_14003DF50` 中还有一些用作初始化失败提示的字符串，OverSpeed 可能在启动时弹出带有这些提示的对话框。由此可以判断：

 **程序启动时会执行 `sub_14003DF50`，`byte_1403B5F31` 是标记是否成功激活的变量。**

那么，要直接跳过注册验证的话，直接把 `byte_1403B5F31` 改成 `1` 不就可以了吗？∠( ᐛ 」∠)_

根据上面的伪代码，在流程图里可以找到这一部分：

<img data-src-webp="https://ae01.alicdn.com/kf/U4267a8036d1a4e21940c57e0de93d0e0B.jpg" data-src="https://ae01.alicdn.com/kf/HTB1HQILe81D3KVjSZFy762uFpXa2.png">

左上角的八个跳转都是来自验证注册码的部分，一旦验证错误就会跳转到左上角，执行 `xor al, al` 将寄存器 `al` 的值设为 `0`，只有验证通过才能正常执行到右上角的 `mov al, 1`。最后， `al` 的值会被赋给 `byte_1403B5F31`。

> 一个数和它自己异或，结果当然是 `0` 啦～
>
> 编译器之所以会选用异或清零，是因为这样比 `mov al, 0` 的效率会高一些。

至于修改的话，**把这个 `xor al, al` 改成和隔壁一样的 `mov al, 1` 就可以了**。修改后的结果是菜单中不会出现“购买此软件”的选项；试用模式下启动软件会先弹出“关于”的对话框，开始录屏时也会弹出对话框提示试用模式只能使用 15 帧录屏，修改后这两个对话框都不会弹出了。

现在就录个屏试试看……咦？为什么还是 15 帧？(='_'=)

## 解除帧率限制

是不是刚刚的修改存在漏网之鱼呢？

检查一下 `byte_1403B5F31` 的 Xref，就会发现这个变量除了在 `sub_14003DF50` 被调用，也在 `sub_14003FE60` 和 `sub_140040B00` 两处被调用了。

OverSpeed 旧版本的试用模式，除了限制录屏帧率还限制了时间，不过对时间的限制后来取消了，相关的代码残留在 `sub_140040B00` 中，因此接下来只需要检查 `sub_14003FE60` 就可以了～

这一部分是点击“开始录屏”后执行的代码，在伪代码中查找 `byte_1403B5F31`，唯一找到的结果出现在这里：

<img data-src-webp="https://ae01.alicdn.com/kf/U8a3fe67c982a47419ec0853719ee9732z.jpg" data-src="https://ae01.alicdn.com/kf/HTB12akVe8Cw3KVjSZFu763AOpXa1.png">

这是开始录屏时弹窗提示“试用模式”的代码，虽然刚刚已经通过修改将 `byte_1403B5F31` 锁定为 `1` 了，不过如果要直接跳过的话，同样也就是修改一行汇编的事(´ﾟωﾟ｀)

<img data-src-webp="https://ae01.alicdn.com/kf/U7abb95d1febd403f88263abf94b20f55Q.jpg" data-src="https://ae01.alicdn.com/kf/HTB1sqUAdQxz61VjSZFt761DSVXa5.png">

上面的 `cmp cs:byte_1403B5F31, 0` 会把两个数进行比较，将结果保存在寄存器 `ZF` 中（相等为 `1`，不等为 `0`）。`jnz short loc_1400402B1` 的跳转只有在 `ZF` 的值不为 `0`（也就是两数相等）时才会执行，所以修改的内容是**把 `jnz` 改成 `jmp`**，直接跳过“试用模式”的弹窗，进入录屏的流程中。

另外弹窗部分的这块伪代码中还有一个 `if (v27 > 15) v27 = 15;`，从这个数值和操作来看……`v27` 和帧率有关，看样子限制帧率为 15 的部分也被一起强行跳过了啊～

不过录屏的时候还是固定 15 帧……⊂彡☆))д`)

再看一下上面的伪代码，就会发现 `v27` 还被赋值给了另外一个变量 `dword_14039DE20`，继续检查它的 Xref，就能找到另外一个函数 `StartAddress`，还是少有的几个有名字的函数( ﾟ∀。)

<img data-src-webp="https://ae01.alicdn.com/kf/U36fe2e3e581a481ca467eb8b4f152042m.jpg" data-src="https://ae01.alicdn.com/kf/HTB1rswMe21H3KVjSZFB762SMXXae.png">

点进去一看，又是八个跳转……也就是说软件**在开始录屏的时候会再验证一次注册码**，验证错误则跳转到左上角，正确则执行右上角。两边的代码处理除了最后一两行都完全一致，区别在于验证错误的话就会直接把 `0x0F` 也就是 `15` 赋值给 `r8d`，验证正确才会用 `dword_14039DE20` 对 `r8d` 赋值，`r8d` 保存的值就是最后录屏时实际使用的帧率。

按理来说只要把左上角的 `mov r8d, 0Fh` 改成和右上角一样的 `mov r8d, cs:dword_14039DE20` 就可以了，不过小透明修改这里的时候发现改不了……也许是还没有学过汇编，能力有限的关系？(｡í _ ì｡)

既然这里改不动，那就从上面验证的过程入手：

<img data-src-webp="https://ae01.alicdn.com/kf/Ufff3224203a343758be9ca13baaeacd4a.jpg" data-src="https://ae01.alicdn.com/kf/HTB13v3BdQxz61VjSZFt761DSVXao.png">

`loc_14003FDDE` 就是上一张截图中验证不通过后把帧率设成 15 帧的部分，所以修改的目标是避免执行每次验证结束后的 `jnz short loc_14003FDDE`。不过还是因为小透明能力有限，没办法把 `jnz` 直接去掉，所以这里换一种思路：**把八个验证中的 `cmp eax, ecx` 都改成 `cmp eax, eax`**，相当于在写完作业后把标准答案也换成自己的作业，结果就是自己怎么写都是对的，注册码无论是什么也都是对的，保证每次验证时的结果一定正确 ﾟ∀ﾟ)σ

经过以上的修改，就可以在未注册的情况下使用 15 帧以上的帧率进行录屏了～ヾ(≧∇≦*)ヾ

下面的演示视频中，先启动的是原版程序，后启动的是根据以上分析修改过的程序。原版程序录屏帧率被限制为 15 帧，修改版程序就没有了帧率限制，窗口标题的“无期限试用中”也直接不显示了。

<video src="https://files.catbox.moe/ngymr6.mp4" poster="https://ae01.alicdn.com/kf/HTB18UxcXXP7gK0jSZFjq6A5aXXaq.jpg" controls preload="metadata"></video>

## 显示破解信息

既然破解了软件，当然还要找个地方留个名字才行c(`･ω´･ c)っ 这个操作的本质是修改程序内的字符串，不像上面修改程序运行逻辑一样需要用到汇编，所以相对来说比较简单～

使用 IDA 也能修改字符串，但是有点麻烦。一般来说，程序中出现的字符串都会原样存储在 EXE 或者 DLL 这些可执行文件中，所以只要用任何一种十六进制编辑器（这里小透明使用的编辑器是 WinHex）寻找字符串的存储位置就可以开始改了。

比如小透明要把左下角“提示：右键窗口左上角可以找到关于、购买、和转码功能的入口。”这行文字改成“Cracked By ✨小透明・宸✨”，先新建一个文本文档，把要改的字符写进去，**另存为，选择以 UTF-16 LE 编码保存**，用 WinHex 打开（记得在上面的“查看”中找到“字符集”，把右边的显示也改成 UTF-16 LE 编码，方便查看编码）。再将“提示：……”那一批文字输入另外一个空文本文档里，也用 WinHex 打开，获得这一串字符的字符编码是 `D0 63 3A 79 1A FF ...`。

<img data-src-webp="https://ae01.alicdn.com/kf/U81e09b596ba54c4f9812d7f617b242f2T.jpg" data-src="https://ae01.alicdn.com/kf/HTB13gOzXuL2gK0jSZPh761hvXXaQ.png">

一开始的 `FF FE` 可以无视掉了，这个是用来识别 Unicode 系列编码的数据是使用小端序（Little Endian，LE）还是大端序（Big Endian，BE）的标记（Byte Order Mark，BOM），而 `FF FE` 代表的就是小端序。

用 WinHex 打开软件本体，使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>X</kbd> 打开“查找十六进制数值”的窗口，以字符编码的方式查找提示的字符串。从 `0x3E0364` 的位置开始就能看到这条提示了～(｡･ω･)ﾉﾞ

复制要替换上去的文本的**十六进制数值**，然后**在提示的位置 `0x3E0364`** 右键，“编辑”，“剪贴板数据”，**“写入”**（不要选“粘贴”！），就可以用自己的文本替换程序原有的文本。

<img data-src-webp="https://ae01.alicdn.com/kf/Uf9eb3013d1d0452483a571d7c689f8f85.jpg" data-src="https://ae01.alicdn.com/kf/HTB1D2uDXAL0gK0jSZFx760WHVXaI.png">

蓝色的部分是刚刚覆盖的部分，因为字数和原来的字符串不同，所以多出来的部分最好是用空格占位（反正也看不出来 ( -\`ω-)✧）。空格的 ASCII 码是 `0x20`，不过 UTF-16 LE 编码下的每个字符不论是中文还是英文都固定占用两个字节，所以要把一直到最后的句号（对应的编码是 `02 30`）的部分都改成 `20 00`。

另外有一点要注意的是，**字符串在可执行文件中占用的空间是程序编译时就已经分配好了的**，也就是说**替换的字符串占用的空间不能超过原来的字符串**，否则修改起来就会比较麻烦了(:з っ )っ

<img data-src-webp="https://ae01.alicdn.com/kf/U194f2cdc6d894cedad86d6d2739a2f4aP.jpg" data-src="https://ae01.alicdn.com/kf/HTB1bt1EXrH1gK0jSZFw7637aXXav.png">

使用这个方法可以修改程序内出现的几乎所有文本，改完记得保存，再打开软件就可以发现原来的提示被改变了(´･ω･`)ﾉ⌒~*

## EXTRA：“没想到竟说出如此粗鄙之语！”

虽然破解 OverSpeed 的全过程都不需要用到动态调试，但是如果真的开了动态调试的话……

<img data-src-webp="https://ae01.alicdn.com/kf/Ub6ea7e7ec8004d459f9fcaaffe2a8b68A.jpg" data-src="https://ae01.alicdn.com/kf/HTB1qlqFXuT2gK0jSZFv760nFXXak.png">

程序中居然还藏了这样一段代码，其中的 [`IsDebuggerPresent`](https://docs.microsoft.com/zh-cn/windows/win32/api/debugapi/nf-debugapi-isdebuggerpresent) 是一个 Windows API 函数，检测是否在使用调试器运行程序。这段代码调用它的目的是在开始进行程序的某个关键操作时阻止程序的正常运行（跳转到 `loc_14005058E`），然后**弹出标题为“YOU ARE LOSER”，内容为某一句粗鄙之语的弹窗**……

分析上面的程序流程图，回答下列问题：
1. 弹窗是无限显示的吗？
2. 只修改一行汇编代码，如何跳过这个写有粗鄙之语的弹窗？

实际上粗鄙之语还有另外一处，不过原理同样是使用 `IsDebuggerPresent` 函数检测到调试器后就开始弹出粗鄙之语，<ruby>有兴趣<rt>没事干</rt></ruby>的话可以回到[开头](#破解过程)下载软件样本，自己找一找～ヽ(･ω･｡)、

另外这句话实在是太碍眼了，不符合“富强民主文明和谐”的社会主义核心价值观，所以小透明决定在跳过这个弹窗的同时，顺便把粗鄙之语替换掉……

<img data-src-webp="https://ae01.alicdn.com/kf/U561a976d18ec413e9099e8e344d793cck.jpg" data-src="https://ae01.alicdn.com/kf/HTB1fF1KXAL0gK0jSZFt760QCXXaQ.png">

~~只是破解一个小软件而已，为什么也要[伤害自己](https://music.163.com/#/song?id=26593066)啊……( ´_ゝ`)旦~~

<img data-src-webp="https://ae01.alicdn.com/kf/U3c9adc66eff34b1b8ba8144262dbbff5w.jpg" data-src="https://ae01.alicdn.com/kf/HTB10xyIXAT2gK0jSZFkq6AIQFXa4.jpg">

# 破解版软件下载（？）

刮刮乐：<span style="background-color: #000;" href="https://files.catbox.moe/n5h1zl.7z">你什么时候产生了传播“学习版”软件并不违法的错觉？(　ε:)</span>

<img data-src-webp="https://ae01.alicdn.com/kf/H534a3364b07b4f8d9d17f75a45bdf129z.jpg" data-src="https://ae01.alicdn.com/kf/HTB14hiye.GF3KVjSZFm5jbqPXXaA.gif">

**以上内容仅限用于学习和交流，不得用于商业或非法用途，否则后果自负。**