<template>
    <div class="team">
        <h1 class="subheading grey--text">team</h1>

        <!-- <v-container fluid class="my-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores, pariatur dignissimos natus a quos labore ipsum neque blanditiis voluptates ex debitis accusantium ducimus adipisci beatae, similique delectus quidem dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fugiat eligendi voluptate accusamus vitae quos porro, deleniti voluptatum nobis aperiam, adipisci explicabo ipsa perspiciatis laboriosam quasi at ipsam hic.</p>
        </v-container> -->

        <v-container class="my-5">
             <v-row wrap>
                <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                    <v-card text class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="person.avatar">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon small left>mdi-message-text</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
             </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'The Ninja TYUIO', role: 'web devellopper', avatar: 'https://cdn.pixabay.com/photo/2016/08/18/11/00/man-1602633_640.png' },
                { name: 'My francssi nganou', role: 'box america rox', avatar: 'https://cdn.pixabay.com/photo/2016/09/12/13/21/karate-1664258_640.png' },
                { name: 'tyson fury mivhe', role: 'devellopper personelle', avatar: 'https://cdn.pixabay.com/photo/2018/03/03/22/18/sumoringer-3196755_640.png' },
                { name: 'Tyit rambot nr', role: 'web this froigd', avatar: 'https://cdn.pixabay.com/photo/2014/04/03/11/53/karate-312473_640.png' },
                { name: 'The Nrfff gO', role: 'wepper the king', avatar: 'https://cdn.pixabay.com/photo/2018/10/20/20/39/taiji-3761691_640.png' },
            ]
        }
    },
}
</script>

<style>

</style>