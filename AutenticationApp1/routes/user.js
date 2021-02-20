const router = require('express').Router()
const passport=require('passport')
const clientSide = "http://localhost:8080/profilegoogle" || production



//auth login


const jwt=require('jsonwebtoken')
const bcryptjs=require('bcryptjs')
const {check,validationResult}=require('express-validator')
const User=require("../models/user")
//const config=require('config')

router.post('/signup',
[
   check('email','Email is required').isEmail(),
   check('password','Password is required').not().isEmpty()
]

,async (req,res)=>{
    try{

      console.log(req.body)
        var { email,password}=req.body
        var  user=await User.findOne({email})
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(401).json({errors:errors.array()})
        }
        if(user){
            return res.status(401).json({msg:"There is already a user with that email"})

        }

        const salt = await bcryptjs.genSalt(10)
        password= await bcryptjs.hash(password,salt)

       

       

        user=new User({
            email,
            password
        })

        await user.save()

     /*   const payload ={
            user:{
                id:user.id
         
            }
        }

        jwt.sign(
            payload,
           "azerty",
            (err,token)=>{
               if(err) throw error
               res.json({token})
            }
        )
       */

    }catch(error){
        console.log(error.message)
        return res.status(500).json({msg:"server error..."})
    }
})

router.post('/login',
[

check('email','Type proper e-mail').isEmail(),
check('password','Password is required')

]

,async (req,res)=>{
    try{


      console.log(req.body)

        var {email,password} = req.body
        var errors=validationResult(req)
        var user= await User.findOne({email})

        if(!errors.isEmpty()){
            return res.status(401).json({errors:errors.array()})
        }

        if(!user){
            return res.status(401).json({msg :"there is no user with this email"})
        }

        var isPasswordMatch=await bcryptjs.compare(password,user.password)

        if(isPasswordMatch){

            const payload ={
                user:{
                    id:user.id
             
                }
            }
    
            jwt.sign(
                payload,
                "azerty",
                (err,token)=>{
                   if(err) throw error
                   res.json({token})
                }
            )

        }
        else{
            return res.status(401).json({msg:"password does not match"})
        }

    }catch(error){
        console.log(error.message)
        return res.status(500).json({msg:"server error"})
    }
})





/*router.get('/login',(req,res)=>{
    //res.render('login')

})*/

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