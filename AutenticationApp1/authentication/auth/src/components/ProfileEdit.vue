<template>
  <div>
    
  </div>
 
    
        
       




    
</template>


<script>

import axios from "axios"

export default{
    name:"ProfileEdit",

    data:()=>{
        return{
            photo:null,
            username:null,
            phone:null,
            email:null,
            password:null
           

        }
    },
    methods:{
        async Edit() {
            await axios.put(`localhost:3001/auth/${this.id}`, {
          photo: this.photo,
          username: this.username,
          phone: this.phone,
          email: this.email,
          password:this.password
         
        });

        }
    }
}



</script>


<style>



</style>