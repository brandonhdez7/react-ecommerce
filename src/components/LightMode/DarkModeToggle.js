import React from 'react';
import useDarkMode from 'use-dark-mode';

import Toggle from './Toggle';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div> 
      <button className="lightMode" type="button" onClick={darkMode.disable}>
        LightMode
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button className="lightMode" type="button" onClick={darkMode.enable}>
        DarkSide 
      </button>
    </div>
  );
};

export default DarkModeToggle;