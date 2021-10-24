"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3139],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return t?n.createElement(v,i(i({ref:r},c),{},{components:t})):n.createElement(v,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},5064:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(7462),a=t(7294),l=t(2389),i=t(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(9558),u=t(6010),c="tabItem_1uMI";function p(e){var r,t,n,l=e.lazy,i=e.block,p=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),b=(0,s.lx)(g,(function(e,r){return e.value===r.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(r=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(n=f[0])?void 0:n.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),O=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,a.useState)(h),w=N[0],x=N[1],T=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=O[d];null!=S&&S!==w&&g.some((function(e){return e.value===S}))&&x(S)}var z=function(e){var r=e.currentTarget,t=T.indexOf(r),n=g[t].value;n!==w&&(E(r),x(n),null!=d&&y(d,n))},D=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;t=T[n]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},v)},g.map((function(e){var r=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:w===r?0:-1,"aria-selected":w===r,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":w===r}),key:r,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:z,onClick:z},null!=t?t:r)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==w})}))))}function m(e){var r=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(r)},e))}},9443:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},321:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var n=t(7462),a=t(3366),l=(t(7294),t(3905)),i=t(5064),o=t(8215),s=["components"],u={description:"Apprenez comment installer le logiciel compagnon Opencomp Genie sur OS X ou macOS."},c="OS X et macOS",p={unversionedId:"saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/macos",id:"saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/macos",isDocsHomePage:!1,title:"OS X et macOS",description:"Apprenez comment installer le logiciel compagnon Opencomp Genie sur OS X ou macOS.",source:"@site/docs/03-saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/macos.md",sourceDirName:"03-saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel",slug:"/saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/macos",permalink:"/docv2/saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/macos",editUrl:"https://github.com/Opencomp/doc/edit/master/docs/03-saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/macos.md",tags:[],version:"current",frontMatter:{description:"Apprenez comment installer le logiciel compagnon Opencomp Genie sur OS X ou macOS."},sidebar:"tutorialSidebar",previous:{title:"GNU/Linux",permalink:"/docv2/saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/gnu-linux"},next:{title:"Windows",permalink:"/docv2/saisir-les-resultats/utiliser-opencomp-genie/installer-le-logiciel/windows"}},m=[{value:"1. T\xe9l\xe9charger",id:"1-t\xe9l\xe9charger",children:[],level:2},{value:"2. Installer",id:"2-installer",children:[],level:2},{value:"3. Lancer",id:"3-lancer",children:[{value:"Autoriser l&#39;ex\xe9cution pour la premi\xe8re fois",id:"autoriser-lex\xe9cution-pour-la-premi\xe8re-fois",children:[],level:3}],level:2}],d={toc:m};function v(e){var r=e.components,u=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},d,u,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"os-x-et-macos"},"OS X et macOS"),(0,l.kt)("h2",{id:"1-t\xe9l\xe9charger"},"1. T\xe9l\xe9charger"),(0,l.kt)("p",null,"Rendez-vous \xe0 l'adresse ",(0,l.kt)("a",{parentName:"p",href:"https://genie.opencomp.fr"},"https://genie.opencomp.fr")," et cliquez sur le bouton ",(0,l.kt)("strong",{parentName:"p"},"T\xe9l\xe9charger Opencomp Genie ","[","...] pour macOS"),". "),(0,l.kt)("h2",{id:"2-installer"},"2. Installer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cliquez sur la premi\xe8re ic\xf4ne de votre ",(0,l.kt)("strong",{parentName:"li"},"Dock")," pour lancer l'application ",(0,l.kt)("strong",{parentName:"li"},"Finder"),"."),(0,l.kt)("li",{parentName:"ul"},"Dans la barre lat\xe9rale du ",(0,l.kt)("strong",{parentName:"li"},"Finder"),", s\xe9lectionnez ",(0,l.kt)("strong",{parentName:"li"},"T\xe9l\xe9chargements "),"dans la section ",(0,l.kt)("strong",{parentName:"li"},"Favoris"),"."),(0,l.kt)("li",{parentName:"ul"},"Double-cliquez sur le fichier ",(0,l.kt)("strong",{parentName:"li"},"Opencomp-Genie-","[","xxxx.x.x.x].dmg"),"  pour ouvrir l'image disque pr\xe9c\xe9demment t\xe9l\xe9charg\xe9e depuis le site."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Glissez "),"l'ic\xf4ne d'",(0,l.kt)("strong",{parentName:"li"},"Opencomp Genie"),' vers votre dossier "',(0,l.kt)("strong",{parentName:"li"},"Applications"),'".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Glissez l&#39;ic\xf4ne d&#39;Opencomp Genie vers votre dossier &quot;Applications&quot;.",src:t(9208).Z})),(0,l.kt)("h2",{id:"3-lancer"},"3. Lancer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cliquez sur la premi\xe8re ic\xf4ne de votre ",(0,l.kt)("strong",{parentName:"li"},"Dock")," pour lancer l'application ",(0,l.kt)("strong",{parentName:"li"},"Finder"),"."),(0,l.kt)("li",{parentName:"ul"},"Dans la barre lat\xe9rale du ",(0,l.kt)("strong",{parentName:"li"},"Finder"),", s\xe9lectionnez ",(0,l.kt)("strong",{parentName:"li"},"Applications")," dans la section ",(0,l.kt)("strong",{parentName:"li"},"Favoris"),"."),(0,l.kt)("li",{parentName:"ul"},"Double-cliquez sur l'application ",(0,l.kt)("strong",{parentName:"li"},"Opencomp Genie")," pour la lancer.")),(0,l.kt)("h3",{id:"autoriser-lex\xe9cution-pour-la-premi\xe8re-fois"},"Autoriser l'ex\xe9cution pour la premi\xe8re fois"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Lors de la premi\xe8re ouverture, vous devrez valider la fen\xeatre de s\xe9curit\xe9 de Gatekeeper."))),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"macos1014",label:"macOS 10.14 et sup\xe9rieur",default:!0,mdxType:"TabItem"},'![Cliquez sur "Ouvrir" pour lancer Opencomp Genie pour la premi\xe8re fois.](../../../.gitbook/assets/gatekeeper-10-14.png)'),(0,l.kt)(o.Z,{value:"macos1013",label:"macOS 10.13 et ant\xe9rieur",mdxType:"TabItem"},'![Cliquez sur "Ouvrir" pour lancer Opencomp Genie pour la premi\xe8re fois.](../../../.gitbook/assets/gatekeeper-10-13.png)')))}v.isMDXComponent=!0},9208:function(e,r,t){r.Z=t.p+"assets/images/drag-to-app-folder-b2bbda0b4985a5fdb45df0564db4ce11.gif"}}]);