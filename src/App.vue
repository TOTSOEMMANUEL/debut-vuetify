<template>
  <v-app class="grey lighten-4">
    <NavbarView/>

    <v-main class="mx-4 mb-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavbarView from './components/NavbarView.vue'

export default {
  name: 'App',
  components: {
    NavbarView
  },

  data: () => ({
    //
  }),
};
</script>
