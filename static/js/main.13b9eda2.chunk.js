(this["webpackJsonpblog-admin"]=this["webpackJsonpblog-admin"]||[]).push([[0],{30:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,d,l,p,u,h,b,j,x,m,f,O,g,v,w,y,k,S,T,z,C=t(1),A=t.n(C),E=t(19),F=t.n(E),P=(t(30),t(5)),D=t(10),U=t(4),N=t(2),B=t(3),I=Object(B.a)(D.b)(r||(r=Object(N.a)(["\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n  display: block;\n  color: #ffffff;\n"]))),q=t(0),L=B.a.ul(a||(a=Object(N.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  li {\n    list-style-type: none;\n    padding: 1rem;\n    &:hover {\n      color: #14213d;\n      background-color: #e5e5e5;\n    }\n  }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    flex-flow: column nowrap;\n    background-color: #14213d;\n    position: fixed;\n    transform: ",";\n    top: 3.5rem;\n    right: 0;\n    height: 15vh;\n    width: 100vw;\n    padding-top: 0;\n    transition: transform 0.3s ease-in-out;\n  }\n"])),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),J=function(e){var n=e.setAuthorizedUser,t=e.open,r=e.setOpen;return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(L,{open:t,children:[Object(q.jsx)(I,{to:"/posts/create",onClick:function(){return r(!t)},children:Object(q.jsx)("li",{children:"Create post"})}),Object(q.jsx)(I,{onClick:function(e){localStorage.setItem("bearer",""),n(!1)},to:"/",children:Object(q.jsx)("li",{children:"Log out"})})]})})},M=B.a.div(c||(c=Object(N.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(e){return e.open?"#ca7d02":"#fff"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),X=function(e){var n=e.setAuthorizedUser,t=Object(C.useState)(!1),r=Object(P.a)(t,2),a=r[0],c=r[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(M,{open:a,onClick:function(){return c(!a)},children:[Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{})]}),Object(q.jsx)(J,{open:a,setOpen:c,setAuthorizedUser:n})]})},_=B.a.nav(i||(i=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background-color: #14213d;\n  .public,\n  .authorized {\n    font-weight: 400;\n    color: #ffffff;\n  }\n  .public {\n    margin: 1rem;\n  }\n  .authorized {\n    margin-left: 1rem;\n  }\n  @media (max-width: 400px) {\n    .authorized {\n      margin: 1rem;\n    }\n  }\n"]))),V=function(e){var n=e.authorizedUser,t=e.setAuthorizedUser;return Object(q.jsx)(_,{children:n?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(I,{to:"/",children:Object(q.jsx)("h1",{className:"authorized",children:"TOP Blog Admin"})}),Object(q.jsx)(X,{setAuthorizedUser:t})]}):Object(q.jsx)(I,{to:"/",children:Object(q.jsx)("h1",{className:"public",children:"TOP Blog Admin"})})})},W=t(7),Y=t.n(W),G=t(8),H=B.a.div(o||(o=Object(N.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n"]))),K=B.a.div(s||(s=Object(N.a)(["\n  height: auto;\n  width: 50vw;\n  margin: 10px 0;\n  padding: 20px;\n  background: #ffffff;\n  border: 0.5px solid #7a7a7a;\n  border-radius: 5px;\n\n  h2 {\n    margin: 5px auto;\n  }\n  hr {\n    margin: 10px auto;\n    border: none;\n    border-top: 1px solid #000;\n  }\n  .published {\n    color: #466ec3;\n  }\n  .unpublished {\n    color: #ca7d02;\n  }\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    width: 80vw;\n  }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    width: 90%;\n  }\n"]))),Q=B.a.div(d||(d=Object(N.a)(["\n  max-width: 100%;\n  text-align: left;\n"]))),R=B.a.p(l||(l=Object(N.a)(["\n  margin: 5px auto;\n"]))),Z=B.a.div(p||(p=Object(N.a)(["\n  margin: 10px auto;\n"]))),$=B.a.div(u||(u=Object(N.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  max-width: 100%;\n  margin: 0 auto;\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    flex-direction: column;\n  }\n"]))),ee=Object(B.a)(D.b)(h||(h=Object(N.a)(["\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n  color: #000;\n"]))),ne=function(e){var n=e.post._id,t=e.post.title,r=e.post.author.username,a=e.post.published,c=e.post.postDate,i=e.post.comments,o=e.post.text.substring(0,75)+"...",s=function(e){return(new DOMParser).parseFromString(e,"text/html").body.innerText};return Object(q.jsx)(H,{children:Object(q.jsxs)(K,{children:[Object(q.jsxs)(Q,{children:[Object(q.jsx)(ee,{to:"/posts/".concat(n),children:Object(q.jsx)("h2",{children:s(t)})}),Object(q.jsxs)(R,{children:["By: ",r]}),Object(q.jsx)(Z,{children:s(o)})]}),Object(q.jsx)("hr",{}),Object(q.jsxs)($,{children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("p",{children:c}),0===i.length?Object(q.jsx)("p",{children:"No comments"}):1===i.length?Object(q.jsxs)("p",{children:[i.length," Comment"]}):Object(q.jsxs)("p",{children:[i.length," Comments"]})]}),a?Object(q.jsx)("p",{className:"published",children:"Published"}):Object(q.jsx)("p",{className:"unpublished",children:"Unpublished"})]})]})})},te=t(23),re=t.n(te),ae=B.a.div(b||(b=Object(N.a)(["\n  margin-top: 200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n"]))),ce=function(){return Object(q.jsx)(ae,{children:Object(q.jsx)(re.a,{name:"ball-spin-fade-loader",color:"#FCA311"})})},ie=B.a.div(j||(j=Object(N.a)(["\n  margin: 10px 0;\n  color: #a9232e;\n"]))),oe=B.a.div(x||(x=Object(N.a)(["\n  margin-top: 80px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-content: space-evenly;\n\n  h1 {\n    margin-bottom: 20px;\n    text-align: center;\n  }\n"]))),se=function(e){var n=e.userData,t=Object(C.useState)([]),r=Object(P.a)(t,2),a=r[0],c=r[1],i=Object(C.useState)(!1),o=Object(P.a)(i,2),s=o[0],d=o[1],l=Object(C.useState)(!1),p=Object(P.a)(l,2),u=p[0],h=p[1],b="https://rt-blog-api.herokuapp.com/posts";return Object(C.useEffect)((function(){function e(){return(e=Object(G.a)(Y.a.mark((function e(){var t,r,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1),d(!0),e.prev=2,e.next=5,fetch(b);case 5:return t=e.sent,e.next=8,t.json();case 8:r=e.sent,a=r.posts.filter((function(e){return e.author.username===n})),c(a),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),h(!0);case 17:d(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(q.jsxs)("div",{children:[u&&Object(q.jsx)(ie,{children:"An error occurred"}),s?Object(q.jsx)(ce,{}):Object(q.jsxs)(oe,{children:[Object(q.jsxs)("h1",{children:["Welcome ",n,"!"]}),a.map((function(e,n){return Object(q.jsx)("div",{children:Object(q.jsx)(ne,{post:a[n]})},e._id)}))]})]})},de=B.a.div(m||(m=Object(N.a)(["\n  margin: 10px 0;\n  color: #ca7d02;\n"]))),le=B.a.div(f||(f=Object(N.a)(["\n  margin: 80px auto 0 auto;\n  display: flex;\n  flex-flow: column wrap;\n  align-content: center;\n  width: 20vw;\n\n  form {\n    margin: 20px auto;\n    width: 100%;\n  }\n\n  input {\n    font-size: inherit;\n    font-weight: inherit;\n    font-family: inherit;\n    border-radius: 3px;\n    border: 1px solid #7a7a7a;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  #username,\n  #password {\n    display: block;\n    width: 100%;\n    height: 40px;\n    margin: 10px auto;\n    font-size: 1em;\n    padding-left: 5px;\n  }\n  .submit {\n    margin-right: 10px;\n    padding: 10px;\n    text-align: center;\n    color: #ffffff;\n    background-color: #000000;\n    border-color: #7a7a7a;\n    border-radius: 3px;\n    font-weight: 100;\n  }\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    form {\n      width: 50vw;\n    }\n  }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    width: 90%;\n  }\n"]))),pe=Object(B.a)(I)(O||(O=Object(N.a)(["\n  display: inline;\n  color: #fca311;\n"]))),ue=function(){var e=Object(C.useState)(""),n=Object(P.a)(e,2),t=n[0],r=n[1],a=Object(C.useState)(""),c=Object(P.a)(a,2),i=c[0],o=c[1],s=Object(C.useState)(""),d=Object(P.a)(s,2),l=d[0],p=d[1],u=Object(C.useState)(""),h=Object(P.a)(u,2),b=h[0],j=h[1],x=Object(U.f)(),m=function(){var e=Object(G.a)(Y.a.mark((function e(n){var r,a,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://rt-blog-api.herokuapp.com/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:i})});case 4:return r=e.sent,e.next=7,r.json();case 7:(a=e.sent).errors?(c=[],a.errors.forEach((function(e){c.push("".concat(e.msg," "))})),p(c)):(p(""),j("".concat(a.message,". You'll be redirected to the Login page to log in.")),setTimeout((function(){x("/login")}),3e3)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(q.jsxs)(le,{children:[Object(q.jsx)("h1",{children:"Sign up"}),Object(q.jsxs)("form",{onSubmit:m,children:[Object(q.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(q.jsx)("input",{value:t,type:"text",id:"username",onChange:function(e){return r(e.target.value)},required:!0}),Object(q.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(q.jsx)("input",{value:i,type:"password",id:"password",onChange:function(e){return o(e.target.value)},required:!0}),Object(q.jsx)("input",{className:"submit",type:"submit",value:"Submit"})]}),Object(q.jsxs)("div",{children:["Already have an account?"," ",Object(q.jsx)(pe,{to:"/login",children:"Log in"})]}),l?Object(q.jsxs)(ie,{children:["Error: ",l]}):Object(q.jsx)(q.Fragment,{}),Object(q.jsx)(de,{children:b})]})},he=B.a.div(g||(g=Object(N.a)(["\n  margin: 80px auto 0 auto;\n  display: flex;\n  flex-flow: column wrap;\n  align-content: center;\n\n  form {\n    margin: 20px auto;\n    width: 20vw;\n  }\n\n  input {\n    font-size: inherit;\n    font-weight: inherit;\n    font-family: inherit;\n    border-radius: 3px;\n    border: 1px solid #7a7a7a;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  #username,\n  #password {\n    display: block;\n    width: 100%;\n    height: 40px;\n    margin: 10px auto;\n    font-size: 1em;\n    padding-left: 5px;\n  }\n  .submit {\n    margin-right: 10px;\n    padding: 10px;\n    text-align: center;\n    color: #ffffff;\n    background-color: #000000;\n    border-color: #7a7a7a;\n    border-radius: 3px;\n    font-weight: 100;\n  }\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    form {\n      width: 50vw;\n    }\n  }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    form {\n      width: 90%;\n    }\n  }\n"]))),be=Object(B.a)(I)(v||(v=Object(N.a)(["\n  display: inline;\n  color: #fca311;\n"]))),je=function(e){var n=e.setAuthorizedUser,t=Object(C.useState)(""),r=Object(P.a)(t,2),a=r[0],c=r[1],i=Object(C.useState)(""),o=Object(P.a)(i,2),s=o[0],d=o[1],l=Object(C.useState)(""),p=Object(P.a)(l,2),u=p[0],h=p[1],b=Object(U.f)(),j=function(){var e=Object(G.a)(Y.a.mark((function e(t){var r,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://rt-blog-api.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:s})});case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).token?(localStorage.setItem("bearer",c.token),localStorage.setItem("name",a),n(!0),b("/posts")):h(c.message),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(q.jsxs)(he,{children:[Object(q.jsx)("h1",{children:"Log in"}),Object(q.jsxs)("form",{onSubmit:j,children:[Object(q.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(q.jsx)("input",{value:a,type:"text",id:"username",onChange:function(e){return c(e.target.value)},required:!0}),Object(q.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(q.jsx)("input",{value:s,type:"password",id:"password",onChange:function(e){return d(e.target.value)},required:!0}),Object(q.jsx)("input",{className:"submit",type:"submit",value:"Submit"})]}),Object(q.jsxs)("div",{children:["Don't have an account?"," ",Object(q.jsx)(be,{to:"/signup",children:"Sign up"})]}),u?Object(q.jsxs)(ie,{children:["Error: ",u]}):Object(q.jsx)(q.Fragment,{})]})},xe=B.a.div(w||(w=Object(N.a)(["\n  margin: 80px auto 0 auto;\n  display: flex;\n  flex-flow: column wrap;\n  align-content: center;\n  form {\n    margin: 20px auto;\n    width: 40vw;\n  }\n  input,\n  button {\n    font-size: inherit;\n    font-weight: inherit;\n    font-family: inherit;\n    border-radius: 3px;\n    border: 1px solid #7a7a7a;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  #newPostTitle {\n    display: block;\n    width: 100%;\n    height: 40px;\n    margin: 10px auto;\n    font-size: 1em;\n    padding-left: 5px;\n  }\n  textarea {\n    display: block;\n    width: 100%;\n    height: auto;\n    margin: 10px auto;\n    font-size: 1em;\n    padding: 10px 0 0 5px;\n  }\n  .submit {\n    margin-right: 10px;\n    padding: 10px;\n    text-align: center;\n    color: #ffffff;\n    background-color: #000000;\n    border-color: #7a7a7a;\n    border-radius: 3px;\n    font-weight: 100;\n  }\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    form {\n      width: 80%;\n    }\n  }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    form {\n      width: 90%;\n    }\n  }\n"]))),me=function(){var e=Object(C.useState)(""),n=Object(P.a)(e,2),t=n[0],r=n[1],a=Object(C.useState)(""),c=Object(P.a)(a,2),i=c[0],o=c[1],s=Object(C.useState)(""),d=Object(P.a)(s,2),l=d[0],p=d[1],u=Object(C.useState)(""),h=Object(P.a)(u,2),b=h[0],j=h[1],x=Object(U.f)(),m=localStorage.getItem("bearer"),f=function(){var e=Object(G.a)(Y.a.mark((function e(n){var r,a,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://rt-blog-api.herokuapp.com/posts",{method:"POST",headers:{Authorization:"Bearer ".concat(m),"Content-Type":"application/json"},body:JSON.stringify({title:t,text:i})});case 4:return r=e.sent,e.next=7,r.json();case 7:(a=e.sent).errors?(c=[],a.errors.forEach((function(e){c.push("".concat(e.msg," "))})),p(c)):(p(""),j(a.message),setTimeout((function(){x("/posts")}),1500)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(q.jsxs)(xe,{children:[Object(q.jsx)("h1",{children:"Create New Post"}),Object(q.jsxs)("form",{onSubmit:f,children:[Object(q.jsx)("label",{htmlFor:"postTitle",children:"Title:"}),Object(q.jsx)("input",{type:"text",id:"newPostTitle",onChange:function(e){return r(e.target.value)},required:!0}),Object(q.jsx)("label",{htmlFor:"postText",children:"Text:"}),Object(q.jsx)("textarea",{id:"newPostText",rows:"5",cols:"33",maxLength:"500",onChange:function(e){return o(e.target.value)},required:!0}),Object(q.jsx)("input",{className:"submit",type:"submit",value:"Submit"})]}),l?Object(q.jsxs)(ie,{children:["Error: ",l]}):Object(q.jsx)(q.Fragment,{}),Object(q.jsx)(de,{children:b})]})},fe=t(25),Oe=t(24),ge=B.a.div(y||(y=Object(N.a)(["\n  height: auto;\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  background: #ffffff;\n  border-radius: 5px;\n  border: 0.5px solid #e5e5e5;\n  button {\n    background: #14213d;\n    margin-right: 5px;\n    width: 30px;\n    height: 30px;\n  }\n  .delete-btn {\n    color: #ca7d02;\n    margin: 5px 0;\n  }\n"]))),ve=B.a.div(k||(k=Object(N.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    flex-flow: column-reverse nowrap;\n  }\n"]))),we=B.a.p(S||(S=Object(N.a)(["\n  margin-bottom: 20px;\n  color: #7a7a7a;\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    padding-top: 10px;\n  }\n"]))),ye=function(e){var n=e.comment.author,t=e.comment.commentDate,r=e.comment.text,a=e.comment._id,c=(e.message,e.setMessage),i=(e.error,e.setError),o=Object(U.g)(),s=Object(U.f)(),d=localStorage.getItem("bearer"),l=function(){var e=Object(G.a)(Y.a.mark((function e(n){var t,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://rt-blog-api.herokuapp.com/posts/".concat(o.id,"/comments/").concat(a),{method:"DELETE",headers:{Authorization:"Bearer ".concat(d),"Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,200===t.status&&(c(r.message),setTimeout((function(){s(0)}),1500)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message),i(e.t0.status);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(q.jsxs)(ge,{children:[Object(q.jsxs)(ve,{children:[Object(q.jsxs)(we,{children:[n," \u2022 ",t]}),Object(q.jsx)("button",{children:Object(q.jsx)(Oe.a,{icon:fe.a,className:"delete-btn",onClick:l})})]}),Object(q.jsx)("p",{children:function(e){return(new DOMParser).parseFromString(e,"text/html").body.innerText}(r)})]})},ke=B.a.div(T||(T=Object(N.a)(["\n  margin: 80px auto 0 auto;\n  display: flex;\n  flex-flow: column wrap;\n  align-content: center;\n  form {\n    margin: 20px auto;\n    width: 40vw;\n  }\n  input,\n  button {\n    font-size: inherit;\n    font-weight: inherit;\n    font-family: inherit;\n    border-radius: 3px;\n    border: 1px solid #7a7a7a;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  #postTitle {\n    display: block;\n    width: 100%;\n    height: 40px;\n    margin: 10px auto;\n    font-size: 1em;\n    padding-left: 5px;\n  }\n  textarea {\n    display: block;\n    width: 100%;\n    height: auto;\n    margin: 10px auto;\n    font-size: 1em;\n    padding: 10px 0 0 5px;\n  }\n  .submit,\n  .publish {\n    margin-right: 10px;\n    padding: 10px;\n    text-align: center;\n    color: #ffffff;\n    background-color: #000000;\n    border-color: #7a7a7a;\n    border-radius: 3px;\n    font-weight: 100;\n  }\n  .publish {\n    background-color: #466ec3;\n  }\n  .delete {\n    padding: 10px;\n    text-align: center;\n    background-color: #14213d;\n    border-color: #14213d;\n    border-radius: 3px;\n    color: #ffffff;\n    font-weight: 100;\n  }\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    form {\n      width: 80%;\n    }\n  }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    form {\n      width: 100%;\n    }\n    width: 90%;\n  }\n"]))),Se=B.a.div(z||(z=Object(N.a)(["\n  display: inline;\n"]))),Te=function(){var e=Object(C.useState)(""),n=Object(P.a)(e,2),t=n[0],r=n[1],a=Object(C.useState)(""),c=Object(P.a)(a,2),i=c[0],o=c[1],s=Object(C.useState)([]),d=Object(P.a)(s,2),l=d[0],p=d[1],u=Object(C.useState)(!1),h=Object(P.a)(u,2),b=h[0],j=h[1],x=Object(C.useState)(""),m=Object(P.a)(x,2),f=m[0],O=m[1],g=Object(C.useState)(""),v=Object(P.a)(g,2),w=v[0],y=v[1],k=function(e){return(new DOMParser).parseFromString(e,"text/html").body.innerText},S=Object(U.g)(),T=Object(U.f)(),z=localStorage.getItem("bearer");Object(C.useEffect)((function(){function e(){return(e=Object(G.a)(Y.a.mark((function e(){var n,t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,fetch("https://rt-blog-api.herokuapp.com/posts/".concat(S.id));case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,r(t.post.title),o(t.post.text),p(t.post.comments),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:j(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var A=function(){var e=Object(G.a)(Y.a.mark((function e(n){var r,a,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://rt-blog-api.herokuapp.com/posts/".concat(S.id),{method:"PUT",headers:{Authorization:"Bearer ".concat(z),"Content-Type":"application/json"},body:JSON.stringify({title:t,text:i})});case 4:return r=e.sent,e.next=7,r.json();case 7:(a=e.sent).errors?(c=[],a.errors.forEach((function(e){c.push("".concat(e.msg," "))})),O(c)):(O(""),y(a.message),setTimeout((function(){T("/posts")}),1500)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),O("There was a problem with updating your post. Check if you're logged in.");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=Object(G.a)(Y.a.mark((function e(n){var t,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://rt-blog-api.herokuapp.com/posts/".concat(S.id,"/publish"),{method:"PUT",headers:{Authorization:"Bearer ".concat(z),"Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,200===t.status&&(O(""),y(r.message),setTimeout((function(){T("/posts")}),1500)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),O("There was a problem with publishing your post. Check if you're logged in.");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),F=function(){var e=Object(G.a)(Y.a.mark((function e(n){var t,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://rt-blog-api.herokuapp.com/posts/".concat(S.id),{method:"DELETE",headers:{Authorization:"Bearer ".concat(z),"Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,200===t.status&&(O(""),y(r.message),setTimeout((function(){T("/posts")}),1500)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),O("There was a problem with deleting your post. Check if you're logged in.");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(q.jsx)(q.Fragment,{children:b?Object(q.jsx)(ce,{}):Object(q.jsxs)(ke,{children:[Object(q.jsx)("h1",{children:"Post Editor"}),Object(q.jsxs)("form",{onSubmit:A,children:[Object(q.jsx)("label",{htmlFor:"postTitle",children:"Title:"}),Object(q.jsx)("input",{defaultValue:k(t),type:"text",id:"postTitle",onChange:function(e){return r(e.target.value)},required:!0}),Object(q.jsx)("label",{htmlFor:"postText",children:"Text:"}),Object(q.jsx)("textarea",{value:k(i),id:"postText",rows:"5",cols:"33",maxLength:"500",onChange:function(e){return o(e.target.value)},required:!0}),Object(q.jsxs)(Se,{children:[Object(q.jsx)("input",{className:"submit",type:"submit",value:"Update Post"}),Object(q.jsx)("button",{className:"publish",type:"button",onClick:E,children:"Publish"}),Object(q.jsx)("button",{className:"delete",type:"button",onClick:F,children:"Delete"})]})]}),f?Object(q.jsxs)(ie,{children:["Error: ",f]}):Object(q.jsx)(q.Fragment,{}),Object(q.jsx)(de,{children:w}),Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{children:"Comments"}),l&&l.length>0?l.map((function(e){return Object(q.jsx)("div",{children:Object(q.jsx)(ye,{comment:e,message:w,setMessage:y,error:f,setError:O})},e._id)})):Object(q.jsx)("p",{children:"There are no comments."})]})]})})};var ze=function(){var e=Object(C.useState)(!1),n=Object(P.a)(e,2),t=n[0],r=n[1],a=Object(C.useState)(""),c=Object(P.a)(a,2),i=c[0],o=c[1];return Object(C.useEffect)((function(){var e=localStorage.getItem("bearer"),n=localStorage.getItem("name");e?(r(!0),o(n)):(r(!1),o(""))}),[]),Object(q.jsxs)(D.a,{basename:"/",children:[Object(q.jsx)(V,{authorizedUser:t,setAuthorizedUser:r}),Object(q.jsxs)(U.c,{children:[Object(q.jsx)(U.a,{exact:!0,path:"/",element:t?Object(q.jsx)(se,{userData:i}):Object(q.jsx)(je,{setAuthorizedUser:r})}),Object(q.jsx)(U.a,{path:"/posts",element:t?Object(q.jsx)(se,{userData:i}):Object(q.jsx)(je,{setAuthorizedUser:r})}),Object(q.jsx)(U.a,{path:"/posts/:id",element:t?Object(q.jsx)(Te,{}):Object(q.jsx)(je,{setAuthorizedUser:r})}),Object(q.jsx)(U.a,{path:"/posts/create",element:Object(q.jsx)(me,{})}),Object(q.jsx)(U.a,{path:"/login",element:Object(q.jsx)(je,{setAuthorizedUser:r})}),Object(q.jsx)(U.a,{path:"/signup",element:Object(q.jsx)(ue,{})})]})]})};F.a.render(Object(q.jsx)(A.a.StrictMode,{children:Object(q.jsx)(ze,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.13b9eda2.chunk.js.map