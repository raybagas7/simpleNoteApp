import React from 'react';
import PropTypes from 'prop-types';

const LoginInput = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

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
        <h2>MASUK</h2>
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
          <button>Masuk</button>
        </div>
      </form>
    </div>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
