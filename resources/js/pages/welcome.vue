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
      <v-container fluid>
        <v-card class="text-center rounded-xl">
          <ApplicationLogo></ApplicationLogo>
          <v-card-title class="justify-center">
            <h3 class="headline">Mitarbeiter - Kunden - Fahrzeuge - Aufträge</h3>
          </v-card-title>
          <v-card-text><p>Lizensiert für Dirneder KG - Karl Dirneder</p></v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </guest-layout>
</template>

<script>
import ApplicationLogo from '../components/ApplicationLogo.vue'
import GuestLayout from '../layouts/GuestLayout.vue'
export default {
  components: {ApplicationLogo, GuestLayout },
  computed: {
    appName() {
      return this.$page.props.appName
    },
  },
}
</script>
