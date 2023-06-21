import React from 'react'


export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Bhavu Chat</span>
      <div className="user">
        <img className="img" src="./img/bhavuu.jpg" alt="" />
        <span>John</span>
        <button className="button">Logout</button>
      </div>
    </div>
  )
}
