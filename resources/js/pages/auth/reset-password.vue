<template>
  <guest-layout>
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center" style="height: 100vh">
          <v-col cols="12" sm="12" md="10" lg="4">
            <v-card>
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

              <v-card-text>
                <p class="mb-2">Nur noch einen Schritt bis zum neuen Passwort</p>
              </v-card-text>
              <v-card-text>
                <v-form @submit.prevent="submit">
                  <v-text-field
                    v-model="form.password"
                    prepend-inner-icon="mdi-lock"
                    label="Neues Passwort"
                    outlined
                    dense
                    color="dirneder"
                    :error-messages="form.errors.password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  />
                  <v-text-field
                    v-model="form.password_confirmation"
                    prepend-inner-icon="mdi-lock"
                    label="Passwort bestätigen"
                    :error-messages="form.errors.password_confirmation"
                    outlined
                    dense
                    color="dirneder"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  />
                  <v-btn :loading="form.processing" type="submit" block color="brown lighten-2" class="mt-3"
                    >Passwort ändern</v-btn
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
import GuestLayout from '../../layouts/GuestLayout.vue';
export default {
  props: {
    email: String,
    token: String,
  },
  components: { ApplicationLogo, GuestLayout },
  data() {
    return {
      showPassword: false,
      isLoading: false,
      form: this.$inertia.form({
        password: null,
        password_confirmation: null,
        email: this.email,
        token: this.token
      }),
    };
  },
  methods: {
    submit() {
      this.form.post("/reset-password");
    },
  },
};
</script>
