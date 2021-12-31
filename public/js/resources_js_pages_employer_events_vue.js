"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_employer_events_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/EmployerLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/EmployerLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  props: ["notifications"],
  data: function data() {
    return {
      drawer: !this.$vuetify.breakpoint.smAndDown,
      items: [{
        icon: "mdi-apps",
        title: "Start",
        to: "employer.index"
      }, {
        icon: "mdi-run",
        title: "Meine Aufträge",
        to: "employer.events"
      }],
      miniVariant: false,
      form: this.$inertia.form({
        id: null
      })
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
      console.log(inertiaUrl);
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
    },
    putToPage: function putToPage(page) {
      this.$inertia.put(this.route(page));
    },
    markAsRead: function markAsRead(item) {
      var _this2 = this;

      this.form.id = item.id;
      this.form.put(route('notification.markAsRead'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this2.form.reset();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_EmployerLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/EmployerLayout.vue */ "./resources/js/layouts/EmployerLayout.vue");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
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
  props: ["items", "notifications", "tools", "count"],
  components: {
    EmployerLayout: _layouts_EmployerLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: "No",
        value: "index",
        sortable: false
      }, {
        text: "Arbeitstag",
        value: "start"
      }, {
        text: "Arbeitszeit",
        value: "workingHours",
        sortable: false
      }, {
        text: "Leistung",
        value: "type"
      }, {
        text: "Kunde",
        value: "customer_id"
      }, {
        text: "Mitarbeiter",
        value: "employees",
        sortable: false
      }, {
        text: "Fahrzeuge",
        value: "vehicles",
        sortable: false
      }, {
        text: "Werkzeug",
        value: "tools",
        sortable: false
      }, {
        text: "Actions",
        value: "action",
        sortable: false
      }],
      breadcrumbs: [{
        text: "App",
        disabled: false,
        href: "/home"
      }, {
        text: "Aufträge",
        disabled: true,
        href: "/event"
      }],
      dialog: false,
      menu1: false,
      menu2: false,
      isUpdate: false,
      isLoading: false,
      isLoadingTable: false,
      itemId: null,
      options: {},
      search: null,
      params: {},
      calc: 0,
      selected: [],
      pivots: [],
      form: this.$inertia.form({
        startTime: null,
        endTime: null,
        tools: null
      })
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.isUpdate ? "Zeiterfassung / Geräte" : "";
    },
    dateFormattedStart: function dateFormattedStart() {
      return this.form.start ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(this.form.start), 'dd\.MM\.yyyy') : '';
    },
    dateFormattedEnd: function dateFormattedEnd() {
      return this.form.end ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(this.form.end), 'dd\.MM\.yyyy') : '';
    }
  },
  watch: {
    options: function options(val) {
      this.params.page = val.page;

      if (val.itemsPerPage === -1) {
        // get page_size 'All' (-1)
        this.params.page_size = this.$props.count;
      } else {
        this.params.page_size = val.itemsPerPage;
      }

      if (val.sortBy.length != 0) {
        this.params.sort_by = val.sortBy[0];
        this.params.order_by = val.sortDesc[0] ? "desc" : "asc";
      } else {
        this.params.sort_by = null;
        this.params.order_by = null;
      }

      this.updateData();
    },
    search: function search(val) {
      this.params.search = val;
      this.updateData();
    }
  },
  methods: {
    addMinutes: function addMinutes() {
      this.tools.deviceUsePerEvent += .5;
    },
    subMinutes: function subMinutes() {
      this.tools.deviceUsePerEvent -= .5;
    },
    updateData: function updateData() {
      var _this = this;

      this.isLoadingTable = true;
      this.$inertia.get("/employer/events", this.params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this.isLoadingTable = false;
        }
      });
    },
    editItem: function editItem(item) {
      console.log(item);
      this.form.clearErrors();
      this.form.name = item.name;
      this.form.startTime = item.startTime;
      this.form.endTime = item.endTime;
      this.form.tools = item.tools;
      this.isUpdate = true;
      this.itemId = item.id;
      this.dialog = true;
    },
    submit: function submit() {
      var _this2 = this;

      this.form.put(route("employer.eventUpdate", this.itemId), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this2.isLoading = false;
          _this2.dialog = false;
          _this2.isUpdate = false;
          _this2.itemId = null;

          _this2.form.reset();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-breadcrumbs[data-v-fd4ad3d8] a {\n  color: green;\n}\n.v-list-item--active[data-v-fd4ad3d8] {\n  background-color: #EFEBE9;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_fd4ad3d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_fd4ad3d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_fd4ad3d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/layouts/EmployerLayout.vue":
/*!*************************************************!*\
  !*** ./resources/js/layouts/EmployerLayout.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmployerLayout_vue_vue_type_template_id_78ce4eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployerLayout.vue?vue&type=template&id=78ce4eae& */ "./resources/js/layouts/EmployerLayout.vue?vue&type=template&id=78ce4eae&");
/* harmony import */ var _EmployerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployerLayout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/EmployerLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmployerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployerLayout_vue_vue_type_template_id_78ce4eae___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmployerLayout_vue_vue_type_template_id_78ce4eae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/EmployerLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/employer/events.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/employer/events.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_vue_vue_type_template_id_fd4ad3d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.vue?vue&type=template&id=fd4ad3d8&scoped=true& */ "./resources/js/pages/employer/events.vue?vue&type=template&id=fd4ad3d8&scoped=true&");
/* harmony import */ var _events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.vue?vue&type=script&lang=js& */ "./resources/js/pages/employer/events.vue?vue&type=script&lang=js&");
/* harmony import */ var _events_vue_vue_type_style_index_0_id_fd4ad3d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css& */ "./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _events_vue_vue_type_template_id_fd4ad3d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _events_vue_vue_type_template_id_fd4ad3d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fd4ad3d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/employer/events.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/EmployerLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/layouts/EmployerLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployerLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/EmployerLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/employer/events.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/employer/events.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./events.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_fd4ad3d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=style&index=0&id=fd4ad3d8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/layouts/EmployerLayout.vue?vue&type=template&id=78ce4eae&":
/*!********************************************************************************!*\
  !*** ./resources/js/layouts/EmployerLayout.vue?vue&type=template&id=78ce4eae& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployerLayout_vue_vue_type_template_id_78ce4eae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployerLayout_vue_vue_type_template_id_78ce4eae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployerLayout_vue_vue_type_template_id_78ce4eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployerLayout.vue?vue&type=template&id=78ce4eae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/EmployerLayout.vue?vue&type=template&id=78ce4eae&");


/***/ }),

/***/ "./resources/js/pages/employer/events.vue?vue&type=template&id=fd4ad3d8&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/employer/events.vue?vue&type=template&id=fd4ad3d8&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_template_id_fd4ad3d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_template_id_fd4ad3d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_template_id_fd4ad3d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./events.vue?vue&type=template&id=fd4ad3d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=template&id=fd4ad3d8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/EmployerLayout.vue?vue&type=template&id=78ce4eae&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/EmployerLayout.vue?vue&type=template&id=78ce4eae& ***!
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
                { attrs: { value: _vm.indexMenu, color: "brown lighten-2" } },
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
                            attrs: {
                              "no-action": "",
                              color: "brown lighten-2"
                            },
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
            color: "brown lighten-2",
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
              _c(
                "div",
                { staticClass: "px-5" },
                [
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        bottom: "",
                        left: "",
                        "offset-y": "",
                        origin: "top right",
                        transition: "scale-transition"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var attrs = ref.attrs
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      staticClass: "ml-2",
                                      attrs: { "min-width": "0", text: "" }
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _c(
                                    "v-badge",
                                    {
                                      attrs: {
                                        color: "red",
                                        overlap: "",
                                        content: _vm.notifications.length,
                                        value: _vm.notifications.length
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-bell")])],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-list",
                        {
                          staticClass: "pb-0",
                          attrs: {
                            "five-line": "",
                            flat: "",
                            "max-width": "300px"
                          }
                        },
                        [
                          _vm._l(_vm.notifications, function(item) {
                            return [
                              _c("v-subheader", {
                                domProps: {
                                  textContent: _vm._s(item.data["subject"])
                                }
                              }),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                [
                                  _c(
                                    "v-list-item-content",
                                    { attrs: { "d-flex": "" } },
                                    [
                                      _c(
                                        "v-list-item-title",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            _vm._s(item.data["customer"]) +
                                              " / " +
                                              _vm._s(item.data["type"]) +
                                              "\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        _vm._v(_vm._s(item.data["address"]))
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        _vm._v("neuer Termin: "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "red--text text-bold"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(item.data["newEvent"])
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        _vm._v("Intervall: "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "primary--text text-bold"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(item.data["recurrence"])
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-action",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                "x-small": "",
                                                color:
                                                  "green white--text text-caption"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.markAsRead(item)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      gelesen\n                    "
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
                              ),
                              _vm._v(" "),
                              _c("v-divider")
                            ]
                          }),
                          _vm._v(" "),
                          _vm.notifications.length
                            ? _c(
                                "v-footer",
                                {
                                  staticClass:
                                    "d-flex justify-center font-weight-bold"
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        "text-caption": "",
                                        "x-small": ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.putToPage(
                                            "notification.markAllAsRead"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Alle gelesen\n              ")]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
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
              _c("v-icon", { attrs: { dark: "" } }, [_vm._v("mdi-account")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pl-3" },
                [
                  _c(
                    "Link",
                    {
                      staticClass: "text-decoration-underline white--text text",
                      attrs: {
                        href: _vm.route("employer.edit", { id: _vm.user.id })
                      }
                    },
                    [
                      _c("span", { staticClass: "body-1 font-weight-medium" }, [
                        _vm._v(_vm._s(_vm.user.name))
                      ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=template&id=fd4ad3d8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employer/events.vue?vue&type=template&id=fd4ad3d8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "employer-layout",
    { attrs: { notifications: _vm.notifications } },
    [
      _c("v-banner", { staticClass: "mb-4" }, [
        _c(
          "div",
          { staticClass: "d-flex flex-wrap justify-space-between" },
          [
            _c("h5", { staticClass: "text-h5 font-weight-bold" }, [
              _vm._v("Meine Aufträge")
            ]),
            _vm._v(" "),
            _c("v-breadcrumbs", {
              staticClass: "pa-0",
              attrs: { items: _vm.breadcrumbs, color: "brown--text" }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-wrap align-center" },
        [
          _c("v-text-field", {
            staticClass: "py-4",
            staticStyle: { "max-width": "300px" },
            attrs: {
              "prepend-inner-icon": "mdi-magnify",
              label: "Suche",
              "single-line": "",
              dense: "",
              clearable: "",
              "hide-details": "",
              solo: ""
            },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          }),
          _vm._v(" "),
          _c("v-spacer")
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          items: _vm.items.data,
          headers: _vm.headers,
          options: _vm.options,
          "server-items-length": _vm.items.total,
          loading: _vm.isLoadingTable
        },
        on: {
          "update:options": function($event) {
            _vm.options = $event
          }
        },
        scopedSlots: _vm._u(
          [
            {
              key: "item.index",
              fn: function(ref) {
                var index = ref.index
                return [
                  _vm._v(
                    "\n      " +
                      _vm._s(
                        (_vm.options.page - 1) * _vm.options.itemsPerPage +
                          index +
                          1
                      ) +
                      "\n    "
                  )
                ]
              }
            },
            {
              key: "item.customer_id",
              fn: function(ref) {
                var item = ref.item
                return [
                  _vm._v("\n      " + _vm._s(item.customer.lastName) + "\n    ")
                ]
              }
            },
            {
              key: "item.employees",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "ul",
                    _vm._l(item.employees, function(item) {
                      return _c("li", { key: item.id }, [
                        _vm._v(_vm._s(item.name))
                      ])
                    }),
                    0
                  )
                ]
              }
            },
            {
              key: "item.vehicles",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "ul",
                    _vm._l(item.vehicles, function(item) {
                      return _c("li", { key: item.id }, [
                        _vm._v(_vm._s(item.branding))
                      ])
                    }),
                    0
                  )
                ]
              }
            },
            {
              key: "item.tools",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "ul",
                    _vm._l(item.tools, function(item) {
                      return _c("li", { key: item.id }, [
                        _vm._v(
                          _vm._s(item.title) +
                            " / " +
                            _vm._s(item.pivot.deviceUsePerEvent)
                        )
                      ])
                    }),
                    0
                  )
                ]
              }
            },
            {
              key: "item.action",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: { "x-small": "", color: "yellow lighten-2" },
                      on: {
                        click: function($event) {
                          return _vm.editItem(item)
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { small: "" } }, [
                        _vm._v(" mdi-pencil")
                      ]),
                      _vm._v("\n        Zeit / Tools\n      ")
                    ],
                    1
                  )
                ]
              }
            }
          ],
          null,
          true
        )
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dense: "", dark: "", color: "brown" } },
                [_vm._v(_vm._s(_vm.formTitle))]
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mt-5", attrs: { justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "4" } },
                    [
                      _c(
                        "v-menu",
                        {
                          ref: "menuStart",
                          attrs: {
                            "close-on-content-click": false,
                            "nudge-right": 40,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "390px"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      {
                                        attrs: {
                                          label: "Arbeitsbeginn",
                                          "prepend-icon":
                                            "mdi-clock-time-four-outline",
                                          readonly: "",
                                          color: "brown"
                                        },
                                        model: {
                                          value: _vm.form.startTime,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "startTime", $$v)
                                          },
                                          expression: "form.startTime"
                                        }
                                      },
                                      on
                                    )
                                  )
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.menu1,
                            callback: function($$v) {
                              _vm.menu1 = $$v
                            },
                            expression: "menu1"
                          }
                        },
                        [
                          _vm._v(" "),
                          _vm.menu1
                            ? _c("v-time-picker", {
                                attrs: {
                                  "full-width": "",
                                  "header-color": "grey",
                                  format: "24hr"
                                },
                                on: {
                                  "click:minute": function($event) {
                                    return _vm.$refs.menuStart.save(
                                      _vm.form.startTime
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form.startTime,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "startTime", $$v)
                                  },
                                  expression: "form.startTime"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "4" } },
                    [
                      _c(
                        "v-menu",
                        {
                          ref: "menuEnd",
                          attrs: {
                            "close-on-content-click": false,
                            "nudge-right": 40,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "290px"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      {
                                        attrs: {
                                          label: "Arbeitsende",
                                          "prepend-icon":
                                            "mdi-clock-time-four-outline",
                                          readonly: "",
                                          color: "brown"
                                        },
                                        model: {
                                          value: _vm.form.endTime,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "endTime", $$v)
                                          },
                                          expression: "form.endTime"
                                        }
                                      },
                                      on
                                    )
                                  )
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.menu2,
                            callback: function($$v) {
                              _vm.menu2 = $$v
                            },
                            expression: "menu2"
                          }
                        },
                        [
                          _vm._v(" "),
                          _vm.menu2
                            ? _c("v-time-picker", {
                                attrs: {
                                  "full-width": "",
                                  "header-color": "grey",
                                  format: "24hr"
                                },
                                on: {
                                  "click:minute": function($event) {
                                    return _vm.$refs.menuEnd.save(
                                      _vm.form.endTime
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form.endTime,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "endTime", $$v)
                                  },
                                  expression: "form.endTime"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.tools,
                      "item-text": "title",
                      label: "Werkzeuge",
                      color: "brown",
                      "return-object": "",
                      filled: "",
                      dense: "",
                      clearable: "",
                      chips: "",
                      multiple: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selection",
                        fn: function(ref) {
                          var item = ref.item
                          var index = ref.index
                          return [
                            _c(
                              "v-chip",
                              {
                                staticClass: "ma-2",
                                attrs: {
                                  "text-color": "white",
                                  color: "brown",
                                  label: ""
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.title) +
                                    " / " +
                                    _vm._s(item.deviceUsePerEvent) +
                                    " h\n            "
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "item",
                        fn: function(data) {
                          return [
                            _c(
                              "v-list-item",
                              _vm._g(
                                _vm._b(
                                  { attrs: { c: "" } },
                                  "v-list-item",
                                  data.attrs,
                                  false
                                ),
                                data.on
                              ),
                              [
                                _c(
                                  "v-list-item-action",
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        value: data.attrs.inputValue,
                                        color: "brown"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c(
                                      "v-row",
                                      {
                                        attrs: {
                                          "no-gutters": "",
                                          align: "center"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            attrs: { cols: "4", "sm-col": "12" }
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "brown--text text-subtitle-1"
                                              },
                                              [_vm._v(_vm._s(data.item.title))]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: { cols: "6", "sm-col": "12" }
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "brown--text text-subtitle-1 font-weight-bold"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    data.item.deviceUsePerEvent
                                                  ) + " h"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("v-slider", {
                                              staticClass: "pt-10",
                                              attrs: {
                                                step: "0.5",
                                                "thumb-label": "",
                                                min: "0.5",
                                                max: "8",
                                                ticks: "",
                                                color: "brown",
                                                "thumb-color":
                                                  "brown lighten-2",
                                                "track-fill-color":
                                                  "brown darken-2",
                                                "track-color": "brown lighten-2"
                                              },
                                              model: {
                                                value:
                                                  data.item.deviceUsePerEvent,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    data.item,
                                                    "deviceUsePerEvent",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "data.item.deviceUsePerEvent"
                                              }
                                            })
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
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.form.tools,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "tools", $$v)
                      },
                      expression: "form.tools"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.form.processing,
                        text: "",
                        color: "error"
                      },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Abbrechen")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        loading: _vm.form.processing,
                        color: "dirneder white--text"
                      },
                      on: { click: _vm.submit }
                    },
                    [_vm._v("Speichern\n        ")]
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