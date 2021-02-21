<template>


<div>
<button type=button @click="logout"> logout </button>


<!--<div>
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

     



       



      </md-list>
    </div>
    </div>!-->

</div>
</template>



<script>
import axios from "axios"

export default{
    name:"ProfileGoogle",

     data() {
        return {
           user:null


        }
    },

  /* async beforeMount(){
     var resp= await axios.get("http://localhost:3001/auth/google/redirect")
   console.log(resp)
   this.user=resp.data
   document.cookie=`id=${this.user._id}`

   },*/

   
   
   methods: {
  
     
  

  async getUser(){
   var resp= await axios.get("http://localhost:3001/auth/google/redirect")
   console.log(resp)
   this.user=resp.data
   document.cookie=`id=${resp.data.user._id}`
   

  }

  
  


    
  
}
}


