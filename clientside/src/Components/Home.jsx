import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeData } from '../Redux/userRedux'
import { Link } from 'react-router-dom'
import { SignupApi, getData } from './Apicall'

const Home = () => {



const dispatch=useDispatch()
  const Logout = ()=>{
dispatch(removeData())
  }
  const data=useSelector((state)=>state.user.userData[0])
    var id=data && data._id
    console.log("data ?",data);

   

  return (
    <div>
      <h1>Login pages</h1>
      <p>name:-</p>
      <h1 style={{cursor:'pointer'}} onClick={Logout}>Logout</h1>
     <Link to={`update/${id}`}> <h1 style={{cursor:'pointer'}}>Update user</h1></Link>
     <Link to={'navigate/123456789'}>Usenavigate</Link>
     <Link to={'admin'}>Go to admin form</Link>
    <Link to={'profile'}><button>profile</button></Link> 
     {/* <img src={`./Images/${data.Images}`} alt="" /> */}
    </div>
  )  
}

export default Home
