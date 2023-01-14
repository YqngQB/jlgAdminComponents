import{V as A,_ as P,c as q,a as x,w as R,d as S,b as l,r as w,o as V,e as s}from"./app.b117b098.js";const{defineComponent:N}=A,T=N({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:r,resolveComponent:n,withCtx:e,createVNode:o,createElementVNode:g,toDisplayString:h,Fragment:C,openBlock:u,createElementBlock:f}=A,B=g("p",null,"\u5F53\u524D\u8868\u5355\u503C\uFF1A",-1);function c(a,d){const t=n("el-radio-button"),F=n("el-radio-group"),y=n("jlg-input"),D=n("jlg-date-picker"),i=n("jlg-number-input"),_=n("el-switch"),v=n("jlg-form-item"),k=n("el-button"),m=n("jlg-form");return u(),f(C,null,[o(F,{modelValue:a.labelPosition,"onUpdate:modelValue":d[0]||(d[0]=E=>a.labelPosition=E),label:"label position"},{default:e(()=>[o(t,{label:"left"},{default:e(()=>[r("Left")]),_:1}),o(t,{label:"right"},{default:e(()=>[r("Right")]),_:1}),o(t,{label:"top"},{default:e(()=>[r("Top")]),_:1})]),_:1},8,["modelValue"]),B,g("pre",null,h(a.formData),1),o(m,{ref:"formRef",model:a.formData,"label-position":a.labelPosition,"label-width":"120px"},{default:e(()=>[o(y,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name",rules:"required"}),o(D,{label:"\u6D3B\u52A8\u65F6\u95F4",prop:"date",placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u65F6\u95F4"}),o(i,{label:"\u53C2\u52A0\u4EBA\u6570",prop:"number"}),o(v,{label:"\u7ACB\u5373\u51FA\u53D1",prop:"delivery"},{default:e(()=>[o(_,{modelValue:a.formData.delivery,"onUpdate:modelValue":d[1]||(d[1]=E=>a.formData.delivery=E)},null,8,["modelValue"])]),_:1}),o(v,null,{default:e(()=>[o(k,{type:"primary",onClick:a.handleSubmit},{default:e(()=>[r("\u521B\u5EFA")]),_:1},8,["onClick"]),o(k,{onClick:a.handleResetFields},{default:e(()=>[r("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","label-position"])],64)}const{defineComponent:j}=A,{ref:p}=A;return{render:c,...j({setup(a,{expose:d}){d();const t=p("right");let F=p(null),y=p({name:"",date:"",number:null,delivery:!1});const _={labelPosition:t,formRef:F,formData:y,handleSubmit:()=>{F.value.submit("\u8868\u5355\u6821\u9A8C\u5931\u8D25").then(v=>{console.log("formData",v),alert("\u8868\u5355\u6821\u9A8C\u6210\u529F")})},handleResetFields:()=>{F.value.epRef.resetFields()},ref:p};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}})}}(),"render-demo-1":function(){const{resolveComponent:r,createVNode:n,createTextVNode:e,withCtx:o,openBlock:g,createBlock:h}=A;function C(c,j){const p=r("jlg-input"),b=r("el-button"),a=r("jlg-form-item"),d=r("jlg-form");return g(),h(d,{ref:"formRef",model:c.formData,"label-width":"120px"},{default:o(()=>[n(p,{label:"\u5BC6\u7801",prop:"pass",type:"password",rules:"required"}),n(p,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"checkPass",type:"password",rules:["required",{validator:c.checkPass,trigger:"blur"}]},null,8,["rules"]),n(a,null,{default:o(()=>[n(b,{type:"primary",onClick:c.handleSubmit},{default:o(()=>[e("\u63D0\u4EA4")]),_:1},8,["onClick"]),n(b,{onClick:c.handleResetFields},{default:o(()=>[e("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])}const{defineComponent:u}=A,{ref:f}=A;return{render:C,...u({setup(c,{expose:j}){j();let p=f(null),b=f({pass:"",checkPass:""});const F={formRef:p,formData:b,checkPass:(y,D,i)=>{D!==b.pass?i(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):i()},handleSubmit:()=>{p.value.submit("\u8868\u5355\u6821\u9A8C\u5931\u8D25").then(y=>{console.log("formData",y),alert("\u8868\u5355\u6821\u9A8C\u6210\u529F")})},handleResetFields:()=>{p.value.epRef.resetFields()},ref:f};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}})}}(),"render-demo-2":function(){const{toDisplayString:r,createElementVNode:n,resolveComponent:e,createVNode:o,renderList:g,Fragment:h,openBlock:C,createElementBlock:u,createBlock:f,createTextVNode:B,withCtx:c}=A;function j(t,F){const y=e("jlg-input"),D=e("jlg-date-picker"),i=e("el-button"),_=e("jlg-form-item"),v=e("jlg-form");return C(),u(h,null,[n("pre",null,r(t.formData),1),o(v,{ref:"formRef",model:t.formData,"label-width":"120px"},{default:c(()=>[o(y,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name",rules:"required"}),o(D,{label:"\u6D3B\u52A8\u65F6\u95F4",prop:"date",placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u65F6\u95F4"}),(C(!0),u(h,null,g(t.formData.items,(k,m)=>(C(),u(h,{key:m},[(C(),f(y,{key:k.prop+m,label:k.label,prop:"items."+m+".value",rules:k.rules},null,8,["label","prop","rules"])),o(i,{onClick:E=>t.removeRule(m),style:{"margin-bottom":"18px","margin-left":"120px"}},{default:c(()=>[B(" \u5220\u9664\u6D3B\u52A8\u5730\u70B9"+r(m),1)]),_:2},1032,["onClick"])],64))),128)),o(_,null,{default:c(()=>[o(i,{type:"primary",onClick:t.handleSubmit},{default:c(()=>[B("\u521B\u5EFA")]),_:1},8,["onClick"]),o(i,{onClick:t.handleResetFields},{default:c(()=>[B("\u91CD\u7F6E")]),_:1},8,["onClick"]),o(i,{onClick:t.addRule},{default:c(()=>[B("\u6DFB\u52A0\u6D3B\u52A8\u5730\u70B9")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])],64)}const{defineComponent:p}=A,{ref:b,reactive:a}=A;return{render:j,...p({setup(t,{expose:F}){F();let y=b(null),D=a({name:"",date:"",items:[{label:"\u6D3B\u52A8\u5730\u70B9",value:"",rules:"required"}]});const m={formRef:y,formData:D,addRule:()=>{let E=Math.random()>.5;D.items.push({label:"\u6D3B\u52A8\u5730\u70B9"+D.items.length,value:"",rules:E?"required":null})},removeRule:E=>{D.items.splice(E,1)},handleSubmit:()=>{y.value.submit().then(E=>{console.log("formData",E)})},handleResetFields:()=>{y.value.epRef.resetFields()},ref:b,reactive:a};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}})}}()}}),Q=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","lastUpdated":1673684780000}'),L=S('<h1 id="form" tabindex="-1">Form</h1><p>\u57FA\u4E8E el-form\uFF0C\u5E76\u5BF9\u5176\u4E00\u4E9B\u5E38\u7528\u7684\u8868\u5355\u7EC4\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u3002</p><p><strong>\u5C01\u88C5\u539F\u56E0</strong>\uFF1A\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u8868\u5355\u65E0\u5904\u4E0D\u5728\uFF0C\u4E2A\u4EBA \u611F\u89C9 el-form \u5728\u5904\u7406 <code>\u590D\u6742\u8868\u5355</code>\u65F6\u7684\u4F7F\u7528\u4F53\u9A8C\u5E76\u4E0D\u662F\u5F88\u53CB\u597D\uFF0C\u9700\u8981\u5199\u5F88\u591A\u91CD\u590D\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u5BF9\u5176\u8FDB\u884C\u4E86\u4E8C\u6B21\u5C01\u88C5\uFF0C\u4F7F\u5176\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u7B80\u5355\u3002</p><p><strong>\u5C01\u88C5\u76EE\u7684</strong>\uFF1A \u4F7F\u5176\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u7B80\u5355\uFF0C\u7B80\u5316\u8868\u5355\u6821\u9A8C\uFF0C\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6781\u5EA6\u7B80\u5355\u7684\u9A8C\u8BC1\u5668\u5F00\u7BB1\u5373\u7528\uFF0C\u53EF\u4EE5\u5904\u7406 80% \u7684\u7528\u4F8B\u3002\u9A8C\u8BC1\u89C4\u5219\u548C\u9A8C\u8BC1\u6D88\u606F\u90FD\u662F\u7B80\u5355\u7684 <code>rules</code></p></div><h2 id="\u5178\u578B\u8868\u5355" tabindex="-1">\u5178\u578B\u8868\u5355</h2><p>\u6700\u57FA\u7840\u7684\u8868\u5355\u5305\u62EC\u5404\u79CD\u8F93\u5165\u8868\u5355\u9879\uFF0C\u6BD4\u5982<code>input</code>\u3001<code>select</code>\u3001<code>radio</code>\u3001<code>checkbox</code>\u7B49\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u76EE\u524D\u53EA\u5C01\u88C5\u4E86 jlg-form\u3001jlg-form-item\u3001jlg-input\u3001jlg-select\u3001jlg-date-picker\u3001jlg-autocomplete \u7B49\u7EC4\u4EF6,\u5BF9\u4E8E\u5176\u4ED6\u8868\u5355\u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528 <code>jlg-form-item</code> \u7EC4\u4EF6\u5305\u88F9</p></div>',8),$=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"<"),l("span",{style:{color:"#7EE787"}},"template"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	<"),l("span",{style:{color:"#7EE787"}},"el-radio-group"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"v-model"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"labelPosition"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"label position"'),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"el-radio-button"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"left"'),l("span",{style:{color:"#C9D1D9"}},">Left</"),l("span",{style:{color:"#7EE787"}},"el-radio-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"el-radio-button"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"right"'),l("span",{style:{color:"#C9D1D9"}},">Right</"),l("span",{style:{color:"#7EE787"}},"el-radio-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"el-radio-button"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"top"'),l("span",{style:{color:"#C9D1D9"}},">Top</"),l("span",{style:{color:"#7EE787"}},"el-radio-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	</"),l("span",{style:{color:"#7EE787"}},"el-radio-group"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	<"),l("span",{style:{color:"#7EE787"}},"p"),l("span",{style:{color:"#C9D1D9"}},">\u5F53\u524D\u8868\u5355\u503C\uFF1A</"),l("span",{style:{color:"#7EE787"}},"p"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	<"),l("span",{style:{color:"#7EE787"}},"pre"),l("span",{style:{color:"#C9D1D9"}},">{{ formData }}</"),l("span",{style:{color:"#7EE787"}},"pre"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	<"),l("span",{style:{color:"#7EE787"}},"jlg-form")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		"),l("span",{style:{color:"#79C0FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"formRef"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		:"),l("span",{style:{color:"#79C0FF"}},"model"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"formData"),l("span",{style:{color:"#C9D1D9"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		:"),l("span",{style:{color:"#79C0FF"}},"label-position"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"labelPosition"),l("span",{style:{color:"#C9D1D9"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		"),l("span",{style:{color:"#79C0FF"}},"label-width"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"120px"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-input"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u6D3B\u52A8\u540D\u79F0"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"name"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"rules"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"required"'),l("span",{style:{color:"#C9D1D9"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-date-picker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u6D3B\u52A8\u65F6\u95F4"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"placeholder"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u8BF7\u9009\u62E9\u6D3B\u52A8\u65F6\u95F4"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-number-input"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u53C2\u52A0\u4EBA\u6570"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"number"'),l("span",{style:{color:"#C9D1D9"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-form-item"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u7ACB\u5373\u51FA\u53D1"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"delivery"'),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-switch"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"v-model"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"formData.delivery"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		</"),l("span",{style:{color:"#7EE787"}},"jlg-form-item"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-form-item"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"type"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"primary"'),l("span",{style:{color:"#C9D1D9"}}," @"),l("span",{style:{color:"#79C0FF"}},"click"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"handleSubmit"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},">\u521B\u5EFA</"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}}," @"),l("span",{style:{color:"#79C0FF"}},"click"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"handleResetFields"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},">\u91CD\u7F6E</"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		</"),l("span",{style:{color:"#7EE787"}},"jlg-form-item"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	</"),l("span",{style:{color:"#7EE787"}},"jlg-form"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"</"),l("span",{style:{color:"#7EE787"}},"template"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"<"),l("span",{style:{color:"#7EE787"}},"script"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"lang"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"ts"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"setup"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"import"),l("span",{style:{color:"#C9D1D9"}}," { ref } "),l("span",{style:{color:"#FF7B72"}},"from"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#A5D6FF"}},"'vue'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"const"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"labelPosition"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'right'"),l("span",{style:{color:"#C9D1D9"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," formRef "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#79C0FF"}},"null"),l("span",{style:{color:"#C9D1D9"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," formData "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	name: "),l("span",{style:{color:"#A5D6FF"}},"''"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	date: "),l("span",{style:{color:"#A5D6FF"}},"''"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	number: "),l("span",{style:{color:"#79C0FF"}},"null"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	delivery: "),l("span",{style:{color:"#79C0FF"}},"false")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"const"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"handleSubmit"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," () "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	"),l("span",{style:{color:"#8B949E"}},"/**")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8B949E"}},"	 * \u8868\u5355\u5FEB\u901F\u6821\u9A8C\u4E0E\u63D0\u4EA4")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8B949E"}},"	 * "),l("span",{style:{color:"#FF7B72"}},"@param"),l("span",{style:{color:"#8B949E"}}," "),l("span",{style:{color:"#C9D1D9"}},"validateErrorText"),l("span",{style:{color:"#8B949E"}}," \u6821\u9A8C\u5931\u8D25\u65F6\u7684\u63D0\u793A\u6587\u672C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8B949E"}},"	 */")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	formRef.value."),l("span",{style:{color:"#D2A8FF"}},"submit"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'\u8868\u5355\u6821\u9A8C\u5931\u8D25'"),l("span",{style:{color:"#C9D1D9"}},")."),l("span",{style:{color:"#D2A8FF"}},"then"),l("span",{style:{color:"#C9D1D9"}},"(("),l("span",{style:{color:"#FFA657"}},"formData"),l("span",{style:{color:"#C9D1D9"}},") "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		console."),l("span",{style:{color:"#D2A8FF"}},"log"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'formData'"),l("span",{style:{color:"#C9D1D9"}},", formData)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		"),l("span",{style:{color:"#D2A8FF"}},"alert"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'\u8868\u5355\u6821\u9A8C\u6210\u529F'"),l("span",{style:{color:"#C9D1D9"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	})")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"const"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"handleResetFields"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," () "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	formRef.value.epRef."),l("span",{style:{color:"#D2A8FF"}},"resetFields"),l("span",{style:{color:"#C9D1D9"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"</"),l("span",{style:{color:"#7EE787"}},"script"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	<"),l("span",{style:{color:"#116329"}},"el-radio-group"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"labelPosition"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"label position"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"el-radio-button"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"left"'),l("span",{style:{color:"#24292F"}},">Left</"),l("span",{style:{color:"#116329"}},"el-radio-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"el-radio-button"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"right"'),l("span",{style:{color:"#24292F"}},">Right</"),l("span",{style:{color:"#116329"}},"el-radio-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"el-radio-button"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"top"'),l("span",{style:{color:"#24292F"}},">Top</"),l("span",{style:{color:"#116329"}},"el-radio-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	</"),l("span",{style:{color:"#116329"}},"el-radio-group"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	<"),l("span",{style:{color:"#116329"}},"p"),l("span",{style:{color:"#24292F"}},">\u5F53\u524D\u8868\u5355\u503C\uFF1A</"),l("span",{style:{color:"#116329"}},"p"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	<"),l("span",{style:{color:"#116329"}},"pre"),l("span",{style:{color:"#24292F"}},">{{ formData }}</"),l("span",{style:{color:"#116329"}},"pre"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	<"),l("span",{style:{color:"#116329"}},"jlg-form")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		"),l("span",{style:{color:"#0550AE"}},"ref"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"formRef"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		:"),l("span",{style:{color:"#0550AE"}},"model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"formData"),l("span",{style:{color:"#24292F"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		:"),l("span",{style:{color:"#0550AE"}},"label-position"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"labelPosition"),l("span",{style:{color:"#24292F"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		"),l("span",{style:{color:"#0550AE"}},"label-width"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"120px"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-input"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u6D3B\u52A8\u540D\u79F0"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"name"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"rules"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"required"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-date-picker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u6D3B\u52A8\u65F6\u95F4"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"placeholder"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u8BF7\u9009\u62E9\u6D3B\u52A8\u65F6\u95F4"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-number-input"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u53C2\u52A0\u4EBA\u6570"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"number"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-form-item"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u7ACB\u5373\u51FA\u53D1"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"delivery"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-switch"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"formData.delivery"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		</"),l("span",{style:{color:"#116329"}},"jlg-form-item"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-form-item"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"type"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"primary"'),l("span",{style:{color:"#24292F"}}," @"),l("span",{style:{color:"#0550AE"}},"click"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"handleSubmit"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},">\u521B\u5EFA</"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}}," @"),l("span",{style:{color:"#0550AE"}},"click"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"handleResetFields"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},">\u91CD\u7F6E</"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		</"),l("span",{style:{color:"#116329"}},"jlg-form-item"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	</"),l("span",{style:{color:"#116329"}},"jlg-form"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"lang"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"ts"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"setup"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"import"),l("span",{style:{color:"#24292F"}}," { ref } "),l("span",{style:{color:"#CF222E"}},"from"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'vue'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"labelPosition"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'right'"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," formRef "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"null"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," formData "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	name: "),l("span",{style:{color:"#0A3069"}},"''"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	date: "),l("span",{style:{color:"#0A3069"}},"''"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	number: "),l("span",{style:{color:"#0550AE"}},"null"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	delivery: "),l("span",{style:{color:"#0550AE"}},"false")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"handleSubmit"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," () "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	"),l("span",{style:{color:"#6E7781"}},"/**")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E7781"}},"	 * \u8868\u5355\u5FEB\u901F\u6821\u9A8C\u4E0E\u63D0\u4EA4")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E7781"}},"	 * "),l("span",{style:{color:"#CF222E"}},"@param"),l("span",{style:{color:"#6E7781"}}," "),l("span",{style:{color:"#24292F"}},"validateErrorText"),l("span",{style:{color:"#6E7781"}}," \u6821\u9A8C\u5931\u8D25\u65F6\u7684\u63D0\u793A\u6587\u672C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E7781"}},"	 */")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	formRef.value."),l("span",{style:{color:"#8250DF"}},"submit"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'\u8868\u5355\u6821\u9A8C\u5931\u8D25'"),l("span",{style:{color:"#24292F"}},")."),l("span",{style:{color:"#8250DF"}},"then"),l("span",{style:{color:"#24292F"}},"(("),l("span",{style:{color:"#953800"}},"formData"),l("span",{style:{color:"#24292F"}},") "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		console."),l("span",{style:{color:"#8250DF"}},"log"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'formData'"),l("span",{style:{color:"#24292F"}},", formData)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		"),l("span",{style:{color:"#8250DF"}},"alert"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'\u8868\u5355\u6821\u9A8C\u6210\u529F'"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	})")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"handleResetFields"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," () "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	formRef.value.epRef."),l("span",{style:{color:"#8250DF"}},"resetFields"),l("span",{style:{color:"#24292F"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),M=l("h2",{id:"\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219",-1),O=l("p",null,"\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\u6765\u5B8C\u6210\u5BC6\u7801\u7684\u4E8C\u6B21\u9A8C\u8BC1\u3002",-1),U=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"<"),l("span",{style:{color:"#7EE787"}},"template"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	<"),l("span",{style:{color:"#7EE787"}},"jlg-form"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"formRef"'),l("span",{style:{color:"#C9D1D9"}}," :"),l("span",{style:{color:"#79C0FF"}},"model"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"formData"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label-width"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"120px"'),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-input"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u5BC6\u7801"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"pass"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"type"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"password"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"rules"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"required"'),l("span",{style:{color:"#C9D1D9"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-input")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u786E\u8BA4\u5BC6\u7801"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"checkPass"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"type"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"password"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			:"),l("span",{style:{color:"#79C0FF"}},"rules"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"["),l("span",{style:{color:"#A5D6FF"}},"'required'"),l("span",{style:{color:"#C9D1D9"}},", { validator: checkPass, trigger: "),l("span",{style:{color:"#A5D6FF"}},"'blur'"),l("span",{style:{color:"#C9D1D9"}}," }]"),l("span",{style:{color:"#C9D1D9"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-form-item"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"type"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"primary"'),l("span",{style:{color:"#C9D1D9"}}," @"),l("span",{style:{color:"#79C0FF"}},"click"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"handleSubmit"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},">\u63D0\u4EA4</"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}}," @"),l("span",{style:{color:"#79C0FF"}},"click"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"handleResetFields"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},">\u91CD\u7F6E</"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		</"),l("span",{style:{color:"#7EE787"}},"jlg-form-item"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	</"),l("span",{style:{color:"#7EE787"}},"jlg-form"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"</"),l("span",{style:{color:"#7EE787"}},"template"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"<"),l("span",{style:{color:"#7EE787"}},"script"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"lang"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"ts"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"setup"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"import"),l("span",{style:{color:"#C9D1D9"}}," { ref } "),l("span",{style:{color:"#FF7B72"}},"from"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#A5D6FF"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," formRef "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#79C0FF"}},"null"),l("span",{style:{color:"#C9D1D9"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," formData "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	pass: "),l("span",{style:{color:"#A5D6FF"}},"''"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	checkPass: "),l("span",{style:{color:"#A5D6FF"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"const"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"checkPass"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," ("),l("span",{style:{color:"#FFA657"}},"rule"),l("span",{style:{color:"#C9D1D9"}},", "),l("span",{style:{color:"#FFA657"}},"value"),l("span",{style:{color:"#C9D1D9"}},", "),l("span",{style:{color:"#FFA657"}},"callback"),l("span",{style:{color:"#C9D1D9"}},") "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	"),l("span",{style:{color:"#FF7B72"}},"if"),l("span",{style:{color:"#C9D1D9"}}," (value "),l("span",{style:{color:"#FF7B72"}},"!=="),l("span",{style:{color:"#C9D1D9"}}," formData.pass) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		"),l("span",{style:{color:"#D2A8FF"}},"callback"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#FF7B72"}},"new"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"Error"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!'"),l("span",{style:{color:"#C9D1D9"}},"))")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	} "),l("span",{style:{color:"#FF7B72"}},"else"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		"),l("span",{style:{color:"#D2A8FF"}},"callback"),l("span",{style:{color:"#C9D1D9"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"const"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"handleSubmit"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," () "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	"),l("span",{style:{color:"#8B949E"}},"/**")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8B949E"}},"	 * \u8868\u5355\u5FEB\u901F\u6821\u9A8C\u4E0E\u63D0\u4EA4")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8B949E"}},"	 * "),l("span",{style:{color:"#FF7B72"}},"@param"),l("span",{style:{color:"#8B949E"}}," "),l("span",{style:{color:"#C9D1D9"}},"validateErrorText"),l("span",{style:{color:"#8B949E"}}," \u6821\u9A8C\u5931\u8D25\u65F6\u7684\u63D0\u793A\u6587\u672C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8B949E"}},"	 */")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	formRef.value."),l("span",{style:{color:"#D2A8FF"}},"submit"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'\u8868\u5355\u6821\u9A8C\u5931\u8D25'"),l("span",{style:{color:"#C9D1D9"}},")."),l("span",{style:{color:"#D2A8FF"}},"then"),l("span",{style:{color:"#C9D1D9"}},"(("),l("span",{style:{color:"#FFA657"}},"formData"),l("span",{style:{color:"#C9D1D9"}},") "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		console."),l("span",{style:{color:"#D2A8FF"}},"log"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'formData'"),l("span",{style:{color:"#C9D1D9"}},", formData)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		"),l("span",{style:{color:"#D2A8FF"}},"alert"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'\u8868\u5355\u6821\u9A8C\u6210\u529F'"),l("span",{style:{color:"#C9D1D9"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	})")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"const"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"handleResetFields"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," () "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	formRef.value.epRef."),l("span",{style:{color:"#D2A8FF"}},"resetFields"),l("span",{style:{color:"#C9D1D9"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"</"),l("span",{style:{color:"#7EE787"}},"script"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	<"),l("span",{style:{color:"#116329"}},"jlg-form"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"ref"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"formRef"'),l("span",{style:{color:"#24292F"}}," :"),l("span",{style:{color:"#0550AE"}},"model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"formData"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label-width"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"120px"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-input"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u5BC6\u7801"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"pass"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"type"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"password"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"rules"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"required"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-input")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u786E\u8BA4\u5BC6\u7801"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"checkPass"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"type"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"password"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			:"),l("span",{style:{color:"#0550AE"}},"rules"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"["),l("span",{style:{color:"#0A3069"}},"'required'"),l("span",{style:{color:"#24292F"}},", { validator: checkPass, trigger: "),l("span",{style:{color:"#0A3069"}},"'blur'"),l("span",{style:{color:"#24292F"}}," }]"),l("span",{style:{color:"#24292F"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-form-item"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"type"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"primary"'),l("span",{style:{color:"#24292F"}}," @"),l("span",{style:{color:"#0550AE"}},"click"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"handleSubmit"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},">\u63D0\u4EA4</"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}}," @"),l("span",{style:{color:"#0550AE"}},"click"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"handleResetFields"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},">\u91CD\u7F6E</"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		</"),l("span",{style:{color:"#116329"}},"jlg-form-item"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	</"),l("span",{style:{color:"#116329"}},"jlg-form"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"lang"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"ts"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"setup"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"import"),l("span",{style:{color:"#24292F"}}," { ref } "),l("span",{style:{color:"#CF222E"}},"from"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," formRef "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"null"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," formData "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	pass: "),l("span",{style:{color:"#0A3069"}},"''"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	checkPass: "),l("span",{style:{color:"#0A3069"}},"''")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"checkPass"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," ("),l("span",{style:{color:"#953800"}},"rule"),l("span",{style:{color:"#24292F"}},", "),l("span",{style:{color:"#953800"}},"value"),l("span",{style:{color:"#24292F"}},", "),l("span",{style:{color:"#953800"}},"callback"),l("span",{style:{color:"#24292F"}},") "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	"),l("span",{style:{color:"#CF222E"}},"if"),l("span",{style:{color:"#24292F"}}," (value "),l("span",{style:{color:"#CF222E"}},"!=="),l("span",{style:{color:"#24292F"}}," formData.pass) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		"),l("span",{style:{color:"#8250DF"}},"callback"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#CF222E"}},"new"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"Error"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!'"),l("span",{style:{color:"#24292F"}},"))")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	} "),l("span",{style:{color:"#CF222E"}},"else"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		"),l("span",{style:{color:"#8250DF"}},"callback"),l("span",{style:{color:"#24292F"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"handleSubmit"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," () "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	"),l("span",{style:{color:"#6E7781"}},"/**")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E7781"}},"	 * \u8868\u5355\u5FEB\u901F\u6821\u9A8C\u4E0E\u63D0\u4EA4")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E7781"}},"	 * "),l("span",{style:{color:"#CF222E"}},"@param"),l("span",{style:{color:"#6E7781"}}," "),l("span",{style:{color:"#24292F"}},"validateErrorText"),l("span",{style:{color:"#6E7781"}}," \u6821\u9A8C\u5931\u8D25\u65F6\u7684\u63D0\u793A\u6587\u672C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E7781"}},"	 */")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	formRef.value."),l("span",{style:{color:"#8250DF"}},"submit"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'\u8868\u5355\u6821\u9A8C\u5931\u8D25'"),l("span",{style:{color:"#24292F"}},")."),l("span",{style:{color:"#8250DF"}},"then"),l("span",{style:{color:"#24292F"}},"(("),l("span",{style:{color:"#953800"}},"formData"),l("span",{style:{color:"#24292F"}},") "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		console."),l("span",{style:{color:"#8250DF"}},"log"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'formData'"),l("span",{style:{color:"#24292F"}},", formData)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		"),l("span",{style:{color:"#8250DF"}},"alert"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'\u8868\u5355\u6821\u9A8C\u6210\u529F'"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	})")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"handleResetFields"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," () "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	formRef.value.epRef."),l("span",{style:{color:"#8250DF"}},"resetFields"),l("span",{style:{color:"#24292F"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),z=l("h2",{id:"\u6DFB\u52A0-\u5220\u9664\u8868\u5355\u9879",tabindex:"-1"},"\u6DFB\u52A0/\u5220\u9664\u8868\u5355\u9879",-1),I=l("div",null,"\u9664\u4E86\u4E00\u6B21\u901A\u8FC7\u8868\u5355\u7EC4\u4EF6\u4E0A\u7684\u6240\u6709\u9A8C\u8BC1\u89C4\u5219\u5916. \u60A8\u4E5F\u53EF\u4EE5\u52A8\u6001\u5730\u901A\u8FC7\u9A8C\u8BC1\u89C4\u5219\u6216\u5220\u9664\u5355\u4E2A\u8868\u5355\u5B57\u6BB5\u7684\u89C4\u5219\u3002",-1),J=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"<"),l("span",{style:{color:"#7EE787"}},"template"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	<"),l("span",{style:{color:"#7EE787"}},"pre"),l("span",{style:{color:"#C9D1D9"}},">{{ formData }}</"),l("span",{style:{color:"#7EE787"}},"pre"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	<"),l("span",{style:{color:"#7EE787"}},"jlg-form"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"formRef"'),l("span",{style:{color:"#C9D1D9"}}," :"),l("span",{style:{color:"#79C0FF"}},"model"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"formData"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label-width"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"120px"'),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-input"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u6D3B\u52A8\u540D\u79F0"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"name"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"rules"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"required"'),l("span",{style:{color:"#C9D1D9"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-date-picker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u6D3B\u52A8\u65F6\u95F4"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			"),l("span",{style:{color:"#79C0FF"}},"placeholder"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"\u8BF7\u9009\u62E9\u6D3B\u52A8\u65F6\u95F4"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"template"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"v-for"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"(item, index) "),l("span",{style:{color:"#FF7B72"}},"in"),l("span",{style:{color:"#C9D1D9"}}," formData.items"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}}," :"),l("span",{style:{color:"#79C0FF"}},"key"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"index"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"jlg-input")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"				:"),l("span",{style:{color:"#79C0FF"}},"key"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"item.prop "),l("span",{style:{color:"#FF7B72"}},"+"),l("span",{style:{color:"#C9D1D9"}}," index"),l("span",{style:{color:"#C9D1D9"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"				:"),l("span",{style:{color:"#79C0FF"}},"label"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"item.label"),l("span",{style:{color:"#C9D1D9"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"                :"),l("span",{style:{color:"#79C0FF"}},"prop"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#A5D6FF"}},"'items.'"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"+"),l("span",{style:{color:"#C9D1D9"}}," index "),l("span",{style:{color:"#FF7B72"}},"+"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#A5D6FF"}},"'.value'"),l("span",{style:{color:"#C9D1D9"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"				:"),l("span",{style:{color:"#79C0FF"}},"rules"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"item.rules"),l("span",{style:{color:"#C9D1D9"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-button")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"				@"),l("span",{style:{color:"#79C0FF"}},"click"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#D2A8FF"}},"removeRule"),l("span",{style:{color:"#C9D1D9"}},"(index)"),l("span",{style:{color:"#C9D1D9"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"				"),l("span",{style:{color:"#79C0FF"}},"style"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"margin-bottom: 18px;margin-left: 120px"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"				\u5220\u9664\u6D3B\u52A8\u5730\u70B9{{ index }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			</"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		</"),l("span",{style:{color:"#7EE787"}},"template"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		<"),l("span",{style:{color:"#7EE787"}},"jlg-form-item"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"type"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"primary"'),l("span",{style:{color:"#C9D1D9"}}," @"),l("span",{style:{color:"#79C0FF"}},"click"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"handleSubmit"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},">\u521B\u5EFA</"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}}," @"),l("span",{style:{color:"#79C0FF"}},"click"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"handleResetFields"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},">\u91CD\u7F6E</"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			<"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}}," @"),l("span",{style:{color:"#79C0FF"}},"click"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},"addRule"),l("span",{style:{color:"#C9D1D9"}},'"'),l("span",{style:{color:"#C9D1D9"}},">\u6DFB\u52A0\u6D3B\u52A8\u5730\u70B9</"),l("span",{style:{color:"#7EE787"}},"el-button"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		</"),l("span",{style:{color:"#7EE787"}},"jlg-form-item"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	</"),l("span",{style:{color:"#7EE787"}},"jlg-form"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"</"),l("span",{style:{color:"#7EE787"}},"template"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"<"),l("span",{style:{color:"#7EE787"}},"script"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"lang"),l("span",{style:{color:"#C9D1D9"}},"="),l("span",{style:{color:"#A5D6FF"}},'"ts"'),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"setup"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"import"),l("span",{style:{color:"#C9D1D9"}}," { ref, reactive } "),l("span",{style:{color:"#FF7B72"}},"from"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#A5D6FF"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," formRef "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"ref"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#79C0FF"}},"null"),l("span",{style:{color:"#C9D1D9"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," formData "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"reactive"),l("span",{style:{color:"#C9D1D9"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	name: "),l("span",{style:{color:"#A5D6FF"}},"''"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	date: "),l("span",{style:{color:"#A5D6FF"}},"''"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	items: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			label: "),l("span",{style:{color:"#A5D6FF"}},"'\u6D3B\u52A8\u5730\u70B9'"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			value: "),l("span",{style:{color:"#A5D6FF"}},"''"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"			rules: "),l("span",{style:{color:"#A5D6FF"}},"'required'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"addRule"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," () "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"   "),l("span",{style:{color:"#8B949E"}},"// \u968F\u673A\u6DFB\u52A0\u5FC5\u586B")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"    "),l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," isRequired "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," Math."),l("span",{style:{color:"#D2A8FF"}},"random"),l("span",{style:{color:"#C9D1D9"}},"() "),l("span",{style:{color:"#FF7B72"}},">"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"0.5")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	formData.items."),l("span",{style:{color:"#D2A8FF"}},"push"),l("span",{style:{color:"#C9D1D9"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		label: "),l("span",{style:{color:"#A5D6FF"}},"'\u6D3B\u52A8\u5730\u70B9'"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"+"),l("span",{style:{color:"#C9D1D9"}}," formData.items."),l("span",{style:{color:"#79C0FF"}},"length"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		value: "),l("span",{style:{color:"#A5D6FF"}},"''"),l("span",{style:{color:"#C9D1D9"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"		rules: isRequired "),l("span",{style:{color:"#FF7B72"}},"?"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#A5D6FF"}},"'required'"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},":"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"null")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	})")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"let"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"removeRule"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," ("),l("span",{style:{color:"#FFA657"}},"index"),l("span",{style:{color:"#FF7B72"}},":"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#79C0FF"}},"number"),l("span",{style:{color:"#C9D1D9"}},") "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"	formData.items."),l("span",{style:{color:"#D2A8FF"}},"splice"),l("span",{style:{color:"#C9D1D9"}},"(index, "),l("span",{style:{color:"#79C0FF"}},"1"),l("span",{style:{color:"#C9D1D9"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"const"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"handleSubmit"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," () "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"  formRef.value."),l("span",{style:{color:"#D2A8FF"}},"submit"),l("span",{style:{color:"#C9D1D9"}},"()."),l("span",{style:{color:"#D2A8FF"}},"then"),l("span",{style:{color:"#C9D1D9"}},"(("),l("span",{style:{color:"#FFA657"}},"formData"),l("span",{style:{color:"#C9D1D9"}},") "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"    console."),l("span",{style:{color:"#D2A8FF"}},"log"),l("span",{style:{color:"#C9D1D9"}},"("),l("span",{style:{color:"#A5D6FF"}},"'formData'"),l("span",{style:{color:"#C9D1D9"}},", formData)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"  })")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FF7B72"}},"const"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#D2A8FF"}},"handleResetFields"),l("span",{style:{color:"#C9D1D9"}}," "),l("span",{style:{color:"#FF7B72"}},"="),l("span",{style:{color:"#C9D1D9"}}," () "),l("span",{style:{color:"#FF7B72"}},"=>"),l("span",{style:{color:"#C9D1D9"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"  formRef.value.epRef."),l("span",{style:{color:"#D2A8FF"}},"resetFields"),l("span",{style:{color:"#C9D1D9"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C9D1D9"}},"</"),l("span",{style:{color:"#7EE787"}},"script"),l("span",{style:{color:"#C9D1D9"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	<"),l("span",{style:{color:"#116329"}},"pre"),l("span",{style:{color:"#24292F"}},">{{ formData }}</"),l("span",{style:{color:"#116329"}},"pre"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	<"),l("span",{style:{color:"#116329"}},"jlg-form"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"ref"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"formRef"'),l("span",{style:{color:"#24292F"}}," :"),l("span",{style:{color:"#0550AE"}},"model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"formData"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label-width"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"120px"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-input"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u6D3B\u52A8\u540D\u79F0"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"name"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"rules"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"required"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-date-picker")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u6D3B\u52A8\u65F6\u95F4"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"date"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			"),l("span",{style:{color:"#0550AE"}},"placeholder"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"\u8BF7\u9009\u62E9\u6D3B\u52A8\u65F6\u95F4"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-for"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"(item, index) "),l("span",{style:{color:"#CF222E"}},"in"),l("span",{style:{color:"#24292F"}}," formData.items"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}}," :"),l("span",{style:{color:"#0550AE"}},"key"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"index"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"jlg-input")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"				:"),l("span",{style:{color:"#0550AE"}},"key"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"item.prop "),l("span",{style:{color:"#CF222E"}},"+"),l("span",{style:{color:"#24292F"}}," index"),l("span",{style:{color:"#24292F"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"				:"),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"item.label"),l("span",{style:{color:"#24292F"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"                :"),l("span",{style:{color:"#0550AE"}},"prop"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#0A3069"}},"'items.'"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"+"),l("span",{style:{color:"#24292F"}}," index "),l("span",{style:{color:"#CF222E"}},"+"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'.value'"),l("span",{style:{color:"#24292F"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"				:"),l("span",{style:{color:"#0550AE"}},"rules"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"item.rules"),l("span",{style:{color:"#24292F"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-button")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"				@"),l("span",{style:{color:"#0550AE"}},"click"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#8250DF"}},"removeRule"),l("span",{style:{color:"#24292F"}},"(index)"),l("span",{style:{color:"#24292F"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"				"),l("span",{style:{color:"#0550AE"}},"style"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"margin-bottom: 18px;margin-left: 120px"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"				\u5220\u9664\u6D3B\u52A8\u5730\u70B9{{ index }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			</"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		<"),l("span",{style:{color:"#116329"}},"jlg-form-item"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"type"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"primary"'),l("span",{style:{color:"#24292F"}}," @"),l("span",{style:{color:"#0550AE"}},"click"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"handleSubmit"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},">\u521B\u5EFA</"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}}," @"),l("span",{style:{color:"#0550AE"}},"click"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"handleResetFields"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},">\u91CD\u7F6E</"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			<"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}}," @"),l("span",{style:{color:"#0550AE"}},"click"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},"addRule"),l("span",{style:{color:"#24292F"}},'"'),l("span",{style:{color:"#24292F"}},">\u6DFB\u52A0\u6D3B\u52A8\u5730\u70B9</"),l("span",{style:{color:"#116329"}},"el-button"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		</"),l("span",{style:{color:"#116329"}},"jlg-form-item"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	</"),l("span",{style:{color:"#116329"}},"jlg-form"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"lang"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"ts"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"setup"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"import"),l("span",{style:{color:"#24292F"}}," { ref, reactive } "),l("span",{style:{color:"#CF222E"}},"from"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," formRef "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"null"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," formData "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"reactive"),l("span",{style:{color:"#24292F"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	name: "),l("span",{style:{color:"#0A3069"}},"''"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	date: "),l("span",{style:{color:"#0A3069"}},"''"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	items: [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			label: "),l("span",{style:{color:"#0A3069"}},"'\u6D3B\u52A8\u5730\u70B9'"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			value: "),l("span",{style:{color:"#0A3069"}},"''"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"			rules: "),l("span",{style:{color:"#0A3069"}},"'required'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"})")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"addRule"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," () "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"   "),l("span",{style:{color:"#6E7781"}},"// \u968F\u673A\u6DFB\u52A0\u5FC5\u586B")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," isRequired "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," Math."),l("span",{style:{color:"#8250DF"}},"random"),l("span",{style:{color:"#24292F"}},"() "),l("span",{style:{color:"#CF222E"}},">"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"0.5")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	formData.items."),l("span",{style:{color:"#8250DF"}},"push"),l("span",{style:{color:"#24292F"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		label: "),l("span",{style:{color:"#0A3069"}},"'\u6D3B\u52A8\u5730\u70B9'"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"+"),l("span",{style:{color:"#24292F"}}," formData.items."),l("span",{style:{color:"#0550AE"}},"length"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		value: "),l("span",{style:{color:"#0A3069"}},"''"),l("span",{style:{color:"#24292F"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"		rules: isRequired "),l("span",{style:{color:"#CF222E"}},"?"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'required'"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},":"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"null")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	})")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"let"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"removeRule"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," ("),l("span",{style:{color:"#953800"}},"index"),l("span",{style:{color:"#CF222E"}},":"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"number"),l("span",{style:{color:"#24292F"}},") "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"	formData.items."),l("span",{style:{color:"#8250DF"}},"splice"),l("span",{style:{color:"#24292F"}},"(index, "),l("span",{style:{color:"#0550AE"}},"1"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"handleSubmit"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," () "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  formRef.value."),l("span",{style:{color:"#8250DF"}},"submit"),l("span",{style:{color:"#24292F"}},"()."),l("span",{style:{color:"#8250DF"}},"then"),l("span",{style:{color:"#24292F"}},"(("),l("span",{style:{color:"#953800"}},"formData"),l("span",{style:{color:"#24292F"}},") "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    console."),l("span",{style:{color:"#8250DF"}},"log"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0A3069"}},"'formData'"),l("span",{style:{color:"#24292F"}},", formData)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  })")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"handleResetFields"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," () "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  formRef.value.epRef."),l("span",{style:{color:"#8250DF"}},"resetFields"),l("span",{style:{color:"#24292F"}},"()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),G=S('<h2 id="props" tabindex="-1">Props</h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>model</code></td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>Record&lt;string, any&gt;</td><td>\u2014</td></tr><tr><td><code>inline</code></td><td>\u884C\u5185\u8868\u5355\u6A21\u5F0F</td><td>boolean</td><td><code>false</code></td></tr><tr><td><code>label-position</code></td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C \u5F53\u8BBE\u7F6E\u4E3A <code>left</code> \u6216 <code>right</code> \u65F6\uFF0C\u5219\u4E5F\u9700\u8981\u8BBE\u7F6E <code>label-width</code> \u5C5E\u6027</td><td>&#39;left&#39;/&#39;right&#39; /&#39;top&#39;</td><td></td></tr><tr><td><code>label-width</code></td><td>\u6807\u7B7E\u7684\u957F\u5EA6\uFF0C\u4F8B\u5982 <code>&#39;50px&#39;</code>\u3002 \u4F5C\u4E3A Form \u76F4\u63A5\u5B50\u5143\u7D20\u7684 form-item \u4F1A\u7EE7\u627F\u8BE5\u503C\u3002 \u53EF\u4EE5\u4F7F\u7528 <code>auto</code>\u3002</td><td>string/number</td><td></td></tr><tr><td><code>hide-required-asterisk</code></td><td>\u662F\u5426\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7\u3002</td><td>boolean</td><td><code>false</code></td></tr><tr><td><code>require-asterisk-position</code></td><td>\u661F\u53F7\u7684\u4F4D\u7F6E\u3002</td><td>&#39;left&#39; /&#39;right&#39;</td><td></td></tr><tr><td><code>show-message</code></td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td><code>true</code></td></tr><tr><td><code>inline-message</code></td><td>\u662F\u5426\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F</td><td>boolean</td><td><code>false</code></td></tr><tr><td><code>status-icon</code></td><td>\u662F\u5426\u5728\u8F93\u5165\u6846\u4E2D\u663E\u793A\u6821\u9A8C\u7ED3\u679C\u53CD\u9988\u56FE\u6807</td><td>boolean</td><td><code>false</code></td></tr><tr><td><code>validate-on-rule-change</code></td><td>\u662F\u5426\u5728 <code>rules</code> \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1</td><td>boolean</td><td><code>true</code></td></tr><tr><td><code>size</code></td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>&#39;large&#39; /&#39;default&#39; /&#39;small&#39;</td><td></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002 \u5982\u679C\u8BBE\u7F6E\u4E3A <code>true</code>, \u5B83\u5C06\u8986\u76D6\u5185\u90E8\u7EC4\u4EF6\u7684 <code>disabled</code> \u5C5E\u6027</td><td>boolean</td><td><code>false</code></td></tr><tr><td><code>scroll-to-error</code></td><td>\u5F53\u6821\u9A8C\u5931\u8D25\u65F6\uFF0C\u6EDA\u52A8\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8868\u5355\u9879</td><td>boolean</td><td><code>false</code></td></tr></tbody></table><h2 id="events" tabindex="-1">Events</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>submit</code></td><td>\u63D0\u4EA4\u8868\u5355\u5E76\u5BF9\u6574\u4E2A\u8868\u5355\u7684\u5185\u5BB9\u8FDB\u884C\u9A8C\u8BC1\u3002</td></tr></tbody></table><p>\u67E5\u770B\u94FE\u63A5\uFF1A<a href="https://element-plus.org/zh-CN/component/form.html" target="_blank" rel="noreferrer">el-form \u4E2D\u6587\u6587\u6863</a></p><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u8BE5\u7EC4\u4EF6\u7684 <code>ref</code> \u6307\u5411\u7684\u662F <code>jlg-form</code> \uFF0C\u800C\u4E0D\u662F<code>el-form</code>,\u8981\u83B7\u53D6<code>el-form</code>\u7684<code>ref</code>\uFF0C\u9700\u8981\u4F7F\u7528\u7EC4\u4EF6<code>epRef</code>\u5C5E\u6027\u3002</p></div>',6);function H(r,n,e,o,g,h){const C=w("render-demo-0"),u=w("demo"),f=w("render-demo-1"),B=w("render-demo-2");return V(),q("div",null,[L,x(u,{customClass:"undefined",sourceCode:`<template>
	<el-radio-group v-model="labelPosition" label="label position">
		<el-radio-button label="left">Left</el-radio-button>
		<el-radio-button label="right">Right</el-radio-button>
		<el-radio-button label="top">Top</el-radio-button>
	</el-radio-group>
	<p>\u5F53\u524D\u8868\u5355\u503C\uFF1A</p>
	<pre>{{ formData }}</pre>
	<jlg-form
		ref="formRef"
		:model="formData"
		:label-position="labelPosition"
		label-width="120px"
	>
		<jlg-input label="\u6D3B\u52A8\u540D\u79F0" prop="name" rules="required" />
		<jlg-date-picker
			label="\u6D3B\u52A8\u65F6\u95F4"
			prop="date"
			placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u65F6\u95F4"
		/>
		<jlg-number-input label="\u53C2\u52A0\u4EBA\u6570" prop="number" />
		<jlg-form-item label="\u7ACB\u5373\u51FA\u53D1" prop="delivery">
			<el-switch v-model="formData.delivery" />
		</jlg-form-item>
		<jlg-form-item>
			<el-button type="primary" @click="handleSubmit">\u521B\u5EFA</el-button>
			<el-button @click="handleResetFields">\u91CD\u7F6E</el-button>
		</jlg-form-item>
	</jlg-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const labelPosition = ref('right')

let formRef = ref(null)
let formData = ref({
	name: '',
	date: '',
	number: null,
	delivery: false
})

const handleSubmit = () => {
	/**
	 * \u8868\u5355\u5FEB\u901F\u6821\u9A8C\u4E0E\u63D0\u4EA4
	 * @param validateErrorText \u6821\u9A8C\u5931\u8D25\u65F6\u7684\u63D0\u793A\u6587\u672C
	 */
	formRef.value.submit('\u8868\u5355\u6821\u9A8C\u5931\u8D25').then((formData) => {
		console.log('formData', formData)
		alert('\u8868\u5355\u6821\u9A8C\u6210\u529F')
	})
}

const handleResetFields = () => {
	formRef.value.epRef.resetFields()
}
<\/script>
`},{highlight:R(()=>[$]),default:R(()=>[x(C)]),_:1}),M,O,x(u,{customClass:"undefined",sourceCode:`<template>
	<jlg-form ref="formRef" :model="formData" label-width="120px">
		<jlg-input label="\u5BC6\u7801" prop="pass" type="password" rules="required" />
		<jlg-input
			label="\u786E\u8BA4\u5BC6\u7801"
			prop="checkPass"
			type="password"
			:rules="['required', { validator: checkPass, trigger: 'blur' }]"
		/>
		<jlg-form-item>
			<el-button type="primary" @click="handleSubmit">\u63D0\u4EA4</el-button>
			<el-button @click="handleResetFields">\u91CD\u7F6E</el-button>
		</jlg-form-item>
	</jlg-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let formRef = ref(null)
let formData = ref({
	pass: '',
	checkPass: ''
})

const checkPass = (rule, value, callback) => {
	if (value !== formData.pass) {
		callback(new Error('\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!'))
	} else {
		callback()
	}
}

const handleSubmit = () => {
	/**
	 * \u8868\u5355\u5FEB\u901F\u6821\u9A8C\u4E0E\u63D0\u4EA4
	 * @param validateErrorText \u6821\u9A8C\u5931\u8D25\u65F6\u7684\u63D0\u793A\u6587\u672C
	 */
	formRef.value.submit('\u8868\u5355\u6821\u9A8C\u5931\u8D25').then((formData) => {
		console.log('formData', formData)
		alert('\u8868\u5355\u6821\u9A8C\u6210\u529F')
	})
}

const handleResetFields = () => {
	formRef.value.epRef.resetFields()
}
<\/script>
`},{highlight:R(()=>[U]),default:R(()=>[x(f)]),_:1}),z,x(u,{customClass:"undefined",sourceCode:`<template>
	<pre>{{ formData }}</pre>
	<jlg-form ref="formRef" :model="formData" label-width="120px">
		<jlg-input label="\u6D3B\u52A8\u540D\u79F0" prop="name" rules="required" />
		<jlg-date-picker
			label="\u6D3B\u52A8\u65F6\u95F4"
			prop="date"
			placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u65F6\u95F4"
		/>
		<template v-for="(item, index) in formData.items" :key="index">
			<jlg-input
				:key="item.prop + index"
				:label="item.label"
                :prop="'items.' + index + '.value'"
				:rules="item.rules"
			/>
			<el-button
				@click="removeRule(index)"
				style="margin-bottom: 18px;margin-left: 120px"
			>
				\u5220\u9664\u6D3B\u52A8\u5730\u70B9{{ index }}
			</el-button>
		</template>
		<jlg-form-item>
			<el-button type="primary" @click="handleSubmit">\u521B\u5EFA</el-button>
			<el-button @click="handleResetFields">\u91CD\u7F6E</el-button>
			<el-button @click="addRule">\u6DFB\u52A0\u6D3B\u52A8\u5730\u70B9</el-button>
		</jlg-form-item>
	</jlg-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

let formRef = ref(null)
let formData = reactive({
	name: '',
	date: '',
	items: [
		{
			label: '\u6D3B\u52A8\u5730\u70B9',
			value: '',
			rules: 'required'
		}
	]
})

let addRule = () => {
   // \u968F\u673A\u6DFB\u52A0\u5FC5\u586B
    let isRequired = Math.random() > 0.5
	formData.items.push({
		label: '\u6D3B\u52A8\u5730\u70B9' + formData.items.length,
		value: '',
		rules: isRequired ? 'required' : null
	})
}

let removeRule = (index: number) => {
	formData.items.splice(index, 1)
}

const handleSubmit = () => {
  formRef.value.submit().then((formData) => {
    console.log('formData', formData)
  })
}

const handleResetFields = () => {
  formRef.value.epRef.resetFields()
}
<\/script>
`},{description:R(()=>[I]),highlight:R(()=>[J]),default:R(()=>[x(B)]),_:1}),G])}const W=P(T,[["render",H]]);export{Q as __pageData,W as default};
