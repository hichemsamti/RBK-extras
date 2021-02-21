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
    <!--<md-table class="md-card">
      <md-table-row>
        <md-table-head>Cathegory</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Picture</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>Edit</md-table-head>
        <md-table-head>Delete</md-table-head>
      </md-table-row>

      <md-table-row v-for="(menu, index) in menus" :key="index">
        <md-table-cell><h5 class="up">{{ menu.cathegory }}</h5></md-table-cell>
        <md-table-cell><h5  class="up">{{ menu.name }}</h5></md-table-cell>
        <md-table-cell><h5  class="up">{{ menu.description }}</h5></md-table-cell>
        <md-table-cell>
          <img :src="'http://127.0.0.1:3000/images/' + menu.picture"
            class="menulogo"
            alt="picture"/>
        </md-table-cell>
        <md-table-cell>{{ menu.price }}</md-table-cell>
        <md-table-cell>
          <md-button @click="getOne(menu)" class="md-primary md-raised"
            >Edit</md-button
          >
        </md-table-cell>
        <md-table-cell>
          <md-button @click="deleteOne(menu._id)" class="md-primary md-raised"
            >Delete</md-button
          >
        </md-table-cell>
      </md-table-row>
    </md-table>
    <div></div>  !-->
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