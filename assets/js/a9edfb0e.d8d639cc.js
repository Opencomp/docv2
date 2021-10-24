"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8100],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,p=m["".concat(d,".").concat(f)]||m[f]||u[f]||o;return n?i.createElement(p,a(a({ref:t},s),{},{components:n})):i.createElement(p,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={description:"Comment v\xe9rifier et/ou modifier l'identifiant ONDE de ma classe ?"},d="Modifier l'identifiant ONDE",c={unversionedId:"gerer-ma-classe-au-quotidien/modifier-lidentifiant-onde",id:"gerer-ma-classe-au-quotidien/modifier-lidentifiant-onde",isDocsHomePage:!1,title:"Modifier l'identifiant ONDE",description:"Comment v\xe9rifier et/ou modifier l'identifiant ONDE de ma classe ?",source:"@site/docs/07-gerer-ma-classe-au-quotidien/modifier-lidentifiant-onde.md",sourceDirName:"07-gerer-ma-classe-au-quotidien",slug:"/gerer-ma-classe-au-quotidien/modifier-lidentifiant-onde",permalink:"/docv2/gerer-ma-classe-au-quotidien/modifier-lidentifiant-onde",editUrl:"https://github.com/Opencomp/doc/edit/master/docs/07-gerer-ma-classe-au-quotidien/modifier-lidentifiant-onde.md",tags:[],version:"current",frontMatter:{description:"Comment v\xe9rifier et/ou modifier l'identifiant ONDE de ma classe ?"},sidebar:"tutorialSidebar",previous:{title:"D\xe9part d'un \xe9l\xe8ve",permalink:"/docv2/gerer-ma-classe-au-quotidien/depart-dun-eleve"},next:{title:"Nouvel \xe9l\xe8ve en cours d'ann\xe9e",permalink:"/docv2/gerer-ma-classe-au-quotidien/nouvel-eleve-en-cours-dannee"}},s=[{value:"Qu&#39;est-ce que l&#39;identifiant ONDE de ma classe ?",id:"quest-ce-que-lidentifiant-onde-de-ma-classe-",children:[],level:2},{value:"Comment r\xe9cup\xe9rer l&#39;identifiant ONDE de ma classe ?",id:"comment-r\xe9cup\xe9rer-lidentifiant-onde-de-ma-classe-",children:[],level:2},{value:"Comment v\xe9rifier/modifier l&#39;identifiant ONDE de ma classe dans Opencomp ?",id:"comment-v\xe9rifiermodifier-lidentifiant-onde-de-ma-classe-dans-opencomp-",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modifier-lidentifiant-onde"},"Modifier l'identifiant ONDE"),(0,o.kt)("h2",{id:"quest-ce-que-lidentifiant-onde-de-ma-classe-"},"Qu'est-ce que l'identifiant ONDE de ma classe ?"),(0,o.kt)("p",null,"L'identifiant ONDE de votre classe est une suite de chiffres qui identifie de fa\xe7on unique votre classe dans le logiciel ONDE ","(","Outil Num\xe9rique pour la Direction d'\xc9cole",")"," de votre acad\xe9mie. Opencomp a besoin de conna\xeetre cet identifiant afin d'indiquer le num\xe9ro de votre classe dans les fichiers d'export vers LSU."),(0,o.kt)("p",null,"C'est cet identifiant qui permet \xe0 LSU de retrouver votre classe et vos \xe9l\xe8ves lorsque vous importez le fichier XML comportant les bilans p\xe9riodiques de vos \xe9l\xe8ves. "),(0,o.kt)("h2",{id:"comment-r\xe9cup\xe9rer-lidentifiant-onde-de-ma-classe-"},"Comment r\xe9cup\xe9rer l'identifiant ONDE de ma classe ?"),(0,o.kt)("p",null,"Pour savoir comment r\xe9cup\xe9rer l'identifiant ONDE de votre classe, consultez la page suivante :"),(0,o.kt)("p",null,'{% page-ref page="../aide-onde-directeurs/recuperer-lid-onde-dune-classe.md" %}'),(0,o.kt)("h2",{id:"comment-v\xe9rifiermodifier-lidentifiant-onde-de-ma-classe-dans-opencomp-"},"Comment v\xe9rifier/modifier l'identifiant ONDE de ma classe dans Opencomp ?"),(0,o.kt)("p",null,"Une fois que vous \xeates en possession de l'identifiant ONDE de votre classe, vous pouvez le v\xe9rifier/modifier dans Opencomp."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Depuis la page d'accueil, cliquez sur le bouton \"",(0,o.kt)("strong",{parentName:"li"},"\xc9l\xe8ves"),'" de votre classe. '),(0,o.kt)("li",{parentName:"ol"},"Cliquez ensuite sur le bouton avec un ic\xf4ne repr\xe9sentant une roue dent\xe9e, \xe0 droite de l'en-t\xeate du cadre \"",(0,o.kt)("strong",{parentName:"li"},"\xc9l\xe8ves"),'"'),(0,o.kt)("li",{parentName:"ol"},"S\xe9lectionnez l'\xe9l\xe9ment de menu \"",(0,o.kt)("strong",{parentName:"li"},"Modifier le titre de la classe et l'identifiant ONDE"),'".'),(0,o.kt)("li",{parentName:"ol"},"Renseignez l'identifiant correct de la classe.")),(0,o.kt)("p",null,"Effectuez un nouvel export en cliquant sur le bouton ",(0,o.kt)("strong",{parentName:"p"},"Export LSU")," depuis votre tableau de bord."))}m.isMDXComponent=!0}}]);