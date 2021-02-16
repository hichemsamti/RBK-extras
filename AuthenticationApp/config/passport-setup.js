const passport = require('passport')

const GoogleStrategy=require('passport-google-oauth20')

const keys = require("./keys")

const User=require("../models/user")

passport.use(
    new GoogleStrategy ({

        callbackURL:"http://localhost:3000/auth/google/redirect",
        clientID:keys.google.clientID,
        clientSecret: keys.google.clientSecret

// options for the google strat

}, (accessToken,refreshToken,profile,done)=>{

     //passport callback function

     console.log('passport callback is fired')
     console.log(profile)

     new User({
         username:profile.displayName,
         googleid:profile.id
     }).save().then((newUser)=>{
         console.log('new user created:' + newUser)
     })
   


}
))