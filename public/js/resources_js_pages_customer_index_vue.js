"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_customer_index_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/customer/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/customer/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["items"],
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
        text: "Nachname",
        value: "lastName"
      }, {
        text: "Firma",
        value: "branding"
      }, {
        text: "Strasse",
        value: "street"
      }, {
        text: "Stadt/Ort",
        value: "city"
      }, {
        text: "Tel",
        value: "phone1"
      }, {
        text: "angelegt",
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
        text: "Kunde",
        disabled: true,
        href: "/customer"
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
      form: this.$inertia.form({
        firstName: null,
        lastName: null,
        branding: null,
        street: null,
        city: null,
        PLZ: null,
        email: null,
        phone1: null,
        phone2: null,
        notes: null
      })
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.isUpdate ? "Kunde bearbeiten" : "Kunde anlegen";
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
    }
  },
  methods: {
    updateData: function updateData() {
      var _this = this;

      this.isLoadingTable = true;
      this.$inertia.get("/customer", this.params, {
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
      this.form.firstName = item.firstName;
      this.form.lastName = item.lastName;
      this.form.branding = item.branding;
      this.form.street = item.street;
      this.form.city = item.city;
      this.form.PLZ = item.PLZ;
      this.form.email = item.email;
      this.form.phone1 = item.phone1;
      this.form.phone2 = item.phone2;
      this.form.notes = item.notes;
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

      this.form["delete"](route("customer.destroy", this.itemId), {
        preverseScroll: true,
        onSuccess: function onSuccess() {
          _this2.dialogDelete = false;
          _this2.itemId = null;
        }
      });
    },
    submit: function submit() {
      var _this3 = this;

      if (this.isUpdate) {
        this.form.put(route("customer.update", this.itemId), {
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
        this.form.post(route("customer.store"), {
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

/***/ "./resources/js/pages/customer/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/customer/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_34accc8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=34accc8a& */ "./resources/js/pages/customer/index.vue?vue&type=template&id=34accc8a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/customer/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_34accc8a___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_34accc8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/customer/index.vue"
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

/***/ "./resources/js/pages/customer/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/customer/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/customer/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/customer/index.vue?vue&type=template&id=34accc8a&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/customer/index.vue?vue&type=template&id=34accc8a& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34accc8a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34accc8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34accc8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=34accc8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/customer/index.vue?vue&type=template&id=34accc8a&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/customer/index.vue?vue&type=template&id=34accc8a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/customer/index.vue?vue&type=template&id=34accc8a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
              _vm._v("Kunden")
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
              key: "item.action",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: { "x-small": "", color: "yellow" },
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
                      attrs: { "x-small": "", color: "red", dark: "" },
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
          attrs: { "max-width": "500px", scrollable: "" },
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
                      label: "Vorname",
                      "error-messages": _vm.form.errors.firstName,
                      type: "text",
                      outlined: "",
                      color: "brown",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.firstName,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "firstName", $$v)
                      },
                      expression: "form.firstName"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Nachname",
                      "error-messages": _vm.form.errors.lastName,
                      type: "text",
                      color: "brown",
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.lastName,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "lastName", $$v)
                      },
                      expression: "form.lastName"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Firma",
                      "error-messages": _vm.form.errors.branding,
                      type: "text",
                      color: "brown",
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.branding,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "branding", $$v)
                      },
                      expression: "form.branding"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Strasse",
                      "error-messages": _vm.form.errors.street,
                      type: "text",
                      outlined: "",
                      color: "brown",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.street,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "street", $$v)
                      },
                      expression: "form.street"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Stadt/Ort",
                      "error-messages": _vm.form.errors.city,
                      type: "text",
                      outlined: "",
                      color: "brown",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.city,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "city", $$v)
                      },
                      expression: "form.city"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "PLZ",
                      "error-messages": _vm.form.errors.PLZ,
                      type: "text",
                      outlined: "",
                      color: "brown",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.PLZ,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "PLZ", $$v)
                      },
                      expression: "form.PLZ"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Email",
                      "error-messages": _vm.form.errors.email,
                      outlined: "",
                      color: "brown",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Mobil",
                      "error-messages": _vm.form.errors.phone1,
                      outlined: "",
                      color: "brown",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.phone1,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "phone1", $$v)
                      },
                      expression: "form.phone1"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Telefon",
                      "error-messages": _vm.form.errors.phone2,
                      color: "brown",
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.form.phone2,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "phone2", $$v)
                      },
                      expression: "form.phone2"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      label: "Notizen",
                      "error-messages": _vm.form.errors.notes,
                      outlined: "",
                      color: "brown",
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
                  attrs: { dense: "", dark: "", color: "primary" }
                },
                [_vm._v("Delete Customer")]
              ),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "text-h6" }, [
                _vm._v("Are you sure delete this item ?")
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
                    [_vm._v("Cancel")]
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
                    [_vm._v("Yes")]
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