(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[4],{722:function(e,s,t){e.exports={dialogues:"Dialogues_dialogues__1sXZe",dialogue:"Dialogues_dialogue__3aSwy",dialoguesItems:"Dialogues_dialoguesItems__EXUlX",active:"Dialogues_active__1mmY5",messages:"Dialogues_messages__1WYAf"}},729:function(e,s,t){"use strict";t.r(s);var a=t(722),n=t.n(a),i=t(1),c=t.n(i),u=t(210),o=t(21),r=t(2),d=function(e){return Object(r.jsx)("div",{className:n.a.dialogue+" "+n.a.active,children:Object(r.jsxs)(o.b,{to:"/dialogues/"+e.id,children:[" ",e.name," "]})})},j=function(e){return Object(r.jsx)("div",{className:n.a.dialogue,children:e.message})},l=t(12),b=t(254),g=t(255),m=t(134),O=t(123),h=Object(m.a)(50),f=Object(g.a)({form:"dialogueAddMessageForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.a,{component:O.b,name:"newMessageBody",placeholder:"Enter your message",validate:[m.b,h]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{children:"Add Post"})," "]})]})})),x=function(e){var s=e.dialoguesPage,t=s.dialogues.map((function(e){return Object(r.jsx)(d,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return Object(r.jsx)(j,{message:e.message},e.id)}));s.newMessageBody;return e.isAuth?Object(r.jsxs)("div",{className:n.a.dialogues,children:[Object(r.jsx)("div",{className:n.a.dialoguesItems,children:t}),Object(r.jsx)("div",{className:n.a.messages,children:Object(r.jsx)("div",{children:a})}),Object(r.jsx)(f,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(r.jsx)(l.a,{to:"/login"})},p=t(26),v=t(6),_=t(68),y=t(69),A=t(71),w=t(70),M=function(e){return{isAuth:e.auth.isAuth}},D=t(11);s.default=Object(D.d)(Object(p.b)((function(e){return{dialoguesPage:e.dialoguesPage}}),(function(e){return{sendMessage:function(s){e(Object(u.b)(s))}}})),(function(e){var s=function(s){Object(A.a)(a,s);var t=Object(w.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(v.a)({},this.props)):Object(r.jsx)(l.a,{to:"/login"})}}]),a}(c.a.Component);return Object(p.b)(M)(s)}))(x)}}]);
//# sourceMappingURL=4.5c31e6b6.chunk.js.map