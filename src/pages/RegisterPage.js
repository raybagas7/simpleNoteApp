import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section>
      <RegisterInput register={onRegisterHandler} />
      <div className="back-to__login">
        <p>
          Sudah punya akun? <Link to={'/'}>Log in disini</Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
