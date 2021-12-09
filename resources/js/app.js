require("./bootstrap");
require("./plugins/vue-toastification");
import Vue from "vue";
import {
  App as InertiaApp,
  plugin as InertiaPlugin
} from "@inertiajs/inertia-vue";
import { Link } from "@inertiajs/inertia-vue";
import vuetify from "./plugins/vuetify";
import DatetimePicker from 'vuetify-datetime-picker'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

import { InertiaProgress } from "@inertiajs/progress";

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.use(InertiaPlugin);
Vue.use(DatetimePicker);

Vue.component("Link", Link);
Vue.mixin({ methods: { route: window.route } });
const app = document.getElementById("app");

new Vue({
  vuetify,
  render: h =>
    h(InertiaApp, {
      props: {
        title: title => `${title} - Verwaltung`,
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: name => require(`./pages/${name}`).default
      }
    })
}).$mount(app);

InertiaProgress.init({ color: "#fff" });
