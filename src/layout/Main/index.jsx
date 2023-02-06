// create header component with logo and navigation links
import React from 'react';
import Proptypes from 'prop-types';
import Logo from '../../assets/images/logo.png';
import './styles.scss';

const Main = ({ children }) => <div className="main">{children}</div>;

export default Main;

Main.propTypes = {
  children: Proptypes.node.isRequired,
};
