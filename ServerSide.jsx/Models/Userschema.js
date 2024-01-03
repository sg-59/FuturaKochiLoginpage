const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    Firstname:{type:String,required:true},
    Lastname:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Images:{type:String,required:true},
    Password:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('UserdetailsOKOk',UserSchema)