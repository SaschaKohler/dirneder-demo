<template>

  <admin-layout>
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Fahrzeuge</h5>
        <v-breadcrumbs :items="breadcrumbs"  color="brown--text" class="pa-0"></v-breadcrumbs>
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
      <v-spacer />
      <v-btn color="brown lighten-4 brown--text" @click="create">
        <v-icon dark left> mdi-plus </v-icon> Neu
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
      <template #[`item.action`]="{ item }">
        <v-btn x-small color="yellow lighten-2" @click="editItem(item)">
          <v-icon small> mdi-pencil </v-icon>
        </v-btn>
        <v-btn x-small color="red lighten-2" dark @click="deleteItem(item)">
          <v-icon small> mdi-delete </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="600px" scrollable>
      <v-card>
        <v-toolbar dense dark color="dirneder" class="text-h6">{{
            formTitle
          }}</v-toolbar>
        <v-card-text class="pt-4">
          <v-text-field
            v-model="form.owner"
            label="Besitzer"
            color="brown"
            :error-messages="form.errors.owner"
            type="text"
            outlined
            dense
          />
          <v-text-field
            v-model="form.type"
            :error-messages="form.errors.type"
            label="Typ"
            color="brown"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="form.branding"
            label="Marke"
            :error-messages="form.errors.branding"
            color="brown"
            outlined
            dense
          />
         <v-text-field
            v-model="form.permit"
            label="Zulassung"
            :error-messages="form.errors.permit"
            color="brown"
            outlined
            dense
         />
         <v-text-field
            v-model="form.insurance_type"
            label="Versicherung"
            :error-messages="form.errors.insurance_type"
            color="brown"
            outlined
            dense
          />
         <v-text-field
            v-model="form.license_plate"
            label="Kennzeichen"
            :error-messages="form.errors.license_plate"
            color="brown"
            outlined
            dense
          />
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="form.inspection"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="dateFormattedStart"
                :v-model="form.inspection"
                label="Hauptuntersuchung"
                prepend-icon="mdi-calendar"
                readonly
                densed
                outlined
                color="brown"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.inspection"
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
                @click="$refs.menu.save(form.inspection)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
         <v-text-field
            v-model="form.insurance_company"
            label="Vers. Unternehmen"
            :error-messages="form.errors.insurance_company"
            color="brown"
            outlined
            dense
          />
         <v-text-field
            v-model="form.insurance_manager"
            label="Vers. Ansprech."
            :error-messages="form.errors.insurance_manager"
            color="brown"
            outlined
            dense
          />
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
          <v-spacer />
          <v-btn :loading="form.processing" color="dirneder white--text" @click="submit"
          >Speichern</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="500">
      <v-card>
        <v-toolbar dense dark color="dirneder" class="text-h6"
        >Datensatz löschen</v-toolbar
        >
        <v-card-text class="text-h6"
        >Löschen bestätigen ?</v-card-text
        >
        <v-card-actions>
          <v-spacer />
          <v-btn :disabled="form.processing" text color="error" @click="dialogDelete = false">Abbruch</v-btn>
          <v-btn :loading="form.processing" text color="dirneder" @click="destroy">Ja</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </admin-layout>
</template>

<script>
import AdminLayout from "../../layouts/AdminLayout.vue";
import {format, parseISO} from "date-fns";
export default {
  props: ["items", "customers", "employees", "count"],
  components: {AdminLayout},
  data() {
    return {
      headers: [
        {text: "No", value: "index", sortable: false},
        {text: "Besitzer", value: "owner"},
        {text: "Typ", value: "type"},
        {text: "Marke", value: "branding"},
        {text: "Kennzeichen", value: "license_plate"},
        {text: "Pickerl", value: "inspection"},
        {text: "Actions", value: "action", sortable: false},
      ],
      breadcrumbs: [
        {
          text: "App",
          disabled: false,
          href: "/home",
        },
        {
          text: "Fahrzeuge",
          disabled: true,
          href: "/vehicles",
        },
      ],
      menu:false,
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
        owner: null,
        type: null,
        branding: null,
        permit: null,
        insurance_type: 'dirneder',
        license_plate: null,
        inspection: null,
        insurance_company: null,
        insurance_manager: null,
      }),
    };
  },
  computed: {
    formTitle() {
      return this.isUpdate ? "Auftrag bearbeiten" : "Auftrag anlegen";
    },
    dateFormattedStart() {
      return this.form.inspection ? format(parseISO(this.form.inspection), 'dd\.MM\.yyyy') : ''
    },
  },
  watch: {
    options: function (val) {
      this.params.page = val.page;
      console.log(this.$props.count)
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
      this.$inertia.get("/vehicle", this.params, {
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
      this.form.owner = item.owner;
      this.form.type = item.type;
      this.form.branding = item.branding;
      this.form.permit = item.permit;
      this.form.insurance_type = item.insurance_type;
      this.form.license_plate = item.license_plate;
      this.form.inspection = item.inspection;
      this.form.insurance_company = item.insurance_company;
      this.form.insurance_manager = item.insurance_manager;
      this.isUpdate = true;
      this.itemId = item.id;
      this.dialog = true;
    },
    deleteItem(item) {
      this.itemId = item.id;
      this.dialogDelete = true;
    },
    destroy() {
      this.form.delete(route("vehicle.destroy", this.itemId), {
        preserveScroll: true,
        onSuccess: () => {
          this.dialogDelete = false;
          this.itemId = null;
        },
      });
    },
    submit() {
      if (this.isUpdate) {
        this.form.put(route("vehicle.update", this.itemId), {
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
        this.form.post(route("vehicle.store"), {
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
