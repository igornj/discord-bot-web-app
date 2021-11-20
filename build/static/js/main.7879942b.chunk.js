(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[0],{550:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,b,d,l,u,j,p,x=t(3),m=t.n(x),g=t(45),O=t.n(g),h=t(18),f=(t(107),t(10)),v=t(11),y=Object(v.a)(r||(r=Object(f.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n  }\n\nbody{\n  background-color: #fff;\n  //#131313\n  font-family: sans-serif;\n}\n\na{\n  text-decoration: none;\n  cursor: pointer;\n}\n\nbutton{\n  border: none;\n  cursor: pointer;\n}\n"]))),w=v.b.section(a||(a=Object(f.a)(["\n  max-width: 360px;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"]))),k=t(19),S=t(17),C=t(0),U=t.n(C),z=t(2),F=t(12),D=v.b.form(c||(c=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),L=v.b.h1(o||(o=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),E=v.b.p(i||(i=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),P=v.b.p(s||(s=Object(f.a)(["\n  text-align: center;\n  margin-top: 0.1rem;\n  font-size: 0.9rem;\n"]))),A=v.b.input(b||(b=Object(f.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin: 0 0 1rem 0;\n  border: 1px solid black;\n  :focus {\n    border: 1px solid red;\n  }\n"]))),I=v.b.label(d||(d=Object(f.a)(["\n  margin-bottom: 0.2rem;\n"]))),M=v.b.button(l||(l=Object(f.a)(["\n  padding: 10px 20px;\n  margin: 1rem 1rem 0.3rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"]))),R=v.b.button(u||(u=Object(f.a)(["\n  text-decoration: none;\n  background: none;\n  margin-bottom: 1rem;\n  color: blue;\n"]))),T=t(98),q=t.n(T),K=v.b.div(j||(j=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),N=v.b.div(p||(p=Object(f.a)(["\n  margin-bottom: 9.6rem;\n"]))),B=t(5);function H(e){return e.isLoading?Object(B.jsxs)(K,{children:[Object(B.jsx)("div",{}),Object(B.jsx)(N,{children:Object(B.jsx)(q.a,{type:"spin",color:"red",height:200,width:200})})]}):Object(B.jsx)(B.Fragment,{children:" "})}H.defaultProps={isLoading:!1};var V=t(32),J=t(99);t(64).config();Object(J.a)({apiKey:"AIzaSyAFa9bsCU22wLNY8USKmjeOUV6FF5udbzw",authDomain:"discord-bot-authentication.firebaseapp.com",projectId:"discord-bot-authentication",storageBucket:"discord-bot-authentication.appspot.com",messagingSenderId:"907618033204",appId:"1:907618033204:web:ee2ff0cc8f9ccdd5ca7461",measurementId:"G-TF0W6620HV"});var X,G,Q,W,Y,Z,$,_=Object(V.b)(),ee=m.a.createContext();function ne(){return Object(x.useContext)(ee)}function te(e){var n=e.children,t=Object(x.useState)(null),r=Object(F.a)(t,2),a=r[0],c=r[1],o=Object(x.useState)(!0),i=Object(F.a)(o,2),s=i[0],b=i[1];if(Object(x.useEffect)((function(){_.onAuthStateChanged((function(e){c(e),b(!1)}))}),[]),s)return Object(B.jsx)(H,{isLoading:s});var d={currentUser:a,login:function(e,n){return Object(V.d)(_,e,n)},register:function(e,n){return Object(V.a)(_,e,n)},logout:function(){return Object(V.e)(_)},forgotPassword:function(e){return Object(V.c)(_,e)}};return Object(B.jsx)(ee.Provider,{value:d,children:n})}function re(){var e=Object(x.useState)(),n=Object(F.a)(e,2),t=n[0],r=n[1],a=Object(x.useState)(),c=Object(F.a)(a,2),o=c[0],i=c[1],s=Object(x.useState)(!1),b=Object(F.a)(s,2),d=b[0],l=b[1],u=ne().login,j=Object(S.g)(),p=function(){var e=Object(z.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,l(!0),e.next=5,u(t,o);case 5:h.b.success("Login realizado com sucesso"),l(!1),j.push("/"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),h.b.error("Ocorreu um erro ao tentar fazer login"),l(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return ne().currentUser?Object(B.jsx)(S.a,{to:"/"}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H,{isLoading:d}),Object(B.jsx)(L,{children:"Upper Moments"}),Object(B.jsx)(E,{children:"Fa\xe7a seu login abaixo"}),Object(B.jsx)(w,{children:Object(B.jsxs)(D,{method:"POST",onSubmit:p,children:[Object(B.jsx)(I,{children:"Email:"}),Object(B.jsx)(A,{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Digite seu e-mail"}),Object(B.jsx)(I,{children:"Senha:"}),Object(B.jsx)(A,{type:"password",onChange:function(e){return i(e.target.value)},placeholder:"Digite sua senha"}),Object(B.jsx)(M,{type:"submit",children:"Entrar"}),Object(B.jsx)(k.b,{style:{margin:"0 auto"},to:"/resetsenha",children:Object(B.jsx)(R,{type:"button",children:"Esqueceu sua senha?"})}),Object(B.jsxs)(P,{children:["N\xe3o tem uma conta?",Object(B.jsxs)(k.b,{to:"/register",style:{color:"blue"},children:[" ","Criar conta"]})]})]})})]})}var ae=v.b.form(X||(X=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),ce=v.b.h1(G||(G=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),oe=v.b.p(Q||(Q=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),ie=v.b.p(W||(W=Object(f.a)(["\n  text-align: center;\n  margin-top: 0.1rem;\n  font-size: 0.9rem;\n"]))),se=v.b.input(Y||(Y=Object(f.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin: 0 0 1rem 0;\n  border: 1px solid black;\n  :focus {\n    border: 1px solid red;\n  }\n"]))),be=v.b.label(Z||(Z=Object(f.a)(["\n  margin-bottom: 0.2rem;\n"]))),de=v.b.button($||($=Object(f.a)(["\n  padding: 10px 20px;\n  margin: 1.5rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"])));function le(){var e=Object(x.useState)(),n=Object(F.a)(e,2),t=n[0],r=n[1],a=Object(x.useState)(),c=Object(F.a)(a,2),o=c[0],i=c[1],s=Object(x.useState)(),b=Object(F.a)(s,2),d=b[0],l=b[1],u=Object(x.useState)(!1),j=Object(F.a)(u,2),p=j[0],m=j[1],g=ne().register,O=Object(S.g)(),f=function(){var e=Object(z.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o===d){e.next=4;break}return h.b.warning("As senhas digitadas n\xe3o s\xe3o iguais"),e.abrupt("return");case 4:if(!(o<6)){e.next=7;break}return h.b.warning("A senha precisa ter no minimo 6 digitos"),e.abrupt("return");case 7:return e.prev=7,m(!0),e.next=11,g(t,o);case 11:h.b.success("Sua conta foi criada"),m(!1),O.push("/login"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),h.b.error("Ocorreu um erro na cria\xe7\xe3o da sua conta"),m(!1);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(n){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H,{isLoading:p}),Object(B.jsx)(ce,{children:"Upper Moments"}),Object(B.jsx)(oe,{children:"Crie sua conta abaixo"}),Object(B.jsx)(w,{children:Object(B.jsxs)(ae,{method:"POST",onSubmit:f,children:[Object(B.jsx)(be,{children:"Email:"}),Object(B.jsx)(se,{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Digite seu e-mail"}),Object(B.jsx)(be,{children:"Senha:"}),Object(B.jsx)(se,{type:"password",onChange:function(e){return i(e.target.value)},placeholder:"Digite sua senha"}),Object(B.jsx)(be,{children:"Confirmar senha:"}),Object(B.jsx)(se,{type:"password",onChange:function(e){return l(e.target.value)},placeholder:"Repita sua senha"}),Object(B.jsx)(de,{disable:p,type:"submit",children:"Criar conta"}),Object(B.jsxs)(ie,{children:["Voc\xea j\xe1 tem uma conta?",Object(B.jsxs)(k.b,{to:"/login",style:{color:"blue"},children:[" ","Fa\xe7a o login"]})]})]})})]})}var ue,je,pe,xe,me,ge,Oe,he,fe,ve,ye=t(49),we=v.b.button(ue||(ue=Object(f.a)(["\n  display: block;\n  padding: 10px 20px;\n  margin: 1.5rem auto;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n\n  :disabled,\n  [disabled] {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n  }\n\n  /* &:hover {\n    background-color: #d70000;\n  } */\n"]))),ke=v.b.h1(je||(je=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),Se=v.b.p(pe||(pe=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),Ce=v.b.div(xe||(xe=Object(f.a)(["\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  margin: 0.5rem auto;\n\n  p {\n    font-size: 12px;\n    font-weight: bold;\n  }\n\n  button {\n    display: block;\n    margin: -6px 5px;\n    padding: 0.5rem;\n  }\n"]))),Ue=v.b.section(me||(me=Object(f.a)(["\n  max-width: 360px;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\n  input {\n    display: none;\n  }\n\n  label {\n    width: 200px;\n    height: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #eee;\n    border: 5px solid red;\n    margin: 5px auto;\n    cursor: pointer;\n    border-radius: 50%;\n    overflow: hidden;\n    transition: all 0.3s ease;\n\n    &:hover {\n      background: #d70000;\n      border: 5px solid #d70000;\n      color: white;\n    }\n  }\n\n  img {\n    width: 100%;\n  }\n\n  h4 {\n    margin: 2.2rem 1rem 1rem 0;\n  }\n\n  li {\n    list-style: none;\n    margin: 1rem 1rem 1rem 0;\n    font-size: 15px;\n  }\n"]))),ze=t(100),Fe=t.n(ze).a.create({baseURL:"https://discord-bot-authentication.firebaseapp.com/"});function De(){var e=m.a.useState(""),n=Object(F.a)(e,2),t=n[0],r=n[1],a=m.a.useState(""),c=Object(F.a)(a,2),o=c[0],i=c[1],s=m.a.useState(!1),b=Object(F.a)(s,2),d=b[0],l=b[1],u=ne(),j=u.logout,p=u.currentUser,x=Object(S.g)(),g=function(){var e=Object(z.a)(U.a.mark((function e(n){var r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),null!==t&&""!==t){e.next=4;break}return h.b.warn("Voc\xea precisa selecionar um arquivo"),e.abrupt("return");case 4:return(r=new FormData).append("file",t),l(!0),e.next=9,Fe.post("/upload",r,{}).then((function(e){l(!1),h.b.error("Sua imagem foi enviada com sucesso."),i("")})).catch((function(e){l(!1),h.b.error("Houve algum erro ao enviar a imagem.")}));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(Ce,{children:[Object(B.jsx)("p",{children:p.email}),Object(B.jsx)(k.b,{to:"/login",children:Object(B.jsx)("button",{style:{background:"none"},onClick:function(e){e.preventDefault();try{l(!0),j(),h.b.success("Logout feito com sucesso"),l(!1),x.push("/login")}catch(n){l(!1),h.b.error("Ocorreu algum erro ao fazer logout")}},children:Object(B.jsx)(ye.a,{size:30,color:"red"})})})]}),Object(B.jsx)(k.b,{to:"/",children:Object(B.jsx)(ke,{children:"Upper Moments"})}),Object(B.jsx)(Se,{children:"Envie seus rol\xeas abaixo"}),Object(B.jsxs)(Ue,{children:[Object(B.jsx)(H,{isLoading:d}),Object(B.jsxs)("form",{action:"#",method:"POST",encType:"multipart/form-data",children:[Object(B.jsxs)("label",{htmlFor:"file",children:[o?Object(B.jsx)("img",{src:o,alt:"file"}):"Selecionar",Object(B.jsx)("input",{type:"file",name:"image",id:"file",onChange:function(e){var n=e.target.files[0];r(n);var t=URL.createObjectURL(n);i(t)}})]}),Object(B.jsx)("h4",{children:"Regras"}),Object(B.jsxs)("ul",{children:[Object(B.jsx)("li",{children:"1 - N\xe3o seja babaquinha, envie somente fotos de rol\xeas do clan \ud83d\udc4c"}),Object(B.jsx)("li",{children:"2 - Sua m\xe3e \xe9 minha \ud83d\udc75"})]}),Object(B.jsx)(we,{disabled:!0,type:"submit",name:"submit",onClick:g,className:"btn",children:"Enviar"})]}),Object(B.jsx)(Se,{children:"Por conta de bugs o Envio de arquivos foi desabiltiado por hora\ud83d\ude12"})]})]})}var Le=v.b.button(ge||(ge=Object(f.a)(["\n  display: block;\n  width: 400px;\n  margin: 1.5rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"]))),Ee=v.b.h1(Oe||(Oe=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),Pe=v.b.p(he||(he=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),Ae=v.b.section(fe||(fe=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 80%;\n  background: #fff;\n  margin: 15px auto;\n  padding: 30px;\n  border-radius: 4px;\n"]))),Ie=v.b.div(ve||(ve=Object(f.a)(["\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  margin: 0.5rem auto;\n\n  p {\n    font-size: 12px;\n    font-weight: bold;\n  }\n\n  button {\n    display: block;\n    margin: -6px 5px;\n    padding: 0.5rem;\n  }\n"])));function Me(){var e=ne(),n=e.logout,t=e.currentUser,r=Object(S.g)();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(Ie,{children:[Object(B.jsx)("p",{children:t.email}),Object(B.jsx)(k.b,{to:"/login",children:Object(B.jsx)("button",{style:{background:"none"},onClick:function(e){e.preventDefault();try{n(),h.b.success("Logout feito com sucesso"),r.push("/login")}catch(t){h.b.error("Ocorreu algum erro ao fazer logout")}},children:Object(B.jsx)(ye.a,{size:30,color:"red"})})})]}),Object(B.jsx)(Ee,{children:"Upper Moments"}),Object(B.jsx)(Pe,{children:"O Bot que armazena nossos rol\xeas"}),Object(B.jsxs)(Ae,{children:[Object(B.jsx)(Le,{children:Object(B.jsx)(k.b,{to:"/upload",style:{textDecoration:"none",color:"white",display:"block",width:"100%",padding:"15px 80px"},children:"Envie seu rol\xea"})}),Object(B.jsx)(Le,{children:Object(B.jsx)(k.b,{to:"/galeria",style:{textDecoration:"none",color:"white",display:"block",width:"100%",padding:"15px 80px"},children:"Galeria de Rol\xeas"})})]})]})}var Re=t(62);t(64).config(),Re.config.update({region:"us-east-2"});new Re.S3({accessKeyId:"AKIAX23VRQJU6G5HKBHL",secretAccessKey:"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",Bucket:"upperphotos"});var Te,qe,Ke,Ne,Be,He,Ve,Je;var Xe,Ge,Qe,We=v.b.form(Te||(Te=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),Ye=v.b.h1(qe||(qe=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"]))),Ze=v.b.p(Ke||(Ke=Object(f.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  font-weight: bold;\n"]))),$e=(v.b.p(Ne||(Ne=Object(f.a)(["\n  text-align: center;\n  margin-top: 0.1rem;\n  font-size: 0.9rem;\n"]))),v.b.input(Be||(Be=Object(f.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  margin: 0 0 1rem 0;\n  border: 1px solid black;\n  :focus {\n    border: 1px solid red;\n  }\n"])))),_e=v.b.label(He||(He=Object(f.a)(["\n  margin-bottom: 0.2rem;\n"]))),en=v.b.button(Ve||(Ve=Object(f.a)(["\n  padding: 10px 20px;\n  margin: 1rem 1rem 0.3rem 1rem;\n  background-color: red;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #d70000;\n  }\n"])));v.b.button(Je||(Je=Object(f.a)(["\n  text-decoration: none;\n  background: none;\n  color: blue;\n  margin-bottom: 1rem;\n"])));function nn(){var e=Object(x.useState)(),n=Object(F.a)(e,2),t=n[0],r=n[1],a=Object(x.useState)(!1),c=Object(F.a)(a,2),o=c[0],i=c[1],s=Object(x.useState)(!1),b=Object(F.a)(s,2),d=b[0],l=b[1],u=ne().forgotPassword,j=function(){var e=Object(z.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,i(!0),e.next=5,u(t);case 5:i(!1),l(!0),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),h.b.error("Ocorreu um erro ao tentar resetar sua senha"),i(!1),l(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}();return ne().currentUser?Object(B.jsx)(S.a,{to:"/"}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H,{isLoading:o}),Object(B.jsx)(k.b,{to:"/login",children:Object(B.jsx)(Ye,{children:"Upper Moments"})}),Object(B.jsx)(Ze,{children:"Informe seu e-mail abaixo"}),Object(B.jsx)(w,{children:Object(B.jsxs)(We,{method:"POST",onSubmit:j,children:[Object(B.jsx)(_e,{children:"Email:"}),Object(B.jsx)($e,{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Digite seu e-mail"}),Object(B.jsx)(en,{type:"submit",children:"Resetar senha"}),d?Object(B.jsx)(Ze,{children:"Cheque seu e-mail para resetar sua senha"}):Object(B.jsx)(B.Fragment,{})]})})]})}var tn=v.b.h1(Xe||(Xe=Object(f.a)(["\n  color: red;\n  text-align: center;\n"]))),rn=v.b.h1(Ge||(Ge=Object(f.a)(["\n  text-align: center;\n  font-size: 5rem;\n  margin-top: 4rem;\n"]))),an=v.b.section(Qe||(Qe=Object(f.a)(["\n  max-width: 360px;\n  background: #fff;\n  margin: 2rem auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"])));function cn(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(rn,{children:"404"}),Object(B.jsxs)(an,{children:[Object(B.jsx)(y,{}),Object(B.jsx)(tn,{children:"Essa p\xe1gina n\xe3o existe"})]})]})}var on=t(50),sn=t(101),bn=["component"];var dn=function(e){var n=e.component,t=Object(sn.a)(e,bn),r=ne().currentUser;return Object(B.jsx)(S.b,Object(on.a)(Object(on.a)({},t),{},{render:function(e){return r?Object(B.jsx)(n,Object(on.a)({},e)):Object(B.jsx)(S.a,{to:{pathname:"/login"}})}}))};function ln(){return Object(B.jsx)(k.a,{children:Object(B.jsxs)(S.d,{children:[Object(B.jsx)(dn,{exact:!0,path:"/",component:Me}),Object(B.jsx)(dn,{exact:!0,path:"/upload",component:De}),Object(B.jsx)(dn,{exact:!0,path:"/galeria",component:cn}),Object(B.jsx)(S.b,{exact:!0,path:"/login",component:re}),Object(B.jsx)(S.b,{exact:!0,path:"/register",component:le}),Object(B.jsx)(S.b,{exact:!0,path:"/resetsenha",component:nn}),Object(B.jsx)(S.b,{path:"*",component:cn})]})})}var un=function(){return Object(B.jsxs)(te,{children:[Object(B.jsx)(y,{}),Object(B.jsx)(h.a,{autoClose:5e3}),Object(B.jsx)(ln,{})]})};O.a.render(Object(B.jsx)(m.a.StrictMode,{children:Object(B.jsx)(un,{})}),document.getElementById("root"))},58:function(e,n){}},[[550,1,2]]]);
//# sourceMappingURL=main.7879942b.chunk.js.map