import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar( { user, updateUser } ) {

  const [showlogout, setShowlogout] = useState(false)


  const logoutfirststep = (event) => {
    if (user !== null) {
      event.preventDefault()
      setShowlogout(true)
    }else{
      window.location.href = '/login'
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
          <a href='login' onClick={ logoutfirststep }>{user? user.username: 'login'}</a>
        <div className='confirm' style={{ display: showlogout ? 'flex' : 'none' }}>
          <div className='frame'>
            {(user && user.rank === 'Manager') && (<a href='/newproject' className='newproject-button'>Create Project</a>)}
            <span>Are you sure you want to logout ?</span>
            <button id='yes' onClick={ logout }>Yes</button>
            <button id='no' onClick={ ()=> {setShowlogout(false)} }>No</button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar