const router = require('express').Router()
const passport=require('passport')
const clientSide = "http://localhost:8080" || production



//auth login

router.get('/login',(req,res)=>{
    res.render('login')

})

//auth logout
router.get('/logout',(req,res)=>{

    //handle with passport

    res.send('logging out')
    req.logout()
    req.session.destroy()
    res.redirect('/')
})


//auth with google

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}
))

//callback route for goggle to redirect to

router.get('/google/redirect', passport.authenticate('google'),(req,res)=>{
    res.redirect(clientSide)
})


module.exports=router