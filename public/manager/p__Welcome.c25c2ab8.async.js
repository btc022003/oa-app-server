"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[185],{63374:function(W,h){var d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};h.Z=d},48491:function(W,h,d){var z=d(48063),$=d(50959),C=d(63374),o=d(38782),P=function(T,v){return $.createElement(o.Z,(0,z.Z)({},T,{ref:v,icon:C.Z}))};h.Z=$.forwardRef(P)},25589:function(W,h,d){d.r(h),d.d(h,{default:function(){return me}});var z=d(77097),$=d(11805),C=d(57644),o=d(50959),P=d(82187),S=d.n(P),T=d(87017),v=d(70785),U=d(6029),X=d(12100),Q=d(3545),V=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},w=e=>{var{prefixCls:r,className:t,hoverable:a=!0}=e,n=V(e,["prefixCls","className","hoverable"]);const{getPrefixCls:l}=o.useContext(v.E_),g=l("card",r),m=S()(`${g}-grid`,t,{[`${g}-grid-hoverable`]:a});return o.createElement("div",Object.assign({},n,{className:m}))},i=d(63504),b=d(96654),J=d(23758),Y=d(16585);const q=e=>{const{antCls:r,componentCls:t,headerHeight:a,cardPaddingBase:n,tabsMarginBottom:l}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${(0,i.bf)(n)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${(0,i.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${(0,i.bf)(e.borderRadiusLG)} ${(0,i.bf)(e.borderRadiusLG)} 0 0`},(0,b.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},b.vS),{[`
          > ${t}-typography,
          > ${t}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${r}-tabs-top`]:{clear:"both",marginBottom:l,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${(0,i.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},_=e=>{const{cardPaddingBase:r,colorBorderSecondary:t,cardShadow:a,lineWidth:n}=e;return{width:"33.33%",padding:r,border:0,borderRadius:0,boxShadow:`
      ${(0,i.bf)(n)} 0 0 0 ${t},
      0 ${(0,i.bf)(n)} 0 0 ${t},
      ${(0,i.bf)(n)} ${(0,i.bf)(n)} 0 0 ${t},
      ${(0,i.bf)(n)} 0 0 0 ${t} inset,
      0 ${(0,i.bf)(n)} 0 0 ${t} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},k=e=>{const{componentCls:r,iconCls:t,actionsLiMargin:a,cardActionsIconSize:n,colorBorderSecondary:l,actionsBg:g}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:g,borderTop:`${(0,i.bf)(e.lineWidth)} ${e.lineType} ${l}`,display:"flex",borderRadius:`0 0 ${(0,i.bf)(e.borderRadiusLG)} ${(0,i.bf)(e.borderRadiusLG)}`},(0,b.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${r}-btn), > ${t}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:(0,i.bf)(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${t}`]:{fontSize:n,lineHeight:(0,i.bf)(e.calc(n).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${(0,i.bf)(e.lineWidth)} ${e.lineType} ${l}`}}})},ee=e=>Object.assign(Object.assign({margin:`${(0,i.bf)(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},(0,b.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},b.vS),"&-description":{color:e.colorTextDescription}}),te=e=>{const{componentCls:r,cardPaddingBase:t,colorFillAlter:a}=e;return{[`${r}-head`]:{padding:`0 ${(0,i.bf)(t)}`,background:a,"&-title":{fontSize:e.fontSize}},[`${r}-body`]:{padding:`${(0,i.bf)(e.padding)} ${(0,i.bf)(t)}`}}},ae=e=>{const{componentCls:r}=e;return{overflow:"hidden",[`${r}-body`]:{userSelect:"none"}}},re=e=>{const{antCls:r,componentCls:t,cardShadow:a,cardHeadPadding:n,colorBorderSecondary:l,boxShadowTertiary:g,cardPaddingBase:m,extraColor:c}=e;return{[t]:Object.assign(Object.assign({},(0,b.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:g},[`${t}-head`]:q(e),[`${t}-extra`]:{marginInlineStart:"auto",color:c,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:m,borderRadius:` 0 0 ${(0,i.bf)(e.borderRadiusLG)} ${(0,i.bf)(e.borderRadiusLG)}`},(0,b.dF)()),[`${t}-grid`]:_(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${r}-image-mask`]:{borderRadius:`${(0,i.bf)(e.borderRadiusLG)} ${(0,i.bf)(e.borderRadiusLG)} 0 0`}},[`${t}-actions`]:k(e),[`${t}-meta`]:ee(e)}),[`${t}-bordered`]:{border:`${(0,i.bf)(e.lineWidth)} ${e.lineType} ${l}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:a}},[`${t}-contain-grid`]:{borderRadius:`${(0,i.bf)(e.borderRadiusLG)} ${(0,i.bf)(e.borderRadiusLG)} 0 0 `,[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:n}}},[`${t}-type-inner`]:te(e),[`${t}-loading`]:ae(e),[`${t}-rtl`]:{direction:"rtl"}}},ne=e=>{const{componentCls:r,cardPaddingSM:t,headerHeightSM:a,headerFontSizeSM:n}=e;return{[`${r}-small`]:{[`> ${r}-head`]:{minHeight:a,padding:`0 ${(0,i.bf)(t)}`,fontSize:n,[`> ${r}-head-wrapper`]:{[`> ${r}-extra`]:{fontSize:e.fontSize}}},[`> ${r}-body`]:{padding:t}},[`${r}-small${r}-contain-tabs`]:{[`> ${r}-head`]:{[`${r}-head-title, ${r}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},ie=e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText});var oe=(0,J.I$)("Card",e=>{const r=(0,Y.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[re(r),ne(r)]},ie),H=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const de=e=>{const{prefixCls:r,actions:t=[]}=e;return o.createElement("ul",{className:`${r}-actions`},t.map((a,n)=>{const l=`action-${n}`;return o.createElement("li",{style:{width:`${100/t.length}%`},key:l},o.createElement("span",null,a))}))};var le=o.forwardRef((e,r)=>{const{prefixCls:t,className:a,rootClassName:n,style:l,extra:g,headStyle:m={},bodyStyle:c={},title:y,loading:F,bordered:A=!0,size:B,type:O,cover:L,actions:R,tabList:D,children:j,activeTabKey:N,defaultActiveTabKey:fe,tabBarExtraContent:be,hoverable:pe,tabProps:he={}}=e,Ee=H(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:ve,direction:ye,card:E}=o.useContext(v.E_),xe=p=>{var f;(f=e.onTabChange)===null||f===void 0||f.call(e,p)},$e=o.useMemo(()=>{let p=!1;return o.Children.forEach(j,f=>{f&&f.type&&f.type===w&&(p=!0)}),p},[j]),s=ve("card",t),[Ce,Se,Fe]=oe(s),Ae=o.createElement(X.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},j),G=N!==void 0,Be=Object.assign(Object.assign({},he),{[G?"activeKey":"defaultActiveKey"]:G?N:fe,tabBarExtraContent:be});let K;const x=(0,U.Z)(B),Oe=!x||x==="default"?"large":x,Z=D?o.createElement(Q.Z,Object.assign({size:Oe},Be,{className:`${s}-head-tabs`,onChange:xe,items:D.map(p=>{var{tab:f}=p,Ie=H(p,["tab"]);return Object.assign({label:f},Ie)})})):null;(y||g||Z)&&(K=o.createElement("div",{className:`${s}-head`,style:m},o.createElement("div",{className:`${s}-head-wrapper`},y&&o.createElement("div",{className:`${s}-head-title`},y),g&&o.createElement("div",{className:`${s}-extra`},g)),Z));const De=L?o.createElement("div",{className:`${s}-cover`},L):null,je=o.createElement("div",{className:`${s}-body`,style:c},F?Ae:j),ze=R&&R.length?o.createElement(de,{prefixCls:s,actions:R}):null,Pe=(0,T.Z)(Ee,["onTabChange"]),Te=S()(s,E==null?void 0:E.className,{[`${s}-loading`]:F,[`${s}-bordered`]:A,[`${s}-hoverable`]:pe,[`${s}-contain-grid`]:$e,[`${s}-contain-tabs`]:D&&D.length,[`${s}-${x}`]:x,[`${s}-type-${O}`]:!!O,[`${s}-rtl`]:ye==="rtl"},a,n,Se,Fe),Me=Object.assign(Object.assign({},E==null?void 0:E.style),l);return Ce(o.createElement("div",Object.assign({ref:r},Pe,{className:Te,style:Me}),K,De,je,ze))}),se=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},ue=e=>{const{prefixCls:r,className:t,avatar:a,title:n,description:l}=e,g=se(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:m}=o.useContext(v.E_),c=m("card",r),y=S()(`${c}-meta`,t),F=a?o.createElement("div",{className:`${c}-meta-avatar`},a):null,A=n?o.createElement("div",{className:`${c}-meta-title`},n):null,B=l?o.createElement("div",{className:`${c}-meta-description`},l):null,O=A||B?o.createElement("div",{className:`${c}-meta-detail`},A,B):null;return o.createElement("div",Object.assign({},g,{className:y}),F,O)};const M=le;M.Grid=w,M.Meta=ue;var ce=M,u=d(11527),I=function(r){var t=r.title,a=r.href,n=r.index,l=r.desc,g=C.Z.useToken,m=g(),c=m.token;return(0,u.jsxs)("div",{style:{backgroundColor:c.colorBgContainer,boxShadow:c.boxShadow,borderRadius:"8px",fontSize:"14px",color:c.colorTextSecondary,lineHeight:"22px",padding:"16px 19px",minWidth:"220px",flex:1},children:[(0,u.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,u.jsx)("div",{style:{width:48,height:48,lineHeight:"22px",backgroundSize:"100%",textAlign:"center",padding:"8px 16px 16px 12px",color:"#FFF",fontWeight:"bold",backgroundImage:"url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')"},children:n}),(0,u.jsx)("div",{style:{fontSize:"16px",color:c.colorText,paddingBottom:8},children:t})]}),(0,u.jsx)("div",{style:{fontSize:"14px",color:c.colorTextSecondary,textAlign:"justify",lineHeight:"22px",marginBottom:8},children:l}),(0,u.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer",children:["\u4E86\u89E3\u66F4\u591A ",">"]})]})},ge=function(){var r,t=C.Z.useToken(),a=t.token,n=(0,$.useModel)("@@initialState"),l=n.initialState;return(0,u.jsx)(z._z,{children:(0,u.jsx)(ce,{style:{borderRadius:8},bodyStyle:{backgroundImage:(l==null||(r=l.settings)===null||r===void 0?void 0:r.navTheme)==="realDark"?"background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)":"background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)"},children:(0,u.jsxs)("div",{style:{backgroundPosition:"100% -30%",backgroundRepeat:"no-repeat",backgroundSize:"274px auto",backgroundImage:"url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')"},children:[(0,u.jsx)("div",{style:{fontSize:"20px",color:a.colorTextHeading},children:"\u6B22\u8FCE\u4F7F\u7528 Ant Design Pro"}),(0,u.jsx)("p",{style:{fontSize:"14px",color:a.colorTextSecondary,lineHeight:"22px",marginTop:16,marginBottom:32,width:"65%"},children:"Ant Design Pro \u662F\u4E00\u4E2A\u6574\u5408\u4E86 umi\uFF0CAnt Design \u548C ProComponents \u7684\u811A\u624B\u67B6\u65B9\u6848\u3002\u81F4\u529B\u4E8E\u5728\u8BBE\u8BA1\u89C4\u8303\u548C\u57FA\u7840\u7EC4\u4EF6\u7684\u57FA\u7840\u4E0A\uFF0C\u7EE7\u7EED\u5411\u4E0A\u6784\u5EFA\uFF0C\u63D0\u70BC\u51FA\u5178\u578B\u6A21\u677F/\u4E1A\u52A1\u7EC4\u4EF6/\u914D\u5957\u8BBE\u8BA1\u8D44\u6E90\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u8BBE\u8BA1\u7814\u53D1\u8FC7\u7A0B\u4E2D\u7684\u300E\u7528\u6237\u300F\u548C\u300E\u8BBE\u8BA1\u8005\u300F\u7684\u4F53\u9A8C\u3002"}),(0,u.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:[(0,u.jsx)(I,{index:1,href:"https://umijs.org/docs/introduce/introduce",title:"\u4E86\u89E3 umi",desc:"umi \u662F\u4E00\u4E2A\u53EF\u6269\u5C55\u7684\u4F01\u4E1A\u7EA7\u524D\u7AEF\u5E94\u7528\u6846\u67B6,umi \u4EE5\u8DEF\u7531\u4E3A\u57FA\u7840\u7684\uFF0C\u540C\u65F6\u652F\u6301\u914D\u7F6E\u5F0F\u8DEF\u7531\u548C\u7EA6\u5B9A\u5F0F\u8DEF\u7531\uFF0C\u4FDD\u8BC1\u8DEF\u7531\u7684\u529F\u80FD\u5B8C\u5907\uFF0C\u5E76\u4EE5\u6B64\u8FDB\u884C\u529F\u80FD\u6269\u5C55\u3002"}),(0,u.jsx)(I,{index:2,title:"\u4E86\u89E3 ant design",href:"https://ant.design",desc:"antd \u662F\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u4E3B\u8981\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"}),(0,u.jsx)(I,{index:3,title:"\u4E86\u89E3 Pro Components",href:"https://procomponents.ant.design",desc:"ProComponents \u662F\u4E00\u4E2A\u57FA\u4E8E Ant Design \u505A\u4E86\u66F4\u9AD8\u62BD\u8C61\u7684\u6A21\u677F\u7EC4\u4EF6\uFF0C\u4EE5 \u4E00\u4E2A\u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u9875\u9762\u4E3A\u5F00\u53D1\u7406\u5FF5\uFF0C\u4E3A\u4E2D\u540E\u53F0\u5F00\u53D1\u5E26\u6765\u66F4\u597D\u7684\u4F53\u9A8C\u3002"})]})]})})})},me=ge}}]);