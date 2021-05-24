(function() {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 32:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ auth; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "styled-jsx/style"
var style_namespaceObject = require("styled-jsx/style");;
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/User.js





const User = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-735088722",
  children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "jsx-735088722",
    children: props.name
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
    className: "jsx-735088722",
    children: ["Age: ", props.age]
  }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "735088722",
    children: ["div.jsx-735088722{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;}"]
  })]
});

/* harmony default export */ var components_User = (User);
;// CONCATENATED MODULE: ./pages/auth/index.js





const authIndexPage = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
    children: ["The Auth Index Page - ", props.appName]
  }), /*#__PURE__*/jsx_runtime_.jsx(components_User, {
    name: "Max",
    age: 28
  })]
});

authIndexPage.getInitialProps = context => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        appName: 'Super App Auth'
      });
    }, 1000);
  }); // promise.then();

  return promise;
};

/* harmony default export */ var auth = (authIndexPage);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(32));
module.exports = __webpack_exports__;

})();