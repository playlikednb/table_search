(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(n,e,t){n.exports=t(239)},139:function(n,e){},141:function(n,e){},151:function(n,e){},153:function(n,e){},180:function(n,e){},182:function(n,e){},183:function(n,e){},188:function(n,e){},190:function(n,e){},196:function(n,e){},198:function(n,e){},217:function(n,e){},229:function(n,e){},232:function(n,e){},239:function(n,e,t){"use strict";t.r(e);var r,a,o,c,i,l,u=t(0),s=t(121),d=t(17),f=t(35),p=t(126),m=t(37),g=function(n,e){var t={key:n};return n===e.key?e.type===P.asc?Object(m.a)({},t,{type:P.desc}):{key:null,type:P.asc}:Object(m.a)({},t,{type:P.asc})},b=function(n){var e=n.data,t=n.sort;return null===t.key?e:Object(p.a)(e).sort(function(n,e){if(null===t.key)return 0;var r=n[t.key]>e[t.key]?1:-1;return t.type===P.desc?-1*r:r})},h=function(n){var e=n.text,t=n.data;return 0===e.length?t:t.filter(function(n){return Object.values(n).map(function(n){return Array.isArray(n)?n.join(", "):n.toString()}).join("|").includes(e.toLowerCase())}).map(function(n){return Object.keys(n).reduce(function(t,r){var a=n[r];return a=Array.isArray(n[r])?a.join(", "):a.toString(),Object(m.a)({},t,Object(f.a)({},r,a.replace(new RegExp(e,"gi"),function(n){return"<mark>".concat(n,"</mark>")})))},{})})},y=t(10),k=t(11),v=k.b.input(r||(r=Object(y.a)(["\n  height: 30px;\n  padding: 2px 8px;\n  line-height: 30px;\n  font-size: 16px;\n  margin-bottom: 15px;\n"]))),j=u.memo(function(n){return u.createElement(v,{type:"search",onChange:function(e){return n.onSearch(e.target.value)},placeholder:"Search"})}),O=k.b.table(a||(a=Object(y.a)(["\n  border-collapse: collapse;\n\n  width: 100%;\n\n  th,\n  td {\n    border: 1px solid black;\n    padding: 8px;\n  }\n\n  th {\n    padding-bottom: 14px;\n  }\n\n  mark {\n    background: #ffb184;\n  }\n"]))),x=k.b.th(o||(o=Object(y.a)(["\n  position: relative;\n  transition: background-color 0.15s ease;\n\n  &:hover {\n    background-color: #ededed;\n    cursor: pointer;\n  }\n\n  ","\n\n  ","\n"])),function(n){return n.active&&Object(k.a)(c||(c=Object(y.a)(["{\n      &:after {\n        content: '';\n        position: absolute;\n        left: 50%;\n        bottom: 6px;\n        transform: translateX(-50%);\n        width: 0;\n        height: 0;\n        border-left: 5px solid transparent;\n        border-right: 5px solid transparent;\n        border-top: 5px solid tomato;\n        opacity: .75;\n      }\n    }}"])))},function(n){return n.sortType===P.desc&&Object(k.a)(i||(i=Object(y.a)(["{\n      &:after {\n        transform: rotate(180deg);\n      }\n    }}"])))}),E=u.memo(function(n){var e=n.columns,t=n.data,r=n.sort;return u.createElement(O,null,u.createElement("thead",null,u.createElement("tr",null,e.map(function(e){return u.createElement(x,{key:e.key,active:r.key===e.key,sortType:r.type,onClick:function(){return n.handleSort(e.key)}},e.title)}))),u.createElement("tbody",null,t.map(function(n){return u.createElement("tr",{key:n.firstName+n.lastName+n.tags.toString()},e.map(function(e){var t=e.render?e.render(n[e.key]):n[e.key];return u.createElement("td",{key:e.key+n.firstName,dangerouslySetInnerHTML:{__html:t}})}))})))}),S=t(125),w=t.n(S),C=k.b.div(l||(l=Object(y.a)(["\n  margin-top: 15px;\n\n  .active {\n    font-weight: 700;\n    background-color: #425fc7;\n    color: #fff;\n    pointer-events: none;\n  }\n\n  .pagination {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .disabled {\n    pointer-events: none;\n    background-color: #cdcdcd;\n    border-color: transparent;\n    color: #888;\n  }\n\n  li {\n    cursor: pointer;\n    margin: 0 4px;\n    border: 1px solid #425fc7;\n    border-radius: 4px;\n    transition: background-color 0.15s ease, border-color 0.15s ease,\n      color 0.15s ease;\n\n    &:hover {\n      background-color: #a6c5ff;\n      border-color: #a6c5ff;\n    }\n\n    a {\n      display: inline-block;\n      padding: 5px 10px;\n    }\n  }\n"]))),M=u.memo(function(n){return u.createElement(C,null,u.createElement(w.a,{pageCount:n.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){return n.onPageChange(e.selected)},activeClassName:"active",containerClassName:"pagination"}))}),A=function(n){var e=Object(u.useState)(10),t=Object(d.a)(e,1)[0],r=Object(u.useState)(0),a=Object(d.a)(r,2),o=a[0],c=a[1],i=function(n){var e=n.data,t=n.limit,r=n.offset;return e.slice(r,r+t)}({data:n.data,limit:t,offset:o});return u.createElement("div",null,u.createElement(j,{onSearch:n.handleSearch}),u.createElement(E,{columns:n.columns,data:i,sort:n.sort,handleSort:n.handleSort}),u.createElement(M,{pageCount:Math.ceil(n.data.length/t),onPageChange:function(n){return c(n*t)}}))},N=t(38),L=t(39),T=function(){var n=Math.random();return{firstName:N.generate({words:1,numbers:0,saltLength:0}),lastName:N.generate({words:1,numbers:0,saltLength:0}),age:Math.floor(30*Math.random()),visits:Math.floor(100*Math.random()),progress:Math.floor(100*Math.random()),status:n>.66?"relationship":n>.33?"complicated":"single",tags:L.range(L.random(10)).map(function(){return N.generate({words:1,numbers:0,saltLength:0})})}};var D=50,P={asc:"ASC",desc:"DESC"},R=function(n){return Array.isArray(n)?n.join(", "):n};function I(){var n=Object(u.useMemo)(function(){return[{key:"firstName",title:"First name"},{key:"lastName",title:"Last name"},{key:"age",title:"Age"},{key:"visits",title:"Visits"},{key:"status",title:"Status"},{key:"tags",title:"Tags",render:R}]},[]),e=Object(u.useState)(function(){return n=D,L.range(n).map(function(){return T()});var n}),t=Object(d.a)(e,1)[0],r=Object(u.useState)({key:null,type:P.asc}),a=Object(d.a)(r,2),o=a[0],c=a[1],i=Object(u.useState)(""),l=Object(d.a)(i,2),s=l[0],f=l[1],p=b({data:t,sort:o}),m=h({text:s,data:p});return u.createElement("div",null,u.createElement("h1",null,"Test (1 lvl)"),u.createElement("h3",null,"Description of the task in the README.md"),u.createElement(A,{columns:n,data:m,sort:o,handleSort:function(n){c(function(e){return g(n,e)})},searchText:s,handleSearch:function(n){f(n)}}))}var J=document.getElementById("root");Object(s.render)(u.createElement(u.StrictMode,null,u.createElement(I,null)),J)}},[[127,2,1]]]);
//# sourceMappingURL=main.ada7e5bf.chunk.js.map