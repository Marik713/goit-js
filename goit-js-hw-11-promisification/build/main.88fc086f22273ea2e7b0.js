(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(n,t,e){"use strict";e.r(t);e("JBxO"),e("FdtR");var o=function(n){return new Promise((function(t,e){setTimeout((function(){t(n)}),n)}))},a=function(n){return console.log("Resolved after "+n+"ms")};o(2e3).then(a),o(1e3).then(a),o(1500).then(a);var i=function(n){return new Promise((function(t,e){var o,a,i=(o=200,a=500,Math.floor(Math.random()*(a-o+1)+o));setTimeout((function(){Math.random()>.3?t({id:n.id,time:i}):e(n.id)}),i)}))},c=function(n){var t=n.id,e=n.time;console.log("Transaction "+t+" processed in "+e+"ms")},r=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};i({id:70,amount:150}).then(c).catch(r),i({id:71,amount:230}).then(c).catch(r),i({id:72,amount:75}).then(c).catch(r),i({id:73,amount:100}).then(c).catch(r);e("lmye"),e("D/wG"),e("wCa+");var u=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],s=function(n,t){return new Promise((function(e){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}))},m=function(n){return console.table(n)};s(u,"Mango").then(m),s(u,"Lux").then(m)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.88fc086f22273ea2e7b0.js.map