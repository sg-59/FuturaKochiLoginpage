import React from 'react'
import {useDispatch} from 'react-redux'
const Remove = () => {
const dispatch=useDispatch()
    const display =()=>{
dispatch(removeData())
    }
  return (
    <div>
      <button onClick={display}></button> 
    </div>
  )
}

export default Remove
