<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
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
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
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
    </v-col>
  </v-row>
</template>

<!-- <script>
   export default{
     data(){
       return{
        type:"month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0,1,2,3,4,5,6],
    weekdays: [
      {text: "Sun-Sat", value:[0,1,2,3,4,5,6]},
      {text: "Mon-Sun", value:[1,2,3,4,5,6,0]},
      {text: "Mon-Fri", value:[1,2,3,4,5]},
      {text: "Mon,Web,Fri", value:[1,3,5]},
    ],
    value: "",
    events: [],
    colors: ["blue","indigo","deep-purple","cyan","green", "orange", "grey darken-1"],
    names: ["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"],
       }
     },

     methods:{
        getEvents({start, end}){
            const events = [];

            const min= new Date(`${start.date}T00:00:00`);
            const max= new Date(`${end.date}T23:59:59`);
            const days= (max.getTime() - min.getTime()) /86400000;
            const eventCount= this.rnd(days, days + 20);

            for(let i = 0; i < eventCount; i++){
                const allDay= this.rnd(0, 3) === 0;
                const firstTimestamp = this.rnd(min.getTime(), max.getTime());
                const first = new Date
            }
        }
     }
   }
</script> -->

<script>
  export default {
    data: () => ({
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted() {
      this.$refs.calendar.checkChange();
      this.updateRange(); // Appel initial pour générer les événements
    },
    methods: {
      viewDay({ date }) {
        this.focus = date;
        this.type = 'day';
      },
      getEventColor(event) {
        return event.color;
      },
      setToday() {
        this.focus = '';
      },
      prev() {
        this.$refs.calendar.prev();
      },
      next() {
        this.$refs.calendar.next();
      },
      showEvent({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event;
          this.selectedElement = nativeEvent.target;
          requestAnimationFrame(() => requestAnimationFrame(() => (this.selectedOpen = true)));
        };

        if (this.selectedOpen) {
          this.selectedOpen = false;
          requestAnimationFrame(() => requestAnimationFrame(() => open()));
        } else {
          open();
        }

        nativeEvent.stopPropagation();
      },
      updateRange() {
        const events = [
          {
            name: 'Meeting',
            start: new Date('2023-02-01 10:30:45'), // Date et heure de début prédéfinies
            end: new Date('2023-02-01 17:30:45'), // Date et heure de fin prédéfinies
            color: 'blue',
            timed: true,
          },

          {
            name: 'Travel',
            start: new Date('2024-10-1 15:30:45'), // Date et heure de début prédéfinies
            end: new Date('2024-10-1 20:30:45'), // Date et heure de fin prédéfinies
            color: 'indigo',
            timed: true,
          },
          {
            name: 'PTO',
            start: new Date('2023-10-1 10:30:45'), // Date et heure de début prédéfinies
            end: new Date('2023-10-1 12:00'), // Date et heure de fin prédéfinies
            color: 'deep-purple',
            timed: true,
          },
          {
            name: 'Holiday',
            start: new Date('2023-10-1 10:30:45'), // Date et heure de début prédéfinies
            end: new Date('2023-10-1 12:00'), // Date et heure de fin prédéfinies
            color: 'cyan',
            timed: true,
          },
          {
            name: 'Meeting',
            start: new Date(2023, 10, 1, 10, 30, 45), // Date et heure de début prédéfinies
            end: new Date(2023, 10, 1, 12, 0), // Date et heure de fin prédéfinies
            color: 'blue',
            timed: true,
          },
          {
            name: 'Meeting',
            start: new Date(2023, 10, 1, 10, 30, 45), // Date et heure de début prédéfinies
            end: new Date(2023, 10, 1, 12, 0), // Date et heure de fin prédéfinies
            color: 'blue',
            timed: true,
          },
          {
            name: 'Meeting',
            start: new Date(2023, 12-1, 1, 10, 30, 45), // Date et heure de début prédéfinies
            end: new Date(2023, 12-1, 1, 12, 0), // Date et heure de fin prédéfinies
            color: 'blue',
            timed: true,
          },
          // Ajoutez d'autres événements prédéfinis ici
        ];

        this.events = events;
      },
    },
  };
</script>

<style>

</style>