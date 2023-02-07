import React, { useState } from 'react';
import Prototypes from 'prop-types';

import './styles.scss';

const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label htmlFor="toggle">
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} id="toggle" />
      <span />
      <strong>{label}</strong>
    </label>
  );
};

export default Toggle;

Toggle.propTypes = {
  label: Prototypes.string.isRequired,
  toggled: Prototypes.bool,
  onClick: Prototypes.func,
};
