import React from 'react'

const Setstate2 = ({value}) => {
  

    const display =()=>{
        value('hai')
    }
  return (
    <div>
      <button onClick={display}> click me</button>
    </div>
  )
}

export default Setstate2
