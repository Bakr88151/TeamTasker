import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import './App.css'

function App() {

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const updateUser = () => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
  };

  return (
    <div style={{height: "100%"}}>
      <Navbar user={user} updateUser={updateUser} />
      <main>
        <Login updateUser={updateUser}/>
      </main>
    </div>
  )
}

export default App