const mongoose=require("mongoose");
const newSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String
    }
})
const UserModel=mongoose.model("UserModel",newSchema)
module.exports=UserModel