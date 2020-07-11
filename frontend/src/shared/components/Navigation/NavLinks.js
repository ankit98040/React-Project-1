import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/">ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to="/">My Places</NavLink>
        </li>
        <li>
            <NavLink to="/">New Places</NavLink>
        </li>
        <li>
            <NavLink to="/">Authenticate</NavLink>
        </li>
    </ul>
}