(this.webpackJsonplevelup=this.webpackJsonplevelup||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(24),a(9)),i=a(1),s=a(6),u=a.n(s),m=a(11),p=a(8);function f(e){var t,a=e.movie,n=e.config;return r.a.createElement(o.b,{to:"/movie/".concat(a.id)},r.a.createElement("li",null,(null===(t=n.images)||void 0===t?void 0:t.base_url)&&r.a.createElement("img",{src:n.images.base_url+"w342"+a.poster_path,alt:a.title+" Poster"})))}function v(e){var t=e.setFilter,a=e.filter;return r.a.createElement("label",null,r.a.createElement("input",{placeholder:"Search",onChange:function(e){return t(e.target.value)},value:a}))}function d(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(p.a)(l,2),i=o[0],s=o[1],d=Object(n.useState)({}),h=Object(p.a)(d,2),b=h[0],E=h[1],g=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=acb01648392c4e67394377c61583afcd");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/configuration?api_key=acb01648392c4e67394377c61583afcd");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,E(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w(),g()}),[]),r.a.createElement("div",null,r.a.createElement(v,{filter:a,setFilter:c}),r.a.createElement("ul",{className:"movieList"},i.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})).map((function(e){return r.a.createElement(f,{key:e.id,config:b,movie:e})}))))}function h(){var e=Object(i.f)().id,t=Object(n.useState)({}),a=Object(p.a)(t,2),c=a[0],l=a[1],o=function(){var t=Object(m.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=acb01648392c4e67394377c61583afcd");case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,l(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()})),c.title?r.a.createElement("div",null,r.a.createElement("img",{className:"backdrop",src:"https://image.tmdb.org/t/p/original"+c.backdrop_path,alt:c.title+" Backdrop"}),r.a.createElement("div",{className:"detailDetails"},r.a.createElement("img",{className:"detailPoster",src:"https://image.tmdb.org/t/p/w342"+c.poster_path,alt:c.title+" Poster"}),r.a.createElement("div",null,r.a.createElement("h1",null,c.title),r.a.createElement("h3",null,c.overview),r.a.createElement("ul",null,c.genres.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})))))):null}a(31);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{basename:"/MovieDB"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/movie/:id"},r.a.createElement(h,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(d,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.703a65e4.chunk.js.map