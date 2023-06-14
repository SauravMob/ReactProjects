import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const Navbars = (args) => {
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
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Contact Manager</NavbarBrand>
                <Nav navbar>
                    {userToggle ? <>
                        <NavLink href='/about'>About</NavLink>
                        <NavLink href='/logout'>Logout</NavLink>
                        <NavLink>{localStorage.getItem('userId')}</NavLink>
                    </> : <>
                        {loc.pathname === '/' ? <>
                            <NavLink href='/login'>Login</NavLink>
                            <NavLink href='/signup'>Register</NavLink>
                        </> : <>
                            <NavLink href={loc.pathname === '/signup' ? '/login' : "/signup"}>{loc.pathname === '/signup' ? 'Login' : 'Register'}</NavLink>
                        </>}
                    </>}
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navbars