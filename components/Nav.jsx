import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users-details</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
