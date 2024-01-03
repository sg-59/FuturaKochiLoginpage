import React, { useState } from 'react'
import { otpcheck } from './Apicall'

const Otpcheck = () => {
    const [otp,setotp]=useState('')
const display=()=>{
    otpcheck({otp})
}
  return (
    <div>
     <input type="text" placeholder='Enter Otp' onChange={(e)=>setotp(e.target.value)}/>
     <button onClick={display}>Submit otp</button>
    </div>
  )
}

export default Otpcheck
