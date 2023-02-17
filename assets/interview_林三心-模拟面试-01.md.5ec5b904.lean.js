import{_ as s,c as a,o as n,e as l}from"./app.e531ddc1.js";const A=JSON.parse('{"title":"林三心面试视频记录 - 2022-06-05","description":"","frontmatter":{"title":"林三心面试视频记录 - 2022-06-05","desc":"以下出现的问题均取自 B 站林三心面试视频集，问题详解取自各平台对应内容的博客（地址已附上，侵删），具体使用以及详细说明可以看对应博客"},"headers":[{"level":2,"title":"DOMContentLoaded 、 onload 是啥？这两的区别？","slug":"domcontentloaded-、-onload-是啥-这两的区别","link":"#domcontentloaded-、-onload-是啥-这两的区别","children":[]},{"level":2,"title":"什么是 doucmentFragFrame （文档碎片）？","slug":"什么是-doucmentfragframe-文档碎片","link":"#什么是-doucmentfragframe-文档碎片","children":[]},{"level":2,"title":"说一下浏览器额回流重绘","slug":"说一下浏览器额回流重绘","link":"#说一下浏览器额回流重绘","children":[]},{"level":2,"title":"说一下 getBoundinfClientRect 作用？","slug":"说一下-getboundinfclientrect-作用","link":"#说一下-getboundinfclientrect-作用","children":[]},{"level":2,"title":"说一下图片懒加载，以及你对 intersectionObserver 这个 api 的理解","slug":"说一下图片懒加载-以及你对-intersectionobserver-这个-api-的理解","link":"#说一下图片懒加载-以及你对-intersectionobserver-这个-api-的理解","children":[]},{"level":2,"title":"mutaionobserver 是啥？有什么作用？","slug":"mutaionobserver-是啥-有什么作用","link":"#mutaionobserver-是啥-有什么作用","children":[]},{"level":2,"title":"vue 的 dep 和 watcher 为什么要互相收集？","slug":"vue-的-dep-和-watcher-为什么要互相收集","link":"#vue-的-dep-和-watcher-为什么要互相收集","children":[]},{"level":2,"title":"new Vue() 的时候发生了什么？","slug":"new-vue-的时候发生了什么","link":"#new-vue-的时候发生了什么","children":[]},{"level":2,"title":"箭头函数为什么不能作为构造函数？","slug":"箭头函数为什么不能作为构造函数","link":"#箭头函数为什么不能作为构造函数","children":[]},{"level":2,"title":"promise 的 then 方法为什么可以链式调用？","slug":"promise-的-then-方法为什么可以链式调用","link":"#promise-的-then-方法为什么可以链式调用","children":[]},{"level":2,"title":"场景题：promise 封装一个 http 请求， 怎么实现请求超时？","slug":"场景题-promise-封装一个-http-请求-怎么实现请求超时","link":"#场景题-promise-封装一个-http-请求-怎么实现请求超时","children":[]},{"level":2,"title":"promise.all 和 promise.race 区别？","slug":"promise-all-和-promise-race-区别","link":"#promise-all-和-promise-race-区别","children":[]},{"level":2,"title":"promise.allSettled 是啥？解决了 promise.all 的什么问题?","slug":"promise-allsettled-是啥-解决了-promise-all-的什么问题","link":"#promise-allsettled-是啥-解决了-promise-all-的什么问题","children":[]},{"level":2,"title":"async await 和 定时器的执行顺序？","slug":"async-await-和-定时器的执行顺序","link":"#async-await-和-定时器的执行顺序","children":[{"level":3,"title":"promise 手写实现","slug":"promise-手写实现","link":"#promise-手写实现","children":[]},{"level":3,"title":"async await 手写实现","slug":"async-await-手写实现","link":"#async-await-手写实现","children":[]},{"level":3,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]},{"level":3,"title":"axios 怎么取消重复请求？","slug":"axios-怎么取消重复请求","link":"#axios-怎么取消重复请求","children":[]},{"level":3,"title":"cookie 和 localStorage 、 sessionStorage 区别？","slug":"cookie-和-localstorage-、-sessionstorage-区别","link":"#cookie-和-localstorage-、-sessionstorage-区别","children":[]}]},{"level":2,"title":"html5 语义化的好处","slug":"html5-语义化的好处","link":"#html5-语义化的好处","children":[]},{"level":2,"title":"css3 毛玻璃效果的实现","slug":"css3-毛玻璃效果的实现","link":"#css3-毛玻璃效果的实现","children":[]},{"level":2,"title":"css2 的 :first-child 和 css3 的 :first-of-type 的区别？","slug":"css2-的-first-child-和-css3-的-first-of-type-的区别","link":"#css2-的-first-child-和-css3-的-first-of-type-的区别","children":[]},{"level":2,"title":"https 比 http 安全在哪里","slug":"https-比-http-安全在哪里","link":"#https-比-http-安全在哪里","children":[]},{"level":2,"title":"快速排序和冒泡排序实现，以及相应的时间复杂度","slug":"快速排序和冒泡排序实现-以及相应的时间复杂度","link":"#快速排序和冒泡排序实现-以及相应的时间复杂度","children":[]},{"level":2,"title":"vue 中 的 v-model 可以用什么替代","slug":"vue-中-的-v-model-可以用什么替代","link":"#vue-中-的-v-model-可以用什么替代","children":[]},{"level":2,"title":"vue 销毁时，所以自定义事件和原生时间都会跟着解绑吗","slug":"vue-销毁时-所以自定义事件和原生时间都会跟着解绑吗","link":"#vue-销毁时-所以自定义事件和原生时间都会跟着解绑吗","children":[]},{"level":2,"title":"vue3 怎么解决 vue2 的响应式缺陷的","slug":"vue3-怎么解决-vue2-的响应式缺陷的","link":"#vue3-怎么解决-vue2-的响应式缺陷的","children":[]},{"level":2,"title":"nextTick 是什么任务？为什么优先是微任务","slug":"nexttick-是什么任务-为什么优先是微任务","link":"#nexttick-是什么任务-为什么优先是微任务","children":[]},{"level":2,"title":"一个超长的字符串能存在栈内存里面吗","slug":"一个超长的字符串能存在栈内存里面吗","link":"#一个超长的字符串能存在栈内存里面吗","children":[]},{"level":2,"title":"赋值、浅拷贝、深拷贝的区别","slug":"赋值、浅拷贝、深拷贝的区别","link":"#赋值、浅拷贝、深拷贝的区别","children":[]},{"level":2,"title":"webpack style-loader 和 css-loader 区别","slug":"webpack-style-loader-和-css-loader-区别","link":"#webpack-style-loader-和-css-loader-区别","children":[]},{"level":2,"title":"webpack 怎么配置 ts 打包","slug":"webpack-怎么配置-ts-打包","link":"#webpack-怎么配置-ts-打包","children":[]},{"level":2,"title":"webpack 3 中 hash 值配置的区别","slug":"webpack-3-中-hash-值配置的区别","link":"#webpack-3-中-hash-值配置的区别","children":[]},{"level":2,"title":"强缓存和协商缓存的区别","slug":"强缓存和协商缓存的区别","link":"#强缓存和协商缓存的区别","children":[]},{"level":2,"title":"如何计算白屏时间","slug":"如何计算白屏时间","link":"#如何计算白屏时间","children":[]},{"level":2,"title":"本地服务代理为什么能解决跨域问题？其他的跨域解决方案","slug":"本地服务代理为什么能解决跨域问题-其他的跨域解决方案","link":"#本地服务代理为什么能解决跨域问题-其他的跨域解决方案","children":[]},{"level":2,"title":"indexOf 的不足，以及和 includes 的区别","slug":"indexof-的不足-以及和-includes-的区别","link":"#indexof-的不足-以及和-includes-的区别","children":[]},{"level":2,"title":"vue 数据多层级传递(跨越多级组件)","slug":"vue-数据多层级传递-跨越多级组件","link":"#vue-数据多层级传递-跨越多级组件","children":[]},{"level":2,"title":"vite 很快，为什么，大致的原理？","slug":"vite-很快-为什么-大致的原理","link":"#vite-很快-为什么-大致的原理","children":[]},{"level":2,"title":"vuex 怎么实现将数据注入到每一个组件里","slug":"vuex-怎么实现将数据注入到每一个组件里","link":"#vuex-怎么实现将数据注入到每一个组件里","children":[]},{"level":2,"title":"axios 如何区分浏览器环境和 node 环境","slug":"axios-如何区分浏览器环境和-node-环境","link":"#axios-如何区分浏览器环境和-node-环境","children":[]},{"level":2,"title":"网站实现换肤的方式","slug":"网站实现换肤的方式","link":"#网站实现换肤的方式","children":[]},{"level":2,"title":"i18n 实现原理","slug":"i18n-实现原理","link":"#i18n-实现原理","children":[]},{"level":2,"title":"说一下 TKD","slug":"说一下-tkd","link":"#说一下-tkd","children":[]}],"relativePath":"interview/林三心-模拟面试-01.md","lastUpdated":1675774867000}'),p={name:"interview/林三心-模拟面试-01.md"},o=l("",91),e=[o];function t(r,c,F,D,y,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
