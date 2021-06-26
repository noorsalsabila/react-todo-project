(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{450:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),a=n(22),s=n.n(a),i=n(32),r=n(91),l=n(38),u=n(26),j=n(137),b=n(138),d=n(145),p=n(144),h=(n(149),n(63)),O=n.n(h),x=n(62),f=n(3),m=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),o=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(u.a)(s,2),r=i[0],l=i[1],j=function(){console.log("isMouseOver: "),l(!r)},b=e.todo,d=b.id,p=b.title,h=b.completed,m={},g={};return o?m.display="none":g.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(f.jsxs)("li",{className:O.a.item,children:[Object(f.jsx)("input",{type:"checkbox",className:O.a.checkbox,checked:h,onChange:function(){return e.onChangeProps(d)}}),Object(f.jsxs)("div",{onDoubleClick:function(){a(!0)},style:m,children:[Object(f.jsx)("button",{onClick:function(){return e.onDeleteProps(d)},onMouseOver:j,onMouseLeave:j,children:Object(f.jsx)(x.b,{className:r?"delete-icon":""})}),Object(f.jsx)("span",{style:h?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:p})]}),Object(f.jsx)("input",{type:"text",style:g,className:O.a.textInput,value:p,onChange:function(t){e.setUpdate(t.target.value,d)},onKeyDown:function(e){"Enter"===e.key&&a(!1)}})]})},g=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("ul",{children:this.props.todos.map((function(t){return Object(f.jsx)(m,{todo:t,onChangeProps:e.props.onChangeProps,onDeleteProps:e.props.onDeleteProps,setUpdate:e.props.setUpdate},t.id)}))})}}]),n}(o.a.Component),v=function(){return Object(f.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5rem"},children:Object(f.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"TODOS"})})},y=n(61),N=function(e){var t=Object(c.useState)({title:""}),n=Object(u.a)(t,2),o=n[0],a=n[1];return Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),a({title:""})):alert("Please write item")},className:"form-container",children:[Object(f.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){a(Object(l.a)(Object(l.a)({},o),{},Object(y.a)({},e.target.name,e.target.value)))}}),Object(f.jsx)("button",{className:"input-submit",children:Object(f.jsx)(x.a,{})})]})},S=n(453),k=n(4),C=[{slug:"about-app",title:"About the Apps",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This apps was developed by Salsabila. A self-taught web developer and full time software engineer. She's gorgeous tho :p "}],_=function(){var e=Object(k.f)().slug,t=C.find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(f.jsxs)("div",{className:"main__content",children:[Object(f.jsx)("h1",{children:n}),Object(f.jsx)("p",{children:c})]})},w=function(){var e=Object(k.g)(),t=e.path,n=e.url;return Object(f.jsxs)("div",{className:"about__content",children:[Object(f.jsxs)("ul",{className:"about__list",children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(n,"/about-app"),children:"About App"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(n,"/about-author"),children:"About author"})})]}),Object(f.jsx)(k.a,{path:"".concat(t,"/:slug"),children:Object(f.jsx)(_,{})})]})},A=function(){return Object(f.jsx)("div",{children:" Not Match page! "})},I=n(142),P=n(143),D=[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}],T=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(f.jsxs)("nav",{className:"navBar",children:[Object(f.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:n?Object(f.jsx)(I.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(f.jsx)(P.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(f.jsx)("ul",{className:"menuNav ".concat(n?"showMenu":""),children:D.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{to:e.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:e.text})},e.id)}))})]})},M=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){console.log("test run");var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&o(t)}),[o]),Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(T,{}),Object(f.jsxs)(k.c,{children:[Object(f.jsx)(k.a,{exact:!0,path:"/",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"inner",children:[Object(f.jsx)(v,{}),Object(f.jsx)(N,{addTodoProps:function(e){var t={id:Object(S.a)(),title:e,completed:!1};o([].concat(Object(r.a)(n),[t]))}}),Object(f.jsx)(g,{todos:n,onChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},onDeleteProps:function(e){o(Object(r.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(f.jsx)(k.a,{path:"/about",children:Object(f.jsx)(w,{})}),Object(f.jsx)(k.a,{path:"/*",children:Object(f.jsx)(A,{})})]})]})};n(450);s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsxs)(i.a,{children:[Object(f.jsx)(M,{}),","]})}),document.getElementById("root"))},63:function(e,t,n){e.exports={item:"TodoItem_item__3Cj0q",checkbox:"TodoItem_checkbox__DfiCl",textInput:"TodoItem_textInput__3pq1x"}}},[[451,1,2]]]);
//# sourceMappingURL=main.5254a478.chunk.js.map