(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[640],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8956:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),r=n(412);function o(){return(0,a.useEffect)((function(){r.Z.canUseDOM&&(n(2965),n(1150),window._manager||(window._manager=window.iframemanager()),window._manager.run({currLang:"fr",services:{youtube:{embedUrl:"https://www.youtube-nocookie.com/embed/{data-id}?autoplay=1&modestbranding=1&rel=0&color=white&showinfo=0",thumbnailUrl:"https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg",iframe:{allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;",onload:function(e,t){console.log("loaded iframe with data-id="+e)}},cookie:{name:"cc_youtube"},languages:{fr:{notice:'Ce contenu est h\xe9berg\xe9 par Google Ireland Limited.<br>En affichant le contenu externe, vous acceptez <a rel="noreferrer" href="https://www.youtube.com/t/terms" title="Conditions d\'Utilisation" target="_blank">les CGU</a> de youtube.com',loadBtn:"Accepter et charger la vid\xe9o",loadAllBtn:"Toujours accepter"}}},vimeo:{embedUrl:"https://player.vimeo.com/video/{data-id}?autoplay=1",thumbnailUrl:function(e,t){var n="https://vimeo.com/api/v2/video/"+e+".json",a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.response)[0].thumbnail_large;t(e)}},a.open("GET",n,!0),a.send()},iframe:{allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;"},cookie:{name:"cc_vimeo"},languages:{fr:{notice:'Ce contenu est h\xe9berg\xe9 par Vimeo.com, Inc.<br>En affichant le contenu externe, vous acceptez <a rel="noreferrer" href="https://vimeo.com/terms" title="Conditions d\'Utilisation" target="_blank">les CGU</a> de vimeo.com',loadBtn:"Accepter et charger la vid\xe9o",loadAllBtn:"Toujours accepter"}}}}}))}),[]),null}},1150:function(){var e;e={o:{},S:[],T:[],u:null,i:null,v:null,l:null,W:function(e){return{D:e.dataset.id,I:e.dataset.title,m:e.dataset.thumbnail,ba:e.dataset.params,K:e.hasAttribute("data-thumbnailpreload"),j:e,J:null,s:!1,R:!1,A:!0}},X:function(t,n){var a=this.o[t];if(t=a.length,"IntersectionObserver"in window)for(var r=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(e.O(n,a[t.target.dataset.index]),r.unobserve(t.target))}))})),o=0;o<t;o++)r.observe(a[o].j);else for(o=0;o<t;o++)e.O(n,a[o])},acceptService:function(t){function n(t,n){e.F(n.cookie.name)||e.Z(n.cookie),e.N(t,n)}if("all"===t)for(var a=this.l.length,r=0;r<a;r++)n(t=this.l[r],this.v[t]);else-1<this.l.indexOf(t)&&n(t,this.v[t])},rejectService:function(t){function n(t,n){e.F(n.cookie.name)&&e.U(n.cookie),e.$(t,n)}if("all"===t){this.u=null;for(var a=this.l.length,r=0;r<a;r++)n(t=this.l[r],this.v[t])}else-1<this.l.indexOf(t)&&n(t,this.v[t])},O:function(t,n){function a(e){n.J.style.backgroundImage="url('"+e+"')";var t=new Image;t.onload=function(){n.J.classList.add("loaded")},t.src=e}"string"==typeof n.m?(n.K&&this.H(n.m),""!==n.m&&a(n.m)):"function"==typeof t?t(n.D,(function(t){e.P(t),n.K&&this.H(t),a(t)})):"string"==typeof t&&(t=t.replace("{data-id}",n.D),this.P(t),n.K&&this.H(t),a(t))},B:function(e,t){if(!e.s){e.h=this.g("iframe");var n=e.ba||t.iframe&&t.iframe.params,a=t.embedUrl.replace("{data-id}",e.D);e.h.loading="lazy",e.I&&(e.h.title=e.I),t.iframe&&t.iframe.allow&&(e.h.allow=t.iframe.allow),n&&(a="ap:"===n.substring(0,3)?a+n.substring(3):a+"?"+n),e.h.src=encodeURI(a),e.h.onload=function(){e.j.classList.add("c-h-b"),e.h.onload=void 0,t.iframe&&"function"==typeof t.iframe.onload&&t.iframe.onload(e.D,this)},e.s=!0,e.j.appendChild(e.h)}},Y:function(e){e.h.parentNode.removeChild(e.h),e.s=!1},C:function(e){e.A&&(e.j.classList.add("c-h-n"),e.A=!1)},aa:function(e){e.A||(e.j.classList.remove("c-h-n","c-h-b"),e.A=!0)},F:function(e){return(e=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))?e.pop():""},Z:function(e){var t=new Date,n=e.path||"/",a=e.sameSite||"Lax",r=e.domain||location.hostname;t.setTime(t.getTime()+864e5*(e.expiration||182)),e=e.name+"=1; expires="+t.toUTCString()+"; Path="+n+";",e+=" SameSite="+a+";",-1<r.indexOf(".")&&(e+=" Domain="+r+";"),"https:"===location.protocol&&(e+=" Secure;"),document.cookie=e},U:function(e){document.cookie=e.name+"=; Path="+(e.path||"/")+"; Domain="+(e.domain||location.hostname)+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},G:function(e){if("object"==typeof e){var t=[],n=0;for(t[n++]in e);return t}},P:function(e){var t=(e=e.split("://"))[0];if(("http"==t||"https"==t)&&(e=e[1]&&e[1].split("/")[0]||!1)&&e!==location.hostname&&-1===this.S.indexOf(e)){var n=this.g("link");n.rel="preconnect",n.href=t+"://"+e,document.head.appendChild(n),this.S.push(e)}},H:function(e){if(e&&-1===this.T.indexOf(e)){var t=this.g("link");t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t),this.T.push(e)}},g:function(e){return document.createElement(e)},L:function(t,n,a){for(var r=this.o[t],o=r.length,i=0;i<o;i++)!function(o){var i=r[o];if(!i.R){o=n.languages[e.i].loadBtn;var c=n.languages[e.i].notice,s=n.languages[e.i].loadAllBtn,l=document.createDocumentFragment(),u=e.g("div"),d=e.g("span"),p=e.g("p"),m=e.g("button"),f=e.g("button"),h=e.g("span"),v=e.g("div"),g=e.g("div"),b=e.g("div"),y=e.g("div"),w=e.g("div");m.type=f.type="button",h.className="cc-text",m.type=f.type="button",h.className="cc-text",b.className="c-bg-i",i.J=b,g.className="c-ld","string"==typeof i.m&&""===i.m||(v.className="c-bg");var O=i.I,C=document.createDocumentFragment();if(O){var j=e.g("span");j.className="c-tl",j.insertAdjacentHTML("beforeend",O),C.appendChild(j)}m.textContent=o,f.textContent=s,h.appendChild(C),u&&h.insertAdjacentHTML("beforeend",c||""),d.appendChild(h),y.className="c-t-cn",d.className="c-n-t",p.className="c-n-c",u.className="c-nt",w.className="c-n-a",m.className="c-l-b",f.className="c-la-b",w.appendChild(m),w.appendChild(f),y.appendChild(d),y.appendChild(w),p.appendChild(y),u.appendChild(p),m.addEventListener("click",(function(){e.C(i),e.B(i,n)})),f.addEventListener("click",(function(){e.C(i),e.B(i,n),e.acceptService(t)})),v.appendChild(b),l.appendChild(u),(n.thumbnailUrl||i.m)&&l.appendChild(v),l.appendChild(g),a&&i.j.classList.add("c-h-n"),i.j.appendChild(l),i.R=!0}}(i)},N:function(t,n){var a,r=this.o[t];if(t=r.length,"IntersectionObserver"in window){this.u=new IntersectionObserver((function(t){for(var a=0;a<t.length&&null!==e.u;++a)t[a].isIntersecting&&function(a){setTimeout((function(){var o=t[a].target.dataset.index;e.B(r[o],n),e.C(r[o])}),50*a),e.u.unobserve(t[a].target)}(a)}));for(var o=0;o<t;o++)r[o].s||this.u.observe(r[o].j)}else for(o=0;o<t;o++)a=o,e.B(r[o],n),e.C(r[a])},$:function(t){for(var n=(t=this.o[t]).length,a=0;a<n;a++){var r=a;t[a].A||(t[a].s&&e.Y(t[a]),e.aa(t[r]))}},M:function(e,t){return t.hasOwnProperty(e)?e:0<this.G(t).length?t.hasOwnProperty(this.i)?this.i:this.G(t)[0]:void 0},V:function(){var e=navigator.language||navigator.browserLanguage;return 2<e.length&&(e=e[0]+e[1]),e.toLowerCase()},run:function(e){var t=e.services;this.v=t;var n=this.G(t);this.l=n;var a=n.length;if(0!==a){this.i=e.currLang;var r=t[n[0]].languages;for(!0===e.autoLang?this.i=this.M(this.V(),r):"string"==typeof e.currLang&&(this.i=this.M(e.currLang,r)),e=0;e<a;e++){r=n[e],this.o[r]=[];var o=document.querySelectorAll('div[data-service="'+r+'"]'),i=o.length;if(0!==i){for(var c=0;c<i;c++)o[c].dataset.index=c,this.o[r].push(this.W(o[c]));o=t[r],this.F(o.cookie.name)?(this.L(r,o,!0),this.N(r,o)):this.L(r,o,!1),this.X(r,o.thumbnailUrl)}}}}},window.iframemanager=function(){return window.iframemanager=void 0,e}},5178:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(8956),c=["components"],s={description:"Il est tr\xe8s simple de partager une \xe9valuation que vous avez cr\xe9\xe9 avec un coll\xe8gue enseignant dans votre \xe9cole et poss\xe9dant un compte Opencomp. D\xe9couvrez comment dans cette page."},l="Partager mon \xe9valuation",u={unversionedId:"creer-mes-evaluations/partager-mon-evaluation",id:"creer-mes-evaluations/partager-mon-evaluation",isDocsHomePage:!1,title:"Partager mon \xe9valuation",description:"Il est tr\xe8s simple de partager une \xe9valuation que vous avez cr\xe9\xe9 avec un coll\xe8gue enseignant dans votre \xe9cole et poss\xe9dant un compte Opencomp. D\xe9couvrez comment dans cette page.",source:"@site/docs/02-creer-mes-evaluations/05-partager-mon-evaluation.md",sourceDirName:"02-creer-mes-evaluations",slug:"/creer-mes-evaluations/partager-mon-evaluation",permalink:"/docv2/creer-mes-evaluations/partager-mon-evaluation",editUrl:"https://github.com/Opencomp/docv2/edit/documentation/docs/02-creer-mes-evaluations/05-partager-mon-evaluation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Il est tr\xe8s simple de partager une \xe9valuation que vous avez cr\xe9\xe9 avec un coll\xe8gue enseignant dans votre \xe9cole et poss\xe9dant un compte Opencomp. D\xe9couvrez comment dans cette page."},sidebar:"tutorialSidebar",previous:{title:"Imprimer mon \xe9valuation",permalink:"/docv2/creer-mes-evaluations/imprimer-mon-evaluation"},next:{title:"Saisir les r\xe9sultats",permalink:"/docv2/saisir-les-resultats/README"}},d=[],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"partager-mon-\xe9valuation"},"Partager mon \xe9valuation"),(0,o.kt)("p",null,"D\xe9couvrez cette fonctionnalit\xe9 en vid\xe9o :"),(0,o.kt)("div",{"data-service":"youtube","data-id":"cM35_GmvXE4","data-autoscale":!0}),(0,o.kt)(i.Z,{mdxType:"IframeManagerComponent"}))}m.isMDXComponent=!0},2965:function(e,t,n){"use strict";n.r(t)}}]);