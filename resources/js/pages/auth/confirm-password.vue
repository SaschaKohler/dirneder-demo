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
                <p class="mb-2">Bitte Dein Passwort bestätigen bevor es weitergeht.</p>
              </v-card-text>
              <v-card-text>
                <v-form @submit.prevent="submit">
                  <v-text-field
                    v-model="form.password"
                    prepend-inner-icon="mdi-lock"
                    label="Passwort"
                    outlined
                    dense
                    color="dirnder"
                    :error-messages="form.errors.password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  />
                  <v-btn :loading="form.processing" type="submit" block color="dirneder" class="mt-3"
                    >Change Password</v-btn
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
  components: { ApplicationLogo, GuestLayout },
  data() {
    return {
      showPassword: false,
      isLoading: false,
      form: this.$inertia.form({
        password: null
      }),
    };
  },
  methods: {
    submit() {
      this.form.post(this.route('password.confirm'));
    },
  },
};
</script>
