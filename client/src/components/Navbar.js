import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'

function Navbar( { user, updateUser } ) {

  const [showlogout, setShowlogout] = useState(false)

  const logoutfirststep = () => {
    if (user !== null) {
      setShowlogout(true)
    }
  }
  const logout = () => {
    sessionStorage.removeItem('user')
    updateUser()
    setShowlogout(false)
  }
  return (
    <nav>
        <a href='/'>TeamTasker</a>
        <a href='#' onClick={ logoutfirststep }>{user? user.username: 'login'}</a>
        <div className='confirm' style={{ display: showlogout ? 'flex' : 'none' }}>
          <div className='frame'>
            <span>Are you sure you want to logout ?</span>
            <button id='yes' onClick={ logout }>Yes</button>
            <button id='no' onClick={ ()=> {setShowlogout(false)} }>No</button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar