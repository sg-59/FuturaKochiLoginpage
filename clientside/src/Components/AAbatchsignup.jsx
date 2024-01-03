import React, { useState } from 'react'
import { signupdata } from './Apicall'

const AAbatchsignup = () => {

    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const display=()=>{
    signupdata({username,email,password})
    }

  return (

    <div>
      <input type="text" placeholder='Username' value={username} onChange={(e)=>setusername(e.target.value)}/>
      <input type="text" placeholder='Username' value={email} onChange={(e)=>setemail(e.target.value)}/>
      <input type="text" placeholder='Username' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={display}>Submit</button>
    </div>

  )
}

export default AAbatchsignup
