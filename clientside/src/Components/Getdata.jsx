import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getdata = () => {

    const id='64294869e9181de9d4e6ebd4'
const [state,setState]=useState([])
    useEffect(()=>{
async function display(){
const res=await axios.get('api')
setState(res)

}
display()
    },[])

function sssss(){
Getdata(id)
}

 
  return (
    <div>
      <button onClick={sssss}></button>
    </div>
  )
}

export default Getdata
