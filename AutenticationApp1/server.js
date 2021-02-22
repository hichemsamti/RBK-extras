const express = require ('express')

const authRoutes= require('./routes/user')

//const profileRoutes=require('./routes/profile-routes')

const passportSetup= require('./config/passport-setup')


const cookieSession= require('cookie-session')

const mongoose=require('mongoose')

const keys=require("./config/keys")



var cors = require('cors')

const passport= require('passport')

const app = express()

app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:[keys.session.cookieKey]
}))

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER"
    );
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
    );
    next();
  });

  app.use(cors())





//app.set('view engine','ejs')

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

//app.use('/profile',profileRoutes)



app.listen(3001,()=>{
    console.log('app now listen')
})


