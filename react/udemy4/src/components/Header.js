import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className = "navbar">
            <a href="/" className = "btn">Accordion</a>
            <a href="/search">Search</a>
            <a href="/dropdown">Dropdown</a>
            <a href="/translate">Translator</a>
        </div>
    )
}
export default Header;