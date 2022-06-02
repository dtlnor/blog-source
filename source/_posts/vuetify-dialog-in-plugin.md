---
title: 以 Vue 插件的形式封装 Vuetify 的对话框
date: 2020-07-25 10:47:20
updated: 2020-07-25 10:47:20
excerpt: 一个使用 Vue 插件的简单例子
thumbnail: https://p.pstatp.com/origin/fe9c0002b4b46ee82c8d
thumbnail_webp: https://ae01.alicdn.com/kf/H9740df5568d44934b75b93a40eabe5b7q.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/e2ccee04d50c92fe1eb485a2529b24d812610.jpg
thumbnail_color: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wCEAAICAgICAgICAgIDAwIDAwQDAwMDBAYEBAQEBAYJBQYFBQYFCQgJBwcHCQgOCwkJCw4QDQwNEBMRERMYFxgfHyoBAgICAgICAgICAgMDAgMDBAMDAwMEBgQEBAQEBgkFBgUFBgUJCAkHBwcJCA4LCQkLDhANDA0QExERExgXGB8fKv/CABEIADAAYAMBIgACEQEDEQH/xAA1AAACAgMBAQEAAAAAAAAAAAACAwQHAAEFCAYJAQACAwEBAAAAAAAAAAAAAAACAwABBAYF/9oADAMBAAIQAxAAAAD9zV6j8t0c3IbRuQuJXJDYXRpS4CuViwonqQ2Q0sDORCWHaqst6pSb8zffh/24O5wsW3yhMWyRdaDE+SSWuXsY7Suir34Euj6mIbBY9L2K/8QANRAAAgEDAgMCDAYDAAAAAAAAAQIDAAQRBSEGEjEiUQcQExQjQXFzkrGy0TJSU2FykzRDYv/aAAgBAQABPwCeZlcABMcidUUn8IoXEndH/Wv2oTv3J8C15dx6k+BftXnL7j0e3XsL9qN0wZMmJSxKrlF7RxnA23OKute0+x1Cw0261awg1W/EosLOZ4o57nyI5pDBG2Gk5Bu3L0FC6dlz6P8Ac8i15xJ3J8C/avOJO5PgX7UbqQAnEf8AWv2pJ5XuIBypgyLnsL6z7KudpB/CP6R4hkbgUDnrVxJDBG8s8ojh2BZjgDJwN64msrvVLvROI9AaR5LTJEIlFuszHsBpWkBCpGrEk9avOCdP4g8JFt4Q794Ll9DtmsNFeOZJ8ySqsmQgBETxOT2gQzA4O1WsU6QKLl0M2SxKDAGfVRHXFBsHGKdsOo9WatwxuYPeL86ud5B7uP6RSjxHOVx31dQQ3NtLDcR+UibAK/uDkEeyuJOBtNteF7jQ9O4gurGS9lghtEu7slJ5YeaQW+Wy3pRnnIyx614G+FbRILvU9U0e2stdsdZvUjs7e7a6Fk6Itq6mQYEpcLzZPeKQndQMAVjvrA60VUnOKh2nhI/UX51Pnyo93H9IpfF1GKAPU9a8Kmua3wxwrqOq6dpa6lrawyDTAsBmWC52xJyb5KJzP3nGBXgTsfC/wtdavf6ho19d6JqpeW984mTzyC4aISrqMcROZCxcK6jdu7ag0/k4wo7YwHLevvNMcggGtsDPXxW4BuIM/qL86uG9Ku+/JH9IpWz7aBFZxXOTz+zaueUNDyLlT+Ju6tW1HjfVk4r1LhGylh4t4Q4nFnBpAuF8z1yxmSFyLnnC8oaGUumDlHWmuIw5XO3qNc6ncdK5gaBq3/yIPeL86mindwywuV5I8EKfyio4bguMwyY/ia8ldb+gfr+U0Ibk8wMMm+w7JqS3vwI2hgfYnOVNIt8SqmzfBO5AOBWn8IQaNxHxbxLBJetca+LFru2c5t45LCIwLJCMZVnTAfJ3wKNpdtKztDJykYxymo7eZVRFgkAH/JpYbkY9A+P4mhBOf9MnwmreCcTwkwyAB1z2T31//8QAHxEBAAMAAgIDAQAAAAAAAAAAAQACERIhQVEDMTIQ/9oACAECAQE/AG3pZyfbDbfp6i/XGy6a9zfbP2tVcmrsBT7jVaNbG1TGfGVKV4mB4P7zB89sPkPAwsuOJLtqta0OvM5pmjCzpP/EACkRAAIBAgQFAwUAAAAAAAAAAAECAAMSBBEhMQUiQVKRE2FxECMygdH/2gAIAQMBAT8AREsTlGw6Q007R4hVBsoJ+IEHNfTCkHIC3IyxOiL4npoqMbRsYg+2h9h9MKXGKw70SFrioppk93TecZotS4hWRsZTxOeR9VWzG2o/Rgj/AIt8GLZYnMNFENvevmFUyzD0yNdCREsrkszBQFAGvt/YQgJyceY5Sx+cbHrP/9k
---

> 封面图：[Pixiv ID: 83174188 「赤座あかりちゃん　お誕生日お絵かき」 by もこち](https://www.pixiv.net/artworks/83174188)

# 一个想要更优雅地调用对话框的需求

因为我比较喜欢 Material Design 的风格，所以之前做一些小东西的时候都是使用一个比较轻量的框架 [MDUI](https://www.mdui.org/) 进行开发。后来逐渐接触了 Vue，也就顺便开始使用起另一个 Vue 生态下专用的，功能更丰富的 Material Design 框架 [Vuetify](https://vuetifyjs.com/)。

Vuetify 好是好，但是有一个问题是……这东西的对话框、Snackbar 等组件，用起来太麻烦啦！(╯‵□′)╯︵┻━┻

在 Vuetify 里，要创建一个对话框，首先要在页面模板里写上相关的 HTML，这里使用 Vue 的单文件组件表示：

```html
<template>
  <v-app>
    <v-container>
      <!-- 仅仅是为了显示这个对话框 -->
      <v-btn @click="dialog=true">Open Dialog</v-btn>

      <v-dialog v-model="dialog" max-width="480">
        <v-card>
          <v-card-title class="headline">一个确认框</v-card-title>
          <v-card-text>江主席，你觉得董先生连任吼不吼啊？</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog=false">不吼</v-btn>
            <v-btn color="primary" text @click="dialog=false">吼啊</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
}
</script>
```

<img data-src-webp="https://ae01.alicdn.com/kf/Hb62bbfbb6cc04626ae5715fd6e323cb0j.jpg" data-src="https://ae01.alicdn.com/kf/H68e4d8702cb94914b7a8e4e53d3f357et.png">

每次做一个对话框，都得写上这一大堆 HTML 代码（`<v-dialog>`部分）。另外……看到那个 `v-model="dialog"` 了吗？为了控制对话框是否显示，还得在 Vue 组件的 data 部分加上一个变量。

在一个应用里，有些对话框是比较常用的，比如警告框、确认框、输入框等等……如果在应用的很多组件里都得把这一堆 HTML 和变量复制粘贴一遍，就会非常麻烦也很不优雅。对于那些常用对话框，如果需要在对话框的按钮上绑定事件（比如确认框的“确定”和“取消”），还得写上相关的 method，这个操作重复多次同样会很麻烦。

MDUI 的对话框也可以通过编写 HTML 的方式调用，由于它不依赖 Vue，所以也需要用原生 JS 的方式绑定对话框操作的事件，某种意义上来说这种方法和 Vuetify 的对话框也没什么区别……

```html
<!-- 仅仅是为了显示这个对话框 -->
<button
  class="mdui-btn mdui-ripple mdui-color-theme-accent"
  mdui-dialog="{target: '#exampleDialog'}"
>Open Dialog</button>

<div class="mdui-dialog" id="exampleDialog">
  <div class="mdui-dialog-title">一个确认框</div>
  <div class="mdui-dialog-content">江主席，你觉得董先生连任吼不吼啊？</div>
  <div class="mdui-dialog-actions">
    <button class="mdui-btn mdui-ripple" mdui-dialog-close>吼啊</button>
    <button class="mdui-btn mdui-ripple" mdui-dialog-confirm>不吼</button>
  </div>
</div>
```

但是 MDUI 还有一个“预定义对话框”的功能，将一些常用的对话框封装成 JS 的函数，于是只需要调用它就可以实现那一大堆 HTML 模板以及绑定事件的功能：

```js
mdui.confirm(
    '江主席，你觉得董先生连任吼不吼啊？',
    '一个确认框',
    () => console.log('点击了“确认”'),
    () => console.log('点击了“取消”'),
    {
        confirmText: '吼啊',
        cancelText: '不吼',
    }
);
```

哪种方法更方便，不言而喻，一目了然 (`ヮ´ )

有人发了个 [Feature Request](https://github.com/vuetifyjs/vuetify/issues/3037) 建议 Vuetify 也加上使用 JS 调用对话框的功能，比如像下面这样：

```js
this.$dialog.alert('Everything looks fine!');

this.$dialog.alert({
    title: 'Title Alert',
    message: 'I have a title, a custom button and <b>HTML</b>!',
    confirmText: 'Cool!',
});
```

……并且表示隔壁的另一个 Vue 组件库 Buefy 也已经有[类似的功能](https://buefy.org/documentation/dialog#from-outside-vue-instance)了:

```js
import { DialogProgrammatic as Dialog } from 'buefy';
Dialog.alert('We can use confirm and prompt methods as well');
```

原作者的回复是这个功能将会作为 Vuex 的模块推出。但是实际上过了两年多的时间，这东西一直到今天似乎都是🕊️的状态，文档里也再也没提过相关的东西……（摊手

既然没有轮子，那就自己造好了。我们可以通过 Vue 插件的方式，自己实现一个调用对话框的函数～

# Vue 插件是什么？

我们可以为 Vue 扩展组件（`Vue.component`）、指令（`Vue.directive`）、注入（`Vue.mixin`）等功能，还可以在 Vue 的原型链上添加方法（比如添加了 `Vue.prototype.$dialog.alert` 之后，就可以像上面那样在 Vue 组件里使用 `this.$dialog.alert`）。

不过，直接使用 `Vue.*` 的方式扩展功能不便于重用代码，每次都需要自行在有 Vue 的地方（比如使用 CDN 方式引入的 `window.Vue`，或者 `import Vue from 'vue'`）将这些代码复制粘贴一遍。为了将扩展功能和 NPM 的“包”结合起来（？），Vue 有个“插件”的概念，通过 `Vue.use(MyPlugin, options)` 就可以使用指定配置注册插件了，这个 `MyPlugin` 可以从其它模块中导入。

至于这个 `MyPlugin` 是什么……在 [Vue 的文档](https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6)中，插件应该是一个有 `install(Vue, options)` 方法的对象。实际使用的 Vue 作为参数被传入 `install` 方法，在这里可以像平时一样对 Vue 进行操作，但是并不需要在插件的代码中保证存在 `window.Vue` 或者 `import Vue from 'vue'`（通过 `Vue.use` 注册插件的时候才需要）。

如果插件不复杂的话，也可以直接使用形如上面的 `install` 的函数的形式编写。虽然文档中没有提及，但是查看 [`Vue.use` 的源代码](https://github.com/vuejs/vue/blob/master/src/core/global-api/use.js)就可以看出函数形式的插件也是支持的：

```js
import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    // 不允许重复注册同一个插件
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // 处理插件的配置
    const args = toArray(arguments, 1)
    args.unshift(this)

    if (typeof plugin.install === 'function') {
      // 如果插件是有install方法的对象
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      // 如果插件本身就是一个函数
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
```

下面是一个 Vue 插件的例子。众所周知，Vue 推荐使用 axios 发送各种 HTTP 请求。有人写了个名叫 [`vue-axios`](https://github.com/imcvampire/vue-axios) 的插件，它的主要作用很简单：把 axios 挂到了 Vue 的原型上，另外还写好了 `index.d.ts` 用于类型提示。装了这个插件以后（`Vue.use(VueAxios, axios)`），就不用每次都在单文件组件里 `import axios from 'axios'` 了。

```js
(function () {

function plugin(Vue, axios) {
  if (plugin.installed) return
  plugin.installed = true

  if (!axios) {
    console.error('You have to install axios')
    return
  }

  Vue.axios = axios
  Vue.$http = axios

  Object.defineProperties(Vue.prototype, {
    axios: { get() { return axios } },
    $http: { get() { return axios } },
  })
}

if (typeof exports == "object") {
  module.exports = plugin
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin })
} else if (window.Vue && window.axios) {
  Vue.use(plugin, window.axios)
}

})();
```

当然，使用对象的方式 `plugin = { install(Vue, axios) { ... } }` 也是等效的。

~~更简单的做法应该是直接写 `Vue.prototype.axios = Vue.prototype.$http = axios`~~

# 编写 Vuetify 对话框插件

MDUI 的“预定义对话框”本质上也是根据选项[拼接出 HTML 代码](https://github.com/zdhxiong/mdui/blob/14e30605fe07dda00aa3b30831f91e47343fccd0/src/components/dialog/dialog.ts#L171)，然后生成 DOM 添加到页面上。当然在 Vue 这边手动操作 DOM 已经很少见了，拼接 HTML 更是不可能的事情，因此对应的操作应该是根据选项生成对应的 Vue 组件，然后通过 `$mount` 手动添加到页面上。

插件会在 Vue 的原型上添加一个 `$confirm` 方法，参数是一个对象：

```js
{
    title: String, // 对话框的标题
    content: String, // 对话框的内容
    onConfirm: Function, // 按下“确认”后执行的函数
    onCancel: Function, // 按下“取消”后执行的函数
}
```

另外，由于 Vuetify 框架的设计，创建对话框组件的时候还要把当前使用的 Vuetify 对象传入。对话框所在的 Vue 组件很容易编写：

```js
const vm = new Vue({
    template: `
      <v-dialog v-model="active" max-width="480">
        <v-card>
          <v-card-title class="headline">{{ title }}</v-card-title>
          <v-card-text>{{ content }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="active=false; (onCancel || (() => {}))()">Cancel</v-btn>
            <v-btn color="primary" text @click="active=false; (onConfirm || (() => {}))()">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    `,
    vuetify: config.vuetify,
    props: {
        title: { type: String },
        content: { type: String },
        onConfirm: { type: Function },
        onCancel: { type: Function },
    },
    data() {
        return {
            active: false,
        };
    },
    mounted() {
        this.active = true;
    },
});
```

如果是使用 Vue CLI 的话，可以把这一堆东西写进单文件组件，然后 `import Dialog from 'dialog.vue'; const vm = new Vue(Dialog);`，除了上面的 `template` 会被编译成一个等效的渲染函数 `render`，其他的配置是不变的。

然后是编写插件：

```js
const confirmPlugin = (Vue, config) => {
    Vue.prototype.$confirm = dialogConfig => {
        // 创建组件
        const vm = new Vue(/* 上面的组件 */);
        // 应用对话框的配置
        Object.assign(vm, dialogConfig);
        // 将组件添加到页面上
        vm.$mount();
    };
};
```

需要使用的时候，只要注册一下插件就可以了：

```js
Vue.use(Vuetify);
const vuetify = new Vuetify;

Vue.use(confirmPlugin, { vuetify });

const vm = new Vue({
    template: `
        <v-app>
            <v-container>
                <v-btn
                    @click="$confirm({
                        title: '一个确认框',
                        content: '江主席，你觉得董先生连任吼不吼啊？',
                        onConfirm: () => console.log('吼啊！'),
                        onCancel: () => console.log('不吼……'),
                    })"
                >Dialog</v-btn>
            </v-container>
        </v-app>
    `,
    vuetify,
    data() { return { console } },
});
document.body.appendChild(vm.$mount().$el);
```

[试试看！](https://jsbin.com/vuwetisugu/edit?html,console,output)

这里只是简单编写了上面提到的确认框插件，如果需要将其他的对话框（或者是另一个常用的组件 Snackbar）做成插件，方法是类似的～这个例子也比较简单，实际使用的时候还可以利用 Vuetify 对话框组件的[更多功能](https://vuetifyjs.com/zh-Hans/components/dialogs/#api)，另外在对话框关闭后应该使用 `$destroy` 销毁生成的 Vue 组件并删除对应的 DOM（`$el`），在这里就省略了……

<img data-src-webp="https://ae01.alicdn.com/kf/H557818e0d4594a7195dabd7cec7fe0e7k.jpg" data-src="https://ae01.alicdn.com/kf/H897469dfdccf42d7a407dc8a16318f25w.png">

我写了一个功能比较完整的例子，像 MDUI 一样把 Vuetify 的警告框、确认框和输入框都做成了 Vue 的插件。除了“关闭对话框后销毁组件”，还加入了队列的功能（同时调用多个对话框，对话框会逐个显示）。可以在[这里](https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2021-11-08/90adf6a2-6753-4974-baab-3ca9652b3b07null)下载～

<img data-src-webp="https://ae01.alicdn.com/kf/H1582e6a5f09f4db4a39b7d5a45e744f5l.jpg" data-src="https://ae01.alicdn.com/kf/Hdd53c3c5c9d345d792e5f3478f686d31M.png">

（Snackbar 的插件也有哦）