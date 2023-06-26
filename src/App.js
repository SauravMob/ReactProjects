import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/commons/Login';
import Signup from './components/commons/Signup';
import Navbar from './components/commons/Navbar';
import UserComponent from './UserComponent';
import { useEffect, useState } from 'react';
import Home from './components/commons/Home';
import NotFound from './components/commons/NotFound';

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App