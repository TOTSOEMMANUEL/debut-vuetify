<template>
    <v-card color="white" class="rounded-lg mt-1" flat>
        <v-row wrap justify="center" class="pt-2 pb-2">
           <v-date-picker v-model="picker" color="#2784ff" width="260"></v-date-picker>
        </v-row>

        <v-toolbar color="transparent" flat class="mt-4">
            <h4 class="black--text">Doctor</h4>
            <v-spacer></v-spacer>
            <v-avatar tile color="#ecf5ff">
                <v-icon color="#2784ff">fas fa-angle-up</v-icon>
            </v-avatar>
        </v-toolbar>

        <v-list class="mt-n6" color="transparent" dense>
           <v-list-item v-for="chat in chats" :key="chat.title">
              <v-list-item-avatar tile>
                 <v-img :src="chat.img"/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="chat.title" class="black--text"></v-list-item-title>
                <v-list-item-subtitle v-text="chat.subtitle" class="grey--text"></v-list-item-subtitle>
              </v-list-item-content>
           </v-list-item>
        </v-list>
    </v-card>
</template>

<script>

   export default{
     data(){
        return{
            chats:[
                {img: "https://cdn.pixabay.com/photo/2016/08/18/11/00/man-1602633_640.png", subtitle: "Therapie", title: "Dr.Pie"},
                {img: "https://cdn.pixabay.com/photo/2018/10/20/20/39/taiji-3761691_640.png", subtitle: "Pediatre", title: "Dr.Kech"},
                {img: "https://cdn.pixabay.com/photo/2016/09/12/13/21/karate-1664258_640.png", subtitle: "Chirugien", title: "Dr.House"},
            ],
            picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10), 
        }
     }
   }
</script>

<style>

</style>