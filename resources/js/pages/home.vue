<template>
  <admin-layout>
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
        <v-toolbar-title v-if="$refs.calendar">
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
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
          :event-color="events.color"
          @click:date="viewDay">
          <template v-slot:event="{ event }">
            <div class="">
            <p class="text-bold text-caption text-center">{{ event.name }}</p>
            <p class="text-caption">{{event.start}} {{ event.type }}</p>
            <p>Kunde: {{event.customer.firstName}} {{event.customer.lastName}}</p>
            <p>Telefon: {{event.customer.phone1}}</p>
            <p>{{event.customer.PLZ}} {{event.customer.city}} {{event.customer.street}}</p>
            </div>
        </template>
        </v-calendar>
      </v-sheet>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from "../layouts/AdminLayout.vue";

export default {
  components: {AdminLayout},
  props: ["events"],
  data: () => ({
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
    value: ''
  }),
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
  }

}
</script>
