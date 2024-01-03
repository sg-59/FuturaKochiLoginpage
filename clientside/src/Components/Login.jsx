import React, { useState } from 'react'
import './Login.css'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { LoginApi, Nodemailer } from './Apicall';
import { useDispatch } from 'react-redux';

const Login = () => {
const dispatch=useDispatch();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const display = ()=>{
    LoginApi(dispatch,{email,password})
  }

  const Forgotten=()=>{
    Nodemailer({email})
  }

  return (
    <div id='Sub'>
         <MDBContainer fluid className="p-3 my-5">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
  </MDBCol>

  <MDBCol col='4' md='6'>


    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>


 

    <MDBBtn className="mb-4 w-100" size="lg" onClick={display}>Sign in</MDBBtn>

    <Link to={'sign'}><p>Create an Account ? </p></Link>
   {email &&<p onClick={Forgotten} style={{cursor:'pointer'}}>Forgotten Password ?</p>}
  </MDBCol>

</MDBRow>

</MDBContainer>
    </div>
  )
}

export default Login
