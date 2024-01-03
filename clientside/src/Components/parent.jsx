import React from 'react'
import Child from './child'

const parent = () => {
    const a='abhinav'
  return (
    <div>
      <Child value={a}/>
    </div>
  )
}

export default parent
