(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[0],{37:function(n,e){},526:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,s,b,d,u,l,j,p,x=t(1),O=t.n(x),h=t(28),m=t.n(h),g=t(19),f=(t(82),t(4)),v=t(5),S=Object(v.a)(r||(r=Object(f.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n  }\n\nbody{\n  background-color: #fff;\n  font-family: sans-serif;\n}\n\na{\n  text-decoration: none;\n  cursor: pointer;\n}\n\nbutton{\n  border: none;\n  cursor: pointer;\n}\n"]))),_=v.b.section(o||(o=Object(f.a)(["\n  max-width: 360px;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"]))),k=t(25),w=t(7),y=t(13),T=t.n(y),E=t(15),C=t(16),D=v.b.form(a||(a=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),R=v.b.h1(c||(c=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),F=v.b.p(i||(i=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),P=v.b.input(s||(s=Object(f.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin: 0 0 1rem 0;\n  border: 1px solid black;\n  :focus {\n    border: 1px solid red;\n  }\n"]))),U=v.b.label(b||(b=Object(f.a)(["\n  margin-bottom: 0.2rem;\n"]))),K=v.b.button(d||(d=Object(f.a)(["\n  padding: 10px 20px;\n  margin: 1.5rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"]))),L=t(3);function N(n){return H.apply(this,arguments)}function H(){return(H=Object(C.a)(T.a.mark((function n(e){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("http://localhost:3000/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function W(n){var e=n.setToken,t=Object(x.useState)(),r=Object(E.a)(t,2),o=r[0],a=r[1],c=Object(x.useState)(),i=Object(E.a)(c,2),s=i[0],b=i[1],d=function(){var n=Object(C.a)(T.a.mark((function n(t){var r;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,N({username:o,password:s});case 3:r=n.sent,e(r),console.log(r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(R,{children:"Upper Moments"}),Object(L.jsx)(F,{children:"Fa\xe7a seu login abaixo"}),Object(L.jsx)(_,{children:Object(L.jsxs)(D,{method:"POST",onSubmit:d,children:[Object(L.jsx)(U,{children:"Usu\xe1rio"}),Object(L.jsx)(P,{type:"text",onChange:function(n){return a(n.target.value)}}),Object(L.jsx)(U,{children:"Senha"}),Object(L.jsx)(P,{type:"password",onChange:function(n){return b(n.target.value)}}),Object(L.jsx)(K,{type:"submit",children:"Entrar"})]})})]})}var A,B,I,V,J,z,M=v.b.button(u||(u=Object(f.a)(["\n  display: block;\n  padding: 10px 20px;\n  margin: 1.5rem auto;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"]))),q=v.b.h1(l||(l=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),G=v.b.p(j||(j=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),Q=v.b.section(p||(p=Object(f.a)(["\n  max-width: 360px;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\n  input {\n    display: none;\n  }\n\n  label {\n    width: 200px;\n    height: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #eee;\n    border: 5px solid red;\n    margin: 5px auto;\n    cursor: pointer;\n    border-radius: 50%;\n    overflow: hidden;\n    transition: all 0.3s ease;\n\n    &:hover {\n      background: #d70000;\n      border: 5px solid #d70000;\n      color: white;\n    }\n  }\n\n  img {\n    width: 100%;\n  }\n\n  h4 {\n    margin: 2.2rem 1rem 1rem 0;\n  }\n\n  li {\n    list-style: none;\n    margin: 1rem 1rem 1rem 0;\n    font-size: 15px;\n  }\n"]))),X=t(76),Y=t.n(X).a.create({baseURL:"https://discord-bot-upload.herokuapp.com/"}),Z=t(77),$=t.n(Z),nn=v.b.div(A||(A=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),en=v.b.div(B||(B=Object(f.a)(["\n  margin-bottom: 9.6rem;\n"])));function tn(n){return n.isLoading?Object(L.jsxs)(nn,{children:[Object(L.jsx)("div",{}),Object(L.jsx)(en,{children:Object(L.jsx)($.a,{type:"spin",color:"red",height:200,width:200})})]}):Object(L.jsx)(L.Fragment,{children:" "})}function rn(){var n=O.a.useState(""),e=Object(E.a)(n,2),t=e[0],r=e[1],o=O.a.useState(""),a=Object(E.a)(o,2),c=a[0],i=a[1],s=O.a.useState(!1),b=Object(E.a)(s,2),d=b[0],u=b[1],l=function(){var n=Object(C.a)(T.a.mark((function n(e){var r;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),null!==t&&""!==t){n.next=4;break}return g.b.warn("Voc\xea precisa selecionar um arquivo"),n.abrupt("return");case 4:return(r=new FormData).append("file",t),u(!0),n.next=9,Y.post("/",r,{}).then((function(n){u(!1),g.b.success("Sua imagem foi enviada com sucesso."),i("")})).catch((function(n){u(!1),g.b.error("Houve algum erro ao enviar a imagem.")}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(q,{children:"Upper Moments"}),Object(L.jsx)(G,{children:"Envie seus rol\xeas abaixo"}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(tn,{isLoading:d}),Object(L.jsxs)("form",{action:"#",method:"POST",encType:"multipart/form-data",children:[Object(L.jsxs)("label",{htmlFor:"file",children:[c?Object(L.jsx)("img",{src:c,alt:"file"}):"Selecionar",Object(L.jsx)("input",{type:"file",name:"image",id:"file",onChange:function(n){var e=n.target.files[0];r(e);var t=URL.createObjectURL(e);i(t)}})]}),Object(L.jsx)("h4",{children:"Regras"}),Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:"1 - N\xe3o seja babaquinha, envie somente fotos de rol\xeas do clan \ud83d\udc4c"}),Object(L.jsx)("li",{children:"2 - Sua m\xe3e \xe9 minha \ud83d\udc75"})]}),Object(L.jsx)(M,{type:"submit",name:"submit",onClick:l,className:"btn",children:"Enviar"})]}),Object(L.jsx)(G,{children:"*Ap\xf3s o envio, o bot j\xe1 vai poder mostrar o seu rol\xea\ud83e\udd16."})]})]})}tn.defaultProps={isLoading:!1};var on=v.b.button(I||(I=Object(f.a)(["\n  display: block;\n  padding: 10px 20px;\n  width: 800px;\n  margin: 1.5rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"]))),an=v.b.h1(V||(V=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),cn=v.b.p(J||(J=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),sn=v.b.section(z||(z=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 80%;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n"])));function bn(){var n=function(){var n=Object(x.useState)(function(){var n=localStorage.getItem("token"),e=JSON.parse(n);return null===e||void 0===e?void 0:e.token}()),e=Object(E.a)(n,2),t=e[0],r=e[1];return{setToken:function(n){localStorage.setItem("token",JSON.stringify(n)),r(n.token)},token:t}}(),e=n.token,t=n.setToken;return e?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(an,{children:"Upper Moments"}),Object(L.jsx)(cn,{children:"O Bot que armazena nossos rol\xeas"}),Object(L.jsxs)(sn,{children:[Object(L.jsx)(on,{children:Object(L.jsx)(k.b,{to:"/upload",style:{textDecoration:"none",color:"white"},children:"Envie seu rol\xea"})}),Object(L.jsx)(on,{type:"submit",name:"submit",className:"btn",children:Object(L.jsx)(k.b,{to:"/galeria",style:{textDecoration:"none",color:"white"},children:"Galeria de Rol\xeas"})})]})]}):Object(L.jsx)(W,{setToken:t})}var dn=t(41);t(522).config(),dn.config.update({region:"us-east-2"});var un=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).aws_access_key_id,ln=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).aws_secret_access_key,jn=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).aws_bucket_name,pn=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).aws_bucket_region,new dn.S3({accessKeyId:un,secretAccessKey:ln,Bucket:jn})),xn={Bucket:"upperphotos",Prefix:"Upper_data_base/"};function On(){return(On=Object(C.a)(T.a.mark((function n(){var e;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,gn();case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.log("Faiou: ".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var hn,mn=[],gn=function(){return new Promise((function(n,e){pn.listObjectsV2(xn,(function(t,r){t&&e(t),r.Contents.forEach((function(e){mn.push(e.Key),n(mn)}))}))}))};function fn(){return function(){return On.apply(this,arguments)}().then((function(n){return console.log(n)})).catch((function(n){return console.log(n)})),Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("h1",{children:"Fotos"})})}var vn=v.b.h1(hn||(hn=Object(f.a)(["\n  color: red;\n  text-align: center;\n"])));function Sn(){return Object(L.jsxs)(_,{children:[Object(L.jsx)(S,{}),Object(L.jsx)(vn,{children:"Essa p\xe1gina n\xe3o existe"})]})}function _n(){return Object(L.jsx)(k.a,{children:Object(L.jsxs)(w.c,{children:[Object(L.jsx)(w.a,{exact:!0,path:"/",component:bn}),Object(L.jsx)(w.a,{exact:!0,path:"/upload",component:rn}),Object(L.jsx)(w.a,{exact:!0,path:"/galeria",component:fn}),Object(L.jsx)(w.a,{exact:!0,path:"/login",component:W}),Object(L.jsx)(w.a,{component:Sn})]})})}var kn=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(S,{}),Object(L.jsx)(g.a,{autoClose:5e3}),Object(L.jsx)(_n,{})]})};m.a.render(Object(L.jsx)(O.a.StrictMode,{children:Object(L.jsx)(kn,{})}),document.getElementById("root"))}},[[526,1,2]]]);
//# sourceMappingURL=main.d15cb375.chunk.js.map