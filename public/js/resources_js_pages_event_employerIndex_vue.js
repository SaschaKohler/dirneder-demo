"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_event_employerIndex_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/employerIndex.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/employerIndex.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_AdminLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/AdminLayout.vue */ "./resources/js/layouts/AdminLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["items", "customers", "employees"],
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
        text: "Beginn",
        value: "start"
      }, {
        text: "Ende",
        value: "end"
      }, {
        text: "Leistung",
        value: "type"
      }, {
        text: "Kunde",
        value: "customer_id"
      }, {
        text: "Mitarbeiter",
        value: "employees"
      }, {
        text: "Angelegt",
        value: "created_at"
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
      dialogDelete: false,
      isUpdate: false,
      isLoading: false,
      isLoadingTable: false,
      itemId: null,
      options: {},
      search: null,
      params: {},
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      form: this.$inertia.form({
        name: null,
        start: null,
        end: null,
        type: null,
        color: 'dirneder',
        customer_id: null,
        notes: null,
        employees: null
      })
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.isUpdate ? "Auftrag bearbeiten" : "Auftrag anlegen";
    }
  },
  watch: {
    options: function options(val) {
      this.params.page = val.page;
      this.params.page_size = val.itemsPerPage;

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
    },
    dialog: function dialog(visible) {
      if (visible) {} else {}
    }
  },
  methods: {
    setEmployees: function setEmployees() {
      if (!_.isEmpty(this.items[this.items.employees])) {
        var items = [];

        _.values(this.items[this.$props.employees]).forEach(function (value) {
          items.push({
            text: value.name,
            value: value.id
          });
        });

        this.form.employees = items;
      }
    },
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
      this.form.end = item.end;
      this.form.type = item.type;
      this.form.customer_id = item.customer_id;
      this.form.notes = item.notes;
      this.form.employees = item.employees;
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
  },
  mounted: function mounted() {
    this.setEmployees();
  }
});

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

/***/ "./resources/js/pages/event/employerIndex.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/event/employerIndex.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _employerIndex_vue_vue_type_template_id_11182149___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employerIndex.vue?vue&type=template&id=11182149& */ "./resources/js/pages/event/employerIndex.vue?vue&type=template&id=11182149&");
/* harmony import */ var _employerIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employerIndex.vue?vue&type=script&lang=js& */ "./resources/js/pages/event/employerIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _employerIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employerIndex_vue_vue_type_template_id_11182149___WEBPACK_IMPORTED_MODULE_0__.render,
  _employerIndex_vue_vue_type_template_id_11182149___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/event/employerIndex.vue"
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

/***/ "./resources/js/pages/event/employerIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/event/employerIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employerIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./employerIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/employerIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employerIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/event/employerIndex.vue?vue&type=template&id=11182149&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/event/employerIndex.vue?vue&type=template&id=11182149& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employerIndex_vue_vue_type_template_id_11182149___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employerIndex_vue_vue_type_template_id_11182149___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employerIndex_vue_vue_type_template_id_11182149___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./employerIndex.vue?vue&type=template&id=11182149& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/employerIndex.vue?vue&type=template&id=11182149&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/employerIndex.vue?vue&type=template&id=11182149&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/employerIndex.vue?vue&type=template&id=11182149& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                _vm._v(" mdi-plus ")
              ]),
              _vm._v(" Neu\n    ")
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
              key: "item.start",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("span", [_vm._v(_vm._s(item.start.substring(0, 10)))])
                ]
              }
            },
            {
              key: "item.end",
              fn: function(ref) {
                var item = ref.item
                return [_c("span", [_vm._v(_vm._s(item.end.substring(0, 10)))])]
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
                        _vm._v(" mdi-pencil ")
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
                        _vm._v(" mdi-delete ")
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
                [_vm._v(_vm._s(_vm.formTitle))]
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
                      outlined: "",
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
                  _c("v-select", {
                    attrs: {
                      items: _vm.colors,
                      "item-text": "title",
                      "item-value": "id",
                      label: "Farbe",
                      color: "brown",
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.color,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "color", $$v)
                      },
                      expression: "form.color"
                    }
                  }),
                  _vm._v(" "),
                  _c("VueCtkDateTimePicker", {
                    staticClass: "mb-5",
                    attrs: {
                      label: "Beginn",
                      color: "#388E3C",
                      format: "YYYY-MM-DD HH:mm",
                      locale: "de",
                      "output-format": "YYYY-MM-DD HH:mm",
                      "no-button-now": true,
                      "button-color": "#388E3C"
                    },
                    model: {
                      value: _vm.form.start,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "start", $$v)
                      },
                      expression: "form.start"
                    }
                  }),
                  _vm._v(" "),
                  _c("VueCtkDateTimePicker", {
                    staticClass: "mb-5",
                    attrs: {
                      label: "Ende",
                      color: "#388E3C",
                      format: "YYYY-MM-DD HH:mm",
                      locale: "de",
                      "no-button-now": true,
                      "button-color": "#388E3C"
                    },
                    model: {
                      value: _vm.form.end,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "end", $$v)
                      },
                      expression: "form.end"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
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
                    [_vm._v("Speichern")]
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
                [_vm._v("Datensatz löschen")]
              ),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "text-h6" }, [
                _vm._v("Löschen bestätigen ?")
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