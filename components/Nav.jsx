import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users-details</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>
        </nav>
        <div className='text-center p-2'>
        <p style={{ fontStyle: 'italic', color: 'black' }}>If the updates aren't showing, a quick refresh should bring them into view.Thank you..!!</p>
    </div>
    </div>
    );
};

export default Nav;
