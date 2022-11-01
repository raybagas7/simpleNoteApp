import React from 'react';
import PropTypes from 'prop-types';
import { RiLogoutCircleLine } from 'react-icons/ri';
//RiLogoutCircleFill

function Navigation({ logout }) {
  return (
    <nav className="navigation">
      <ul>
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
