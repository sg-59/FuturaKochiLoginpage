const mongoose=require('mongoose')

const AdminSchema=new mongoose.Schema({
    AdminName:{type:String,required:true},
    AdminEmail:{type:String,required:true},
    AdminImages:{type:String,required:true},
    AdminPassword:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('Admindetails',AdminSchema)