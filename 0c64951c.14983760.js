(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(9),o=(r(0),r(243)),c={id:"checkers",title:"Infer : AI"},i={id:"version-0.17.0/checkers",isDocsHomePage:!1,title:"Infer : AI",description:"Infer.AI is a collection of program analyses which range from simple checks to",source:"@site/versioned_docs/version-0.17.0/01-checkers.md",permalink:"/docs/checkers",version:"0.17.0",sidebar:"version-0.17.0/docs",previous:{title:"Recommended flow for CI",permalink:"/docs/steps-for-ci"},next:{title:"Infer : Eradicate",permalink:"/docs/eradicate"}},s=[],l={rightToc:s};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Infer.AI is a collection of program analyses which range from simple checks to\nsophisticated inter-procedural analysis. Infer.AI is so named because it is\nbased on Abstract Interpretation."),Object(o.b)("p",null,"Current Infer.AI's which are in production include ThreadSafety,\nAnnotationReachability (e.g., can an allocation be reached from a\n@PerformanceCritical method), and\n",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"checkers-bug-types#CHECKERS_IMMUTABLE_CAST"}),"immutable cast")," for Java, as well\nas Static Initialization Order Fiasco for C++."),Object(o.b)("p",null,"The current checkers can be run by adding the option ",Object(o.b)("inlineCode",{parentName:"p"},"-a checkers")," to the\nanalysis command as in this example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"infer run -a checkers -- javac Test.java\n")),Object(o.b)("p",null,"In addition, we are working on experimental AI's which target security\nproperties (Quandary) and buffer overruns (Inferbo). The infer commandline man\npage (",Object(o.b)("inlineCode",{parentName:"p"},"infer --help"),") explains how to run experimental AI's, or how to select\ncertain AI's and not others."))}p.isMDXComponent=!0},243:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,d=u["".concat(c,".").concat(b)]||u[b]||f[b]||o;return r?a.a.createElement(d,i(i({ref:n},l),{},{components:r})):a.a.createElement(d,i({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);