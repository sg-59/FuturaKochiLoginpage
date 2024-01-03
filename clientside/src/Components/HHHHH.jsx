import React, { useState } from 'react'

const HHHHH = () => {
    const [state,setStae]=useState([])
  return (
    <div>
      {
        state.map((li)=>(
            <>
<h1>{li.firstname}</h1>
<h1>{li.firstname}</h1>
</>
        ))
      }
    </div>
  )
}

export default HHHHH
