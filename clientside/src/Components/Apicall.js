import axios from 'axios';
import { addtoUser, addtoproduct } from '../Redux/userRedux';
import { publicRequest, userRequest } from '../Requestmethod'

export const SignupApi= async (data)=>{
    console.log('form data 2 *******',data);
try{
const res=await publicRequest.post('/datas',data)
// const res=await axios.post("http:",data)
console.log(res);
}catch(err){
console.log(err);
}
}

export const LoginApi =async (dispatch,data)=>{
    console.log('login api',data);
try{
const res=await publicRequest.post('/datas/verify',data)
// const res=await axios.post("Api",data)
console.log('login data**',res);
dispatch(addtoUser(res.data))

}catch(err){
    console.log(err);
}
} 

export const UpdatedApi=async (dispatch,id,data)=>{
    console.log('updated api*********************',data);
    console.log('updated api ..id',id);
    try{
const res=await userRequest.put(`/crud/update/${id}`,data)
console.log('updated finaly....',res.data);
// dispatch(addtoproduct(res.data))
    }catch(err){
        console.log(err);
    }
}

export const Getsingledata=async (id)=>{
    try{
const res=await userRequest.get()
    }catch(err){
        console.log(err);
    }
}

export const Admindatas=async(data)=>{
    console.log('form data 2...',data);
    try{
const res=await publicRequest.post('/admin/Admin',data)
console.log(res.data)
    }catch(err){ 
console.log(err)
    }
}

export const Nodemailer=async(data)=>{
    console.log('first check',data);
    try{
        const res=await publicRequest.post('/crud/forgotten',data)
        console.log('final check',res.data);
    }catch(err){
console.log(err);
    }
}
export const otpcheck=async(data)=>{
    console.log('first check',data);
    try{
        const res=await publicRequest.post('/crud/otp',data)
        console.log('final check ok ok ok ok ',res.data);
    }catch(err){
console.log(err);
    }
}

export const getData=async(id)=>{
    try{
const res=await axios.get(`http://localhost:3000/api/allmethod/${id}`)
return res
    }catch(err){
        console.log(err);
    }
}

export const getProfile=async(id)=>{
    try{
const res1=await userRequest.get(`/datas/dvhdc/${id}`)
    }catch(err){
        console.log(err);
    }
}

export const Akhildata=async(data)=>{
console.log("first check",data);
try{
const finalydata=await publicRequest.post("/datas/postmethoddata",data)
console.log("finaly data received",finalydata);
}catch(err){
    console.log(err);
}
}

export const Asifdata=async()=>{
    try{
const Alldata=await axios.get("http://localhost:7000/api/datas/getdataok")
console.log("Alldata >>>>>>>>>>>",Alldata.data);
    }catch(err){
        console.log(err);
    }
}

export const Futuradata=async(id)=>{
    try{
const singleData=await userRequest.get(`/datas/singledataok/${id}`)
console.log("singledata get it",singleData.data);
return singleData.data
    }catch(err){
        console.log(err);
    }
}


export const Futuradata1=async(id,data)=>{
    console.log("data ?",data);
    try{
const UpdatedData=await axios.put(`http://localhost:7000/api/datas/updatadata/${id}`,data)
console.log("Updateddata get it",UpdatedData.data);
    }catch(err){
        console.log(err);
    }
}



