(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{361:function(t,s,n){"use strict";n.r(s);var a=n(43),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_12911-다음-큰-숫자"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12911-다음-큰-숫자"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://programmers.co.kr/learn/courses/30/lessons/12911",target:"_blank",rel:"noopener noreferrer"}},[t._v("12911. 다음 큰 숫자"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("Problem :")])]),t._v(" "),n("p",[t._v("자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.")]),t._v(" "),n("p",[t._v("조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.\n조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.\n조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.\n예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.")]),t._v(" "),n("p",[t._v("자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.")]),t._v(" "),n("p",[t._v("제한 사항")]),t._v(" "),n("ul",[n("li",[t._v("n은 1,000,000 이하의 자연수 입니다.")])]),t._v(" "),n("p",[n("strong",[t._v("Source Code 1:")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" programmers_12911 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" answer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("iCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("iCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("iCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" binaryString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBinaryString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("binaryString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" binaryString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[n("strong",[t._v("Test Code 1:")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("junit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("junit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("junit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" programmers_12911Test "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    programmers_12911 s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("programmers_12911")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("78")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("83")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Experience 1:")])]),t._v(" "),n("p",[n("code",[t._v("Integer.toBinaryString")]),t._v(" 메서드를 이용해서 이진수로 변화하여 문제를 풀었다.")])])}),[],!1,null,null,null);s.default=r.exports}}]);