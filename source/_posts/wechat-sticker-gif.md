---
title: 将微信表情包保存为 GIF 并进行批量放大
date: 2099-07-13 17:35:14
updated: 2099-07-13 17:35:14
thumbnail:
hljsCustomLanguage:
  - powershell
---

在微信里可以保存一般的静态图片，不过所有的 GIF 动图都会被当成“表情”，只能把它**添加到表情的收藏夹**，不能保存到文件。

<img data-src-webp="https://ae01.alicdn.com/kf/Uf8b3f482c790480493cf1ac8b5b9477c2.jpg" data-src="https://ae01.alicdn.com/kf/HTB1DR2zSXzqK1RjSZFC762bxVXax.png">

对于一般的表情，可以在[网页版微信](https://wx.qq.com/)中直接 F12，选中图片对应的 `<img>` 标签，从 `src` 属性中获取链接，然后下载。

<img data-src-webp="C:\Users\Admin\Desktop\HTB1oPfzSa6qK1RjSZFm7600PFXaQ.webp" data-src="https://ae01.alicdn.com/kf/HTB1oPfzSa6qK1RjSZFm7600PFXaQ.png">

不过表情商店里的表情就不能在网页版微信中正常显示了……(｡･ˇ\_ˇ･｡:)

小透明试过在手机上对微信的网络流量进行抓包，不过没有抓到有效的数据，大概是微信对表情包进行了加密。而**Win32 版**的微信客户端对表情包的缓存文件也进行了加密，完全提取不出任何有用的信息……所以真的没有办法了吗？

这里跑题说一点东西，微软最初对 Windows 10 的设想之一是跨平台（电脑和手机）的操作系统，然而 Windows Phone 系列现在是已经被微软彻底放弃了。~~微软后来成为了敬业的 Android 和 iOS 应用开发商~~

在占领移动平台的探索和失误中，值得一提的是微软为了实现 APP 跨平台而设计的 **UWP 应用**。UWP 的机制使国产 APP 的 UWP 版可以在界面风格上向 Windows 10 的 Fluent Design 看齐，但更重要的是使它们无法**像传统的 Win32 版程序一样作恶**（弹窗、捆绑、甚至[在后台挂上恶意进程](https://www.zhihu.com/question/264625793)等等）。

虽然今天 UWP 应用的生态实在是惨不忍睹，但在装机的时候 UWP 应用还是可以作为传统 Win32 版程序的替代品的～|。•ω•)っ◆

微信也有个 [UWP 版](https://www.microsoft.com/zh-cn/p/%E5%BE%AE%E4%BF%A1-uwp/9nrj2w1gnl09)，在 Windows 10 自带的“应用商店”里就可以找到。注意这个应用的名称是“微信(UWP)”，不要和那个叫“微信 For Windows”的东西混淆，后者是 Win32 版转制成 UWP 版的产物，也许是属于换汤不换药？

之所以要跑题说到这个，那当然是因为：UWP 版的微信是**不会对表情包缓存加密**的啊！| ᐕ)୨

UWP 应用的数据文件统一存在系统盘的这个目录中：

```plaintext
%LocalAppData%\Packages
```

在这个目录中，每个 UWP 应用的数据都存在以一个以应用名称命名的文件夹内。UWP 版微信的图片缓存都存在这个目录中：

```plaintext
%LocalAppData%\Packages\TencentWeChatLimited.WeChatUWP_sdtnhv12zgd7a\LocalState\mmstorage\wxid_[随机字母数字]\custom_img
```

（`wxid_[随机字母数字]` 和微信账号有关，如果有多个微信账号在 UWP 版微信上登录过就会有多个这样的目录）

1. 在手机上从表情商店下载好想要提取的表情包。
2. 在 UWP 版微信中进行~~反人类的扫码~~登录。
3. 清空图片缓存（删除 `custom_img` 目录下的所有文件）。
4. 把表情包里的所有表情发给任意一个人～发给“文件传输助手”也是可以的(〃′▽`)

<img data-src-webp="https://ae01.alicdn.com/kf/U01de6340095c4940b701cc763c483cafs.jpg" data-src="https://ae01.alicdn.com/kf/HTB1jbA5SmrqK1RjSZK9760yypXa8.png">

在发送表情的时候，缓存文件夹里会出现一些文件，这些就是表情包的 GIF 文件本体ヾ(Ő∀Ő๑)ﾉ

不过这些文件没有 `.gif` 的扩展名，手动右键重命名加上是没关系的，不过如果能用重命名的快捷键 F2 就更好了～当然最快的方法应该是 Shift + 鼠标右键，“在此处打开 Powershell 窗口”，然后使用以下的 Powershell 脚本：

```powershell
foreach ($File in Get-ChildItem) {
    Rename-Item -Path $File.FullName -NewName ($File.Name + '.gif')
}
```

这样就可以给所有文件加上扩展名，完成对表情包的提取了。

---

微信的表情包格式标准是 240x240 的 GIF 图片（不论是否是动画表情），不过如果表情包分辨率再高一些的话，在聊天时就会显示得更大，大概会更好看一些？

所以小透明就试着折腾出了一些方法……总之，要用到的是开源的图像处理工具 [ImageMagick](https://imagemagick.org) 还有在放大动画风格图片这一方面非常好用的 [waifu-2x](https://github.com/lltcggie/waifu2x-caffe)