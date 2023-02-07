// create header component with logo and navigation links
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './styles.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const handleNavigate = path => {
    navigate(path);
  };

  const handleToggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navigation">
      <img src={Logo} alt="Logo" className="brand-name" />
      <button className="hamburger" type="button" onClick={handleToggleNav}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" fill="#FFF" />
        </svg>
      </button>
      <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
        <ul>
          <li>
            <a href="/home">About Us</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
