import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

const RegisterInput = (props) => {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  const matchPassword = () => {
    const match = password === confirmPassword ? true : false;
    return match;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.register({
      name,
      email,
      password,
    });
  };

  return (
    <div className="register-container">
      <form onSubmit={onSubmitHandler} className="register-input">
        <h2>{locale === 'id' ? 'REGISTRASI' : 'SIGN UP'}</h2>
        <input
          type="text"
          placeholder={locale === 'id' ? 'Nama' : 'Name'}
          value={name}
          onChange={handleNameChange}
          required
        />
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
        <input
          type="password"
          placeholder={
            locale === 'id' ? 'Konfirmasi Sandi' : 'Confirm Password'
          }
          value={confirmPassword}
          onChange={handleConfirmChange}
          required
        />
        <div className="register-button">
          {matchPassword() === true ? (
            <button disabled={!matchPassword()}>
              {locale === 'id' ? 'Registrasi ' : 'Register '}
            </button>
          ) : (
            <button disabled={!matchPassword()}>
              {locale === 'id'
                ? 'Password tidak cocok'
                : "Password didn't match "}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
