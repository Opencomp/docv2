"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7608],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return f}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?t.createElement(m,a(a({ref:r},l),{},{components:n})):t.createElement(m,a({ref:r},l))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2526:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var t=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_label:"R\xe9cup\xe9rer l'id d'une classe"},u="R\xe9cup\xe9rer l'identifiant ONDE d'une classe",s={unversionedId:"aide-onde-directeurs/recuperer-lid-onde-dune-classe",id:"aide-onde-directeurs/recuperer-lid-onde-dune-classe",isDocsHomePage:!1,title:"R\xe9cup\xe9rer l'identifiant ONDE d'une classe",description:"Ce num\xe9ro identifie votre classe de fa\xe7on unique dans le logiciel national BE1D/ONDE et le LSU. Le num\xe9ro est disponible lors d'une extraction depuis ONDE au format .csv",source:"@site/docs/09-aide-onde-directeurs/recuperer-lid-onde-dune-classe.md",sourceDirName:"09-aide-onde-directeurs",slug:"/aide-onde-directeurs/recuperer-lid-onde-dune-classe",permalink:"/docv2/aide-onde-directeurs/recuperer-lid-onde-dune-classe",editUrl:"https://github.com/Opencomp/docv2/edit/documentation/docs/09-aide-onde-directeurs/recuperer-lid-onde-dune-classe.md",tags:[],version:"current",frontMatter:{sidebar_label:"R\xe9cup\xe9rer l'id d'une classe"},sidebar:"tutorialSidebar",previous:{title:"Extraire les \xe9l\xe8ves depuis ONDE",permalink:"/docv2/aide-onde-directeurs/extraire-les-eleves-depuis-onde"},next:{title:"D\xe9termination des r\xe9sultats",permalink:"/docv2/foire-aux-questions/determination-des-resultats"}},l=[],d={toc:l};function p(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"r\xe9cup\xe9rer-lidentifiant-onde-dune-classe"},"R\xe9cup\xe9rer l'identifiant ONDE d'une classe"),(0,o.kt)("p",null,"Ce num\xe9ro identifie votre classe de fa\xe7on unique dans le logiciel national BE1D/ONDE et le LSU. Le num\xe9ro est disponible lors d'une extraction depuis ONDE au format .csv"),(0,o.kt)("p",null,"Dans le fichier d'extraction au format .csv que votre directeur/trice vous a communiqu\xe9 et qui contient les INE de vos \xe9l\xe8ves, il y a une colonne ","(",'n\xb018 - "Identifiant classe"',")"," qui contient cet identifiant."),(0,o.kt)("p",null,"Si vous ne disposez plus de ce fichier, vous pouvez effectuer une nouvelle extraction depuis ONDE/BE1D si vous avez les accr\xe9ditations ","(","vous \xeates directeur/trice de l'\xe9tablissement",")",". Dans le cas contraire, il faudra vous rapprocher du directeur/trice de votre \xe9tablissement pour qu'il vous communique ce fichier."),(0,o.kt)("div",{class:"pagination-nav__item"},(0,o.kt)("a",{class:"pagination-nav__link",href:"/aide-onde-directeurs/extraire-les-eleves-depuis-onde"},(0,o.kt)("div",{class:"pagination-nav__label"},"\u279c\xa0\xa0Extraire les \xe9l\xe8ves depuis ONDE"))))}p.isMDXComponent=!0}}]);