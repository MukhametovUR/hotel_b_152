import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Hotels from '../views/Hotels.vue'
import Main from '../views/Main.vue'
// import HotelIdPage from '../views/HotelIdPage'


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: Hotels
  },
  // {
  //   path:'/hotels/:id',
  //   component:HotelIdPage
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
