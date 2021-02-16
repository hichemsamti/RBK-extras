const passport = require('passport')

const GoogleStratyegy=require('passport-google-oauth20')

passport.use(
    new GoogleStrategy ({

        clientID:"351186317702-2le314ptc5m0cte3ochlrp0ib0lhcvm3.apps.googleusercontent.com",
        clientSecret:"mE3Nl6_wC4gdaiR7NF-PASr2"

// options for the google strat

}), ()=>{

     //passport callback

}
)