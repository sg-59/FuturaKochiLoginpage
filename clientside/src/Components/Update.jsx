import React, { useEffect, useState } from 'react'
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
import { useSelector,useDispatch } from 'react-redux'
import { UpdatedApi } from './Apicall';
import { useNavigate, useParams } from 'react-router-dom';
const Update = () => { 
const dispatch=useDispatch();
const {ids}=useParams()
const navigate=useNavigate()
    const [firstName,setFirstname]=useState('')
    const [lastName,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [Images,setImages]=useState({})
    const [password,setPassword]=useState('')

    const data=useSelector((state)=>state.user.userData[0])
    console.log('useselector data',data);
const id=data && data._id




useEffect(()=>{
  setFirstname(data.Firstname)
  setLastname(data.Lastname)
  setEmail(data.Email)
setImages(data.Images)
   },[])

 const formData=new FormData()

 formData.append('Firstname',firstName)
 formData.append('Lastname',lastName)
 formData.append('Email',email)
 formData.append('Images',Images)
 formData.append('Password',password)

function Navigators(){
navigate('/')
}
 

    const display=(e)=>{
e.preventDefault();
UpdatedApi(dispatch,id,formData)
    }

  return (
    <div style={{width:'50%',marginLeft:'25%'}}>
    <MDBContainer fluid className='my-5'>
<form onSubmit={display} encType='multipart/form-data'>
      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Update now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label={data.Firstname} id='form1' type='text' value={firstName} onChange={(e)=>setFirstname(e.target.value)}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label={data.Lastname} id='form2' type='text' value={lastName} onChange={(e)=>setLastname(e.target.value)}/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label={data.Email} id='form3' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4'  id='form3' type='file'  filename='Images'  onChange={(e)=>setImages(e.target.files[0])}/>
              <MDBInput wrapperClass='mb-4' id='form4' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

        
              <MDBBtn className='w-100 mb-4' size='md' type='submit' style={{backgroundColor:'lightgreen'}}>Update</MDBBtn>
           

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
      </form>
      <h1>{ids}hellopop</h1>
      <button onClick={Navigators}>click meeeeee</button>
    </MDBContainer>
    </div>
  )
}

export default Update
