const express = require ('express')

const authRoutes= require('./routes/auth-routes')

const passportSetup= require('./config/passport-setup')

const mongoose=require('mongoose')

const keys=require("./config/keys")

const app = express()


app.set('view engine','ejs')


//connect to mongodb



mongoose.connect(keys.mongodb.dbURI,
    { useNewUrlParser: true,  
     useUnifiedTopology: true }, 
     err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('connected to DB')
        }
    })



//set up routes

app.use("/auth",authRoutes)


app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(3000,()=>{
    console.log('app now listen')
})