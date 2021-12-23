<template>
  <guest-layout>
    <v-app-bar color="dirneder" :clipped-left="false" fixed dark app>
      <v-toolbar-title v-text="appName" class="d-none d-md-flex" />
      <v-spacer/>
      <Link v-if="$page.props.auth.user" :href="route('home')">
        <v-btn text>Home</v-btn>
      </Link>
      <div v-else>
        <Link :href="route('login')">
          <v-btn text>Login</v-btn>
        </Link>
        <Link :href="route('register')">
          <v-btn text>Registrieren</v-btn>
        </Link>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center" style="height: 100vh">
          <v-col cols="12" sm="12" md="10" lg="4">
            <v-card class="rounded-xl">
              <v-card-title class="justify-center">
                <Link :href="route('/')" class="text-decoration-none">
                  <ApplicationLogo></ApplicationLogo>
                </Link>
                <h3 class="headline">Mitarbeiter - Kunden - Fahrzeuge - Aufträge</h3>
              </v-card-title>
              <v-card-text class="text-center">Lizensiert für Dirneder KG - Karl Dirneder
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
                  <v-btn :loading="form.processing" type="submit" block color="brown lighten-2 brown--text" class="mt-3"
                    >Passwort übernehmen</v-btn
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
