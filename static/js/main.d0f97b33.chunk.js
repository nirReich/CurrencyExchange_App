(this.webpackJsonpexchange_calc_app=this.webpackJsonpexchange_calc_app||[]).push([[0],{44:function(e,t,c){},46:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(35),i=c.n(a),r=(c(44),c(23)),l=c.n(r),j=c(36),o=c(20),h=c(8),b=(c(46),c(47),c(15)),x=c(2),u=c(76),d=c(0);function O(e){return Object(d.jsxs)("div",{className:"resultBox",children:[Object(d.jsx)("h4",{children:"Your currency exchange result:"}),Object(d.jsx)("h3",{children:e.exResult}),Object(d.jsx)(u.a,{onClick:function(){e.exResultHandler()},children:"Ok"})]})}function f(e){var t=Object(n.useState)(""),c=Object(h.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),r=Object(h.a)(i,2),l=r[0],j=r[1],o=Object(n.useState)(""),x=Object(h.a)(o,2),f=x[0],m=x[1],v=function(){return e.coinList.map((function(e,t){return Object(d.jsx)("option",{value:e.name,children:e.name},t)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"headTitle",children:"Exchange App"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"fromToExBox",children:[Object(d.jsx)("h3",{className:"fromToHeaders",children:"from:"}),Object(d.jsxs)("select",{className:"exDropdowns",name:"fromCoin",id:"fromCoin",onChange:function(e){a(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Select Currency"}),v()]}),Object(d.jsx)("input",{className:"exInputs",type:"number",id:"startExBtn",onChange:function(e){m(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("h3",{className:"fromToHeaders",children:"to:"}),Object(d.jsxs)("select",{className:"exDropdowns",name:"toCoin",id:"toCoin",onChange:function(e){j(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Select Currency"}),v()]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"exMainBtn",disabled:""===s||""===l||0===f,onClick:function(){!function(t,c,n){var s=function(t){for(var c=0;c<e.coinList.length;c++)if(e.coinList[c].name===t)return e.coinList[c].val},a=s(t),i=s(c)/a*n;e.pushExList({from:t,to:c,amount:n,result:i})}(s,l,f)},children:" = "}),function(){if(e.exResult)return Object(d.jsx)(O,{exResult:e.exResult,exResultHandler:e.exResultHandler})}()]}),Object(d.jsxs)(b.b,{to:"/update",children:[Object(d.jsx)(u.a,{variant:"warning",children:"Update"})," "]}),Object(d.jsxs)("a",{href:"http://www.facebook.com",target:"_blank",children:[Object(d.jsx)(u.a,{variant:"primary",children:"Share on FaceBook"})," "]}),Object(d.jsx)(u.a,{variant:"warning",onClick:function(){e.setTheFlag()},children:"View Your Exchange List"})," "]})}var m=c(18),v=c.n(m);function p(e){var t=Object(n.useState)(""),c=Object(h.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),r=Object(h.a)(i,2),l=r[0],j=r[1];Object(n.useEffect)((function(){s&&v.a.get("http://api.exchangeratesapi.io/v1/latest?access_key=0f68db3395a02354ca91823bea46077a&symbols=".concat(s)).then((function(e){j(e.data.rates[s])})).then(console.log(l)).catch((function(e){return console.log(e.code)}))}),[s]);var o=""!==l?l:"Pick coin";return Object(d.jsxs)("div",{className:"UpdatePage",children:[Object(d.jsx)("h1",{className:"updTitle",children:"Update"}),Object(d.jsxs)("div",{className:"bodyUpdPage",children:[Object(d.jsxs)("table",{className:"excListDiv",children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Value"})]}),e.coinList.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.val})]},t)}))]}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{className:"updateTitles",children:"Coin Type"}),Object(d.jsx)("br",{}),e.allCoins!==[]?Object(d.jsxs)("select",{className:"exDropdowns",name:"coinsSel",id:"coinsSel",onChange:function(e){!function(e){(e>="a"&&e<="z"||e>="A"&&e<="Z")&&a(e)}(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"select coin to add"}),e.allCoins.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}))]}):Object(d.jsx)("p",{children:"no coins to add"}),Object(d.jsx)("h4",{className:"updateTitles",children:"New Value"}),Object(d.jsx)("div",{className:"newValDiv",children:o}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)(b.b,{to:"/",children:[" ",Object(d.jsx)(u.a,{className:"updBtn",variant:"danger",children:"Back"})]}),Object(d.jsx)(u.a,{variant:"success",className:"updBtn",onClick:function(){return e.updateCoinList(s,l)},children:"Add coin"})]})]})}var g=c(38),w=c(39),L=c(12);function C(){return Object(d.jsx)("div",{className:"footerDiv",children:Object(d.jsx)(g.a,{children:Object(d.jsxs)(w.a,{children:[Object(d.jsxs)(L.a,{xs:"2",children:["Created by ",Object(d.jsx)("span",{className:"myName",children:"Nir Reich"})]}),Object(d.jsx)(L.a,{xs:"2"}),Object(d.jsx)(L.a,{xs:"1",children:Object(d.jsx)("a",{href:"https://github.com/nirReich",target:"_blank",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"white",class:"bi bi-github",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})}),Object(d.jsx)(L.a,{xs:"1",children:Object(d.jsx)("a",{href:"http://www.linkedin.com/in/nir-reich",target:"_blank",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"white",class:"bi bi-linkedin",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})}),Object(d.jsx)(L.a,{xs:"1",children:Object(d.jsx)("a",{href:"mailto:reich.nir@gmail.com",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",class:"bi bi-envelope",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})})})}),Object(d.jsx)(L.a,{xs:"1",children:Object(d.jsx)("a",{href:"https://www.facebook.com/nir.reich",target:"_blank",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"white",class:"bi bi-facebook",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})})}),Object(d.jsx)(L.a,{xs:"2"}),Object(d.jsx)(L.a,{xs:"2"})]})})})}function N(e){return Object(d.jsxs)("div",{className:"excListDiv",children:[Object(d.jsxs)("h3",{children:["Exchange  ",e.index+1]}),Object(d.jsxs)("h4",{children:["From: ",e.exList.from," To: ",e.exList.to]}),Object(d.jsxs)("h4",{children:[e.exList.amount," ",e.exList.from," = ",e.exList.result," ",e.exList.to]}),Object(d.jsx)("button",{className:"listBtn",onClick:function(){e.removeExList(e.index)},children:"X"})]})}function k(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"exchangeListBox",children:[Object(d.jsx)("button",{className:"exitBtn",onClick:function(){return e.setTheFlag()},children:"Exit"}),Object(d.jsx)("h1",{children:"Your exchange list:"}),e.exList.map((function(t,c){return Object(d.jsx)(N,{exList:e.exList[c],index:c,removeExList:e.removeExList})}))]})})}var S=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(h.a)(a,2),r=i[0],u=i[1],O=Object(n.useState)(!1),m=Object(h.a)(O,2),g=m[0],w=m[1],L=Object(n.useState)([]),N=Object(h.a)(L,2),S=N[0],y=N[1],E=Object(n.useState)(""),B=Object(h.a)(E,2),T=B[0],R=B[1],V=function(e){u([].concat(Object(o.a)(r),[e]))},z=function(e){u(r.filter((function(t,c){return c!==e})))},D=function(){w(!g)},H=function(e,t){var n=function(e){for(var t=0;t<c.length;t++){if(c[t].name===e)return t;break}}(e);isNaN(n)?s([].concat(Object(o.a)(c),[{name:e,val:t}])):(c[n].val=t,s(Object(o.a)(c)))};Object(n.useEffect)((function(){_(),F()}),[]),Object(n.useEffect)((function(){0!==r.length&&R(r[r.length-1].result)}),[r]);var U=function(){R("")},_=function(){v.a.get("http://api.exchangeratesapi.io/v1/latest?access_key=0f68db3395a02354ca91823bea46077a&symbols=USD,ILS,EUR").then((function(e){return console.log("API latest USD,ILS,EUR get request success "+e.data.success),s([{name:"USD",val:e.data.rates.USD},{name:"EUR",val:e.data.rates.EUR},{name:"ILS",val:e.data.rates.ILS}])})).catch((function(e){return console.log(e.code)}))},F=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,v.a.get("http://api.exchangeratesapi.io/v1/symbols?access_key=0f68db3395a02354ca91823bea46077a").then((function(e){console.log("API symbols get request success "+e.data.success);for(var c=e.data.symbols,n=Object.entries(c),s=0;s<n.length;s++)t.push(n[s][0])})).then(y(t)).catch((function(e){return console.error(e.code)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b.a,{children:Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{exact:!0,path:"/",component:function(){return Object(d.jsx)(f,{exResultHandler:U,exResult:T,coinList:c,pushExList:V,setTheFlag:D})}}),Object(d.jsx)(x.a,{exact:!0,path:"/update",component:function(){return Object(d.jsx)(p,{allCoins:S,coinList:c,updateCoinList:H})}}),Object(d.jsx)("br",{})]})}),Object(d.jsx)("br",{}),function(){if(!0===g)return Object(d.jsx)(k,{setTheFlag:D,exList:r,removeExList:z})}(),Object(d.jsx)(C,{})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),y()}},[[75,1,2]]]);
//# sourceMappingURL=main.d0f97b33.chunk.js.map