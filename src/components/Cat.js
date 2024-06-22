import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Cat() {
    const [cat, setCat] = useState([])
    const fetchCat = () => {
        axios.get("https://catfact.ninja/fact").then(res => {
            setCat(res.data)
        })
    }
    useEffect(() => {
        axios.get("https://catfact.ninja/fact").then(res => {
            setCat(res.data)
        })
    }, [])

    return (
        <>
        <button onClick={fetchCat}>Genrate Cat</button>
        <div>
            <p>{cat.fact}</p>
        </div>
        </>
    )
}

export default Cat
