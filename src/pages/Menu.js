import React from 'react'
import ChnageProfile from './../components/ChnageProfile';

function Menu({username, setUsername}) {
  return (
    <div>
      <h2>THIS IS MENU PAGE</h2>
      <h3>Hello {username}  </h3>
      <ChnageProfile setUsername={setUsername}/>
    </div>
  )
}

export default Menu
