import React, { useState } from 'react'

export const Counter = () => {
    const [count,setcount]=useState(0);
    const mincount=0;
    const maxcount=10;

    const increase=()=>{
        if(count<maxcount){
            setcount(count+1);
            playsound();
        }
        else{
            alert("out of limit")
        }
        
    }
    
    const decrease=()=>{
        if(count<mincount){
            alert("going on negative values");
            
        }
        
        else{
            setcount(count-1);
            playsound();
        }
        
    }

    const colorcount=(count)=>{
        if(count>=5){
            return "red"
        }
        else{
            return "aqua"
        }
    }

    const playsound=()=>{
        const audio=new Audio("not.mp3");
        audio.play();
    }



  return (
    <div>
       <div className="counter">
        <h2 className='h' style={{color:colorcount(count)}}>Counter: {count}</h2>
        <button onClick={increase} disabled={count===maxcount}>Increase</button>
        <button onClick={decrease} disabled={count===mincount}>Decrease</button>
        <button onClick={()=>{setcount(0)}}>Reset</button>
       </div>

    </div>
  )
}
