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
        <v-row align="center" justify="center" style="height: 90vh">
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
                <v-form @submit.prevent="login">
                  <v-text-field
                    v-model="form.email"
                    prepend-inner-icon="mdi-email"
                    label="Email"
                    type="email"
                    color="green darken-3"
                    outlined
                    dense
                    :error-messages="form.errors.email"
                  />
                  <v-text-field
                    v-model="form.password"
                    prepend-inner-icon="mdi-lock"
                    label="Passwort"
                    color="green darken-3"
                    outlined
                    dense
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    :error-messages="form.errors.password"
                    @click:append="showPassword = !showPassword"
                  />
                  <div
                    class="d-flex align-center justify-space-between flex-wrap"
                  >
                    <v-checkbox
                      v-model="form.remember_me"
                      label="Merken"
                      color="brown"
                    />
                    <Link :href="route('password.request')" class="brown--text">
                      Passwort vergessen?
                    </Link>
                  </div>
                  <v-btn :loading="form.processing" type="submit" block color="brown lighten-4 brown--text text--darken-4" class="mt-3"
                    >Login</v-btn>
                </v-form>
              </v-card-text>
              <v-card-text
                class="d-flex align-center justify-center flex-wrap mt-2"
              >
                <span class="me-2"> Neu hier ? </span>
                <Link :href="route('register')" class="brown--text"> Account anlegen </Link>
              </v-card-text>
              <v-card-text class="text-right"><span class="text-caption">Sascha Kohler </span>Software-Individual-Lösungen 2021</v-card-text>
            </v-card>
        </v-row>
      </v-container>
    </v-main>
  </guest-layout>
</template>

<script>
import ApplicationLogo from "../../components/ApplicationLogo.vue";
import GuestLayout from "../../layouts/GuestLayout.vue"

export default {
  components: { ApplicationLogo, GuestLayout },
  data() {
    return {
      showPassword: false,
      isLoading: false,
      form: this.$inertia.form({
        email: null,
        password: null,
        remember_me: false,
      }),
    };
  },
  methods: {
    login() {
      this.form.post("/login");
    },
  },
  computed: {
    appName() {
      return this.$page.props.appName
    },
  },
};
</script>
