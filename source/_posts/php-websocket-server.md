---
title: 使用 PHP 的 Ratchet 框架搭建 WebSocket 服务端
date: 2020-01-10 22:27:32
updated: 2020-01-10 22:27:32
excerpt: 不需要使用轮询了！
thumbnail: https://ae01.alicdn.com/kf/H7b335f1a00874624b4fe845596bab618O.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/He58779a4fabb461e83dc6a136a0b482dQ.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/66bf91f10ffefea340d78f85fd7029dc54554.jpg
thumbnail_color: data:image/jpeg;base64,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
---

> 封面图：[Pixiv ID: 78461776 「お団子」 by tama2396](https://www.pixiv.net/artworks/78461776)

几个月前，小透明尝试过[使用短轮询、长轮询、Server-Sent Events 三种不同的方式](/2019/09/03/use-polling-and-sse/)实现了一个简单的留言板。

在查找相关资料时，小透明也已经知道了 HTML5 新增的 WebSocket 协议是在客户端、服务端之间实时发送数据的**最高效的方式**。遗憾的是由于当时姿势水平还不够，小透明当时并没有对 WebSocket 进行哪怕是再深入一点点的研究，最后还是在某个小项目中选用了短轮询 (っ ̯ -｡)

<img data-src-webp="https://ae01.alicdn.com/kf/H1206b262ce0d409c8f0229299abc1550p.jpg" data-src="https://ae01.alicdn.com/kf/U20c8fd4f70b04f308fb272150165904cZ.png">

虽然没有人在意屏幕上的消息为什么每隔一秒才会刷新一次，每秒数百个的 AJAX 请求也没有对服务器造成严重的压力，但是总觉得还是有点不对劲……

> 大量的网络流量被用于请求头和响应头，而真正有价值的消息主体只占了极小一部分，这简直是对网络资源的极大浪费！(╯‵□′)╯︵┻━┻
> <span style="display:block;text-align:right">——沃兹基・硕德</span>

WebSocket 是建立在 TCP 连接上进行全双工通讯的协议，然鹅小透明当时才刚开始学计算机网络，不知道数据帧一般是什么结构、不知道 TCP 协议是什么、不知道什么是套接字、不知道什么是 bind/listen/accept/……然后查资料的时候又看到这种东西，就直接被劝退了：

<img data-src-webp="https://ae01.alicdn.com/kf/Hc78943befbd441198194161407f4c40b2.jpg" data-src="https://ae01.alicdn.com/kf/H3b466a98774143e496b9cc0594714d9au.png">

自己查找资料造一个 WebSocket 服务端的轮子需要涉及到套接字编程、数据帧解析之类的知识。即使是现在学完了计算机网络，完全实现仍然是**非常困难的**。

后来在期末复习周摸鱼的时候，小透明找到了 [Ratchet](http://socketo.me/) 这个可以在 PHP 中搭建 WebSocket 服务端的框架，于是开始尝试了解它的使用方法～

这篇的重点是如何用 PHP 搭建 WebSocket 的服务端，至于客户端就是浏览器运行 JS 代码创建的 [`WebSocket`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 对象。所有的主流浏览器（甚至还包括 IE 10！）都支持使用 WebSocket 协议。

# 准备工作

这次仍然是使用一个十分简单、没有样式的留言板页面进行演示～

* 发送消息：在文本框 `message` 中输入内容，点击按钮 `send` 发送。
* 接收消息：服务端将收到的消息纯文本发送给所有客户端，显示在 `timeline` 中。

<img data-src-webp="https://ae01.alicdn.com/kf/Hadb095831f894820b6fe6d001e95cef7l.jpg" data-src="https://ae01.alicdn.com/kf/H781ccef3ab864e00b0630aae8681298aD.png">

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
    <input id="message" type="text">
    <button id="send">Send</button>
    <hr>
    <div id="timeline"></div>

    <script>
        // 设定URL建立WebSocket连接
        var conn = new WebSocket('ws://localhost:25252/chat');
        // 成功建立连接
        conn.onopen = function (e) {
            conn.send('Hello!');
        };
        // 收到消息
        conn.onmessage = function (e) {
            document.getElementById('timeline').innerText += e.data;
            document.getElementById('timeline').innerHTML += '<br>';
        };
        // 连接出错
        conn.onerror = function (e) {
            alert('WebSocket connection error.');
        }
        // 断开连接
        conn.onclose = function (e) {
            alert('WebSocket connection closed.');
        }
        // 发送消息
        document.getElementById('send').onclick = function () {
            if (!document.getElementById('message').value) return;
            conn.send(document.getElementById('message').value);
            document.getElementById('message').value = '';
        }
    </script>
</body>
</html>
```

# 编写服务端代码

开始编写服务端之前，需要使用 Composer 安装 Ratchet 框架：

```plaintext
composer require cboden/ratchet
```

官方网站上提供了一个简单的[例子](http://socketo.me/docs/hello-world#logic)可以作为参考。首先对框架进行导入：

```php
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

require_once __DIR__ . '/vendor/autoload.php';
```

整个服务端“应用”可以当成是一个基于 `Ratchet\MessageComponentInterface` 的类，和前端代码类似，只要对建立连接 `onOpen`、收到消息 `onMessage`、连接出错 `onError`、断开连接 `onClose` 这四个事件编写函数即可。

与服务端建立连接的每个客户端都被视为一个对象，这些客户端将保存在 `$clients` 中。通过每个客户端对象的 `send($msg)` 方法可以实现服务端向某一个客户端发送消息，还可以遍历 `$clients` 实现消息广播。

```php
class MyChat implements MessageComponentInterface {
    // 用于保存客户端信息
    protected $clients;

    public function __construct() {
        // 新建SplObjectStorage用于保存对象
        $this->clients = new \SplObjectStorage;
    }

    // $conn是要与服务端建立连接的客户端对象
    public function onOpen(ConnectionInterface $conn) {
        // 向$clients添加建立连接的客户端
        $this->clients->attach($conn);
        // 输出提示，resourceId可以用于标识客户端
        echo "New connection! Id: {$conn->resourceId}\n";
    }

    public function onClose(ConnectionInterface $conn) {
        // 将关闭连接的客户端从$clients中删除
        $this->clients->detach($conn);
        echo "Connection {$conn->resourceId} has disconnected\n";
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        $conn->close();
    }

    // $msg是客户端发送的数据
    public function onMessage(ConnectionInterface $from, $msg) {
        // 遍历所有客户端，转发消息
        foreach ($this->clients as $client) {
            $client->send("Client {$from->resourceId}: {$msg}");
            // 也可以选择不转发给发送者自己
            // if ($from !== $client) {
            //     $client->send("Client {$from->resourceId}: {$msg}");
            // }
        }
        echo "Client {$from->resourceId}: {$msg}\n";
    }
}
```

最后新建一个类 `Ratchet\App`，设定端口，将上面的应用实例化并指定地址：

```php
echo "Server is running...\n";

// 在本机的25252端口启动Ratchet应用
$app = new Ratchet\App('localhost', 25252);
// Ratchet自带的测试应用，原样返回客户端发送的消息
// ws://localhost:25252/echo
$app->route('/echo', new Ratchet\Server\EchoServer, array('*'));
// 上面的留言板应用
// ws://localhost:25252/chat
$app->route('/chat', new MyChat, array('*'));
$app->run();
```

将以上代码保存为 `chat.php`，然后使用命令行 `php chat.php` 启动服务端程序。打开网页，浏览器就可以和服务端建立 WebSocket 连接，允许在留言板上发送消息，与此同时命令行也会输出建立/中断连接的提示。按下 <kbd>Ctrl+C</kbd> 就可以终止服务端程序的运行。

<video src="https://files.catbox.moe/098wqc.mp4" poster="https://ae01.alicdn.com/kf/Hfa328d9ae2bd4c1a8787de0c0eb1c94ek.jpg" controls preload="metadata"></video>

客户端和服务端通过 WebSocket 协议互相发送消息，可以看出所有客户端几乎同时收到了来自服务端的消息，客户端无须像传统的轮询一样频繁发送 AJAX 请求，效率较高。

# 使用 WSS 协议建立加密连接

就像 HTTP 协议和 HTTPS 协议一样，WebSocket 的 WS 协议也有对应的安全加密传输协议 WSS，而且在使用了 HTTPS 的页面上是无法使用未加密的 WebSocket 连接的。一个简单的解决方法是使用 Nginx 的**反向代理**，客户端在公网上发送建立 WebSocket 加密连接的请求，Nginx 在内网将请求转发给相应的 WebSocket 应用。

```plaintext
server {
    listen 443 ssl http2;
    server_name ...;
    ssl_certificate ...;
    ssl_certificate_key ...;

    ...

    location = /chat {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_pass http://localhost:25252/chat;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

使用了反向代理以后，客户端就可以使用类似于 `wss://***.com/chat` 的 URL 建立加密连接了，不需要添加端口号。

由于使用了反向代理，如果需要获取客户端的 IP 地址，就得将 IP 地址写在自定义请求头（上面的例子使用的是 `X-Real-IP` 和 `X-Forwarded-For`）上。在 Ratchet 应用中也可以获取客户端建立连接时的请求头消息，例如获取 IP 就可以使用 `$conn->httpRequest->getHeader('X-Real-IP')[0]`。

另外，Ratchet 应用默认只允许来自本机的客户端（localhost）连接，[官方网站上的解释](http://socketo.me/docs/troubleshooting)是为了安全性，使用反向代理后也可以跳过这个限制了。

> Q: I can connect locally but not remotely or when I run on my server.
> A: This is also another security feature! By default Ratchet binds to 127.0.0.1 which only allows connections from itself. The recommended approach is to put Ratchet behind a proxy and only that proxy (locally) will connect.
If you want to open Ratchet up (not behind a proxy) set the third parameter of App to '0.0.0.0'.

# 定时执行垃圾回收

Ratchet 使用 [`SplObjectStorage`](https://www.php.net/manual/zh/class.splobjectstorage.php) 保存与服务端建立连接的客户端对象，通过 `attach()` 和 `detach()` 方法添加和删除，但这种方法存在**内存泄漏**问题，需要定期执行 `gc_collect_cycles()` 进行垃圾回收。

Ratchet 允许在创建应用时使用自定义的事件循环，在循环中自行加入定期执行的函数。

```php
// 新建事件循环
$loop = React\EventLoop\Factory::create();
// 每分钟进行一次垃圾回收，并在控制台输出内存占用
$loop->addPeriodicTimer(60, function () {
    $memory_before = memory_get_usage();
    gc_collect_cycles();
    $memory_now = memory_get_usage();
    if ($memory_before !== $memory_now) echo "GC Collected: {$memory_before} bytes -> {$memory_now} bytes\n";
});
// 使用自定义的事件循环创建应用
$app = new Ratchet\App('localhost', 25252, '127.0.0.1', $loop);
```

# 用 AJAX 发送请求，用 WebSocket 推送消息

WebSocket 本身支持发送/接收纯文本或二进制数据，因此直接发送图片之类的东西也是没关系的～

但是有的时候又要发送文本又要发送二进制数据（比如做留言板的时候，有同时发送文本和图片的需求），这个时候就需要多折腾一下了……

常规的使用 POST 上传文件使用的 `multipart/form-data` 格式，实际发送的数据类似于这样：

```plaintext
-----------------------------18467633426500
Content-Disposition: form-data; name="smfile"; filename="untitled.png"
Content-Type: image/png

（二进制数据）
-----------------------------18467633426500
Content-Disposition: form-data; name="file_id"

0
-----------------------------18467633426500--
```

发送的数据被“分割线”分割为多个部分，每个部分可以是文本或二进制数据，互不影响，服务端也很容易从中解析出不同部分的数据。如果造轮子在前端用 WebSocket 发送这种格式的数据，在服务端再自己造轮子进行解析，似乎也不是不可以……那为什么不直接使用 POST 方式发送数据呢？而且还可以继续使用 PHP 的 Session 机制保存用户状态。

原来的结构是客户端**直接使用 WebSocket 向服务端发送数据**，现在的结构就变成了客户端先**使用 POST 向服务端的 `post.php` 发送数据**，然后 `post.php` 在内网对消息进行处理后再向 WebSocket 应用发送用于推送的消息（这时已经可以使用纯文本了，例如包含了图片 URL 的 JSON 格式数据），客户端与服务端建立的 WebSocket 连接**只用于接收推送消息**。

由于客户端与服务端建立 WebSocket 连接必须经过 Nginx 的反向代理并添加上 `X-Real-IP` 之类的请求头，而从内网（例如 `post.php`）建立的连接无须经过反向代理，因此可以通过请求头判断发送给服务端的数据是否来自内网，防止客户端直接控制 WebSocket 应用推送任意消息。

[Pawl](https://github.com/ratchetphp/Pawl) 是 Ratchet 框架的一个子项目，可以在 PHP 代码中使用 WebSocket 客户端的功能。使用 Pawl 就可以实现“从内网向 WebSocket 应用发送数据”，例如在 `post.php` 中可以写入以下代码（未包括处理图片部分，仅演示处理使用 POST 发送的数据）：

```php
require_once __DIR__ . '/vendor/autoload.php';

session_start();
// 发送的内容不能为空
if (empty($_POST['content'])) die();
// 根据Session为新用户指定随机的ID
if (empty($_SESSION['userid'])) $_SESSION['userid'] = bin2hex(random_bytes(4));

// 要发送给服务端的数据
$send = [
    'userid' => $_SESSION['userid'],
    'content' => $_POST['content'],
    'timestamp' => time(),
];

// 向本机的 WebSocket 推送应用发送数据，这个写法有点类似于JS的Promise
// 两个函数分别是与服务端连接成功或失败后执行的函数
Ratchet\Client\connect('ws://localhost:25252/push_server')->then(
    function ($conn) {
        global $send;
        $conn->send(json_encode($send, JSON_UNESCAPED_UNICODE));
        $conn->close();
    },
    function ($e) {
        echo "Could not connect: {$e->getMessage()}\n";
        http_response_code(503);
    }
);
```

对应的 WebSocket 服务端代码：

```php
public function onMessage(ConnectionInterface $from, $msg) {
    // 只接收未经过反向代理的，来自内网的客户端发送的数据
    if (!empty($from->httpRequest->getHeader('X-Real-IP'))) return;

    foreach ($this->clients as $client) {
        $client->send($msg);
    }
}
```

最终的效果演示：

<video src="https://files.catbox.moe/5hkb7q.mp4" poster="https://ae01.alicdn.com/kf/H45cf4f763ccd40c880e89242a1d7f41cH.jpg" controls preload="metadata"></video>