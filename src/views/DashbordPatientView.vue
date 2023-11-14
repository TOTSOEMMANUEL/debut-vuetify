<template>
    <v-app :style="{background: $vuetify.theme.dark.background}">
       <SideBarPatient/>
       <NavbarPatient/>

       <v-container> 
          <v-row wrap>
            <v-col cols="12" sm="9">
                <v-row>
                    <v-col cols="12" sm="12">
                        <ContactPatient/>xx
                    </v-col>
                    <v-col cols="12" sm="12">
                        <AgendaPatient/>sss
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="3">
                <DoctorPatient/>zzz
            </v-col>
          </v-row>
       </v-container>

    </v-app>
</template>

<script>
import SideBarPatient from '@/components/SideBarPatient.vue';
import NavbarPatient from '@/components/NavbarPatient.vue';
import AgendaPatient from '@/components/AgendaPatient.vue';
import ContactPatient from '@/components/ContactPatient.vue';
import DoctorPatient from '@/components/DoctorPatient.vue';
export default{
    components:{
    SideBarPatient,
    NavbarPatient,
    AgendaPatient,
    ContactPatient,
    DoctorPatient
}
}

</script>

<style>

</style>