import{V as F,_ as j,c as w,a as m,w as u,b as s,e as l,d as k,r as g,o as V}from"./app.689ef905.js";const{defineComponent:P}=F,N=P({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:C,createVNode:i,openBlock:d,createElementBlock:A}=F,E={class:"example-showcase"};function D(o,t){const e=C("jlg-select");return d(),A("div",E,[i(e,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a),options:o.selectOptions,placeholder:"Please select",size:"large"},null,8,["modelValue","options"]),i(e,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value=a),options:o.selectOptions,placeholder:"Please select"},null,8,["modelValue","options"]),i(e,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value=a),options:o.selectOptions,placeholder:"Please select",size:"small"},null,8,["modelValue","options"])])}const{defineComponent:v}=F,{ref:n}=F;return{render:D,...v({setup(o,{expose:t}){t();const e=["a","b","c","d","e","f","g","h","i","j"],a=n();let r=n([{value:"Option 1",text:"a0"},{value:"Option 2",text:"a1"}]);r.value=Array.from({length:100}).map((h,p)=>({value:`Option ${p+1}`,text:`${e[p%10]}${p}`}));const c={initials:e,value:a,selectOptions:r,ref:n};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}})}}(),"render-demo-1":function(){const{resolveComponent:C,openBlock:i,createBlock:d}=F;function A(n,y){const o=C("jlg-select");return i(),d(o,{modelValue:n.value,"onUpdate:modelValue":y[0]||(y[0]=t=>n.value=t),options:n.selectOptions,placeholder:"Please select",multiple:""},null,8,["modelValue","options"])}const{defineComponent:E}=F,{ref:D}=F;return{render:A,...E({setup(n,{expose:y}){y();const o=["a","b","c","d","e","f","g","h","i","j"],t=D([]),e=D(Array.from({length:1e3}).map((r,c)=>({value:`Option ${c+1}`,text:`${o[c%10]}${c}`}))),a={initials:o,value:t,selectOptions:e,ref:D};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}})}}(),"render-demo-2":function(){const{resolveComponent:C,openBlock:i,createBlock:d}=F;function A(n,y){const o=C("jlg-select");return i(),d(o,{style:{width:"240px"},modelValue:n.value,"onUpdate:modelValue":y[0]||(y[0]=t=>n.value=t),options:n.selectOptions,placeholder:"Please select",multiple:"",filterable:"",clearable:"","label-key":"label","is-virtualized":!0},null,8,["modelValue","options"])}const{defineComponent:E}=F,{ref:D}=F;return{render:A,...E({setup(n,{expose:y}){y();const o=["a","b","c","d","e","f","g","h","i","j"],t=D([]),e=D(Array.from({length:1e3}).map((r,c)=>({value:`Option ${c+1}`,label:`${o[c%10]}${c}`}))),a={initials:o,value:t,selectOptions:e,ref:D};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}})}}(),"render-demo-3":function(){const{resolveComponent:C,createVNode:i,Fragment:d,openBlock:A,createElementBlock:E}=F;function D(o,t){const e=C("jlg-select");return A(),E(d,null,[i(e,{style:{width:"240px"},modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a),filterable:"",options:o.options,placeholder:"Please select",multiple:"","label-key":"label","is-virtualized":!0},null,8,["modelValue","options"]),i(e,{style:{width:"240px"},modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value=a),disabled:"",filterable:"",options:o.options,placeholder:"Please select",multiple:"","label-key":"label","is-virtualized":!0},null,8,["modelValue","options"])],64)}const{defineComponent:v}=F,{ref:n}=F;return{render:D,...v({setup(o,{expose:t}){t();const e=["a","b","c","d","e","f","g","h","i","j"],a=n([]),r=Array.from({length:100}).map((h,p)=>({value:`Option${p+1}`,label:`${e[p%10]}${p}`,disabled:p%10===0})),c={initials:e,value:a,options:r,ref:n};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}})}}(),"render-demo-4":function(){const{resolveComponent:C,normalizeStyle:i,openBlock:d,createBlock:A}=F;function E(y,o){const t=C("jlg-select");return d(),A(t,{style:i([{width:"240px"},{width:"240px"}]),modelValue:y.value,"onUpdate:modelValue":o[0]||(o[0]=e=>y.value=e),filterable:"",options:y.options,placeholder:"Please select",multiple:"","group-key":"options","label-key":"label","is-virtualized":!0},null,8,["modelValue","options"])}const{defineComponent:D}=F,{ref:v}=F;return{render:E,...D({setup(y,{expose:o}){o();const t=["a","b","c","d","e","f","g","h","i","j"],e=v([]),a=Array.from({length:10}).map((c,h)=>{const p=h+1;return{value:`Group ${p}`,label:`Group ${p}`,options:Array.from({length:10}).map((b,B)=>({value:`Option ${B+1+10*p}`,label:`${t[B%10]}${B+1+10*p}`}))}}),r={initials:t,value:e,options:a,ref:v};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}})}}(),"render-demo-5":function(){const{toDisplayString:C,createElementVNode:i,resolveComponent:d,normalizeStyle:A,withCtx:E,openBlock:D,createBlock:v}=F,n={style:{"margin-right":"8px"}},y={style:{color:"var(--el-text-color-secondary)","font-size":"13px"}};function o(r,c){const h=d("jlg-select");return D(),v(h,{style:A([{width:"240px"},{width:"240px"}]),modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=p=>r.value=p),filterable:"",options:r.options,placeholder:"Please select",multiple:"","label-key":"label","is-virtualized":!0},{default:E(({item:p})=>[i("span",n,C(p.label),1),i("span",y,C(p.value),1)]),_:1},8,["modelValue","options"])}const{defineComponent:t}=F,{ref:e}=F;return{render:o,...t({setup(r,{expose:c}){c();const h=["a","b","c","d","e","f","g","h","i","j"],p=e([]),b=Array.from({length:1e3}).map((O,_)=>({value:`Option ${_+1}`,label:`${h[_%10]}${_}`})),B={initials:h,value:p,options:b,ref:e};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}})}}(),"render-demo-6":function(){const{resolveComponent:C,openBlock:i,createBlock:d}=F;function A(n,y){const o=C("jlg-select");return i(),d(o,{modelValue:n.value,"onUpdate:modelValue":y[0]||(y[0]=t=>n.value=t),style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":n.remoteMethod,clearable:"",options:n.options,loading:n.loading,placeholder:"Please enter a keyword"},null,8,["modelValue","remote-method","options","loading"])}const{defineComponent:E}=F,{ref:D}=F;return{render:A,...E({setup(n,{expose:y}){y();const o=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],t=o.map(p=>({value:`value:${p}`,text:`text:${p}`})),e=D([]),a=D([]),r=D(!1),h={states:o,list:t,value:e,options:a,loading:r,remoteMethod:p=>{p!==""?(r.value=!0,setTimeout(()=>{r.value=!1,a.value=t.filter(b=>b.text.toLowerCase().includes(p.toLowerCase()))},200)):a.value=[]},ref:D};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}})}}(),"render-demo-7":function(){const{toDisplayString:C,createElementVNode:i,resolveComponent:d,createVNode:A,Fragment:E,openBlock:D,createElementBlock:v}=F;function n(e,a){const r=d("jlg-select");return D(),v(E,null,[i("pre",null,C(e.value),1),A(r,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),options:e.selectOptions,"onUpdate:options":a[1]||(a[1]=c=>e.selectOptions=c),"auto-dispatch-method":()=>e.getOptions(),"before-assign-options":e.beforeAssignOptions,onChange:e.handleChange},null,8,["modelValue","options","auto-dispatch-method","before-assign-options","onChange"])],64)}const{defineComponent:y}=F,{ref:o}=F;return{render:n,...y({setup(e,{expose:a}){a();const r=["a","b","c","d","e","f","g","h","i","j"],c=o();let h=o([]);const p=Array.from({length:30}).map((x,f)=>({value:`Option ${f+1}`,text:`${r[f%10]}${f}`})),_={initials:r,value:c,selectOptions:h,options:p,getOptions:()=>new Promise(x=>{setTimeout(()=>{let f={data:{content:{selectOptions:p,defaultValue:p[3].value}}};x(f)},1e3)}),handleChange:(x,f,$)=>{console.log(x,f,$)},beforeAssignOptions:x=>x,ref:o};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}})}}(),"render-demo-8":function(){const{toDisplayString:C,createElementVNode:i,resolveComponent:d,createVNode:A,Fragment:E,openBlock:D,createElementBlock:v}=F;function n(e,a){const r=d("jlg-select");return D(),v(E,null,[i("pre",null,C(e.value),1),A(r,{style:{width:"240px"},modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),options:e.options,placeholder:"Please select3","value-key":"value","label-key":"label","option-key":"value.name","is-virtualized":!0},null,8,["modelValue","options"])],64)}const{defineComponent:y}=F,{ref:o}=F;return{render:n,...y({setup(e,{expose:a}){a();const r=["a","b","c","d","e","f","g","h","i","j"],c=o(),h=Array.from({length:1e3}).map((b,B)=>({value:{name:`Option ${B+1}`,test:`test ${B%3}`},label:`${r[B%10]}${B}`})),p={initials:r,value:c,options:h,ref:o};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}})}}()}}),us=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","lastUpdated":1673251481000}');const z=s("h1",{id:"select",tabindex:"-1"},"Select",-1),M=s("p",null,"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u5E76\u9009\u62E9\u5185\u5BB9\u3002",-1),S=s("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),I=s("p",null,"\u9002\u7528\u5E7F\u6CDB\u7684\u57FA\u7840\u9009\u62E9\u5668",-1),L=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"example-showcase"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"selectOptions"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"large"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"selectOptions"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"selectOptions"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"initials"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'a'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'b'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'c'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'d'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'e'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'f'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'g'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'h'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'j'"),s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"let"),s("span",{style:{color:"#C9D1D9"}}," selectOptions "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	{ value: "),s("span",{style:{color:"#A5D6FF"}},"'Option 1'"),s("span",{style:{color:"#C9D1D9"}},", text: "),s("span",{style:{color:"#A5D6FF"}},"'a0'"),s("span",{style:{color:"#C9D1D9"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	{ value: "),s("span",{style:{color:"#A5D6FF"}},"'Option 2'"),s("span",{style:{color:"#C9D1D9"}},", text: "),s("span",{style:{color:"#A5D6FF"}},"'a1'"),s("span",{style:{color:"#C9D1D9"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"selectOptions.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	value: "),s("span",{style:{color:"#A5D6FF"}},"`Option ${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	text: "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"initials"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"scoped"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".example-showcase"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".jlg-select"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"margin-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"example-showcase"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"selectOptions"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"large"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"selectOptions"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"selectOptions"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"initials"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'a'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'b'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'c'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'d'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'e'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'f'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'g'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'h'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'j'"),s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"let"),s("span",{style:{color:"#24292F"}}," selectOptions "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	{ value: "),s("span",{style:{color:"#0A3069"}},"'Option 1'"),s("span",{style:{color:"#24292F"}},", text: "),s("span",{style:{color:"#0A3069"}},"'a0'"),s("span",{style:{color:"#24292F"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	{ value: "),s("span",{style:{color:"#0A3069"}},"'Option 2'"),s("span",{style:{color:"#24292F"}},", text: "),s("span",{style:{color:"#0A3069"}},"'a1'"),s("span",{style:{color:"#24292F"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"selectOptions.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	value: "),s("span",{style:{color:"#0A3069"}},"`Option ${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	text: "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"initials"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"scoped"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".example-showcase"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".jlg-select"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"margin-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),T=s("h2",{id:"\u591A\u9009",tabindex:"-1"},"\u591A\u9009",-1),U=s("p",null,"\u9ED8\u8BA4\u9690\u85CF\u591A\u4F59\u6807\u7B7E\uFF0C\u9F20\u6807\u60AC\u505C\u5C55\u793A\u5269\u4F59\u6807\u7B7E",-1),W=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"selectOptions"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"initials"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'a'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'b'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'c'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'d'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'e'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'f'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'g'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'h'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'j'"),s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"selectOptions"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		value: "),s("span",{style:{color:"#A5D6FF"}},"`Option ${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		text: "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"initials"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"selectOptions"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"initials"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'a'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'b'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'c'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'d'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'e'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'f'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'g'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'h'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'j'"),s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"selectOptions"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		value: "),s("span",{style:{color:"#0A3069"}},"`Option ${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		text: "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"initials"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),K=s("h2",{id:"\u53EF\u8FC7\u6EE4\u7684\u591A\u9009-and-\u4E00\u952E\u6E05\u9664",tabindex:"-1"},"\u53EF\u8FC7\u6EE4\u7684\u591A\u9009 and \u4E00\u952E\u6E05\u9664",-1),G=s("p",null,[l("\u5F53\u9009\u9879\u592A\u591A\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 "),s("code",null,"filterable"),l(" \u9009\u9879\u6765\u542F\u7528\u8FC7\u6EE4\u529F\u80FD\u6765\u627E\u5230\u6240\u9700\u7684\u9009\u9879\u3002")],-1),q=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"selectOptions"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"clearable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"label-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        :"),s("span",{style:{color:"#79C0FF"}},"is-virtualized"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"initials"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'a'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'b'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'c'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'d'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'e'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'f'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'g'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'h'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'j'"),s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"selectOptions"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		value: "),s("span",{style:{color:"#A5D6FF"}},"`Option ${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        label: "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"initials"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"selectOptions"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"clearable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"label-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        :"),s("span",{style:{color:"#0550AE"}},"is-virtualized"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"initials"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'a'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'b'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'c'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'d'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'e'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'f'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'g'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'h'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'j'"),s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"selectOptions"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		value: "),s("span",{style:{color:"#0A3069"}},"`Option ${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        label: "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"initials"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),H=s("h2",{id:"\u7981\u7528\u9009\u62E9\u5668\u672C\u8EAB\u6216\u9009\u9879",tabindex:"-1"},"\u7981\u7528\u9009\u62E9\u5668\u672C\u8EAB\u6216\u9009\u9879",-1),J=s("p",null,"\u60A8\u53EF\u4EE5\u9009\u62E9\u7981\u7528 Select \u6216\u8005 Select \u4E2D\u7684\u67D0\u4E2A\u9009\u9879",-1),R=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"options"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"label-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"is-virtualized"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"disabled")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"options"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"label-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"is-virtualized"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"initials"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'a'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'b'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'c'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'d'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'e'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'f'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'g'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'h'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'j'"),s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	value: "),s("span",{style:{color:"#A5D6FF"}},"`Option${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	label: "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"initials"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	disabled: idx "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"options"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"label-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"is-virtualized"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"disabled")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"options"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"label-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"is-virtualized"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"initials"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'a'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'b'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'c'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'d'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'e'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'f'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'g'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'h'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'j'"),s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	value: "),s("span",{style:{color:"#0A3069"}},"`Option${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	label: "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"initials"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	disabled: idx "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Y=k('<h2 id="\u7ED9\u9009\u9879\u8FDB\u884C\u5206\u7EC4" tabindex="-1">\u7ED9\u9009\u9879\u8FDB\u884C\u5206\u7EC4</h2><p>\u53EA\u8981\u6570\u636E\u683C\u5F0F\u6EE1\u8DB3\u7279\u5B9A\u8981\u6C42\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u610F\u613F\u4E3A\u9009\u9879\u8FDB\u884C\u5206\u7EC4(\u8BBE\u7F6E <code>groupKey</code>)\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u82E5\u662F\u542F\u7528\u4E86\u865A\u62DF\u5316\u5217\u8868 <code>isVirtualized: true</code>,\u90A3\u4E48 groupKey \u5FC5\u987B\u8BBE\u7F6E\u4E3A <code>options</code>, labelKey \u5FC5\u987B\u8BBE\u7F6E\u4E3A <code>label</code>, valueKey \u5FC5\u987B\u8BBE\u7F6E\u4E3A <code>value</code></p></div>',3),Q=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"options"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"group-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"options"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"label-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"is-virtualized"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"initials"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'a'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'b'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'c'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'d'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'e'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'f'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'g'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'h'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'j'"),s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," idx "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		value: "),s("span",{style:{color:"#A5D6FF"}},"`Group ${"),s("span",{style:{color:"#C9D1D9"}},"label"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		label: "),s("span",{style:{color:"#A5D6FF"}},"`Group ${"),s("span",{style:{color:"#C9D1D9"}},"label"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		options: Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			value: "),s("span",{style:{color:"#A5D6FF"}},"`Option ${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#C9D1D9"}},"label"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			label: "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"initials"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#C9D1D9"}},"label"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"options"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"group-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"options"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"label-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"is-virtualized"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"initials"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'a'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'b'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'c'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'d'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'e'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'f'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'g'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'h'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'j'"),s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," idx "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		value: "),s("span",{style:{color:"#0A3069"}},"`Group ${"),s("span",{style:{color:"#24292F"}},"label"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		label: "),s("span",{style:{color:"#0A3069"}},"`Group ${"),s("span",{style:{color:"#24292F"}},"label"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		options: Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			value: "),s("span",{style:{color:"#0A3069"}},"`Option ${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#24292F"}},"label"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			label: "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"initials"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#24292F"}},"label"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),X=s("h2",{id:"\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u6E32\u67D3\u6A21\u677F",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u6E32\u67D3\u6A21\u677F",-1),Z=s("p",null,"\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u6A21\u677F\u6765\u6E32\u67D3\u81EA\u5DF1\u60F3\u8981\u7684\u9009\u9879\u5185\u5BB9\u3002",-1),ss=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"options"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"label-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"is-virtualized"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"default"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"{ item }"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"margin-right: 8px"'),s("span",{style:{color:"#C9D1D9"}},">{{ item.label }}</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"color: var(--el-text-color-secondary); font-size: 13px"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				{{ item.value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"jlg-select"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"initials"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'a'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'b'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'c'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'d'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'e'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'f'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'g'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'h'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'j'"),s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	value: "),s("span",{style:{color:"#A5D6FF"}},"`Option ${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	label: "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"initials"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"options"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"label-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"is-virtualized"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"default"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"{ item }"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"margin-right: 8px"'),s("span",{style:{color:"#24292F"}},">{{ item.label }}</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"color: var(--el-text-color-secondary); font-size: 13px"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				{{ item.value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"jlg-select"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"initials"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'a'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'b'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'c'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'d'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'e'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'f'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'g'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'h'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'j'"),s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	value: "),s("span",{style:{color:"#0A3069"}},"`Option ${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	label: "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"initials"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),ls=s("h2",{id:"\u8FDC\u7A0B\u641C\u7D22",tabindex:"-1"},"\u8FDC\u7A0B\u641C\u7D22",-1),os=s("p",null,"\u8F93\u5165\u5173\u952E\u5B57\u4EE5\u4ECE\u8FDC\u7A0B\u670D\u52A1\u5668\u4E2D\u67E5\u627E\u6570\u636E\u3002",-1),es=s("div",null,[l("\u4E3A\u4E86\u542F\u7528\u8FDC\u7A0B\u641C\u7D22\uFF0C\u9700\u8981\u5C06 "),s("code",null,"filterable"),l(" \u548C"),s("code",null,"remote"),l(" \u8BBE\u7F6E\u4E3A "),s("code",null,"true"),l("\uFF0C\u540C\u65F6\u4F20\u5165\u4E00\u4E2A "),s("code",null,"remote-method"),l("\u3002 "),s("code",null,"remote-method"),l(" \u4E3A\u4E00\u4E2A "),s("code",null,"Function"),l("\uFF0C\u5B83\u4F1A\u5728\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8F93\u5165\u503C\u3002")],-1),ns=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"remote")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"remote-method"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"remoteMethod"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"clearable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"options"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"loading"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"loading"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please enter a keyword"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"states"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Alabama'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Alaska'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Arizona'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Arkansas'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Colorado'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Connecticut'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Delaware'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Florida'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Georgia'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Hawaii'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Idaho'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Illinois'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Indiana'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Iowa'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Kansas'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Kentucky'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Louisiana'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Maine'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Maryland'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Massachusetts'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Michigan'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Minnesota'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Mississippi'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Missouri'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Montana'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Nebraska'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Nevada'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'New Hampshire'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'New Jersey'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'New Mexico'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'New York'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'North Carolina'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'North Dakota'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Ohio'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Oklahoma'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Oregon'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Pennsylvania'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Rhode Island'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'South Carolina'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'South Dakota'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Tennessee'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Texas'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Utah'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Vermont'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Virginia'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Washington'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'West Virginia'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Wisconsin'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#A5D6FF"}},"'Wyoming'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"list"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," states."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"item"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"ListItem"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," { value: "),s("span",{style:{color:"#A5D6FF"}},"`value:${"),s("span",{style:{color:"#C9D1D9"}},"item"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},", text: "),s("span",{style:{color:"#A5D6FF"}},"`text:${"),s("span",{style:{color:"#C9D1D9"}},"item"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"interface"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"ListItem"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FFA657"}},"text"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#FFA657"}},"ListItem"),s("span",{style:{color:"#C9D1D9"}},"[]>([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"loading"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"false"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"remoteMethod"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"query"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (query "),s("span",{style:{color:"#FF7B72"}},"!=="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		loading.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#D2A8FF"}},"setTimeout"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			loading.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			options.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," list."),s("span",{style:{color:"#D2A8FF"}},"filter"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"item"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," item.text."),s("span",{style:{color:"#D2A8FF"}},"toLowerCase"),s("span",{style:{color:"#C9D1D9"}},"()."),s("span",{style:{color:"#D2A8FF"}},"includes"),s("span",{style:{color:"#C9D1D9"}},"(query."),s("span",{style:{color:"#D2A8FF"}},"toLowerCase"),s("span",{style:{color:"#C9D1D9"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		}, "),s("span",{style:{color:"#79C0FF"}},"200"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	} "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		options.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"multiple")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"filterable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"remote")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"remote-method"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"remoteMethod"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"clearable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"options"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"loading"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"loading"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please enter a keyword"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"states"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Alabama'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Alaska'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Arizona'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Arkansas'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Colorado'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Connecticut'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Delaware'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Florida'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Georgia'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Hawaii'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Idaho'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Illinois'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Indiana'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Iowa'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Kansas'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Kentucky'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Louisiana'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Maine'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Maryland'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Massachusetts'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Michigan'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Minnesota'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Mississippi'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Missouri'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Montana'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Nebraska'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Nevada'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'New Hampshire'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'New Jersey'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'New Mexico'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'New York'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'North Carolina'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'North Dakota'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Ohio'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Oklahoma'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Oregon'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Pennsylvania'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Rhode Island'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'South Carolina'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'South Dakota'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Tennessee'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Texas'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Utah'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Vermont'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Virginia'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Washington'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'West Virginia'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Wisconsin'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0A3069"}},"'Wyoming'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"list"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," states."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"item"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"ListItem"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," { value: "),s("span",{style:{color:"#0A3069"}},"`value:${"),s("span",{style:{color:"#24292F"}},"item"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},", text: "),s("span",{style:{color:"#0A3069"}},"`text:${"),s("span",{style:{color:"#24292F"}},"item"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"interface"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"ListItem"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#953800"}},"text"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#953800"}},"ListItem"),s("span",{style:{color:"#24292F"}},"[]>([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"loading"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"remoteMethod"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"query"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (query "),s("span",{style:{color:"#CF222E"}},"!=="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		loading.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#8250DF"}},"setTimeout"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			loading.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			options.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," list."),s("span",{style:{color:"#8250DF"}},"filter"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"item"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," item.text."),s("span",{style:{color:"#8250DF"}},"toLowerCase"),s("span",{style:{color:"#24292F"}},"()."),s("span",{style:{color:"#8250DF"}},"includes"),s("span",{style:{color:"#24292F"}},"(query."),s("span",{style:{color:"#8250DF"}},"toLowerCase"),s("span",{style:{color:"#24292F"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		}, "),s("span",{style:{color:"#0550AE"}},"200"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	} "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		options.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),as=s("h2",{id:"\u975E\u8FDC\u7A0B\u641C\u7D22\u6A21\u5F0F\u4E0B-\u521D\u59CB\u5316\u81EA\u52A8\u83B7\u53D6-options",tabindex:"-1"},"\u975E\u8FDC\u7A0B\u641C\u7D22\u6A21\u5F0F\u4E0B\uFF0C\u521D\u59CB\u5316\u81EA\u52A8\u83B7\u53D6 options",-1),ts=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"selectOptions"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"auto-dispatch-method"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getOptions"),s("span",{style:{color:"#C9D1D9"}},"()"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        :"),s("span",{style:{color:"#79C0FF"}},"before-assign-options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"beforeAssignOptions"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		@"),s("span",{style:{color:"#79C0FF"}},"change"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"handleChange"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"initials"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'a'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'b'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'c'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'d'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'e'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'f'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'g'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'h'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'j'"),s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"let"),s("span",{style:{color:"#C9D1D9"}}," selectOptions "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"30"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	value: "),s("span",{style:{color:"#A5D6FF"}},"`Option ${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	text: "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"initials"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getOptions"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"Promise"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"resolve"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#D2A8FF"}},"setTimeout"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"       "),s("span",{style:{color:"#8B949E"}},"// \u6A21\u62DF\u7ED3\u679C\u8FD4\u56DE\u7ED3\u679C")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"let"),s("span",{style:{color:"#C9D1D9"}}," result "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				data: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"					content: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"						selectOptions: options,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"						defaultValue: options["),s("span",{style:{color:"#79C0FF"}},"3"),s("span",{style:{color:"#C9D1D9"}},"].value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"					}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#D2A8FF"}},"resolve"),s("span",{style:{color:"#C9D1D9"}},"(result)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		}, "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8B949E"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8B949E"}}," * \u5728\u539F\u6709\u7684 change \u4E8B\u4EF6\u4E0A\uFF0C\u589E\u52A0\u4E862\u4E2A\u53C2\u6570\uFF0CcurrentOption:\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u9879")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8B949E"}}," * */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"handleChange"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"currenValue"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"currentOption"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"options"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(currenValue, currentOption, options)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"beforeAssignOptions"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"options"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}},"  options")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#8B949E"}},"// return options.map((item) => {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#8B949E"}},"//   return {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#8B949E"}},"//     value: item.value,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#8B949E"}},"//     text: item.text")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#8B949E"}},"//   }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#8B949E"}},"// })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"selectOptions"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"auto-dispatch-method"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getOptions"),s("span",{style:{color:"#24292F"}},"()"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        :"),s("span",{style:{color:"#0550AE"}},"before-assign-options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"beforeAssignOptions"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		@"),s("span",{style:{color:"#0550AE"}},"change"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"handleChange"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"initials"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'a'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'b'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'c'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'d'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'e'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'f'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'g'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'h'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'j'"),s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"let"),s("span",{style:{color:"#24292F"}}," selectOptions "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"30"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	value: "),s("span",{style:{color:"#0A3069"}},"`Option ${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	text: "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"initials"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getOptions"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"Promise"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"resolve"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#8250DF"}},"setTimeout"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"       "),s("span",{style:{color:"#6E7781"}},"// \u6A21\u62DF\u7ED3\u679C\u8FD4\u56DE\u7ED3\u679C")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"let"),s("span",{style:{color:"#24292F"}}," result "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				data: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"					content: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"						selectOptions: options,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"						defaultValue: options["),s("span",{style:{color:"#0550AE"}},"3"),s("span",{style:{color:"#24292F"}},"].value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"					}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#8250DF"}},"resolve"),s("span",{style:{color:"#24292F"}},"(result)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		}, "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E7781"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E7781"}}," * \u5728\u539F\u6709\u7684 change \u4E8B\u4EF6\u4E0A\uFF0C\u589E\u52A0\u4E862\u4E2A\u53C2\u6570\uFF0CcurrentOption:\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u9879")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E7781"}}," * */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"handleChange"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"currenValue"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"currentOption"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"options"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(currenValue, currentOption, options)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"beforeAssignOptions"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"options"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}},"  options")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#6E7781"}},"// return options.map((item) => {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#6E7781"}},"//   return {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#6E7781"}},"//     value: item.value,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#6E7781"}},"//     text: item.text")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#6E7781"}},"//   }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#6E7781"}},"// })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),ps=s("h2",{id:"\u4F7F\u7528-value-key",tabindex:"-1"},"\u4F7F\u7528 value-key",-1),cs=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"\u6CE8\u610F"),s("p",null,[l("\u76EE\u524D el-select-v2 \u503C\u7ED1\u5B9A\u5BF9\u8C61\u6709 bug, 2.3.0 \u7248\u672C\u4FEE\u590D\u53D1\u5E03; \u6240\u4EE5\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u5BF9\u8C61\u4F5C\u4E3A\u503C\u7ED1\u5B9A; "),s("a",{href:"https://github.com/element-plus/element-plus/pull/9638",target:"_blank",rel:"noreferrer"},"\u76F8\u5173\u94FE\u63A5")])],-1),rs=s("div",null,[l("\u5F53 "),s("code",null,"options.value"),l(" \u662F\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u60A8\u9700\u8981\u6307\u5B9A\u4E00\u4E2A key")],-1),ys=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"options"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Please select3"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"value-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"value"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"label-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#79C0FF"}},"option-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"value.name"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		:"),s("span",{style:{color:"#79C0FF"}},"is-virtualized"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"initials"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'a'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'b'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'c'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'d'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'e'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'f'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'g'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'h'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'j'"),s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"options"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	value: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		name: "),s("span",{style:{color:"#A5D6FF"}},"`Option ${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		test: "),s("span",{style:{color:"#A5D6FF"}},"`test ${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"3"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	label: "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"initials"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}${"),s("span",{style:{color:"#C9D1D9"}},"idx"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"jlg-select")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 240px"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"options"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Please select3"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"value-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"value"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"label-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#0550AE"}},"option-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"value.name"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		:"),s("span",{style:{color:"#0550AE"}},"is-virtualized"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"initials"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'a'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'b'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'c'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'d'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'e'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'f'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'g'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'h'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'j'"),s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"options"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	value: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		name: "),s("span",{style:{color:"#0A3069"}},"`Option ${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		test: "),s("span",{style:{color:"#0A3069"}},"`test ${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"3"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	label: "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"initials"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}${"),s("span",{style:{color:"#24292F"}},"idx"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Fs=k('<h2 id="props" tabindex="-1">Props</h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>formItemConfig</td><td>el-form-item \u5C5E\u6027</td><td></td><td>\u2014</td><td></td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td></td><td>\u2014</td><td></td></tr><tr><td>prop</td><td>model \u7684\u952E\u540D\u3002 \u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u8DEF\u5F84\u6570\u7EC4(\u4F8B\u5982 [&#39;a&#39;, &#39;b&#39;, 0])\uFF0C\u6216\u8005\u4E00\u4E2A\u70B9\u5206\u9694\u7684\u8DEF\u5F84(\u4F8B\u5982 &#39;a.b.0&#39;)</td><td></td><td>\u2014</td><td></td></tr><tr><td>rules</td><td>\u8868\u5355\u6821\u9A8C\u89C4\u5219\u3002\u53EF\u4EE5\u662F\u4E00\u4E2A\u4EE5\u7BA1\u72B6\u7B26\u5206\u9694\u7684\u5B57\u7B26\u4E32 \u4F8B\u5982 &#39;required&#39;\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5305\u542B\u9A8C\u8BC1\u89C4\u5219\u7684\u5BF9\u8C61\u6570\u7EC4 \u4F8B\u5982 [&#39;required&#39;,{ required: true, message: &#39;\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740&#39;, trigger: &#39;blur&#39; }]</td><td></td><td>\u2014</td><td></td></tr><tr><td>isVirtualized</td><td>\u662F\u5426\u542F\u7528\u865A\u62DF\u5316\u6EDA\u52A8</td><td></td><td>boolean</td><td>false</td></tr><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>groupKey</td><td>\u4F5C\u4E3A \u5206\u7EC4 \u552F\u4E00\u6807\u8BC6\u7684\u952E\u540D,\u5982\u679C\u60F3\u6309\u7167\u81EA\u5DF1\u7684\u610F\u613F\u4E3A\u9009\u9879\u8FDB\u884C\u5206\u7EC4,\u5FC5\u987B\u8BBE\u7F6E\u8BE5\u5C5E\u6027(\u6CE8\u610F jlg-select \u7684 groupKey \u53EA\u80FD\u662F options)</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>large/default/small</td><td>default</td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>clear-icon</td><td>\u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807</td><td>string</td><td>\u2014</td><td>CircleClose</td></tr><tr><td>collapse-tags</td><td>\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapse-tags-tooltip</td><td>\u5F53\u9F20\u6807\u60AC\u505C\u4E8E\u6298\u53E0\u6807\u7B7E\u7684\u6587\u672C\u65F6\uFF0C\u662F\u5426\u663E\u793A\u6240\u6709\u9009\u4E2D\u7684\u6807\u7B7E\u3002 \u53EA\u6709\u5F53 <code>collapse-tags</code> \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>multiple-limit</td><td>\u591A\u9009\u65F6\u53EF\u88AB\u9009\u62E9\u7684\u6700\u5927\u6570\u76EE\u3002 \u5F53\u88AB\u8BBE\u7F6E\u4E3A 0 \u65F6\uFF0C\u53EF\u88AB\u9009\u62E9\u7684\u6570\u76EE\u4E0D\u8BBE\u9650\u3002</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>name</td><td>\u9009\u62E9\u5668\u7684\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>effect</td><td>\u6587\u5B57\u63D0\u793A\uFF08Tooltip\uFF09\u7684\u4E3B\u9898\uFF0C\u5185\u7F6E<code>dark</code>\u548C<code>light</code>\u4E24\u79CD\u3002</td><td>string</td><td>string</td><td>light</td></tr><tr><td>autocomplete</td><td>\u81EA\u52A8\u5B8C\u6210\u9009\u62E9\u8F93\u5165</td><td>string</td><td>\u2014</td><td>off</td></tr><tr><td>placeholder</td><td>select input \u7684\u539F\u751F autocomplete \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>Please select</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u7B5B\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>auto-dispatch-method</td><td>\u975E\u8FDC\u7A0B\u641C\u7D22\u6A21\u5F0F\u4E0B\uFF0C\u521D\u59CB\u5316\u81EA\u52A8\u83B7\u53D6 options \u6570\u636E\u6240\u8C03\u7528\u7684\u65B9\u6CD5</td><td>function</td><td></td><td></td></tr><tr><td>before-assign-options</td><td>\u521D\u59CB\u5316\u81EA\u52A8\u8BBE\u7F6E options \u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE options</td><td>function</td><td>function() :options</td><td></td></tr><tr><td>allow-create</td><td>\u662F\u5426\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE\uFF0C \u5F53\u4F7F\u7528\u8BE5\u5C5E\u6027\u65F6\uFF0C<code>filterable</code>\u5FC5\u987B\u8BBE\u7F6E\u4E3A<code>true</code></td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>reserve-keyword</td><td>\u7B5B\u9009\u65F6\uFF0C\u662F\u5426\u5728\u9009\u62E9\u9009\u9879\u540E\u4FDD\u7559\u5173\u952E\u5B57</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>no-data-text</td><td>\u5F53\u5728\u6CA1\u6709\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4F60\u540C\u65F6\u53EF\u4EE5\u4F7F\u7528<code>#empty</code>\u63D2\u69FD\u8FDB\u884C\u8BBE\u7F6E\u3002</td><td>string</td><td>\u2014</td><td>No Data</td></tr><tr><td>popper-class</td><td>\u9009\u62E9\u5668\u4E0B\u62C9\u83DC\u5355\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-append-to-body(deprecated)</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20 \u5F53\u5F39\u51FA\u6846\u7684\u4F4D\u7F6E\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false\u3002</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>teleported</td><td>\u8BE5\u4E0B\u62C9\u83DC\u5355\u662F\u5426\u4F7F\u7528 teleport \u63D2\u5165 body \u5143\u7D20</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>persistent</td><td>\u5F53\u4E0B\u62C9\u9009\u62E9\u5668\u672A\u88AB\u6FC0\u6D3B\u5E76\u4E14<code>persistent</code>\u8BBE\u7F6E\u4E3A<code>false</code>\uFF0C\u9009\u62E9\u5668\u4F1A\u88AB\u5220\u9664\u3002</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>popper-options</td><td>\u81EA\u5B9A\u4E49 popper \u9009\u9879\uFF0C\u66F4\u591A\u8BF7\u53C2\u8003 <a href="https://popper.js.org/docs/v2/" target="_blank" rel="noreferrer">https://popper.js.org/docs/v2/</a></td><td>object</td><td>-</td><td>-</td></tr><tr><td>automatic-dropdown</td><td>\u5BF9\u4E8E\u4E0D\u53EF\u8FC7\u6EE4\u7684 Select \u7EC4\u4EF6\uFF0C\u6B64\u5C5E\u6027\u51B3\u5B9A\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>height</td><td>\u4E0B\u62C9\u83DC\u5355\u7684\u9AD8\u5EA6\uFF0C\u6BCF\u4E00\u4E2A\u5B50\u9009\u9879\u7684\u9AD8\u5EA6\u662F 34px</td><td>number</td><td>-</td><td>170</td></tr><tr><td>scrollbar-always-on</td><td>\u63A7\u5236\u662F\u5426\u603B\u662F\u5C55\u793A\u6EDA\u52A8\u6761</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>remote</td><td>\u662F\u5426\u4ECE\u670D\u52A1\u5668\u641C\u7D22\u6570\u636E</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>remote-method</td><td>\u5F53\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u88AB\u8C03\u7528\u7684\u51FD\u6570\u3002 \u5176\u53C2\u6570\u662F\u5F53\u524D\u8F93\u5165\u503C\u3002 \u53EA\u6709\u5F53 <code>filterable</code> \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002</td><td>function(keyword: string)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validate-event</td><td>\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>placement</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0\u7684\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom-start</td></tr><tr><td>remote-method</td><td>\u5F53\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u88AB\u8C03\u7528\u7684\u51FD\u6570\u3002 \u5176\u53C2\u6570\u662F\u5F53\u524D\u8F93\u5165\u503C\u3002 \u53EA\u6709\u5F53 <code>filterable</code> \u8BBE\u7F6E\u4E3A true \u65F6\u624D\u4F1A\u751F\u6548\u3002</td><td>function(keyword: string)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-key</td><td>\u9009\u9879\u7684\u6E32\u67D3\u6A21\u677F\u6240\u7ED1\u5B9A\u5728\u952E\u540D (el-option \u4E0A\u663E\u793A\u7684\u5B57\u6BB5)</td><td>string</td><td>-</td><td>text</td></tr><tr><td>value-key</td><td>\u4F5C\u4E3A value \u552F\u4E00\u6807\u8BC6\u7684\u952E\u540D\uFF0C\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u65F6\u5FC5\u586B</td><td>string</td><td>-</td><td>value</td></tr></tbody></table><h2 id="events" tabindex="-1">Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td></tr><tr><td>visible-change</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1</td></tr><tr><td>remove-tag</td><td>\u591A\u9009\u6A21\u5F0F\u4E0B\u79FB\u9664 tag \u65F6\u89E6\u53D1</td></tr><tr><td>clear</td><td>\u53EF\u6E05\u7A7A\u7684\u5355\u9009\u6A21\u5F0F\u4E0B\u7528\u6237\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td></tr><tr><td>blur</td><td>\u5F53\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td></tr><tr><td>focus</td><td>\u5F53\u9009\u62E9\u5668\u7684\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49 Option \u6A21\u677F</td></tr><tr><td>empty</td><td>\u81EA\u5B9A\u4E49\u5F53\u9009\u9879\u4E3A\u7A7A\u65F6\u7684\u5185\u5BB9</td></tr><tr><td>prefix</td><td>\u8F93\u5165\u6846\u7684\u524D\u7F00</td></tr></tbody></table>',6);function Ds(C,i,d,A,E,D){const v=g("render-demo-0"),n=g("demo"),y=g("render-demo-1"),o=g("render-demo-2"),t=g("render-demo-3"),e=g("render-demo-4"),a=g("render-demo-5"),r=g("render-demo-6"),c=g("render-demo-7"),h=g("render-demo-8");return V(),w("div",null,[z,M,S,I,m(n,{customClass:"undefined",sourceCode:`<template>
	<div class="example-showcase">
		<jlg-select
			v-model="value"
			:options="selectOptions"
			placeholder="Please select"
			size="large"
		/>
		<jlg-select
			v-model="value"
			:options="selectOptions"
			placeholder="Please select"
		/>
		<jlg-select
			v-model="value"
			:options="selectOptions"
			placeholder="Please select"
			size="small"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
let selectOptions = ref([
	{ value: 'Option 1', text: 'a0' },
	{ value: 'Option 2', text: 'a1' }
])
selectOptions.value = Array.from({ length: 100 }).map((_, idx) => ({
	value: \`Option \${idx + 1}\`,
	text: \`\${initials[idx % 10]}\${idx}\`
}))
<\/script>

<style scoped>
.example-showcase .jlg-select {
	margin-right: 4px;
}
</style>
`},{highlight:u(()=>[L]),default:u(()=>[m(v)]),_:1}),T,U,m(n,{customClass:"undefined",sourceCode:`<template>
	<jlg-select
		v-model="value"
		:options="selectOptions"
		placeholder="Please select"
		multiple
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const selectOptions = ref(
	Array.from({ length: 1000 }).map((_, idx) => ({
		value: \`Option \${idx + 1}\`,
		text: \`\${initials[idx % 10]}\${idx}\`
	}))
)
<\/script>
`},{highlight:u(()=>[W]),default:u(()=>[m(y)]),_:1}),K,G,m(n,{customClass:"undefined",sourceCode:`<template>
	<jlg-select
        style="width: 240px"
		v-model="value"
		:options="selectOptions"
		placeholder="Please select"
		multiple
		filterable
		clearable
        label-key="label"
        :is-virtualized="true"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const selectOptions = ref(
	Array.from({ length: 1000 }).map((_, idx) => ({
		value: \`Option \${idx + 1}\`,
        label: \`\${initials[idx % 10]}\${idx}\`
	}))
)
<\/script>
`},{highlight:u(()=>[q]),default:u(()=>[m(o)]),_:1}),H,J,m(n,{customClass:"undefined",sourceCode:`<template>
	<jlg-select
        style="width: 240px"
		v-model="value"
		filterable
		:options="options"
		placeholder="Please select"
		multiple
        label-key="label"
		:is-virtualized="true"
	/>
	<jlg-select
        style="width: 240px"
		v-model="value"
		disabled
		filterable
		:options="options"
		placeholder="Please select"
		multiple
        label-key="label"
		:is-virtualized="true"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 100 }).map((_, idx) => ({
	value: \`Option\${idx + 1}\`,
	label: \`\${initials[idx % 10]}\${idx}\`,
	disabled: idx % 10 === 0
}))
<\/script>
`},{highlight:u(()=>[R]),default:u(()=>[m(t)]),_:1}),Y,m(n,{customClass:"undefined",sourceCode:`<template>
	<jlg-select
        style="width: 240px"
		v-model="value"
		filterable
		:options="options"
		placeholder="Please select"
		style="width: 240px"
		multiple
		group-key="options"
        label-key="label"
		:is-virtualized="true"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 10 }).map((_, idx) => {
	const label = idx + 1
	return {
		value: \`Group \${label}\`,
		label: \`Group \${label}\`,
		options: Array.from({ length: 10 }).map((_, idx) => ({
			value: \`Option \${idx + 1 + 10 * label}\`,
			label: \`\${initials[idx % 10]}\${idx + 1 + 10 * label}\`
		}))
	}
})
<\/script>
`},{highlight:u(()=>[Q]),default:u(()=>[m(e)]),_:1}),X,Z,m(n,{customClass:"undefined",sourceCode:`<template>
	<jlg-select
        style="width: 240px"
		v-model="value"
		filterable
		:options="options"
		placeholder="Please select"
		style="width: 240px"
		multiple
        label-key="label"
		:is-virtualized="true"
	>
		<template #default="{ item }">
			<span style="margin-right: 8px">{{ item.label }}</span>
			<span style="color: var(--el-text-color-secondary); font-size: 13px">
				{{ item.value }}
			</span>
		</template>
	</jlg-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
	value: \`Option \${idx + 1}\`,
	label: \`\${initials[idx % 10]}\${idx}\`
}))
<\/script>
`},{highlight:u(()=>[ss]),default:u(()=>[m(a)]),_:1}),ls,os,m(n,{customClass:"undefined",sourceCode:`<template>
	<jlg-select
		v-model="value"
		style="width: 240px"
		multiple
		filterable
		remote
		:remote-method="remoteMethod"
		clearable
		:options="options"
		:loading="loading"
		placeholder="Please enter a keyword"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const states = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming'
]
const list = states.map((item): ListItem => {
	return { value: \`value:\${item}\`, text: \`text:\${item}\` }
})

interface ListItem {
	value: string
	text: string
}

const value = ref([])
const options = ref<ListItem[]>([])
const loading = ref(false)

const remoteMethod = (query: string) => {
	if (query !== '') {
		loading.value = true
		setTimeout(() => {
			loading.value = false
			options.value = list.filter((item) => {
				return item.text.toLowerCase().includes(query.toLowerCase())
			})
		}, 200)
	} else {
		options.value = []
	}
}
<\/script>
`},{description:u(()=>[es]),highlight:u(()=>[ns]),default:u(()=>[m(r)]),_:1}),as,m(n,{customClass:"undefined",sourceCode:`<template>
	<pre>{{ value }}</pre>
	<jlg-select
		v-model="value"
		v-model:options="selectOptions"
		:auto-dispatch-method="() => getOptions()"
        :before-assign-options="beforeAssignOptions"
		@change="handleChange"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
let selectOptions = ref([])
const options = Array.from({ length: 30 }).map((_, idx) => ({
	value: \`Option \${idx + 1}\`,
	text: \`\${initials[idx % 10]}\${idx}\`
}))

const getOptions = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
       // \u6A21\u62DF\u7ED3\u679C\u8FD4\u56DE\u7ED3\u679C
			let result = {
				data: {
					content: {
						selectOptions: options,
						defaultValue: options[3].value
					}
				}
			}
			resolve(result)
		}, 1000)
	})
}
/**
 * \u5728\u539F\u6709\u7684 change \u4E8B\u4EF6\u4E0A\uFF0C\u589E\u52A0\u4E862\u4E2A\u53C2\u6570\uFF0CcurrentOption:\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u9879
 * */
const handleChange = (currenValue, currentOption, options) => {
	console.log(currenValue, currentOption, options)
}
const beforeAssignOptions = (options) => {
  return  options
  // return options.map((item) => {
  //   return {
  //     value: item.value,
  //     text: item.text
  //   }
  // })
}
<\/script>
`},{highlight:u(()=>[ts]),default:u(()=>[m(c)]),_:1}),ps,cs,m(n,{customClass:"undefined",sourceCode:`<template>
	<pre>{{ value }}</pre>
	<jlg-select
        style="width: 240px"
		v-model="value"
		:options="options"
		placeholder="Please select3"
		value-key="value"
		label-key="label"
		option-key="value.name"
		:is-virtualized="true"
	/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()
const options = Array.from({ length: 1000 }).map((_, idx) => ({
	value: {
		name: \`Option \${idx + 1}\`,
		test: \`test \${idx % 3}\`
	},
	label: \`\${initials[idx % 10]}\${idx}\`
}))
<\/script>
`},{description:u(()=>[rs]),highlight:u(()=>[ys]),default:u(()=>[m(h)]),_:1}),Fs])}const Cs=j(N,[["render",Ds]]);export{us as __pageData,Cs as default};
