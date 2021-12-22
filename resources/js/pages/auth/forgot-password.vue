<template>
  <guest-layout>
    <v-app-bar color="dirneder" :clipped-left="false" fixed dark app>
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
            <v-card class="rounded-xl">
              <v-card-title class="justify-center">
                <Link :href="route('/')" class="text-decoration-none">
                  <ApplicationLogo></ApplicationLogo>
                </Link>
                <h3 class="headline">Mitarbeiter - Kunden - Fahrzeuge - Aufträge</h3>
              </v-card-title>
              <v-card-text class="text-center">Lizensiert für Dirneder KG - Karl Dirneder
              </v-card-text>
            <v-card-text v-if="status">
                <v-alert type="success">{{ status }}</v-alert>
              </v-card-text>
              <v-card-text>
                <p class="mb-2">Zur Einrichtung Deines neuen Passwortes bitte Deine Mail angeben.</p>
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
                  <v-btn :loading="form.processing" type="submit" block color="brown lighten-4 brown--text" class="mt-3 white--text"
                    >Neues Passwort anfordern!</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-card>
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
  computed: {
    appName() {
      return this.$page.props.appName
    },
  },
};
</script>
