---
title: 使用长短轮询和 SSE 实现服务端主动向客户端发送数据（以及踩到的坑……）
date: 2019-09-03 22:55:46
updated: 2019-09-03 22:55:46
excerpt: 用了整整一天时间的造轮子和踩坑记录(っ ̯ -｡)
thumbnail: https://ae01.alicdn.com/kf/Hd39c8945d4ec425d8a0efee4adf465d3t.jpg
thumbnail_webp: https://ae01.alicdn.com/kf/H29cb55a991b345eeb7caf777a75cc65fT.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/f47a9595892e47b4834216a2a77835c531134.jpg
thumbnail_color: data:image/jpeg;base64,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
---

> 封面图：[Pixiv ID: 23245036 「ねむねむ」 by なもり](https://www.pixiv.net/member_illust.php?mode=medium&illust_id=23245036)

最近突然想试着做一个可以实现实时聊天的网页，也想了解一下网页版 QQ、网页版~~某个需要拿出手机扫码才能在电脑上登录的辣鸡社交软件~~等等是如何实现和服务器实时同步数据的(｡･ω･)ﾉﾞ

现在常见的实现方式有下面四种：

* 轮询（或者称作短轮询，Short-Polling）
* 长轮询（Long-Polling，也有人称作 Comet、反向 AJAX）
* 服务器发送事件（Server-Sent Events，简称 SSE）
* WebSocket

（其实还有 `<iframe>` 或 Flash 的实现，不过已经很少见了……）

其中 WebSocket 似乎是最高效的方法，但是实现难度较大。在网页上使用 WebSocket 涉及到了 `ws` 和 `wss` 两种新协议（加了字母 s 的是加密协议，类似于 `https` 与 `http` 的差别），而小透明自己的网站必须使用 `https`，因此要使用 WebSocket 的话也必须使用 `wss`，所以还有配置端口、证书等一堆杂事……所以这里就先忽略了。

相对来说，实现前三个的难度要低上不少，而且大部分代码可以复用，正好把三个都实现一遍，也可以对比一下它们的优缺点～至于后端部分，小透明是用~~世界上最好的语言~~ PHP 实现的(:з っ )っ

~~其实是因为实现的时候踩了很多坑，结果不得不把三个都试了一遍⊂彡☆))д`)~~

下面的这张图（[出处](https://codeburst.io/polling-vs-sse-vs-websocket-how-to-choose-the-right-one-1859e4e13bd9)）形象地展示了短轮询、长轮询、SSE 三种实现方式的原理：

<img data-src-webp="https://ae01.alicdn.com/kf/H85af3a2dbc8f485bb848ddb42056aee8q.jpg" data-src="https://ae01.alicdn.com/kf/Hd4ae3bbfc83645eab08dcb387a765b77o.png">

# 准备工作

在实现之前，先要建立一个简单的“在线聊天室”的模型。

* 发送消息：在文本框 `message` 中输入内容，点击按钮 `send` 将文本发送到 `post.php` 进行数据处理，服务端将文本和发送时的时间戳一起保存到文件 `message.json`。
* 接收消息：服务端使用 JSON 格式发送新消息的数据（包含正文和时间戳）。客户端从服务端同步数据后，将最新的消息显示在 `timeline` 中。

<img data-src-webp="https://ae01.alicdn.com/kf/Hee55e50e0045469badd0edfd8594eeae8.jpg" data-src="https://ae01.alicdn.com/kf/Hd2d9ad0580e94e5285aab179015774eez.png">

非常简单的一个页面，没有样式|･ω･｀)

网页代码如下：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
    <textarea id="message"></textarea>
    <button id="send">Send</button>
    <hr />
    <div id="timeline"></div>

    <script>
        // 接收消息
        var xhrPost = new XMLHttpRequest();
        document.getElementById('send').onclick = function () {
            if (document.getElementById('message').value === '') return;

            xhrPost.open('POST', 'post.php');
            xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhrPost.send('message=' + document.getElementById('message').value);

            document.getElementById('message').value = '';
        }

        // 同步消息
        // 代码略
    </script>
</body>
</html>
```

`post.php` 代码如下：

```php
if (empty($_POST['message'])) die();
$data = [
    'time' => time(),
    'message' => htmlspecialchars($_POST['message']),
];
file_put_contents('message.json', json_encode($data, JSON_UNESCAPED_UNICODE));
```

最后要实现这样的效果：多个不同的客户端同时打开这个页面，其中一方发了消息，在所有的页面上都可以显示。

<video src="https://files.catbox.moe/xet88a.mp4" poster="https://ae01.alicdn.com/kf/H679c1b7d83df444299cb278ff45083bbK.jpg" controls preload="metadata"></video>

# 短轮询

短轮询是最简单的和服务器同步数据的方法，原理是使用 `XMLHttpRequest` 不停地每隔一段时间向服务器发送获取新数据的请求，然后处理返回的数据（如果有新数据的话）。

前端代码，请求时带上时间戳，表示客户端接收到的最新数据的时间：

```js
var xhrGet = new XMLHttpRequest();
var time = 0; // 获取到的最新消息的时间戳，初始值为0

xhrGet.onreadystatechange = function () {
    if (xhrGet.readyState != XMLHttpRequest.DONE || xhrGet.status != 200) return;
    var response = JSON.parse(xhrGet.responseText);

    // 有新消息则输出
    if (response.time || response.time > time) {
        time = response.time;
        document.getElementById('timeline').innerHTML += ''
            + (new Date(response.time * 1000)).toLocaleString('zh-CN', {hour12: false})
            + '<br />'
            + response.message
            + '<br />';
        // JS的时间戳单位为毫秒，所以这里要*1000
    }
}

function getMessage() {
    xhrGet.open('GET', 'get.php?time=' + time);
    xhrGet.send();
}

// 每隔一秒，从服务器获取一次最新消息
setInterval(getMessage, 1000);
```

后端代码，根据请求的时间戳判断是否要发送新数据：

```php
// 读取客户端的时间戳
$time = (isset($_GET['time']) && is_numeric($_GET['time'])) ? intval($_GET['time']) : 0;

// 获取数据，这里是直接读取文件内容
$data = json_decode(file_get_contents('message.json'), true);

// 根据客户端请求的时间戳判断是否有新消息，如果有则返回，否则返回空数据
if ($time < $data['time']) {
    die(json_encode($data, JSON_UNESCAPED_UNICODE));
} else {
    die('{}');
}
```

短轮询的实现很简单，但是缺点也很明显：客户端需要频繁发起大量请求，而每次建立连接都需要时间；返回的数据大多数情况下是空的，这时请求头和响应头就占据了请求的所有数据量，即使有返回数据它们的数据量也占了大部分，效率比较低；频繁的请求也可能对服务器造成压力，因此它更适合对数据实时性要求不高的情景。

在理想的网络状况下，如果客户端发出的请求可以被瞬间响应（耗时小于轮询频率），此时有下面的情形（客户端发出请求的时间间隔为 2 秒）：

* 客户端在第 1 秒发出请求 #1
* 请求 #1 瞬间得到响应，没有新消息（收到的最新消息的时间为第 0 秒）
* 服务端在第 2 秒收到消息 A
* 客户端在第 3 秒发出请求 #3
* 请求 #3 瞬间得到响应，获取了消息 A（收到的最新消息的时间为第 2 秒）
* 服务端在第 4 秒收到消息 B
* 客户端在第 5 秒发出请求 #5
* 请求 #5 瞬间得到响应，获取了消息 B（收到的最新消息的时间为第 4 秒）
* ……

但是，在网络状况不好的情况下，使用短轮询得到的数据就可能会出现混乱：

* 客户端在第 1 秒发出请求 #1
* 请求 #1 瞬间得到响应，没有新消息（收到的最新消息的时间为第 0 秒）
* 服务端在第 2 秒收到消息 A
* 客户端在第 3 秒发出请求 #3
* 请求 #3 **暂未得到响应**（收到的最新消息的时间**仍然为第 0 秒**）
* 服务端在第 4 秒收到消息 B
* 客户端在第 5 秒发出请求 #5
* 请求 #5 瞬间得到响应，获取了消息 A 和 B（收到的最新消息的时间为第 4 秒）
* 请求 #3 得到响应，**又一次获取了消息 A**（收到的最新消息的时间为第 4 秒）
* ……

为了解决这个问题，可以使用 `setTimeout` 修改上面的前端代码，接收到上一次请求的响应后先等待一段时间，然后再发出下一次请求。

# 长轮询

短轮询的缺点就在于它发出的请求太多，长轮询就是在发出请求方面对短轮询进行了改进。长轮询仍然使用 `XMLHttpRequest` 向服务端发出请求，但是服务端会将客户端发出的请求挂起，直到有新数据时才立即返回数据（也可以设定连接已挂起较长时间则中断，返回空数据）。客户端发出的请求响应后就立即再发出下一个请求，这样就可以保证与服务端之间一直有一个连接，而且数据的实时性还可以完全由服务端控制，而不是取决于客户端使用 `setInterval` 或 `setTimeout` 发出请求的频率。

前端代码，请求时带上时间戳，表示客户端接收到的最新数据的时间：

```js
var xhrGet = new XMLHttpRequest();
var time = 0; // 获取到的最新消息的时间戳，初始值为0

xhrGet.onreadystatechange = function () {
    if (xhrGet.readyState != XMLHttpRequest.DONE || xhrGet.status != 200) return;
    var response = JSON.parse(xhrGet.responseText);

    // 有新消息则输出
    if (response.time || response.time > time) {
        time = response.time;
        document.getElementById('timeline').innerHTML += ''
            + (new Date(response.time * 1000)).toLocaleString('zh-CN', {hour12: false})
            + '<br />'
            + response.message
            + '<br />';

    }

    // 上一个请求完成了就立即发出下一个请求
    getMessage();
}

function getMessage() {
    xhrGet.open('GET', 'get.php?time=' + time);
    xhrGet.send();
}

// 手动发起第一次请求
getMessage();
```

后端代码，使用了循环来挂起连接：

```php
// 禁用PHP的执行时间限制
set_time_limit(0);

$time = (isset($_GET['time']) && is_numeric($_GET['time'])) ? intval($_GET['time']) : 0;

// 每次循环耗时1秒，最大连接时间10秒
for ($i = 0; $i < 10; $i++) {
    // 获取数据，这里是直接读取文件内容
    $data = json_decode(file_get_contents('message.json'), true);

    // 根据客户端请求的时间戳判断是否有新消息，如果有则返回，并跳出循环
    if ($time < $data['time']) {
        die(json_encode($data, JSON_UNESCAPED_UNICODE));
    }

    // 设定服务端检测新数据的间隔为1秒
    sleep(1);
}

// 一直没有新数据则返回空数据
die('{}');
```

分析所有获取数据的网络请求的瀑布流，可以发现除了第一个初始化用的请求是瞬间完成的，其它的请求都被挂起了较长一段时间（上面的示例中的设定为 10 秒）才完成。

有一个请求的耗时不足 10 秒，是因为这个请求被挂起期间服务端返回了一次数据，于是连接立即完成。另外，观察时间轴还可以发现，所有的请求都是连续的，保证了与服务端之间一直有一个连接。

<img data-src-webp="https://ae01.alicdn.com/kf/Hccb3dfbf7b91464fa6b989e82394ca0fK.jpg" data-src="https://ae01.alicdn.com/kf/Hea29e4cfa4c542fcbdf773fdd5f77b94c.png">

长轮询减少了发送请求的频率，但是长时间挂起的连接会**持续占用着服务端的资源**。如果服务端不能同时处理大量连接的话，就会**造成严重的延迟**。这也是小透明踩中的坑，到后面再详细地解说吧(｡í _ ì｡)

# 服务器发送事件（SSE）

SSE 是 HTML5 标准中新增的一部分，可以实现服务端向客户端（浏览器）主动发送数据。

SSE 某种意义上有点像长轮询的封装，因为它也需要与服务端保持一个长连接以等待服务端的数据，但是当连接中断时客户端（浏览器）可以**自动进行重连**，因此客户端只需要专注于处理收到的数据就可以了。

SSE 的使用依赖于 HTML5 新增的 `EventSource` 对象，然而 [IE 和 Edge 并不支持](https://caniuse.com/#search=eventsource)，因此也无法使用。

<img data-src-webp="https://ae01.alicdn.com/kf/H0c56c34d118f45fa8dd46c1e087a5646w.jpg" data-src="https://ae01.alicdn.com/kf/H472b15b1b6c84db0a8e9abe6dfb7434a8.png">

在使用前，可以检测一下浏览器对 `EventSource` 的支持：

```js
if (typeof EventSource === 'undefined') {
    alert('您的浏览器不支持EventSource');
}
```

服务端每次发送的数据由若干行组成，每次发送的数据之间会有一个空行（使用 `\n` 作为换行符）间隔。事件流用文本组成，有注释、`data`、`id`、`event`、`retry` 五种类型：

```plaintext
: 以单个冒号开头表示注释，可以通过输出注释来防止超时重连

: data表示数据内容，可以直接使用JSON
data: some text

: 也可以分成多行
data: another message
data: with two lines

: 使用id来对数据进行标记
id: 1
data: 1st message

: retry设定客户端在一定时间之后未收到数据（包括注释）则重连，单位为毫秒
retry: 15000

: event可以自定义事件名，客户端可以使用addEventListener('事件名', function (event) { event.data ...})对自定义事件进行操作
: 不写事件名，则可以使用addEventListener('message', function () {...})或onmessage = function (event) { event.data ...}进行操作
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}
```

其中 `id` 可以实现两次重连之间的消息同步。`EventSource` 每次收到带有 `id` 的数据都会保存下来，下次重连时会将 `id` 的数据写入请求头的 `Last-Event-ID` 这一项，服务器可以根据这个来重建连接继续同步数据。

前端代码，只需要处理收到的数据，不用考虑重连，比长短轮询更简单了：

```js
var es = new EventSource('get_es.php');
es.onmessage = function (event) {
    var response = JSON.parse(event.data);

    document.getElementById('timeline').innerHTML += ''
        + (new Date(response.time * 1000)).toLocaleString('zh-CN', { hour12: false })
        + '<br />'
        + response.message
        + '<br />';
}
```

后端代码，稍微复杂了一些，不过和长轮询相比改变不大：
```php
set_time_limit(0);

// 在Nginx上禁用输出缓存
header('X-Accel-Buffering: no');
// 设定请求头为SSE的事件流类型，禁止缓存
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

// 通过Last-Event-ID请求头读取客户端的时间戳
$time = (isset($_SERVER['HTTP_LAST_EVENT_ID']) && is_numeric($_SERVER['HTTP_LAST_EVENT_ID'])) ? intval($_SERVER['HTTP_LAST_EVENT_ID']) : 0;

// 使用循环挂起连接
for ($i = 0; $i < 10; $i++) {
    $data = json_decode(file_get_contents('message.json'), true);

    // 根据客户端请求的时间戳判断是否有新消息，如果有则返回，不用跳出循环
    if ($time < $data['time']) {
        // 由于连接要持续一段时间，因此要在服务端记录时间
        $time = $data['time'];

        // 输出数据时注意格式和换行
        // 使用新消息的时间作为ID
        echo 'id: ' . $data['time'] . "\n";
        echo 'data: ' . json_encode($data, JSON_UNESCAPED_UNICODE) . "\n\n";

        // 输出后，需要刷新PHP的输出缓冲
        ob_end_flush();
        flush();
    }

    // 服务端检测新数据的间隔为1秒
    sleep(1);
}
```

SSE 在客户端的实现比较简单，不过它也要长时间挂起连接，占用服务端资源。

# 所以，踩的坑到底是……？

长短轮询和 SSE 这三种由服务端主动向客户端发送数据的方式，都能满足客户端与服务端实时交互的需求。但是长轮询和 SSE 是通过与服务端维持长连接实现的，如果并发量比较大的话，大量的连接就会**严重影响服务端的性能**。

<img data-src-webp="https://ae01.alicdn.com/kf/H5e52db543b4f43aca38c34b03709ef1dL.jpg" data-src="https://ae01.alicdn.com/kf/H06870577ede24426a160e8d8de671cfam.png">

小透明之前在自己的服务器上进行过一次测试，使用了 SSE 与服务端同步数据。在**同时打开 20 个页面**的情况下，服务端的性能出现了明显的“下降”，仅仅是发送少量文字就出现了长达 **70 秒** 的延迟（获取消息的延迟也少不了），服务器上的 [PHP 探针](http://www.yahei.net/)（使用频率为 1 秒的短轮询获取服务器状态信息）也在测试期间出现异常，无法正常获取服务器状态信息。

但是，PHP 代码的执行时间却只有 **3 毫秒** 左右；根据服务器后台的监控图表，测试期间服务器的 CPU、硬盘、网络占用均**不到 5%**。所以出现延迟的原因并不是代码写得差(˘_˘٥) 实际上是和 Nginx 处理 PHP 请求的机制有关。

Nginx 本身不能执行 PHP 代码。代码先交给另一个进程 FastCGI 执行，然后 Nginx 通过配置中的 `fastcgi_pass` 获取执行的结果，返回到客户端。PHP 可以使用 PHP-FPM（FastCGI Process Manager）来管理同时开着的多个 FastCGI 子进程，将执行 PHP 代码的任务交给它们去运行，并根据负载情况自动创建和销毁进程。

```plaintext
location ~ [^/]\.php(/|$)
{
    try_files $uri =404;
    fastcgi_pass  unix:/tmp/php-cgi.sock;
    fastcgi_index index.php;
    include fastcgi.conf;
}
```

PHP-FPM 同时开启的进程数在配置文件 `/usr/local/php/etc/php-fpm.conf` 中可以设定，这些设定项决定了进程数的上限和下限：

```plaintext
# 进程数上限
pm.max_children = 32
# 启动时创建的进程数
pm.start_servers = 8
# 服务器闲置时保持的进程数范围
pm.min_spare_servers = 2
pm.max_spare_servers = 16
```

测试时 `pm.max_children` 的值为 `10`，实际上打开第 10 个页面的时候也已经开始有了延迟。所以出现严重延迟的原因实际上是**长时间挂起的连接把 PHP-FPM 的进程占满了**。

> PHP is not built to be a long-running server, each request is a new process, it's really not the right choice for a KeepAlive thing.
> ——Stack Overflow 上的问题 [Is php scalable with reverse ajax long polling?](https://stackoverflow.com/questions/8093467/is-php-scalable-with-reverse-ajax-long-polling) 的回答

用 PHP 做长连接是踩坑，是作死行为。既然一个长连接就要占用一个进程（以及大概十几 MB 的内存），那么增加进程数上限也是效率较低的方法。简单粗暴的短轮询反而能有不错的效果……至少小透明换用了短轮询以后，**同时开了 50 个页面**也没有严重的延迟。

对了，短轮询还有一个问题就是大量的请求会在服务器上留下大量的日志，占用不少存储空间。如果是 Nginx 的话，倒是可以通过“按条件记录日志”来把指向特定 URL 请求的日志屏蔽掉：

```plaintext
set $write_log 1;

# $uri不包括?后面的部分，也就是GET参数
if ($uri = /get.php) {
    set $write_log 0;
}
access_log  /home/wwwlogs/access.log combined if=$write_log;
```