!function(){function e(e){return e&&e.__esModule?e.default:e}function r(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;t.register("2oeY3",(function(n,a){var i;i=n.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),r(n.exports,"default",(function(){return s}));var o=t("lBpE3"),l=t("kOpwP"),u=t("cpdFe");function s(r){var t=r.klippyLog;return o.jsxs("div",{className:e(l)(),children:[o.jsx("h2",{children:"General Analysis"}),t.stats.length.toLocaleString()," stats entries",o.jsx("h2",{children:"Temperature Analysis"}),JSON.stringify(u.searchForAbnormalTemperatureSpikes(t))]})}})),t.register("cpdFe",(function(e,n){r(e.exports,"searchForAbnormalTemperatureSpikes",(function(){return o}));var a=t("5Sbbl"),i=t("dHI7O");function o(e){var r=function(e){var r=[],t=[],n=!0,i=!1,o=void 0;try{for(var l,u=function(e,n){var i=n.value;t=t.slice(1,5).concat(i);var o={};t.forEach((function(e){return Object.entries(e).forEach((function(e){var r=a.slicedToArray(e,2),t=r[0],n=r[1];o[t]=(o[t]||0)+n}))})),r.push(Object.fromEntries(Object.entries(o).map((function(e){var r=a.slicedToArray(e,2);return[r[0],r[1]/t.length]}))))},s=e[Symbol.iterator]();!(n=(l=s.next()).done);n=!0)u(0,l)}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(i.statsToTemps(e.stats)),t=[],n=r[0],o=!0,l=!1,u=void 0;try{for(var s,c=r.slice(1)[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var f=s.value,d=!0,y=!1,v=void 0;try{for(var p,h=Object.entries(f)[Symbol.iterator]();!(d=(p=h.next()).done);d=!0){var b=a.slicedToArray(p.value,2),m=b[0],g=b[1];n[m]>0&&g>1.2*n[m]&&t.push({time:f.time,name:m,previousAverage:n[m],value:g})}}catch(e){y=!0,v=e}finally{try{d||null==h.return||h.return()}finally{if(y)throw v}}n=f}}catch(e){l=!0,u=e}finally{try{o||null==c.return||c.return()}finally{if(l)throw u}}return t}}))}();
//# sourceMappingURL=Analysis.cf3876c6.js.map