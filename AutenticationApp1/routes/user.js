const router = require('express').Router()
const passport=require('passport')
const clientSide = "http://localhost:8080/profilegoogle" || production
const jwtDecode= require ("jwt-decode")


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

        var {email,password}=req.body
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
               user
                    
                
            }
    
            jwt.sign(
                payload,
                'azertyyyyy',
                {expiresIn:300},
                (err,token)=>{
                   if(err) throw error
                   res.json({token})
                   console.log(token)
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


router.post('/filtertoken',async(req,res)=>{

    try{
        var userId= jwtDecode(req.body.token).user._id
        console.log(userId)
        var user1 = await (await User.findOne({_id:userId})).isSelected("-Password")
        console.log(user1)
        res.send(user1)
      }catch(err){
        res.send({err,status:false})
      }
    })


    router.put('/edit/:id',async(req,res)=>{
        var user= await User.findById(req.params.id)
        user.username=req.body.username,
        user.password=req.body.password,
        user.email=req.body.email,
        user.photo=req.body.photo,
        user.phone=req.body.phone
        user.save(()=>{
          res.json(user)
        })
     })










/*router.get('/login',(req,res)=>{
    //res.render('login')

})*/

//auth logout
/*router.get('/logout',(req,res)=>{

    //handle with passport

    res.send('logging out')
    req.logout()
    req.session.destroy()
    res.redirect('/')
})
*/

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