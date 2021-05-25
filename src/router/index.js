import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:"/",
    redirect:"/home",
    meta:{                       //配置一个参数控制tabbar是否显示
      isShowTabBar:true
    }
  },
  {
    path:"/home",
    component:()=>import("views/Home.vue"),
    meta:{
      isShowTabBar:true
    }
  },
  {
    path:"/category",
    component:()=>import("views/Category.vue"),
    meta:{
      isShowTabBar:true
    }
  },
  {
    path:"/cart",
    component:()=>import("views/Cart.vue"),
    meta:{
      isShowTabBar:true
    }
  },
  {
    path:"/profile",
    component:()=>import("views/Profile.vue"),
    meta:{
      isShowTabBar:true
    }
  },
  {
    path:"/detail/:id",
    component:()=>import("views/Detail.vue"),
    meta:{
      isShowTabBar:false
    }
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
