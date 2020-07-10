(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(243)),o={id:"steps-for-ci",title:"Recommended flow for CI"},c={id:"steps-for-ci",isDocsHomePage:!1,title:"Recommended flow for CI",description:"The recommended flow for CI integration is to determine the modified files, and",source:"@site/docs/01-steps-for-ci.md",permalink:"/docs/next/steps-for-ci",version:"next",sidebar:"docs",previous:{title:"Analyzing apps or projects",permalink:"/docs/next/analyzing-apps-or-projects"},next:{title:"Advanced usage",permalink:"/docs/next/advanced-features"},latestVersionMainDocPermalink:"/docs/getting-started"},l=[{value:"Differential Workflow",id:"differential-workflow",children:[]},{value:"Example: Android Gradle",id:"example-android-gradle",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The recommended flow for CI integration is to determine the modified files, and\nrun the analysis in reactive mode starting from those files. If you would like\nto run more than one analyzer, it is more efficient to separate the capture\nphase, so that the result can be used by all the analyzers."),Object(i.b)("h3",{id:"differential-workflow"},"Differential Workflow"),Object(i.b)("p",null,"Here's how to run infer on two versions of a project and compare the results in\ngeneral."),Object(i.b)("p",null,"Assume the project uses git, ",Object(i.b)("inlineCode",{parentName:"p"},"feature")," is the feature branch (the code change\nyou want to analyze), ",Object(i.b)("inlineCode",{parentName:"p"},"master")," is the master branch, and ",Object(i.b)("inlineCode",{parentName:"p"},"make")," builds the\nproject."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# go to feature branch if not there already\ngit checkout feature\n# get list of changed files\ngit diff --name-only origin/feature..origin/master > index.txt\n## first run: feature branch\n# run infer on the feature branch\ninfer capture -- make -j 4  # assuming a machine with 4 cores\ninfer analyze --changed-files-index index.txt\n# store the infer report\ncp infer-out/report.json report-feature.json\n## second run: master branch\ngit checkout master\n# run capture in reactive mode so that previously-captured source files are kept if they are up-to-date\ninfer capture --reactive -- make -j 4\ninfer analyze --reactive --changed-files-index index.txt\n# compare reports\ninfer reportdiff --report-current report-feature.json --report-previous infer-out/report.json\n")),Object(i.b)("p",null,'At the end of this process, "infer-out/differential/" contains three files,\nwhich follow the same format as normal infer JSON reports:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"introduced.json contains the issues found in the feature branch but not in\nmaster;"),Object(i.b)("li",{parentName:"ul"},"fixed.json contains the issues found in master but not in the feature branch;"),Object(i.b)("li",{parentName:"ul"},"preexisting.json contains the issues found in both branches.")),Object(i.b)("h3",{id:"example-android-gradle"},"Example: Android Gradle"),Object(i.b)("p",null,"The following CI script runs the ",Object(i.b)("inlineCode",{parentName:"p"},"infer")," and ",Object(i.b)("inlineCode",{parentName:"p"},"eradicate")," analyzers. Assume again\nthat ",Object(i.b)("inlineCode",{parentName:"p"},"feature")," is the feature branch, and ",Object(i.b)("inlineCode",{parentName:"p"},"master")," is the master branch."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git diff --name-only origin/feature..origin/master > index.txt\ninfer capture -- ./gradlew --offline assembleDebug\ninfer analyze --fail-on-issue --eradicate --changed-files-index ./index.txt\n")),Object(i.b)("p",null,"Notice that"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use git to find the changed files ",Object(i.b)("inlineCode",{parentName:"li"},"git diff --name-only")),Object(i.b)("li",{parentName:"ul"},"We run capture only once, and the output is kept for the subsequent analyses"),Object(i.b)("li",{parentName:"ul"},"We run the eradicate analysis alongside the default analyses: ",Object(i.b)("inlineCode",{parentName:"li"},"--eradicate")),Object(i.b)("li",{parentName:"ul"},"We analyze only the changed files ",Object(i.b)("inlineCode",{parentName:"li"},"--changed-files-index ./index.txt"))))}u.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,b=f["".concat(o,".").concat(d)]||f[d]||p[d]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);