const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema= new Schema({
    username:String,
    googleid:String,
    phone:{
        type:Number,
        default:0
    },
    photo:{
        type:String,
        default:"none"
    },
    password:{
        type:String
        
    },
    email:{
        type:String
    }
})

const User=mongoose.model('user',userSchema)

module.exports=User