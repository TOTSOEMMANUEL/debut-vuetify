<template>
    <!-- <v-dialog max-width="600px">
        <v-btn text v-slot="activator" class="success">Add New Project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
        </v-card>
    </v-dialog> -->

    <v-row justify="center">
        <v-dialog max-width="600px" v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
                 <v-btn color="success" v-bind="attrs" v-on="on">Add New Project</v-btn>
            </template>
            <v-card>
            <v-card-title class="text-h2">
                Add a New Project
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

                    <v-menu min-width="auto">
                        <template v-slot:activator="{on, attrs}">
                            <v-text-field :rules="inputRules" :value="due" label="Due Time" prepend-icon="mdi-calendar-range"  v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Submit</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

    export default{
        data(){
            return{
                title:'',
                 content:'',
                 due:'',
                 inputRules:[
                    v => v.length >= 3 || 'Minimun Length is 3 characters' 
                 ],
                 loading: false,
                 dialog: false,
            }
        },
        methods:{
            submit(){
                if (this.$refs.form.validate()) {
                    this.loading = true;
                    console.log(this.title, this.content, this.due);
                    /* this.loading = false; */
                    this.dialog=false;
                    /* pr relier le 'snackbar' au 'PoppupView' afin que le 'snackbar s'affiche apres la soumission du 'PoppupView' : debut */
                    this.$emit('projectAdd');
                    /* pr relier le 'snackbar' au 'PoppupView' afin que le 'snackbar s'affiche apres la soumission du 'PoppupView' : fin */
                }
                
            }
        }
    }
</script>

<style>

</style>