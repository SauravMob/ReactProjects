import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/commons/Login';
import Signup from './components/commons/Signup';
import Navbar from './components/commons/Navbar';
import UserComponent from './UserComponent';
import { useEffect, useState } from 'react';

function App() {
  const loc = useLocation()
  const [userToggle, setUserToggle] = useState(false)

  useEffect(() => {
    if (loc.pathname.startsWith('/user/')) {
      setUserToggle(true)
    } else {
      setUserToggle(false)
    }
  }, [loc])

  return (
    <>
      <Navbar />
      {userToggle ? <UserComponent /> : <></>}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App