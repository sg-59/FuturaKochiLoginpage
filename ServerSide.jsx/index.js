const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')

const userRouter=require('./Router/useRouter')
const crudRouter=require('./Router/Crudroutes')
const AdminRouter=require('./Router/Adminrouter')

dotenv.config()
app.use(cors())

app.use(function(next){
   console.log("hello first checking"); 
   next()
})


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('data base are connected');
})
 
app.use(express.json()) 

app.use('/api/datas',userRouter)
app.use('/api/crud',crudRouter)
app.use('/api/admin',AdminRouter)

app.listen(7000,()=>{
    console.log('port 7000 is connected');
}) 