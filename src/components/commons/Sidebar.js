import { Home, List, PlusSquare, Settings, User } from 'react-feather';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

const Sidebars = () => {
    const loc = useLocation()
    return (
        <Sidebar>
            <Menu>
                <MenuItem active={loc.pathname === "/user/dashboard"} component={<Link to={'/user/dashboard'} />}> <Home size={16} className=''/> Home </MenuItem>
                <MenuItem active={loc.pathname === "/user/add-contacts"} component={<Link to={'/user/add-contacts'} />}> <PlusSquare size={16} /> Add Contacts </MenuItem>
                <MenuItem active={loc.pathname === "/user/show-contacts"} component={<Link to={'/user/show-contacts'} />}> <List size={16} /> View Contacts </MenuItem>
                <MenuItem active={loc.pathname === "/user/profile"} component={<Link to={'/user/profile'} />}> <User size={16} /> Profile </MenuItem>
                <MenuItem active={loc.pathname === "/user/settings"} component={<Link to={'/user/settings'} />}> <Settings size={16}/> Settings </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default Sidebars