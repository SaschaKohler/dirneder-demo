<template>
  <guest-layout>
    <v-app-bar color="dirneder" :clipped-left="false" fixed dark app>
      <v-toolbar-title v-text="appName" />
      <v-spacer />
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
      <v-container>
        <v-card class="rounded-xl">
          <v-card-title class="d-flex align-center justify-center">
            <Link :href="route('/')" class="text-decoration-none">
              <p class="font-weight-bold text-center green--text text--darken-2 text-h2">Dirneder</p>
              <p class="brown--text text-center text-h6">Ihr Profi für Garten und Zäune</p>

            </Link>
          </v-card-title>
          <v-card-text>
            <p class="font-weight-semibold brown--text mb-2 text-center">
              Mitarbeiter - Kunden - Aufträge
            </p>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </guest-layout>
</template>

<script>
import ApplicationLogo from '../components/ApplicationLogo.vue'
import GuestLayout from '../layouts/GuestLayout.vue'
export default {
  components: { ApplicationLogo, GuestLayout },
  computed: {
    appName() {
      return this.$page.props.appName
    },
  },
}
</script>
