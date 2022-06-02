---
title: 使用 C 语言和 Emscripten 编写自己的 WebAssembly 模块
date: 2020-10-10 11:24:34
updated: 2020-10-10 11:24:34
thumbnail: https://p.pstatp.com/origin/137350001c495b8b07e5c
thumbnail_webp: https://ae01.alicdn.com/kf/H739031ee3c3e42d7ae41a53412ef3336v.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/5afc55a0648ec96adcdd2342cd3cbf4368089.jpg
thumbnail_color: data:image/jpeg;base64,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
---

和 JavaScript 一样，WebAssembly 也是一种可以在浏览器中运行的编程语言，不过它的性质更相当于汇编语言。wasm 文件由二进制的[字节码](https://pengowray.github.io/wasm-ops/)组成（也可以转换为类似于汇编语言的文本格式查看），可以**从 C/C++、Rust 等编译执行的编程语言生成**。当然，WebAssembly 也是跨平台的，编译出来的 wasm 文件在不同平台的浏览器中都可以运行。

WebAssembly 最大的特性就是和解释执行的 JS 相比的**超高性能**，甚至还可以将用其它语言编写的项目通过编译到 wasm 的方式**移植到浏览器中运行**（例如[这个](http://www.dnbwg.com/emularity.html?machine=touhou-fumaroku)使用 wasm 版的 DOSBox 运行的《东方封魔录》，运行起来也十分流畅）。不过我开这篇并不是为了去编译那些大型项目的……由于几乎每个接受过计算机相关教育的人都学习过 C 语言，自己用 C 写一个简单的 wasm 模块来提升前端代码的性能，是门槛并不高而且也很有意思的一件事情。

# 从运行一个简单的模块开始

要将 C/C++ 代码编译到 wasm 模块，我们需要准备好 [Emscripten](https://emscripten.org/docs/getting_started/downloads.html) 环境。

> 即使是 Windows 用户，也可以在 WSL 里面直接安装。

```bash
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
# 以后每次打开shell都要执行下面这行
# 如果不想每次都手动操作的话可以写到.bashrc里面
source ./emsdk_env.sh
```

WebAssembly 的运行环境本身只能执行计算任务，加载 wasm 模块时还需要导入一个包含 JS 函数、内存区等属性的对象，wasm 和浏览器的交互只能通过调用这些 JS 函数完成，内存区则是和运行环境外面的 JS 代码共享，可以用来交换数据。Emscripten 的功能不仅是编译 C/C++ 代码生成 wasm，它还可以生成一大堆 JS 的“胶水代码”用来连接浏览器和 WebAssembly 运行环境，实现 C/C++ 的那些标准库，对内存分配、输入输出等进行处理。

[MDN 上的教程](https://developer.mozilla.org/zh-CN/docs/WebAssembly/C_to_wasm#%E7%94%9F%E6%88%90_HTML_%E5%92%8C_JavaScript)就给出了一个从 Hello world 编译出 wasm 文件和对应的胶水代码、HTML 文件的例子。不过这胶水代码比 wasm 文件本身还大了不少……如果模块比较简单的话还是不太好的。好在 Emscripten 支持通过编译选项 `-s SIDE_MODULE=1` 使编译出来的 wasm 文件[作为一个单独的动态库](https://github.com/emscripten-core/emscripten/wiki/WebAssembly-Standalone#create-a-dynamic-library)，这样就不需要那一堆胶水代码了，不过与 JS 部分的交互也需要自己完成。各种用到的标准库函数，需要自己在 C/C++ 里实现（`memset`、`memcpy` 和 `strlen` 之类的比较简单的可以直接抄 [Emscripten 的实现](https://github.com/emscripten-core/emscripten/tree/main/system/lib/libc)），或者在 JS 里通过操作内存区实现后导入 wasm 模块。

根据 [Emscripten 的说明](https://github.com/emscripten-core/emscripten/blob/aa66f92b790c8d319d1599d44657a6305bf74a8a/src/settings.js#L953)，`SIDE_MODULE` 可以设为 1 和 2，区别在于前者会导出 C/C++ 代码里所有的函数，后者会把没有用到的代码删减掉，这时就需要自己 `#include <emscripten/emscripten.h>` 然后手动在需要导出的函数前面加上 `EMSCRIPTEN_KEEPALIVE`。

从一个简单的计算两数相乘的模块开始。因为这只是一个函数库，所以 main 函数是不需要的，而且就算写了也不会在加载的时候自动执行。

```c
EMSCRIPTEN_KEEPALIVE
int multiply(int a, int b) {
    return a * b;
}
```

编译，`-O3` 代表使用最高速度的编译优化：

```bash
emcc multiply.c -O3 -s SIDE_MODULE=1 -o multiply.wasm
```

也可以使用 `-Oz` 表示使编译出来的文件大小更小的编译优化，当然运行起来就会慢很多。

在 HTML 中使用以下的 JS 代码加载（目前 `importObject` 还可以省略不写）：

```js
const wasmModule = await fetch('multiply.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => new WebAssembly.Instance(module, importObject));
```

使用 [`WebAssembly.instantiateStreaming`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) 加载更简洁，但是需要提供正确的 MIME 类型 `application/wasm`。

```js
const wasmModule = await WebAssembly.instantiateStreaming(
    fetch('multiply.wasm'),
    importObject
);
```

另外，上面的两种写法都是异步加载模块的，这是因为如果是同步加载大型模块的话会出现较长时间的阻塞（Chrome 甚至自己规定了同步加载的模块不能超过 4 KB）。如果模块较小，加载时间可以忽略不计，而且也需要在同步执行的代码中使用模块的话，可以将模块的二进制数据以 `Uint8Array` 的格式（不过更建议从 Base64 字符串转换过来，代码更简短）写进 JS 代码，然后用下面的写法加载：

```js
// 以后创建wasmModule时可以复用m，不需要重新加载
const m = new WebAssembly.Module(new Uint8Array([...]));
const wasmModule = new WebAssembly.Instance(m, importObject);
```

加载完成后，就可以通过 `wasmModule.exports` 找到模块导出的函数了。WebAssembly 也是强类型的（32/64 位整数/浮点数），所以在这个例子中如果使用了小数会自动进行类型转换，并不能得到正确的结果，另外也需要注意溢出的问题。

<img data-src="https://ae01.alicdn.com/kf/Hf475ef5e755d47ad817fc2da532fec99G.png" data-src-webp="https://ae01.alicdn.com/kf/H81425f6758c5414aaf6df7d13663a59eZ.jpg">

以下是对应的“汇编代码”，`$multiply` 就是上面的相乘函数了：

```wasm
(module
  (type $t0 (func))
  (type $t1 (func (param i32 i32) (result i32)))
  (func $__wasm_apply_relocs (type $t0)
    nop
  )
  (func $multiply (type $t1) (param $p0 i32) (param $p1 i32) (result i32)
    local.get $p0
    local.get $p1
    i32.mul
  )
  (global $__dso_handle i32 (i32.const 0))
  (export "__wasm_apply_relocs" (func $__wasm_apply_relocs))
  (export "multiply" (func $multiply))
  (export "__dso_handle" (global 0))
  (export "__post_instantiate" (func $__wasm_apply_relocs))
)
```

> 使用 VSCode 的扩展 [WebAssembly](https://marketplace.visualstudio.com/items?itemName=dtsvet.vscode-wasm) 可以以文本格式显示打开的 wasm 文件，并且可以在两种格式之间相互转换。

# 使用外部函数、内存和指针

接下来是做一件每种编程语言的初学者都喜欢做的事：输出一个 Hello world。

```c
#include <stdio.h>

void hello_world() {
    puts("Hello world!");
    puts("WebAssembly模块测试");
}
```

编译……等下，既然是编译到 WebAssembly 了，那从哪里找到标准库 `stdio.h` 和这个 `puts` 呢？看一下文本格式代码：

```wasm
(module
  (type $t0 (func))
  (type $t1 (func (param i32) (result i32)))
  (import "env" "puts" (func $env.puts (type $t1)))
  (import "env" "__memory_base" (global $env.__memory_base i32))
  (import "env" "memory" (memory $env.memory 0))
  (func $__wasm_apply_relocs (type $t0)
    nop
  )
  (func $hello_world (type $t0)
    (local $l0 i32)
    global.get $env.__memory_base
    local.tee $l0
    call $env.puts
    drop
    local.get $l0
    i32.const 13
    i32.add
    call $env.puts
    drop
  )
  (global $__dso_handle i32 (i32.const 0))
  (export "__wasm_apply_relocs" (func $__wasm_apply_relocs))
  (export "hello_world" (func $hello_world))
  (export "__dso_handle" (global 1))
  (export "__post_instantiate" (func $__wasm_apply_relocs))
  (data $d0 (global.get $env.__memory_base) "Hello world!\00WebAssembly\e6\a8\a1\e5\9d\97\e6\b5\8b\e8\af\95\00")
)
```

`puts` 是需要自己从 JS 中导入的。在 C 的代码里实际上也可以不写 `#include <stdio.h>`，直接用 `int puts(const char *str);` 声明也是没问题的。

字符串被全部写进了一个数据段（汉字部分和源代码一样使用了 UTF-8 编码）。在加载 wasm 模块的时候需要提供一块内存区域用来从某个偏移位置开始保存这些数据。

这里就先使用 `console.log` 代替 `puts`，并且创建一个 [`WebAssembly.Memory`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) 作为内存区域，通过一个对象（也就是上面的 `importObject`）传递给要加载的 wasm 模块：

```js
const wasmMemory = new WebAssembly.Memory({ initial: 1 });
const wasmBuffer = new Uint8Array(wasmMemory.buffer);
const wasmModule = await fetch('hello-world.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => new WebAssembly.Instance(module, {
        env: {
            puts: console.log,
            memory: wasmMemory,
            __memory_base: 0,
        }
    }));
```

> `WebAssembly.Memory` 是一块用于 wasm 模块的内存，以 64 KB 为一“页”作为分配的基本单位，也可以在创建后动态扩容。在 JS 中可以通过 `TypedArray` 对它进行读写。

加载并执行一下试试看：

<img data-src="https://ae01.alicdn.com/kf/Had9484e4759b4fe6b4c7c4a1f3f7d254i.png" data-src-webp="https://ae01.alicdn.com/kf/H6ec662f7bba04b7cb7039848a799c5fcj.jpg">

字符串被写入了内存中从 `__memory_base` 开始的位置，而和 C 语言一样，调用 `puts`（实际上是 `console.log`）的参数是字符串开始的指针（数组下标）。如果自己实现一个 `puts`，就可以将字符串输出到控制台（或者是页面上某个 DOM 的 innerText）了。

> 顺便一提，有个叫 [Locutus](https://github.com/locutusjs/locutus) 的库尝试使用 JS 实现其他语言的标准库，虽然对于 C 的实现并不多……
>
> 比如要实现 `sprintf` 或 `printf`，就可以参考[这里](https://github.com/locutusjs/locutus/blob/master/src/c/stdio/sprintf.js)。

```js
const wasmMemory = new WebAssembly.Memory({ initial: 1 });
const wasmBuffer = new Uint8Array(wasmMemory.buffer);
const wasmModule = await fetch('hello-world.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => new WebAssembly.Instance(module, {
        env: {
            // 将从指针开始到下一个0x00之间的数据用UTF-8解码，然后用console.log输出
            puts: ptr => console.log(
                (new TextDecoder).decode(
                    wasmBuffer.slice(
                        ptr,
                        wasmBuffer.findIndex((e, i) => i >= ptr && !e)
                    )
                )
            ),
            memory: wasmMemory,
            __memory_base: 0,
        }
    }));
```

<img data-src="https://ae01.alicdn.com/kf/H75ed678f9ffc414e9b3d8190047ee58bs.png" data-src-webp="https://ae01.alicdn.com/kf/He83f806c53164f3294a93ed93051f1aet.jpg">

试着将内存中的第一个单元的数据改成 `0x41`（也就是字母 A），再次调用函数，可以看到输出的内容也发生了相应的变化。当然，实际使用的时候，如果需要向内存中写入数据，就要根据 `__memory_base` 和代码中数据段的大小自己预留好内存空间，避免覆盖了 wasm 模块内部使用的数据。

如果代码中需要用到局部变量，根据常识可以知道这些变量是存储在栈里的，编译出的 wasm 也会要求引入 `__stack_pointer` 用来设置栈指针：

```js
{
    env: {
        __stack_pointer: new WebAssembly.Global(
            {
                mutable: true,
                value: 'i32',
            },
            0x1000,
        ),
    },
}
```

和真实的 CPU 一样，栈指针也是向低地址延伸的，于是我们就得到了这样的一个简单的进程地址空间模型：`| 只读数据 | <- 栈 | 堆 -> |`，这已经开始有点涉及到操作系统的知识了……

既然提到堆了，能不能用 `malloc` 和 `free` 在堆上动态分配内存呢？然而，即使不考虑性能，一个完整的内存分配器非常复杂，在这种编译为 `SIDE_MODULE` 的简单模块的情况下是无法使用的，这里不再深入介绍。[这篇文章](https://surma.dev/things/c-to-webassembly/)的“Building an allocator”部分提出了一种简单的替代方法：分配的内存地址只是从堆的起始地址开始不断累加已分配的内存大小，至于 `free`？直接空着。

# 一个使用 WebAssembly 将性能提高到 30x 的例子

接下来就用一个实际的例子，来展示 WebAssembly 和 JS 相比在计算密集型任务上的超高性能。我分别用 WebAssembly 和 JS 试着实现了一遍 [RC4 加解密算法](https://zh.wikipedia.org/wiki/RC4)。为什么用了 RC4 作为例子？

* 加密和解密涉及到大量的计算操作
* RC4 的算法简短，且加密和解密是同一套算法，易于实现
* RC4 是流密码，对明文和密钥的长度<abbr title="明文长度不限，密钥长度 40-2048 位">要求不多</abbr>，也不需要像分组密码一样处理不同的工作模式，易于使用
* 有一定的实用性（虽然现在 RC4 的安全性已经比较有限了……）

以下是来自 Wikipedia 的伪代码：

```
for i from 0 to 255
    S[i] := i
endfor
j := 0
for( i=0 ; i<256 ; i++)
    j := (j + S[i] + key[i mod keylength]) % 256
    swap values of S[i] and S[j]
endfor
i := 0
j := 0
while GeneratingOutput:
    i := (i + 1) mod 256
    j := (j + S[i]) mod 256
    swap values of S[i] and S[j]
    k := inputByte ^ S[(S[i] + S[j]) % 256]
    output K
endwhile
```

照着伪代码，用 JS 实现一遍（经检验，实现完全正确，检验过程略）：

<p><details>
<summary>使用 JS 的实现</summary>

```js
/**
 * @param {Uint8Array} key
 * @param {Uint8Array} input
 * @returns {Uint8Array}
 */
const jsRc4 = (key, input) => {
    let i = 0;
    let j = 0;
    const keyLength = key.length;
    const inputLength = input.length;

    const sbox = new Uint8Array(256);
    for (i = 0; i < 256; ++i) sbox[i] = i;
    for (i = 0; i < 256; ++i) {
        j = (j + sbox[i] + key[i % keyLength]) & 0xFF;
        [sbox[i], sbox[j]] = [sbox[j], sbox[i]];
    }

    const output = new Uint8Array(inputLength);
    i = j = 0;
    for (let k = 0; k < inputLength; ++k) {
        i = (i + 1) & 0xFF;
        j = (j + sbox[i]) & 0xFF;
        [sbox[i], sbox[j]] = [sbox[j], sbox[i]];
        output[k] = input[k] ^ sbox[(sbox[i] + sbox[j]) & 0xFF];
    }

    return output;
}
```

</details></p>

然后移植到 C 语言 ~~一看就是一个模子刻出来的~~：

<p><details>
<summary>使用 C 语言的实现，以及相关的 JS 胶水代码</summary>

```c
static unsigned char sbox[256];

void rc4(unsigned char *key, unsigned char *input, unsigned int keyLength, unsigned int inputLength) {
    unsigned short i = 0;
    unsigned char j = 0;
    unsigned char temp;

    for (i = 0; i < 256; ++i) sbox[i] = i;
    for (i = 0; i < 256; ++i) {
        // j = (j + sbox[i] + key[i % keyLength]) & 0xFF;
        j += sbox[i] + key[i % keyLength];
        temp = sbox[i];
        sbox[i] = sbox[j];
        sbox[j] = temp;
    }

    i = j = 0;
    for (unsigned int k = 0; k < inputLength; ++k) {
        i = (i + 1) & 0xFF;
        // j = (j + sbox[i]) & 0xFF;
        j += sbox[i];
        temp = sbox[i];
        sbox[i] = sbox[j];
        sbox[j] = temp;
        input[k] ^= sbox[(sbox[i] + sbox[j]) & 0xFF];
    }
}
```

```js
const wasmMemory = new WebAssembly.Memory({ initial: 1 });
const wasmInstance = await fetch('rc4.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => new WebAssembly.Instance(module, {
        env: {
            memory: wasmMemory,
            __memory_base: 0,
        },
    }));

/**
 * @param {Uint8Array} key
 * @param {Uint8Array} input
 * @returns {Uint8Array}
 */
const wasmRc4 = (key, input) => {
    // 内存的分布：前256字节保留给S盒，然后是x字节的密钥和x字节的输入
    // 如果内存不足则进行扩容
    const sboxOffset = 256;
    const memoryRequired = key.length + input.length + sboxOffset;
    if (memoryRequired > wasmMemory.buffer.byteLength) {
        wasmMemory.grow(Math.ceil((memoryRequired - wasmMemory.buffer.byteLength) / 65536));
    }

    const wasmBuffer = new Uint8Array(wasmMemory.buffer);
    wasmBuffer.set(key, sboxOffset);
    wasmBuffer.set(input, sboxOffset + key.length);
    wasmInstance.exports.rc4(sboxOffset, sboxOffset + key.length, key.length, input.length);
    return new Uint8Array(wasmBuffer.slice(sboxOffset + key.length, sboxOffset + key.length + input.length));
}
```

</details></p>

测试则是使用 ~~1KB 的随机密钥~~，分别使用两种实现来加密 4KB、8KB……128MB 的同一份随机数据，并比较执行时间。

*测完才意识到其实并不需要这么长的密钥……**超过前 256 字节的部分是没有意义的**，不过这也不会影响测试结果，所以就不重新测啦！*

<p><details>
<summary>测试代码</summary>

```js
const results = [];
let inputLength = 2048;
for (let i = 0; i < 16; i++) {
    inputLength <<= 1;
    const rc4Key = new Uint8Array(1024).map(() => Math.random() * 256);
    const rc4Input = new Uint8Array(inputLength).map(() => Math.random() * 256);

    performance.mark('wasm-start');
    const wasmEncrypted = wasmRc4(rc4Key, rc4Input);
    performance.mark('wasm-end');
    performance.mark('js-start');
    const jsEncrypted = jsRc4(rc4Key, rc4Input);
    performance.mark('js-end');
    performance.measure('wasm', 'wasm-start', 'wasm-end');
    performance.measure('js', 'js-start', 'js-end');
    for (let j = 0; j < inputLength; j++) if (wasmEncrypted[j] !== jsEncrypted[j]) throw 'Not equal';

    results.push({
        length: inputLength,
        wasmTime: performance.getEntriesByName('wasm')[0].duration,
        jsTime: performance.getEntriesByName('js')[0].duration,
    });

    performance.clearMarks();
    performance.clearMeasures();
}
results.push(results.reduce(
    (acc, cur) => {
        for (const key in acc) acc[key] += cur[key];
        return acc;
    },
    {
        length: 0,
        wasmTime: 0,
        jsTime: 0,
    }
));
results.forEach(r => {
    r.wasmSpeed = r.length / r.wasmTime;
    r.jsSpeed = r.length / r.jsTime;
    r.ratio = r.wasmSpeed / r.jsSpeed;
});
console.table(results);
```

</details></p>

至于测试结果嘛……首先是在我自己日常用的 Firefox 上测试，性能直接提升了 8x！（最后一行是以上测试结果的总和）

<img data-src="https://ae01.alicdn.com/kf/H3d340f0428e547e2af3a74c41b2a495cj.png" data-src-webp="https://ae01.alicdn.com/kf/H3837f04fbf9f49d6bfb820ff45e36e0aR.jpg">

然后是 Chrome 上的测试结果。即使是面对使用了性能最强的 V8 引擎的 Chrome，WebAssembly 的性能优势仍然能达到 2x（虽然速度和 Firefox 那边差不多……）

<img data-src="https://ae01.alicdn.com/kf/Hf4bc9d25a9184a0e89e398a40fe71950s.png" data-src-webp="https://ae01.alicdn.com/kf/H2c771e7ff0934e4bb270160637753b07D.jpg">

至于标题上的 30x……是在已经弃坑的旧版 Edge 里面测出来的，不过不论是 WebAssembly 还是 JS 这执行速度都比另外两个差了一大截。

<img data-src="https://ae01.alicdn.com/kf/Ha4ad8d104302413383ce3ce0db556e91E.png" data-src-webp="https://ae01.alicdn.com/kf/H5a5e94d374a5477dafe1869bf5e24a35u.jpg">

（IE 不资辞 WebAssembly，直接爬吧）

你也可以在[这里](https://jsbin.com/taxocoripu/edit?html,output)自己试试看～（wasm 文件已经以 Data URL 的形式嵌入了）

结论是显而易见的，WebAssembly 的性能比 JS 不知道高到哪里去了。而且如果不写清楚函数名的话，直接对着它的“汇编代码”很难看出是 RC4 算法，所以把一些关键操作放进 wasm 模块或许也是个防止前端代码被逆向的好主意？

即使不熟悉 C 语言和 Emscripten 的那一套工具，GitHub 上也有 [Walt](https://github.com/ballercat/walt) 和 [AssemblyScript](https://github.com/AssemblyScript/assemblyscript) 这样的工具可以直接使用 TypeScript 的语法编写 wasm 模块，以后再试试看吧～

# Extra：WebAssembly 的 SIMD 支持

WebAssembly 的标准里是有 [SIMD 指令集的提案](https://github.com/WebAssembly/simd)的，最近各大浏览器以及 Node.js 的 JS 引擎终于[实装了对 SIMD 的支持](https://github.com/WebAssembly/simd/blob/main/proposals/simd/ImplementationStatus.md)。理论上来说，使用 SIMD 可以进一步增加 wasm 的执行速度（虽然我做过的简单测试里似乎并不是这样……）

参考 [GoogleChromeLabs/wasm-feature-detect](https://github.com/GoogleChromeLabs/wasm-feature-detect)，可以用下面的代码检测对 SIMD 的支持：

```js
WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));
```

根据 [Emscripten 文档](https://emscripten.org/docs/porting/simd.html)所述，编译时只要添加参数 `-msimd128` 就可以直接在编译的时候使用 SIMD 优化了。

> 封面图：[Pixiv ID: 82627900 「After school~」 by 呱子](https://www.pixiv.net/artworks/82627900)