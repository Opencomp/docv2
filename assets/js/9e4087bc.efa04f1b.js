"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3608],{895:function(e,t,r){r.d(t,{dK:function(){return c},_k:function(){return o},vc:function(){return u},rx:function(){return l},qo:function(){return s},Hk:function(){return i},Iz:function(){return m}});var n=r(1336),a=r.n(n);r(892)(a()),r(2724)(a());var c=["fr"],o=!1,u=null,l="c287c39a",s=8,i=50,m={search_placeholder:"Rechercher",see_all_results:"Voir tous les r\xe9sultats",no_results:"Aucun r\xe9sultat",search_results_for:'R\xe9sultats de la recherche pour "{{ keyword }}"',search_the_documentation:"Rechercher dans la documentation",count_documents_found:"{{ count }} document trouv\xe9",count_documents_found_plural:"{{ count }} documents trouv\xe9s",no_documents_were_found:"Aucun document n'a \xe9t\xe9 trouv\xe9"}},3012:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(7294),a=r(1022),c=r(9960),o=r(5999);function u(e){var t=e.year,r=e.posts;return n.createElement(n.Fragment,null,n.createElement("h3",null,t),n.createElement("ul",null,r.map((function(e){return n.createElement("li",{key:e.metadata.date},n.createElement(c.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function l(e){var t=e.years;return n.createElement("section",{className:"margin-vert--lg"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},n.createElement(u,e))})))))}function s(e){var t,r,c=e.archive,u=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=(t=c.blogPosts,r=t.reduceRight((function(e,t){var r=t.metadata.date.split("-")[0],n=e.get(r)||[];return e.set(r,[t].concat(n))}),new Map),Array.from(r,(function(e){return{year:e[0],posts:e[1]}})));return n.createElement(a.Z,{title:u,description:s},n.createElement("header",{className:"hero hero--primary"},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},u),n.createElement("p",{className:"hero__subtitle"},s))),n.createElement("main",null,i.length>0&&n.createElement(l,{years:i})))}}}]);