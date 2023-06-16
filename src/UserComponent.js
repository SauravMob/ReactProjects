import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/user/Dashboard'
import Sidebars from './components/commons/Sidebar'
import AddContact from './components/user/AddContact'
import ViewContacts from './components/user/ViewContacts'
import Profile from './components/user/Profile'

const UserComponent = () => {
    return (
        <>
            <div className='sidebar'>
                <Sidebars />
            </div>
            <div className='content'>
                <Routes>
                    <Route path="/user/dashboard" element={<Dashboard />} />
                    <Route exact path="/user/edit-contact/:id" element={<AddContact />} />
                    <Route exact path="/user/add-contacts" element={<AddContact />} />
                    <Route path="/user/show-contacts" element={<ViewContacts />} />
                    <Route path="/user/profile" element={<Profile />} />
                </Routes>
            </div>
        </>
    )
}

export default UserComponent