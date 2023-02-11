// create header component with logo and navigation links
import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pages } from 'routes/paths';
import Toggle from 'shared/components/Toggle';
import { ThemeContext } from 'context/theme';
import { IcMoon, IcSun } from 'icons';
import Logo from '../../assets/images/logo.png';
import './styles.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const { useDarkTheme, setUseDarkTheme } = useContext(ThemeContext);

  const handleToggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleNavigate = path => {
    navigate(path);
    handleToggleNav();
  };

  const listOfPages = Object.keys(pages).map(page => pages[page]);

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
          {listOfPages.map(page => (
            <li key={page.path} onClick={() => handleNavigate(page.path)} aria-hidden>
              <p className="nav-item">{page.title}</p>
            </li>
          ))}
          <li className="toggle-item">
            <Toggle label="Dark Mode" toggled={useDarkTheme} onClick={() => setUseDarkTheme(!useDarkTheme)} />
            {useDarkTheme ? <IcMoon /> : <IcSun />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
