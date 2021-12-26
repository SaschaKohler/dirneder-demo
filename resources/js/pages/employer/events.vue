<template>

  <employer-layout :notifications="notifications">
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Meine Aufträge</h5>
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
      />
      <v-spacer/>
    </div>
    <v-data-table
      :items="items.data"
      :headers="headers"
      :options.sync="options"
      :server-items-length="items.total"
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

      <template #[`item.action`]="{ item }">
        <v-btn x-small color="yellow lighten-2" @click="editItem(item)">
          <v-icon small> mdi-pencil</v-icon>
          Zeiterfassung
        </v-btn>

      </template>
    </v-data-table>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <v-card >
        <v-toolbar dense dark color="brown" >{{formTitle}}</v-toolbar>
        <v-menu
          ref="menuStart"
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="form.startTime"
              label="Arbeitsbeginn"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              color="brown"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu1"
            v-model="form.startTime"
            full-width
            header-color="grey"
            format="24hr"
            @click:minute="$refs.menuStart.save(form.startTime)"
          ></v-time-picker>
        </v-menu>

          <v-menu
            ref="menuEnd"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="form.endTime"
                label="Arbeitsende"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                color="brown"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="form.endTime"
              full-width
              header-color="grey"
              format="24hr"
              @click:minute="$refs.menuEnd.save(form.endTime)"
            ></v-time-picker>
          </v-menu>
          <v-card-actions>
        <v-btn :disabled="form.processing" text color="error" @click="dialog = false">Abbrechen</v-btn>
          <v-spacer/>
          <v-btn :loading="form.processing" color="dirneder white--text" @click="submit"
          >Speichern
          </v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </employer-layout>
</template>

<script>
import EmployerLayout from "../../layouts/EmployerLayout.vue";
import {format, parseISO} from 'date-fns'

export default {
  props: ["items","notifications"],
  components: {EmployerLayout},
  data() {
    return {
      headers: [
        {text: "No", value: "index", sortable: false},
        {text: "Bezeichner", value: "name"},
        {text: "Start", value: "start"},
        {text: "Ende", value: "end"},
        {text: "Leistung", value: "type"},
        {text: "Kunde", value: "customer_id"},
        {text: "Mitarbeiter", value: "employees", sortable: false},
        {text: "Fahrzeuge", value: "vehicles", sortable: false},
        {text: "Actions", value: "action", sortable: false},
      ],
      breadcrumbs: [
        {
          text: "App",
          disabled: false,
          href: "/home",
        },
        {
          text: "Aufträge",
          disabled: true,
          href: "/event",
        },
      ],
      dialog: false,
      menu1:false,
      menu2:false,
      isUpdate: false,
      isLoading: false,
      isLoadingTable: false,
      itemId: null,
      options: {},
      search: null,
      params: {},
      form: this.$inertia.form({
        startTime: null,
        endTime: null,
      }),
    };
  },
  computed: {
    formTitle() {
      return this.isUpdate ? "Zeiterfassung" : "";
    },
    dateFormattedStart() {
      return this.form.start ? format(parseISO(this.form.start), 'dd\.MM\.yyyy') : ''
    },
    dateFormattedEnd() {
      return this.form.end ? format(parseISO(this.form.end), 'dd\.MM\.yyyy') : ''
    },

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
      this.$inertia.get("/employer/events", this.params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.isLoadingTable = false
        },
      });
    },
    editItem(item) {
      this.form.clearErrors();
      this.form.name = item.name;
      this.form.startTime = item.startTime;
      this.form.endTime = item.endTime;
      this.isUpdate = true;
      this.itemId = item.id;
      this.dialog = true;
    },

    submit() {
      this.form.put(route("employer.eventUpdate", this.itemId), {
        preserveScroll: true,
        onSuccess: () => {
          this.isLoading = false;
          this.dialog = false;
          this.isUpdate = false;
          this.itemId = null;
          this.form.reset();
        },
      });
    }
  },

};
</script>

<style scoped>
.v-breadcrumbs >>> a {
  color: green;
}
</style>
