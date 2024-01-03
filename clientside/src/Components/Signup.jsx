import React, { useEffect, useState } from 'react'
import "./Signup.css"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { SignupApi } from './Apicall';
import axios from 'axios';

const Signup = () => {

  const [firstName,setFirstname]=useState('')
  const [lastName,setLastname]=useState('')
  const [email,setEmail]=useState('')
  const [Images,setImages]=useState({})
  const [password,setPassword]=useState('')
  
  let formData=new FormData()
formData.append('name',firstName)
formData.append('lname',lastName)
formData.append('email',email)
formData.append('Images',Images)
formData.append('password',password)



  const display = (e)=>{
e.preventDefault();
console.log('form data 1 ******',formData);
SignupApi(formData)
  }

  return ( 
    <div id='Main'>
    <MDBContainer fluid className='my-5'>
<form onSubmit={display} encType='multipart/form-data'>
      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={firstName} onChange={(e)=>setFirstname(e.target.value)}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' value={lastName} onChange={(e)=>setLastname(e.target.value)}/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='file'  filename='Images'  onChange={(e)=>setImages(e.target.files[0])}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

        
              <MDBBtn className='w-100 mb-4' size='md' type='submit'>sign up</MDBBtn>
              <Link to={'/'}><p>I have an Account  </p></Link>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
{/* <Link to={'admin'}>hsgxchsgvju</Link> */}
        <MDBCol col='6'>
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>
      </form>
    </MDBContainer>
    </div>
  )
}

export default Signup
