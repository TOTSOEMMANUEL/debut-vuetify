<template>
    <!-- <v-row justify="center"> -->
      <!-- <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mt-5">
            Dashbord Admin1
          </v-btn>
        </template> -->
        <v-card>
          <!-- <v-toolbar dark color="dark">
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>     
          </v-toolbar> -->

          <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
            <SideBarView/>

            <v-container fluid class="my-n13">
               <v-row wrap>
                 <v-col cols="12" sm="12">
                   <v-card class="mx-auto rounded-xl" height="auto" width="auto" elevation-2 color="grey darken-4">
                    <v-row>

                       <v-col cols="12" sm="12">
                         <v-toolbar flat color="rgba(0,0,0,0)" dark>
                           <v-toolbar-title>Dashbord</v-toolbar-title>
                           <v-spacer></v-spacer>
                           <v-btn outlined>
                            Filters
                            <v-icon right class="ml-2">fas fa-sliders-h</v-icon> 
                           </v-btn>
                         </v-toolbar>
                       </v-col>

                       <v-col cols="12" sm="4">
                         <v-card class="cardOr mx-2 rounded-xl mt-n7" elevation="16">
                          <v-row>
                            <v-col cols="12" sm="8">
                              <v-list-item three-line>
                                <v-list-item-content>
                                  <div class="mb-4">
                                    <v-btn tile fab color="orange"  elevation="0">
                                      <v-icon color="">fab fa-btc</v-icon>
                                    </v-btn>
                                  </div>
                                  <v-list-item-title class="headline mb-1 white--text">1500F</v-list-item-title>
                                  <v-list-item-subtitle class="white--text">55% this week</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                            </v-col>
                            <v-col cols="12" sm="4">
                              <v-avatar size="100" class="ml-n10 mt-6" tile>
                                <v-img src="https://cdn.pixabay.com/photo/2018/10/20/20/39/taiji-3761691_640.png"></v-img>
                              </v-avatar>
                            </v-col>
                          </v-row>
                         </v-card>
                       </v-col>

                       <v-col cols="12" sm="4">
                        <v-card class="cardVr mx-2 rounded-xl mt-n7" elevation="16">
                          <v-row>
                            <v-col cols="12" sm="8">
                              <v-list-item three-line>
                                <v-list-item-content>
                                  <div class="mb-4">
                                    <v-btn tile fab color="teal"  elevation="0">
                                      <v-icon color="">fab fa-ethereum</v-icon>
                                    </v-btn>
                                  </div>
                                  <v-list-item-title class="headline mb-1 white--text">188.34F</v-list-item-title>
                                  <v-list-item-subtitle class="white--text">25% this week</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                            </v-col>
                            <v-col cols="12" sm="4">
                              <v-avatar size="100" class="ml-n10 mt-6" tile>
                                <v-img src="https://cdn.pixabay.com/photo/2018/10/20/20/39/taiji-3761691_640.png"></v-img>
                              </v-avatar>
                            </v-col>
                          </v-row>
                         </v-card>
                       </v-col>

                       <v-col cols="12" sm="4">
                        <v-card class="cardR mx-2 rounded-xl mt-n7" elevation="16">
                          <v-row>
                            <v-col cols="12" sm="8">
                              <v-list-item three-line>
                                <v-list-item-content>
                                  <div class="mb-4">
                                    <v-btn tile fab color="#6e0b14"  elevation="0">
                                      <v-icon color="">fab fa-lira-sign-out</v-icon>
                                    </v-btn>
                                  </div>
                                  <v-list-item-title class="headline mb-1 white--text">8887.34F</v-list-item-title>
                                  <v-list-item-subtitle class="white--text">11% this week</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                            </v-col>
                            <v-col cols="12" sm="4">
                              <v-avatar size="100" class="ml-n10 mt-6" tile>
                                <v-img src="https://cdn.pixabay.com/photo/2018/10/20/20/39/taiji-3761691_640.png"></v-img>
                              </v-avatar>
                            </v-col>
                          </v-row>
                         </v-card>
                       </v-col>

                       <v-col cols="12" sm="8">
                            <v-toolbar flat color="rgba(0,0,0,0)" dark>
                              <v-toolbar-title>Market OverView</v-toolbar-title>
                              <v-spacer></v-spacer>
                              <v-btn outlined>Weekly (2023)
                                <v-icon right class="mr-2">fas fa-chevron-down</v-icon>
                              </v-btn>
                            </v-toolbar>

                            <v-sparkline :value="value" :smooth="radius || false" :padding="padding" line-width="width" :stroke-linecap="lineCap" :fill="fill" :type="type" :auto-line-width="autoLineWidth" auto-draw color="green">
                              
                            </v-sparkline>

                            <v-divider color="white" class="mx-4"></v-divider>

                            <v-toolbar flat color="rgba(0,0,0,0)" dark>
                              <v-toolbar-title >
                                Recents Activities
                              </v-toolbar-title>
                            </v-toolbar>

                            <v-row>
                              <v-col cols="12" sm="2">
                                <v-btn fab class="ml-5 mt-n2" color="grey lighten-1" small>
                                  <v-icon>fas fa-long-arrow-alt-up</v-icon>
                                </v-btn>
                              </v-col>

                              <v-col cols="12" sm="2"><span class="white--text">Bitcoin</span></v-col>
                              <v-col cols="12" sm="2"><span class="white--text">10:12:22 AM</span></v-col>
                              <v-col cols="12" sm="2"><span class="white--text">+1452.34</span></v-col>
                              <v-col cols="12" sm="2"><span class="white--text">Completed</span></v-col>

                            </v-row>
                       </v-col>

                       <v-col cols="12" sm="4">
                            <v-card class="mx-2 rounded-xl" elevation="8" color="teal">
                              <v-toolbar flat color="rgba(0,0,0,0)" dark>
                                <v-toolbar-title>Sell Order</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-icon class="mr-2" small>fas fa-ellipsis-v</v-icon>
                              </v-toolbar>
                              <v-simple-table class="teal" dark>
                                <template v-slot:default>
                                  <thead>
                                    <tr>
                                      <th class="text-left">Price</th>
                                      <th class="text-left">Account</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="item in orders" :key="item.name">
                                      <td>{{ item.price }}</td>
                                      <td>{{ item.amount }}</td>
                                    </tr>
                                  </tbody>
                                </template>
                              </v-simple-table>
                            </v-card>
                       </v-col>

                    </v-row>
                   </v-card>
                 </v-col>
               </v-row>
            </v-container>

          </v-app>
          

        </v-card>
      <!-- </v-dialog> -->
    <!-- </v-row> -->
  </template>

<script>

import SideBarView from '../components/SideBarView.vue';

  export default {

    components:{
        SideBarView
    },

    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        value: [0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],
        fill: false,
        type: 'trend',
        autoLineWidth: false,
        orders: [
          {
            price:89.03,
            amount:0.15,
          },
          {
            price:94.03,
            amount:0.18,
          },
          {
            price:92.03,
            amount:0.22,
          },
          {
            price:94.03,
            amount:0.18,
          },
          {
            price:33.03,
            amount:0.19,
          },
        ]
      }
    },
  }
</script>


<style scoped>
    .cardOr{
       background: rgb(1, 1, 1);
       background: linear-gradient(90deg, rgba(1,1,1,1) 0%, rgba(34,34,29,1) 70%, rgba(135,115,12,1) 100%);
    }
    .cardVr{
      background: rgb(1, 1, 1);
      background: linear-gradient(90deg, rgba(1,1,1,1) 0%, rgba(29,34,30,1) 70%, rgba(19,158,112,1) 100%);
    }
    .cardR{
      background: rgb(1, 1, 1);
      background: linear-gradient(90deg, rgba(1,1,1,1) 0%, rgba(72,36,36,1) 70%, rgba(158,19,19,1) 100%);
    }
</style>