(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[0],{74:function(n,e,t){"use strict";t.r(e);var a,c,r=t(0),o=t.n(r),i=t(29),s=t.n(i),d=t(8),l=t(9),b=Object(l.a)(a||(a=Object(d.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n  }\n\nbody{\n  background-color: #fff;\n  font-family: sans-serif;\n}\n\na{\n  text-decoration: none;\n  cursor: pointer;\n}\n\nbutton{\n  border: none;\n  cursor: pointer;\n}\n"]))),j=l.b.section(c||(c=Object(d.a)(["\n  max-width: 360px;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"]))),h=t(36),u=t(2),O=t(1);function x(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h1",{children:"Login"})})}var p,g,f=t(33),m=t(34),S=t(13),v=t(38),C=t(37),T=t(35),E=t.n(T),k=l.b.button(p||(p=Object(d.a)(["\n  padding: 10px 20px;\n  margin-top: 1rem;\n  background-color: red;\n  color: white;\n"]))),y=l.b.h1(g||(g=Object(d.a)(["\n  text-align: center;\n  margin-top: 1rem;\n  color: red;\n"])));function F(n){var e=n.handleChange,t=n.handleSend;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{children:"Upper Moments"}),Object(O.jsx)(j,{children:Object(O.jsxs)("form",{action:"#",method:"POST",encType:"multipart/form-data",children:[Object(O.jsx)("input",{type:"file",name:"image",onChange:e}),Object(O.jsx)(k,{type:"submit",name:"submit",onClick:t,className:"btn",children:"Enviar"})]})})]})}t(64).config();var _,w=function(n){Object(v.a)(t,n);var e=Object(C.a)(t);function t(n){var a;return Object(f.a)(this,t),(a=e.call(this,n)).state={selectedFile:null},a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.handleSend=a.handleSend.bind(Object(S.a)(a)),a}return Object(m.a)(t,[{key:"handleChange",value:function(n){this.setState({selectedFile:n.target.files[0]})}},{key:"handleSend",value:function(n){n.preventDefault();var e=new FormData;e.append("file",this.state.selectedFile);var t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3001;E.a.post(t,e,{}).then((function(n){console.log(n.statusText)})).catch((function(n){return console.log(n)}))}},{key:"render",value:function(){return Object(O.jsx)(F,{handleChange:this.handleChange,handleSend:this.handleSend})}}]),t}(r.Component),D=l.b.h1(_||(_=Object(d.a)(["\n  color: red;\n  text-align: center;\n"])));function P(){return Object(O.jsxs)(j,{children:[Object(O.jsx)(b,{}),Object(O.jsx)(D,{children:"Essa p\xe1gina n\xe3o existe"})]})}function R(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/",component:w}),Object(O.jsx)(u.a,{exact:!0,path:"/login",component:x}),Object(O.jsx)(u.a,{component:P})]})})}var H=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b,{}),Object(O.jsx)(R,{})]})};s.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(H,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.74069f34.chunk.js.map