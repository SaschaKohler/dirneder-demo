"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/AdminLayout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/AdminLayout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      drawer: !this.$vuetify.breakpoint.smAndDown,
      items: [{
        icon: "mdi-apps",
        title: "Start",
        to: "home"
      }, {
        icon: "mdi-run",
        title: "Belegschaft",
        to: "user.index",
        sublinks: [{
          icon: "mdi-run",
          title: "Mitarbeiter",
          to: "user.index"
        }, {
          icon: "mdi-run",
          title: "Kategorien",
          to: "employeeCategory.index"
        }, {
          icon: "mdi-run",
          title: "Arbeitszeit",
          to: "workingHours.index"
        }]
      }, {
        icon: "mdi-newspaper",
        title: "Aufträge",
        to: "event.index"
      }, {
        icon: "mdi-account-multiple",
        title: "Kunden",
        to: "customer.index"
      }, {
        icon: "mdi-jeepney",
        title: "Fahrzeuge",
        to: "vehicle.index"
      }],
      miniVariant: false
    };
  },
  computed: {
    appName: function appName() {
      return this.$page.props.appName;
    },
    user: function user() {
      return this.$page.props.auth.user;
    },
    indexMenu: function indexMenu() {
      var _this = this;

      var inertiaUrl = this.$inertia.page.url.split("?")[0];
      var index = this.items.findIndex(function (item) {
        var windowUrl = _this.route(item.to);

        return windowUrl.includes(inertiaUrl);
      });
      return index;
    }
  },
  watch: {
    $page: {
      handler: function handler() {
        var message = this.$page.props.flash.message;

        if (message != null) {
          switch (message.type) {
            case "success":
              this.$toast.success(message.text);
              break;

            case "error":
              this.$toast.error(message.text);
              break;
          }
        }
      }
    }
  },
  methods: {
    logout: function logout() {
      this.$inertia.post("/logout");
    },
    goToPage: function goToPage(page) {
      this.$inertia.visit(this.route(page));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_AdminLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/AdminLayout.vue */ "./resources/js/layouts/AdminLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminLayout: _layouts_AdminLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["events"],
  data: function data() {
    return {
      selectedEvent: {
        id: null,
        start: null,
        end: null,
        customer: {
          firstName: null,
          lastName: null,
          PLZ: null,
          street: null,
          city: null
        },
        color: null
      },
      selectedElement: null,
      selectedOpen: false,
      breadcrumbs: [{
        text: "App",
        disabled: false,
        href: "/home"
      }, {
        text: "Dashboard",
        disabled: true,
        href: "/home"
      }],
      type: 'month',
      types: [{
        name: 'Monat',
        value: 'month'
      }, {
        name: 'Woche',
        value: 'week'
      }, {
        name: 'Tag',
        value: 'day'
      }, {
        name: '4 Tage',
        value: '4day'
      }],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [{
        text: 'So - Sa',
        value: [0, 1, 2, 3, 4, 5, 6]
      }, {
        text: 'Mo - So',
        value: [1, 2, 3, 4, 5, 6, 0]
      }, {
        text: 'Mo - Fr',
        value: [1, 2, 3, 4, 5]
      }, {
        text: 'Mo, Mi, Fr',
        value: [1, 3, 5]
      }],
      value: ''
    };
  },
  methods: {
    viewDay: function viewDay(_ref) {
      var date = _ref.date;
      this.focus = date;
      this.type = 'day';
    },
    showEvent: function showEvent(_ref2) {
      var _this = this;

      var nativeEvent = _ref2.nativeEvent,
          event = _ref2.event;

      var open = function open() {
        _this.selectedEvent.color = event.color;
        _this.selectedEvent.type = event.type;
        _this.selectedEvent.employees = event.employees;
        _this.selectedEvent.vehicles = event.vehicles;
        _this.selectedEvent.start = event.start;
        _this.selectedEvent.end = event.end;
        _this.selectedEvent.name = event.name;
        _this.selectedEvent.customer.lastName = event.customer.lastName;
        _this.selectedEvent.customer.firstName = event.customer.firstName;
        _this.selectedEvent.customer.street = event.customer.street;
        _this.selectedEvent.customer.PLZ = event.customer.PLZ;
        _this.selectedEvent.customer.city = event.customer.city;
        _this.selectedElement = nativeEvent.target;
        setTimeout(function () {
          return _this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-breadcrumbs[data-v-bb7a9770] a {\n  color: green;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/layouts/AdminLayout.vue":
/*!**********************************************!*\
  !*** ./resources/js/layouts/AdminLayout.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminLayout_vue_vue_type_template_id_bafdabb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=template&id=bafdabb6& */ "./resources/js/layouts/AdminLayout.vue?vue&type=template&id=bafdabb6&");
/* harmony import */ var _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/AdminLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminLayout_vue_vue_type_template_id_bafdabb6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminLayout_vue_vue_type_template_id_bafdabb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/AdminLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=bb7a9770&scoped=true& */ "./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/pages/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _home_vue_vue_type_style_index_0_id_bb7a9770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css& */ "./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bb7a9770",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/AdminLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/AdminLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/AdminLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/layouts/AdminLayout.vue?vue&type=template&id=bafdabb6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/AdminLayout.vue?vue&type=template&id=bafdabb6& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_bafdabb6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_bafdabb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_bafdabb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLayout.vue?vue&type=template&id=bafdabb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/AdminLayout.vue?vue&type=template&id=bafdabb6&");


/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=bb7a9770&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/AdminLayout.vue?vue&type=template&id=bafdabb6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/AdminLayout.vue?vue&type=template&id=bafdabb6& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { staticStyle: { "background-color": "#f5f5f5" } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            "mini-variant": _vm.miniVariant,
            clipped: "",
            fixed: "",
            app: ""
          },
          on: {
            "update:miniVariant": function($event) {
              _vm.miniVariant = $event
            },
            "update:mini-variant": function($event) {
              _vm.miniVariant = $event
            }
          },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { nav: "" } },
            [
              _c(
                "v-list-item-group",
                { attrs: { value: _vm.indexMenu, color: "dirneder" } },
                [
                  _vm._l(_vm.items, function(item, i) {
                    return !item.sublinks
                      ? _c(
                          "v-list-item",
                          {
                            key: i,
                            on: {
                              click: function($event) {
                                return _vm.goToPage(item.to)
                              }
                            }
                          },
                          [
                            _c(
                              "v-list-item-action",
                              [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", {
                                  domProps: { textContent: _vm._s(item.title) }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _c(
                          "v-list-group",
                          {
                            attrs: { "no-action": "", color: "dirneder" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-list-item-action",
                                      [
                                        _c("v-icon", [
                                          _vm._v(_vm._s(item.icon))
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", {
                                          domProps: {
                                            textContent: _vm._s(item.title)
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          },
                          [
                            _vm._v(" "),
                            _vm._l(item.sublinks, function(item, i) {
                              return _c(
                                "v-list-item",
                                {
                                  key: i,
                                  on: {
                                    click: function($event) {
                                      return _vm.goToPage(item.to)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", {
                                        domProps: {
                                          textContent: _vm._s(item.title)
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                  }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    { on: { click: _vm.logout } },
                    [
                      _c(
                        "v-list-item-action",
                        [_c("v-icon", [_vm._v("mdi-exit-to-app")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v("Logout")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            color: "green darken-2",
            "clipped-left": "",
            fixed: "",
            dark: "",
            app: ""
          }
        },
        [
          _vm.$vuetify.breakpoint.smAndDown
            ? _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.drawer = !_vm.drawer
                  }
                }
              })
            : _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.miniVariant = !_vm.miniVariant
                  }
                }
              }),
          _vm._v(" "),
          _c("v-toolbar-title", {
            staticClass: "d-none d-md-flex",
            domProps: { textContent: _vm._s(_vm.appName) }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex align-center" },
            [
              _c("v-icon", { attrs: { dark: "" } }, [_vm._v("mdi-account")]),
              _vm._v(" "),
              _c("div", { staticClass: "pl-3" }, [
                _c("span", { staticClass: "body-1 font-weight-medium" }, [
                  _vm._v(_vm._s(_vm.user.name))
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_c("v-container", [_vm._t("default")], 2)], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "admin-layout",
    [
      _c("v-banner", { staticClass: "mb-4" }, [
        _c(
          "div",
          { staticClass: "d-flex flex-wrap justify-space-between" },
          [
            _c("h5", { staticClass: "text-h5 font-weight-bold" }, [
              _vm._v("Dashboard")
            ]),
            _vm._v(" "),
            _c("v-breadcrumbs", {
              staticClass: "pa-0",
              attrs: { items: _vm.breadcrumbs }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "v-sheet",
            { staticClass: "d-flex", attrs: { tile: "", height: "54" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.calendar.prev()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                1
              ),
              _vm._v(" "),
              _c("v-select", {
                staticClass: "ma-2",
                attrs: {
                  items: _vm.types,
                  "item-text": "name",
                  "item-value": "value",
                  dense: "",
                  outlined: "",
                  color: "brown",
                  "hide-details": "",
                  label: "Typ"
                },
                model: {
                  value: _vm.type,
                  callback: function($$v) {
                    _vm.type = $$v
                  },
                  expression: "type"
                }
              }),
              _vm._v(" "),
              _c("v-select", {
                staticClass: "ma-2",
                attrs: {
                  items: _vm.weekdays,
                  dense: "",
                  outlined: "",
                  "hide-details": "",
                  color: "brown",
                  label: "Wochentage"
                },
                model: {
                  value: _vm.weekday,
                  callback: function($$v) {
                    _vm.weekday = $$v
                  },
                  expression: "weekday"
                }
              }),
              _vm._v(" "),
              _vm.$refs.calendar
                ? _c("v-toolbar-title", { staticClass: "pt-3 pl-3" }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.$refs.calendar.title) +
                        "\n      "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.calendar.next()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-chevron-right")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-sheet",
            { attrs: { height: "600" } },
            [
              _c("v-calendar", {
                ref: "calendar",
                attrs: {
                  locale: "de",
                  weekdays: _vm.weekday,
                  type: _vm.type,
                  events: _vm.events,
                  "event-overlap-mode": _vm.mode,
                  "event-overlap-threshold": 30,
                  "event-color": _vm.events.color
                },
                on: { "click:date": _vm.viewDay, "click:event": _vm.showEvent },
                scopedSlots: _vm._u([
                  {
                    key: "event",
                    fn: function(ref) {
                      var event = ref.event
                      return [
                        _c("p", { staticClass: "text-caption" }, [
                          _vm._v(
                            _vm._s(event.type) +
                              "/" +
                              _vm._s(event.customer.lastName)
                          )
                        ])
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              }),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: {
                    "close-on-content-click": false,
                    activator: _vm.selectedElement,
                    bottom: "",
                    left: "",
                    "offset-y": "",
                    origin: "top right",
                    transition: "scale-transition"
                  },
                  model: {
                    value: _vm.selectedOpen,
                    callback: function($$v) {
                      _vm.selectedOpen = $$v
                    },
                    expression: "selectedOpen"
                  }
                },
                [
                  _c(
                    "v-card",
                    {
                      attrs: {
                        color: "grey lighten-4",
                        "min-width": "350px",
                        flat: ""
                      }
                    },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { color: _vm.selectedEvent.color, dark: "" } },
                        [
                          _c("v-toolbar-title", {
                            domProps: {
                              innerHTML: _vm._s(_vm.selectedEvent.type)
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex-grow-1" }),
                          _vm._v(" "),
                          _c("spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { fab: "", color: "brown", depressed: "" },
                              on: {
                                click: function($event) {
                                  _vm.selectedOpen = false
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { flat: "" } }, [
                                _vm._v("mdi-close")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("p", { staticClass: "text-lg-subtitle-2" }, [
                            _vm._v(_vm._s(_vm.selectedEvent.start) + " ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "Link",
                            {
                              staticClass: "text-decoration-underline ",
                              attrs: {
                                href: _vm.route("event.index", {
                                  id: _vm.selectedEvent.id
                                })
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "body-1 font-weight-medium" },
                                [_vm._v(_vm._s(_vm.selectedEvent.name))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-h5" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.selectedEvent.customer.firstName) +
                                " " +
                                _vm._s(_vm.selectedEvent.customer.lastName) +
                                "\n              "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-caption" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.selectedEvent.customer.street) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-bold" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.selectedEvent.customer.PLZ) +
                                " " +
                                _vm._s(_vm.selectedEvent.customer.city) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex justify-space-around" },
                            [
                              _c(
                                "ul",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-subtitle-1 text-decoration-underline"
                                    },
                                    [_vm._v("Team:")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.selectedEvent.employees, function(
                                    employee
                                  ) {
                                    return _c("li", { key: employee.id }, [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(employee.name) +
                                          "\n              "
                                      )
                                    ])
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-subtitle-1 text-decoration-underline"
                                    },
                                    [_vm._v("Fahrzeuge:")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.selectedEvent.vehicles, function(
                                    vehicle
                                  ) {
                                    return _c("li", { key: vehicle.id }, [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(vehicle.branding) +
                                          "\n              "
                                      )
                                    ])
                                  })
                                ],
                                2
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);