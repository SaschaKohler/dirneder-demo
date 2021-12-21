<template>
  <admin-layout>
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Benutzer</h5>
        <v-breadcrumbs :items="breadcrumbs" color="brown--text" class="pa-0"></v-breadcrumbs>
      </div>
    </v-banner>
    <v-data-table
      :items="events.data"
      :headers="headers"
      :options.sync="options"
      :server-items-length="events.total"
      :loading="isLoadingTable"
      class="elevation-1"
    >
      <template v-slot:item.employees = {item}>
        <li v-for="item in item.employees" :key="item.id">
          {{item.name}}</li>
      </template>
    </v-data-table>
  </admin-layout>
</template>

<script>
import AdminLayout from "../../layouts/AdminLayout";

export default {
  props: ["events"],
  components: {AdminLayout},
  data() {
    return {
      headers: [
        {text: "Name", value: "employees"},


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
          text: "Benutzer",
          disabled: true,
          href: "/user",
        },
      ],

    }
  }
}
</script>


