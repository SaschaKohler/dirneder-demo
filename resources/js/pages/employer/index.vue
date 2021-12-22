<template>
  <employer-layout>
    <v-banner class="mb-4">
      <div class="d-flex flex-wrap justify-space-between">
        <h5 class="text-h5 font-weight-bold">Dashboard</h5>
        <v-breadcrumbs :items="breadcrumbs" class="pa-0"></v-breadcrumbs>
      </div>
    </v-banner>
    <div>
      <v-sheet
        tile
        height="54"
        class="d-flex"
      >
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.prev()"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-select
          v-model="type"
          :items="types"
          item-text="name"
          item-value="value"
          dense
          outlined
          color="brown"
          hide-details
          class="ma-2"
          label="Typ"
        ></v-select>
        <v-select
          v-model="weekday"
          :items="weekdays"
          dense
          outlined
          hide-details
          color="brown"
          label="Wochentage"
          class="ma-2"
        ></v-select>
        <v-toolbar-title class="pt-3 pl-3" v-if="$refs.calendar">
          {{ $refs.calendar.title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.next()"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          locale="de"
          :weekdays="weekday"
          :type="type"
          :events="events"
          :event-category="events.type"
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
          :event-color="events.color"
          @click:date="viewDay"
          @click:event="showEvent"
        >
          <template v-slot:event="{ event }">
            <p class="text-caption">{{ event.type }}/{{ event.customer.lastName }}</p>
          </template>
        </v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-toolbar-title v-html="selectedEvent.type"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="selectedEvent.startTimestamp"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">

                  <v-btn icon
                         prepend-icon="mdi-clock-time-four-outline"
                         readonly
                         v-on="on"
                  >
                    <v-icon>mdi-plus-circle-outline</v-icon>
                  </v-btn>
                </template>
                <v-time-picker
                  v-if="modal2"
                  v-model="selectedEvent.startTimestamp"
                  full-width
                  color="brown"
                  header-color="brown"
                  format="24hr"

                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="error"
                    @click="modal2 = false"
                  >
                    Abbrechen
                  </v-btn>
                  <v-btn
                    text
                    color="brown"
                    @click="$refs.dialog.save(selectedEvent.startTimestamp)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-toolbar>
            <v-card-text>
              <p class="text-lg-subtitle-2">{{ selectedEvent.start }}</p>
              <p class="text-h5">
                {{ selectedEvent.customer.firstName }} {{ selectedEvent.customer.lastName }}
              </p>
              <p class="text-caption">
                {{ selectedEvent.customer.street }}
              </p>
              <p class="text-bold">
                {{ selectedEvent.customer.PLZ }} {{ selectedEvent.customer.city }}
              </p>
              <div class="d-flex justify-space-around">
                <ul><span class="text-subtitle-1 text-decoration-underline">Team:</span>
                  <li v-for="employee in selectedEvent.employees" :key="employee.id">
                    {{ employee.name }}
                  </li>
                </ul>
                <ul>
                  <span class="text-subtitle-1 text-decoration-underline">Fahrzeuge:</span>
                  <li v-for="vehicle in selectedEvent.vehicles" :key="vehicle.id">
                    {{ vehicle.branding }}
                  </li>
                </ul>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </div>
  </employer-layout>
</template>

<script>
import EmployerLayout from "../../layouts/EmployerLayout";

export default {
  components: {EmployerLayout},
  props: ["events"],
  data: () => ({
    selectedEvent: {
      id: null,
      start: null,
      customer: {
        firstName: null,
        lastName: null,
        PLZ: null,
        street: null,
        city: null,
      },
      employees: {},
      color: null,
    },

    selectedElement: null,
    selectedOpen: false,
    modal2: false,
    breadcrumbs: [
      {
        text: "App",
        disabled: false,
        href: "/home",
      },
      {
        text: "Dashboard",
        disabled: true,
        href: "/home",
      },
    ],
    value:'',
    type: 'month',
    types: [
      {name: 'Monat', value: 'month'},
      {name: 'Woche', value: 'week'},
      {name: 'Tag', value: 'day'},
      {name: '4 Tage', value: '4day'}
    ],
    mode: 'stack',
    modes: ['stack', 'column'],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      {text: 'So - Sa', value: [0, 1, 2, 3, 4, 5, 6]},
      {text: 'Mo - So', value: [1, 2, 3, 4, 5, 6, 0]},
      {text: 'Mo - Fr', value: [1, 2, 3, 4, 5]},
      {text: 'Mo, Mi, Fr', value: [1, 3, 5]},
    ],
  }),
  methods: {
    viewDay({date}) {
      this.focus = date
      this.type = 'day'
    },
    showEvent({nativeEvent, event}) {
      const open = () => {
        this.selectedEvent.color = event.color
        this.selectedEvent.type = event.type
        this.selectedEvent.employees = event.employees
        this.selectedEvent.vehicles = event.vehicles

        this.selectedEvent.start = event.start
        this.selectedEvent.end = event.end

        this.selectedEvent.startTime = event.startTime

        this.selectedEvent.customer.lastName = event.customer.lastName
        this.selectedEvent.customer.firstName = event.customer.firstName
        this.selectedEvent.customer.street = event.customer.street
        this.selectedEvent.customer.PLZ = event.customer.PLZ
        this.selectedEvent.customer.city = event.customer.city

        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
  }

}
</script>

<style scoped>
.v-breadcrumbs >>> a {
  color: green;
}
</style>
