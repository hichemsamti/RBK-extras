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
       path: "/profilegoogleEdit",
       name:"ProfileGoogleEdit",
       component: () =>import("../components/ProfileGoogleEdit.vue")
     },
     { 
       path: "/profileEdit",
       name:"profileEdit",
       component:() =>import("../components/ProfileEdit.vue")
     }
    ]
    
});
