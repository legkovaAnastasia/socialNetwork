(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[0],{121:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.df1e3eaf.gif",a=n(2);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f}));var r=n(6),a=n(132),c=(n(1),n(127)),s=n.n(c),i=n(2),o=["input","meta","child"],u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,o)),r=t.error&&t.touched;return Object(i.jsxs)("div",{className:r?s.a.error:"",children:[Object(i.jsx)("div",{children:n.children}),r&&Object(i.jsx)("span",{children:t.error})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},127:function(e,t,n){e.exports={error:"FormsControl_error__2k9J1",formSummaryError:"FormsControl_formSummaryError__1s1Ct"}},129:function(e,t,n){e.exports={paginator:"Paginator_paginator__jB9h_",pageNumber:"Paginator_pageNumber__1xor8",selectedPage:"Paginator_selectedPage__OMlCc"}},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"field is required"},a=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},175:function(e,t,n){e.exports={header:"Header_header__1GSTr",loginBlock:"Header_loginBlock__w3buX"}},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(13),a=n.n(r),c=n(31),s=n(75),i=n(6),o=n(22),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j={posts:[{id:1,message:"Hi, how you doing?",likeCounter:"3"},{id:2,message:"Whats up?",likeCounter:"3"},{id:3,message:"Its my first post",likeCounter:"6"},{id:4,message:"Hey",likeCounter:"9"}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likeCounter:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});default:return e}}},210:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(75),a=n(6),c=(n(421),"SEND_MESSAGE"),s={dialogues:[{id:1,name:"Anna"},{id:2,name:"Ksenya"},{id:3,name:"Alex"},{id:4,name:"Volodya"},{id:5,name:"Rex"}],messages:[{id:1,message:"Hello"},{id:2,message:"Yo"},{id:3,message:"Kek"},{id:4,message:"How you doing?"},{id:5,message:"Lol"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if(t.type===c){var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])})}return e}},22:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(260),a=n.n(r),c=(n(46),a.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3dadebee-0ac9-4307-a5f5-94c82542f358"}})),s={getUSers:function(e,t){return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))},getProfile:function(e){return console.warn("obsolete method. please use profileAPI obj"),i.getProfile(e)}},i={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status/",{status:e})}},o={me:function(){return c.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return c.delete("auth/login")}}},23:function(e,t,n){e.exports={nav:"Navbar_nav__1osGN",menu:"Navbar_menu__3Ls_Y",active:"Navbar_active__u3Xif"}},261:function(e,t,n){e.exports={usersPhoto:"users_usersPhoto__3I5WB",selectedPage:"users_selectedPage__Hf7bY"}},295:function(e,t,n){},296:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){},46:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return _})),n.d(t,"f",(function(){return y}));var r=n(13),a=n.n(r),c=n(31),s=n(75),i=n(6),o=n(22),u="FOLLOW",l="UNFOLLOW",d="SET_USERS",j="SET_CURRENT_PAGE",f="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_FETCHING",p="TOGGLE_IS_FOLLOWING_PROGRESS",h={users:[],pageSize:5,totalItemCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},g=function(e){return{type:u,userID:e}},O=function(e){return{type:l,userID:e}},m=function(e){return{type:j,currentPage:e}},v=function(e){return{type:b,isFetching:e}},x=function(e,t){return{type:p,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(!0)),r(m(e)),n.next=4,o.c.getUSers(e,t);case 4:c=n.sent,r(v(!1)),r((s=c.items,{type:d,users:s})),r((a=c.totalCount,{type:f,count:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.c.follow.bind(o.c),P(n,e,r,g);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.c.unfollow.bind(o.c),P(n,e,r,O);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case f:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case p:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},720:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,727)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(1),c=n.n(a),s=n(34),i=n.n(s),o=(n(295),n(68)),u=n(69),l=n(71),d=n(70),j=(n(296),n(21)),f=n(23),b=n.n(f),p=n(2),h=function(){return Object(p.jsxs)("nav",{className:b.a.nav,children:[Object(p.jsx)("div",{className:"".concat(b.a.menu," ").concat(b.a.active),children:Object(p.jsx)(j.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(p.jsx)("div",{className:b.a.menu,children:Object(p.jsx)(j.b,{to:"/dialogues",activeClassName:b.a.active,children:"Messages"})}),Object(p.jsx)("div",{className:b.a.menu,children:Object(p.jsx)(j.b,{to:"/users",activeClassName:b.a.active,children:"Users"})}),Object(p.jsx)("div",{className:b.a.menu,children:Object(p.jsx)(j.b,{to:"/news",activeClassName:b.a.active,children:"News"})}),Object(p.jsx)("div",{className:b.a.menu,children:Object(p.jsx)(j.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(p.jsx)("div",{className:b.a.menu,children:Object(p.jsx)(j.b,{to:"/settings",activeClassName:b.a.active,children:"Settings"})})]})},g=n(12),O=(n(302),n(303),n(304),n(26)),m=n(46),v=n(261),x=n.n(v),w=n.p+"static/media/user.9dc92b0a.png",P=n(126),_=n(256),y=n(129),S=n.n(y),C=n(262),N=n.n(C),I=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,c=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),j=Object(a.useState)(1),f=Object(_.a)(j,2),b=f[0],h=f[1],g=(b-1)*i+1,O=b*i;return Object(p.jsxs)("div",{className:S.a.paginator,children:[b>1&&Object(p.jsx)("button",{onClick:function(){h(b-1)},children:"PRVS"}),u.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(p.jsx)("span",{className:N()(Object(P.a)({},S.a.selectedPage,r===e),S.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>b&&Object(p.jsx)("button",{onClick:function(){h(b+1)},children:"NXT"})]})},k=function(){return Object(p.jsx)("div",{children:"HELLO"})},E=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(k,{}),Object(p.jsx)(I,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(j.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:w,className:x.a.usersPhoto})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"users.location.country"}),Object(p.jsx)("div",{children:"users.location.city"})]})]})]},t.id)}))]})},T=n(121),U=n(11),L=function(e){return e.usersPage.users},A=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},D=function(e){return e.usersPage.isFetching},M=function(e){return e.usersPage.followingInProgress},R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(T.a,{}):null,Object(p.jsx)(E,{currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),G=Object(U.d)(Object(O.b)((function(e){return{users:L(e),pageSize:A(e),totalUsersCount:F(e),currentPage:z(e),isFetching:D(e),followingInProgress:M(e)}}),{follow:m.b,unfollow:m.f,setCurrentPage:m.d,toggleFollowingProgress:m.e,getUsers:m.c}))(R),B=n(6),H=n(175),W=n.n(H),X=function(e){return Object(p.jsxs)("header",{className:W.a.header,children:[Object(p.jsx)("img",{src:"https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"}),Object(p.jsx)("div",{className:W.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[" ",e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(p.jsx)(j.b,{to:"/login",children:"login"})})]})},Y=n(13),J=n.n(Y),K=n(31),V=n(22),q=n(77),Z="SET_USER_DATA",Q={userId:null,email:null,login:null,isAuth:!1},$=function(e,t,n,r){return{type:Z,payload:{userId:e,email:t,login:n,isAuth:r}}},ee=function(){return function(){var e=Object(K.a)(J.a.mark((function e(t){var n,r,a,c,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t($(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return t.type===Z?Object(B.a)(Object(B.a)({},e),t.payload):e},ne=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(X,Object(B.a)({},this.props))}}]),n}(c.a.Component),re=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:ee,logout:function(){return function(){var e=Object(K.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.logout();case 2:0===e.sent.data.resultCode&&t($(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ne),ae=n(254),ce=n(255),se=n(134),ie=n(123),oe=n(127),ue=n.n(oe),le=Object(ce.a)({form:"login"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(ae.a,{placeholder:"Email",name:"email",component:ie.a,validate:[se.b]})}),Object(p.jsx)("div",{children:Object(p.jsx)(ae.a,{placeholder:"Password",name:"password",component:ie.a,validate:[se.b],type:"password"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(ae.a,{component:ie.a,name:"rememberMe",type:"checkbox"})," remember me"]}),e.error&&Object(p.jsx)("div",{className:ue.a.formSummaryError,children:e.error}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),de=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(K.a)(J.a.mark((function r(a){var c,s;return J.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,V.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(ee()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(q.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(g.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"LOGIN"}),Object(p.jsx)(le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),je="INITIALIZED_SUCCESS",fe={initialized:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;return t.type===je?Object(B.a)(Object(B.a)({},e),{},{initialized:!0}):e},pe=n(210),he=n(178),ge=n(266),Oe=n(257),me=Object(U.c)({profilePage:he.b,dialoguesPage:pe.a,usersPage:m.a,auth:te,form:Oe.a,app:be}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,xe=Object(U.e)(me,ve(Object(U.a)(ge.a)));window.store=xe;var we=xe,Pe=c.a.lazy((function(){return n.e(4).then(n.bind(null,729))})),_e=c.a.lazy((function(){return n.e(3).then(n.bind(null,728))})),ye=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(re,{}),Object(p.jsx)(h,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsxs)(a.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[Object(p.jsxs)(g.b,{path:"/profile/:userId?",children:[" ",Object(p.jsx)(_e,{})," "]}),Object(p.jsxs)(g.b,{path:"/dialogues",children:[Object(p.jsx)(Pe,{})," "]})]}),Object(p.jsxs)(g.b,{path:"/users",children:[" ",Object(p.jsx)(G,{})," "]}),Object(p.jsxs)(g.b,{path:"/login",children:[" ",Object(p.jsx)(de,{})," "]})]})]}):Object(p.jsx)(T.a,{})}}]),n}(c.a.Component),Se=Object(U.d)(g.f,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ee());Promise.all([t]).then((function(){e({type:je})}))}}}))(ye),Ce=function(e){return Object(p.jsx)(j.a,{children:Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O.a,{store:we,children:Object(p.jsx)(Se,{})})})})};i.a.render(Object(p.jsx)(Ce,{}),document.getElementById("root")),r()}},[[720,1,2]]]);
//# sourceMappingURL=main.355c8386.chunk.js.map