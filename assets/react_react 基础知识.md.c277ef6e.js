import{_ as s,c as n,o as a,e as l}from"./app.6df6fd21.js";const u=JSON.parse('{"title":"React 的一些基础知识","description":"","frontmatter":{"title":"React 的一些基础知识","date":"2022-04-21T00:00:00.000Z","tags":["all","ts","jsx"],"categories":["react"]},"headers":[{"level":2,"title":"useMemo","slug":"usememo","link":"#usememo","children":[{"level":3,"title":"memo的作用","slug":"memo的作用","link":"#memo的作用","children":[]},{"level":3,"title":"useMemo的作用","slug":"usememo的作用","link":"#usememo的作用","children":[]}]},{"level":2,"title":"useEffect 和 useLayoutEffect 是啥，怎么用","slug":"useeffect-和-uselayouteffect-是啥-怎么用","link":"#useeffect-和-uselayouteffect-是啥-怎么用","children":[{"level":3,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[]},{"level":3,"title":"useLayoutEffect","slug":"uselayouteffect","link":"#uselayouteffect","children":[]},{"level":3,"title":"使用对比","slug":"使用对比","link":"#使用对比","children":[]}]}],"relativePath":"react/react 基础知识.md","lastUpdated":1675774867000}'),o={name:"react/react 基础知识.md"},p=l(`<p>参考资料：</p><ul><li><a href="https://juejin.cn/post/6897038904914870286" target="_blank" rel="noreferrer">React的memo和useMemo的作用</a></li><li><a href="https://www.jianshu.com/p/9866f2fd4207" target="_blank" rel="noreferrer">useMemo</a></li><li><a href="./.html"></a></li></ul><h2 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-hidden="true">#</a></h2><p>在前端开发的过程中，我们需要缓存一些内容，以避免在需渲染过程中因大量不必要的耗时计算而导致的性能问题。在 vue 中我们可以使用 computed 来实现，在 react 中 也提供了类似功能的 api， memo 和 useMemo 就是其中之一。</p><p>在 class component 时代，为了性能优化我们经常会选择使用 <code>PureComponent,每次对 props 进行一次浅比较</code>，当然，除了 PureComponent 外，我们还可以<code>在 shouldComponentUpdate 中进行更深层次的控制</code>。</p><h3 id="memo的作用" tabindex="-1">memo的作用 <a class="header-anchor" href="#memo的作用" aria-hidden="true">#</a></h3><blockquote><p>当数据变化时，代码会重新执行一遍，但是子组件数据没有变化也会执行，这个时候可以使用memo将子组件封装起来，让子组件的数据只在发生改变时才会执行</p></blockquote><h3 id="usememo的作用" tabindex="-1">useMemo的作用 <a class="header-anchor" href="#usememo的作用" aria-hidden="true">#</a></h3><blockquote><p>主要是用来处理子组件,子组件中某个计算特别复杂的时候,这样重复渲染做重复的计算,即时他前后计算的结果是一致的</p></blockquote><p>如果说类组件的性能优化的方法是 shouldComponentUpdate 和 PureComponent，那么给函数组件做性能优化的就是这个 useMemo。</p><ol><li><p><code>memo就是函数组件的PureComponent</code>,用来做性能优化的手段，useMemo也是，有点<code>类似于Vue的计算属性</code>，根据依赖的值计算出结果，当依赖的值不发生变化的时候，不触发状态改变</p></li><li><p>useMemo会<code>在渲染的时候执行，而不是渲染之后执行</code>，这是和useEffect的本质区别，所以不建议在useMemo里面写副作用相关的逻辑</p></li><li><p>useMemo的第二个参数</p><ul><li>不传数组，每次更新都会重新计算，任意一个state发生变化</li><li>空数组，只会计算一次</li><li>依赖对应值，只有当这个值发生变化的时候，才会重新计算</li></ul></li><li><p>避免每次渲染时都进行高开销的计算的优化策略。针对当前组件高开销的计算，具有记忆功能，<code>只有依赖属性发生变化，才会重新计算</code></p></li><li><p>当使用useContext的时候,只能用useMemo来执行优化</p></li></ol><h2 id="useeffect-和-uselayouteffect-是啥-怎么用" tabindex="-1">useEffect 和 useLayoutEffect 是啥，怎么用 <a class="header-anchor" href="#useeffect-和-uselayouteffect-是啥-怎么用" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6859602611901825037" target="_blank" rel="noreferrer">掘金 ———— 嗨，useLayoutEffect，醒醒</a></p><h3 id="useeffect" tabindex="-1">useEffect <a class="header-anchor" href="#useeffect" aria-hidden="true">#</a></h3><pre><code>\`\`\`jsx
// 组件加载完执行
useEffect(() =&gt; {
    //to do something
}, [])

// 每次更新/变化都会执行
useEffect(() =&gt; {
    //to do something
})

// 组件卸载
useEffect(() =&gt; {
    return () =&gt; {
        // 卸载前 to da something
    }
}, [])

// 监听单个变量变化
useEffect(() =&gt; {
    // to da something
}, [a])

// 监听多个变量变化
useEffect(() =&gt; {
    // to da something
}, [a，b, c])
\`\`\`
</code></pre><h3 id="uselayouteffect" tabindex="-1">useLayoutEffect <a class="header-anchor" href="#uselayouteffect" aria-hidden="true">#</a></h3><pre><code>useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的

\`useLayoutEffect 的函数签名与 useEffect 相同，但是它会在所有的 DOM 变更之后同步调用 effect\`

可以使用它来读取 DOM 布局并同步触发重新渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。

尽可能使用标准的 useEffect 以避免阻塞视觉更新。
</code></pre><h3 id="使用对比" tabindex="-1">使用对比 <a class="header-anchor" href="#使用对比" aria-hidden="true">#</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useEffect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useLayoutEffect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-dom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">randomNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setCount</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 点击 div， 页面会闪烁一下后变成随机数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 原因：点击后变成 0 后又被设置成随机数</span></span>
<span class="line"></span></code></pre></div><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useEffect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useLayoutEffect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-dom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">useLayoutEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">randomNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setCount</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 点击 div 后，页面不会闪烁，直接显示为随机数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 原因：点击后要等待 useLayoutEffect 内部状态修改完成后再渲染页面 </span></span>
<span class="line"></span></code></pre></div><blockquote><p>useLayoutEffect 相比 useEffect，通过同步执行状态更新可解决一些特性场景下的页面闪烁问题。 useEffect 可以满足大部分的场景，而且 useLayoutEffect 会阻塞渲染，因此谨慎使用</p></blockquote>`,21),e=[p];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{u as __pageData,A as default};
