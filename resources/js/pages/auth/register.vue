<template>
  <guest-layout>
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center" style="height: 100vh">
          <v-col cols="12" sm="12" md="10" lg="4">
            <v-card class="rounded-xl">
              <v-card-title class="d-flex align-center justify-center">
                <Link :href="route('/')" class="text-decoration-none">
                  <p class="font-weight-bold text-center green--text text--darken-2 text-h2">Dirneder</p>
                  <p class="brown--text text-center text-h6">Ihr Profi für Garten und Zäune</p>

                </Link>
              </v-card-title>
              <v-card-text>
                <p class="mb-2 brown--text">Registrieren für die Managment App</p>
              </v-card-text>
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field
                    v-model="form.name"
                    prepend-inner-icon="mdi-account"
                    label="Name"
                    color="green darken-3"
                    outlined
                    dense
                    type="text"
                    :error-messages="form.errors.name"
                  />
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
                    label="Password"
                    color="green darken-3"
                    outlined
                    dense
                    :error-messages="form.errors.password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  />
                  <v-text-field
                    v-model="form.password_confirmation"
                    prepend-inner-icon="mdi-lock"
                    label="Password Confirmation"
                    color="green darken-3"
                    :error-messages="form.errors.password_confirmation"
                    outlined
                    dense
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  />
                  <v-btn :loading="form.processing" type="submit" block color="brown lighten-4 brown--text" class="mt-3"
                    >Register</v-btn
                  >
                </v-form>
              </v-card-text>
              <v-card-text
                class="d-flex align-center justify-center flex-wrap mt-2"
              >
                <span class="me-2"> Bereits registriert ? </span>
                <Link :href="route('login')" class="brown--text"> Zum Login </Link>
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
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      }),
    };
  },
  methods: {
    register() {
      this.form.post("/register");
    },
  },
};
</script>
