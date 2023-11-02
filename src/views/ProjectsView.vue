<template>
    <div class="projects">
        <h1 class="subheading grey--text">projects</h1>
 
        <!-- <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>
        Item
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels> -->

  
        <v-container class="my-5">
           <V-expansion-panels>
               <v-expansion-panel v-for="project in myProjects" :key="project.title">
                <v-expansion-panel-header>
                   {{project.title}}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="px-4 grey--text">
                    <div class="font-weight-bold">
                        due by {{project.due}}
                    </div>
                    <div>{{ project.Content }}</div>
                </v-expansion-panel-content>
               </v-expansion-panel>
           </V-expansion-panels>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            projects: [
          { title: 'Design a new website', person: 'The net Ninja', due: '1st jan 2023', Status: 'Ongoing', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum nisi eum blanditiis, a ea aut soluta assumenda exercitationem esse consequuntur fugiat. Perspiciatis, nobis. Minima animi dolores dolor consequuntur sunt!' },
          { title: 'Give me the ecommerce', person: 'This is chinois', due: '5st febry 2023', Status: 'complete', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita iusto repudiandae magni iure atque nobis quisquam dolor iste molestias tempora, aliquam voluptatem aspernatur deleniti consectetur cum nemo! Nemo, accusantium.' },
          { title: 'Look at the same', person: 'My good father', due: '8st decemb 2023', Status: 'Ongoing', Content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vitae molestias esse saepe vel deleniti, excepturi, quod doloremque, aliquid eligendi fugiat odit voluptates ipsum deserunt debitis tempora libero voluptatibus iure?' },
          { title: 'Give my as new', person: 'The net Ninja', due: '1st jan 2023', Status: 'Onoverdue', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam repudiandae quae eligendi illum, magni error eveniet facere possimus iusto dolores repellendus? Incidunt dolore reprehenderit dolores corporis, quasi veritatis dolorum!' },
          { title: 'My name is ui', person: 'The net Ninja', due: '1st jan 2023', Status: 'complete', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam repudiandae quae eligendi illum, magni error eveniet facere possimus iusto dolores repellendus? Incidunt dolore reprehenderit dolores corporis, quasi veritatis dolorum!' },
          { title: 'Give me the ecommerce...again', person: 'This is chinois', due: '5st febry 2023', Status: 'complete', Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita iusto repudiandae magni iure atque nobis quisquam dolor iste molestias tempora, aliquam voluptatem aspernatur deleniti consectetur cum nemo! Nemo, accusantium.' },
        ]
        }
    },
    computed: {
        myProjects(){
           return this.projects.filter(project => {
              return project.person === 'This is chinois'
           })
        }
    }
}
</script>

<style></style>