"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9642],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return v}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),v=a,m=d["".concat(l,".").concat(v)]||d[v]||c[v]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2293:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},l="V\xe9rifier les pr\xe9requis \xe0 l'export dans Opencomp",p={unversionedId:"exporter-vers-lsu/avant-dexporter/verifier-les-prerequis-a-lexport",id:"exporter-vers-lsu/avant-dexporter/verifier-les-prerequis-a-lexport",isDocsHomePage:!1,title:"V\xe9rifier les pr\xe9requis \xe0 l'export dans Opencomp",description:"Pour la classe :",source:"@site/docs/08-exporter-vers-lsu/avant-dexporter/verifier-les-prerequis-a-lexport.md",sourceDirName:"08-exporter-vers-lsu/avant-dexporter",slug:"/exporter-vers-lsu/avant-dexporter/verifier-les-prerequis-a-lexport",permalink:"/docv2/exporter-vers-lsu/avant-dexporter/verifier-les-prerequis-a-lexport",editUrl:"https://github.com/Opencomp/docv2/edit/documentation/docs/08-exporter-vers-lsu/avant-dexporter/verifier-les-prerequis-a-lexport.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Avant d'exporter",permalink:"/docv2/exporter-vers-lsu/avant-dexporter/README"},next:{title:"Param\xe9trer LSU",permalink:"/docv2/exporter-vers-lsu/avant-dexporter/parametrer-lsu/README"}},u=[],c={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"v\xe9rifier-les-pr\xe9requis-\xe0-lexport-dans-opencomp"},"V\xe9rifier les pr\xe9requis \xe0 l'export dans Opencomp"),(0,o.kt)("p",null,"Pour la classe :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"S'assurer que la classe contient bien l'",(0,o.kt)("strong",{parentName:"li"},"identifiant ONDE")," et qu'il est correct. Il ne s'agit pas de l'identifiant UAI/RNE de l'\xe9tablissement. Cet identifiant, interne au logiciel ONDE, ne peut \xeatre r\xe9cup\xe9r\xe9 qu'en r\xe9alisant ",(0,o.kt)("strong",{parentName:"li"},"une extraction des \xe9l\xe8ves depuis le logiciel ONDE"),". Si l'identifiant ONDE renseign\xe9 pour la classe est incorrect, cela m\xe8nera au rejet de l'ensemble des bilans de la classe import\xe9s dans LSU avec l'erreur \"",(0,o.kt)("strong",{parentName:"li"},"Classe non trouv\xe9e"),'". ')),(0,o.kt)("p",null,"Pour les \xe9l\xe8ves :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"S'assurer que les \xe9l\xe8ves pour lesquels vous souhaitez exporter les bilans p\xe9riodiques ",(0,o.kt)("strong",{parentName:"li"},"poss\xe8dent tous un INE "),"(Identifiant National \xc9l\xe8ve) de renseign\xe9.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Pour savoir comment r\xe9cup\xe9rer les INE de vos \xe9l\xe8ves et l'identifiant ONDE de votre classe, consultez la page \"",(0,o.kt)("strong",{parentName:"p"},"Extraire les \xe9l\xe8ves depuis ONDE"),'".'))),(0,o.kt)("p",null,'{% content-ref url="/aide-onde-directeurs/extraire-les-eleves-depuis-onde" %}\n',(0,o.kt)("a",{parentName:"p",href:"/aide-onde-directeurs/extraire-les-eleves-depuis-onde"},"extraire-les-eleves-depuis-onde.md"),"\n{% endcontent-ref %}"),(0,o.kt)("p",null,"Pour chaque p\xe9riode :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"S'assurer que les \xe9l\xe8ves ont ",(0,o.kt)("strong",{parentName:"li"},"au moins \xe9t\xe9 \xe9valu\xe9s dans trois domaines diff\xe9rents")," (par exemple Fran\xe7ais, Math\xe9matiques et Histoire) pour la p\xe9riode \xe0 exporter."),(0,o.kt)("li",{parentName:"ul"},"S'assurer que vous avez bien ",(0,o.kt)("strong",{parentName:"li"},"renseign\xe9 une appr\xe9ciation g\xe9n\xe9rale "),"chaque p\xe9riode/\xe9l\xe8ve \xe0 exporter (et que les appr\xe9ciations g\xe9n\xe9rales ne poss\xe8dent pas de sauts de ligne).")))}d.isMDXComponent=!0}}]);