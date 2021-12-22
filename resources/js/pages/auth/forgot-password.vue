<template>
  <guest-layout>
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center" style="height: 100vh">
          <v-col cols="12" sm="12" md="10" lg="4">
            <v-card class="rounded-xl">
            <v-card-title class="d-flex align-center justify-center">
              <Link :href="route('/')" class="text-decoration-none">
                <p class="font-weight-bold text-center green--text text--darken-2 text-h2">sk.IT</p>
                <p class="brown--text text-center text-subtitle-2">Lizensiert für <span class="text-subtitle-2 ">Dirneder KG (Karl Dirneder)</span></p>

              </Link>
            </v-card-title>
            <v-card-text>
              <p class="font-weight-semibold brown--text mb-2 text-center">
                Mitarbeiter - Kunden - Aufträge - Fahrzeuge
              </p>
            </v-card-text>

            <v-card-text v-if="status">
                <v-alert type="success">{{ status }}</v-alert>
              </v-card-text>
              <v-card-text>
                <p class="mb-2">Du hast Dein Passwort vergessen. Wir senden Dir ein Neues</p>
              </v-card-text>
              <v-card-text>
                <v-form @submit.prevent="submit">
                  <v-text-field
                    v-model="form.email"
                    prepend-inner-icon="mdi-email"
                    label="Email"
                    type="email"
                    outlined
                    dense
                    color="dirneder"
                    :error-messages="form.errors.email"
                  />
                  <v-btn :loading="form.processing" type="submit" block color="dirneder" class="mt-3 white--text"
                    >Neues Passwort anfordern!</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </guest-layout>
</template>

<script>
import ApplicationLogo from "../../components/ApplicationLogo.vue";
import GuestLayout from "../../layouts/GuestLayout";
export default {
  props: {
    status: String,
  },
  components: {GuestLayout, ApplicationLogo },
  data() {
    return {
      showPassword: false,
      isLoading: false,
      form: this.$inertia.form({
        email: null,
      }),
    };
  },
  methods: {
    submit() {
      this.form.post("/forgot-password");
    },
  },
};
</script>
