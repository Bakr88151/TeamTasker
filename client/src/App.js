import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import './App.css'

function App() {
  return (
    <div style={{height: "100%"}}>
      <Navbar username={'Bakr'} />
      <main>
        <Login />
      </main>
    </div>
  )
}

export default App