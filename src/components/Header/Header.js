// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Postman Clone</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/request">New Request</Link>
            </nav>
        </header>
    );
};

export default Header;
