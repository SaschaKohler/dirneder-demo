<template>

  <admin-layout>
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Aufträge</h5>
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
      <v-btn color="brown lighten-4 brown--text" @click="create">
        <v-icon dark left> mdi-plus</v-icon>
        Neu
      </v-btn>
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
        </v-btn>
        <v-btn x-small color="red lighten-2" dark @click="deleteItem(item)">
          <v-icon small> mdi-delete</v-icon>

        </v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="600px" scrollable>
      <v-card>
        <v-toolbar dense dark color="dirneder" class="text-h6">{{
            formTitle
          }}
        </v-toolbar>
        <v-card-text class="pt-4">
          <v-text-field
            v-model="form.name"
            label="Bezeichner"
            color="brown"
            :error-messages="form.errors.name"
            type="text"
            dense
          />

          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="form.start"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="dateFormattedStart"
                label="Start"
                prepend-icon="mdi-calendar"
                readonly
                densed
                outlined
                v-on="on"
                color="dirneder"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.start"
              no-title
              scrollable
              locale="de"
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="error"
                @click="menu = false"
              >
                Abbrechen
              </v-btn>
              <v-btn
                text
                color="dirneder"
                @click="$refs.menu.save(form.start)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            :return-value.sync="form.end"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="dateFormattedEnd"
                label="Ende"
                prepend-icon="mdi-calendar"
                readonly
                densed
                outlined
                v-on="on"
                color="dirneder"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.end"
              no-title
              scrollable
              locale="de"
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="error"
                @click="menu1 = false"
              >
                Abbrechen
              </v-btn>
              <v-btn
                text
                color="dirneder"
                @click="$refs.menu1.save(form.end)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-select
            v-model="form.type"
            :items="specials"
            label="Leistung"
            :error-messages="form.errors.type"
            color="brown"
            outlined
            dense
          />
          <v-select
            v-model="form.customer_id"
            :items="customers"
            item-text="lastName"
            item-value="id"
            label="Kunde"
            color="brown"
            outlined
            dense
          ></v-select>
          <v-select
            v-model="form.employees"
            :items="employees"
            item-text="name"
            item-value="id"
            :menu-props="{ maxHeight: '400' }"
            label="Mitarbeiter"
            multiple
            open-on-clear
            :error-messages="form.errors.employees"
            dense
            outlined
            clearable
            color="brown"
            item-color="brown"
            class="mt-2 mb-3"
            hint="Mitarbeiter auswählen"
            persistent-hint
          ></v-select>
          <v-select
            v-model="form.vehicles"
            :items="vehicles"
            item-text="branding"
            item-value="id"
            :menu-props="{ maxHeight: '400' }"
            label="Fahrzeuge"
            multiple
            open-on-clear
            :error-messages="form.errors.vehicles"
            dense
            outlined
            clearable
            color="brown"
            item-color="brown"
            class="mt-2 mb-3"
            hint="Fahrzeuge auswählen"
            persistent-hint
          ></v-select>
          <v-textarea
            v-model="form.notes"
            label="Bemerkungen"
            :error-messages="form.errors.notes"
            color="brown"
            outlined
            dense
          />

          <div class="d-flex"></div>
        </v-card-text>
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
    <v-dialog v-model="dialogDelete" max-width="500">
      <v-card>
        <v-toolbar dense dark color="dirneder" class="text-h6"
        >Datensatz löschen
        </v-toolbar
        >
        <v-card-text class="text-h6"
        >Löschen bestätigen ?
        </v-card-text
        >
        <v-card-actions>
          <v-spacer/>
          <v-btn :disabled="form.processing" text color="error" @click="dialogDelete = false">Abbruch</v-btn>
          <v-btn :loading="form.processing" text color="dirneder" @click="destroy">Ja</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </admin-layout>
</template>

<script>
import AdminLayout from "../../layouts/AdminLayout.vue";
import {format, parseISO} from 'date-fns'

export default {
  props: ["items", "customers", "employees", "vehicles", "count"],
  components: {AdminLayout},
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
      form: this.$inertia.form({
        name: null,
        start: null,
        end: null,
        type: null,
        color: 'dirneder',
        customer_id: null,
        notes: null,
        employees: null,
        vehicles: null,
      }),
    };
  },
  computed: {
    formTitle() {
      return this.isUpdate ? "Auftrag bearbeiten" : "Auftrag anlegen";
    },
    computedColor() {
      console.log(this.form.type);

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
      this.$inertia.get("/event", this.params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.isLoadingTable = false
        },
      });
    },
    create() {
      this.dialog = true;
      this.form.reset();
      this.form.clearErrors();
    },
    editItem(item) {
      this.form.clearErrors();
      this.form.name = item.name;
      this.form.start = item.start;
      this.form.end = item.end;
      this.form.type = item.type;
      this.form.color = this.computedColor;
      this.form.customer_id = item.customer_id;
      this.form.notes = item.notes;
      this.form.employees = item.employees;
      this.form.vehicles = item.vehicles;
      this.isUpdate = true;
      this.itemId = item.id;
      this.dialog = true;
    },
    deleteItem(item) {
      this.itemId = item.id;
      this.dialogDelete = true;
    },
    destroy() {
      this.form.delete(route("event.destroy", this.itemId), {
        preserveScroll: true,
        onSuccess: () => {
          this.dialogDelete = false;
          this.itemId = null;
        },
      });
    },
    submit() {
      if (this.isUpdate) {
        this.form.put(route("event.update", this.itemId), {
          preserveScroll: true,
          onSuccess: () => {
            this.isLoading = false;
            this.dialog = false;
            this.isUpdate = false;
            this.itemId = null;
            this.form.reset();
          },
        });
      } else {
        this.form.post(route("event.store"), {
          preserveScroll: true,
          onSuccess: () => {
            this.isLoading = false;
            this.dialog = false;
            this.form.reset();
          },
        });
      }
    },
  },

};
</script>

<style scoped>
.v-breadcrumbs >>> a {
  color: green;
}
</style>
