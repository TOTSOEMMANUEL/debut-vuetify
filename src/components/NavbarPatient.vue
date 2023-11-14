<template>
   <v-app-bar color="white" app dark flat>
    <v-icon color="black">fas fa-long-arrow-alt-left</v-icon>
    <h4 class="black--text ml-3">Patient Card</h4>
    <v-spacer></v-spacer>
    <h4 class="blue--text text--lighten-2">Appointments History</h4>
    <v-icon x-small color="#2784ff" class="ml-2 mr-2">fas fa-caret-down</v-icon>
    <v-btn color="#2784ff" class="withoutupercase">
        <v-icon left>fas fa-plus</v-icon>New Patient
    </v-btn>

    <v-badge dot overlap color="green" class="ml-3 mr-2" dark>
        <v-avatar tile color="#e5f1ff">
            <v-icon color="#2784ff">fas fa-bell</v-icon>
        </v-avatar>
    </v-badge>

    <v-avatar tile color="#e5f1ff">
        <v-img src="https://cdn.pixabay.com/photo/2018/03/03/22/18/sumoringer-3196755_640.png"></v-img>
    </v-avatar>
   </v-app-bar>
</template>

<script>
   export default{

   }
</script>

<style>
  .v-btn.withoutupercase{
    text-transform: none !important;
  }
</style>