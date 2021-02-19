import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../components/Signup.vue"),
     },
     {
       path: "/profile",
       name:"Profile",
       component: () =>import("../components/Profile.vue")
     }
    ]
    
});
