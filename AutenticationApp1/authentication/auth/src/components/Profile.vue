


<template>

<div>
<button type=button @click="logout"> logout </button>


<div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <h2 class=" title" >{{user.username}}</h2>
      </md-toolbar>

      

      <md-list class="md-double-line">
        <md-subheader>Picture</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">Picture</md-icon>

          <div class="md-list-item-text">
            <span>{{user.photo}}</span>
            
          </div>

          
        </md-list-item>
        </md-list>



      <md-list class="md-double-line">
        <md-subheader>Phone</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>

          <div class="md-list-item-text">
            <span>{{user.phone}}</span>
            <span>Mobile</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        

          

       
        <md-subheader>Email</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">email</md-icon>

          <div class="md-list-item-text">
            <span>{{user.email}}</span>
            <span>Personal</span>
          </div>
        </md-list-item>

        



        <md-subheader>Password</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">Password</md-icon>

          <div class="md-list-item-text">
            <span>{{user.password}}</span>
         
          </div>
        </md-list-item>

       



      </md-list>
    </div>
    </div>







</div>

</template>



<script>

import axios from "axios"
const cookie = require("js-cookie")

export default{
    name:"Profile",

     data() {
        return {
            user:null,
            id:document.cookies.split("=")[1],
        }
    },

   async created(){
        this.getUser()
   },
   methods: {
    logout() {
   cookie.remove("username");
      localStorage.clear();
      window.location.replace("/");
    
     
  },
  async getUser(){
           const res= await axios.get("https://localhost:3001/auth/"+ this.id);
            
           this.user=res.data
           console.log( res.data)
       },
 
}
}


</script>



