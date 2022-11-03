import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

const LoginInput = (props) => {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.login({
      email,
      password,
    });
  };

  return (
    <div className="register-container">
      <form onSubmit={onSubmitHandler} className="register-input">
        <h2>{locale === 'id' ? 'MASUK' : 'LOGIN'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder={locale === 'id' ? 'Kata Sandi' : 'Password'}
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div className="register-button">
          <button>{locale === 'id' ? 'Masuk' : 'Login'}</button>
        </div>
      </form>
    </div>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
