import React, { useState } from 'react'

export const Counter = () => {
    const [count,setcount]=useState(0)
  return (
    <div>
       <div className="counter">
        <h2>Counter:{count}</h2>
        <button onClick={()=>{setcount(count+1)}}>Increase</button>
        <button onClick={()=>{setcount(count-1)}}>Decrease</button>
        <button onClick={()=>{setcount(0)}}>Reset</button>
       </div>

    </div>
  )
}
