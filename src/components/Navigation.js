import React from 'react';
import PropTypes from 'prop-types';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { MdGTranslate } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeContext from '../contexts/ThemeContext';
//RiLogoutCircleFill

function Navigation({ logout }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          {theme === 'light' ? (
            <FaMoon
              onClick={toggleTheme}
              className="moon-button"
              title="Dark Mode"
            />
          ) : (
            <FaSun
              onClick={toggleTheme}
              className="sun-button"
              title="Light Mode"
            />
          )}
        </li>
        <li>
          <MdGTranslate
            className="language-button"
            title={locale === 'id' ? 'English' : 'Indonesia'}
            onClick={toggleLocale}
          />
        </li>
        <li>
          <RiLogoutCircleLine
            className="logout-button"
            title="Logout"
            onClick={logout}
          />
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navigation;
