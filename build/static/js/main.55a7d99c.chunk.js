(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[0],{38:function(n,e){},526:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,s,b,d,l=t(1),u=t.n(l),j=t(28),p=t.n(j),x=t(19),O=(t(82),t(4)),h=t(5),m=Object(h.a)(r||(r=Object(O.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n  }\n\nbody{\n  background-color: #fff;\n  font-family: sans-serif;\n}\n\na{\n  text-decoration: none;\n  cursor: pointer;\n}\n\nbutton{\n  border: none;\n  cursor: pointer;\n}\n"]))),g=h.b.section(a||(a=Object(O.a)(["\n  max-width: 360px;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"]))),f=t(25),v=t(7),S=t(12),_=t.n(S),w=t(16),y=t(14),E=h.b.form(c||(c=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),k=h.b.h1(o||(o=Object(O.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),T=h.b.p(i||(i=Object(O.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),C=h.b.input(s||(s=Object(O.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin: 0 0 1rem 0;\n  border: 1px solid black;\n  :focus {\n    border: 1px solid red;\n  }\n"]))),D=h.b.label(b||(b=Object(O.a)(["\n  margin-bottom: 0.2rem;\n"]))),R=h.b.button(d||(d=Object(O.a)(["\n  padding: 10px 20px;\n  margin: 1.5rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"]))),F=t(2);function P(){var n=Object(l.useState)(),e=Object(y.a)(n,2),t=(e[0],e[1]),r=Object(l.useState)(),a=Object(y.a)(r,2),c=(a[0],a[1]),o=function(){var n=Object(w.a)(_.a.mark((function n(e){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault();case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(k,{children:"Upper Moments"}),Object(F.jsx)(T,{children:"Fa\xe7a seu login abaixo"}),Object(F.jsx)(g,{children:Object(F.jsxs)(E,{method:"POST",onSubmit:o,children:[Object(F.jsx)(D,{children:"Usu\xe1rio"}),Object(F.jsx)(C,{type:"text",onChange:function(n){return t(n.target.value)}}),Object(F.jsx)(D,{children:"Senha"}),Object(F.jsx)(C,{type:"password",onChange:function(n){return c(n.target.value)}}),Object(F.jsx)(R,{type:"submit",children:"Entrar"})]})})]})}var U,K,L,H,W,N,A,B,I,V,M=t(29),z=t.n(M),q=h.b.form(U||(U=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),J=h.b.h1(K||(K=Object(O.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),G=h.b.p(L||(L=Object(O.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),Q=h.b.input(H||(H=Object(O.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin: 0 0 1rem 0;\n  border: 1px solid black;\n  :focus {\n    border: 1px solid red;\n  }\n"]))),X=h.b.label(W||(W=Object(O.a)(["\n  margin-bottom: 0.2rem;\n"]))),Y=h.b.button(N||(N=Object(O.a)(["\n  padding: 10px 20px;\n  margin: 1.5rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"])));function Z(){var n=Object(l.useState)(),e=Object(y.a)(n,2),t=e[0],r=e[1],a=Object(l.useState)(),c=Object(y.a)(a,2),o=c[0],i=c[1],s=Object(l.useState)(),b=Object(y.a)(s,2),d=b[0],u=b[1],j=function(){var n=Object(w.a)(_.a.mark((function n(e){var r;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),r={username:t,email:o,password:d},n.next=4,z.a.post("http://localhost:3001/register",r).then((function(n){return console.log("Data send")})).catch((function(n){return console.log(n)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(J,{children:"Upper Moments"}),Object(F.jsx)(G,{children:"Crie sua conta abaixo"}),Object(F.jsx)(g,{children:Object(F.jsxs)(q,{method:"POST",onSubmit:j,children:[Object(F.jsx)(X,{children:"Usu\xe1rio:"}),Object(F.jsx)(Q,{type:"text",onChange:function(n){return r(n.target.value)}}),Object(F.jsx)(X,{children:"Email:"}),Object(F.jsx)(Q,{type:"text",onChange:function(n){return i(n.target.value)}}),Object(F.jsx)(X,{children:"Senha:"}),Object(F.jsx)(Q,{type:"password",onChange:function(n){return u(n.target.value)}}),Object(F.jsx)(Y,{type:"submit",children:"Entrar"})]})})]})}var $,nn,en,tn,rn,an,cn=h.b.button(A||(A=Object(O.a)(["\n  display: block;\n  padding: 10px 20px;\n  margin: 1.5rem auto;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"]))),on=h.b.h1(B||(B=Object(O.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),sn=h.b.p(I||(I=Object(O.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),bn=h.b.section(V||(V=Object(O.a)(["\n  max-width: 360px;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\n  input {\n    display: none;\n  }\n\n  label {\n    width: 200px;\n    height: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #eee;\n    border: 5px solid red;\n    margin: 5px auto;\n    cursor: pointer;\n    border-radius: 50%;\n    overflow: hidden;\n    transition: all 0.3s ease;\n\n    &:hover {\n      background: #d70000;\n      border: 5px solid #d70000;\n      color: white;\n    }\n  }\n\n  img {\n    width: 100%;\n  }\n\n  h4 {\n    margin: 2.2rem 1rem 1rem 0;\n  }\n\n  li {\n    list-style: none;\n    margin: 1rem 1rem 1rem 0;\n    font-size: 15px;\n  }\n"]))),dn=z.a.create({baseURL:"https://discord-bot-upload.herokuapp.com/"}),ln=t(77),un=t.n(ln),jn=h.b.div($||($=Object(O.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),pn=h.b.div(nn||(nn=Object(O.a)(["\n  margin-bottom: 9.6rem;\n"])));function xn(n){return n.isLoading?Object(F.jsxs)(jn,{children:[Object(F.jsx)("div",{}),Object(F.jsx)(pn,{children:Object(F.jsx)(un.a,{type:"spin",color:"red",height:200,width:200})})]}):Object(F.jsx)(F.Fragment,{children:" "})}function On(){var n=u.a.useState(""),e=Object(y.a)(n,2),t=e[0],r=e[1],a=u.a.useState(""),c=Object(y.a)(a,2),o=c[0],i=c[1],s=u.a.useState(!1),b=Object(y.a)(s,2),d=b[0],l=b[1],j=function(){var n=Object(w.a)(_.a.mark((function n(e){var r;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),null!==t&&""!==t){n.next=4;break}return x.b.warn("Voc\xea precisa selecionar um arquivo"),n.abrupt("return");case 4:return(r=new FormData).append("file",t),l(!0),n.next=9,dn.post("/",r,{}).then((function(n){l(!1),x.b.success("Sua imagem foi enviada com sucesso."),i("")})).catch((function(n){l(!1),x.b.error("Houve algum erro ao enviar a imagem.")}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(on,{children:"Upper Moments"}),Object(F.jsx)(sn,{children:"Envie seus rol\xeas abaixo"}),Object(F.jsxs)(bn,{children:[Object(F.jsx)(xn,{isLoading:d}),Object(F.jsxs)("form",{action:"#",method:"POST",encType:"multipart/form-data",children:[Object(F.jsxs)("label",{htmlFor:"file",children:[o?Object(F.jsx)("img",{src:o,alt:"file"}):"Selecionar",Object(F.jsx)("input",{type:"file",name:"image",id:"file",onChange:function(n){var e=n.target.files[0];r(e);var t=URL.createObjectURL(e);i(t)}})]}),Object(F.jsx)("h4",{children:"Regras"}),Object(F.jsxs)("ul",{children:[Object(F.jsx)("li",{children:"1 - N\xe3o seja babaquinha, envie somente fotos de rol\xeas do clan \ud83d\udc4c"}),Object(F.jsx)("li",{children:"2 - Sua m\xe3e \xe9 minha \ud83d\udc75"})]}),Object(F.jsx)(cn,{type:"submit",name:"submit",onClick:j,className:"btn",children:"Enviar"})]}),Object(F.jsx)(sn,{children:"*Ap\xf3s o envio, o bot j\xe1 vai poder mostrar o seu rol\xea\ud83e\udd16."})]})]})}xn.defaultProps={isLoading:!1};var hn=h.b.button(en||(en=Object(O.a)(["\n  display: block;\n  padding: 10px 20px;\n  width: 800px;\n  margin: 1.5rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"]))),mn=h.b.h1(tn||(tn=Object(O.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),gn=h.b.p(rn||(rn=Object(O.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),fn=h.b.section(an||(an=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 80%;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n"])));function vn(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(mn,{children:"Upper Moments"}),Object(F.jsx)(gn,{children:"O Bot que armazena nossos rol\xeas"}),Object(F.jsxs)(fn,{children:[Object(F.jsx)(hn,{children:Object(F.jsx)(f.b,{to:"/upload",style:{textDecoration:"none",color:"white"},children:"Envie seu rol\xea"})}),Object(F.jsx)(hn,{type:"submit",name:"submit",className:"btn",children:Object(F.jsx)(f.b,{to:"/galeria",style:{textDecoration:"none",color:"white"},children:"Galeria de Rol\xeas"})})]})]})}var Sn=t(42);t(522).config(),Sn.config.update({region:"us-east-2"});var _n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).aws_access_key_id,wn=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).aws_secret_access_key,yn=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).aws_bucket_name,En=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).aws_bucket_region,new Sn.S3({accessKeyId:_n,secretAccessKey:wn,Bucket:yn})),kn={Bucket:"upperphotos",Prefix:"Upper_data_base/"};function Tn(){return(Tn=Object(w.a)(_.a.mark((function n(){var e;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Rn();case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.log("Faiou: ".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var Cn,Dn=[],Rn=function(){return new Promise((function(n,e){En.listObjectsV2(kn,(function(t,r){t&&e(t),r.Contents.forEach((function(e){Dn.push(e.Key),n(Dn)}))}))}))};function Fn(){return function(){return Tn.apply(this,arguments)}().then((function(n){return console.log(n)})).catch((function(n){return console.log(n)})),Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("h1",{children:"Fotos"})})}var Pn=h.b.h1(Cn||(Cn=Object(O.a)(["\n  color: red;\n  text-align: center;\n"])));function Un(){return Object(F.jsxs)(g,{children:[Object(F.jsx)(m,{}),Object(F.jsx)(Pn,{children:"Essa p\xe1gina n\xe3o existe"})]})}function Kn(){return Object(F.jsx)(f.a,{children:Object(F.jsxs)(v.c,{children:[Object(F.jsx)(v.a,{exact:!0,path:"/",component:vn}),Object(F.jsx)(v.a,{exact:!0,path:"/upload",component:On}),Object(F.jsx)(v.a,{exact:!0,path:"/galeria",component:Fn}),Object(F.jsx)(v.a,{exact:!0,path:"/login",component:P}),Object(F.jsx)(v.a,{exact:!0,path:"/register",component:Z}),Object(F.jsx)(v.a,{component:Un})]})})}var Ln=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(m,{}),Object(F.jsx)(x.a,{autoClose:5e3}),Object(F.jsx)(Kn,{})]})};p.a.render(Object(F.jsx)(u.a.StrictMode,{children:Object(F.jsx)(Ln,{})}),document.getElementById("root"))}},[[526,1,2]]]);
//# sourceMappingURL=main.55a7d99c.chunk.js.map