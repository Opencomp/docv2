"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6351],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7462),a=r(7294),i=r(2389),o=r(9443);var s=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(9558),p=r(6010),u="tabItem_1uMI";function c(e){var t,r,n,i=e.lazy,o=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=s(),N=h.tabGroupChoices,w=h.setTabGroupChoices,y=(0,a.useState)(g),x=y[0],E=y[1],T=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=N[m];null!=O&&O!==x&&v.some((function(e){return e.value===O}))&&E(O)}var j=function(e){var t=e.currentTarget,r=T.indexOf(t),n=v[r].value;n!==x&&(S(t),E(n),null!=m&&w(m,n))},q=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;r=T[n]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;r=T[a]||T[T.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},f)},v.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,p.Z)("tabs__item",u,{"tabs__item--active":x===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:q,onFocus:j,onClick:j},null!=r?r:t)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},8948:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(5064),s=r(8215),l=["components"],p={},u="Pr\xe9sentation de l'API REST",c={unversionedId:"api-rest-developpeurs/presentation",id:"api-rest-developpeurs/presentation",isDocsHomePage:!1,title:"Pr\xe9sentation de l'API REST",description:"Qu'est-ce-qu'une API REST ?",source:"@site/docs/12-api-rest-developpeurs/presentation.md",sourceDirName:"12-api-rest-developpeurs",slug:"/api-rest-developpeurs/presentation",permalink:"/docv2/api-rest-developpeurs/presentation",editUrl:"https://github.com/Opencomp/docv2/edit/documentation/docs/12-api-rest-developpeurs/presentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Version majeure 2019",permalink:"/docv2/notes-de-version/02-2019"},next:{title:"Classes",permalink:"/docv2/api-rest-developpeurs/points-de-terminaison/api-rest-classrooms"}},d=[{value:"Qu&#39;est-ce-qu&#39;une API REST ?",id:"quest-ce-quune-api-rest-",children:[],level:2},{value:"Int\xe9r\xeat de l&#39;API REST ?",id:"int\xe9r\xeat-de-lapi-rest-",children:[],level:2},{value:"Authentification",id:"authentification",children:[],level:2},{value:"Formats de retour",id:"formats-de-retour",children:[{value:"JSON",id:"json",children:[],level:3},{value:"XML",id:"xml",children:[],level:3}],level:2},{value:"Pagination des r\xe9sultats",id:"pagination-des-r\xe9sultats",children:[],level:2}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pr\xe9sentation-de-lapi-rest"},"Pr\xe9sentation de l'API REST"),(0,i.kt)("h2",{id:"quest-ce-quune-api-rest-"},"Qu'est-ce-qu'une API REST ?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"REST")," (",(0,i.kt)("strong",{parentName:"p"},"representational state transfer"),") est un style d'",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Architecture_informatique"},"architecture logicielle")," d\xe9finissant un ensemble de contraintes \xe0 utiliser pour cr\xe9er des services web. Les services web conformes au style d'architecture REST, aussi appel\xe9s services web ",(0,i.kt)("strong",{parentName:"p"},"RESTful"),", \xe9tablissent une interop\xe9rabilit\xe9 entre les ordinateurs sur ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Internet"},"Internet"),". Les services web REST permettent aux syst\xe8mes effectuant des requ\xeates de manipuler des ressources web via leurs repr\xe9sentations textuelles \xe0 travers un ensemble d'op\xe9rations uniformes et pr\xe9d\xe9finies ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Protocole_sans_%C3%A9tat"},"sans \xe9tat"),". "),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u2014 "),(0,i.kt)("a",{parentName:"p",href:"https://xtools.wmflabs.org/articleinfo/fr.wikipedia.org/Representational_state_transfer?editorlimit=200"},(0,i.kt)("em",{parentName:"a"},"Contributeurs de Wikip\xe9dia")),(0,i.kt)("em",{parentName:"p"},", l'encyclop\xe9die libre et gratuite"))),(0,i.kt)("h2",{id:"int\xe9r\xeat-de-lapi-rest-"},"Int\xe9r\xeat de l'API REST ?"),(0,i.kt)("p",null,"L'API REST d'Opencomp vous permet d'effectuer des actions automatis\xe9es sans avoir besoin d'utiliser manuellement l'application (par l'entremise d'un navigateur Web)."),(0,i.kt)("p",null,"L'API peut, par exemple, permettre \xe0 un programme de r\xe9cup\xe9rer des donn\xe9es depuis Opencomp (par exemple les \xe9l\xe8ves de vos classes, vos \xe9valuations, etc.) mais \xe9galement d'en envoyer (r\xe9sultats obtenus aux \xe9valuations par exemple)."),(0,i.kt)("h2",{id:"authentification"},"Authentification"),(0,i.kt)("p",null,"L'API REST est s\xe9curis\xe9e et vous n'avez bien s\xfbr acc\xe8s qu'aux donn\xe9es concernant vos classes."),(0,i.kt)("p",null,"Afin de vous authentifier, vous devez passer le param\xe8tre d'URL ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"api_key"))," avec pour valeur votre cl\xe9 d'API personnelle accessible depuis la rubrique ",(0,i.kt)("strong",{parentName:"p"},"Mon compte")," de l'application."),(0,i.kt)("h2",{id:"formats-de-retour"},"Formats de retour"),(0,i.kt)("p",null,"Le format de retour est toujours sp\xe9cifi\xe9 en fin d'URL."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Les formats de retour possibles sont :")),(0,i.kt)("h3",{id:"json"},"JSON"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"JavaScript Object Notation")," (",(0,i.kt)("strong",{parentName:"p"},"JSON"),") est un ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Format_de_donn%C3%A9es"},"format de donn\xe9es")," textuelles d\xe9riv\xe9 de la notation des ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Objet_(informatique)"},"objets")," du langage ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/JavaScript"},"JavaScript"),". Il permet de repr\xe9senter de l\u2019information structur\xe9e."),(0,i.kt)("p",{parentName:"blockquote"},"Un document JSON a pour fonction de repr\xe9senter de l'information accompagn\xe9e d'\xe9tiquettes permettant d'en interpr\xe9ter les divers \xe9l\xe9ments, sans aucune restriction sur le nombre de celles-ci."),(0,i.kt)("p",{parentName:"blockquote"},"Un document JSON ne comprend que deux types d'\xe9l\xe9ments structurels :"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"des ensembles de paires \xab nom \xbb (alias \xab cl\xe9 \xbb) / \xab valeur \xbb ;"),(0,i.kt)("li",{parentName:"ul"},"des listes ordonn\xe9es de valeurs.")),(0,i.kt)("p",{parentName:"blockquote"},"Ces m\xeames \xe9l\xe9ments repr\xe9sentent trois types de donn\xe9es :"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"des objets ;"),(0,i.kt)("li",{parentName:"ul"},"des tableaux ;"),(0,i.kt)("li",{parentName:"ul"},"des valeurs g\xe9n\xe9riques de type ",(0,i.kt)("a",{parentName:"li",href:"https://fr.wikipedia.org/wiki/Tableau_(structure_de_donn%C3%A9es)"},"tableau"),", ",(0,i.kt)("a",{parentName:"li",href:"https://fr.wikipedia.org/wiki/Objet_(informatique)"},"objet"),", ",(0,i.kt)("a",{parentName:"li",href:"https://fr.wikipedia.org/wiki/Bool%C3%A9en"},"bool\xe9en"),", nombre, ",(0,i.kt)("a",{parentName:"li",href:"https://fr.wikipedia.org/wiki/Cha%C3%AEne_de_caract%C3%A8res"},"cha\xeene")," ou ",(0,i.kt)("a",{parentName:"li",href:"https://fr.wikipedia.org/wiki/Null"},"null"),".")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u2014 "),(0,i.kt)("a",{parentName:"p",href:"https://xtools.wmflabs.org/articleinfo/fr.wikipedia.org/JavaScript_Object_Notation?editorlimit=200#top-editors"},(0,i.kt)("em",{parentName:"a"},"Contributeurs de Wikip\xe9dia")),(0,i.kt)("em",{parentName:"p"},", l'encyclop\xe9die libre et gratuite"))),(0,i.kt)("h3",{id:"xml"},"XML"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"L'",(0,i.kt)("strong",{parentName:"p"},"Extensible Markup Language"),", g\xe9n\xe9ralement appel\xe9 ",(0,i.kt)("strong",{parentName:"p"},"XML"),", \xab langage de balisage extensible \xbb en fran\xe7ais, est un ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/M%C3%A9talangage"},"m\xe9talangage")," informatique de ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Langage_de_balisage"},"balisage")," g\xe9n\xe9rique qui d\xe9rive du ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/SGML"},"SGML"),". Sa syntaxe est dite \xab extensible \xbb car elle permet de d\xe9finir diff\xe9rents ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Espace_de_noms_XML"},"espaces de noms"),", c'est-\xe0-dire des langages avec chacun leur vocabulaire et leur grammaire, comme ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/XHTML"},"XHTML"),", ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/XSLT"},"XSLT"),", ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/RSS"},"RSS"),", ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/SVG"},"SVG"),"\u2026 Elle est reconnaissable par son usage des ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Chevron_(typographie)"},"chevrons")," (",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},">"),") encadrant les noms des balises. L'objectif initial de XML est de faciliter l'\xe9change automatis\xe9 de contenus complexes (",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Arbre_enracin%C3%A9"},"arbres"),", texte enrichi, etc.) entre ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Syst%C3%A8me_d'information"},"syst\xe8mes d'informations")," h\xe9t\xe9rog\xe8nes (",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Interop%C3%A9rabilit%C3%A9_en_informatique"},"interop\xe9rabilit\xe9"),")."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u2014 "),(0,i.kt)("a",{parentName:"p",href:"https://xtools.wmflabs.org/articleinfo/fr.wikipedia.org/Extensible_Markup_Language?editorlimit=2000#top-editors"},(0,i.kt)("em",{parentName:"a"},"Contributeurs de Wikip\xe9dia,")),(0,i.kt)("em",{parentName:"p"}," l'encyclop\xe9die libre et gratuite"))),(0,i.kt)("h2",{id:"pagination-des-r\xe9sultats"},"Pagination des r\xe9sultats"),(0,i.kt)("p",null,"Lorsque l'API REST renvoie un ensemble de r\xe9sultats (listing), les r\xe9sultats sont pagin\xe9s. Dans ce cas, les informations de pagination telles que le nombre total de r\xe9sultats, le nombre de r\xe9sultats par page et la quantit\xe9 de pages sont indiqu\xe9s dans le tableau portant la cl\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"paging"),"."),(0,i.kt)(o.Z,{defaultValue:"json",values:[{label:"Exemple JSON",value:"json"},{label:"Exemple XML",value:"xml"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n     "paging": {\n         "count":38916,\n         "perPage":30,\n         "pageCount":1298\n     },\n     "objects": [{...},{...},{...}, ...]\n }\n'))),(0,i.kt)(s.Z,{value:"xml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<response>\n    <paging>\n        <count>38916</count>\n        <perPage>30</perPage>\n        <pageCount>1298</pageCount>\n    </paging>\n    <objects>...</objects>\n    <objects>...</objects>\n    <objects>...</objects>\n</response>\n")))))}f.isMDXComponent=!0}}]);