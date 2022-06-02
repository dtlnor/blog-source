---
title: Phar 包的使用方法
date: 2020-04-25 15:04:36
updated: 2020-04-25 15:04:36
excerpt: 折腾在线剪贴板的副产物
thumbnail: https://ae01.alicdn.com/kf/H93030291fe6941c0b0b6557b6e80b732S.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/H3ce687ea30104905b2f618c3a0427c83V.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/dce16d648698a8d5e0151ac6637cae1e11806.jpg
thumbnail_color: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIADAAcwMBIQACEQEDEQH/xAA1AAEAAwADAQEAAAAAAAAAAAAAAQcIBAUGAwkBAQACAwEBAAAAAAAAAAAAAAAEBgEDBQIH/9oADAMBAAIQAxAAAAD9UgAOK9Z1veFZ+9TasAJAQeKo22QaS2bQfoVkOlSwCJAVx1I1ErfSuv2B8/8ApXNeIYBEgPL5zmvg9LZ2Os8Z+zm6QCJAUFrmW/kOwc3T3vIfk58gAiQAyXc++XZk6IgAH//EACsQAAEEAQIFAwQDAQAAAAAAAAECAwQFBhEhAAcSEzEUMEEIIlFhIDJC0f/aAAgBAQABPwD+drYw6WvkTpPV247SnFhKStWiRqdEjc8H6hg3MUTQrMTfcujr0SfIHGFZXT5zj0W6rQr08jrCQsAKBQopOvtkgcZDzArq3qYh6SXxtok/Yk/s8ZLY5FlESay26tyW9FeTGaRsAooIASnibk+B1uCpRKsy3d1izFnQCntlUx0jpbK1bEIA2IPg8ckqRePctKKG8hCHvT9x3pIIJcJV5Hn2+ZKLlmM04w+oQz9ryEbHU+CT+OH5YiOMalKQtZHUogAaDX54QqRM78mE0ZDkTVZdQtKO2s+NFEjQnh6qraiZRW1phlTZ2VnLUuycSCvsKXuCnyhKEJG5J+48Y36UU0X0y21NFGqegdKRr8AfAHt5/luLYfjcydkEhtuKGyntndbpOwQhPyo8YjPx7MMZVY21ZYw0vSnUNw5DSmlFlJ+xYUsJ6tR/pPFpyngZYw+1WvrpaxsFbkzvKcdcWP6t9B+B5KuMKt77LYT1FOdROlV1mYzFm2jpRLZSnd0/tPhRGxPFPVx6evZitDRLafJ+T8k/s+3F5d5Hd86ZuT5PHYdqqyKluib6+tIWr+zhQfCxxluOx7qqWgBKHWQVNL/B/wCHjFuZEzJ3L2lYqwirrZfbbtEr2kupOi2wPnp/I4wDGhWQfXSEdL8hOwI3QjyB7vN2H9UGR2UylxmHWQ6V1RQJrb4Dy2l7b9e4IHFRyppKKNRRYbaGotdFQ2toJ0Dikf6P7J3V+fY//8QALREAAgIBAgMECwEAAAAAAAAAAQIDBBEABRIgIRMxUnEGEBUjMkFhgYKiscH/2gAIAQIBAT8A9Z6DVa6tl2UKVIGRz09qWrt1ixYKrNJBII1Y44QV/uqsZWcng4eFMHzJzzbN2HtKATKGUtgZ8Xy1uE1eBpXuYWJnWMMQSMED/c6WJzCZ1Ruy7QoHIxkjrzK5RgwOCpBB1uG7ekc9SWyStaoTw9w94T4c5P31JakbZ6UTAgyFpmH6jmdWYpjuDZOqEjXUpUcZMd5JvwXqdbrZFq/M4+ENwr5L0HPt1yxRsSy4HWNkXH1HL//EACkRAAIBAgUCBgMBAAAAAAAAAAECAwQRAAUSICETQQYxMnGRoRAUUVL/2gAIAQMBAT8A/KIZHVBa7EAXNuTjPfC8+SU0U5nSVHYI1hYqxF96VevMKZVBMaTxmQgXuAwJxndb1Mo6Rl1F69nXm5KKCAT87qzX+s+g2NvrE8VbU10UdCzNLDAZdIOmzBj834xWSWaOJnJk0Bin+R5DcqGUhAL6uMUWVeHIMxhM8AramI3ReeLHgOQQLE9ucZjBFFnNX0/SlkHe3FyPcbqWaOFagt6mhKpx3YgH6wyCEVdSSQDTmPjuzcDFLH04EB8yLn3O/MUoJqWmipy5IIeUt/dv/9k
---

> 封面图：[Pixiv ID: 80891263 「あかりちゃん」 by ぽんたす](https://www.pixiv.net/artworks/80891263)

隔壁的 Java 有 JAR 作为打包格式，其实 PHP 也是有叫做 Phar 的打包格式的。Phar 一般有以下几种用途：
* 打包网站的 PHP 代码，然后用来 `require`。
* 直接当成可执行文件使用，可以用来发布 CLI 工具。[Composer](https://getcomposer.org/) 的本体实际上就是一个 Phar 文件。
* ~~一些 CTF 的题目的题材~~ 不是瞎写，从客户端上传的特别构造的 Phar 包确实可以用来绕过上传检测。但是现在说的是用 Phar 部署后端代码，所以就不考虑这种情形了～

然而实际上“打包 PHP 代码”似乎并不是一个非常重要的需求。毕竟传统的用 PHP 开发网站的方法是只要把代码文件在硬盘里放好了，就可以**按照文件路径访问 URL 执行那个文件**（直接用文件系统作为路由），打包代码好像没什么意义。至于 CLI 工具，有多少人会闲得没事用 PHP 写 CLI 工具？事实上 Phar 也确实变成了一个比较冷门的东西，相关的资料并不多……(-\_-｡)

其它语言开发的网站程序，一般是使用“常驻后台”的模式：运行网站程序监听某个端口，**通过一个路由表来决定访问什么 URL 将执行哪些代码**（所以也不需要像 PHP 一样总是要在 URL 后面带个 `.php`）。在这种“单入口模式”下，打包就有意义了，毕竟部署的时候如果需要面对一大堆代码文件那还是比较麻烦的，只有一个文件就会方便很多。比如用 Java 编写的 [kiftd](https://github.com/KOHGYLW/kiftd) 的程序本体就是一个 JAR 文件，用 Go 编写的 [auxpi](https://github.com/aimerforreimu/auxpi) 的程序本体就是编译出来的可执行文件，部署的时候把这个文件往服务器上一丢就完事了。

之前在一位巨佬的安利下试着学习了一下 PHP 的 [Swoole](https://www.swoole.com/) 框架，这个框架也是使用了常驻后台的模式。在自己对着 Swoole 的文档摸爬滚打之后，终于试着用它做了一个[在线剪贴板](https://github.com/TransparentLC/cloud-clipboard)，等到做完了才想起来，到底要怎么发布成品呢……？

直接发布一大堆 PHP 源代码的话虽然可以，但是太不优雅了。如果能把所有的代码（甚至加上那些静态文件）用 Phar 打包，然后用 `php app.phar` 直接运行，那就很简洁了！(´• ᵕ •`)*

# 第一个 Phar 包

默认情况下 PHP 只能读取而不能写入 Phar 包，所以需要先去 `php.ini` 里面把 `phar.readonly` 的值改成 `Off`。Phar 和 tar、zip 之类的打包格式很像，不过它的特性在于可以直接被 PHP 读取 / 执行。实际上，Phar 里面可以添加不限于 PHP 代码的任何文件。

先来个简单的栗子～使用 PHP 的二维码库 [endroid/qr-code](https://github.com/endroid/qr-code)，在 `index.php` 中根据 URL 参数生成对应内容的二维码。

`index.php` 的代码：

```php
require_once __DIR__ . '/vendor/autoload.php';
$qr = new \Endroid\QrCode\QrCode($_GET['text'] ?? '');
header('Content-Type: ' . $qr->getContentType());
echo $qr->writeString();
```

用 Composer 装好依赖以后，目录结构大概就是下面这个样子：

```plaintext
├─composer.json
├─composer.lock
├─index.php
└─vendor
  ├─autoload.php
  └─……（一堆依赖包）
```

虽然部署的时候不需要带上 `vendor` 文件夹，只要现场 `composer install` 一下就可以了。不过这里就试试用 Phar 对 `vendor` 打包好了～在根目录写一个简单的打包脚本：

```php
// 完全删除之前的Phar包
@unlink('vendor.phar');
// 新建一个Phar包，如果文件已存在的话就是在已存在的包上修改
$phar = new Phar('vendor.phar');
// 将vendor文件夹整个放进Phar包
$phar->buildFromDirectory('vendor');
// 停止缓存，将Phar包写入文件
$phar->stopBuffering();
```

在命令行中执行后，就可以得到一个 `vendor.phar`。一般情况下引入所有的库都是用 `require_once __DIR__ . '/vendor/autoload.php'`，现在把它改成从刚刚打好的 Phar 包引入：`require_once 'phar://' . __DIR__ . '/vendor.phar/autoload.php'`，也是可以正常运行的～

甚至还可以对包里面的文件直接使用各种文件处理函数，比如 `file_get_contents('phar://' . __DIR__ . '/vendor.phar/autoload.php')`;

这里的 `phar://` 表示从一个 Phar 包中读取文件（如果不写的话就不能和“读取名为 `vendor.phar` 的文件夹里面的某个文件”区分了），包里的文件结构和刚才的 `vendor` 文件夹是一样的。

将各种文件打包，然后**用 `require` 从包中引入**，这就是 Phar 的基本用法了。因为这些文件不需要通过用户访问 URL 直接获取 / 执行，所以即使它们被打包了也没什么关系。零碎文件太多的情况下，打个包还是很方便的(っ´ω｀)ﾉ

# 处理 Phar 包的文件

使用 `buildFromDirectory` 默认是把文件夹内的所有文件都拿去打包，还可以使用一个正则表达式来筛选需要打包的文件，Phar 也支持解包操作。

```php
// 只打包PHP文件
$phar->buildFromDirectory('vendor', '/\.php$/');
// 解包至extract文件夹
$phar->extractTo('extract');
```

也可以用 `addFile` 逐个添加文件。在上一个栗子的基础上，假设根目录里还有一个 `static` 文件夹，用来保存图片等静态资源：

```php
// 添加一个文件
$phar->addFile('static/image.jpg');
// 添加一个文件，但是在包里面是放在another_static目录下
$phar->addFile('static/image.jpg', 'another_static/image.jpg');
// 直接指定文件内容，另外还可以删除文件
$phar->addFromString('test.php', '<?php echo "Hello world!";');
$phar->delete('test.php');
// 还可以使用关联数组的写法
$phar['test.php'] = '<?php echo "Hello world!";';
unset($phar['test.php']);
```

还可以使用递归遍历的方式将文件夹内的文件打包，在此基础上可以进行进一步的筛选，比如把不需要的测试文件（`tests`）、使用文档（`docs`、`examples`）等等都筛选掉：

```php
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator('vendor', RecursiveDirectoryIterator::SKIP_DOTS)
);
foreach ($files as $file) {
    // $file是每个文件的路径，方便起见统一使用/作为路径分隔符
    $file = str_replace('\\', '/', $file);
    // 排除.git文件夹里面的文件
    if (in_array('.git', explode('/', $file))) continue;
    $phar->addFile($file);
    echo $file . "\n";
}
```

# Phar 包的“入口”

如果只用来文件打包的话，Phar 和一般的压缩包也没什么区别嘛……

执行 Phar 包的时候会先执行一段 PHP 代码，可以设置一个“入口文件”（默认是 `index.php`）用来自动执行：

```php
$phar = new Phar('app.phar');
$phar->addFromString('hello.php', '<?php echo require "include.php";');
$phar->addFromString('include.php', '<?php return "Hello world!";');
$phar->addFile('static/image.jpg');
// createDefaultStub可以根据包里的某个文件生成一段代码
// setStub可以设定自动执行的代码，配合使用的话就可以实现“入口文件”的功能
$phar->setStub($phar->createDefaultStub('hello.php'));
$phar->stopBuffering();
```

这样的话，在命令行中输入 `php app.phar`，或者在 PHP 代码里输入 `require_once 'phar://' . __DIR__ . '/app.phar';`，都可以输出“Hello world!”，Phar 包里面的其它文件仍然可以照常读写。

做到这一步已经可以用 Phar 打包 CLI 程序了，那如果在浏览器里访问的话会怎么样呢？在没有额外配置过的 Nginx + PHP 的环境下测试一下：
* 访问 `http://localhost/app.phar`，结果是浏览器询问是否要下载 Phar 文件。
* 访问 `http://localhost/app.phar/`，得到了 404 错误，看来 Phar 并不会像 Nginx 一样自动配置首页，把 `xxx/` 当成 `xxx/index.php` 来处理。
* 访问 `http://localhost/app.phar/static/image.jpg`，得到的也是 404，由此可见**并不能直接从浏览器中访问 Phar 里面的静态文件**。
* 访问 `http://localhost/app.phar/hello.php`，输出了“Hello world!”。
* 访问 `http://localhost/app.phar/include.php`，还是输出了“Hello world!”，按理来说这个文件不会输出任何东西的啊？
* 访问 `http://localhost/app.phar/not_exist.php`，仍然输出了“Hello world!”，为什么这回没有 404 了？
* 访问 `http://localhost/app.phar/path_not_exist/file_not_exist.php`，依然输出了“Hello world!”，这……？！

由此得出结论，只要在浏览器中访问时，**URL 中 Phar 包后面的部分是以 `.php` 结尾的**（不论最后的这个文件名是什么），那么就一定会执行“入口文件”。所以如果要只用一个 Phar 直接部署网站的话，有两种方法：
* 如果网站程序是“单入口模式”，也就是所有的路由集中在 `index.php` 上，那就可以把这个 `index.php` 设为入口文件打包然后设置禁止访问，再另建一个 `index.php`，内容只有对这个包的 `require_once`。
* 如果是“多入口模式”，也就是把文件系统当成路由，那就需要自己写一个“入口文件”来根据 URL `require_once` 包里面对应路径的文件。

另外静态文件是需要单独保存的，即使打了包也不能从浏览器中直接访问。理论上确实可以写个 PHP 文件专门用来从包里面读取并返回文件……但是在大多数情况下，这么做是没有必要的啦╮(╯\_╰)╭

# 在打包的时候进行压缩

只要 PHP 环境附带了 zlib 或 bz2 扩展，就可以在打包的时候对包里面的文件进行压缩，当然也要附带对应的扩展才能使用被压缩过的包。将压缩后的包不经过解压直接解包的话，虽然也能得到文件，但是文件的内容是被压缩过的二进制数据。

```php
// 默认是不使用压缩
$phar->compressFiles(Phar::NONE);
// 可以自行选择压缩算法，bz2比gz有更好的压缩效果
$phar->compressFiles(Phar::GZ);
$phar->compressFiles(Phar::BZ2);
// 还可以解压文件
$phar->decompressFiles();
```

如果需要更极端的压缩率，还可以像隔壁 JS 一样对代码文件进行 uglify（去掉不必要的换行、注释和空格）。比如对于 JSON 文件可以先反序列化再序列化：

```php
$json = <<< 'JSON'
{
    "foo": "bar",
    "baz": 123
}
JSON;
echo json_encode(json_decode($json, true), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
// {"foo":"bar","baz":123}
```

那对于 PHP 文件呢？PHP 自带一个 [`php_strip_whitespace`](https://www.php.net/manual/zh/function.php-strip-whitespace.php) 函数，可以从文件中读取代码，然后返回去掉了注释和（大部分）空格的 PHP 代码。

```php
$php = <<< 'PHP'
<?php
// 计算1到99的和
$sum = 0;
for ($i = 0; $i < 100; $i++) {
    $sum += $i;
}
echo $sum;
PHP;
file_put_contents('code.php', $php);
echo php_strip_whitespace('code.php');
// <?php
// $sum = 0; for ($i = 0; $i < 100; $i++) { $sum += $i; } echo $sum;

// 理论上这段代码还能更短一些：
// <?php $sum=0;for($i=0;$i<100;$i++){$sum+=$i;}echo $sum;
```

在这个函数的文档下面，有人写了个[可以更极端地压缩 PHP 代码的函数](https://www.php.net/manual/zh/function.php-strip-whitespace.php#82437)，通过 PHP 自带的语法分析函数 [`token_get_all`](https://www.php.net/manual/zh/function.token-get-all.php) 完全重写代码，理论上确实可以把代码压缩到最短，实际上……试着用了这个函数以后，Composer 创建的 `autoload.php` 就抛出了一个语法错误(°ー°〃)

（毕竟这是十二年前的代码，可能是不支持新版 PHP 的语法吧）

---

有关 Phar 打包的操作基本上就是这些～

另外，要获取当前正在执行的 Phar 包的路径 / 判断代码是否保存于 Phar 包中，可以使用 `Phar::running()`：

```php
// 输出当前所在的Phar包的路径
// 如果不是Phar包的话会返回空字符串
echo Phar::running();
echo Phar::running(false);
// phar://D:/app.phar
// D:/app.phar

// 可以设置一个常量判断代码是否在Phar包里运行
define('IN_PHAR', (bool)Phar::running());
```