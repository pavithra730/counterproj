import React, { useState } from 'react'

export const Color = () => {
    const colors=["green","pink","yellow","blue"];
    const [mycolor,setcolor]=useState("black")
  return (
    <div className="color-containers" style={{backgroundColor:mycolor}}>
        <h1 style={{color:'red'}}>present color:{mycolor}</h1>
        <div className="color-btns">
           {colors.map((mycolor)=>(
               <button onClick={()=>{setcolor(mycolor)}} style={{backgroundColor:mycolor,color:"white"}} key={mycolor}>{mycolor}</button>
            ))}  
        </div>
        <button onClick={()=>{setcolor("white")}}>reset</button>
    </div>
  )
}
