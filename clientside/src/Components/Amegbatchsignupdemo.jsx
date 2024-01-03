import React, { useState } from 'react'

const Amegbatchsignupdemo = () => {
    const [image,setImage]=useState({})

  return (
    <div>
        <form onSubmit={display} action="" encType='multipart/form-data'>

<input type="text" placeholder='name'  />
<input type="email" placeholder='email' />
<input type="file"  filename="Images" onChange={(e)=>setImage(e.target.files[0])}/>
<input type="password" placeholder="password" />
<input type="submit" value={"submit"} />
        </form>
    </div>
  )
}

export default Amegbatchsignupdemo