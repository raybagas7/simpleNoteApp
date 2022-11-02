import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import { MdGTranslate } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';

const LoginPage = ({ loginSuccess }) => {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className="login-page">
      <div className="float-translate" onClick={toggleLocale}>
        <MdGTranslate
          className="translate-icon"
          title={locale === 'id' ? 'English' : 'Indonesia'}
        />
      </div>
      <LoginInput login={onLogin} />
      <div className="go-to__register">
        <p>
          {locale === 'id'
            ? 'Kamu belum memiliki akun? '
            : "You don't have an account? "}
          <Link to="/register">
            {locale === 'id' ? 'Daftar dulu sini.' : 'Sign up here. '}
          </Link>
        </p>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
