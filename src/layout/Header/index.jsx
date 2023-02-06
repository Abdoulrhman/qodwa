// create header component with logo and navigation links
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './styles.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = path => {
    navigate(path);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo-text">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item" onClick={() => handleNavigate('/')} aria-hidden>
            Home
          </li>
          <li className="header__nav-item" onClick={() => handleNavigate('/about-us')} aria-hidden>
            About Us
          </li>
          <li className="header__nav-item">Pricing</li>
          <li className="header__nav-item">Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
