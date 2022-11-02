import React from 'react';
import PropTypes from 'prop-types';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { MdGTranslate } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';
//RiLogoutCircleFill

function Navigation({ logout }) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <MdGTranslate
            className="language-button"
            title={locale === 'id' ? 'English' : 'Indonesia'}
            onClick={toggleLocale}
          />
        </li>
        <li>
          <RiLogoutCircleLine
            onClick={logout}
            className="logout-button"
            title="Logout"
          />
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
