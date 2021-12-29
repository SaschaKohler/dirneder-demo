<template>
  <admin-layout>
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Kunden</h5>
        <v-breadcrumbs :items="breadcrumbs" class="pa-0"></v-breadcrumbs>
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
        <v-btn x-small color="yellow" @click="editItem(item)">
          <v-icon small> mdi-pencil </v-icon>
        </v-btn>
        <v-btn x-small color="red" dark @click="deleteItem(item)">
          <v-icon small> mdi-delete </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px" scrollable>
      <v-card>
        <v-toolbar dense dark color="dirneder" class="text-h6">{{
            formTitle
          }}</v-toolbar>
        <v-card-text class="pt-4">
          <v-text-field
            v-model="form.firstName"
            label="Vorname"
            :error-messages="form.errors.firstName"
            type="text"
            outlined
            color="brown"
            dense
          />
          <v-text-field
            v-model="form.lastName"
            label="Nachname"
            :error-messages="form.errors.lastName"
            type="text"
            color="brown"
            outlined
            dense
            />
          <v-text-field
            v-model="form.branding"
            label="Firma"
            :error-messages="form.errors.branding"
            type="text"
            color="brown"
            outlined
            dense
          />
          <v-text-field
            v-model="form.street"
            label="Strasse"
            :error-messages="form.errors.street"
            type="text"
            outlined
            color="brown"
            dense
          />
          <v-text-field
            v-model="form.city"
            label="Stadt/Ort"
            :error-messages="form.errors.city"
            type="text"
            outlined
            color="brown"
            dense
          />
          <v-text-field
            v-model="form.PLZ"
            label="PLZ"
            :error-messages="form.errors.PLZ"
            type="text"
            outlined
            color="brown"
            dense
          />
          <v-text-field
            v-model="form.email"
            label="Email"
            :error-messages="form.errors.email"
            outlined
            color="brown"
            dense
          />
          <v-text-field
            v-model="form.phone1"
            label="Mobil"
            :error-messages="form.errors.phone1"
            outlined
            color="brown"
            dense
          />
          <v-text-field
            v-model="form.phone2"
            label="Telefon"
            :error-messages="form.errors.phone2"
            color="brown"
            outlined
            dense
          />
          <v-textarea
            v-model="form.notes"
            label="Notizen"
            :error-messages="form.errors.notes"
            outlined
            color="brown"
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
        <v-toolbar dense dark color="primary" class="text-h6"
        >Delete Customer</v-toolbar
        >
        <v-card-text class="text-h6"
        >Are you sure delete this item ?</v-card-text
        >
        <v-card-actions>
          <v-spacer />
          <v-btn :disabled="form.processing" text color="error" @click="dialogDelete = false">Cancel</v-btn>
          <v-btn :loading="form.processing" text color="dirneder" @click="destroy">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </admin-layout>
</template>

<script>
import AdminLayout from "../../layouts/AdminLayout.vue";
export default {
  props: ["items"],
  components: { AdminLayout },
  data() {
    return {
      headers: [
        { text: "No", value: "index", sortable: false },
        { text: "Nachname", value: "lastName" },
        { text: "Firma", value: "branding" },
        { text: "Strasse", value: "street" },
        { text: "Stadt/Ort", value: "city" },
        { text: "Tel", value: "phone1" },
        { text: "angelegt", value: "created_at" },
        { text: "Actions", value: "action", sortable: false },
      ],
      breadcrumbs: [
        {
          text: "App",
          disabled: false,
          href: "/home",
        },
        {
          text: "Kunde",
          disabled: true,
          href: "/customer",
        },
      ],
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
    }
  },
  computed: {
    formTitle() {
      return this.isUpdate ? "Kunde bearbeiten" : "Kunde anlegen";
    },
  },
  watch: {
    options: function (val) {
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
    search: function (val) {
      this.params.search = val;
      this.updateData();
    },
  },
  methods: {
    updateData() {
      this.isLoadingTable = true
      this.$inertia.get("/customer", this.params, {
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
    deleteItem(item) {
      this.itemId = item.id;
      this.dialogDelete = true;
    },
    destroy() {
      this.form.delete(route("customer.destroy", this.itemId), {
        preverseScroll: true,
        onSuccess: () => {
          this.dialogDelete = false;
          this.itemId = null;
        },
      });
    },
    submit() {
      if (this.isUpdate) {
        this.form.put(route("customer.update", this.itemId), {
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
        this.form.post(route("customer.store"), {
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
