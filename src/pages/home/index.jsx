import React from 'react';
import Toggle from 'shared/components/Toggle';

const Home = () => {
  const logState = state => {
    // eslint-disable-next-line no-console
    console.log('Toggled:', state);
  };

  return (
    <div>
      <Toggle label="Toggle me" toggled onClick={logState} />
    </div>
  );
};

export default Home;
