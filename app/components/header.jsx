import React from 'react';
import Logo from './logo.jsx';

const Header = () => (
    <header>
        <Logo/>
        <div className="header-text">
            <span>MovieBase</span>
        </div>
    </header>
);

export default Header;
