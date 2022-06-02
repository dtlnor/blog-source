---
title: 在 Javascript 和 PHP 中进行加密和解密
date: 2020-02-26 22:09:56
updated: 2020-02-26 22:09:56
excerpt: 学了一学期的（入门）密码学，不自己试着用一下怎么行嘛(´･_･`)
mathjax: true
thumbnail: https://ae01.alicdn.com/kf/H9ffbbb6a89044b398aa6ec9cd9de2bfb4.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/Hc8a25c3090c54671aedfc658a11e0ecaz.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/1b1f1958fbd8d0cd78f0e3b2e2d4ded323497.jpg
thumbnail_color: data:image/jpeg;base64,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
---

> 封面图：[Pixiv ID: 77846017 「京あか」 by ネリヲ](https://www.pixiv.net/artworks/77846017)

因为上个学期的课程里有学习到了一点入门的密码学（逃 所以就顺便想尝试一下在编程中进行加密解密相关的操作～(ﾉ*･ω･)ﾉ

在开始之前，先简单地过一遍相关的一些概念：
* 明文：没有加密的数据
* 密文：加密后的数据
* 对称加密：使用**同一个密钥（如果是除 CBC 以外模式的分组密码，还需要 IV）**进行加密和解密
* 非对称加密：任何人都可以使用公开的**公钥**加密，只有藏着**私钥**的人才能解密
* Hash：把任意长度的输入变换成**固定长度的、尽可能避免产生碰撞的**输出，是**不可逆**操作
* Base64：使用可打印的字符表示二进制数据的一种**编码方式**，因为任何人都可以直接进行编码和解码，所以**不是加密算法**

这里的目标是在前端 Javascript 环境和后端 PHP 环境，分别使用一下 RSA 和 AES 这两种常见的非对称和对称加密算法～

用到的各种开源库：
* [CryptoJS](https://github.com/brix/crypto-js)：用 Javascript 实现了多种对称加密算法和 Hash 算法的函数库。
* [JSEncrypt](https://github.com/travist/jsencrypt)：用 Javascript 实现了 RSA 的加密解密、验证签名、密钥生成。
* [OpenSSL](https://www.php.net/manual/zh/book.openssl.php)：广泛用于安全通信的一个库，支持大多数的加密算法和 Hash 算法，这里用到的是 PHP 自带的相关扩展。
* [phpseclib](https://github.com/phpseclib/phpseclib)：一个以面向对象的方式封装了 RSA 和其他一些对称加密算法的 PHP composer 包，实际上还是在调用 PHP 的 OpenSSL 之类的加密扩展。（如果没有安装扩展的话，这个库自己也已经用 PHP 把各种算法实现了一遍……）

---

# AES 对称加解密

## CryptoJS

在开始进行加解密之前，有必要先介绍一下 CryptoJS 中的 `WordArray`～

由于 JS 中直接操作数值型数据的 [TypedArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays) 是一个相对比较新的标准，而 CryptoJS 这个库开发于 TypedArray 进入 JS 标准之前，所以 CryptoJS 中明文、密文、密钥和 Hash 一直都是使用了一个自建的 WordArray 对象，通过一个相当于 UInt32 数值组成的数组和一个标志位来代表原始的二进制数据：

<img data-src-webp="https://ae01.alicdn.com/kf/H180bea62bb834f2080d2986bbc7ae58c1.jpg" data-src="https://ae01.alicdn.com/kf/Hbab311ab1f324d76a1d1754e72667b3e2.png">

（由于字节序不同，虽然也可以使用 `CryptoJS.lib.WordArray.create(new Uint32Array([...]))` 得到 WordArray ，但是里面的 `words` 和输入的 `Uint32Array` 是不同的）

加密和解密都是本质上都是对二进制数据进行操作，CryptoJS 也支持一些“编码”标准，可以与 WordArray 相互转换：

```js
// 三个数据实际上都是QWERTYUIOP123456
// 使用CryptoJS.enc.*.parse将数据转换为WordArray
let a = CryptoJS.enc.Utf8.parse('QWERTYUIOP123456');
let b = CryptoJS.enc.Hex.parse('51574552545955494f50313233343536');
let c = CryptoJS.enc.Base64.parse('UVdFUlRZVUlPUDEyMzQ1Ng==');

// 使用CryptoJS.enc.*.stringify将WordArray转换为数据：
CryptoJS.enc.Utf8.stringify(a); // "QWERTYUIOP123456"
CryptoJS.enc.Hex.stringify(b); // "51574552545955494f50313233343536"
CryptoJS.enc.Base64.stringify(c); // "UVdFUlRZVUlPUDEyMzQ1Ng=="

// 也可以对WordArray使用.toString(CryptoJS.enc.*)，和CryptoJS.enc.*.stringify是等效的
a.toString(CryptoJS.enc.Utf8);
b.toString(CryptoJS.enc.Hex);
c.toString(CryptoJS.enc.Base64);
```

除了已有的编码，还可以在 `CryptoJS.enc` 中加入一个有 `stringify` 和 `parse` 两个函数的对象自行扩充。比如下面的一段代码就添加了对 `Uint8Array` 的支持（[原代码出处](https://gist.github.com/lettergram/ba6733a854f835bca22b)）：

```js
CryptoJS.enc.Uint8 = {
    // 将WordArray转换为数据，虽然是stringify但是不一定要求是字符串
    stringify: wordArray => {
        let words = wordArray.words;
        let sigBytes = wordArray.sigBytes;
        let u8arr = new Uint8Array(sigBytes);
        for (let i = 0; i < sigBytes; i++) {
            u8arr[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xFF;
        }
        return u8arr;
    },
    // 将数据转换为WordArray
    parse: u8arr => {
        let len = u8arr.length;
        let words = [];
        for (let i = 0; i < len; i++) {
            words[i >>> 2] |= (u8arr[i] & 0xFF) << (24 - (i % 4) * 8);
        }
        return CryptoJS.lib.WordArray.create(words, len);
    }
};

// "ABCD"
CryptoJS.enc.Uint8.parse(new Uint8Array([0x41, 0x42, 0x43, 0x44])).toString(CryptoJS.enc.Utf8)
```

调用 `CryptoJS.*.encrypt` 函数可以进行加密，并~~钦定~~加密模式、填充模式和 IV，比如加密明文 `ABCD`：

```js
let message = CryptoJS.enc.Utf8.parse('ABCD');
let key = CryptoJS.enc.Utf8.parse('0123456789ABCDEF');
let iv = CryptoJS.enc.Utf8.parse('FEDCBA9876543210');

let cipher = CryptoJS.AES.encrypt(message, key, {
    iv: iv, // 如果是ECB模式就不需要钦定IV
    mode: CryptoJS.mode.CBC, // 不钦定的话，默认也是这个
    padding: CryptoJS.pad.Pkcs7, // 不钦定的话，默认也是这个
});
```

容易踩坑的一点是上面的 `cipher` 并不是 WordArray，而是一个**包含了加密算法、加密模式、密文、密钥、IV 等信息的对象**。对这个 `cipher` 直接 `toString` 可以得到 Base64 编码后的数据，但是只有从这个对象的 `ciphertext` 获取对应的 WordArray 才能使用 `CryptoJS.enc.*.stringify` 和 `.toString(CryptoJS.enc.*)` 任意转换为一般的数据，否则就会报错了(´･_･`)

<img data-src-webp="https://ae01.alicdn.com/kf/Ha44b615209624032a9e81fc8cae56fac5.jpg" data-src="https://ae01.alicdn.com/kf/H799a3635f4a6488f903ed8d099ae48aaZ.png">

```js
// "1Wl2Kg1/0Vh+fJPX+UsJaA=="
cipher.toString();
cipher.ciphertext.toString(CryptoJS.enc.Base64);
CryptoJS.enc.Base64.stringify(cipher.ciphertext);

// "d569762a0d7fd1587e7c93d7f94b0968"
cipher.ciphertext.toString(CryptoJS.enc.Hex);
CryptoJS.enc.Hex.stringify(cipher.ciphertext);

// 报错
cipher.toString(CryptoJS.enc.Base64);
CryptoJS.enc.Base64.stringify(cipher);
```

至于解密操作……当然是把 `encrypt` 改成 `decrypt` 了，但是和加密一样也有一个坑：

**用来解密的是上面提到的“对象”，而不是 WordArray**。直接传一个 WordArray 进去是无法正常解密的，然而解密之后得到的又是 WordArray。一开始使用 CryptoJS 的时候总是发现解密得到的东西是空白的，其实就是在这个地方踩了坑┐(´-｀)┌

在实际中，收到的密文显然不会是上面的“对象”的形式（如果把加密算法、密钥、IV 之类的也传过来的话……？！），因此就需要模仿上面的 `cipher`，**用 WordArray 临时创建一个只有 `ciphertext` 这个属性的“对象”**用来解密：

```js
// 使用上面的“对象”解密，可以得到ABCD
CryptoJS.AES.decrypt(cipher, key, {iv: iv}).toString(CryptoJS.enc.Utf8);
// 直接使用WordArray解密，得到的是空字符串
CryptoJS.AES.decrypt(
    CryptoJS.enc.Base64.parse('1Wl2Kg1/0Vh+fJPX+UsJaA=='),
    key, {iv: iv}
).toString(CryptoJS.enc.Utf8);
// 临时用WordArray创建一个“对象”，也能得到ABCD
CryptoJS.AES.decrypt(
    {ciphertext: CryptoJS.enc.Base64.parse('1Wl2Kg1/0Vh+fJPX+UsJaA==')},
    key, {iv: iv}
).toString(CryptoJS.enc.Utf8);
```

嗯……总的来说，使用 CryptoJS 进行加解密是比较麻烦的一件事，而且它的[官方文档](https://github.com/brix/crypto-js/blob/develop/docs/QuickStartGuide.wiki)也只是介绍了一下支持的算法，甚至没有一段演示用的代码（[README.md](https://github.com/brix/crypto-js/blob/develop/README.md) 里面倒是简单地介绍了一下用法）。至于加密和解密时涉及到的那个“对象”和 WordArray 的区别，不自己摸索一下估计就很难弄明白呢……(ฅ́дฅ̀)

另外，用 CryptoJS 计算 Hash 既可以输入字符串也可以输入 WordArray，得到的还是 WordArray：

```js
// "cb08ca4a7bb5f9683c19133a84872ca7"
CryptoJS.MD5('ABCD').toString(CryptoJS.enc.Hex);
CryptoJS.MD5(CryptoJS.enc.Hex.parse('41424344')).toString(CryptoJS.enc.Hex);
```

## OpenSSL

在 PHP 中进行 AES 加密和解密分别用到的是 [`openssl_encrypt`](https://www.php.net/manual/zh/function.openssl-encrypt.php) 和 [`openssl_decrypt`](https://www.php.net/manual/zh/function.openssl-decrypt.php) 两个函数，参数的顺序也基本相同：

```php
openssl_encrypt(string $data, string $method, string $key, int $options = 0, string $iv = "");
openssl_decrypt(string $data, string $method, string $key, int $options = 0, string $iv = "");
```

`$data` 是明文和密文，`$method` 是加密方式，`$key` 是密钥。`$option` 可以统一设定调用上面的函数加密和解密时**密文**的格式：默认为 `0` 代表使用 Base64，设为 `OPENSSL_RAW_DATA` 就代表直接使用字符串。但是**明文、密钥和 IV** 仍然是固定使用**字符串**而不是 Base64。

```php
// 使用Base64编码：
echo openssl_encrypt('ABCD', 'AES-128-CBC', '0123456789ABCDEF', 0, 'FEDCBA9876543210'); // "1Wl2Kg1/0Vh+fJPX+UsJaA=="
echo openssl_decrypt('1Wl2Kg1/0Vh+fJPX+UsJaA==', 'AES-128-CBC', '0123456789ABCDEF', 0, 'FEDCBA9876543210'); // "ABCD"

// 不使用Base64编码：
echo bin2hex(openssl_encrypt('ABCD', 'AES-128-CBC', '0123456789ABCDEF', OPENSSL_RAW_DATA, 'FEDCBA9876543210')); // "d569762a0d7fd1587e7c93d7f94b0968"
echo openssl_decrypt(hex2bin('d569762a0d7fd1587e7c93d7f94b0968'), 'AES-128-CBC', '0123456789ABCDEF', OPENSSL_RAW_DATA, 'FEDCBA9876543210'); // "ABCD"
```

前面提到的 CryptoJS 可以在十六进制、Base64 和字符串之间进行转换，而 PHP 这边除了加密时自带的可选的 Base64 编码，也可以直接使用 `bin2hex` / `hex2bin`、`base64_encode` / `base64_decode` 这些函数实现数据类型的转换，PHP 的字符串本身也是可以用来存储二进制数据的～

## phpseclib

```plaintext
composer require phpseclib/phpseclib
```

OpenSSL 扩展使用的是面向过程的写法，一个函数一个函数地调用，调用一次函数时要把明文 / 密文、密钥、加密方式等参数都写一遍，结果是把一行代码弄得很长，参数含义不清晰，比较难看\_(:\_」∠)\_

phpseclib 采用了面向对象的写法，加密解密前新建一个对象作为“AES 加密 / 解密器”，一次性设定好密钥，就可以直接用来加密 / 解密了∠( ᐛ 」∠)\_

phpseclib 统一使用原始数据也就是字符串进行加密和解密，本身不会进行任何的数据格式转换，需要自己手动调用相关函数。

```php
require_once __DIR__ . '/vendor/autoload.php';

use phpseclib\Crypt\AES;

$aes = new AES(AES::MODE_CBC);
$aes->setKey('0123456789ABCDEF');
$aes->setIV('FEDCBA9876543210');

echo base64_encode($aes->encrypt('ABCD')); // "1Wl2Kg1/0Vh+fJPX+UsJaA=="
echo $aes->decrypt(hex2bin('d569762a0d7fd1587e7c93d7f94b0968')); // "ABCD"
```

↑这种写法舒服多了(〃′▽`)

# RSA 非对称加解密

## JSEncrypt

JSEncrypt 的使用还是比较简单的，生成一对 RSA 公钥和私钥：

```js
// 钦定使用512位的密钥
let rsa = new JSEncrypt({default_key_size: 512});

// 随机生成公钥和私钥
// 可以填写一个回调函数进行异步操作，不写的话就是同步操作
// 异步操作比同步操作明显慢了不少……
rsa.getKey(() => {
    console.log(rsa.getPrivateKey());
    console.log(rsa.getPublicKey());
});
```

生成密钥需要的时间是随着位数增加而指数上升的。生成 512 位密钥一般需要 10-30 ms，1024 位一般需要 100-200 ms，2048 位需要 1000-2000 ms，至于 4096 位……生成一次需要几十秒，浏览器会直接卡死，在前端直接使用的话大概是不行的(っ'-')╮

JSEncrypt 也支持自己指定密钥，进行加密和解密操作，**密文统一使用 Base64 编码**：

```js
// 设定公钥并进行加密
rsa.setPublicKey(`
-----BEGIN PUBLIC KEY-----
MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAfVNVmlMys1Ur/DHm+Hy+5ZiSYbI1JQWj
LjXOWazsdgHA2dhNeb5lyBeoV0jDY4kxbNIqoK8SC0DdqvSbf43uHQIDAQAB
-----END PUBLIC KEY-----
`);
rsa.encrypt('ABCD'); // "YqMFMygirIkg4JHmjH7FUk4AeluSWZjsaoHJlm5flyYQtWPdK+se2BF5WAnxKMS9eckSbijXFwFKDBmwTsirqg=="

// 设定私钥并进行解密
rsa.setPrivateKey(`
-----BEGIN RSA PRIVATE KEY-----
MIIBOAIBAAJAfVNVmlMys1Ur/DHm+Hy+5ZiSYbI1JQWjLjXOWazsdgHA2dhNeb5l
yBeoV0jDY4kxbNIqoK8SC0DdqvSbf43uHQIDAQABAkBh6TZKsE8+/f60NERvw/3c
IDvUqcaNWv8mvhCtzMScWB79WA5tj78VDeu+c89S3HVRzwp1IpdaKXwLUeeGlvMB
AiEAxl99A8cey501bOFGW/4p6xgePDyGMKCnaxERj7Jn2UECIQChu3wu8fdh3VcY
kyVjqu6Q5zAtbdv4N5npX/F7SWYh3QIgb9TRE1ojwEHmJnVxRtcoJoK4ONkeBTfs
ae17avj2loECICdI8jY5Ah0cdZ57h5Z5G6/I6FPwnoDhiJo+etq2jn9lAiBAGRen
ktqwA3k6arwEpjEj89ZqYiTzIFbCngH1oKbp9A==
-----END RSA PRIVATE KEY-----
`);
rsa.decrypt('YqMFMygirIkg4JHmjH7FUk4AeluSWZjsaoHJlm5flyYQtWPdK+se2BF5WAnxKMS9eckSbijXFwFKDBmwTsirqg=='); // "ABCD"
```

先回想一下 RSA 的基本算法：

1. 取素数 $p$ 和 $q$。
2. 计算 $n = pq$，$\phi(n) = (n - 1)(q - 1)$。
3. 取整数 $e$ 满足 $gcd(e, \phi(n)) = 1$。
4. 计算 $d = e^{-1} \bmod \phi(n)$。
5. 私钥是 $d$，公钥是 $(e, n)$。
6. 加密：$c = m^e \bmod n$，解密：$m = c^d \bmod n$。

RSA 算法的保密性取决于将 $n$ 分解成 $p$ 和 $q$ 的难度，不过根据[维基百科上的记录](https://en.wikipedia.org/wiki/RSA_numbers#RSA-240)，在 2019 年已经有了 795 位的数被分解的记录，目前的主流是使用至少 1024 位的密钥，不过这里作为测试就还是使用 512 位的密钥了～

这种以一行“BEGIN”和“END”的分割线标记开始和结束、正文使用 Base64 编码的 RSA 密钥格式就是 PEM 格式（私钥又分为 PKCS#1 和 PKCS#8 两种标准，分别以 `BEGIN RSA PRIVATE KEY` 和 `BEGIN PRIVATE KEY` 开头）。虽然按照上面的算法，私钥涉及到的参数比公钥少，但是 PEM 格式中私钥的长度反而比公钥长了很多，这是因为这里的“私钥”实际上还包含了上面涉及到的几乎所有参数（其中就包括 $e$ 和 $n$），因此完全可以从私钥中直接“提取”出公钥，设定了私钥则既可以加密也可以解密，但设定了公钥就只能进行加密。

由于 RSA 加密的使用的填充方案在密文中添加了一些随机数，所以即使是同样的密钥加密同样的明文，得到的密文也会不同。

## OpenSSL

和前面的 AES 加密一样，使用 OpenSSL 扩展弄 RSA 加密也是有点麻烦 ┐(´-｀)┌

使用 OpenSSL 时，一般也是先生成私钥，再根据私钥提取出公钥。对应到 PHP 这边就是使用 [`openssl_pkey_new`](https://www.php.net/manual/zh/function.openssl-pkey-new.php) 和 [`openssl_pkey_export`](https://www.php.net/manual/zh/function.openssl-pkey-export.php) 两个函数：

```php
$res = openssl_pkey_new([
    'config' => realpath('./openssl.cnf'),
    'private_key_bits' => 512,
    'private_key_type' => OPENSSL_KEYTYPE_RSA,
]);
openssl_pkey_export($res, $private_key, null, [
    'config' => realpath('./openssl.cnf'),
]);
$public_key = openssl_pkey_get_details($res)['key'];
```

这段代码看上去没什么问题，但是官方文档提示“必须安装有效的 `openssl.cnf` 以保证此函数正确运行”。为什么生成一个 RSA 密钥还需要**额外的配置文件**？为什么获取私钥是**将私钥写入参数中指定的引用的变量**，但是获取公钥（和其他 RSA 算法中涉及到的参数）又使用了**返回关联数组**的形式？这种写法有点特别啊……

Linux 平台上 OpenSSL 本身就是标配，所以 PHP 可以根据环境变量找到 `openssl.cnf`。Windows 版的 PHP 也自带了一个 `openssl.cnf`，但是如果不配置环境变量的话就需要手动指定路径了（也就是上面的 `config` ）。

OpenSSL 的加密和解密中的**密文同样是统一使用字符串**，有需要的话可以自己另外使用 Base64 编码 / 解码。然而进行 RSA 加密和解密也是使用了“写入参数中指定的引用变量”的形式，和前面的使用返回值的 AES 加密解密也不一样：

```php
// 设定公钥并进行加密
$public_key = <<< KEY
-----BEGIN PUBLIC KEY-----
MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAfVNVmlMys1Ur/DHm+Hy+5ZiSYbI1JQWj
LjXOWazsdgHA2dhNeb5lyBeoV0jDY4kxbNIqoK8SC0DdqvSbf43uHQIDAQAB
-----END PUBLIC KEY-----
KEY;
openssl_public_encrypt('ABCD', $encrypted, $public_key);
echo base64_encode($encrypted); // "YqMFMygirIkg4JHmjH7FUk4AeluSWZjsaoHJlm5flyYQtWPdK+se2BF5WAnxKMS9eckSbijXFwFKDBmwTsirqg=="

// 设定私钥并进行解密
$private_key = <<< KEY
-----BEGIN RSA PRIVATE KEY-----
MIIBOAIBAAJAfVNVmlMys1Ur/DHm+Hy+5ZiSYbI1JQWjLjXOWazsdgHA2dhNeb5l
yBeoV0jDY4kxbNIqoK8SC0DdqvSbf43uHQIDAQABAkBh6TZKsE8+/f60NERvw/3c
IDvUqcaNWv8mvhCtzMScWB79WA5tj78VDeu+c89S3HVRzwp1IpdaKXwLUeeGlvMB
AiEAxl99A8cey501bOFGW/4p6xgePDyGMKCnaxERj7Jn2UECIQChu3wu8fdh3VcY
kyVjqu6Q5zAtbdv4N5npX/F7SWYh3QIgb9TRE1ojwEHmJnVxRtcoJoK4ONkeBTfs
ae17avj2loECICdI8jY5Ah0cdZ57h5Z5G6/I6FPwnoDhiJo+etq2jn9lAiBAGRen
ktqwA3k6arwEpjEj89ZqYiTzIFbCngH1oKbp9A==
-----END RSA PRIVATE KEY-----
KEY;
openssl_private_decrypt(base64_decode('YqMFMygirIkg4JHmjH7FUk4AeluSWZjsaoHJlm5flyYQtWPdK+se2BF5WAnxKMS9eckSbijXFwFKDBmwTsirqg=='), $decrypted, $private_key);
echo $decrypted; // "ABCD"
```

## phpseclib

由于使用了面向对象的写法，使用 phpseclib 的代码仍然是看上去非常舒服，非常清晰……至少不会有“把函数执行的结果写入参数中指定的引用变量”这种特别的写法了|•'-'•)

生成密钥：

```php
require_once __DIR__ . '/vendor/autoload.php';

use phpseclib\Crypt\RSA;

$rsa = new RSA();
$rsakey = $rsa->createKey(512);
echo $rsakey['privatekey'];
echo $rsakey['publickey'];
```

加密和解密：

```php
require_once __DIR__ . '/vendor/autoload.php';

use phpseclib\Crypt\RSA;

$rsa = new RSA();
$rsa->setEncryptionMode(RSA::ENCRYPTION_PKCS1);

// 设定公钥并进行加密
$public_key = <<< KEY
-----BEGIN PUBLIC KEY-----
MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAfVNVmlMys1Ur/DHm+Hy+5ZiSYbI1JQWj
LjXOWazsdgHA2dhNeb5lyBeoV0jDY4kxbNIqoK8SC0DdqvSbf43uHQIDAQAB
-----END PUBLIC KEY-----
KEY;
$rsa->loadKey($public_key);
echo base64_encode($rsa->encrypt('ABCD')); // "YqMFMygirIkg4JHmjH7FUk4AeluSWZjsaoHJlm5flyYQtWPdK+se2BF5WAnxKMS9eckSbijXFwFKDBmwTsirqg=="

// 设定私钥并进行解密
$private_key = <<< KEY
-----BEGIN RSA PRIVATE KEY-----
MIIBOAIBAAJAfVNVmlMys1Ur/DHm+Hy+5ZiSYbI1JQWjLjXOWazsdgHA2dhNeb5l
yBeoV0jDY4kxbNIqoK8SC0DdqvSbf43uHQIDAQABAkBh6TZKsE8+/f60NERvw/3c
IDvUqcaNWv8mvhCtzMScWB79WA5tj78VDeu+c89S3HVRzwp1IpdaKXwLUeeGlvMB
AiEAxl99A8cey501bOFGW/4p6xgePDyGMKCnaxERj7Jn2UECIQChu3wu8fdh3VcY
kyVjqu6Q5zAtbdv4N5npX/F7SWYh3QIgb9TRE1ojwEHmJnVxRtcoJoK4ONkeBTfs
ae17avj2loECICdI8jY5Ah0cdZ57h5Z5G6/I6FPwnoDhiJo+etq2jn9lAiBAGRen
ktqwA3k6arwEpjEj89ZqYiTzIFbCngH1oKbp9A==
-----END RSA PRIVATE KEY-----
KEY;
$rsa->loadKey($private_key);
echo $rsa->decrypt(base64_decode('YqMFMygirIkg4JHmjH7FUk4AeluSWZjsaoHJlm5flyYQtWPdK+se2BF5WAnxKMS9eckSbijXFwFKDBmwTsirqg==')); // "ABCD"
```