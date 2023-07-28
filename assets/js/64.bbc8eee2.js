(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{563:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Boxx"),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#javascript中的json"}},[t._v("JavaScript中的JSON")])]),s("li",[s("a",{attrs:{href:"#json互转的第二种用法"}},[t._v("JSON互转的第二种用法")])]),s("li",[s("a",{attrs:{href:"#写给自己的js规范"}},[t._v("写给自己的js规范")])]),s("li",[s("a",{attrs:{href:"#其它"}},[t._v("其它")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"javascript中的json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的json"}},[t._v("#")]),t._v(" JavaScript中的JSON")]),t._v(" "),s("blockquote",[s("p",[t._v("在实际工作中，我么最常用的就是简单的 "),s("code",[t._v("JSON.parse(str)")]),t._v("  和 "),s("code",[t._v("JSON.stringify (obj)")]),t._v("  做JSON对象和字符串之间的相互转换")])]),t._v(" "),s("ul",[s("li",[t._v("JSON.parse(string) ：接受一个 JSON 字符串并将其转换成一个 JavaScript 对象")]),t._v(" "),s("li",[t._v("JSON.stringify(obj) ：接受一个 JavaScript 对象并将其转换为一个 JSON 字符串")])]),t._v(" "),s("blockquote",[s("p",[t._v("上面那种JSON.parse(string)用法只能转普通对象，当对象中有function事件的时候会自动过滤掉。如下：")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"{"name":"json"}"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ul",[s("li",[t._v("这就坑了，因为需要，必须要得把function也转了才行，怎么办呢？其实大家都没注意到 "),s("code",[t._v("JSON.stringify还有些参数")])])]),t._v(" "),s("h2",{attrs:{id:"json互转的第二种用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json互转的第二种用法"}},[t._v("#")]),t._v(" JSON互转的第二种用法")]),t._v(" "),s("ul",[s("li",[t._v("从Object转为String")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"{"name":"json","getName":"function (){\\n     return this.name;   \\n  }"}"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("注意转换完成之后记得把 "),s("code",[t._v("\\n")]),t._v(" 全部删掉，不然从string再转为object的时候会报错，没错，就是这么坑。")]),t._v(" "),s("p",[t._v("不信的话可以去这么网址试一下："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送们"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("从String转为Object")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('{"name":"json","getName":"function (){     return this.name;     }"}')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indexOf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(function(){return "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" })()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//就是原对象啦")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//{ name: "json", getName: function (){     return this.name;     } }')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"写给自己的js规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写给自己的js规范"}},[t._v("#")]),t._v(" 写给自己的js规范")]),t._v(" "),s("h4",{attrs:{id:"在js中书写代码给自己定的规范-或者objet转string之前"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在js中书写代码给自己定的规范-或者objet转string之前"}},[t._v("#")]),t._v(" 在js中书写代码给自己定的规范：（或者objet转string之前）")]),t._v(" "),s("ol",[s("li",[t._v("在js中能用的话 "),s("strong",[t._v("一定要用单引号")])]),t._v(" "),s("li",[t._v("在使用 "),s("code",[t._v("if(){}else{}")]),t._v(" 的时候，"),s("strong",[t._v("一定不要省略大括号")])]),t._v(" "),s("li",[t._v("js中一段代码结束后"),s("strong",[t._v("一定要加 "),s("code",[t._v(";")])]),t._v("（虽然在js中不加不会报错，把对象转为串的时候也不会报错，但是json从串转为对象的时候就会报错了，亲身经历啊！！）")])]),t._v(" "),s("h4",{attrs:{id:"在js中书写代码给自己定的规范-或者string转object之前"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在js中书写代码给自己定的规范-或者string转object之前"}},[t._v("#")]),t._v(" 在js中书写代码给自己定的规范：（或者string转object之前）")]),t._v(" "),s("ol",[s("li",[t._v("把所有的 "),s("strong",[t._v("\\r\\n")]),t._v(" 删掉")]),t._v(" "),s("li",[t._v("把所有的 "),s("strong",[t._v("\\t")]),t._v(" 删掉")]),t._v(" "),s("li",[t._v("把所有的 function 中的注释都删掉")]),t._v(" "),s("li",[t._v("注意有没有代码不规范的地方（如上规范）")])]),t._v(" "),s("h2",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.html.cn/archives/3919",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON转换简单使用"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/sparkbj/p/8203343.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON转换的第二个参数"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线写js尝试JSON转换"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);