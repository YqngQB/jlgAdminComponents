import{_ as s,c as n,o as a,d as p}from"./app.dfc935e2.js";const D=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[],"relativePath":"guide/installation.md","lastUpdated":1671079928000}'),l={name:"guide/installation.md"},o=p(`<h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5</h1><h2 id="npm-\u5B89\u88C5" tabindex="-1">npm \u5B89\u88C5</h2><p>\u63A8\u8350\u4F7F\u7528 pnpm \u5B89\u88C5\u3002</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">npm i jlg-admin-components -s</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">npm i jlg-admin-components -s</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>jlg-admin-components \u4F9D\u8D56 element-plus\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u5F15\u5165 element-plus\u3002</p></div><p><strong>\u5B8C\u6574\u5F15\u5165\u793A\u4F8B</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#8B949E;">// main.ts</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { createApp } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> App </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> ElementPlus </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> jlgAdminComponents </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;jlg-admin-components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;jlg-admin-components/dist/style.css&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">app</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">createApp</span><span style="color:#C9D1D9;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">app.</span><span style="color:#D2A8FF;">use</span><span style="color:#C9D1D9;">(ElementPlus).</span><span style="color:#D2A8FF;">use</span><span style="color:#C9D1D9;">(jlgAdminComponents)</span></span>
<span class="line"><span style="color:#C9D1D9;">app.</span><span style="color:#D2A8FF;">mount</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#app&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#6E7781;">// main.ts</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { createApp } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> App </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> ElementPlus </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> jlgAdminComponents </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;jlg-admin-components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;jlg-admin-components/dist/style.css&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">app</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">createApp</span><span style="color:#24292F;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(ElementPlus).</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(jlgAdminComponents)</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">mount</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;#app&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u4FBF\u5B8C\u6210\u4E86 jlg-admin-components \u7684\u5F15\u5165\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6837\u5F0F\u6587\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165\u3002</p><h3 id="vscode-\u652F\u6301" tabindex="-1">VsCode \u652F\u6301</h3><p>\u5982\u679C\u60A8\u4F7F\u7528 <code>Volar</code>\uFF0C\u8BF7\u5728 <code>tsconfig.json</code> \u4E2D\u901A\u8FC7 compilerOptions.type \u6307\u5B9A\u5168\u5C40\u7EC4\u4EF6\u7C7B\u578B\u3002</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">	</span><span style="color:#7EE787;">&quot;compilerOptions&quot;</span><span style="color:#C9D1D9;">: {</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#7EE787;">&quot;types&quot;</span><span style="color:#C9D1D9;">: [</span><span style="color:#A5D6FF;">&quot;jlg-admin-components/global&quot;</span><span style="color:#C9D1D9;">]</span></span>
<span class="line"><span style="color:#C9D1D9;">	}</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">	</span><span style="color:#116329;">&quot;compilerOptions&quot;</span><span style="color:#24292F;">: {</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#116329;">&quot;types&quot;</span><span style="color:#24292F;">: [</span><span style="color:#0A3069;">&quot;jlg-admin-components/global&quot;</span><span style="color:#24292F;">]</span></span>
<span class="line"><span style="color:#24292F;">	}</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7F3A\u9677\uFF1A\u4E8C\u6B21\u5C01\u88C5<code>ElementPlus</code>\u7EC4\u4EF6\u65F6\u4F7F\u7528\u4E86 <code>$attrs</code> \u5C5E\u6027\u900F\u4F20\uFF0C\u5BFC\u81F4<code>ElementPlus</code>\u7EC4\u4EF6\u90E8\u5206\u539F\u751F\u5C5E\u6027\u65E0\u6CD5\u83B7\u5F97<code>Volar</code>\u7684\u4EE3\u7801\u63D0\u793A\u3002</p></div><h3 id="webstorm-\u7C7B\u578B\u652F\u6301" tabindex="-1">WebStorm \u7C7B\u578B\u652F\u6301</h3><p>\u9488\u5BF9 WebStorm\uFF0C\u7EC4\u4EF6\u5E93\u63D0\u4F9B\u4E86\u5B8C\u5584\u7684\u7C7B\u578B\u63D0\u793A\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u914D\u7F6E\u3002</p><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1">\u5168\u5C40\u914D\u7F6E</h2><p><s>jlg-admin-components \u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728 main.ts \u4E2D\u8FDB\u884C\u914D\u7F6E\u3002</s></p>`,17),e=[o];function t(c,r,i,y,d,F){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};
