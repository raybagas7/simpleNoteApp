import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const RegisterInput = (props) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { locale } = React.useContext(LocaleContext);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
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
        <h2>{locale === 'id' ? 'REGISTRASI? ' : 'SIGN UP '}</h2>
        <input
          type="text"
          placeholder={locale === 'id' ? 'Nama' : 'Name'}
          value={name}
          onChange={nameChangeHandler}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailChangeHandler}
          required
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={passwordChangeHandler}
          required
        />
        <div className="register-button">
          <button>{locale === 'id' ? 'Registrasi ' : 'Register '}</button>
        </div>
      </form>
    </div>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
