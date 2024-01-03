import React from 'react'
import { getProfile } from './Apicall'
import { useSelector } from 'react-redux'

const Navbarprofile = () => {

const fullData=useSelector(state=>state.user.userData)
if(Id){
    var Id=fullData[0]&&fullData[0].accessToken
}

    const display=()=>{
        getProfile(Id)
    }

  return (
    <div>
        <button onClick={display}>Profile</button>
    </div>
  )
}

export default Navbarprofile