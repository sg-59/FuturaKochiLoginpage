import React, { useState } from 'react'
import { Akhildata, Asifdata, Futuradata, Futuradata1 } from './Apicall'

const Asif = () => {

    const [name,setName]=useState('')
    const [Lname,setLname]=useState('')
    const [email,setEmail]=useState('')
    const [Images,setImages]=useState('')
    const [password,setPassword]=useState('')
    const [Firstname,setFname]=useState('')
var Id="656afc7a4d531d8564351c80"
    const display=()=>{
console.log(name,Lname,email,Images,password);
Akhildata({name,Lname,email,Images,password})
    }

    const display1=()=>{
        Asifdata()
    }
    const display2=()=>{
        Futuradata(Id)
    }
    const display3=()=>{
        Futuradata1(Id,{Firstname})
    }



  return (
    <div>
        <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text"  placeholder='lastname' onChange={(e)=>setLname(e.target.value)}/>
        <input type="email" placeholder='email'onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='images' onChange={(e)=>setImages(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" placeholder='Updated' onChange={(e)=>setFname(e.target.value)}/>
        <button onClick={display}>click</button>
        <button onClick={display1}>getAlldata</button>
        <button onClick={display2}>getSingledata</button>
        <button onClick={display3}>getUpdatadata</button>
    </div>
  )
}

export default Asif