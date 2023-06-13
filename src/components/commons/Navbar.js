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
                <Nav className="ml-auto" navbar>
                    {userToggle ? <>
                    <NavItem>About</NavItem>  
                    <NavItem>Logout</NavItem>  
                    <NavItem>UserName</NavItem>  
                    </>: <>
                    <NavItem>
                        <NavLink href={loc.pathname === '/signup' ? '/login' : "/signup"}>{loc.pathname === '/signup' ? 'Login' : 'Register'}</NavLink>
                    </NavItem>
                    </>}
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navbars