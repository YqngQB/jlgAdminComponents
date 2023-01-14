import{_ as s,c as n,o as a,d as l}from"./app.b117b098.js";const E=JSON.parse('{"title":"Modal","description":"","frontmatter":{},"headers":[],"relativePath":"components/modal.md","lastUpdated":1673684780000}'),p={name:"components/modal.md"},o=l(`<h1 id="modal" tabindex="-1">Modal</h1><p>\u57FA\u4E8E vxe-modal \u7EC4\u4EF6\u7684\u5C01\u88C5\uFF0C\u7528\u4E8E\u5F39\u51FA\u5BF9\u8BDD\u6846\u3002\u4FDD\u7559\u4E86 vxe-modal \u5E38\u7528\u5C5E\u6027\u4E0E\u65B9\u6CD5\uFF0C\u6269\u5C55\u4E86\u52A8\u6001\u52A0\u8F7D\u4E0E\u6700\u5C0F\u5316\u529F\u80FD\u3002</p><h2 id="\u5982\u4F55\u5F15\u5165" tabindex="-1">\u5982\u4F55\u5F15\u5165</h2><ul><li>\u5728 <code>app.vue</code> \u4E2D\u4F7F\u7528, \u5F15\u5165 <code>jlg-modals-container</code> \u7EC4\u4EF6\u3002</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">jlg-modals-container</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">ref</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;modalsContainer&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">lang</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;ts&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {JlgModalsContainer} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;jlg-admin-components&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">jlg-modals-container</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">ref</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;modalsContainer&quot;</span><span style="color:#24292F;"> /&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">lang</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;ts&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">setup</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> {JlgModalsContainer} </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;jlg-admin-components&#39;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5728\u9700\u8981\u5F39\u51FA\u5BF9\u8BDD\u6846\u7684vue\u6587\u4EF6\u4E2D\uFF0C\u5F15\u5165 <code>$jdm</code> \u65B9\u6CD5\uFF0C\u52A8\u6001\u521B\u5EFAmodal\u3002</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">el-button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;primary&quot;</span><span style="color:#C9D1D9;"> @</span><span style="color:#79C0FF;">click</span><span style="color:#C9D1D9;">=</span><span style="color:#C9D1D9;">&quot;</span><span style="color:#C9D1D9;">openModal</span><span style="color:#C9D1D9;">&quot;</span><span style="color:#C9D1D9;">&gt;\u6253\u5F00\u5F39\u7A97&lt;/</span><span style="color:#7EE787;">el-button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">lang</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;ts&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> ModalDemo </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;../xx/xx/xx/index.vue&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {$jdm} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;jlg-admin-components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">openModal</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">id</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  $jdm.</span><span style="color:#D2A8FF;">show</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">    component: ModalDemo,</span></span>
<span class="line"><span style="color:#C9D1D9;">    bind: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      title: </span><span style="color:#A5D6FF;">&#39;\u5F39\u7A97A&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      width: </span><span style="color:#A5D6FF;">&#39;40%&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#D2A8FF;">beforeCloseMethod</span><span style="color:#C9D1D9;">: () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">Promise</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">resolve</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">          ElMessageBox.</span><span style="color:#D2A8FF;">confirm</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;\u786E\u5B9A\u8981\u5173\u95ED\u5F39\u7A972\u5417\uFF1F&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;\u63D0\u793A&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">            confirmButtonText: </span><span style="color:#A5D6FF;">&#39;yes&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            cancelButtonText: </span><span style="color:#A5D6FF;">&#39;no&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            type: </span><span style="color:#A5D6FF;">&#39;warning&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">          })</span></span>
<span class="line"><span style="color:#C9D1D9;">              .</span><span style="color:#D2A8FF;">then</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#D2A8FF;">resolve</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">              })</span></span>
<span class="line"><span style="color:#C9D1D9;">              .</span><span style="color:#D2A8FF;">catch</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#D2A8FF;">resolve</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Error</span><span style="color:#C9D1D9;">())</span></span>
<span class="line"><span style="color:#C9D1D9;">              })</span></span>
<span class="line"><span style="color:#C9D1D9;">        })</span></span>
<span class="line"><span style="color:#C9D1D9;">      }</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">    on: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#D2A8FF;">customEvent</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">data</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(data)</span></span>
<span class="line"><span style="color:#C9D1D9;">      },</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#D2A8FF;">hide</span><span style="color:#C9D1D9;">: () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;hide&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">      },</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#D2A8FF;">close</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">data</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;close&#39;</span><span style="color:#C9D1D9;">, data)</span></span>
<span class="line"><span style="color:#C9D1D9;">      }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">  })</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">el-button</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">type</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;primary&quot;</span><span style="color:#24292F;"> @</span><span style="color:#0550AE;">click</span><span style="color:#24292F;">=</span><span style="color:#24292F;">&quot;</span><span style="color:#24292F;">openModal</span><span style="color:#24292F;">&quot;</span><span style="color:#24292F;">&gt;\u6253\u5F00\u5F39\u7A97&lt;/</span><span style="color:#116329;">el-button</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">lang</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;ts&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">setup</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> ModalDemo </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;../xx/xx/xx/index.vue&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> {$jdm} </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;jlg-admin-components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">openModal</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> (</span><span style="color:#953800;">id</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  $jdm.</span><span style="color:#8250DF;">show</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">    component: ModalDemo,</span></span>
<span class="line"><span style="color:#24292F;">    bind: {</span></span>
<span class="line"><span style="color:#24292F;">      title: </span><span style="color:#0A3069;">&#39;\u5F39\u7A97A&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      width: </span><span style="color:#0A3069;">&#39;40%&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">beforeCloseMethod</span><span style="color:#24292F;">: () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">((</span><span style="color:#953800;">resolve</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">          ElMessageBox.</span><span style="color:#8250DF;">confirm</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;\u786E\u5B9A\u8981\u5173\u95ED\u5F39\u7A972\u5417\uFF1F&#39;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&#39;\u63D0\u793A&#39;</span><span style="color:#24292F;">, {</span></span>
<span class="line"><span style="color:#24292F;">            confirmButtonText: </span><span style="color:#0A3069;">&#39;yes&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">            cancelButtonText: </span><span style="color:#0A3069;">&#39;no&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">            type: </span><span style="color:#0A3069;">&#39;warning&#39;</span></span>
<span class="line"><span style="color:#24292F;">          })</span></span>
<span class="line"><span style="color:#24292F;">              .</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">(() </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">                </span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">true</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">              })</span></span>
<span class="line"><span style="color:#24292F;">              .</span><span style="color:#8250DF;">catch</span><span style="color:#24292F;">(() </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">                </span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Error</span><span style="color:#24292F;">())</span></span>
<span class="line"><span style="color:#24292F;">              })</span></span>
<span class="line"><span style="color:#24292F;">        })</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">    on: {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">customEvent</span><span style="color:#24292F;">: (</span><span style="color:#953800;">data</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(data)</span></span>
<span class="line"><span style="color:#24292F;">      },</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">hide</span><span style="color:#24292F;">: () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;hide&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">      },</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">close</span><span style="color:#24292F;">: (</span><span style="color:#953800;">data</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;close&#39;</span><span style="color:#24292F;">, data)</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>name</code> - Modal \u7EC4\u4EF6\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BF7\u786E\u4FDD\u5168\u5C40\u552F\u4E00\uFF0C\u5982\u679C\u4E0D\u586B\u9ED8\u8BA4 <code>component</code>\u7EC4\u4EF6 name</li><li><code>component</code> - \u5BFC\u5165\u7684 Vue \u7EC4\u4EF6</li><li><code>on</code> -Modal\u7EC4\u4EF6 prop\u5C5E\u6027</li><li><code>bind</code> -Modal\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</li></ul><h3 id="on-\u5185\u7F6E\u5C5E\u6027\u8BF4\u660E" tabindex="-1">on \u5185\u7F6E\u5C5E\u6027\u8BF4\u660E</h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">UseModalOptionsPrivate</span><span style="color:#C9D1D9;">&lt;</span></span>
<span class="line"><span style="color:#C9D1D9;">	</span><span style="color:#FFA657;">ModalProps</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">extends</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ComponentProps</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u7A97\u53E3\u7684\u6807\u9898</span></span>
<span class="line"><span style="color:#8B949E;">		 * */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">title</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u7A97\u53E3\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#8B949E;">		 * */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">type</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u7A97\u53E3\u7684\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">width</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u7A97\u53E3\u7684\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">height</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u7A97\u53E3\u7684\u6700\u5C0F\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">minWidth</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u7A97\u53E3\u7684\u6700\u5C0F\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">minHeight</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u7A97\u53E3\u7684\u6700\u5927\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">maxWidth</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</span></span>
<span class="line"><span style="color:#8B949E;">		 * */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">mask</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u662F\u5426\u5141\u8BB8\u70B9\u51FB\u906E\u7F69\u5C42\u9690\u85CF\u7A97\u53E3</span></span>
<span class="line"><span style="color:#8B949E;">		 * */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">maskClosable</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u662F\u5426\u5141\u8BB8\u6309 Esc \u952E\u9690\u85CF\u7A97\u53E3</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">escClosable</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u662F\u5426\u9501\u4F4F\u9875\u9762\uFF0C\u4E0D\u5141\u8BB8\u7A97\u53E3\u4E4B\u5916\u7684\u4EFB\u4F55\u64CD\u4F5C,\u9ED8\u8BA4 false</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">lockView</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u662F\u5426\u6807\u663E\u793A\u6700\u5927\u5316\u4E0E\u8FD8\u539F\u6309\u94AE</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">showZoom</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u786E\u8BA4\u6309\u94AE\u7684\u6587\u672C</span></span>
<span class="line"><span style="color:#8B949E;">		 * */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">confirmButtonText</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#FFA657;">cancelButtonText</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u5728\u7A97\u53E3\u9690\u85CF\uFF08\u6700\u5C0F\u5316\uFF09\u4E4B\u524D\u6267\u884C\uFF0C\u53EF\u4EE5\u8FD4\u56DE Error \u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u5F02\u6B65</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#D2A8FF;">beforeHideMethod</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Error</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Promise</span><span style="color:#C9D1D9;">&lt;</span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u5728\u7A97\u53E3\u5173\u95ED\uFF08\u9500\u6BC1\uFF09\u4E4B\u524D\u6267\u884C\uFF0C\u53EF\u4EE5\u8FD4\u56DE Error \u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u5F02\u6B65</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#D2A8FF;">beforeCloseMethod</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Error</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Promise</span><span style="color:#C9D1D9;">&lt;</span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;">		 * \u5176\u4ED6\u53C2\u6570</span></span>
<span class="line"><span style="color:#8B949E;">		 */</span></span>
<span class="line"><span style="color:#C9D1D9;">		[</span><span style="color:#FFA657;">key</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">]</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span></span>
<span class="line"><span style="color:#C9D1D9;">	}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">UseModalOptionsPrivate</span><span style="color:#24292F;">&lt;</span></span>
<span class="line"><span style="color:#24292F;">	</span><span style="color:#953800;">ModalProps</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">extends</span><span style="color:#24292F;"> </span><span style="color:#953800;">ComponentProps</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u7A97\u53E3\u7684\u6807\u9898</span></span>
<span class="line"><span style="color:#6E7781;">		 * */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">title</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u7A97\u53E3\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#6E7781;">		 * */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">type</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u7A97\u53E3\u7684\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">width</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u7A97\u53E3\u7684\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">height</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u7A97\u53E3\u7684\u6700\u5C0F\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">minWidth</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u7A97\u53E3\u7684\u6700\u5C0F\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">minHeight</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u7A97\u53E3\u7684\u6700\u5927\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">maxWidth</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</span></span>
<span class="line"><span style="color:#6E7781;">		 * */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">mask</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">boolean</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u662F\u5426\u5141\u8BB8\u70B9\u51FB\u906E\u7F69\u5C42\u9690\u85CF\u7A97\u53E3</span></span>
<span class="line"><span style="color:#6E7781;">		 * */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">maskClosable</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">boolean</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u662F\u5426\u5141\u8BB8\u6309 Esc \u952E\u9690\u85CF\u7A97\u53E3</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">escClosable</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">boolean</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u662F\u5426\u9501\u4F4F\u9875\u9762\uFF0C\u4E0D\u5141\u8BB8\u7A97\u53E3\u4E4B\u5916\u7684\u4EFB\u4F55\u64CD\u4F5C,\u9ED8\u8BA4 false</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">lockView</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">boolean</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u662F\u5426\u6807\u663E\u793A\u6700\u5927\u5316\u4E0E\u8FD8\u539F\u6309\u94AE</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">showZoom</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">boolean</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u786E\u8BA4\u6309\u94AE\u7684\u6587\u672C</span></span>
<span class="line"><span style="color:#6E7781;">		 * */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">confirmButtonText</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#953800;">cancelButtonText</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u5728\u7A97\u53E3\u9690\u85CF\uFF08\u6700\u5C0F\u5316\uFF09\u4E4B\u524D\u6267\u884C\uFF0C\u53EF\u4EE5\u8FD4\u56DE Error \u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u5F02\u6B65</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#8250DF;">beforeHideMethod</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> </span><span style="color:#953800;">Error</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#953800;">Promise</span><span style="color:#24292F;">&lt;</span><span style="color:#0550AE;">any</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u5728\u7A97\u53E3\u5173\u95ED\uFF08\u9500\u6BC1\uFF09\u4E4B\u524D\u6267\u884C\uFF0C\u53EF\u4EE5\u8FD4\u56DE Error \u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u5F02\u6B65</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#8250DF;">beforeCloseMethod</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> </span><span style="color:#953800;">Error</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#953800;">Promise</span><span style="color:#24292F;">&lt;</span><span style="color:#0550AE;">any</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">		</span><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;">		 * \u5176\u4ED6\u53C2\u6570</span></span>
<span class="line"><span style="color:#6E7781;">		 */</span></span>
<span class="line"><span style="color:#24292F;">		[</span><span style="color:#953800;">key</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">]</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">any</span></span>
<span class="line"><span style="color:#24292F;">	}</span></span>
<span class="line"></span></code></pre></div><h3 id="bind-\u5185\u7F6E\u9009\u9879" tabindex="-1">bind \u5185\u7F6E\u9009\u9879</h3><h4 id="show" tabindex="-1"><code>@show</code></h4><p>\u5728Modal\u53D8\u4E3A\u53EF\u89C1\u6216\u5F00\u59CB\u8F6C\u6362\u540E\u53D1\u51FA.</p><hr><h4 id="submit" tabindex="-1"><code>@submit</code></h4><p>\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u89E6\u53D1</p><hr><h4 id="close" tabindex="-1"><code>@close</code></h4><p>\u5728Modal\u5173\u95ED\u65F6\u53D1\u51FA</p><hr><h4 id="hide" tabindex="-1"><code>@hide</code></h4><p>\u5728Modal\u6700\u5C0F\u5316\u65F6\u53D1\u51FA</p><hr>`,23),t=[o];function e(c,r,y,F,D,i){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{E as __pageData,d as default};
