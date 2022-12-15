import{V as D,_ as I,c as L,a as f,w as A,b as s,d as T,r as S,o as V,e as l}from"./app.3642ddc7.js";const{defineComponent:M}=D,R=M({name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:h,resolveComponent:y,createVNode:c,withCtx:i,openBlock:B,createBlock:b}=D,C=h("div",{class:"sub-title my-2 text-sm text-gray-600"}," list suggestions when activated ",-1),F=h("div",{class:"sub-title my-2 text-sm text-gray-600"}," list suggestions on input ",-1);function u(n,t){const p=y("jlg-autocomplete"),m=y("el-col"),o=y("el-row");return B(),b(o,{class:"demo-autocomplete"},{default:i(()=>[c(m,{span:12},{default:i(()=>[C,c(p,{modelValue:n.state1,"onUpdate:modelValue":t[0]||(t[0]=a=>n.state1=a),"fetch-suggestions":n.querySearch,clearable:"",class:"inline-input w-50",placeholder:"Please Input",onSelect:n.handleSelect},null,8,["modelValue","fetch-suggestions","onSelect"])]),_:1}),c(m,{span:12},{default:i(()=>[F,c(p,{modelValue:n.state2,"onUpdate:modelValue":t[1]||(t[1]=a=>n.state2=a),"fetch-suggestions":n.querySearch,"trigger-on-focus":!1,clearable:"",class:"inline-input w-50",placeholder:"Please Input",onSelect:n.handleSelect},null,8,["modelValue","fetch-suggestions","onSelect"])]),_:1})]),_:1})}const{defineComponent:d}=D,{onMounted:E,ref:e}=D;return{render:u,...d({setup(n,{expose:t}){t();const p=e(""),m=e(""),o=e([]),a=(v,r)=>{const _=v?o.value.filter(g(v)):o.value;r(_)},g=v=>r=>r.value.toLowerCase().indexOf(v.toLowerCase())===0,x=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],j=v=>{console.log(v)};E(()=>{o.value=x()});const q={state1:p,state2:m,restaurants:o,querySearch:a,createFilter:g,loadAll:x,handleSelect:j,onMounted:E,ref:e};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}})}}(),"render-demo-1":function(){const{createTextVNode:h,toDisplayString:y,createElementVNode:c,resolveComponent:i,withCtx:B,openBlock:b,createBlock:C}=D,F={class:"value"},u={class:"link"};function d(t,p){const m=i("jlg-autocomplete");return b(),C(m,{modelValue:t.state,"onUpdate:modelValue":p[0]||(p[0]=o=>t.state=o),"fetch-suggestions":t.querySearch,"popper-class":"my-autocomplete",placeholder:"Please input",onSelect:t.handleSelect},{suffix:B(()=>[h("%")]),default:B(({item:o})=>[c("div",F,y(o.value),1),c("span",u,y(o.link),1)]),_:1},8,["modelValue","fetch-suggestions","onSelect"])}const{defineComponent:E}=D,{onMounted:e,ref:k}=D;return{render:d,...E({setup(t,{expose:p}){p();const m=k(""),o=k([]),a=(r,_)=>{const w=r?o.value.filter(g(r)):o.value;_(w)},g=r=>_=>_.value.toLowerCase().indexOf(r.toLowerCase())===0,x=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],j=r=>{console.log(r)},q=r=>{console.log(r)};e(()=>{o.value=x()});const v={state:m,links:o,querySearch:a,createFilter:g,loadAll:x,handleSelect:j,handleIconClick:q,onMounted:e,ref:k};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}})}}(),"render-demo-2":function(){const{resolveComponent:h,openBlock:y,createBlock:c}=D;function i(u,d){const E=h("jlg-autocomplete");return y(),c(E,{modelValue:u.state,"onUpdate:modelValue":d[0]||(d[0]=e=>u.state=e),"fetch-suggestions":u.querySearchAsync,placeholder:"Please input",onSelect:u.handleSelect},null,8,["modelValue","fetch-suggestions","onSelect"])}const{defineComponent:B}=D,{onMounted:b,ref:C}=D;return{render:i,...B({setup(u,{expose:d}){d();const E=C(""),e=C([]),k=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}];let n;const t=(a,g)=>{const x=a?e.value.filter(p(a)):e.value;clearTimeout(n),n=setTimeout(()=>{g(x)},3e3*Math.random())},p=a=>g=>g.value.toLowerCase().indexOf(a.toLowerCase())===0,m=a=>{console.log(a)};b(()=>{e.value=k()});const o={state:E,links:e,loadAll:k,timeout:n,querySearchAsync:t,createFilter:p,handleSelect:m,onMounted:b,ref:C};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}})}}(),"render-demo-3":function(){const{resolveComponent:h,openBlock:y,createBlock:c}=D;function i(b,C){const F=h("jlg-autocomplete");return y(),c(F,{placeholder:" ","prepend-text":"prepend-text","append-text":"appendText","prefix-text":"prefixText","suffix-text":"suffixText"})}return{render:i,...{}}}()}}),ns=JSON.parse('{"title":"Autocomplete","description":"","frontmatter":{},"headers":[],"relativePath":"components/autocomplete.md","lastUpdated":1671107240000}');const P=s("h1",{id:"autocomplete",tabindex:"-1"},"Autocomplete",-1),N=s("p",null,"\u6839\u636E\u8F93\u5165\u5185\u5BB9\u63D0\u4F9B\u5BF9\u5E94\u7684\u8F93\u5165\u5EFA\u8BAE\u3002",-1),O=s("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),U=s("p",null,"Autocomplete \u7EC4\u4EF6\u63D0\u4F9B\u8F93\u5165\u5EFA\u8BAE\u3002",-1),z=s("div",null,[s("code",null,"fetch-suggestions"),l(" \u5C5E\u6027\u662F\u8FD4\u56DE\u5EFA\u8BAE\u8F93\u5165\u7684\u65B9\u6CD5\u3002 \u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C querySearch(queryString, cb) \u8FD4\u56DE\u5EFA\u8BAE\u901A\u8FC7 cb(data) \u81EA\u52A8\u5B8C\u6210\u5EFA\u8BAE\u3002")],-1),J=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"el-row"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demo-autocomplete"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"el-col"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"span"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"12"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"sub-title my-2 text-sm text-gray-600"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				list suggestions when activated")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"jlg-autocomplete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"state1"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"fetch-suggestions"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"querySearch"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"clearable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"inline-input w-50"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please Input"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				@"),s("span",{style:{color:"#79C0FF"}},"select"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"handleSelect"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"el-col"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"el-col"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"span"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"12"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"sub-title my-2 text-sm text-gray-600"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				list suggestions on input")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"jlg-autocomplete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"state2"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"fetch-suggestions"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"querySearch"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"trigger-on-focus"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"false"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"clearable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"inline-input w-50"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please Input"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				@"),s("span",{style:{color:"#79C0FF"}},"select"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"handleSelect"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"el-col"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"el-row"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { onMounted, ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"interface"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"RestaurantItem"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FFA657"}},"link"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"state1"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"state2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"restaurants"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#FFA657"}},"RestaurantItem"),s("span",{style:{color:"#C9D1D9"}},"[]>([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"querySearch"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"queryString"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"cb"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"any"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"results"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," queryString")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," restaurants.value."),s("span",{style:{color:"#D2A8FF"}},"filter"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#D2A8FF"}},"createFilter"),s("span",{style:{color:"#C9D1D9"}},"(queryString))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," restaurants.value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#8B949E"}},"// call callback function to return suggestions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#D2A8FF"}},"cb"),s("span",{style:{color:"#C9D1D9"}},"(results)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"createFilter"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"queryString"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"restaurant"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"RestaurantItem"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			restaurant.value."),s("span",{style:{color:"#D2A8FF"}},"toLowerCase"),s("span",{style:{color:"#C9D1D9"}},"()."),s("span",{style:{color:"#D2A8FF"}},"indexOf"),s("span",{style:{color:"#C9D1D9"}},"(queryString."),s("span",{style:{color:"#D2A8FF"}},"toLowerCase"),s("span",{style:{color:"#C9D1D9"}},"()) "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"loadAll"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vue'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'element'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/element'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'cooking'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/cooking'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'mint-ui'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/mint-ui'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vuex'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vuex'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vue-router'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vue-router'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'babel'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/babel/babel'"),s("span",{style:{color:"#C9D1D9"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"handleSelect"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"item"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"RestaurantItem"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(item)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D2A8FF"}},"onMounted"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	restaurants.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"loadAll"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"el-row"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demo-autocomplete"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"el-col"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"span"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"12"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"sub-title my-2 text-sm text-gray-600"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				list suggestions when activated")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"jlg-autocomplete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"state1"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"fetch-suggestions"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"querySearch"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"clearable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"inline-input w-50"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please Input"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				@"),s("span",{style:{color:"#0550AE"}},"select"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"handleSelect"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"el-col"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"el-col"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"span"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"12"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"sub-title my-2 text-sm text-gray-600"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				list suggestions on input")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"jlg-autocomplete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"state2"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"fetch-suggestions"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"querySearch"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"trigger-on-focus"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"clearable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"inline-input w-50"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please Input"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				@"),s("span",{style:{color:"#0550AE"}},"select"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"handleSelect"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"el-col"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"el-row"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { onMounted, ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"interface"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"RestaurantItem"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#953800"}},"link"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"state1"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"state2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"restaurants"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#953800"}},"RestaurantItem"),s("span",{style:{color:"#24292F"}},"[]>([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"querySearch"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"queryString"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"cb"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"any"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"results"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," queryString")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," restaurants.value."),s("span",{style:{color:"#8250DF"}},"filter"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#8250DF"}},"createFilter"),s("span",{style:{color:"#24292F"}},"(queryString))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," restaurants.value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#6E7781"}},"// call callback function to return suggestions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#8250DF"}},"cb"),s("span",{style:{color:"#24292F"}},"(results)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"createFilter"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"queryString"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"restaurant"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"RestaurantItem"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			restaurant.value."),s("span",{style:{color:"#8250DF"}},"toLowerCase"),s("span",{style:{color:"#24292F"}},"()."),s("span",{style:{color:"#8250DF"}},"indexOf"),s("span",{style:{color:"#24292F"}},"(queryString."),s("span",{style:{color:"#8250DF"}},"toLowerCase"),s("span",{style:{color:"#24292F"}},"()) "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"loadAll"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vue'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'element'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/element'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'cooking'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/cooking'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'mint-ui'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/mint-ui'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vuex'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vuex'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vue-router'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vue-router'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'babel'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/babel/babel'"),s("span",{style:{color:"#24292F"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"handleSelect"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"item"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"RestaurantItem"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(item)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8250DF"}},"onMounted"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	restaurants.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"loadAll"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("h2",{id:"\u81EA\u5B9A\u4E49\u6A21\u677F",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u6A21\u677F",-1),G=s("p",null,"\u81EA\u5B9A\u4E49\u5982\u4F55\u663E\u793A\u8F93\u5165\u5EFA\u8BAE\u3002",-1),H=s("div",null,"\u4F7F\u7528 scoped slot \u81EA\u5B9A\u4E49\u8F93\u5165\u5EFA\u8BAE\u3002 \u5728\u8FD9\u4E2A\u8303\u56F4\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 item \u952E\u6765\u8BBF\u95EE\u5F53\u524D\u8F93\u5165\u5EFA\u8BAE\u5BF9\u8C61\u3002",-1),K=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki has-highlighted-lines vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-autocomplete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"state"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"fetch-suggestions"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"querySearch"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"popper-class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"my-autocomplete"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please input"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		@"),s("span",{style:{color:"#79C0FF"}},"select"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"handleSelect"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"suffix"),s("span",{style:{color:"#C9D1D9"}},">%</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"default"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"{ item }"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"value"'),s("span",{style:{color:"#C9D1D9"}},">{{ item.value }}</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"link"'),s("span",{style:{color:"#C9D1D9"}},">{{ item.link }}</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"jlg-autocomplete"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { onMounted, ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8B949E"}},"// import { Edit } from '@element-plus/icons-vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"interface"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"LinkItem"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FFA657"}},"link"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"state"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"links"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#FFA657"}},"LinkItem"),s("span",{style:{color:"#C9D1D9"}},"[]>([])")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"querySearch"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"queryString"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"cb"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"results"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," queryString")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," links.value."),s("span",{style:{color:"#D2A8FF"}},"filter"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#D2A8FF"}},"createFilter"),s("span",{style:{color:"#C9D1D9"}},"(queryString))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," links.value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#8B949E"}},"// call callback function to return suggestion objects")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#D2A8FF"}},"cb"),s("span",{style:{color:"#C9D1D9"}},"(results)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"createFilter"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"queryString"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"restaurant"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			restaurant.value."),s("span",{style:{color:"#D2A8FF"}},"toLowerCase"),s("span",{style:{color:"#C9D1D9"}},"()."),s("span",{style:{color:"#D2A8FF"}},"indexOf"),s("span",{style:{color:"#C9D1D9"}},"(queryString."),s("span",{style:{color:"#D2A8FF"}},"toLowerCase"),s("span",{style:{color:"#C9D1D9"}},"()) "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"loadAll"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vue'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'element'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/element'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'cooking'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/cooking'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'mint-ui'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/mint-ui'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vuex'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vuex'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vue-router'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vue-router'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'babel'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/babel/babel'"),s("span",{style:{color:"#C9D1D9"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"handleSelect"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"item"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"LinkItem"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(item)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"handleIconClick"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"ev"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"Event"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(ev)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D2A8FF"}},"onMounted"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	links.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"loadAll"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".my-autocomplete"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#7EE787"}},"li"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"line-height"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"normal"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"7"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".my-autocomplete"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#7EE787"}},"li"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".name"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"text-overflow"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"ellipsis"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"overflow"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"hidden"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".my-autocomplete"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#7EE787"}},"li"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".addr"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"font-size"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"12"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"#b4b4b4"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".my-autocomplete"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#7EE787"}},"li"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".highlighted"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".addr"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"#ddd"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki has-highlighted-lines vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-autocomplete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"state"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"fetch-suggestions"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"querySearch"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"popper-class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"my-autocomplete"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please input"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		@"),s("span",{style:{color:"#0550AE"}},"select"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"handleSelect"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"suffix"),s("span",{style:{color:"#24292F"}},">%</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"default"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"{ item }"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"value"'),s("span",{style:{color:"#24292F"}},">{{ item.value }}</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"link"'),s("span",{style:{color:"#24292F"}},">{{ item.link }}</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"jlg-autocomplete"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { onMounted, ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E7781"}},"// import { Edit } from '@element-plus/icons-vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"interface"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"LinkItem"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#953800"}},"link"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"state"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"links"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#953800"}},"LinkItem"),s("span",{style:{color:"#24292F"}},"[]>([])")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"querySearch"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"queryString"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"cb"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"results"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," queryString")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," links.value."),s("span",{style:{color:"#8250DF"}},"filter"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#8250DF"}},"createFilter"),s("span",{style:{color:"#24292F"}},"(queryString))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," links.value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#6E7781"}},"// call callback function to return suggestion objects")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#8250DF"}},"cb"),s("span",{style:{color:"#24292F"}},"(results)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"createFilter"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"queryString"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"restaurant"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			restaurant.value."),s("span",{style:{color:"#8250DF"}},"toLowerCase"),s("span",{style:{color:"#24292F"}},"()."),s("span",{style:{color:"#8250DF"}},"indexOf"),s("span",{style:{color:"#24292F"}},"(queryString."),s("span",{style:{color:"#8250DF"}},"toLowerCase"),s("span",{style:{color:"#24292F"}},"()) "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"loadAll"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vue'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'element'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/element'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'cooking'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/cooking'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'mint-ui'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/mint-ui'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vuex'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vuex'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vue-router'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vue-router'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'babel'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/babel/babel'"),s("span",{style:{color:"#24292F"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"handleSelect"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"item"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"LinkItem"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(item)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"handleIconClick"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"ev"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"Event"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(ev)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8250DF"}},"onMounted"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	links.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"loadAll"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".my-autocomplete"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"line-height"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"normal"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"7"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".my-autocomplete"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".name"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"text-overflow"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"ellipsis"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"overflow"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"hidden"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".my-autocomplete"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".addr"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"font-size"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"12"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"#b4b4b4"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".my-autocomplete"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".highlighted"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".addr"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"#ddd"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Q=s("h2",{id:"\u8FDC\u7A0B\u641C\u7D22",tabindex:"-1"},"\u8FDC\u7A0B\u641C\u7D22",-1),W=s("p",null,"\u4ECE\u670D\u52A1\u7AEF\u641C\u7D22\u6570\u636E\u3002",-1),X=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-autocomplete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"state"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"fetch-suggestions"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"querySearchAsync"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please input"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		@"),s("span",{style:{color:"#79C0FF"}},"select"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"handleSelect"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { onMounted, ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"state"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"interface"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"LinkItem"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FFA657"}},"link"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"links"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#FFA657"}},"LinkItem"),s("span",{style:{color:"#C9D1D9"}},"[]>([])")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"loadAll"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vue'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'element'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/element'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'cooking'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/cooking'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'mint-ui'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/ElemeFE/mint-ui'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vuex'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vuex'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'vue-router'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/vuejs/vue-router'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		{ value: "),s("span",{style:{color:"#A5D6FF"}},"'babel'"),s("span",{style:{color:"#C9D1D9"}},", link: "),s("span",{style:{color:"#A5D6FF"}},"'https://github.com/babel/babel'"),s("span",{style:{color:"#C9D1D9"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"let"),s("span",{style:{color:"#C9D1D9"}}," timeout"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"NodeJS"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#FFA657"}},"Timeout")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"querySearchAsync"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"queryString"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#D2A8FF"}},"cb"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"arg"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"any"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"void"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"results"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," queryString")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," links.value."),s("span",{style:{color:"#D2A8FF"}},"filter"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#D2A8FF"}},"createFilter"),s("span",{style:{color:"#C9D1D9"}},"(queryString))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," links.value")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#D2A8FF"}},"clearTimeout"),s("span",{style:{color:"#C9D1D9"}},"(timeout "),s("span",{style:{color:"#FF7B72"}},"as"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"number"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"|"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"undefined"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	timeout "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"setTimeout"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#D2A8FF"}},"cb"),s("span",{style:{color:"#C9D1D9"}},"(results)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}, "),s("span",{style:{color:"#79C0FF"}},"3000"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," Math."),s("span",{style:{color:"#D2A8FF"}},"random"),s("span",{style:{color:"#C9D1D9"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"createFilter"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"queryString"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"restaurant"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"LinkItem"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			restaurant.value."),s("span",{style:{color:"#D2A8FF"}},"toLowerCase"),s("span",{style:{color:"#C9D1D9"}},"()."),s("span",{style:{color:"#D2A8FF"}},"indexOf"),s("span",{style:{color:"#C9D1D9"}},"(queryString."),s("span",{style:{color:"#D2A8FF"}},"toLowerCase"),s("span",{style:{color:"#C9D1D9"}},"()) "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"handleSelect"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"item"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"LinkItem"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(item)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D2A8FF"}},"onMounted"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	links.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"loadAll"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-autocomplete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"state"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"fetch-suggestions"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"querySearchAsync"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please input"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		@"),s("span",{style:{color:"#0550AE"}},"select"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"handleSelect"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { onMounted, ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"state"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"interface"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"LinkItem"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#953800"}},"link"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"links"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#953800"}},"LinkItem"),s("span",{style:{color:"#24292F"}},"[]>([])")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"loadAll"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vue'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'element'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/element'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'cooking'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/cooking'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'mint-ui'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/ElemeFE/mint-ui'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vuex'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vuex'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'vue-router'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/vuejs/vue-router'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		{ value: "),s("span",{style:{color:"#0A3069"}},"'babel'"),s("span",{style:{color:"#24292F"}},", link: "),s("span",{style:{color:"#0A3069"}},"'https://github.com/babel/babel'"),s("span",{style:{color:"#24292F"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"let"),s("span",{style:{color:"#24292F"}}," timeout"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"NodeJS"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#953800"}},"Timeout")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"querySearchAsync"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"queryString"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#8250DF"}},"cb"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"arg"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"any"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"void"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"results"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," queryString")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," links.value."),s("span",{style:{color:"#8250DF"}},"filter"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#8250DF"}},"createFilter"),s("span",{style:{color:"#24292F"}},"(queryString))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," links.value")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#8250DF"}},"clearTimeout"),s("span",{style:{color:"#24292F"}},"(timeout "),s("span",{style:{color:"#CF222E"}},"as"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"number"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"|"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"undefined"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	timeout "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"setTimeout"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#8250DF"}},"cb"),s("span",{style:{color:"#24292F"}},"(results)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}, "),s("span",{style:{color:"#0550AE"}},"3000"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," Math."),s("span",{style:{color:"#8250DF"}},"random"),s("span",{style:{color:"#24292F"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"createFilter"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"queryString"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"restaurant"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"LinkItem"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			restaurant.value."),s("span",{style:{color:"#8250DF"}},"toLowerCase"),s("span",{style:{color:"#24292F"}},"()."),s("span",{style:{color:"#8250DF"}},"indexOf"),s("span",{style:{color:"#24292F"}},"(queryString."),s("span",{style:{color:"#8250DF"}},"toLowerCase"),s("span",{style:{color:"#24292F"}},"()) "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"handleSelect"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"item"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"LinkItem"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(item)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8250DF"}},"onMounted"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	links.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"loadAll"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Y=s("h2",{id:"\u63D2\u69FD\u6269\u5C55",tabindex:"-1"},"\u63D2\u69FD\u6269\u5C55",-1),Z=s("p",null,"\u5728\u539F\u6709\u63D2\u69FD\u57FA\u7840\u4E0A\u6269\u5C55,\u7B80\u5355\u6587\u672C\u4E0D\u5FC5\u8981\u4F7F\u7528\u63D2\u69FD",-1),ss=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"jlg-autocomplete"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'" "'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"prepend-text"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"prepend-text"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"append-text"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"appendText"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"prefix-text"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"prefixText"'),s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"suffix-text"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"suffixText"'),s("span",{style:{color:"#C9D1D9"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"jlg-autocomplete"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'" "'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"prepend-text"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"prepend-text"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"append-text"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"appendText"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"prefix-text"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"prefixText"'),s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"suffix-text"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"suffixText"'),s("span",{style:{color:"#24292F"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),ls=T(`<h2 id="props" tabindex="-1">Props</h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>formItemConfig</td><td>el-form-item \u5C5E\u6027</td><td></td><td>\u2014</td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td></td><td>\u2014</td></tr><tr><td>prop</td><td>model \u7684\u952E\u540D\u3002 \u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u8DEF\u5F84\u6570\u7EC4(\u4F8B\u5982 [&#39;a&#39;, &#39;b&#39;, 0])</td><td></td><td>\u2014</td></tr><tr><td>rules</td><td>\u8868\u5355\u6821\u9A8C\u89C4\u5219</td><td></td><td>\u2014</td></tr><tr><td>prependText</td><td>\u8F93\u5165\u6846\u524D\u7F6E\u6587\u672C</td><td>string</td><td>\u2014</td></tr><tr><td>appendText</td><td>\u8F93\u5165\u6846\u540E\u7F6E\u6587\u672C\u5185\u5BB9</td><td>string</td><td></td></tr><tr><td>prefixText</td><td>\u8F93\u5165\u6846\u5934\u90E8\u6587\u672C\u5185\u5BB9</td><td>string</td><td></td></tr><tr><td>suffixTex</td><td>\u8F93\u5165\u6846\u5C3E\u90E8\u6587\u672C\u5185\u5BB9</td><td>string</td><td></td></tr><tr><td>disabled</td><td>\u81EA\u52A8\u8865\u5168\u7EC4\u4EF6\u662F\u5426\u88AB\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>value-key</td><td>\u8F93\u5165\u5EFA\u8BAE\u5BF9\u8C61\u4E2D\u7528\u4E8E\u663E\u793A\u7684\u952E\u540D</td><td>string</td><td>value</td></tr><tr><td>model-value / v-model</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014</td></tr><tr><td>debounce</td><td>\u83B7\u53D6\u8F93\u5165\u5EFA\u8BAE\u7684\u9632\u6296\u5EF6\u65F6\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td><td>number</td><td>300</td></tr><tr><td>placement</td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td><td></td><td>bottom-start</td></tr><tr><td>fetch-suggestions</td><td>\u83B7\u53D6\u8F93\u5165\u5EFA\u8BAE\u7684\u65B9\u6CD5\uFF0C \u4EC5\u5F53\u4F60\u7684\u8F93\u5165\u5EFA\u8BAE\u6570\u636E resolve \u65F6\uFF0C\u901A\u8FC7\u8C03\u7528 <code>callback(data:[]) </code> \u6765\u8FD4\u56DE\u5B83</td><td>Function</td><td>\u2014</td></tr><tr><td>popper-class</td><td>\u4E0B\u62C9\u5217\u8868\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td></tr><tr><td>trigger-on-focus</td><td>\u83B7\u53D6\u7126\u70B9\u65F6\u662F\u5426\u663E\u793A\u5EFA\u8BAE</td><td>boolean</td><td>true</td></tr><tr><td>name</td><td>\u7B49\u4EF7\u4E8E\u539F\u751F input <code>name</code> \u5C5E\u6027</td><td>string</td><td>\u2014</td></tr><tr><td>select-when-unmatched</td><td>\u5728\u8F93\u5165\u6CA1\u6709\u4EFB\u4F55\u5339\u914D\u5EFA\u8BAE\u7684\u60C5\u51B5\u4E0B\uFF0C\u6309\u4E0B\u56DE\u8F66\u662F\u5426\u89E6\u53D1 <code>select</code> \u4E8B\u4EF6</td><td>boolean</td><td>false</td></tr><tr><td>hide-loading</td><td>\u662F\u5426\u9690\u85CF\u8FDC\u7A0B\u52A0\u8F7D\u65F6\u7684\u52A0\u8F7D\u56FE\u6807</td><td>boolean</td><td>false</td></tr><tr><td>popper-append-to-body(deprecated)</td><td>\u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20\u3002 \u5728\u4E0B\u62C9\u5217\u8868\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false</td><td>boolean</td><td>false</td></tr><tr><td>teleported</td><td>\u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u5143\u7D20\u63D2\u5165 append-to \u6307\u5411\u7684\u5143\u7D20\u4E0B</td><td>boolean</td><td>true</td></tr><tr><td>highlight-first-item</td><td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u8FDC\u7A0B\u641C\u7D22\u7ED3\u679C\u7684\u7B2C\u4E00\u9879</td><td>boolean</td><td>false</td></tr><tr><td>fit-input-width</td><td>\u4E0B\u62C9\u6846\u7684\u5BBD\u5EA6\u662F\u5426\u4E0E\u8F93\u5165\u6846\u76F8\u540C</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="events" tabindex="-1">Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>select</td><td>\u70B9\u51FB\u9009\u4E2D\u5EFA\u8BAE\u9879\u65F6\u89E6\u53D1</td></tr><tr><td>change</td><td>\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>Subtags</th></tr></thead><tbody><tr><td>prefix</td><td>\u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9\uFF0C\u53EA\u5BF9\u975E <code>type=&quot;textarea&quot;</code> \u6709\u6548</td><td></td><td></td></tr><tr><td>suffix</td><td>\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9\uFF0C\u53EA\u5BF9\u975E <code>type=&quot;textarea&quot;</code> \u6709\u6548</td><td></td><td></td></tr><tr><td>prepend</td><td>\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9\uFF0C\u53EA\u5BF9\u975E <code>type=&quot;textarea&quot;</code> \u6709\u6548</td><td></td><td></td></tr><tr><td>append</td><td>\u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9\uFF0C\u53EA\u5BF9\u975E <code>type=&quot;textarea&quot;</code> \u6709\u6548</td><td></td><td></td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u5EFA\u8BAE\u7684\u5185\u5BB9</td><td></td><td></td></tr></tbody></table><h2 id="\u5BF9\u5916\u66B4\u9732\u7684\u6210\u5458" tabindex="-1">\u5BF9\u5916\u66B4\u9732\u7684\u6210\u5458</h2><p>\u8BE6\u60C5\u94FE\u63A5\uFF1A<a href="https://element-plus.org/zh-CN/component/autocomplete.html#%E5%AF%B9%E5%A4%96%E6%9A%B4%E9%9C%B2%E7%9A%84%E6%88%90%E5%91%98" target="_blank" rel="noreferrer">el-autocomplete \u5BF9\u5916\u66B4\u9732\u7684\u6210\u5458</a></p><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u8BE5\u7EC4\u4EF6\u7684 <code>ref</code> \u6307\u5411\u7684\u662F <code>jlg-autocomplete</code> \uFF0C\u800C\u4E0D\u662F<code>el-autocomplete</code>,\u8981\u83B7\u53D6<code>el-autocomplete</code>\u7684<code>ref</code>\uFF0C\u9700\u8981\u4F7F\u7528\u7EC4\u4EF6<code>epRef</code>\u5C5E\u6027\u3002</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">jlg-autocomplete</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">ref</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;autocompleteRef&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">lang</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;ts&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { ref } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">let</span><span style="color:#C9D1D9;"> autocompleteRef </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ref</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">null</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#8B949E;">//  \u4F7F\u7EC4\u4EF6\u5931\u53BB\u7126\u70B9</span></span>
<span class="line"><span style="color:#C9D1D9;">autocompleteRef.value.epRef.</span><span style="color:#D2A8FF;">blur</span><span style="color:#C9D1D9;">()</span></span>
<span class="line"><span style="color:#8B949E;">// \u4F7F\u7EC4\u4EF6\u83B7\u53D6\u7126\u70B9</span></span>
<span class="line"><span style="color:#C9D1D9;">autocompleteRef.value.epRef.</span><span style="color:#D2A8FF;">focus</span><span style="color:#C9D1D9;">()</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">jlg-autocomplete</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">ref</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;autocompleteRef&quot;</span><span style="color:#24292F;"> /&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">lang</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;ts&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">setup</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { ref } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> autocompleteRef </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">ref</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">null</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#6E7781;">//  \u4F7F\u7EC4\u4EF6\u5931\u53BB\u7126\u70B9</span></span>
<span class="line"><span style="color:#24292F;">autocompleteRef.value.epRef.</span><span style="color:#8250DF;">blur</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#6E7781;">// \u4F7F\u7EC4\u4EF6\u83B7\u53D6\u7126\u70B9</span></span>
<span class="line"><span style="color:#24292F;">autocompleteRef.value.epRef.</span><span style="color:#8250DF;">focus</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre></div></div>`,9);function os(h,y,c,i,B,b){const C=S("render-demo-0"),F=S("demo"),u=S("render-demo-1"),d=S("render-demo-2"),E=S("render-demo-3");return V(),L("div",null,[P,N,O,U,f(F,{customClass:"undefined",sourceCode:`<template>
	<el-row class="demo-autocomplete">
		<el-col :span="12">
			<div class="sub-title my-2 text-sm text-gray-600">
				list suggestions when activated
			</div>
			<jlg-autocomplete
				v-model="state1"
				:fetch-suggestions="querySearch"
				clearable
				class="inline-input w-50"
				placeholder="Please Input"
				@select="handleSelect"
			/>
		</el-col>
		<el-col :span="12">
			<div class="sub-title my-2 text-sm text-gray-600">
				list suggestions on input
			</div>
			<jlg-autocomplete
				v-model="state2"
				:fetch-suggestions="querySearch"
				:trigger-on-focus="false"
				clearable
				class="inline-input w-50"
				placeholder="Please Input"
				@select="handleSelect"
			/>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface RestaurantItem {
	value: string
	link: string
}

const state1 = ref('')
const state2 = ref('')

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
	const results = queryString
		? restaurants.value.filter(createFilter(queryString))
		: restaurants.value
	// call callback function to return suggestions
	cb(results)
}
const createFilter = (queryString: string) => {
	return (restaurant: RestaurantItem) => {
		return (
			restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		)
	}
}
const loadAll = () => {
	return [
		{ value: 'vue', link: 'https://github.com/vuejs/vue' },
		{ value: 'element', link: 'https://github.com/ElemeFE/element' },
		{ value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
		{ value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
		{ value: 'vuex', link: 'https://github.com/vuejs/vuex' },
		{ value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
		{ value: 'babel', link: 'https://github.com/babel/babel' }
	]
}

const handleSelect = (item: RestaurantItem) => {
	console.log(item)
}

onMounted(() => {
	restaurants.value = loadAll()
})
<\/script>
`},{description:A(()=>[z]),highlight:A(()=>[J]),default:A(()=>[f(C)]),_:1}),$,G,f(F,{customClass:"undefined",sourceCode:`<template>
	<jlg-autocomplete
		v-model="state"
		:fetch-suggestions="querySearch"
		popper-class="my-autocomplete"
		placeholder="Please input"
		@select="handleSelect"
	>
		<template #suffix>%</template>
		<template #default="{ item }">
			<div class="value">{{ item.value }}</div>
			<span class="link">{{ item.link }}</span>
		</template>
	</jlg-autocomplete>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import { Edit } from '@element-plus/icons-vue'

interface LinkItem {
	value: string
	link: string
}

const state = ref('')
const links = ref<LinkItem[]>([])

const querySearch = (queryString: string, cb) => {
	const results = queryString
		? links.value.filter(createFilter(queryString))
		: links.value
	// call callback function to return suggestion objects
	cb(results)
}
const createFilter = (queryString) => {
	return (restaurant) => {
		return (
			restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		)
	}
}
const loadAll = () => {
	return [
		{ value: 'vue', link: 'https://github.com/vuejs/vue' },
		{ value: 'element', link: 'https://github.com/ElemeFE/element' },
		{ value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
		{ value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
		{ value: 'vuex', link: 'https://github.com/vuejs/vuex' },
		{ value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
		{ value: 'babel', link: 'https://github.com/babel/babel' }
	]
}
const handleSelect = (item: LinkItem) => {
	console.log(item)
}

const handleIconClick = (ev: Event) => {
	console.log(ev)
}

onMounted(() => {
	links.value = loadAll()
})
<\/script>

<style>
.my-autocomplete li {
	line-height: normal;
	padding: 7px;
}
.my-autocomplete li .name {
	text-overflow: ellipsis;
	overflow: hidden;
}
.my-autocomplete li .addr {
	font-size: 12px;
	color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
	color: #ddd;
}
</style>
`},{description:A(()=>[H]),highlight:A(()=>[K]),default:A(()=>[f(u)]),_:1}),Q,W,f(F,{customClass:"undefined",sourceCode:`<template>
	<jlg-autocomplete
		v-model="state"
		:fetch-suggestions="querySearchAsync"
		placeholder="Please input"
		@select="handleSelect"
	/>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const state = ref('')

interface LinkItem {
	value: string
	link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
	return [
		{ value: 'vue', link: 'https://github.com/vuejs/vue' },
		{ value: 'element', link: 'https://github.com/ElemeFE/element' },
		{ value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
		{ value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
		{ value: 'vuex', link: 'https://github.com/vuejs/vuex' },
		{ value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
		{ value: 'babel', link: 'https://github.com/babel/babel' }
	]
}

let timeout: NodeJS.Timeout
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
	const results = queryString
		? links.value.filter(createFilter(queryString))
		: links.value

  clearTimeout(timeout as number | undefined)
	timeout = setTimeout(() => {
		cb(results)
	}, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
	return (restaurant: LinkItem) => {
		return (
			restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		)
	}
}

const handleSelect = (item: LinkItem) => {
	console.log(item)
}

onMounted(() => {
	links.value = loadAll()
})
<\/script>
`},{highlight:A(()=>[X]),default:A(()=>[f(d)]),_:1}),Y,Z,f(F,{customClass:"undefined",sourceCode:`<template>
  <jlg-autocomplete placeholder=" " prepend-text="prepend-text" append-text="appendText" prefix-text="prefixText"  suffix-text="suffixText"/>
</template>
`},{highlight:A(()=>[ss]),default:A(()=>[f(E)]),_:1}),ls])}const ts=I(R,[["render",os]]);export{ns as __pageData,ts as default};
