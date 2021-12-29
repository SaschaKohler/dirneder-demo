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
      <template v-slot:item.tools="{ item }">
        <ul>
          <li v-for="item in item.tools" :key="item.id">{{ item.title }} / {{ item.pivot.deviceUsePerEvent }}</li>
        </ul>
      </template>

      <template #[`item.action`]="{ item }">
        <v-btn x-small color="yellow lighten-2" @click="editItem(item)">
          <v-icon small> mdi-pencil</v-icon>
          Zeit / Tools
        </v-btn>


      </template>
    </v-data-table>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <v-card>
        <v-toolbar dense dark color="brown">{{ formTitle }}</v-toolbar>
        <v-row class="mt-5" justify="center">
          <v-col cols="4">
            <v-menu
              ref="menuStart"
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="390px"
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
          </v-col>
          <v-col cols="4">
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
          </v-col>

        </v-row>

        <v-container>
          <v-select
            v-model="form.tools"
            :items="tools"
            item-text="title"
            label="Werkzeuge"
            color="brown"
            return-object
            filled dense clearable chips multiple
          >
            <template v-slot:selection="{ item, index }">
              <v-chip text-color="white" color="brown" label class="ma-2"
              >{{ item.title }} / {{ item.deviceUsePerEvent }} h
              </v-chip>
            </template>
            <template v-slot:item="data">
              <v-list-item v-on="data.on" v-bind="data.attrs" c>
                <v-list-item-action>
                  <v-checkbox :value="data.attrs.inputValue" color="brown"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                    <v-row no-gutters align="center">
                      <v-col cols="4" sm-col="12">
                      <span class="brown--text text-subtitle-1">{{ data.item.title }}</span>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col cols="6" sm-col="12">
                      <span class="brown--text text-subtitle-1 font-weight-bold">{{ data.item.deviceUsePerEvent }} h</span>
                        <v-slider
                          v-model="data.item.deviceUsePerEvent"
                          step="0.5"
                          thumb-label
                          min="0.5"
                          max="8"
                          ticks
                          color="brown"
                          thumb-color="brown lighten-2"
                          track-fill-color="brown darken-2"
                          track-color="brown lighten-2"
                          class="pt-10"
                        ></v-slider>
                      </v-col>

                    </v-row>
                </v-list-item-content>
              </v-list-item>

            </template>

          </v-select>
        </v-container>
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
  props: ["items", "notifications", "tools"],
  components: {EmployerLayout},
  data() {
    return {
      headers: [
        {text: "No", value: "index", sortable: false},
        {text: "Arbeitstag", value: "start"},
        {text: "Arbeitszeit", value: "workingHours", sortable: false},
        {text: "Leistung", value: "type"},
        {text: "Kunde", value: "customer_id"},
        {text: "Mitarbeiter", value: "employees", sortable: false},
        {text: "Fahrzeuge", value: "vehicles", sortable: false},
        {text: "Werkzeug", value: "tools", sortable: false},
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
        tools: null,
      }),
    };
  },
  computed: {
    formTitle() {
      return this.isUpdate ? "Zeiterfassung / Geräte" : "";
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
    addMinutes() {
      this.tools.deviceUsePerEvent += .5;
    },
    subMinutes() {
      this.tools.deviceUsePerEvent -= .5;
    },

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
      console.log(item)
      this.form.clearErrors();
      this.form.name = item.name;
      this.form.startTime = item.startTime;
      this.form.endTime = item.endTime;
      this.form.tools = item.tools;
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
.v-list-item--active {
  background-color: #EFEBE9;
}
</style>
