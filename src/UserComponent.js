import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/user/Dashboard'
import Sidebars from './components/commons/Sidebar'
import AddContact from './components/user/AddContact'

const UserComponent = () => {
    return (
        <>
            <div className='sidebar'>
                <Sidebars />
            </div>
            <div className='content'>
                <Routes>
                    <Route path="/user/dashboard" element={<Dashboard />} />
                    <Route path="/user/add-contacts" element={<AddContact />} />
                </Routes>
            </div>
        </>
    )
}

export default UserComponent