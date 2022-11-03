import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeContext from '../contexts/ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="float-theme">
      {theme === 'light' ? (
        <FaMoon
          onClick={toggleTheme}
          className="moon-button__welcome"
          title="Dark Mode"
        />
      ) : (
        <FaSun
          onClick={toggleTheme}
          className="sun-button__welcome"
          title="Light Mode"
        />
      )}
    </div>
  );
};

export default ThemeButton;
