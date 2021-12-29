"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_event_index_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_AdminLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/AdminLayout.vue */ "./resources/js/layouts/AdminLayout.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["items", "customers", "employees", "vehicles", "count"],
  components: {
    AdminLayout: _layouts_AdminLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: "No",
        value: "index",
        sortable: false
      }, {
        text: "Bezeichner",
        value: "name"
      }, {
        text: "Termin",
        value: "start"
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
      menu: false,
      menu1: false,
      dialog: false,
      dialogDelete: false,
      isUpdate: false,
      isLoading: false,
      isLoadingTable: false,
      itemId: null,
      options: {},
      search: null,
      params: {},
      specials: ['pers. Termin', 'Gartenpflege', 'Baumpflege', 'Zaunbau', 'Transport', 'Winterdienst', 'Instandsetzung'],
      colors: ['red', 'green', 'green', 'brown', 'blue', 'grey', 'orange'],
      recurrence: [{
        id: 0,
        type: 'keine'
      }, {
        id: 1,
        type: 'täglich'
      }, {
        id: 2,
        type: 'wöchentlich'
      }, {
        id: 3,
        type: '14 tägig'
      }, {
        id: 4,
        type: 'monatlich'
      }, {
        id: 5,
        type: 'alle 3 Monate'
      }, {
        id: 6,
        type: 'halbjährlich'
      }],
      form: this.$inertia.form({
        name: null,
        start: null,
        end: null,
        type: null,
        color: 'dirneder',
        recurrence: null,
        customer_id: null,
        notes: null,
        employees: null,
        vehicles: null
      })
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.isUpdate ? "Auftrag bearbeiten" : "Auftrag anlegen";
    },
    computedColor: function computedColor() {
      switch (this.form.type) {
        case 'pers. Termin':
          return this.colors[0];

        case 'Gartenpflege':
          return this.colors[1];

        case 'Baumflege':
          return this.colors[2];

        case 'Zaunbau':
          return this.colors[3];

        case 'Transport':
          return this.colors[4];

        case 'Winterdienst':
          return this.colors[5];

        case 'Instandsetzung':
          return this.colors[6];

        default:
          return 'brown';
      }
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
    updateData: function updateData() {
      var _this = this;

      this.isLoadingTable = true;
      this.$inertia.get("/event", this.params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this.isLoadingTable = false;
        }
      });
    },
    create: function create() {
      this.dialog = true;
      this.form.reset();
      this.form.clearErrors();
    },
    editItem: function editItem(item) {
      this.form.clearErrors();
      this.form.name = item.name;
      this.form.start = item.start;
      this.form.end = item.start;
      this.form.type = item.type;
      this.form.color = this.computedColor;
      this.form.recurrence = item.recurrence;
      this.form.customer_id = item.customer_id;
      this.form.notes = item.notes;
      this.form.employees = item.employees;
      this.form.vehicles = item.vehicles;
      this.isUpdate = true;
      this.itemId = item.id;
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.itemId = item.id;
      this.dialogDelete = true;
    },
    destroy: function destroy() {
      var _this2 = this;

      this.form["delete"](route("event.destroy", this.itemId), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this2.dialogDelete = false;
          _this2.itemId = null;
        }
      });
    },
    submit: function submit() {
      var _this3 = this;

      if (this.isUpdate) {
        this.form.put(route("event.update", this.itemId), {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this3.isLoading = false;
            _this3.dialog = false;
            _this3.isUpdate = false;
            _this3.itemId = null;

            _this3.form.reset();
          }
        });
      } else {
        this.form.color = this.computedColor;
        this.form.post(route("event.store"), {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this3.isLoading = false;
            _this3.dialog = false;

            _this3.form.reset();
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-breadcrumbs[data-v-31de7fc4] a {\n  color: green;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31de7fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31de7fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31de7fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/pages/event/index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/event/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_31de7fc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=31de7fc4&scoped=true& */ "./resources/js/pages/event/index.vue?vue&type=template&id=31de7fc4&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/event/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_31de7fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css& */ "./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_31de7fc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_31de7fc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "31de7fc4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/event/index.vue"
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

/***/ "./resources/js/pages/event/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/event/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31de7fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=style&index=0&id=31de7fc4&scoped=true&lang=css&");


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

/***/ "./resources/js/pages/event/index.vue?vue&type=template&id=31de7fc4&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/event/index.vue?vue&type=template&id=31de7fc4&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31de7fc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31de7fc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31de7fc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=31de7fc4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=template&id=31de7fc4&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=template&id=31de7fc4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/index.vue?vue&type=template&id=31de7fc4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Aufträge")
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
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "brown lighten-4 brown--text" },
              on: { click: _vm.create }
            },
            [
              _c("v-icon", { attrs: { dark: "", left: "" } }, [
                _vm._v(" mdi-plus")
              ]),
              _vm._v("\n      Neu\n    ")
            ],
            1
          )
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
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        "x-small": "",
                        color: "red lighten-2",
                        dark: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.deleteItem(item)
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { small: "" } }, [
                        _vm._v(" mdi-delete")
                      ])
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
          attrs: { "max-width": "600px", scrollable: "" },
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
                {
                  staticClass: "text-h6",
                  attrs: { dense: "", dark: "", color: "dirneder" }
                },
                [_vm._v(_vm._s(_vm.formTitle) + "\n      ")]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "pt-4" },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Bezeichner",
                      color: "brown",
                      "error-messages": _vm.form.errors.name,
                      type: "text",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-menu",
                    {
                      ref: "menu",
                      attrs: {
                        "close-on-content-click": false,
                        "return-value": _vm.form.start,
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "auto"
                      },
                      on: {
                        "update:returnValue": function($event) {
                          return _vm.$set(_vm.form, "start", $event)
                        },
                        "update:return-value": function($event) {
                          return _vm.$set(_vm.form, "start", $event)
                        }
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
                                      value: _vm.dateFormattedStart,
                                      "v-model": _vm.form.start,
                                      label: "Termin",
                                      "prepend-icon": "mdi-calendar",
                                      readonly: "",
                                      densed: "",
                                      outlined: "",
                                      color: "dirneder"
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
                        value: _vm.menu,
                        callback: function($$v) {
                          _vm.menu = $$v
                        },
                        expression: "menu"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-date-picker",
                        {
                          attrs: {
                            "no-title": "",
                            scrollable: "",
                            locale: "de"
                          },
                          model: {
                            value: _vm.form.start,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "start", $$v)
                            },
                            expression: "form.start"
                          }
                        },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "error" },
                              on: {
                                click: function($event) {
                                  _vm.menu = false
                                }
                              }
                            },
                            [_vm._v("\n              Abbrechen\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "dirneder" },
                              on: {
                                click: function($event) {
                                  return _vm.$refs.menu.save(_vm.form.start)
                                }
                              }
                            },
                            [_vm._v("\n              OK\n            ")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      items: _vm.recurrence,
                      "item-text": "type",
                      "item-value": "id",
                      label: "Wiederholung",
                      "error-messages": _vm.form.errors.recurrence,
                      color: "brown",
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.recurrence,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "recurrence", $$v)
                      },
                      expression: "form.recurrence"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      items: _vm.specials,
                      label: "Leistung",
                      "error-messages": _vm.form.errors.type,
                      color: "brown",
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.type,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "type", $$v)
                      },
                      expression: "form.type"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      items: _vm.customers,
                      "item-text": "lastName",
                      "item-value": "id",
                      label: "Kunde",
                      color: "brown",
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.customer_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "customer_id", $$v)
                      },
                      expression: "form.customer_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    staticClass: "mt-2 mb-3",
                    attrs: {
                      items: _vm.employees,
                      "item-text": "name",
                      "item-value": "id",
                      "menu-props": { maxHeight: "400" },
                      label: "Mitarbeiter",
                      multiple: "",
                      "open-on-clear": "",
                      "error-messages": _vm.form.errors.employees,
                      dense: "",
                      outlined: "",
                      clearable: "",
                      color: "brown",
                      "item-color": "brown",
                      hint: "Mitarbeiter auswählen",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.form.employees,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "employees", $$v)
                      },
                      expression: "form.employees"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    staticClass: "mt-2 mb-3",
                    attrs: {
                      items: _vm.vehicles,
                      "item-text": "branding",
                      "item-value": "id",
                      "menu-props": { maxHeight: "400" },
                      label: "Fahrzeuge",
                      multiple: "",
                      "open-on-clear": "",
                      "error-messages": _vm.form.errors.vehicles,
                      dense: "",
                      outlined: "",
                      clearable: "",
                      color: "brown",
                      "item-color": "brown",
                      hint: "Fahrzeuge auswählen",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.form.vehicles,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "vehicles", $$v)
                      },
                      expression: "form.vehicles"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      label: "Bemerkungen",
                      "error-messages": _vm.form.errors.notes,
                      color: "brown",
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.notes,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "notes", $$v)
                      },
                      expression: "form.notes"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex" })
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500" },
          model: {
            value: _vm.dialogDelete,
            callback: function($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "text-h6",
                  attrs: { dense: "", dark: "", color: "dirneder" }
                },
                [_vm._v("Datensatz löschen\n      ")]
              ),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "text-h6" }, [
                _vm._v("Löschen bestätigen ?\n      ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
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
                          _vm.dialogDelete = false
                        }
                      }
                    },
                    [_vm._v("Abbruch")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        loading: _vm.form.processing,
                        text: "",
                        color: "dirneder"
                      },
                      on: { click: _vm.destroy }
                    },
                    [_vm._v("Ja")]
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