import React from 'react'
import '../styles/Navbar.css'

function Navbar({ username }) {
  return (
    <nav>
        <a href='/'>TeamTasker</a>
        <a href='/logout'>{username? username: 'login'}</a>
    </nav>
  )
}

export default Navbar