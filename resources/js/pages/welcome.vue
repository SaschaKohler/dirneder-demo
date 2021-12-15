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
        <v-card>
          <v-card-title class="text-center" >Mitarbeiter - Kunden - Fahrzeuge - Aufträge</v-card-title>
        </v-card>
      </v-container>
    </v-main>
  </guest-layout>
</template>

<script>
import ApplicationLogo from '../components/ApplicationLogo.vue'
import GuestLayout from '../layouts/GuestLayout.vue'
export default {
  components: { GuestLayout },
  computed: {
    appName() {
      return this.$page.props.appName
    },
  },
}
</script>
