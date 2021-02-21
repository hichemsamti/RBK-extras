const express = require ('express')

const authRoutes= require('./routes/auth-routes')

const profileRoutes=require('./routes/profile-routes')

const passportSetup= require('./config/passport-setup')

const mongoose=require('mongoose')

const keys=require("./config/keys")

const cookieSession= require('cookie-session')

const passport= require('passport')

const app = express()

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookieKey]
}))


app.set('view engine','ejs')

//initialize passport

app.use(passport.initialize())
app.use(passport.session())

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

app.use('/profile',profileRoutes)


app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(3000,()=>{
    console.log('app now listen')
})