<template>
  <div>
    <!-- go to profile headline -->
    <p class="fix-text-normalize text-space-area"><router-link to="/profile" class="link-btn-beatify"> {{username}} to profile</router-link></p>
    <md-card class="card-wrapper-all">
      <!-- form data entry or display -->
      <md-card-content>
        <md-field>
          <md-input v-model="username" placeholder="Enter user Name"> </md-input>
        </md-field>
        <md-field>
          <md-input v-model="photo" placeholder="Put URL of the Image"> </md-input>
        </md-field>
        <md-field>
          <md-input v-model="phone" placeholder="Enter phone number"> </md-input>
        </md-field>
        <md-field>
          <md-input v-model="email" placeholder="Enter email"> </md-input>
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
    name:"ProfileEdit",
    data:()=>{
        return{
            photo:"",
            username:"",
            phone:"",
            email:"",
            id:0,
            user:""
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
    }
}



</script>


<style scoped>
.text-space-area{
  margin: 2.2rem;
  text-decoration: none;
  color: darkgray;
}
.card-wrapper-all{
  width: 75%;
  margin: 2.2rem auto;
}
.link-btn-beatify{
  padding: 0.6rem 3.4rem;
  text-decoration: none;
  color: darkgray;
  border: 1.2px solid black;
  border-radius: 0.18rem;
  background-color: rgba(223, 223, 207, 0.53);
}
</style>