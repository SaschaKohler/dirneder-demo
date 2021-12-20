<template>
  <employer-layout>
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Benutzerprofil</h5>
        <v-breadcrumbs :items="breadcrumbs" class="pa-0"></v-breadcrumbs>
      </div>
    </v-banner>
    <div class="d-flex flex-wrap justify-center ">
      <v-sheet width="600">
        <v-card class="">
          <v-toolbar dense dark color="brown lighten-2" class="text-h6">
            Profil bearbeiten
          </v-toolbar>
          <v-card-text class="pt-4">
            <v-text-field
              v-model="form.name"
              label="Name"
              color="brown"
              :error-messages="form.errors.name"
              outlined
              dense
            />
            <v-text-field
              v-model="form.email"
              label="Email"
              color="brown"
              :error-messages="form.errors.email"
              outlined
              dense
            />
            <v-text-field
              v-model="form.phone1"
              label="Mobil"
              color="brown"
              :error-messages="form.errors.phone1"
              outlined
              dense
            />
            <v-text-field
              v-model="form.phone2"
              label="Festnetz"
              color="brown"
              :error-messages="form.errors.phone2"
              outlined
              dense
            />
            <v-textarea
              v-model="form.address"
              label="Adresse"
              color="brown"
              :error-messages="form.errors.address"
              outlined
              dense
            />
            <v-spacer/>
            <p class="text-h5">Arbeitstage :</p>
            <div class="d-flex justify-space-between mb-5">
              <v-checkbox
                v-model="form.mon"
                label="Montag"
                :error-messages="form.errors.mon"
                color="brown"
                outlined
                dense
              />
              <v-checkbox
                v-model="form.tue"
                label="Dienstag"
                color="brown"
                outlined
                dense
              />
              <v-checkbox
                v-model="form.wed"
                label="Mittwoch"
                color="brown"
                outlined
                dense
              />
              <v-checkbox
                v-model="form.thu"
                label="Donnerstag"

                color="brown"
                outlined
                dense
              />
              <v-checkbox
                v-model="form.fri"
                label="Freitag"
                color="brown"
                outlined
                dense
              />
            </div>
            <div class="d-flex"></div>
          </v-card-text>
          <v-card-actions>
            <v-btn :disabled="form.processing" text color="error">Abbrechen</v-btn>
            <v-spacer/>
            <v-btn :loading="form.processing" color="dirneder white--text" @click="submit"
            >Speichern
            </v-btn
            >
          </v-card-actions>
        </v-card>
      </v-sheet>
    </div>
  </employer-layout>
</template>

<script>
import EmployerLayout from "../../layouts/EmployerLayout";

export default {
  components: {EmployerLayout},
  props: ["user"],
  data() {
    return {

      breadcrumbs: [
        {
          text: "App",
          disabled: false,
          href: "/home",
        },
        {
          text: "Profil bearbeiten",
          disabled: true,
          href: "/edit",
        },
      ],
      form: this.$inertia.form({
        name: this.$props.user.name,
        email: this.$props.user.email,
        phone1: this.$props.user.phone1,
        phone2: this.$props.user.phone2,
        address: this.$props.user.address,
        mon: this.$props.user.mon,
        tue: this.$props.user.tue,
        wed: this.$props.user.wed,
        thu: this.$props.user.thu,
        fri: this.$props.user.fri,

      })
    }
  },
  methods: {
    submit() {
      this.form.put(route("employer.update", this.$props.user.id), {
        preserveScroll: true,
        onSuccess: () => {
          this.isUpdate = false;
          this.updateData();
          this.form.reset();
        }

      });
    },
    updateData() {
      this.isLoadingTable = true
      this.$inertia.get(route("employer.edit", this.$props.user.id), {
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
