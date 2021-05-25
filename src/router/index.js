import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:()=>import("views/Home.vue")
  },
  {
    path:"/category",
    component:()=>import("views/Category.vue")
  },
  {
    path:"/cart",
    component:()=>import("views/Cart.vue")
  },
  {
    path:"/profile",
    component:()=>import("views/Profile.vue")
  },
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
