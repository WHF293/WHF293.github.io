import{_ as e,c as t,o as a,e as i}from"./app.a93f068e.js";const m=JSON.parse('{"title":"03 react 调度机制学习","description":"","frontmatter":{},"headers":[{"level":2,"title":"任务队列管理","slug":"任务队列管理","link":"#任务队列管理","children":[]},{"level":2,"title":"单个任务的中断以及恢复","slug":"单个任务的中断以及恢复","link":"#单个任务的中断以及恢复","children":[]}],"relativePath":"react/03-react-调度机制学习.md","lastUpdated":1677142904000}'),r={name:"react/03-react-调度机制学习.md"},l=i('<h1 id="_03-react-调度机制学习" tabindex="-1">03 react 调度机制学习 <a class="header-anchor" href="#_03-react-调度机制学习" aria-hidden="true">#</a></h1><ul><li><a href="https://juejin.cn/post/7046217872833511454" target="_blank" rel="noreferrer">不用一行代码，搞懂React调度器原理</a></li></ul><p>Scheduler : 调度器</p><p>对于多个任务，它会先执行优先级高的，对于单个任务，它会有节制地去执行， 即 <code>多个任务的管理、单个任务的执行控制</code></p><p>换句话说，线程只有一个，它不会一直占用着线程去执行任务，而是执行一会，中断一下，如此往复。</p><p>用这样的模式，来避免一直占用有限的资源执行耗时较长的任务，解决用户操作时页面卡顿的问题，实现更快的响应。</p><p>为了实现上面说的功能，react 引入了两个概念: <code>时间切片</code>， <code>任务优先级</code></p><p>这两个概念对应了 Scheduler 的两个核心功能</p><ul><li><code>任务队列管理</code></li><li><code>时间片下任务的中断和恢复</code></li></ul><h2 id="任务队列管理" tabindex="-1">任务队列管理 <a class="header-anchor" href="#任务队列管理" aria-hidden="true">#</a></h2><p>先了解几个概念：</p><p>startTime: 任务开始执行的时间 currentTime：当前时间 delay（延迟时间）= startTime - currentTime</p><p>假设 delay = 1000，说明函数的执行要在 1s 后再执行</p><ul><li>任务队列管理 <ul><li>过期任务： startTime &gt;= currentTime, 任务放到 <code>timerQueue</code> 里面 <ul><li>依据任务的开始时间（startTime）排序，开始时间越早，说明会越早开始，<code>开始时间小的排在前面</code></li><li>任务进来的时候，开始时间默认是当前时间，如果进入调度的时候传了延迟时间，开始时间则是当前时间与延迟时间的和</li><li>处于 timerQueue 里的任务不会自己执行，等 startTime &gt; currentTime 时，给去除扔到 taskQueue 里去</li></ul></li><li>未过期任务： startTime &lt; currentTime， 任务放到 <code>taskQueue</code> 里面 <ul><li>依据任务的过期时间（expirationTime）排序，过期时间越早，说明越紧急，过期时间小的排在前面</li><li>过期时间根据任务优先级计算得出，<code>优先级越高，过期时间越早</code>。</li><li>因为已过期，，所以直接遍历当前 taskQueue, 挨个执行任务即可</li></ul></li></ul></li></ul><h2 id="单个任务的中断以及恢复" tabindex="-1">单个任务的中断以及恢复 <a class="header-anchor" href="#单个任务的中断以及恢复" aria-hidden="true">#</a></h2><p>在循环 taskQueue执 行每一个任务时，如果某个任务执行时间过长，<strong>达到了时间片限制的时间，那么该任务必须中断，以便于让位给更重要的事情（如浏览器绘制），等事情完成，再恢复执行任务</strong></p><ul><li><p>Scheduler 管理着 taskQueue 和 timerQueue 两个队列，它会定期将 timerQueue 中的过期任务放到 taskQueue 中，然后让调度者通知执行者循环 taskQueue 执行掉每一个任务。</p></li><li><p>执行者控制着每个任务的执行，一旦某个任务的执行时间超出时间片的限制。就会被中断，然后当前的执行者退场，退场之前会通知调度者再去调度一个新的执行者继续完成这个任务，新的执行者在执行任务时依旧会根据时间片中断任务，然后退场，重复这一过程，直到当前这个任务彻底完成后，将任务从taskQueue出队</p></li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4704c25f23fc47158afe7656b5f6e2be~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p>',18),c=[l];function u(d,o,s,p,n,_){return a(),t("div",null,c)}const f=e(r,[["render",u]]);export{m as __pageData,f as default};
