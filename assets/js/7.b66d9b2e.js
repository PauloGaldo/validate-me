(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{172:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"validatemerule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validatemerule","aria-hidden":"true"}},[t._v("#")]),t._v(" ValidatemeRule")]),t._v(" "),s("ol",[s("li",[t._v("Each rule has to be in separated files with the same name as the rule.")]),t._v(" "),s("li",[t._v("They have to export a function with the name of the rule.")])]),t._v(" "),s("h2",{attrs:{id:"firm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firm","aria-hidden":"true"}},[t._v("#")]),t._v(" Firm")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ruleName(args: Array<String>): (instance: ValidatemeField => (rawValue: any => Boolean))\n")])])]),s("p",[t._v("This function has currying because each function is invoked in diffent times:")]),t._v(" "),s("ol",[s("li",[t._v("It sets the args before knowing the "),s("code",[t._v("ValidateField")]),t._v(" instance.")]),t._v(" "),s("li",[t._v("It receives the "),s("code",[t._v("ValidateField")]),t._v(" for only one possible thing: to invoke "),s("code",[t._v("setArgsToRule")]),t._v(" with the args.")]),t._v(" "),s("li",[t._v("The actual function which evaluates the new value.")])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"example-without-setting-args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-without-setting-args","aria-hidden":"true"}},[t._v("#")]),t._v(" Example without setting args")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("required")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  value "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" undefined "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" required"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"example-using-the-setargstorule-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-using-the-setargstorule-method","aria-hidden":"true"}},[t._v("#")]),t._v(" Example using the "),s("code",[t._v("setArgsToRule")]),t._v(" method")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("len")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" instance "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  instance"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setArgsToRule")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'len'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("min"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rawValue "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rawValue"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" max"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" len"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="validateme-rule.md";a.default=e.exports}}]);