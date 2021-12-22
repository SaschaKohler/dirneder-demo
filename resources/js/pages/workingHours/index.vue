<template>
  <admin-layout>
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Benutzer</h5>
        <v-breadcrumbs :items="breadcrumbs" color="brown--text" class="pa-0"></v-breadcrumbs>
      </div>
    </v-banner>
    <div class="d-flex flex-wrap align-center">

    <v-text-field
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      label="Suche"
      single-line
      dense
      clearable
      hide-details
      class="py-4"
      solo
      style="max-width: 300px"
    /><v-spacer></v-spacer>
    <p class="text-h5">Summe Stunden: <span class="text-bold">{{sumOfHours}}</span></p>
    </div>
    <v-data-table
      :items="events.data"
      :headers="headers"
      :options.sync="options"
      :server-items-length="events.total"
      :loading="isLoadingTable"
      class="elevation-1"
    >
      <template #[`item.index`]="{ index }">
      {{ (options.page - 1) * options.itemsPerPage + index + 1 }}
    </template>
      <template v-slot:item.customer_id="{ item }">
        {{ item.customer.lastName }}
      </template>
      <template v-slot:item.employees="{ item }">
        <ul>
          <li v-for="item in item.employees" :key="item.id">{{ item.name }}</li>
        </ul>
      </template>
      <template v-slot:item.vehicles="{ item }">
        <ul>
          <li v-for="item in item.vehicles" :key="item.id">{{ item.branding }}</li>
        </ul>
      </template>
    </v-data-table>

  </admin-layout>
</template>

<script>
import AdminLayout from "../../layouts/AdminLayout";

export default {
  props: ["events","count","sumOfHours"],
  components: {AdminLayout},
  data() {
    return {
      headers: [
        {text: "Bezeichner", value: "name"},
        {text: "Kunde", value: "customer_id"},
        {text: "Tätigkeit", value: "type"},
        {text: "Mitarbeiter", value: "employees"},
        {text: "Fahrzeuge", value: "vehicles"},
        {text: "Tag", value: "start"},
        {text: "Stunden", value: "workingHours"},
      ],
      breadcrumbs: [
        {
          text: "App",
          disabled: false,
          href: "/home",
        },
        {
          text: "Belegschaft",
          disabled: false,
          href: "",
        },
        {
          text: "Arbeitszeit",
          disabled: true,
          href: "/user",
        },
      ],
      search: null,
      isLoadingTable: false,
      params: {},
      options:null,
   }
  },
  watch: {
    options: function (val) {
      this.params.page = val.page;
      if (val.itemsPerPage === -1) { // get page_size 'All' (-1)
        this.params.page_size = this.$props.count;
      } else {
        this.params.page_size = val.itemsPerPage
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
    search: function (val) {
      this.params.search = val;
      this.updateData();
    },
  },
  methods: {
    updateData() {

      this.isLoadingTable = true
      this.$inertia.get("/workingHours", this.params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.isLoadingTable = false
        },
      });

    },

  }
}
</script>


