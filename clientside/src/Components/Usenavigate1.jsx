import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Usenavigate1 = () => {
const navigate=useNavigate()
const {id}=useParams()
 
setTimeout(()=>{
    navigate('/')
    // console.log('hai hello');
},5000)

 return (
    <div>
<h1>{id}</h1>
    </div>
  )
}

export default Usenavigate1
