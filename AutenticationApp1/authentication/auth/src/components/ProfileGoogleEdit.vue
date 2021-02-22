<template>
  <div>
    
    <md-card>
      <md-card-content>
        
       
        <md-field>
          <md-input v-model="photo" placeholder="Put URL of the Image"> </md-input>
        </md-field>
        
        <md-field>
          <md-input v-model="phone" placeholder="Enter phone number"> </md-input>
        </md-field>
        <md-field>
          <md-input v-model="email" placeholder="Enter email"> </md-input>
        </md-field>
      

     
        
        <md-button @click="Edit" class="md-primary md-raised"
          >Save</md-button
        >
       
        >
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
            photo:null,
            
            phone:null,
            email:null,
           

        }
    },
    methods:{
        async Edit() {
            await axios.put(`localhost:3001/auth/edit/${this.id}`, {
          photo: this.photo,
        
          phone: this.phone,
          email: this.email,
         
        });

        }
    }
}



</script>


<style>



</style>