import{V as E,_ as N,c as L,a as g,w as k,d as S,b as s,e as l,r as T,o as P}from"./app.3642ddc7.js";const{defineComponent:U}=E,M=U({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:F,withCtx:u,createVNode:r,createElementVNode:y,toDisplayString:m,Fragment:v,openBlock:A,createElementBlock:b}=E,B={class:"demo-date-picker"},h={class:"block"},f=y("span",{class:"demonstration"},"\u9ED8\u8BA4",-1),_={class:"block"},x=y("span",{class:"demonstration"},"\u5177\u6709\u5FEB\u901F\u9009\u9879\u7684\u9009\u62E9\u5668",-1);function w(o,n){const i=F("el-radio-button"),t=F("el-radio-group"),p=F("jlg-date-picker");return A(),b(v,null,[r(t,{modelValue:o.size,"onUpdate:modelValue":n[0]||(n[0]=c=>o.size=c),label:"size control",size:"small"},{default:u(()=>[r(i,{label:"large"},{default:u(()=>[e("large")]),_:1}),r(i,{label:"default"},{default:u(()=>[e("default")]),_:1}),r(i,{label:"small"},{default:u(()=>[e("small")]),_:1})]),_:1},8,["modelValue"]),y("div",B,[y("div",h,[f,y("pre",null,m(o.value1),1),r(p,{modelValue:o.value1,"onUpdate:modelValue":n[1]||(n[1]=c=>o.value1=c),type:"date",placeholder:"\u9009\u62E9\u4E00\u5929",size:o.size,min:"2022-12-05",max:new Date},null,8,["modelValue","size","max"])]),y("div",_,[x,y("pre",null,m(o.value2),1),r(p,{modelValue:o.value2,"onUpdate:modelValue":n[2]||(n[2]=c=>o.value2=c),type:"date",placeholder:"\u9009\u62E9\u4E00\u5929",min:"2022-12-05","disabled-date":o.disabledDate,shortcuts:o.shortcuts,size:o.size},null,8,["modelValue","disabled-date","shortcuts","size"])])])],64)}const{defineComponent:z}=E,{ref:C}=E;return{render:w,...z({setup(o,{expose:n}){n();const i=C("default"),t=C(""),p=C(""),c=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:()=>{const a=new Date;return a.setTime(a.getTime()-3600*1e3*24),a}},{text:"\u4E00\u661F\u671F\u524D",value:()=>{const a=new Date;return a.setTime(a.getTime()-3600*1e3*24*7),a}}],d={size:i,value1:t,value2:p,shortcuts:c,disabledDate:a=>a.getTime()>Date.now(),ref:C};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}})}}(),"render-demo-1":function(){const{createElementVNode:e,toDisplayString:F,resolveComponent:u,createVNode:r,openBlock:y,createElementBlock:m}=E,v={class:"demo-date-picker"},A={class:"container"},b={class:"block"},B=e("span",{class:"demonstration"},"\u661F\u671F",-1),h={class:"block"},f=e("span",{class:"demonstration"},"\u6708",-1),_={class:"container"},x={class:"block"},w=e("span",{class:"demonstration"},"\u5E74",-1),z={class:"block"},C=e("span",{class:"demonstration"},"\u591A\u4E2A\u65E5\u671F",-1);function V(t,p){const c=u("jlg-date-picker");return y(),m("div",v,[e("div",A,[e("div",b,[B,e("pre",null,F(t.value1),1),r(c,{modelValue:t.value1,"onUpdate:modelValue":p[0]||(p[0]=D=>t.value1=D),type:"week",max:new Date("Sun Dec 04 2022 00:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)"),placeholder:"\u6700\u5927\u4E0D\u80FD\u8D85\u8FC72022\u7B2C50\u5468"},null,8,["modelValue","max"])]),e("div",h,[f,e("pre",null,F(t.value2),1),r(c,{modelValue:t.value2,"onUpdate:modelValue":p[1]||(p[1]=D=>t.value2=D),type:"month",min:"2022/08/01"},null,8,["modelValue"])])]),e("div",_,[e("div",x,[w,e("pre",null,F(t.value3),1),r(c,{modelValue:t.value3,"onUpdate:modelValue":p[2]||(p[2]=D=>t.value3=D),type:"year",min:"2021/01/01"},null,8,["modelValue"])]),e("div",z,[C,e("pre",null,F(t.value4),1),r(c,{modelValue:t.value4,"onUpdate:modelValue":p[3]||(p[3]=D=>t.value4=D),type:"dates"},null,8,["modelValue"])])])])}const{defineComponent:o}=E,{ref:n}=E;return{render:V,...o({setup(t,{expose:p}){p();const c=n(""),D=n(""),d=n(""),a=n(""),j={value1:c,value2:D,value3:d,value4:a,ref:n};return Object.defineProperty(j,"__isScriptSetup",{enumerable:!1,value:!0}),j}})}}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:F,withCtx:u,createVNode:r,createElementVNode:y,toDisplayString:m,Fragment:v,openBlock:A,createElementBlock:b}=E,B={class:"demo-date-picker"},h={class:"block"},f=y("span",{class:"demonstration"},"Default",-1),_={class:"block"},x=y("span",{class:"demonstration"},"With quick options",-1);function w(o,n){const i=F("el-radio-button"),t=F("el-radio-group"),p=F("jlg-date-picker");return A(),b(v,null,[r(t,{modelValue:o.size,"onUpdate:modelValue":n[0]||(n[0]=c=>o.size=c),label:"size control",size:"small"},{default:u(()=>[r(i,{label:"large"},{default:u(()=>[e("large")]),_:1}),r(i,{label:"default"},{default:u(()=>[e("default")]),_:1}),r(i,{label:"small"},{default:u(()=>[e("small")]),_:1})]),_:1},8,["modelValue"]),y("div",B,[y("div",h,[f,y("pre",null,m(o.value),1),r(p,{modelValue:o.value1,"onUpdate:modelValue":n[1]||(n[1]=c=>o.value1=c),type:"daterange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",size:o.size},null,8,["modelValue","size"])]),y("div",_,[x,y("pre",null,m(o.value2),1),r(p,{modelValue:o.value2,"onUpdate:modelValue":n[2]||(n[2]=c=>o.value2=c),type:"daterange","unlink-panels":"","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",shortcuts:o.shortcuts,size:o.size,min:"2021/01/01",max:new Date},null,8,["modelValue","shortcuts","size","max"])])])],64)}const{defineComponent:z}=E,{ref:C}=E;return{render:w,...z({setup(o,{expose:n}){n();const i=C("default"),t=C(""),p=C(""),D={size:i,value1:t,value2:p,shortcuts:[{text:"Last week",value:()=>{const d=new Date,a=new Date;return a.setTime(a.getTime()-3600*1e3*24*7),[a,d]}},{text:"Last month",value:()=>{const d=new Date,a=new Date;return a.setTime(a.getTime()-3600*1e3*24*30),[a,d]}},{text:"Last 3 months",value:()=>{const d=new Date,a=new Date;return a.setTime(a.getTime()-3600*1e3*24*90),[a,d]}}],ref:C};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}})}}()}}),Z=JSON.parse('{"title":"DatePicker \u65E5\u671F\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"components/date-picker.md","lastUpdated":1671186396000}');const G=S('<h1 id="datepicker-\u65E5\u671F\u9009\u62E9\u5668" tabindex="-1">DatePicker \u65E5\u671F\u9009\u62E9\u5668</h1><p>\u7528\u4E8E\u9009\u62E9\u6216\u8F93\u5165\u65E5\u671F</p><h2 id="\u9009\u62E9\u67D0\u4E00\u5929" tabindex="-1">\u9009\u62E9\u67D0\u4E00\u5929</h2><p>\u4EE5\u201D\u65E5\u201C\u4E3A\u57FA\u672C\u5355\u4F4D\uFF0C\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\u63A7\u4EF6 \u57FA\u672C\u5355\u4F4D\u7531 <code>type</code> \u5C5E\u6027\u6307\u5B9A\u3002 \u901A\u8FC7 <code>shortcuts</code> \u914D\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C</p><p>\u7981\u7528\u65E5\u671F\u901A\u8FC7 <code>min</code> \u4E0E <code>max</code>\u5C5E\u6027\u8BBE\u7F6E\uFF0C\u4F20\u5165\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>disabledDate</code> \u8BBE\u7F6E\uFF0C\u4F20\u5165\u51FD\u6570</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5982\u679C\u8BBE\u7F6E\u4E86 <code>disabled-date</code> \u5C5E\u6027\uFF0C<code>min</code>\u4E0E<code>max</code>\u5C5E\u6027\u5C06\u4E0D\u751F\u6548\u3002`</p></div>',6),O=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"el-radio-group"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"size"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"size control"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"large"'),s("span",{style:{color:"#C9D1D9"}},">large</"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"default"'),s("span",{style:{color:"#C9D1D9"}},">default</"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">small</"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"el-radio-group"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demo-date-picker"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"block"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demonstration"'),s("span",{style:{color:"#C9D1D9"}},">\u9ED8\u8BA4</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value1 }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value1"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"\u9009\u62E9\u4E00\u5929"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"size"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"min"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"2022-12-05"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"max"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"block"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demonstration"'),s("span",{style:{color:"#C9D1D9"}},">\u5177\u6709\u5FEB\u901F\u9009\u9879\u7684\u9009\u62E9\u5668</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value2 }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value2"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"\u9009\u62E9\u4E00\u5929"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"min"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"2022-12-05"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"disabled-date"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"disabledDate"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"shortcuts"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"shortcuts"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"size"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#A5D6FF"}},"'default'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"|"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'large'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"|"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'small'"),s("span",{style:{color:"#C9D1D9"}},">("),s("span",{style:{color:"#A5D6FF"}},"'default'"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value1"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"shortcuts"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		text: "),s("span",{style:{color:"#A5D6FF"}},"'\u4ECA\u5929'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		value: "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		text: "),s("span",{style:{color:"#A5D6FF"}},"'\u6628\u5929'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#D2A8FF"}},"value"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"date"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			date."),s("span",{style:{color:"#D2A8FF"}},"setTime"),s("span",{style:{color:"#C9D1D9"}},"(date."),s("span",{style:{color:"#D2A8FF"}},"getTime"),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"3600"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"24"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," date")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		text: "),s("span",{style:{color:"#A5D6FF"}},"'\u4E00\u661F\u671F\u524D'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#D2A8FF"}},"value"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"date"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			date."),s("span",{style:{color:"#D2A8FF"}},"setTime"),s("span",{style:{color:"#C9D1D9"}},"(date."),s("span",{style:{color:"#D2A8FF"}},"getTime"),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"3600"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"24"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"7"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," date")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"disabledDate"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"time"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"Date"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," time."),s("span",{style:{color:"#D2A8FF"}},"getTime"),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},">"),s("span",{style:{color:"#C9D1D9"}}," Date."),s("span",{style:{color:"#D2A8FF"}},"now"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"scoped"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"block"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"width"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"flex-wrap"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"wrap"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".block"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"30"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"text-align"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"solid"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--el-border-color"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".block:last-child"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"none"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".demonstration"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"block"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--el-text-color-secondary"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"font-size"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"14"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"margin-bottom"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"20"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"el-radio-group"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"size"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"size control"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"large"'),s("span",{style:{color:"#24292F"}},">large</"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"default"'),s("span",{style:{color:"#24292F"}},">default</"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">small</"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"el-radio-group"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demo-date-picker"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"block"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demonstration"'),s("span",{style:{color:"#24292F"}},">\u9ED8\u8BA4</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value1 }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value1"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u9009\u62E9\u4E00\u5929"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"size"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"min"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"2022-12-05"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"max"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"block"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demonstration"'),s("span",{style:{color:"#24292F"}},">\u5177\u6709\u5FEB\u901F\u9009\u9879\u7684\u9009\u62E9\u5668</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value2 }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value2"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u9009\u62E9\u4E00\u5929"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"min"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"2022-12-05"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"disabled-date"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"disabledDate"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"shortcuts"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"shortcuts"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"size"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#0A3069"}},"'default'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"|"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'large'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"|"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'small'"),s("span",{style:{color:"#24292F"}},">("),s("span",{style:{color:"#0A3069"}},"'default'"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value1"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"shortcuts"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		text: "),s("span",{style:{color:"#0A3069"}},"'\u4ECA\u5929'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		value: "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		text: "),s("span",{style:{color:"#0A3069"}},"'\u6628\u5929'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#8250DF"}},"value"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"date"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			date."),s("span",{style:{color:"#8250DF"}},"setTime"),s("span",{style:{color:"#24292F"}},"(date."),s("span",{style:{color:"#8250DF"}},"getTime"),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"3600"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"24"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," date")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		text: "),s("span",{style:{color:"#0A3069"}},"'\u4E00\u661F\u671F\u524D'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#8250DF"}},"value"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"date"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			date."),s("span",{style:{color:"#8250DF"}},"setTime"),s("span",{style:{color:"#24292F"}},"(date."),s("span",{style:{color:"#8250DF"}},"getTime"),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"3600"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"24"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"7"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," date")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"disabledDate"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"time"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"Date"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," time."),s("span",{style:{color:"#8250DF"}},"getTime"),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},">"),s("span",{style:{color:"#24292F"}}," Date."),s("span",{style:{color:"#8250DF"}},"now"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"scoped"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"block"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"flex-wrap"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"wrap"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".block"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"30"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"solid"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--el-border-color"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".block:last-child"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"none"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".demonstration"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"block"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--el-text-color-secondary"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"font-size"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"14"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"margin-bottom"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"20"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),W=s("h2",{id:"\u5176\u4ED6\u65E5\u671F\u5355\u4F4D",tabindex:"-1"},"\u5176\u4ED6\u65E5\u671F\u5355\u4F4D",-1),q=s("p",null,"\u901A\u8FC7\u6269\u5C55\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\uFF0C\u53EF\u4EE5\u9009\u62E9\u5468\u3001\u6708\u3001\u5E74\u6216\u591A\u4E2A\u65E5\u671F",-1),Y=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demo-date-picker"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"container"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"block"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demonstration"'),s("span",{style:{color:"#C9D1D9"}},">\u661F\u671F</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value1 }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"					"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value1"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"					"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"week"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"					:"),s("span",{style:{color:"#79C0FF"}},"max"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'Sun Dec 04 2022 00:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)'"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"					"),s("span",{style:{color:"#79C0FF"}},"placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"\u6700\u5927\u4E0D\u80FD\u8D85\u8FC72022\u7B2C50\u5468"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"block"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demonstration"'),s("span",{style:{color:"#C9D1D9"}},">\u6708</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value2 }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"jlg-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value2"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"month"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"min"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"2022/08/01"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"container"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"block"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demonstration"'),s("span",{style:{color:"#C9D1D9"}},">\u5E74</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value3 }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"jlg-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value3"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"year"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"min"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"2021/01/01"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"block"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demonstration"'),s("span",{style:{color:"#C9D1D9"}},">\u591A\u4E2A\u65E5\u671F</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value4 }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				<"),s("span",{style:{color:"#7EE787"}},"jlg-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value4"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"dates"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value1"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value3"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value4"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"scoped"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"block"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"width"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"flex-wrap"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"wrap"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".block"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"30"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"text-align"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"solid"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--el-border-color"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".block:last-child"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"none"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".container"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"solid"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--el-border-color"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".container"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".block"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"none"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".container"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".block:last-child"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-top"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"solid"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--el-border-color"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".container:last-child"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"none"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".demonstration"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"block"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--el-text-color-secondary"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"font-size"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"14"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"margin-bottom"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"20"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demo-date-picker"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"container"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"block"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demonstration"'),s("span",{style:{color:"#24292F"}},">\u661F\u671F</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value1 }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"					"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value1"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"					"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"week"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"					:"),s("span",{style:{color:"#0550AE"}},"max"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'Sun Dec 04 2022 00:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)'"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"					"),s("span",{style:{color:"#0550AE"}},"placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u6700\u5927\u4E0D\u80FD\u8D85\u8FC72022\u7B2C50\u5468"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"block"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demonstration"'),s("span",{style:{color:"#24292F"}},">\u6708</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value2 }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"jlg-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value2"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"month"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"min"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"2022/08/01"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"container"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"block"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demonstration"'),s("span",{style:{color:"#24292F"}},">\u5E74</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value3 }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"jlg-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value3"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"year"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"min"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"2021/01/01"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"block"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demonstration"'),s("span",{style:{color:"#24292F"}},">\u591A\u4E2A\u65E5\u671F</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value4 }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				<"),s("span",{style:{color:"#116329"}},"jlg-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value4"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"dates"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value1"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value3"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value4"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"scoped"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"block"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"flex-wrap"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"wrap"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".block"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"30"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"solid"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--el-border-color"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".block:last-child"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"none"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".container"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"solid"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--el-border-color"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".container"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".block"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"none"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".container"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".block:last-child"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-top"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"solid"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--el-border-color"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".container:last-child"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"none"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".demonstration"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"block"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--el-text-color-secondary"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"font-size"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"14"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"margin-bottom"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"20"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("h2",{id:"\u9009\u62E9\u4E00\u6BB5\u65F6\u95F4",tabindex:"-1"},"\u9009\u62E9\u4E00\u6BB5\u65F6\u95F4",-1),I=s("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u65F6\u95F4\u8303\u56F4",-1),R=s("p",null,"\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002",-1),J=s("p",null,[l("\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u6708\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),s("code",null,"unlink-panels"),l(" \u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")],-1),H=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"el-radio-group"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"size"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"size control"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"large"'),s("span",{style:{color:"#C9D1D9"}},">large</"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"default"'),s("span",{style:{color:"#C9D1D9"}},">default</"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">small</"),s("span",{style:{color:"#7EE787"}},"el-radio-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"el-radio-group"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demo-date-picker"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"block"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demonstration"'),s("span",{style:{color:"#C9D1D9"}},">Default</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value1"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"daterange"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"range-separator"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"To"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"start-placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Start date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"end-placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"End date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"size"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		<"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"block"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"demonstration"'),s("span",{style:{color:"#C9D1D9"}},">With quick options</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">{{ value2 }}</"),s("span",{style:{color:"#7EE787"}},"pre"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			<"),s("span",{style:{color:"#7EE787"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value2"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"daterange"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"unlink-panels")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"range-separator"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"To"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"start-placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"Start date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				"),s("span",{style:{color:"#79C0FF"}},"end-placeholder"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"End date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"shortcuts"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"shortcuts"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"				:"),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"size"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                "),s("span",{style:{color:"#79C0FF"}},"min"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"2021/01/01"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                :"),s("span",{style:{color:"#79C0FF"}},"max"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#A5D6FF"}},"'default'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"|"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'large'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"|"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'small'"),s("span",{style:{color:"#C9D1D9"}},">("),s("span",{style:{color:"#A5D6FF"}},"'default'"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value1"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"shortcuts"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		text: "),s("span",{style:{color:"#A5D6FF"}},"'Last week'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#D2A8FF"}},"value"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"end"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"start"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			start."),s("span",{style:{color:"#D2A8FF"}},"setTime"),s("span",{style:{color:"#C9D1D9"}},"(start."),s("span",{style:{color:"#D2A8FF"}},"getTime"),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"3600"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"24"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"7"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," [start, end]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		text: "),s("span",{style:{color:"#A5D6FF"}},"'Last month'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#D2A8FF"}},"value"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"end"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"start"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			start."),s("span",{style:{color:"#D2A8FF"}},"setTime"),s("span",{style:{color:"#C9D1D9"}},"(start."),s("span",{style:{color:"#D2A8FF"}},"getTime"),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"3600"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"24"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"30"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," [start, end]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		text: "),s("span",{style:{color:"#A5D6FF"}},"'Last 3 months'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		"),s("span",{style:{color:"#D2A8FF"}},"value"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"end"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"start"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Date"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			start."),s("span",{style:{color:"#D2A8FF"}},"setTime"),s("span",{style:{color:"#C9D1D9"}},"(start."),s("span",{style:{color:"#D2A8FF"}},"getTime"),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"3600"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"24"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"90"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"			"),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," [start, end]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"scoped"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"block"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"width"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"flex-wrap"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"wrap"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".block"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"30"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"text-align"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"solid"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--el-border-color"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".block:last-child"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"border-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"none"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".demo-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".demonstration"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"block"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--el-text-color-secondary"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"font-size"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"14"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"	"),s("span",{style:{color:"#79C0FF"}},"margin-bottom"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"20"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"el-radio-group"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"size"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"size control"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"large"'),s("span",{style:{color:"#24292F"}},">large</"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"default"'),s("span",{style:{color:"#24292F"}},">default</"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">small</"),s("span",{style:{color:"#116329"}},"el-radio-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"el-radio-group"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demo-date-picker"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"block"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demonstration"'),s("span",{style:{color:"#24292F"}},">Default</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value1"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"daterange"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"range-separator"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"To"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"start-placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Start date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"end-placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"End date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"size"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		<"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"block"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"demonstration"'),s("span",{style:{color:"#24292F"}},">With quick options</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">{{ value2 }}</"),s("span",{style:{color:"#116329"}},"pre"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			<"),s("span",{style:{color:"#116329"}},"jlg-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value2"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"daterange"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"unlink-panels")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"range-separator"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"To"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"start-placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"Start date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				"),s("span",{style:{color:"#0550AE"}},"end-placeholder"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"End date"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"shortcuts"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"shortcuts"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"				:"),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"size"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                "),s("span",{style:{color:"#0550AE"}},"min"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"2021/01/01"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                :"),s("span",{style:{color:"#0550AE"}},"max"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#0A3069"}},"'default'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"|"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'large'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"|"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'small'"),s("span",{style:{color:"#24292F"}},">("),s("span",{style:{color:"#0A3069"}},"'default'"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value1"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"shortcuts"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		text: "),s("span",{style:{color:"#0A3069"}},"'Last week'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#8250DF"}},"value"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"end"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"start"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			start."),s("span",{style:{color:"#8250DF"}},"setTime"),s("span",{style:{color:"#24292F"}},"(start."),s("span",{style:{color:"#8250DF"}},"getTime"),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"3600"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"24"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"7"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," [start, end]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		text: "),s("span",{style:{color:"#0A3069"}},"'Last month'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#8250DF"}},"value"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"end"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"start"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			start."),s("span",{style:{color:"#8250DF"}},"setTime"),s("span",{style:{color:"#24292F"}},"(start."),s("span",{style:{color:"#8250DF"}},"getTime"),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"3600"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"24"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"30"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," [start, end]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		text: "),s("span",{style:{color:"#0A3069"}},"'Last 3 months'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		"),s("span",{style:{color:"#8250DF"}},"value"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"end"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"start"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Date"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			start."),s("span",{style:{color:"#8250DF"}},"setTime"),s("span",{style:{color:"#24292F"}},"(start."),s("span",{style:{color:"#8250DF"}},"getTime"),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"3600"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"24"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"90"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"			"),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," [start, end]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"scoped"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"block"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"flex-wrap"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"wrap"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".block"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"30"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"solid"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--el-border-color"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".block:last-child"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"border-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"none"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".demo-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".demonstration"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"block"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--el-text-color-secondary"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"font-size"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"14"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"	"),s("span",{style:{color:"#0550AE"}},"margin-bottom"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"20"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),K=S('<h2 id="\u56FD\u9645\u5316" tabindex="-1">\u56FD\u9645\u5316</h2><p>\u7531\u4E8E Element Plus \u7684\u9ED8\u8BA4\u8BED\u8A00\u4E3A\u82F1\u8BED\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u5B83\u7684\u8BED\u8A00\uFF0C\u8BF7\u53C2\u8003<a href="https://crowdin.com/zh-CN/guide/i18n" target="_blank" rel="noreferrer">\u56FD\u9645\u5316</a>\u6587\u6863\u3002</p><p>\u8981\u6CE8\u610F\u7684\u662F\uFF1A\u65E5\u671F\u76F8\u5173\u7684\u6587\u5B57\uFF08\u6708\u4EFD\uFF0C\u6BCF\u4E00\u5468\u7684\u7B2C\u4E00\u5929\u7B49\u7B49\uFF09\u4E5F\u90FD\u662F\u901A\u8FC7\u56FD\u9645\u5316\u6765\u914D\u7F6E\u7684\u3002</p><h2 id="props" tabindex="-1">Props</h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5982\u679C\u5B83\u662F\u6570\u7EC4\uFF0C\u957F\u5EA6\u5E94\u8BE5\u662F 2</td><td>Date / number / string / Array</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u53EA\u8BFB</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>default</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>true</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>YYYY-MM-DD</td></tr><tr><td>popper-class</td><td>DatePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td></td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date / [Date, Date]</td><td></td></tr><tr><td>default-time</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u9009\u4E2D\u65E5\u671F\u6240\u4F7F\u7528\u7684\u5F53\u65E5\u5185\u5177\u4F53\u65F6\u523B</td><td>Date / [Date, Date]</td><td></td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002 \u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td></td></tr><tr><td>id</td><td>\u7B49\u4EF7\u4E8E\u539F\u751F <code>id</code> \u5C5E\u6027</td><td>string / [string, string]</td><td></td></tr><tr><td>name</td><td>\u7B49\u4EF7\u4E8E\u539F\u751F <code>name</code> \u5C5E\u6027</td><td>string</td><td></td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td></td></tr><tr><td>prefix-icon</td><td>\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807</td><td></td><td></td></tr><tr><td>clear-icon</td><td>\u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807</td><td></td><td></td></tr><tr><td>validate-event</td><td>\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>true</td></tr><tr><td>disabled-date</td><td>\u4E00\u4E2A\u7528\u6765\u5224\u65AD\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u7981\u7528\u7684\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A Date \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u3002 \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A Boolean \u503C\u3002</td><td>function</td><td>\u2014</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td></td><td></td></tr><tr><td>cell-class-name</td><td>\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>Function(Date)</td><td>\u2014</td></tr><tr><td>teleported</td><td>\u662F\u5426\u5C06 date-picker \u7684\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20</td><td>boolean</td><td>true</td></tr></tbody></table><h2 id="el-date-picker-\u4E8B\u4EF6" tabindex="-1">el-date-picker \u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td><code>(val: typeof v-model)</code></td></tr><tr><td>blur</td><td>\u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td><code>(e: FocusEvent)</code></td></tr><tr><td>focus</td><td>\u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td><code>(e: FocusEvent)</code></td></tr><tr><td>calendar-change</td><td>\u5982\u679C\u7528\u6237\u6CA1\u6709\u9009\u62E9\u65E5\u671F\uFF0C\u90A3\u9ED8\u8BA4\u5C55\u793A\u5F53\u524D\u65E5\u7684\u6708\u4EFD\u3002 \u4F60\u53EF\u4EE5\u4F7F\u7528 <code>default-value</code> \u6765\u8BBE\u7F6E\u6210\u5176\u4ED6\u7684\u65E5\u671F\u3002</td><td><code>(val: [Date, Date])</code></td></tr><tr><td>panel-change</td><td>\u5F53\u65E5\u671F\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1\u3002</td><td><code>(date, mode, view)</code></td></tr><tr><td>visible-change</td><td>\u5F53 DatePicker \u7684\u4E0B\u62C9\u5217\u8868\u51FA\u73B0/\u6D88\u5931\u65F6\u89E6\u53D1</td><td><code>(visibility: boolean)</code></td></tr></tbody></table><h2 id="el-date-picker-\u65B9\u6CD5" tabindex="-1">el-date-picker \u65B9\u6CD5</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr><tr><td>handleOpen</td><td>\u6253\u5F00\u65E5\u671F\u9009\u62E9\u5668\u5F39\u7A97</td><td>\u2014</td></tr><tr><td>handleClose</td><td>\u5173\u95ED\u65E5\u671F\u9009\u62E9\u5668\u5F39\u7A97</td><td>\u2014</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u8BE5\u7EC4\u4EF6\u7684 <code>ref</code> \u6307\u5411\u7684\u662F <code>jlg-date-picker</code> \uFF0C\u800C\u4E0D\u662F<code>el-date-picker</code>,\u8981\u83B7\u53D6<code>el-date-picker</code>\u7684<code>ref</code>\uFF0C\u9700\u8981\u4F7F\u7528\u7EC4\u4EF6<code>epRef</code>\u5C5E\u6027\u3002</p></div>',10);function Q(e,F,u,r,y,m){const v=T("render-demo-0"),A=T("demo"),b=T("render-demo-1"),B=T("render-demo-2");return P(),L("div",null,[G,g(A,{customClass:"undefined",sourceCode:`<template>
	<el-radio-group v-model="size" label="size control" size="small">
		<el-radio-button label="large">large</el-radio-button>
		<el-radio-button label="default">default</el-radio-button>
		<el-radio-button label="small">small</el-radio-button>
	</el-radio-group>
	<div class="demo-date-picker">
		<div class="block">
			<span class="demonstration">\u9ED8\u8BA4</span>
			<pre>{{ value1 }}</pre>
			<jlg-date-picker
				v-model="value1"
				type="date"
				placeholder="\u9009\u62E9\u4E00\u5929"
				:size="size"
				min="2022-12-05"
				:max="new Date()"
			/>
		</div>
		<div class="block">
			<span class="demonstration">\u5177\u6709\u5FEB\u901F\u9009\u9879\u7684\u9009\u62E9\u5668</span>
			<pre>{{ value2 }}</pre>
			<jlg-date-picker
				v-model="value2"
				type="date"
				placeholder="\u9009\u62E9\u4E00\u5929"
				min="2022-12-05"
				:disabled-date="disabledDate"
				:shortcuts="shortcuts"
				:size="size"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
	{
		text: '\u4ECA\u5929',
		value: new Date()
	},
	{
		text: '\u6628\u5929',
		value: () => {
			const date = new Date()
			date.setTime(date.getTime() - 3600 * 1000 * 24)
			return date
		}
	},
	{
		text: '\u4E00\u661F\u671F\u524D',
		value: () => {
			const date = new Date()
			date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
			return date
		}
	}
]

const disabledDate = (time: Date) => {
	return time.getTime() > Date.now()
}
<\/script>

<style scoped>
.demo-date-picker {
	display: block;
	width: 100%;
	padding: 0;
	flex-wrap: wrap;
}

.demo-date-picker .block {
	padding: 30px 0;
	text-align: center;
	border-right: solid 1px var(--el-border-color);
	flex: 1;
}

.demo-date-picker .block:last-child {
	border-right: none;
}

.demo-date-picker .demonstration {
	display: block;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	margin-bottom: 20px;
}
</style>
`},{highlight:k(()=>[O]),default:k(()=>[g(v)]),_:1}),W,q,g(A,{customClass:"undefined",sourceCode:`<template>
	<div class="demo-date-picker">
		<div class="container">
			<div class="block">
				<span class="demonstration">\u661F\u671F</span>
				<pre>{{ value1 }}</pre>
				<jlg-date-picker
					v-model="value1"
					type="week"
					:max="new Date('Sun Dec 04 2022 00:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)')"
					placeholder="\u6700\u5927\u4E0D\u80FD\u8D85\u8FC72022\u7B2C50\u5468"
				/>
			</div>
			<div class="block">
				<span class="demonstration">\u6708</span>
				<pre>{{ value2 }}</pre>
				<jlg-date-picker v-model="value2" type="month" min="2022/08/01" />
			</div>
		</div>
		<div class="container">
			<div class="block">
				<span class="demonstration">\u5E74</span>
				<pre>{{ value3 }}</pre>
				<jlg-date-picker v-model="value3" type="year" min="2021/01/01" />
			</div>
			<div class="block">
				<span class="demonstration">\u591A\u4E2A\u65E5\u671F</span>
				<pre>{{ value4 }}</pre>
				<jlg-date-picker v-model="value4" type="dates" />
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
<\/script>
<style scoped>
.demo-date-picker {
	display: block;
	width: 100%;
	padding: 0;
	flex-wrap: wrap;
}

.demo-date-picker .block {
	padding: 30px 0;
	text-align: center;
	border-right: solid 1px var(--el-border-color);
	flex: 1;
}
.demo-date-picker .block:last-child {
	border-right: none;
}

.demo-date-picker .container {
	flex: 1;
	border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
	border-right: none;
}
.demo-date-picker .container .block:last-child {
	border-top: solid 1px var(--el-border-color);
}
.demo-date-picker .container:last-child {
	border-right: none;
}

.demo-date-picker .demonstration {
	display: block;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	margin-bottom: 20px;
}
</style>
`},{highlight:k(()=>[Y]),default:k(()=>[g(b)]),_:1}),$,I,R,J,g(A,{customClass:"undefined",sourceCode:`<template>
	<el-radio-group v-model="size" label="size control" size="small">
		<el-radio-button label="large">large</el-radio-button>
		<el-radio-button label="default">default</el-radio-button>
		<el-radio-button label="small">small</el-radio-button>
	</el-radio-group>
	<div class="demo-date-picker">
		<div class="block">
			<span class="demonstration">Default</span>
			<pre>{{ value }}</pre>
			<jlg-date-picker
				v-model="value1"
				type="daterange"
				range-separator="To"
				start-placeholder="Start date"
				end-placeholder="End date"
				:size="size"
			/>
		</div>
		<div class="block">
			<span class="demonstration">With quick options</span>
			<pre>{{ value2 }}</pre>
			<jlg-date-picker
				v-model="value2"
				type="daterange"
				unlink-panels
				range-separator="To"
				start-placeholder="Start date"
				end-placeholder="End date"
				:shortcuts="shortcuts"
				:size="size"
                min="2021/01/01"
                :max="new Date()"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
	{
		text: 'Last week',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
			return [start, end]
		}
	},
	{
		text: 'Last month',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
			return [start, end]
		}
	},
	{
		text: 'Last 3 months',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
			return [start, end]
		}
	}
]
<\/script>

<style scoped>
.demo-date-picker {
	display: block;
	width: 100%;
	padding: 0;
	flex-wrap: wrap;
}

.demo-date-picker .block {
	padding: 30px 0;
	text-align: center;
	border-right: solid 1px var(--el-border-color);
	flex: 1;
}

.demo-date-picker .block:last-child {
	border-right: none;
}

.demo-date-picker .demonstration {
	display: block;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	margin-bottom: 20px;
}
</style>
`},{highlight:k(()=>[H]),default:k(()=>[g(B)]),_:1}),K])}const ss=N(M,[["render",Q]]);export{Z as __pageData,ss as default};
