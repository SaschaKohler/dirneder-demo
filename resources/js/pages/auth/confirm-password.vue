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
              <v-card-title class="d-flex align-center justify-center">
                  <Link :href="route('/')" class="text-decoration-none">
                    <ApplicationLogo></ApplicationLogo>
                  </Link>
                  <h3 class="headline">Mitarbeiter - Kunden - Fahrzeuge - Aufträge</h3>
                </v-card-title>
                <v-card-text class="text-center">Lizensiert für Dirneder KG - Karl Dirneder
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
