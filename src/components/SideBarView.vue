<template>
    <nav>
        <v-navigation-drawer app dark color="black">
           <div class="text-center mt-5">
               <h1 class="white--text text-log-h4 font-weight-bold">ADEBAYOR</h1>
               <v-avatar class="my-5">
                <v-img src="https://cdn.pixabay.com/photo/2016/08/18/11/00/man-1602633_640.png"></v-img>
               </v-avatar>
               <h1 class="white-text">Seinor</h1>
               <h5 text-grey> Product Designer</h5>
           </div>

           <divider class="mx-10 mt-3"></divider>

           <v-list flat dense class="mt-5">
              <v-list-item-group v-model="selectItem" color="teal">
                 <v-list-item v-for="(item, i) in items" :key="i" active-class="border" router :to="item.route">
                    <v-list-item-icon class="ml-6">
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                 </v-list-item>
              </v-list-item-group>
           </v-list>

           <div style="position: absolute; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;">
               <v-card class="mx-4 rounded-xl mb-1" color="gradient" dark>
                <v-card-title>
                    <v-icon left>fas fa-history</v-icon>
                    <v-spacer></v-spacer>
                    <v-icon left>fas fa-ellipsis-v</v-icon>
                </v-card-title>
                <v-card-text class="text-h6 font-weight-bold">History Available</v-card-text>
                <v-card-text class="text-h6 mt-n8">
                    Check Your Weekly Transaction Reports
                </v-card-text>
               </v-card>
           </div>
        </v-navigation-drawer>

        <v-app-bar app dark color="black">
            
            <v-text-field label="Search..." append-icon="mdi-magnify" filled rounded dense class="mt-6"></v-text-field>
            <v-spacer></v-spacer>
            <v-btn fab dark small>
               <v-icon dark>fas fa-bell</v-icon>
            </v-btn>
            <v-btn fab dark small class="ml-2">
               <v-icon dark>fas fa-comment-dots</v-icon>
            </v-btn>
            <v-btn fab dark small class="ml-2">
               <v-icon dark>fas fa-box</v-icon>
            </v-btn>
            <v-btn fab dark small class="ml-2">
               <v-icon dark>fas fa-cog</v-icon>
            </v-btn>
        </v-app-bar>

    </nav>
</template>

<script>
    export default{
        data() {
          return{
            drawerOpen: true,
            selectItem: 0,
            items: [
                {icon: 'fas fa-tachometer-alt', text: 'Dashbord'},
                {icon: 'fas fa-wallet', text: 'My Destine'},
                {icon: 'fas fa-credit-card', text: 'Transactions'},
                {icon: 'fas fa-dollar-sign', text: 'Money'},
                {icon: 'fas fa-exchange-alt', text: 'Exchange'},
                {icon: 'fas fa-cog', text: 'DashBord-Agenda', route: '/DashbordPatient'},
            ]
          }
        },
    }
</script>

<style scoped>
     .border{
        border-left: 4px solid teal;
     }
     .gradient{
        background: rgb(27, 31, 29);
        background: linear-gradient(90deg, rgba(27, 31, 28, 1) 0%, rgba(9,121,11,1) 35%, rgba(5, 83, 45, 1) 100%);
     }
</style>