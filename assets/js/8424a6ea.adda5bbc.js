"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3821],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7019:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],p={},i="Classes",l={unversionedId:"api-rest-developpeurs/points-de-terminaison/api-rest-classrooms",id:"api-rest-developpeurs/points-de-terminaison/api-rest-classrooms",isDocsHomePage:!1,title:"Classes",description:'{% swagger baseUrl="httpsid.apikey" method="get" summary="/classrooms/:id.json" %}',source:"@site/docs/12-api-rest-developpeurs/points-de-terminaison/api-rest-classrooms.md",sourceDirName:"12-api-rest-developpeurs/points-de-terminaison",slug:"/api-rest-developpeurs/points-de-terminaison/api-rest-classrooms",permalink:"/docv2/api-rest-developpeurs/points-de-terminaison/api-rest-classrooms",editUrl:"https://github.com/Opencomp/docv2/edit/documentation/docs/12-api-rest-developpeurs/points-de-terminaison/api-rest-classrooms.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pr\xe9sentation de l'API REST",permalink:"/docv2/api-rest-developpeurs/presentation"},next:{title:"Nomenclatures",permalink:"/docv2/api-rest-developpeurs/points-de-terminaison/api-rest-nomenclatures"}},c=[],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"classes"},"Classes"),(0,s.kt)("p",null,'{% swagger baseUrl="',(0,s.kt)("a",{parentName:"p",href:"https://my.opencomp.fr%22"},'https://my.opencomp.fr"'),' path="/api/v1/classrooms/:id.:format?api_key=:api_key" method="get" summary="/classrooms/:id.json" %}\n{% swagger-description %}\nCe point d\'acc\xe8s vous permet de r\xe9cup\xe9rer une classe.\n{% endswagger-description %}'),(0,s.kt)("p",null,'{% swagger-parameter in="path" name="id" type="integer" %}\nL\'identifiant de la classe \xe0 r\xe9cup\xe9rer.\n{% endswagger-parameter %}'),(0,s.kt)("p",null,'{% swagger-parameter in="path" name="format" type="string" %}\nLe format de donn\xe9es \xe0 r\xe9cup\xe9rer en sortie.'),(0,s.kt)("p",null,"\\"),(0,s.kt)("p",null,"Peut \xeatre "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"json"))),(0,s.kt)("p",null," ou "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"xml"))),(0,s.kt)("p",null,".\n{% endswagger-parameter %}"),(0,s.kt)("p",null,'{% swagger-parameter in="query" name="api_key" type="string" %}\nVotre cl\xe9 d\'API.\n{% endswagger-parameter %}'),(0,s.kt)("p",null,'{% swagger-response status="200" description="Classe r\xe9cup\xe9r\xe9e avec succ\xe8s" %}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "id": 109,\n    "id_be": 10001455,\n    "title": "Classe de d\\u00e9mo 2018",\n    "year_id": 8,\n    "establishment_id": "DEMO1234",\n    "created": "2018-08-14T00:00:00+00:00",\n    "pupils_count": 25,\n    "evaluations_count": 4,\n    "license_key": null\n}\n')),(0,s.kt)("p",null,"{% endswagger-response %}"),(0,s.kt)("p",null,'{% swagger-response status="401" description="La cl\xe9 d\'API est manquante ou n\'existe pas." %}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "message": "API Key is missing or invalid. Retry with api_key query parameter.",\n    "url": "\\/api\\/v1\\/classrooms\\/view\\/17.json",\n    "code": 401\n}\n')),(0,s.kt)("p",null,"{% endswagger-response %}"),(0,s.kt)("p",null,'{% swagger-response status="403" description="La cl\xe9 d\'API est valide mais vous n\'avez pas la permission d\'acc\xe9der \xe0 la ressource demand\xe9e." %}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "message": "Vous n\\u0027\\u00eates pas autoris\\u00e9 \\u00e0 acc\\u00e9der \\u00e0 cet emplacement.",\n    "url": "\\/api\\/v1\\/classrooms\\/view\\/17.json?api_key=cc9e40009-5644-11e6-bec8-0242ac120004",\n    "code": 403\n}\n')),(0,s.kt)("p",null,"{% endswagger-response %}\n{% endswagger %}"))}m.isMDXComponent=!0}}]);