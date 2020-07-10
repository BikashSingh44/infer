(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{229:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(9),o=(t(0),t(243)),i={id:"infer-workflow",title:"Infer workflow"},l={id:"version-0.17.0/infer-workflow",isDocsHomePage:!1,title:"Infer workflow",description:"This page documents several ways of running Infer, that you can adapt to your",source:"@site/versioned_docs/version-0.17.0/01-infer-workflow.md",permalink:"/docs/infer-workflow",version:"0.17.0",sidebar:"version-0.17.0/docs",previous:{title:"Hello, World!",permalink:"/docs/hello-world"},next:{title:"Analyzing apps or projects",permalink:"/docs/analyzing-apps-or-projects"}},c=[{value:"The two phases of an Infer run",id:"the-two-phases-of-an-infer-run",children:[{value:"1. The capture phase",id:"1-the-capture-phase",children:[]},{value:"2. The analysis phase",id:"2-the-analysis-phase",children:[]}]},{value:"Global (default) and differential workflows",id:"global-default-and-differential-workflows",children:[{value:"Global workflow",id:"global-workflow",children:[]},{value:"Differential workflow",id:"differential-workflow",children:[]}]},{value:"Exploring Infer reports",id:"exploring-infer-reports",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page documents several ways of running Infer, that you can adapt to your\nown project."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"tl; dr"),":"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure your project is clean when you first run Infer on it (with\n",Object(o.b)("inlineCode",{parentName:"li"},"make clean"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"gradle clean"),", or ...)."),Object(o.b)("li",{parentName:"ol"},"When running Infer several times in a row, either clean your project as in\nstep 1 in-between Infer runs, or add ",Object(o.b)("inlineCode",{parentName:"li"},"--reactive")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"infer")," command."),Object(o.b)("li",{parentName:"ol"},"These steps are not needed if you are not using an incremental build system,\nfor instance if you are analyzing single files with\n",Object(o.b)("inlineCode",{parentName:"li"},"infer run -- javac Hello.java"),"."),Object(o.b)("li",{parentName:"ol"},"After a successful Infer run, you can explore Infer's reports in more details\nby running ",Object(o.b)("inlineCode",{parentName:"li"},"infer explore")," from the same directory.")),Object(o.b)("h2",{id:"the-two-phases-of-an-infer-run"},"The two phases of an Infer run"),Object(o.b)("p",null,"Regardless of the input language (Java, Objective-C, or C), there are two main\nphases in an Infer run:"),Object(o.b)("h3",{id:"1-the-capture-phase"},"1. The capture phase"),Object(o.b)("p",null,"Compilation commands are captured by Infer to translate the files to be analyzed\ninto Infer's own internal intermediate language."),Object(o.b)("p",null,"This translation is similar to compilation, so Infer takes information from the\ncompilation process to perform its own translation. This is why we call infer\nwith a compilation command: ",Object(o.b)("inlineCode",{parentName:"p"},"infer run -- javac File.java")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"infer run -- clang -c file.c"),". What happens is that the files get compiled as\nusual, and they also get translated by Infer to be analyzed in the second phase.\nIn particular, if no file gets compiled, also no file will be analyzed."),Object(o.b)("p",null,"Infer stores the intermediate files in the results directory which by default is\ncreated in the folder where the ",Object(o.b)("inlineCode",{parentName:"p"},"infer")," command is invoked, and is called\n",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/"),". You can change the name of the results directory with the option\n",Object(o.b)("inlineCode",{parentName:"p"},"-o"),", e.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -o /tmp/out -- javac Test.java\n")),Object(o.b)("p",null,"You can run just the capture phase using the ",Object(o.b)("inlineCode",{parentName:"p"},"capture")," subcommand instead of the\n",Object(o.b)("inlineCode",{parentName:"p"},"run")," subcommand:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer capture -- javac Test.java\n")),Object(o.b)("h3",{id:"2-the-analysis-phase"},"2. The analysis phase"),Object(o.b)("p",null,"In this phase, the files in ",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/")," are analyzed by Infer. Infer analyzes\neach function and method separately. If Infer encounters an error when analyzing\na method or function, it stops there for that method or function, but will\ncontinue the analysis of other methods and functions. So, a possible workflow\nwould be to run Infer on your code, fix the errors generated, and run it again\nto find possibly more errors or to check that all the errors have been fixed."),Object(o.b)("p",null,"The errors will be displayed in the standard output and also in a file\n",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/report.txt"),". We filter the bugs and show the ones that are most\nlikely to be real."),Object(o.b)("h2",{id:"global-default-and-differential-workflows"},"Global (default) and differential workflows"),Object(o.b)("p",null,"By default, running Infer will delete the previous ",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/")," directory if it\nexists. This leads to a ",Object(o.b)("em",{parentName:"p"},"default")," workflow where the entire project is analyzed\nevery time. Passing ",Object(o.b)("inlineCode",{parentName:"p"},"--reactive")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"-r"),") to Infer prevents it from deleting\n",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/"),", leading to a ",Object(o.b)("em",{parentName:"p"},"differential")," workflow."),Object(o.b)("p",null,"There are exceptions to this. In particular, you can run only one of the phases\nabove. For instance, ",Object(o.b)("inlineCode",{parentName:"p"},"infer run -- javac Hello.java")," is equivalent to running\nthese two commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer capture -- javac Hello.java\ninfer analyze\n")),Object(o.b)("p",null,"Notice that the second command does not erase ",Object(o.b)("inlineCode",{parentName:"p"},"infer-out/"),", as the files it\nneeds to analyze live there!"),Object(o.b)("p",null,"You can learn more about the subcommands supported by Infer by running\n",Object(o.b)("inlineCode",{parentName:"p"},"infer --help"),", ",Object(o.b)("inlineCode",{parentName:"p"},"infer capture --help"),", or more generally\n",Object(o.b)("inlineCode",{parentName:"p"},"infer <subcommand> --help"),"."),Object(o.b)("p",null,"Let us highlight when you may need global and differential workflows."),Object(o.b)("h3",{id:"global-workflow"},"Global workflow"),Object(o.b)("p",null,"The global workflow is well suited to running Infer on all the files in a\nproject, e.g., for a Gradle-based project that compiles using the ",Object(o.b)("inlineCode",{parentName:"p"},"gradle build"),"\ncommand:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- gradle build\n")),Object(o.b)("p",null,"In general, running Infer on your project is as simple as running\n",Object(o.b)("inlineCode",{parentName:"p"},"infer run -- <your build command here>")," where the build command is the one you\nwould normally use to compile your source code."),Object(o.b)("p",null,"To start a fresh analysis and be sure to analyze all the files in your project,\nyou have to clean the build products, for instance with ",Object(o.b)("inlineCode",{parentName:"p"},"make clean")," for a\nmake-based project, ",Object(o.b)("inlineCode",{parentName:"p"},"gradle clean")," for Gradle, etc."),Object(o.b)("h3",{id:"differential-workflow"},"Differential workflow"),Object(o.b)("p",null,"Software projects such as mobile apps use ",Object(o.b)("em",{parentName:"p"},"incremental")," build systems, where\ncode evolves as a sequence of code changes. For these projects, it can often\nmake sense to analyze only the current changes in the project, instead of\nanalyzing the whole project every time. It is possible to analyze only what's\nchanged using Infer's ",Object(o.b)("em",{parentName:"p"},"reactive mode"),"."),Object(o.b)("p",null,"Infer should first be run on a ",Object(o.b)("em",{parentName:"p"},"clean")," version of the project, to capture all\nthe compilation commands in its capture phase."),Object(o.b)("p",null,"For instance, for a project compiled using Gradle,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"gradle clean\ninfer capture -- gradle build\n")),Object(o.b)("p",null,"Note that the above command does not perform an expensive analysis, but captures\nall the compilation commands and stores the results in Infer's internal format."),Object(o.b)("p",null,"Next, if you change some files in your project, for instance in response to an\nInfer report, or as part of normal development, you can either clean and\nreanalyze the entire project (as in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#Global-workflow"}),"global workflow"),"\nabove), or else tell Infer that you are interested in the effects of the code\nchange. The second option can be significantly faster, as only a subset of the\nproject needs to be analyzed: the modified files/procedures and their\ndependencies."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"edit some/File.java\n# make some changes to some/File.java\ninfer run --reactive -- gradle build\n")),Object(o.b)("p",null,"Note that you can run Infer with the ",Object(o.b)("inlineCode",{parentName:"p"},"--reactive")," flag the first time around as\nwell."),Object(o.b)("p",null,"To control the granularity of the changes to be analyzed, it is possible to tell\nInfer to combine several changes into one before the analysis. This is done with\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"--continue")," option."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"edit some/File1.java\n# make some changes to some/File1.java\ninfer run --reactive -- gradle build\nedit some/File2.java\n# make some changes to some/File2.java\ninfer run --reactive --continue -- gradle build\n")),Object(o.b)("p",null,"After the first invocation, Infer will analyze the results of the first change.\nAfter the second invocation, Infer will analyze the results of both changes. If\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"--continue")," option were omitted, it would only analyze the results of the\nsecond change."),Object(o.b)("p",null,"Finally, it is always possible to perform an analysis of the current changes in\nisolation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run --reactive --continue -- analyze\n")),Object(o.b)("p",null,"The list of build systems supported by Infer is detailed in the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"analyzing-apps-or-projects"}),"next section"),"."),Object(o.b)("h2",{id:"exploring-infer-reports"},"Exploring Infer reports"),Object(o.b)("p",null,"You can get more information about the reports generated by Infer by running\n",Object(o.b)("inlineCode",{parentName:"p"},"infer explore")," in the same directory. For instance"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"infer run -- gradle build\ninfer explore\n")),Object(o.b)("p",null,"This tool allows you to see error traces leading to each bug reported by Infer,\nwhich can be helpful in tracking down the precise cause of each bug. See the\noutput of ",Object(o.b)("inlineCode",{parentName:"p"},"infer explore --help")," for more information."))}p.isMDXComponent=!0},243:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),f=a,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||o;return t?r.a.createElement(d,l(l({ref:n},s),{},{components:t})):r.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);