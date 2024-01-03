const mongoose=require('mongoose')
const mailerSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
      },
      otp: {
        type: String,
        required: true,
      },
      otpExpiration: {
        type: Date, 
        required: true,
      },
    
})

module.exports=mongoose.model('FuturaNodeMailer',mailerSchema)