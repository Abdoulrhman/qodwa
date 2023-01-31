// create reusable button component with different styles with pure css

import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ children, className, onClick, type, disabled }) => (
  <button className={`button ${className}`} onClick={onClick} type={type} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
