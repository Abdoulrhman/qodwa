// create header component with logo and navigation links
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <div className="header__logo-text">Logo</div>
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">Home</li>
        <li className="header__nav-item">About</li>
        <li className="header__nav-item">Pricing</li>
        <li className="header__nav-item">Contact Us</li>
      </ul>
    </nav>
  </div>
);

export default Header;
