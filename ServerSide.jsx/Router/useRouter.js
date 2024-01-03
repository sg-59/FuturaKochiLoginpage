const router =require('express').Router();
const user=require('../Models/Userschema');
const Crypto=require('crypto-js')
const multer =require('multer')
const Jwt=require('jsonwebtoken');
const { verifyToken, verifyTokenAndauthorization } = require('../VerifyToken');
const { middleware, middleware1 } = require('../../middleware');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'../clientside/public/Images/');
    },
    filename:(req,file,cb)=>{
      cb(null,file.originalname)
    } 
  })
  
  const upload=multer({storage:storage});  


router.post('/',upload.single('Images'),(req,res)=>{
// req.body.password=Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()
    console.log('form data 3*****',req.body); 
    console.log('form data 4******',req.file);
    const newUser=new user({
        Firstname:req.body.name,
        Lastname:req.body.lname,
        Email:req.body.email,
        Images:req.file.originalname,
        Password:Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()
    })

    try{
        const savedUser= newUser.save()
        res.status(201).json(savedUser)
    }
    catch(err){
res.status(500).json(err)
    }
})

router.post('/verify', async (req,res)=>{
console.log('backend login ',req.body);
  try{
const DtabseData=await user.findOne({Email:req.body.email})
!DtabseData && res.status(401).json({response:'Please check your email'})

console.log('backenda data',DtabseData);

const hashedpassword=Crypto.AES.decrypt(DtabseData.Password,process.env.Crypto_js)
console.log("hashed password",hashedpassword);
const originaPassword=hashedpassword.toString(Crypto.enc.Utf8)

console.log('Original password',originaPassword);

originaPassword != req.body.password && res.status(401).json('Password and email are not match')

const accesstoken=Jwt.sign({
  id:DtabseData._id
},process.env.Jwt_sec,
{expiresIn:'5d'})


const {Password,...others}=DtabseData._doc


res.status(200).json({...others,accesstoken})

  }catch(err){
  res.status(500).json(err)
  }

}) 


// router.post('/sign',async (req,res)=>{
//   try{
// const newData=new user(req.body)
// const saveddata=await newData.save()
// res.status(200).json(saveddata)
//   }catch(err){
// res.status(500).json(err)
//   }
// })

// router.get("/getdataok/:id",verifyToken,verifyTokenAndauthorization, async(req,res)=>{
//   try{
// const res1=await user.findById(req.params.id)
// res.status(200).json(res1)
//   }catch(err){
// res.status(500).json(err)
//   }
// })

// router.post("/postmethoddata", async (req,res)=>{
//   console.log("****************************",req.body);
//   try{
// const fulldata= new user({
//   Firstname:req.body.name,
//   Lastname:req.body.Lname,
//   Email:req.body.email,
//   Images:req.body.Images,
//   Password:Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()
// })
// const savedData=await fulldata.save()
// console.log(savedData);
// res.status(200).json({Fullinformation:savedData})
//   }catch(err){
//     res.status(500).json(err)
//   }
// })

router.get("/getdataok",async (req,res)=>{
  try{
const Databasefulldata=await user.find()
res.status(200).json({databasealldata:Databasefulldata})
  }catch(err){
    res.status(500).json(err)
  }
})

router.get("/singledataok/:id",middleware,middleware1, async (req,res,next)=>{
  console.log("Url Id",req.params.id);
  try{
const singleData=await user.findById(req.params.id)
console.log(singleData);
res.status(200).json(singleData)
  }catch(err){
    res.status(500).json(err)
  }
  next()
},(req,res,next)=>{
  console.log("last checking");
  next()
},(req,res)=>{
  console.log("final check");
})

router.put("/updatadata/:id",async (req,res)=>{
  console.log("req.params.id",req.params.id);
  console.log("req.body",req.body.Firstname);
  try{
const updateData=await user.findByIdAndUpdate(req.params.id,{
  $set:req.body,
},{new:true})
res.status(200).json({data:updateData})
  }catch(err){
    console.log(err);
  }
})

module.exports=router