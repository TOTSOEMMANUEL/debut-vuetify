<template>
    <nav>

      <!-- il s'agit de l'alert de validation pr le composant 'PoppupView' : debut -->
      <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
        <span>Ajout Reussie avec success.</span>
        <v-btn text color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>
      <!-- il s'agit de l'alert de validation pr le composant 'PoppupView' : fin -->
       <!-- <v-toolbar flat app> -->
        <v-app-bar flat app>
        <v-app-bar-nav-icon class="grey--text" @click="toggleDrawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="text-uppercase grey--text">
              <span class="font-weight-light">Todo</span>
              <span>NINDJA</span>
           </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- dropdown menu1: debut -->
            <v-menu transition="fab-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon left>mdi-chevron-down</v-icon>
        <span>Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router :to="link.route">
          <v-list-item-action>
            <v-icon class="black--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
            <!-- dropdown menu1: fin -->

           <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
       <!-- </v-toolbar> -->

       <v-navigation-drawer app v-model="drawerOpen" class="primary">

           <v-row column align-center>
              <v-col cols="12" class="text-center mt-7">
                 <v-avatar size="100">
                    <img src="https://cdn.pixabay.com/photo/2018/10/20/20/39/taiji-3761691_640.png">
                 </v-avatar>
                 <p class="white--text subheading mt-1">The Ninja NOW</p>
              </v-col>
              
              <!-- integration du composant PoppupView: debut -->
              <v-col class="mt-6 mb-5">
                <PoppupView @projectAdd="snackbar = true"/>
              </v-col>
              <!-- integration du composant PoppupView: debut -->

           </v-row>
           <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text"><!-- mdi-view-dashboard -->{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
       </v-navigation-drawer> 
    </nav>
</template>

<script>

/* import DashboardView from '../views/DashboardView.vue' */
import PoppupView from '@/components/PoppupView.vue'

export default {

    components:{
        PoppupView
    },
    data() {
        return {
            drawerOpen: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-account', text: 'Team', route: '/team' },
            ],
            snackbar:false
        };
    },
    methods: {
        toggleDrawer() {
            this.drawerOpen = !this.drawerOpen;
        }
    }
};
</script>

<style>

</style>