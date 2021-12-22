<template>
  <admin-layout>
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Mitarbeiter</h5>
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
      <template v-slot:category_id="{ item }">
        {{ item.category.title }}
      </template>
      <template v-slot:item.role="{ item }">
        {{ item.role ? 'ja' : 'nein' }}
      </template>
      <template v-slot:item.isActive="{ item }">
        {{ item.isActive ? 'ja' : 'nein' }}
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
            v-model="form.name"
            label="Name"
            color="brown"
            :error-messages="form.errors.name"
            type="text"
            outlined
            dense
          />
          <v-text-field
            v-model="form.email"
            label="Email"
            :error-messages="form.errors.email"
            color="brown"
            outlined
            dense
          />
          <v-select
            v-model="form.category_id"
            :items="categories"
            item-text="title"
            item-value="id"
            label="Kategorie"
            color="brown"
            outlined
            dense
          />
          <v-checkbox
            v-model="form.isActive"
            label="Benutzer aktiv"
            color="dirneder"
          />
          <v-checkbox
            v-model="form.role"
            label="Administrator"
            color="dirneder"
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
          <v-btn :loading="form.processing" text color="primary" @click="destroy">Ja</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </admin-layout>
</template>

<script>
import AdminLayout from "../../layouts/AdminLayout.vue";
export default {
  props: ["items" , "categories"],
  components: { AdminLayout },
  data() {
    return {
      headers: [
        { text: "No", value: "index", sortable: false },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Kategorie", value: "category_id" },
        { text: "admin", value: "role" },
        { text: "aktiv", value: "isActive" },
        { text: "Actions", value: "action", sortable: false },
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
          text: "Mitarbeiter",
          disabled: true,
          href: "/user",
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
        name: null,
        category_id:null,
        email: null,
        role:null,
        isActive:null
      }),
    };
  },
  computed: {
    formTitle() {
      return this.isUpdate ? "Benutzer bearbeiten" : "Benutzer anlegen";
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
      this.$inertia.get("/user", this.params, {
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
      this.form.email = item.email;
      this.form.role = item.role;
      this.form.isActive = item.isActive;
      this.form.category_id=item.category_id;
      this.isUpdate = true;
      this.itemId = item.id;
      this.dialog = true;
    },
    deleteItem(item) {
      this.itemId = item.id;
      this.dialogDelete = true;
    },
    destroy() {
      this.form.delete(route("user.destroy", this.itemId), {
        preserveScroll: true,
        onSuccess: () => {
          this.dialogDelete = false;
          this.itemId = null;
        },
      });
    },
    submit() {
      if (this.isUpdate) {
        this.form.put(route("user.update", this.itemId), {
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
        this.form.post(route("user.store"), {
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
