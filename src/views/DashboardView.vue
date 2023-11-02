<template>
  <!-- <hello-world /> -->
  <div class="dashboard">
      <h1 class="subheading grey--text">Dashboard</h1>

      <v-container class="my-10">
            <!-- <v-row wrap>
              <v-col cols="12" md="6">
                <v-btn outlined block class="primary">1</v-btn>
              </v-col>
              <v-col cols="4" md="2">
                  <v-btn outlined block class="primary">2</v-btn>
              </v-col>
              <v-col cols="4" md="2">
                    <v-btn outlined block class="primary">2</v-btn>
                </v-col>
              <v-col cols="4" md="2">
                    <v-btn outlined block class="primary">2</v-btn>
                </v-col>
            </v-row>    -->

             <v-row class="mb-6">
              <v-tooltip top color="success">
                <template v-slot:activator="{ on, attrs }">
                 <v-btn small text color="grey" @click="sortBy('title')" dark v-bind="attrs" v-on="on">
                   <v-icon left small>mdi-folder</v-icon>
                   <span class="caption text-lowercase">By project Name</span>
                 </v-btn>
                </template>
                 <span>Sort Projects Name</span>
              </v-tooltip>

              <v-tooltip bottom color="warning">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn small text color="grey" @click="sortBy('person')" dark v-bind="attrs" v-on="on">
                        <v-icon left small>mdi-account</v-icon>
                        <span class="caption text-lowercase">By person</span>
                    </v-btn>
                  </template>
                  <span>Sort Projects Name</span>
              </v-tooltip>
             </v-row>

            <v-card text v-for="project in projects" :key="project.title">
               <v-row wrap :class="`pa-3 project ${project.Status}`">
                <v-col cols="12" md="6">
                  <div class="caption grey--text">Project Title</div>
                  <div>{{ project.title }}</div>
                </v-col>
                <v-col cols="6" sm="4" md="2">
                  <div class="caption grey--text">Person</div>
                  <div>{{ project.person }}</div>
                </v-col>
                <v-col cols="6" sm="4" md="2">
                    <div class="caption grey--text">Due By</div>
                    <div>{{ project.due }}</div>
                </v-col>
                <v-col cols="2" sm="4" md="2">
                    <!-- <div class="caption grey--text">Status</div>
                    <div>{{ project.Status }}</div> -->
                    <div class="px-5">
                        <v-chip small :class="`project ${project.Status} white--text caption my-2`">{{ project.Status }}</v-chip>
                    </div>
                    
                </v-col>
               </v-row>
               <!-- <v-divider></v-divider> -->
            </v-card>

            
      </v-container>

      <!-- <v-btn class="hidden-md-and-down">Click Me</v-btn> -->
      <!-- <v-btn class="hidden-md-and-up">cccc</v-btn> -->
      <!-- <v-btn class="hidden-sm-only">Click Me</v-btn> -->

      <!-- <v-btn class="pink white--text">Click Me</v-btn>&nbsp;
      <v-btn depressed color="pink">Click </v-btn>&nbsp;
      <v-btn text color="green">Click1</v-btn>&nbsp;

      <v-btn depressed class="pink white--text">
        <v-icon left size="15">mdi-email</v-icon>
        <span>Email Me</span>
      </v-btn><br><br>

      <v-btn depressed small class="pink white--text">
          <v-icon left small size="15">mdi-email</v-icon>
          <span>Email Me</span>
      </v-btn><br><br>

      <v-btn depressed large class="pink white--text">
            <span>Email Me</span>
            <v-icon right large size="15">mdi-email</v-icon>
      </v-btn><br><br>

      <v-btn fab depressed small dark color="purple">
              <v-icon>mdi-heart</v-icon>
      </v-btn><br><br> -->

      <!-- <p class="red white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio consequuntur expedita omnis, minus atque cupiditate, optio ad cumque cum dignissimos molestiae deserunt similique harum nihil porro laudantium perspiciatis numquam? </p><br>
      <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos, vitae rerum saepe quas fugiat iste facere voluptas autem natus, perferendis nam aliquid quibusdam debitis minus reiciendis provident cupiditate deleniti!</p><br>
      <h1 class="display-4">Massive Display</h1>
      <h4 class="display-1">Small Display</h4>
      <p class="headline">This Is a HeadLine</p>
      <p class="overline"> Disponible</p> -->
  </div>
</template>

<script>
 /*  import HelloWorld from '../components/HelloWorld' */

  export default {
    name: 'HomeView',

    components: {
      /* HelloWorld, */
    },

    data() {
      return {
        projects: [
          { title: 'Design a new website', person: 'The net Ninja', due: '1st jan 2023', Status: 'Ongoing', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nisi eum blanditiis, a ea aut soluta assumenda exercitationem esse consequuntur fugiat. Perspiciatis, nobis. Minima animi dolores dolor consequuntur sunt!' },
          { title: 'Give me the ecommerce', person: 'This is chinois', due: '5st febry 2023', Status: 'complete', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita iusto repudiandae magni iure atque nobis quisquam dolor iste molestias tempora, aliquam voluptatem aspernatur deleniti consectetur cum nemo! Nemo, accusantium.' },
          { title: 'Look at the same', person: 'My good father', due: '8st decemb 2023', Status: 'Ongoing', Content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vitae molestias esse saepe vel deleniti, excepturi, quod doloremque, aliquid eligendi fugiat odit voluptates ipsum deserunt debitis tempora libero voluptatibus iure?' },
          { title: 'Give my as new', person: 'The net Ninja', due: '1st jan 2023', Status: 'Onoverdue', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam repudiandae quae eligendi illum, magni error eveniet facere possimus iusto dolores repellendus? Incidunt dolore reprehenderit dolores corporis, quasi veritatis dolorum!' },
          { title: 'My name is ui', person: 'The net Ninja', due: '1st jan 2023', Status: 'complete', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam repudiandae quae eligendi illum, magni error eveniet facere possimus iusto dolores repellendus? Incidunt dolore reprehenderit dolores corporis, quasi veritatis dolorum!' },
        ]
      }
  },
  methods: {
    sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    }
  }
</script>

<style>

    .project.complete{
      border-left: 10px solid #3cd1c2;
    }
    .project.Ongoing{
      border-left: 10px solid orange;
    }
    .project.Onoverdue{
      border-left: 10px solid tomato; 
    }
    .v-chip.project.complete{
       background: #3cd1c2;
    }
    .v-chip.project.Ongoing{  
      background: #ffaa2c;
    }
    .v-chip.project.Onoverdue{
      background: tomato; 
    }
  
</style>