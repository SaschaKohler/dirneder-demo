<template>
  <v-app style="background-color: #f5f5f5">
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      clipped
      v-model="drawer"
      fixed
      app
    >
      <v-list nav>
        <v-list-item-group :value="indexMenu" color="brown lighten-2">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            v-if="!item.sublinks"
            @click="goToPage(item.to)"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"/>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
            v-else
            no-action
            color="brown lighten-2"
          >
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"/>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(item, i) in item.sublinks"
              :key="i"
              @click="goToPage(item.to)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.title"/>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>


          <v-list-item @click="logout">
            <v-list-item-action>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="brown lighten-2" clipped-left fixed dark app>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      />
      <v-app-bar-nav-icon v-else @click.stop="miniVariant = !miniVariant"/>
      <v-toolbar-title v-text="appName" class="d-none d-md-flex"/>
      <v-spacer/>


      <div class="d-flex align-center">
        <div class="px-5">
          <v-menu max-height="500px" class="rounded-xl">
            <template v-slot:activator="{ on }">

              <v-badge
                color="error"
                overlap
                :content="notifications.length"
                :value="notifications.length"
              >
                <v-icon
                  v-on="on">
                  mdi-bell
                </v-icon>
              </v-badge>
            </template>

            <v-list five-line max-width="300px" class="pb-0">
              <template v-for="(item) in notifications">
                <v-subheader
                  v-text="item.data['subject']"></v-subheader>
                  <v-divider></v-divider>
                <v-list-item
                >
                  <v-list-item-content d-flex>
                    <v-list-item-title class="font-weight-bold">{{ item.data['customer'] }} / {{ item.data['type'] }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ item.data['address'] }}</v-list-item-subtitle>

                    <v-list-item-subtitle>neuer Termin: <span class="red--text text-bold">{{
                        item.data['newEvent']
                      }}</span></v-list-item-subtitle>
                    <v-list-item-subtitle>Intervall: <span class="primary--text text-bold">{{
                        item.data['recurrence']
                      }}</span></v-list-item-subtitle>

                    <v-list-item-action>
                      <v-btn
                        x-small
                        @click="markAsRead(item)"
                        color="green white--text text-caption">
                        gelesen
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item-content>

                </v-list-item>
                <v-divider/>
              </template>
              <v-footer class="d-flex justify-center font-weight-bold" v-if="notifications.length">
                <v-btn
                  text-caption
                  x-small
                  @click="putToPage('notification.markAllAsRead')">Alle gelesen
                </v-btn>
              </v-footer>
            </v-list>
          </v-menu>
        </div>
        <v-icon dark>mdi-account</v-icon>
        <div class="pl-3">
          <Link :href="route('employer.edit', {id: user.id})"
                class="text-decoration-underline white--text text">

            <span class="body-1 font-weight-medium">{{ user.name }}</span>
          </Link>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: ["notifications"],
  data() {
    return {
      drawer: !this.$vuetify.breakpoint.smAndDown,
      items: [
        {icon: "mdi-apps", title: "Start", to: "employer.index"},
        {icon: "mdi-run", title: "Meine Aufträge", to: "employer.events"}

      ],
      miniVariant: false,
      form: this.$inertia.form({
        id: null,
      }),
    };
  },
  computed: {
    appName() {
      return this.$page.props.appName;
    },
    user() {
      return this.$page.props.auth.user;
    },
    indexMenu() {
      const inertiaUrl = this.$inertia.page.url.split("?")[0];
      console.log(inertiaUrl)
      const index = this.items.findIndex((item) => {
        const windowUrl = this.route(item.to);
        return windowUrl.includes(inertiaUrl);
      });
      return index;
    },
  },
  watch: {
    $page: {
      handler() {
        const message = this.$page.props.flash.message;
        if (message != null) {
          switch (message.type) {
            case "success":
              this.$toast.success(message.text);
              break;
            case "error":
              this.$toast.error(message.text);
              break;
          }
        }
      },
    },
  },
  methods: {
    logout() {
      this.$inertia.post("/logout");
    },
    goToPage(page) {
      this.$inertia.visit(this.route(page));
    },
    putToPage(page) {
      this.$inertia.put(this.route(page));
    },
    markAsRead(item) {
      this.form.id = item.id

      this.form.put(route('notification.markAsRead'), {
        preserveScroll: true,
        onSuccess: () => {
          this.form.reset();
        },
      });
    },
  }
};


</script>
