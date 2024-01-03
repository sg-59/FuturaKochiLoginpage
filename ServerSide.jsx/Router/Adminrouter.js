const router=require('express').Router()
const Admindata=require('../Models/AdminSchema')
const multer =require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../clientside/public/Images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/Admin',upload.single('images'),async(req,res)=>{
    console.log('form data 3....',req.body);
    console.log('form data 4....',req.file);

    const newAdmindata=new Admindata({
        AdminName:req.body.name,
        AdminEmail:req.body.email,
        AdminImages:req.file.originalname,
        AdminPassword:req.body.password
   
    })
    try{
        const savedUser=await newAdmindata.save()
        res.status(201).json(savedUser)
    }
    catch(err){
res.status(500).json(err)
    }
})

module.exports=router