<template>



<div>
 <button type=button @click="logout" class="logme-in-btn"> Logout </button>
  <p class="fix-text-normalize"><router-link to="/profileedit"> Edit </router-link></p>

  <div class="input-data-wrapper-form">
    <div class="main-wrapper-all">
      <!-- username zone -->
      <md-toolbar :md-elevation="1">
        <h2 class=" title" >{{user.username}}</h2>
      </md-toolbar>
      <!-- picture zone -->
      <div class="main-wrapper-profile-data">
      <md-list class="md-double-line">
        <md-list-item>
          <div>
            <md-icon class="md-primary block-align">Picture</md-icon>
          </div>
          <div class="md-list-item-text">
            <span>{{user.photo}}</span>
          </div>
      </md-list-item>
      </md-list>
      <!-- new Full list zone -->
      <md-list class="md-double-line">
        <!-- phoine zone -->
        <md-list-item>
          <div>
            <md-icon class="md-primary block-align">Phone</md-icon>
          </div>
          <div class="md-list-item-text">
            <span>{{user.phone}}</span>
          </div>
          <md-button class="md-icon-button md-list-action">
          </md-button>
        </md-list-item>
        <!-- Email zone -->
        <md-list-item>
          <div>
            <md-icon class="md-primary block-align">email</md-icon>
          </div>
          <div class="md-list-item-text">
            <span>{{user.email}}</span>
          </div>
        </md-list-item>
       
      </md-list>
      </div>
      </div>
    </div>
</div>

</template>






<script>
import axios from "axios"
import cookie from 'js-cookie'

export default{
    name:"ProfileGoogle",

     data() {
        return {
           user:'',
           getid:0,
           
           

        }

     },
     
     



    
 

   async beforeMount(){
     var resp= await axios.get("http://localhost:3001/auth/googlerender")
   console.log(resp)
   this.user=resp.data
   this.getid=this.user._id
   document.cookie=`id=${this.getid}`
   console.log(document.cookie)

   },
   methods:{
      
        logout() {
   cookie.remove("id");
      localStorage.clear();
      window.location.replace("/");
        }
       
   }

   
   
   

  
  


    
  


}

</script>

<style scoped>
.logme-in-btn{
  width: 8rem;
  height: 2.42rem;
  border: 1.2px solid #333;
  border-radius: 0.18rem;
  background-color: rgba(223, 223, 207, 0.53);
}
.main-wrapper-all{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 15%;
}
.input-data-wrapper-form{
  width: 75%;
}
.main-wrapper-profile-data{
  margin: 2rem;
  padding: 2rem 0;
}
.block-align{
  margin: 1.2rem 2rem;
  }
  .block-pass{
    margin: 1.2rem 3.2rem;
  }

  </style>