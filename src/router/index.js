import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TeamView from '../views/TeamView.vue'
import TabloBord1View from '../views/TabloBord1View.vue'
import DashbordPatientView from '../views/DashbordPatientView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/tabloBord1',
    name: 'tabloBord1',
    component: TabloBord1View
  },
  {
    path: '/DashbordPatient',
    name: 'DashbordPatient',
    component: DashbordPatientView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
