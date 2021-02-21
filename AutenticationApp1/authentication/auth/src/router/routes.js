import Router from "vue-router";
import Vue from "vue";
//import axios from "axios"
Vue.use(Router);



/*const isUser=async function(next){
  let user= await axios.post("http://localhost:3001/auth/filtertoken",{
    token:localStorage.token
    
  })
  console.log("this"+ localStorage.token)

  if(user.data._id ){
    next()

  }else{
    localStorage.clear();
    next({path:'/'})
  }
}*/


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
       path: "/profilegoogleedit",
       name:"ProfileGoogleEdit",
       component: () =>import("../components/ProfileGoogleEdit.vue")
     },
     { 
       path: "/profileedit",
       name:"profileEdit",
       component:() =>import("../components/ProfileEdit.vue")
     },
     {
       path: "/profile",
       name: "Profile",
       component:() =>import("../components/Profile.vue"),
     /*  beforeEnter:(to,from,next)=>{
         isUser(next)
       }*/
     },
     {
       path: "/profilegoogle",
       name: "ProfileGoogle",
       component:() =>import("../components/ProfileGoogle.vue")
     }
    ]
    
});
