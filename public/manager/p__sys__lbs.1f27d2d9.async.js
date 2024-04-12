"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[537],{23777:function(B,P,e){var o=e(28730),t=e(50959),v=e(1688),a=e(69164),i=function(E,d){return t.createElement(a.Z,(0,o.Z)((0,o.Z)({},E),{},{ref:d,icon:v.Z}))};i.displayName="DeleteOutlined",P.Z=t.forwardRef(i)},83011:function(B,P,e){var o=e(28730),t=e(50959),v=e(8941),a=e(69164),i=function(E,d){return t.createElement(a.Z,(0,o.Z)((0,o.Z)({},E),{},{ref:d,icon:v.Z}))};i.displayName="EditOutlined",P.Z=t.forwardRef(i)},1442:function(B,P,e){var o=e(28730),t=e(50959),v=e(63374),a=e(69164),i=function(E,d){return t.createElement(a.Z,(0,o.Z)((0,o.Z)({},E),{},{ref:d,icon:v.Z}))};i.displayName="PlusOutlined",P.Z=t.forwardRef(i)},95306:function(B,P,e){var o=e(28730),t=e(57596),v=e(50959),a=e(53208),i=e(11527),p=["fieldProps","min","proFieldProps","max"],E=function(s,x){var R=s.fieldProps,f=s.min,y=s.proFieldProps,W=s.max,K=(0,t.Z)(s,p);return(0,i.jsx)(a.Z,(0,o.Z)({valueType:"digit",fieldProps:(0,o.Z)({min:f,max:W},R),ref:x,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:y},K))},d=v.forwardRef(E);P.Z=d},14123:function(B,P,e){var o=e(28730),t=e(57596),v=e(50959),a=e(53208),i=e(11527),p=["fieldProps","proFieldProps"],E=function(c,s){var x=c.fieldProps,R=c.proFieldProps,f=(0,t.Z)(c,p);return(0,i.jsx)(a.Z,(0,o.Z)({ref:s,valueType:"textarea",fieldProps:x,proFieldProps:R},f))};P.Z=v.forwardRef(E)},1536:function(B,P,e){var o=e(18534),t=e(28730),v=e(57596),a=e(65589),i=e(28955),p=e(42402),E=e(71770),d=e(50959),c=e(53208),s=e(11527),x=["fieldProps","proFieldProps"],R=["fieldProps","proFieldProps"],f="text",y=function(n){var r=n.fieldProps,O=n.proFieldProps,h=(0,v.Z)(n,x);return(0,s.jsx)(c.Z,(0,t.Z)({valueType:f,fieldProps:r,filedConfig:{valueType:f},proFieldProps:O},h))},W=function(n){var r=(0,a.Z)(n.open||!1,{value:n.open,onChange:n.onOpenChange}),O=(0,o.Z)(r,2),h=O[0],D=O[1];return(0,s.jsx)(i.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(A){var M,N=A.getFieldValue(n.name||[]);return(0,s.jsx)(p.Z,(0,t.Z)((0,t.Z)({getPopupContainer:function(m){return m&&m.parentNode?m.parentNode:m},onOpenChange:D,content:(0,s.jsxs)("div",{style:{padding:"4px 0"},children:[(M=n.statusRender)===null||M===void 0?void 0:M.call(n,N),n.strengthText?(0,s.jsx)("div",{style:{marginTop:10},children:(0,s.jsx)("span",{children:n.strengthText})}):null]}),overlayStyle:{width:240},placement:"right"},n.popoverProps),{},{open:h,children:n.children}))}})},K=function(n){var r=n.fieldProps,O=n.proFieldProps,h=(0,v.Z)(n,R),D=(0,d.useState)(!1),$=(0,o.Z)(D,2),A=$[0],M=$[1];return r!=null&&r.statusRender&&h.name?(0,s.jsx)(W,{name:h.name,statusRender:r==null?void 0:r.statusRender,popoverProps:r==null?void 0:r.popoverProps,strengthText:r==null?void 0:r.strengthText,open:A,onOpenChange:M,children:(0,s.jsx)(c.Z,(0,t.Z)({valueType:"password",fieldProps:(0,t.Z)((0,t.Z)({},(0,E.Z)(r,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(S){var m;r==null||(m=r.onBlur)===null||m===void 0||m.call(r,S),M(!1)},onClick:function(S){var m;r==null||(m=r.onClick)===null||m===void 0||m.call(r,S),M(!0)}}),proFieldProps:O,filedConfig:{valueType:f}},h))}):(0,s.jsx)(c.Z,(0,t.Z)({valueType:"password",fieldProps:r,proFieldProps:O,filedConfig:{valueType:f}},h))},L=y;L.Password=K,L.displayName="ProFormComponent",P.Z=L},95739:function(B,P,e){e.r(P),e.d(P,{default:function(){return ee}});var o=e(26068),t=e.n(o),v=e(90228),a=e.n(v),i=e(87999),p=e.n(i),E=e(48305),d=e.n(E),c=e(50959),s=e(54885),x=e(77097),R=e(56249),f=e(25283),y=e(1536),W=e(95306),K=e(14123),L=e(14292),U=e(53739),n=e(55641),r=e(23777),O=e(83011),h=e(1442),D=e(11805);function $(_){return A.apply(this,arguments)}function A(){return A=p()(a()().mark(function _(F){var j;return a()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,(0,D.request)("/api/v1/check_positions",{method:"GET",params:{page:F.current,per:F.pageSize}});case 2:return j=I.sent,I.abrupt("return",{data:j.data.list,success:!0,total:j.data.total});case 4:case"end":return I.stop()}},_)})),A.apply(this,arguments)}function M(_){return(0,D.request)("/api/v1/check_positions",{method:"POST",data:_})}function N(_,F){return(0,D.request)("/api/v1/check_positions/"+_,{method:"PATCH",data:F})}function S(_){return(0,D.request)("/api/v1/check_positions/"+_,{method:"DELETE"})}function m(_){return(0,D.request)("/api/v1/check_positions/remove_many",{method:"DELETE",params:{ids:_}})}var l=e(11527);function q(){var _=(0,c.useState)(!1),F=d()(_,2),j=F[0],z=F[1],I=(0,c.useState)(""),Y=d()(I,2),J=Y[0],Q=Y[1],re=(0,c.useState)([]),X=d()(re,2),w=X[0],k=X[1],G=(0,c.useRef)(),te=s.A.useForm(),ne=d()(te,1),H=ne[0],ae=[{title:"\u5E8F\u53F7",hideInSearch:!0,render:function(T,u,g){return g+1}},{title:"\u540D\u5B57",hideInSearch:!0,dataIndex:"name",fieldProps:{name:"name"}},{title:"lat",hideInSearch:!0,dataIndex:"lat"},{title:"lng",hideInSearch:!0,dataIndex:"lng"},{title:"\u5907\u6CE8",hideInSearch:!0,dataIndex:"remarks"},{title:"\u64CD\u4F5C",hideInSearch:!0,width:100,render:function(T,u){return(0,l.jsxs)(L.Z,{children:[(0,l.jsx)(U.Z,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664?",onConfirm:p()(a()().mark(function g(){var C;return a()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,S(u.id);case 2:(C=G.current)===null||C===void 0||C.reload();case 3:case"end":return V.stop()}},g)})),children:(0,l.jsx)(n.ZP,{type:"primary",danger:!0,size:"small",icon:(0,l.jsx)(r.Z,{})})}),(0,l.jsx)(n.ZP,{type:"primary",size:"small",icon:(0,l.jsx)(O.Z,{}),onClick:function(){H.setFieldsValue(u),Q(u.id),z(!0)}})]})}}];return(0,c.useEffect)(function(){j||(H.resetFields(),Q(""),k([]))},[j]),(0,l.jsxs)(x._z,{children:[(0,l.jsx)(R.Z,{bordered:!0,size:"small",columns:ae,request:$,actionRef:G,tableAlertRender:!1,toolBarRender:function(){return[(0,l.jsx)(n.ZP,{icon:(0,l.jsx)(h.Z,{}),onClick:function(){return z(!0)}},1),(0,l.jsx)(U.Z,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664?",onConfirm:p()(a()().mark(function T(){var u;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,m(w.join(","));case 2:(u=G.current)===null||u===void 0||u.reload();case 3:case"end":return C.stop()}},T)})),children:(0,l.jsx)(n.ZP,{type:"primary",danger:!0,style:{display:w.length>0?"":"none"},children:"\u6279\u91CF\u5220\u9664"})},2)]},rowKey:"id",rowSelection:{onChange:function(T){k(T)}}}),(0,l.jsxs)(f.Y,{form:H,open:j,onOpenChange:z,title:"\u7F16\u8F91",onFinish:function(){var b=p()(a()().mark(function T(u){var g;return a()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(!J){Z.next=5;break}return Z.next=3,N(J,t()(t()({},u),{},{lat:Number(u.lat),lng:Number(u.lng)}));case 3:Z.next=7;break;case 5:return Z.next=7,M(t()(t()({},u),{},{lat:Number(u.lat),lng:Number(u.lng)}));case 7:z(!1),(g=G.current)===null||g===void 0||g.reload();case 9:case"end":return Z.stop()}},T)}));return function(T){return b.apply(this,arguments)}}(),children:[(0,l.jsx)(y.Z,{label:"\u540D\u5B57",name:"name",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,l.jsx)(W.Z,{label:"lat",name:"lat",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EF4\u5EA6"}]}),(0,l.jsx)(y.Z,{label:"lng",name:"lng",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7ECF\u5EA6"}]}),(0,l.jsx)(K.Z,{label:"\u5907\u6CE8",name:"remarks",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5907\u6CE8"}]})]})]})}var ee=q}}]);