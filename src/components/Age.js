import React from 'react'
import { useState } from 'react'

function Age() {
   const [count, setTo] = useState(0);


    return (
        <div>
          <h2>{count}</h2>
          <button onClick={()=> setTo(count + 1)}>Increase</button>
          <button onClick={() => setTo(count -1)}>Decrease</button>
          <button onClick={()=> setTo(0)}>Set To Zero</button>

        </div>
    )
}

export default Age
