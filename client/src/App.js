import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const updateUser = () => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
  };

  return (
    <div style={{height: "100%"}}>
      <Navbar user={user} updateUser={updateUser} />
      <main>
      <Router>
        <Routes>
          <Route path="/login" element={<Login updateUser={updateUser}/>} />
          <Route path='/' element={<Home user={user} />} />
        </Routes>
      </Router>
      </main>
    </div>
  )
}

export default App