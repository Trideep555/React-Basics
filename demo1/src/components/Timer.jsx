import React, { useEffect, useState } from 'react'

function Timer() {
    const [count,SetCount] =  useState(0);
    const [message , setMessage] = useState("");
    useEffect(()=> {
        if(count > 5){
            setMessage(`count is greater than 5 . Current Count Value is ${count}`)
        }
       /*  if(count <= 0)
            return;
        const timer = setInterval(() => {
            SetCount(count -  1);
        },1000)
        //cleanup
        return () => clearInterval(timer); */
    },[count])
  return (
    <>
    <div>You have clicked {count} times</div>
    <button onClick={() => SetCount(count + 1)} >Click me</button>
    <div>{message}</div>
    </>
  )
}

export default Timer