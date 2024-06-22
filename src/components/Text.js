import React, { useEffect, useState } from 'react'

function Text() {
    const [text , setText] = useState("")
    useEffect(()=>{
      console.log("Text Mounted");

      return ()=>{
        console.log("Text UnMounted");
      }
    }, [])
  return (
    <div>
      <input type="text" onChange={(e)=> setText(e.target.value)}></input>
      <h1>{text}</h1>
    </div>
  )
}

export default Text
