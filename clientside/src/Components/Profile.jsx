import React, { useEffect, useState } from 'react'
import { Futuradata } from './Apicall'
import { useSelector } from 'react-redux'

const Profile = () => {

const Data=useSelector(state=>state.user.userData[0])
const [state,setState]=useState()
const Id=Data && Data._id

console.log(Id,"#####");

  useEffect(()=>{
   async function display(){
      var fullData=await Futuradata(Id)
      console.log("FullData where",fullData);
      setState(fullData)
    }
    display()

  },[])
 

  return (
    <div>
      <h1>First Name : -{state &&state.Firstname}</h1>
      <h1>Last Name : -{state && state.Lastname}</h1>
      <h1>Email : -{state && state.Email}</h1>
    </div>
  )
}

export default Profile