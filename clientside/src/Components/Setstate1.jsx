import React, { useState } from 'react'
import Setstate2 from './Setstate2'

const Setstate1 = () => {
    const [state,setstate]=useState('')
    console.log('state',state);
  return (
    <div>
      <Setstate2 value={setstate}/>
    </div>
  )
}

export default Setstate1
