(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9795],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8956:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7294),i=n(412);function r(){return(0,a.useEffect)((function(){i.Z.canUseDOM&&(n(2965),n(1150),window._manager||(window._manager=window.iframemanager()),window._manager.run({currLang:"fr",services:{youtube:{embedUrl:"https://www.youtube-nocookie.com/embed/{data-id}?autoplay=1&modestbranding=1&rel=0&color=white&showinfo=0",thumbnailUrl:"https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg",iframe:{allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;",onload:function(e,t){console.log("loaded iframe with data-id="+e)}},cookie:{name:"cc_youtube"},languages:{fr:{notice:'Ce contenu est h\xe9berg\xe9 par Google Ireland Limited.<br>En affichant le contenu externe, vous acceptez <a rel="noreferrer" href="https://www.youtube.com/t/terms" title="Conditions d\'Utilisation" target="_blank">les CGU</a> de youtube.com',loadBtn:"Accepter et charger la vid\xe9o",loadAllBtn:"Toujours accepter"}}},vimeo:{embedUrl:"https://player.vimeo.com/video/{data-id}?autoplay=1",thumbnailUrl:function(e,t){var n="https://vimeo.com/api/v2/video/"+e+".json",a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.response)[0].thumbnail_large;t(e)}},a.open("GET",n,!0),a.send()},iframe:{allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;"},cookie:{name:"cc_vimeo"},languages:{fr:{notice:'Ce contenu est h\xe9berg\xe9 par Vimeo.com, Inc.<br>En affichant le contenu externe, vous acceptez <a rel="noreferrer" href="https://vimeo.com/terms" title="Conditions d\'Utilisation" target="_blank">les CGU</a> de vimeo.com',loadBtn:"Accepter et charger la vid\xe9o",loadAllBtn:"Toujours accepter"}}}}}))}),[]),null}},1150:function(){var e;e={o:{},S:[],T:[],u:null,i:null,v:null,l:null,W:function(e){return{D:e.dataset.id,I:e.dataset.title,m:e.dataset.thumbnail,ba:e.dataset.params,K:e.hasAttribute("data-thumbnailpreload"),j:e,J:null,s:!1,R:!1,A:!0}},X:function(t,n){var a=this.o[t];if(t=a.length,"IntersectionObserver"in window)for(var i=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(e.O(n,a[t.target.dataset.index]),i.unobserve(t.target))}))})),r=0;r<t;r++)i.observe(a[r].j);else for(r=0;r<t;r++)e.O(n,a[r])},acceptService:function(t){function n(t,n){e.F(n.cookie.name)||e.Z(n.cookie),e.N(t,n)}if("all"===t)for(var a=this.l.length,i=0;i<a;i++)n(t=this.l[i],this.v[t]);else-1<this.l.indexOf(t)&&n(t,this.v[t])},rejectService:function(t){function n(t,n){e.F(n.cookie.name)&&e.U(n.cookie),e.$(t,n)}if("all"===t){this.u=null;for(var a=this.l.length,i=0;i<a;i++)n(t=this.l[i],this.v[t])}else-1<this.l.indexOf(t)&&n(t,this.v[t])},O:function(t,n){function a(e){n.J.style.backgroundImage="url('"+e+"')";var t=new Image;t.onload=function(){n.J.classList.add("loaded")},t.src=e}"string"==typeof n.m?(n.K&&this.H(n.m),""!==n.m&&a(n.m)):"function"==typeof t?t(n.D,(function(t){e.P(t),n.K&&this.H(t),a(t)})):"string"==typeof t&&(t=t.replace("{data-id}",n.D),this.P(t),n.K&&this.H(t),a(t))},B:function(e,t){if(!e.s){e.h=this.g("iframe");var n=e.ba||t.iframe&&t.iframe.params,a=t.embedUrl.replace("{data-id}",e.D);e.h.loading="lazy",e.I&&(e.h.title=e.I),t.iframe&&t.iframe.allow&&(e.h.allow=t.iframe.allow),n&&(a="ap:"===n.substring(0,3)?a+n.substring(3):a+"?"+n),e.h.src=encodeURI(a),e.h.onload=function(){e.j.classList.add("c-h-b"),e.h.onload=void 0,t.iframe&&"function"==typeof t.iframe.onload&&t.iframe.onload(e.D,this)},e.s=!0,e.j.appendChild(e.h)}},Y:function(e){e.h.parentNode.removeChild(e.h),e.s=!1},C:function(e){e.A&&(e.j.classList.add("c-h-n"),e.A=!1)},aa:function(e){e.A||(e.j.classList.remove("c-h-n","c-h-b"),e.A=!0)},F:function(e){return(e=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))?e.pop():""},Z:function(e){var t=new Date,n=e.path||"/",a=e.sameSite||"Lax",i=e.domain||location.hostname;t.setTime(t.getTime()+864e5*(e.expiration||182)),e=e.name+"=1; expires="+t.toUTCString()+"; Path="+n+";",e+=" SameSite="+a+";",-1<i.indexOf(".")&&(e+=" Domain="+i+";"),"https:"===location.protocol&&(e+=" Secure;"),document.cookie=e},U:function(e){document.cookie=e.name+"=; Path="+(e.path||"/")+"; Domain="+(e.domain||location.hostname)+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},G:function(e){if("object"==typeof e){var t=[],n=0;for(t[n++]in e);return t}},P:function(e){var t=(e=e.split("://"))[0];if(("http"==t||"https"==t)&&(e=e[1]&&e[1].split("/")[0]||!1)&&e!==location.hostname&&-1===this.S.indexOf(e)){var n=this.g("link");n.rel="preconnect",n.href=t+"://"+e,document.head.appendChild(n),this.S.push(e)}},H:function(e){if(e&&-1===this.T.indexOf(e)){var t=this.g("link");t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t),this.T.push(e)}},g:function(e){return document.createElement(e)},L:function(t,n,a){for(var i=this.o[t],r=i.length,s=0;s<r;s++)!function(r){var s=i[r];if(!s.R){r=n.languages[e.i].loadBtn;var o=n.languages[e.i].notice,c=n.languages[e.i].loadAllBtn,l=document.createDocumentFragment(),u=e.g("div"),p=e.g("span"),m=e.g("p"),d=e.g("button"),h=e.g("button"),f=e.g("span"),v=e.g("div"),g=e.g("div"),k=e.g("div"),b=e.g("div"),w=e.g("div");d.type=h.type="button",f.className="cc-text",d.type=h.type="button",f.className="cc-text",k.className="c-bg-i",s.J=k,g.className="c-ld","string"==typeof s.m&&""===s.m||(v.className="c-bg");var N=s.I,y=document.createDocumentFragment();if(N){var C=e.g("span");C.className="c-tl",C.insertAdjacentHTML("beforeend",N),y.appendChild(C)}d.textContent=r,h.textContent=c,f.appendChild(y),u&&f.insertAdjacentHTML("beforeend",o||""),p.appendChild(f),b.className="c-t-cn",p.className="c-n-t",m.className="c-n-c",u.className="c-nt",w.className="c-n-a",d.className="c-l-b",h.className="c-la-b",w.appendChild(d),w.appendChild(h),b.appendChild(p),b.appendChild(w),m.appendChild(b),u.appendChild(m),d.addEventListener("click",(function(){e.C(s),e.B(s,n)})),h.addEventListener("click",(function(){e.C(s),e.B(s,n),e.acceptService(t)})),v.appendChild(k),l.appendChild(u),(n.thumbnailUrl||s.m)&&l.appendChild(v),l.appendChild(g),a&&s.j.classList.add("c-h-n"),s.j.appendChild(l),s.R=!0}}(s)},N:function(t,n){var a,i=this.o[t];if(t=i.length,"IntersectionObserver"in window){this.u=new IntersectionObserver((function(t){for(var a=0;a<t.length&&null!==e.u;++a)t[a].isIntersecting&&function(a){setTimeout((function(){var r=t[a].target.dataset.index;e.B(i[r],n),e.C(i[r])}),50*a),e.u.unobserve(t[a].target)}(a)}));for(var r=0;r<t;r++)i[r].s||this.u.observe(i[r].j)}else for(r=0;r<t;r++)a=r,e.B(i[r],n),e.C(i[a])},$:function(t){for(var n=(t=this.o[t]).length,a=0;a<n;a++){var i=a;t[a].A||(t[a].s&&e.Y(t[a]),e.aa(t[i]))}},M:function(e,t){return t.hasOwnProperty(e)?e:0<this.G(t).length?t.hasOwnProperty(this.i)?this.i:this.G(t)[0]:void 0},V:function(){var e=navigator.language||navigator.browserLanguage;return 2<e.length&&(e=e[0]+e[1]),e.toLowerCase()},run:function(e){var t=e.services;this.v=t;var n=this.G(t);this.l=n;var a=n.length;if(0!==a){this.i=e.currLang;var i=t[n[0]].languages;for(!0===e.autoLang?this.i=this.M(this.V(),i):"string"==typeof e.currLang&&(this.i=this.M(e.currLang,i)),e=0;e<a;e++){i=n[e],this.o[i]=[];var r=document.querySelectorAll('div[data-service="'+i+'"]'),s=r.length;if(0!==s){for(var o=0;o<s;o++)r[o].dataset.index=o,this.o[i].push(this.W(r[o]));r=t[i],this.F(r.cookie.name)?(this.L(i,r,!0),this.N(i,r)):this.L(i,r,!1),this.X(i,r.thumbnailUrl)}}}}},window.iframemanager=function(){return window.iframemanager=void 0,e}},6287:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=n(8956),o=["components"],c={},l="Num\xe9riser mes copies",u={unversionedId:"saisir-les-resultats/utiliser-opencomp-genie/numeriser-mes-copies",id:"saisir-les-resultats/utiliser-opencomp-genie/numeriser-mes-copies",isDocsHomePage:!1,title:"Num\xe9riser mes copies",description:"Directement depuis une solution d'impression (imprimante multifonction, copieur)",source:"@site/docs/03-saisir-les-resultats/utiliser-opencomp-genie/03-numeriser-mes-copies.md",sourceDirName:"03-saisir-les-resultats/utiliser-opencomp-genie",slug:"/saisir-les-resultats/utiliser-opencomp-genie/numeriser-mes-copies",permalink:"/docv2/saisir-les-resultats/utiliser-opencomp-genie/numeriser-mes-copies",editUrl:"https://github.com/Opencomp/docv2/edit/documentation/docs/03-saisir-les-resultats/utiliser-opencomp-genie/03-numeriser-mes-copies.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GNU/Linux",permalink:"/docv2/saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/gnu-linux"},next:{title:"D\xe9finir votre cl\xe9 d'API",permalink:"/docv2/saisir-les-resultats/utiliser-opencomp-genie/definir-votre-cle-dapi"}},p=[{value:"Directement depuis une solution d&#39;impression (imprimante multifonction, copieur)",id:"directement-depuis-une-solution-dimpression-imprimante-multifonction-copieur",children:[{value:"Exemple de num\xe9risation vers USB",id:"exemple-de-num\xe9risation-vers-usb",children:[],level:3},{value:"Comment num\xe9riser vers USB en utilisant le chargeur automatique de documents ?",id:"comment-num\xe9riser-vers-usb-en-utilisant-le-chargeur-automatique-de-documents-",children:[],level:3},{value:"Conseils concernant la num\xe9risation de vos copies",id:"conseils-concernant-la-num\xe9risation-de-vos-copies",children:[],level:3}],level:2},{value:"Depuis un ordinateur",id:"depuis-un-ordinateur",children:[{value:"Ordinateur avec Windows",id:"ordinateur-avec-windows",children:[],level:3},{value:"Ordinateur avec macOS",id:"ordinateur-avec-macos",children:[],level:3}],level:2},{value:"Autres conseils et param\xe8tres recommand\xe9s",id:"autres-conseils-et-param\xe8tres-recommand\xe9s",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"num\xe9riser-mes-copies"},"Num\xe9riser mes copies"),(0,r.kt)("h2",{id:"directement-depuis-une-solution-dimpression-imprimante-multifonction-copieur"},"Directement depuis une solution d'impression (imprimante multifonction, copieur)"),(0,r.kt)("p",null,"Pour num\xe9riser vos copies afin de les faire reconna\xeetre par Opencomp Genie, nous vous recommandons d'utiliser la solution d'impression de votre \xe9tablissement."),(0,r.kt)("p",null,"La majorit\xe9 des copieurs d\xe9sormais install\xe9s dans les \xe9tablissements scolaires permettent de num\xe9riser sur une cl\xe9 USB et disposent d'un chargeur automatique de documents vous permettant de num\xe9riser l'ensemble de vos copies en une seule fois."),(0,r.kt)("h3",{id:"exemple-de-num\xe9risation-vers-usb"},"Exemple de num\xe9risation vers USB"),(0,r.kt)("div",{"data-service":"vimeo","data-id":"164273945","data-autoscale":!0}),(0,r.kt)(s.Z,{mdxType:"IframeManagerComponent"}),(0,r.kt)("p",null,"Exemple de num\xe9risation vers USB (Konica Minolta)"),(0,r.kt)("h3",{id:"comment-num\xe9riser-vers-usb-en-utilisant-le-chargeur-automatique-de-documents-"},"Comment num\xe9riser vers USB en utilisant le chargeur automatique de documents ?"),(0,r.kt)("p",null,"L'interface utilisateur vous permettant de d\xe9finir les r\xe9glages afin de num\xe9riser vos copies vers une cl\xe9 USB varie d'une marque \xe0 l'autre."),(0,r.kt)("p",null,"Nous vous recommandons de vous r\xe9f\xe9rer \xe0 la notice d'utilisation de votre solution d'impression. La plupart des marques permettent de t\xe9l\xe9charger la notice de votre appareil depuis leur site de support/assistance."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://support.brother.com/g/b/productsearch.aspx?c=fr%5C&lang=fr%5C&content=ml"},"Support et assistance Brother")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.canon.fr/support/business-product-support/"},"Support et assistance Canon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.epson.fr/support"},"Support et assistance Epson")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.hp.com/fr-fr/products/printers"},"Support et assistance HP/Samsung (la division impression de Samsung a \xe9t\xe9 rachet\xe9e par HP)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://itraining.konicaminolta.eu/fr/systemes-dimpression.html"},"Support et assistance Konica Minolta")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://support.lexmark.com/index?page=productSelection%5C&locale=FR%5C&userlocale=FR_FR"},"Support et assistance Lexmark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.my-ricoh.com/Enduser/AD3063EB-90E2-4BC7-A6DC-ACB1547D9655/brand/bf120732-ce83-453e-aaee-7dac0a646e6f/language/9f50f866-33ee-4584-be51-5ba95d44734f/Search?page=1%5C&f_selectedproduct=ada185a2-6c5a-4c10-ba3c-fef873d112ff%5C&f_parentproductcategory=fbacbaa8-5e6a-4be4-8d36-a3a5f50e4c3e%5C&f_publicationtype=86aef8c9-f1cd-4cb8-b32b-708946ac38c8"},"Support et assistance Ricoh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sharp.fr/cps/rde/xchg/fr/hs.xsl/-/html/centre-de-telechargement.htm"},"Support et assistance Sharp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://impression.toshiba.fr/imprimantes-multifonctions/multifonctions"},"Support et assistance Toshiba"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Vous avez besoin d'aide pour trouver le mode d'emploi de votre solution d'impression ? N'h\xe9sitez pas \xe0 ",(0,r.kt)("a",{parentName:"p",href:"https://opencomp.fr/a-propos/contact/"},"nous contacter")," en nous pr\xe9cisant la marque et le mod\xe8le sp\xe9cifique, nous pourrons ainsi vous aider."))),(0,r.kt)("h3",{id:"conseils-concernant-la-num\xe9risation-de-vos-copies"},"Conseils concernant la num\xe9risation de vos copies"),(0,r.kt)("p",null,"1","."," Commencez toujours par d\xe9ramer le papier en pliant l\xe9g\xe8rement les copies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A l'aider de votre pouce, assurez vous que les copies ne sont pas coll\xe9es en les s\xe9parant."),(0,r.kt)("li",{parentName:"ul"},"Veillez \xe0 reformer une pile avec l'ensemble des bords droits en tapant les bords sur une surface plane.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/1061289711/original/Ohb0rdHz1ywhRP1768E6wTfDJx1_2rp3ZA.jpg?1516708257"},(0,r.kt)("img",{parentName:"a",src:"https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/1061289711/original/Ohb0rdHz1ywhRP1768E6wTfDJx1_2rp3ZA.jpg?1516708257",alt:null}))),(0,r.kt)("p",null,"2","."," Chargez les copies en respectant le sens d'introduction indiqu\xe9 sur votre chargeur automatique de documents."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/1061289833/original/_2Gbfqa1CioM5t9WEA1yam7kv-eOgmE1jA.jpg?1516708508"},(0,r.kt)("img",{parentName:"a",src:"https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/1061289833/original/_2Gbfqa1CioM5t9WEA1yam7kv-eOgmE1jA.jpg?1516708508",alt:null}))),(0,r.kt)("p",null,"3","."," Assurez-vous que les taquets du chargeur automatique de document touchent bien les bords des copies."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/1061290324/original/ou9FXF4f-MPVTHAgpfjroYt5DmQR8TFbfA.jpg?1516709224"},(0,r.kt)("img",{parentName:"a",src:"https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/1061290324/original/ou9FXF4f-MPVTHAgpfjroYt5DmQR8TFbfA.jpg?1516709224",alt:null}))),(0,r.kt)("h2",{id:"depuis-un-ordinateur"},"Depuis un ordinateur"),(0,r.kt)("h3",{id:"ordinateur-avec-windows"},"Ordinateur avec Windows"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Si ce n'est pas d\xe9j\xe0 fait, commencez par installer le logiciel vendu avec votre imprimante multifonctions ou votre scanner. Il est en g\xe9n\xe9ral pr\xe9sent sur un CD-ROM fourni avec l'appareil lors de son achat. Vous pouvez \xe9galement t\xe9l\xe9charger le logiciel sur le site de support du fabricant si vous avez perdu le disque (voir les liens direct ci-dessus)."))),(0,r.kt)("p",null,"Une fois que le logiciel de votre num\xe9riseur ou imprimante multifonction est install\xe9, utilisez le logiciel fourni par votre fabricant et permettant de scanner en respectant les param\xe8tres mentionn\xe9s dans la rubrique suivante (voir ",(0,r.kt)("em",{parentName:"p"},"Autres conseils et param\xe8tres recommand\xe9s"),")."),(0,r.kt)("p",null,"Si votre num\xe9riseur ou imprimante multifonction n'est pas fourni avec un logiciel permettant de num\xe9riser des documents, vous pouvez utiliser le logiciel libre et gratuit ",(0,r.kt)("a",{parentName:"p",href:"https://www.naps2.com"},"NAPS2"),"."),(0,r.kt)("h3",{id:"ordinateur-avec-macos"},"Ordinateur avec macOS"),(0,r.kt)("p",null,"Si vous utilisez un ordinateur Apple, r\xe9f\xe9rez-vous \xe0 la fiche technique d'Apple expliquant comment utiliser un scanner avec macOS. Voir ",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/fr-fr/HT204790"},"https://support.apple.com/fr-fr/HT204790")),(0,r.kt)("h2",{id:"autres-conseils-et-param\xe8tres-recommand\xe9s"},"Autres conseils et param\xe8tres recommand\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Num\xe9risez toujours vers un fichier au format PDF (Opencomp Genie ne peut traiter que des fichiers au format PDF)."),(0,r.kt)("li",{parentName:"ul"},"Num\xe9risez \xe0 un r\xe9solution de 300 dpi (dots per inche) ou 300 ppp (points par pouces)."),(0,r.kt)("li",{parentName:"ul"},"Num\xe9risez de pr\xe9f\xe9rence en couleurs."),(0,r.kt)("li",{parentName:"ul"},"Si vous n'\xeates pas s\xfbr\xb7e que les copies soient orient\xe9es avec le QR Code au recto (sur le dessus de la pile), num\xe9risez en recto/verso."),(0,r.kt)("li",{parentName:"ul"},"D\xe9sactivez les fonctions de compression de la taille du fichier PDF (le cas \xe9ch\xe9ant)")))}d.isMDXComponent=!0},2965:function(e,t,n){"use strict";n.r(t)}}]);