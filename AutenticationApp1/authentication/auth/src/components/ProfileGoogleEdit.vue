<template>
   <div>
    <!-- go to profile headline -->
    <p class="fix-text-normalize text-space-area"><router-link to="/profile" class="link-btn-beatify"> {{username}} to profile</router-link></p>
    <md-card class="card-wrapper-all">
      <!-- form data entry or display -->
      <md-card-content>
        <md-field>
          <md-input :disabled="isDisabled" v-model="username" placeholder="Enter user Name"> </md-input>
        </md-field>
        <md-field>
          <md-input :disabled="isDisabled" v-model="photo" placeholder="Put URL of the Image"> </md-input>
        </md-field>
        <md-field>
          <md-input :disabled="isDisabled" v-model="phone" placeholder="Enter phone number"> </md-input>
        </md-field>
        <md-field>
          <md-input :disabled="isDisabled" v-model="email" placeholder="Enter email"> </md-input>
        </md-field>
        <md-button @click="save" class="md-primary md-raised">Save</md-button>
        <md-button @click="getOne(user)" class="md-primary md-raised">Edit</md-button>
      </md-card-content>
    </md-card>
  </div>
 
    
        
       




    
</template>


<script>

import axios from "axios"

export default{
    name:"ProfileGoogleEdit",

   data:()=>{
        return{
            photo:"",
            username:"",
            phone:"",
            email:"",
            id:0,
            user:"",
            edituser:false
        }
    },
    async created(){
        this.getUser()   
    },
    methods:{
        async save() {
            this.id=document.cookie.split("=")[1],
            await axios.put(`http://localhost:3001/auth/edit/${this.id}`, {
          photo: this.photo,
          username: this.username,
          phone: this.phone,
          email: this.email,
        },
        this.$router.push("/profile")
        );
        },
          getOne(user) {
          this.photo = user.photo;
          this.username =user.username;
          this.phone =user.phone;
          this.email = user.email;
          console.log("ok")
        },
        async getUser(){
          this.id=document.cookie.split("=")[1]
          const res= await axios.get("http://localhost:3001/auth/authentication/"+ this.id);
          this.user=res.data
          console.log( res.data)
        },
    },
    computed:{
      isDisabled() {
       return this.edituser === false
    
  }
}
}


</script>


<style>



</style>