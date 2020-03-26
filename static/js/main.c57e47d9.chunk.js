(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{172:function(e,t,a){e.exports=a(200)},177:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(102),l=a.n(c),s=a(23),i=a(21),o=a(220),d=a(221),m=(a(177),a(2)),u=a(15),f=a.n(u),h=a(222),v=a(223),p=a(204),E=a(203);var g=function(e){var t=Object(n.useState)(e.state),a=Object(m.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){l(e.state)}),[e.state]),r.a.createElement("tr",{className:e.total?"is-total":""},r.a.createElement("td",{style:{fontWeight:600}},c.state),r.a.createElement("td",null,0===parseInt(c.confirmed)?"-":c.confirmed,r.a.createElement("span",{className:"deltas",style:{color:"#ff073a"}},0==!c.delta.confirmed&&r.a.createElement(E.a,null),c.delta.confirmed>0?"".concat(c.delta.confirmed):"")),r.a.createElement("td",{style:{color:0===parseInt(c.active)?"#B5B5B5":"inherit"}},0==parseInt(c.active)?"-":c.active,r.a.createElement("span",{className:"deltas",style:{color:"#007bff"}},0==!c.delta.active&&r.a.createElement(E.a,null),c.delta.active>0?"".concat(c.delta.active):"")),r.a.createElement("td",{style:{color:0===parseInt(c.recovered)?"#B5B5B5":"inherit"}},0===parseInt(c.recovered)?"-":c.recovered,r.a.createElement("span",{className:"deltas",style:{color:"#28a745"}},0==!c.delta.recovered&&r.a.createElement(E.a,null),c.delta.recovered>0?"".concat(c.delta.recovered):"")),r.a.createElement("td",{style:{color:0===parseInt(c.deaths)?"#B5B5B5":"inherit"}},0===parseInt(c.deaths)?"-":c.deaths,r.a.createElement("span",{className:"deltas",style:{color:"#6c757d"}},0==!c.delta.deaths&&r.a.createElement(E.a,null),c.delta.deaths>0?"".concat(c.delta.deaths):"")))};var y=function(e){var t=Object(n.useState)(e.states),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(0),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)({sortColumn:"confirmed",isAscending:!1}),f=Object(m.a)(u,2),h=f[0],v=f[1];Object(n.useEffect)((function(){!0===e.summary?l(e.states.slice(0,9)):l(e.states)}),[e.states]),Object(n.useEffect)((function(){if(c.length>0){var t=0;e.states.map((function(a,n){0!==n&&a.confirmed>0&&(t+=1),n===e.states.length-1&&d(t)}))}}),[c.length]);var E=function(e,t){var a=e.currentTarget.querySelector("abbr").getAttribute("title").toLowerCase();v({sortColumn:a,isAscending:h.sortColumn==a?!h.isAscending:"state"===h.sortColumn})};return function(e,t){var a=c.splice(0,1);c.sort((function(e,t){var a=h.sortColumn,n=e[a],r=t[a];return"state"!=a&&(n=parseInt(e[a]),r=parseInt(t[a])),h.isAscending?n>r||n==r&&e.state>t.state?1:-1:n<r||n==r&&e.state>t.state?1:-1})),c.unshift(a[0])}(),r.a.createElement("table",{className:"table fadeInUp",style:{animationDelay:"1s"}},r.a.createElement("h5",{className:"affected-count"},o," States/UTS Affected"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"state-heading",onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{title:"State"},"State/UT"),r.a.createElement("div",{style:{display:"state"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))),r.a.createElement("th",{onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-cherry":""),title:"Confirmed"},window.innerWidth<=769?window.innerWidth<=375?"C":"Cnfmd":"Confirmed"),r.a.createElement("div",{style:{display:"confirmed"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))),r.a.createElement("th",{onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-blue":""),title:"Active"},window.innerWidth<=769?window.innerWidth<=375?"A":"Actv":"Active"),r.a.createElement("div",{style:{display:"active"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))),r.a.createElement("th",{onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-green":""),title:"Recovered"},window.innerWidth<=769?window.innerWidth<=375?"R":"Rcvrd":"Recovered"),r.a.createElement("div",{className:"recovered"===h.sortColumn?"sort-black":""}),r.a.createElement("div",{style:{display:"recovered"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))),r.a.createElement("th",{onClick:function(e){return E(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-gray":""),title:"Deaths"},window.innerWidth<=769?window.innerWidth<=375?"D":"Dcsd":"Deaths"),r.a.createElement("div",{style:{display:"deaths"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))))),r.a.createElement("tbody",null,c.map((function(e,t){if(0!==t&&e.confirmed>0)return r.a.createElement(g,{key:t,state:e,total:!1})})),c.length>1&&!1===e.summary&&r.a.createElement(g,{key:0,state:c[0],total:!0})))};var b=function(e){var t=Object(n.useState)(e.data),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(0),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(0),f=Object(m.a)(u,2),h=f[0],v=f[1],p=Object(n.useState)(0),E=Object(m.a)(p,2),g=E[0],y=E[1],b=Object(n.useState)(0),w=Object(m.a)(b,2),j=w[0],N=w[1];Object(n.useEffect)((function(){l(e.data),O()}));var O=function(){var e=0,t=0,a=0,n=0;c.map((function(r,c){0!==c&&(e+=parseInt(r.confirmed),t+=parseInt(r.active),a+=parseInt(r.recovered),n+=parseInt(r.deaths))})),d(e),v(t),y(a),N(n)};return r.a.createElement("div",{className:"Level fadeInUp",style:{animationDelay:"0.8s"}},r.a.createElement("div",{className:"level-item is-cherry"},r.a.createElement("h5",null,"Confirmed"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.confirmeddelta>=0?"+"+e.deltas.confirmeddelta:e.deltas.confirmeddelta:"","]"),r.a.createElement("h1",null,o," ")),r.a.createElement("div",{className:"level-item is-blue"},r.a.createElement("h5",{className:"heading"},"Active"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta>=0?"+"+(e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta).toString():e.deltas.confirmeddelta-e.deltas.recovereddelta-e.deltas.deceaseddelta:"","]"),r.a.createElement("h1",{className:"title has-text-info"},h)),r.a.createElement("div",{className:"level-item is-green"},r.a.createElement("h5",{className:"heading"},"Recovered"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.recovereddelta>=0?"+"+e.deltas.recovereddelta:e.deltas.recovereddelta:"","]"),r.a.createElement("h1",{className:"title has-text-success"},g," ")),r.a.createElement("div",{className:"level-item is-gray"},r.a.createElement("h5",{className:"heading"},"Deceased"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.deceaseddelta>=0?"+"+e.deltas.deceaseddelta:e.deltas.deceaseddelta:"","]"),r.a.createElement("h1",{className:"title has-text-grey"},j)))},w=a(1),j=a(106),N=a(44);var O=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=(a[0],a[1],Object(n.useState)(e.states)),l=Object(m.a)(c,2),s=l[0],i=l[1],o=Object(n.useState)({}),d=Object(m.a)(o,2),u=d[0],f=d[1],h=Object(n.useState)({}),v=Object(m.a)(h,2),p=v[0],E=v[1],g=Object(n.useState)(1),y=Object(m.a)(g,2),b=(y[0],y[1]),O=Object(n.useRef)(null);Object(n.useEffect)((function(){e.states.length>1&&O.current&&(k(O.current),f(s[1]))}),[p]),Object(n.useEffect)((function(){if(s.length>1){for(var e=0,t=parseInt(s[1].confirmed),a=parseInt(s[1].confirmed),n=1;n<s.length;n++)e+=parseInt(s[n].confirmed),parseInt(s[n].confirmed)>parseInt(t)&&(t=parseInt(s[n].confirmed)),parseInt(s[n].confirmed)<parseInt(a)&&(a=parseInt(s[n].confirmed));E({total:e,maxConfirmed:t,minConfirmed:a})}}),[s.length]),Object(n.useEffect)((function(){i(e.states)}),[e.states]);var k=function(e){var t=w.q(e),a=+t.attr("width"),n=+t.attr("height"),r=w.k(),c=w.f().center([78.9,19]).scale(1e3).translate([a/2,n/2]),l=w.g(c);var i=w.o(w.h).domain([0,p.maxConfirmed/.8]);t.append("g").attr("class","legendLinear").attr("transform","translate(1, 450)");var o=Math.floor(p.maxConfirmed/5),d=Array.from(Array(6).keys()).map((function(e){return e*o})),u=Object(j.a)().shapeWidth(50).cells(d).titleWidth(3).labels((function(e){var t=e.i,a=e.genLength,n=e.generatedLabels;if(e.labelDelimiter,t===a-1){var r=Math.floor(n[t]);return"".concat(r,"+")}var c=1+Math.floor(n[t]),l=Math.floor(n[t+1]);return"".concat(c," - ").concat(l)})).title("Confirmed Cases").orient("vertical").scale(i);t.select(".legendLinear").call(u);var h=[w.i("/india.json")];Promise.all(h).then((function(e){var a=Object(m.a)(e,1)[0];s.map((function(e,t){r.set(e.state.toLowerCase(),e.confirmed)})),t.append("g").attr("class","states").selectAll("path").data(N.a(a,a.objects.india).features).enter().append("path").attr("fill",(function(e){var t=r.get(e.properties.ST_NM.toLowerCase());return 0==t?"#ffffff":w.h(.8*t/p.maxConfirmed)})).attr("d",l).attr("pointer-events","all").on("mouseenter",(function(e){var t;t=e.properties.ST_NM,s.map((function(e,a){e.state.toLowerCase()===t.toLowerCase()&&(f(e),b(a))}));var a=w.d.target;w.q(a.parentNode.appendChild(a)).attr("stroke","#ff073a").attr("stroke-width",2)})).on("mouseleave",(function(e){var t=r.get(e.properties.ST_NM.toLowerCase()),a=w.d.target,n=0==t?"#ffffff":w.h(.8*t/p.maxConfirmed);w.q(a).attr("fill",n).attr("stroke","None")})).style("cursor","pointer").append("title").text((function(e){return parseFloat(r.get(e.properties.ST_NM.toLowerCase())/p.total*100).toFixed(2)+"% from "+D(e.properties.ST_NM)})),t.append("path").attr("stroke","#ff073a20").attr("fill","none").attr("stroke-width",2).attr("d",l(N.b(a,a.objects.india)))}))},D=function(e){e=e.toLowerCase().split(" ");for(var t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")};return r.a.createElement("div",{className:"ChoroplethMap fadeInUp",style:{animationDelay:"1.2s"}},r.a.createElement("h1",{className:"header"},"Statistics by State"),r.a.createElement("h6",{className:"header"},window.innerWidth<=769?"Tap":"Hover"," over a state for more details"),r.a.createElement("div",{className:"svg-parent"},r.a.createElement("svg",{id:"chart",width:"650",height:window.innerWidth<=479?650:750,viewBox:"0 0 650 ".concat(window.innerWidth<=479?650:750),preserveAspectRatio:"xMidYMid meet",ref:O})),r.a.createElement("div",{className:"map-stats"},r.a.createElement("h4",null,u.state),r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.confirmed),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-blue"},r.a.createElement("h5",null,"Active"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.active),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.recovered),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.deaths),r.a.createElement("h6",null)))))};var k=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({}),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(10),f=Object(m.a)(u,2),h=f[0],v=f[1],p=Object(n.useState)(e.mode),E=Object(m.a)(p,2),g=E[0],y=E[1],b=Object(n.useState)(-1),j=Object(m.a)(b,2),N=j[0],O=j[1],k=Object(n.useRef)(null),D=Object(n.useRef)(null),x=Object(n.useRef)(null),C=Object(n.useRef)(null),S=Object(n.useRef)(null),I=Object(n.useRef)(null);Object(n.useEffect)((function(){e.timeseries.length>1&&l(e.timeseries.slice(0,e.timeseries.length-1))}),[e.timeseries.length]),Object(n.useEffect)((function(){c.length>1&&M(c)}),[c.length]),Object(n.useEffect)((function(){y(e.mode),O(N+1)}),[e.mode]),Object(n.useEffect)((function(){N>0&&A(M)}),[N]);var A=function(){for(var e=[k,D,x,C,S,I],t=0;t<=e.length;t++){if(t===e.length)return void M(c);w.q(e[t].current).selectAll("*").remove()}},M=function(e){var t=e;d(e[e.length-1]),v(e.length-1);var a=w.q(k.current),n=0,r=20,c=650-r-20,l=200-n-50,s=w.q(D.current),i=w.q(x.current),o=w.q(C.current),m=w.q(S.current),u=w.q(I.current),f=new Date(t[0].date+"2020"),h=new Date(t[e.length-1].date+"2020");h.setDate(h.getDate()+1);var p=w.p().domain([f,h]).range([r,c]),E=w.n().domain([0,e.length]).range([r,c]);a.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(w.a(p)),s.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(w.a(p)),i.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(w.a(p)),o.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(w.a(p)),m.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(w.a(p)),u.append("g").attr("transform","translate(0,"+l+")").attr("class","axis").call(w.a(p));var y=t[e.length-1].totalconfirmed,b=t[e.length-1].totalrecovered,j=t[e.length-1].totaldeceased,N=w.n().domain([-y/10,y]).range([l,n]),O=w.n().domain([-b/10,b]).range([l,n]),A=w.n().domain([-j/10,j]).range([l,n]),M=w.l(t,(function(e){return+e.dailyconfirmed})),R=w.l(t,(function(e){return+e.dailyrecovered})),q=w.l(t,(function(e){return+e.dailydeceased})),U=w.n().domain([-M/10,M]).range([l,n]),B=w.n().domain([-R/10,R]).range([l,n]),L=w.n().domain([-q/10,q]).range([l,n]);a.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(w.b(N).ticks(5).tickPadding(5)),s.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(w.b(g?N:O).ticks(5).tickPadding(5)),i.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(w.b(g?N:A).ticks(5).tickPadding(5)),o.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(w.b(g?N:U).ticks(5).tickPadding(5)),m.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(w.b(g?N:B).ticks(5).tickFormat((function(e){if(Math.floor(e)===e)return e})).tickPadding(5)),u.append("g").attr("transform","translate(".concat(c,", ",0,")")).attr("class","axis").call(w.b(g?N:L).ticks(5).tickFormat((function(e){if(Math.floor(e)===e)return e})).tickPadding(5));var W=[a,s,i,o,m,u],T=["totalconfirmed","totalrecovered","totaldeceased","dailyconfirmed","dailyrecovered","dailydeceased"],H=["#ff073a","#28a745","#6c757d","#ff073a","#28a745","#6c757d"],_=[N,O,A,U,B,L],P=W.map((function(a,n){var r=g?N:_[n];return a.append("g").append("circle").attr("fill",H[n]).attr("stroke",H[n]).attr("r",5).attr("cx",p(new Date(t[e.length-1].date+"2020"))).attr("cy",r(t[e.length-1][T[n]]))}));function Y(){d(t[e.length-1]),v(e.length-1),P.forEach((function(a,n){var r=g?N:_[n];a.attr("cx",p(new Date(t[e.length-1].date+"2020"))).attr("cy",r(t[e.length-1][T[n]]))}))}function F(){var a=w.m(this)[0],n=Math.round(E.invert(a));if(0<=n&&n<e.length){var r=t[n];d(r),v(n),P.forEach((function(e,t){var a=g?N:_[t];e.attr("cx",p(new Date(r.date+"2020"))).attr("cy",a(r[T[t]]))}))}}W.forEach((function(e){e.on("mousemove",F).on("touchmove",F).on("mouseout",Y).on("touchend",Y)})),a.append("path").datum(t).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",5).attr("cursor","pointer").attr("d",w.j().x((function(e){return p(new Date(e.date+"2020"))})).y((function(e){return N(e.totalconfirmed)})).curve(w.c)),a.selectAll(".dot").data(t).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return p(new Date(e.date+"2020"))})).attr("cy",(function(e){return N(e.totalconfirmed)})),s.append("path").datum(t).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",5).attr("cursor","pointer").attr("d",w.j().x((function(e){return p(new Date(e.date+"2020"))})).y((function(e){return g?N(e.totalrecovered):O(e.totalrecovered)})).curve(w.c)),s.selectAll(".dot").data(t).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return p(new Date(e.date+"2020"))})).attr("cy",(function(e){return g?N(e.totalrecovered):O(e.totalrecovered)})),i.append("path").datum(t).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",5).attr("cursor","pointer").attr("cursor","pointer").attr("d",w.j().x((function(e){return p(new Date(e.date+"2020"))})).y((function(e){return g?N(e.totaldeceased):A(e.totaldeceased)})).curve(w.c)),i.selectAll(".dot").data(t).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return p(new Date(e.date+"2020"))})).attr("cy",(function(e){return g?N(e.totaldeceased):A(e.totaldeceased)})),o.append("path").datum(t).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",5).attr("cursor","pointer").attr("d",w.j().x((function(e){return p(new Date(e.date+"2020"))})).y((function(e){return g?N(e.dailyconfirmed):U(e.dailyconfirmed)})).curve(w.c)),o.selectAll(".dot").data(t).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return p(new Date(e.date+"2020"))})).attr("cy",(function(e){return g?N(e.dailyconfirmed):U(e.dailyconfirmed)})),m.append("path").datum(t).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",5).attr("cursor","pointer").attr("d",w.j().x((function(e){return p(new Date(e.date+"2020"))})).y((function(e){return g?N(e.dailyrecovered):B(e.dailyrecovered)})).curve(w.c)),m.selectAll(".dot").data(t).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return p(new Date(e.date+"2020"))})).attr("cy",(function(e){return g?N(e.dailyrecovered):B(e.dailyrecovered)})),u.append("path").datum(t).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",5).attr("cursor","pointer").attr("cursor","pointer").attr("d",w.j().x((function(e){return p(new Date(e.date+"2020"))})).y((function(e){return g?N(e.dailydeceased):L(e.dailydeceased)})).curve(w.c)),u.selectAll(".dot").data(t).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",3).attr("cursor","pointer").attr("cx",(function(e){return p(new Date(e.date+"2020"))})).attr("cy",(function(e){return g?N(e.dailydeceased):L(e.dailydeceased)}))};return r.a.createElement("div",{className:"TimeSeries-Parent fadeInUp",style:{animationDelay:"1.7s"}},r.a.createElement("div",{className:"timeseries",style:{display:1===e.type?"flex":"none"}},r.a.createElement("div",{className:"svg-parent"},r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed ",o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.totalconfirmed),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].totalconfirmed-c[h-1].totalconfirmed>=0?"+"+(c[h].totalconfirmed-c[h-1].totalconfirmed):c[h].totalconfirmed-c[h-1].totalconfirmed:""))),r.a.createElement("svg",{ref:k,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green"},r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered ",o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.totalrecovered),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].totalrecovered-c[h-1].totalrecovered>=0?"+"+(c[h].totalrecovered-c[h-1].totalrecovered):c[h].totalrecovered-c[h-1].totalrecovered:""))),r.a.createElement("svg",{ref:D,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray"},r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased ",r.a.createElement("br",null),o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.totaldeceased),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].totaldeceased-c[h-1].totaldeceased>=0?"+"+(c[h].totaldeceased-c[h-1].totaldeceased):c[h].totaldeceased-c[h-1].totaldeceased:""))),r.a.createElement("svg",{ref:x,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"}))),r.a.createElement("div",{className:"timeseries",style:{display:2===e.type?"flex":"none"}},r.a.createElement("div",{className:"svg-parent"},r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed ",o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.dailyconfirmed),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].dailyconfirmed-c[h-1].dailyconfirmed>=0?"+"+(c[h].dailyconfirmed-c[h-1].dailyconfirmed):c[h].dailyconfirmed-c[h-1].dailyconfirmed:""))),r.a.createElement("svg",{ref:C,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green"},r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered ",o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.dailyrecovered),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].dailyrecovered-c[h-1].dailyrecovered>=0?"+"+(c[h].dailyrecovered-c[h-1].dailyrecovered):c[h].dailyrecovered-c[h-1].dailyrecovered:""))),r.a.createElement("svg",{ref:S,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray"},r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased ",r.a.createElement("br",null),o.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,o.dailydeceased),r.a.createElement("h6",null,c.length>0&&0!==h?c[h].dailydeceased-c[h-1].dailydeceased>=0?"+"+(c[h].dailydeceased-c[h-1].dailydeceased):c[h].dailydeceased-c[h-1].dailydeceased:""))),r.a.createElement("svg",{ref:I,width:"650",height:"200",viewBox:"0 0 650 200",preserveAspectRatio:"xMidYMid meet"}))))};var D=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({}),i=Object(m.a)(s,2),o=(i[0],i[1]),d=Object(n.useRef)(null),u=Object(n.useRef)(null),f=Object(n.useRef)(null),h=Object(n.useRef)(null);Object(n.useEffect)((function(){e.timeseries.length>1&&l(e.timeseries.slice(0,e.timeseries.length-2))}),[e.timeseries.length]),Object(n.useEffect)((function(){c.length>1&&function(t){var a=t;o(a[a.length-1]);var n=w.p().domain(w.e(a.slice(a.length-10,a.length-1),(function(e){return new Date(e.date+"2020")}))).range([0,p]),r=w.n().domain([0,w.l(a,(function(e){return+e.dailyconfirmed}))]).range([E,0]),c=(w.n().domain([0,w.l(a,(function(e){return+e.dailyconfirmed}))]).range([E,0]),w.n().domain([0,w.l(a,(function(e){return+e.dailyrecovered}))]).range([E,0]),w.n().domain([0,w.l(a,(function(e){return+e.dailydeceased}))]).range([E,0]),v.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",3).attr("cursor","pointer").attr("d",w.j().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailyconfirmed)})).curve(w.c))),l=c.node().getTotalLength();c.attr("stroke-dasharray",l+" "+l).attr("stroke-dashoffset",l).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),v.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailyconfirmed)})).on("mouseover",(function(e){w.q(w.d.target).attr("r","5"),o(e)})).on("mouseout",(function(e){w.q(w.d.target).attr("r","2"),o(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var s=g.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("cursor","pointer").attr("stroke","#007bff99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",w.j().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){if(0===t){a[a.length-9].dailyconfirmed,a[a.length-9].dailyrecovered,a[a.length-9].dailydeceased,a[a.length-10].dailyconfirmed,a[a.length-10].dailyrecovered,a[a.length-10].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)}a[a.length-9+t].dailyconfirmed,a[a.length-9+t].dailyrecovered,a[a.length-9+t].dailydeceased,a[a.length-10+t].dailyconfirmed,a[a.length-10+t].dailyrecovered,a[a.length-10+t].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)})).curve(w.c)),i=s.node().getTotalLength();s.attr("stroke-dasharray",i+" "+i).attr("stroke-dashoffset",i).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),g.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#007bff").attr("stroke","#007bff").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){a[a.length-1].dailyconfirmed,a[a.length-1].dailyrecovered,a[a.length-1].dailydeceased,a[a.length-2].dailyconfirmed,a[a.length-2].dailyrecovered,a[a.length-2].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)})).on("mouseover",(function(e){w.q(w.d.target).attr("r","5"),o(e)})).on("mouseout",(function(e){w.q(w.d.target).attr("r","2"),o(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var d=y.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",3).attr("cursor","pointer").attr("d",w.j().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailyrecovered)})).curve(w.c)),m=c.node().getTotalLength();d.attr("stroke-dasharray",m+" "+m).attr("stroke-dashoffset",m).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),y.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailyrecovered)})).on("mouseover",(function(e){w.q(w.d.target).attr("r","5"),o(e)})).on("mouseout",(function(e){w.q(w.d.target).attr("r","2"),o(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var u=b.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",w.j().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailydeceased)})).curve(w.c)),f=u.node().getTotalLength();u.attr("stroke-dasharray",f+" "+f).attr("stroke-dashoffset",f).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),b.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailydeceased)})).on("mouseover",(function(e){w.q(w.d.target).attr("r","5"),o(e)})).on("mouseout",(function(e){w.q(w.d.target).attr("r","2"),o(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1)}(c)}),[c.length]);var v=w.q(d.current),p=100-0-5,E=100-30-30,g=w.q(u.current),y=w.q(f.current),b=w.q(h.current);return r.a.createElement("div",{className:"Minigraph"},r.a.createElement("div",{className:"svg-parent fadeInUp",style:{animationDelay:"0.6s"}},r.a.createElement("svg",{ref:d,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-blue fadeInUp",style:{animationDelay:"0.7s"}},r.a.createElement("svg",{ref:u,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green fadeInUp",style:{animationDelay:"0.8s"}},r.a.createElement("svg",{ref:f,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray fadeInUp",style:{animationDelay:"0.9s"}},r.a.createElement("svg",{ref:h,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})))},x=a(29);var C=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(e.start?new Date(e.date):"null"===localStorage.getItem("start")?new Date:new Date(localStorage.getItem("start"))),h=Object(m.a)(u,2),v=h[0],p=(h[1],Object(n.useState)(new Date(Object(x.a)(new Date,v)).toISOString().slice(11,19))),E=Object(m.a)(p,2),g=E[0],y=E[1];Object(n.useEffect)((function(){w()}),[1]),Object(n.useEffect)((function(){c.length>1&&d(c[0])}),[c]),Object(n.useEffect)((function(){var e=setInterval((function(){y(new Date(Object(x.a)(new Date,v)).toISOString().slice(11,19))}),1e4);return b(0,c.length-1),function(){return clearInterval(e)}}),[g]);var b=function(e,t){var a=Math.random()*(t-e)+e;d(c[Math.floor(a)])},w=function(){f.a.get("https://api.covid19india.org/website_data.json").then((function(e){l(e.data.factoids)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"Banner fadeInUp",style:{animationDelay:"0.2s"}},r.a.createElement("div",{className:"snippet"},o?o.banner:""," \xa0"))};var S=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(1),p=Object(m.a)(u,2),E=p[0],g=p[1],w=Object(n.useState)(""),j=Object(m.a)(w,2),N=j[0],x=j[1],C=Object(n.useState)([]),S=Object(m.a)(C,2),I=S[0],A=S[1],M=Object(n.useState)([]),R=Object(m.a)(M,2),q=R[0],U=R[1],B=Object(n.useState)(!0),L=Object(m.a)(B,2),W=L[0],T=L[1];Object(n.useEffect)((function(){!1===o&&H()}),[o]);var H=function(){f.a.get("https://api.covid19india.org/data.json").then((function(e){l(e.data.statewise),A(e.data.cases_time_series),x(e.data.statewise[0].lastupdatedtime.replace("at","")),U(e.data.key_values[0]),d(!0)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"home-left"},r.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("div",{className:"header-mid"},r.a.createElement("div",{className:"titles"},r.a.createElement("h1",null,"India COVID-19 Tracker"),r.a.createElement("h6",null,"A Crowdsourced Initiative")),r.a.createElement("div",{className:"last-update"},r.a.createElement("h6",null,"Last Reported Case"),r.a.createElement("h3",null,isNaN(Date.parse(N))?"":Object(v.a)(Object(h.a)(new Date(N),"Asia/Calcutta"),Object(h.a)(new Date))+" Ago")))),r.a.createElement(b,{data:c,deltas:q}),r.a.createElement(D,{timeseries:I,animate:!0}),r.a.createElement(y,{states:c,summary:!1})),r.a.createElement("div",{className:"home-right"},r.a.createElement(O,{states:c}),r.a.createElement("div",{className:"timeseries-header fadeInUp",style:{animationDelay:"1.5s"}},r.a.createElement("h1",null,"Spread Trends"),r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"tab ".concat(1===E?"focused":""),onClick:function(){g(1)}},r.a.createElement("h4",null,"Cumulative")),r.a.createElement("div",{className:"tab ".concat(2===E?"focused":""),onClick:function(){g(2)}},r.a.createElement("h4",null,"Daily"))),r.a.createElement("div",{className:"timeseries-mode"},r.a.createElement("label",{htmlFor:"timeseries-mode"},"Scale Uniformly"),r.a.createElement("input",{type:"checkbox",checked:W,onChange:function(e){T(!W)}}))),r.a.createElement(k,{timeseries:I,type:E,mode:W})))};var I=function(e){var t=Object(n.useState)("Home"),a=Object(m.a)(t,2),c=a[0],l=a[1];return"/summary"!==window.location.pathname?r.a.createElement("div",{className:"Navbar",style:{animationDelay:"0.5s",height:"Clusters"===c?"2.5rem":"",transition:"all 0.3s ease-in-out"}},r.a.createElement("img",{className:"fadeInUp",src:"/icon.png",style:{animationDelay:"0.0s",width:"Clusters"===c?"1.5rem":"",height:"Clusters"===c?"1.5rem":"",transition:"all 0.3s ease-in-out"}}),r.a.createElement("div",{className:"navbar-left"},r.a.createElement(s.b,{to:"/",onClick:function(){l("Home")}},r.a.createElement("span",{className:"fadeInUp ".concat("Home"===c?"focused":""),style:{animationDelay:"0.2s"}},"Home")),r.a.createElement(s.b,{to:"/clusters",onClick:function(){l("Clusters")}},r.a.createElement("span",{className:"fadeInUp ".concat("Network Map"===c?"focused":""),style:{animationDelay:"0.3s"}},"Clusters")),r.a.createElement(s.b,{to:"/links",onClick:function(){l("Helpful Links")}},r.a.createElement("span",{className:"fadeInUp ".concat("Helpful Links"===c?"focused":""),style:{animationDelay:"0.4s"}},"Helpful Links")),r.a.createElement(s.b,{to:"/faq",onClick:function(){l("FAQs")}},r.a.createElement("span",{className:"fadeInUp ".concat("FAQs"===c?"focused":""),style:{animationDelay:"0.4s"}},"FAQ"))),r.a.createElement("div",{className:"navbar-right"})):r.a.createElement("div",null)};var A=function(e){return r.a.createElement("div",{className:"Links"},r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.2s"}},r.a.createElement("h3",null,"HELPLINE NUMBERS [by State]"),r.a.createElement("a",{href:"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.3s"}},r.a.createElement("h3",null,"Ministry of Health and Family Welfare, Gov. of India"),r.a.createElement("a",{href:"https://www.mohfw.gov.in/"},"https://www.mohfw.gov.in/")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.4s"}},r.a.createElement("h3",null,"WHO : COVID-19 Home Page"),r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"https://www.who.int/emergencies/diseases/novel-coronavirus-2019")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("h3",null,"CDC"),r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/faq.html"},"https://www.cdc.gov/coronavirus/2019-ncov/faq.html")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.6s"}},r.a.createElement("h3",null,"COVID-19 Global Tracker"),r.a.createElement("a",{href:"https://coronavirus.thebaselab.com/"},"https://coronavirus.thebaselab.com/")))};var M=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)([]),h=Object(m.a)(u,2),v=h[0],p=h[1],E=Object(n.useState)(!1),g=Object(m.a)(E,2),w=g[0],j=g[1];Object(n.useEffect)((function(){!1===w&&N()}),[w]);var N=function(){f.a.get("https://api.covid19india.org/data.json").then((function(e){l(e.data.statewise),d(e.data.key_values[0]),p(e.data.cases_time_series),j(!0)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"Summary"},r.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("h1",null,"India COVID-19 Tracker")),r.a.createElement(D,{timeseries:v,animate:!1}),r.a.createElement(b,{data:c,deltas:o}),r.a.createElement(y,{states:c,summary:!0}),r.a.createElement("div",{className:"summary-bottom"},r.a.createElement("div",{className:"summary-bottom-left"},r.a.createElement("img",{src:"icon.png",alt:"logo"}),r.a.createElement("h5",null,"We stand with everyone fighting on the frontlines")),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india"},"covid19india.org"))))};var R=function(e){return r.a.createElement("div",{className:"iframe-container",referrerPolicy:"no-referrer",width:"100%"},r.a.createElement("iframe",{src:"https://cluster.covid19india.org"}))};var q=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){s()}),[1]);var s=function(){f.a.get("https://api.covid19india.org/faq.json").then((function(e){l(e.data.faq)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"FAQ"},c.map((function(e,t){return r.a.createElement("div",{key:t,className:"faq fadeInUp",style:{animationDelay:"".concat(.5+.1*t,"s")}},r.a.createElement("h2",{className:"question"},e.question),r.a.createElement("h2",{className:"answer"},e.answer))})))},U=a(12).createBrowserHistory;var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{history:U},r.a.createElement(i.b,{render:function(e){var t=e.location;return r.a.createElement("div",{className:"Almighty-Router"},r.a.createElement(I,null),r.a.createElement(C,null),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/"})}}),r.a.createElement(i.d,{location:t},r.a.createElement(i.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(S,e)}}),r.a.createElement(i.b,{exact:!0,path:"/links",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(i.b,{exact:!0,path:"/summary",render:function(e){return r.a.createElement(M,e)}}),r.a.createElement(i.b,{exact:!0,path:"/clusters",render:function(e){return r.a.createElement(R,e)}}),r.a.createElement(i.b,{exact:!0,path:"/faq",render:function(e){return r.a.createElement(q,e)}})))}})),r.a.createElement("footer",{className:"fadeInUp",style:{animationDelay:"2s"}},r.a.createElement("img",{src:"/icon.png",alt:"logo"}),r.a.createElement("h5",null,"We stand with everyone fighting on the frontlines"),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india"},"covid19india")),r.a.createElement("div",{id:"footerButtons"},r.a.createElement("a",{className:"button",href:"https://bit.ly/patientdb",target:"_noblank"},r.a.createElement(o.a,null),r.a.createElement("span",null,"Crowdsourced Patient Database\xa0")),r.a.createElement("a",{href:"https://bit.ly/covid19crowd",className:"button telegram",target:"_noblank"},r.a.createElement(d.a,null),r.a.createElement("span",null,"Join Telegram to Collaborate!")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.c57e47d9.chunk.js.map