import React, { useState } from 'react'
import { Admindatas } from './Apicall'

const Sampleform = () => {
    const [AdminName,setname]=useState('')
    const [AdminEmail,setemail]=useState('')
    const [AdminImage,setimag]=useState({})
    const [AdminPassword,setpassword]=useState('')

    const formdata=new FormData()
    formdata.append('AdminName',AdminName)
    formdata.append('AdminEmail',AdminEmail)
    formdata.append('AdminImage',AdminImage)
    formdata.append('AdminPassword',AdminPassword)

    const display=(e)=>{
        e.preventDefault()
        console.log('form data 1',formdata);
        Admindatas(formdata)
    }

  return (
    <div>
      <h1>Admin sample</h1>
      <form onSubmit={display} encType='multipart/form-data'>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',height:'400px'}}>
        <input type="text" placeholder='name'  value={AdminName} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" placeholder='email'  value={AdminEmail} onChange={(e)=>setemail(e.target.value)}/>
        <input type="file"  filename='images' onChange={(e)=>setimag(e.target.files[0])}/>
        <input type="password" placeholder='password'  value={AdminPassword} onChange={(e)=>setpassword(e.target.value)}/>
        <input type="submit" value={'Submit'} />
        </div>
      </form>
    </div>
  )
}

export default Sampleform
