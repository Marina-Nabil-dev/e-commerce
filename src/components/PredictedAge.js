import axios from 'axios'
import React, {  useState, useEffect } from 'react'

function PredictedAge({ name }) {
    const [age, setAge] = useState(null);
    const [nameInput , setNameInput] = useState('');
  
    useEffect(() => {
      if (name) {
        axios.get(`https://api.agify.io?name=${name}`)
          .then(res => {
            setAge(res.data.age);
            setNameInput(res.data.name)
          }
        )
          .catch(error => console.error("Error fetching predicted age:", error));
      }
    }, [name]); 
  
    return (
      <div>
        {age ? <p>Predicted Age: {age}</p> : <p>Loading predicted age...</p>}
        <p>Name: {nameInput}</p>
      </div>
    );
  }

export default PredictedAge
