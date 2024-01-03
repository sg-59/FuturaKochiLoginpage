const router = require('express').Router();
const user = require('../Models/Userschema');
const Crypto = require('crypto-js');
const multer = require('multer');
const nodemailer = require('nodemailer')
const mailer = require('../Models/Nodemailerschema')
const dotenv = require('dotenv')
dotenv.config()
const { verifyTokenAndauthorization, verifyToken } = require('../VerifyToken');





const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../clientside/public/Images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

router.put('/update/:id', verifyToken, verifyTokenAndauthorization, upload.single('Images'), async (req,res,next) => {
  console.log('update    ****', req.body);
  console.log('params id ****', req.params.id);
  console.log('Images ?  ****', req.file);
  console.log('Images files ?  ****', req.files);

  if (req.body.Password) {
    req.body.Password = Crypto.AES.encrypt(req.body.Password, process.env.Crypto_js).toString()
  }

  try {
    const Updatedata = { ...req.body }
    if (req.file) {
      Updatedata.Images = req.file.originalname
    }
console.log("update data",Updatedata);
    const updateuser = await user.findByIdAndUpdate(req.params.id, {
      $set: Updatedata
    }, { new: true }
    )
    console.log('update user', updateuser);
    res.status(200).json(updateuser)
  } catch (err) {
    res.status(500).json(err)
  }
  next()
})


router.get('/getdata/:id', verifyToken, verifyTokenAndauthorization, async (req, res) => {

  console.log('query**', req.params.id);
  try {
    const res1 = await user.findById(req.params.id)
    console.log('ok done', res1);
    res.status(200).json(res1)
  } catch (err) {
    console.log(err);
  }
})
router.delete('/deletedata/:id', async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id)
    res.status(200).json('Deleated')
  } catch (err) {
    res.status(500).json(err)
  }
})

//Nodemailer

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

router.post('/forgotten', async (req, res) => {
  console.log('password', req.body);
  const { email } = req.body;

  console.log('124', email);
  const otp = generateOTP();
  const otpExpiration = new Date(Date.now() + 5 * 60 * 1000);

  console.log(
    otp,
    otpExpiration,
    email
  );
  const user = new mailer({
    email,
    otp,
    otpExpiration,
  });
  try {
    await user.save();

    // Send OTP via email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is shown below: ${otp}`,
    };

    console.log("mail optioons", mailOptions);
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);
    return res.status(200).json({ message: "OTP sent successfully", otp });
  } catch (err) {
    console.error("Error saving user:", err);
    return res.status(500).json({ error: "Error sending OTP email" });
  }
})

router.post('/otp', async (req, res) => {
  console.log('otp ', req.body);
  try {
    const otp = await mailer.findOne({ otp: req.body.otp })
    res.status(200).json(otp)
  } catch (err) {
    res.status(500).json(err)
  }
})



module.exports = router
