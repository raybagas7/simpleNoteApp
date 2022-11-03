import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import { MdGTranslate } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';
import ThemeButton from '../components/ThemeButton';

const RegisterPage = () => {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section>
      <div className="float-translate" onClick={toggleLocale}>
        <MdGTranslate
          className="translate-icon"
          title={locale === 'id' ? 'English' : 'Indonesia'}
        />
      </div>
      <ThemeButton />
      <RegisterInput register={onRegisterHandler} />
      <div className="back-to__login">
        <p>
          {locale === 'id'
            ? 'Sudah memiliki akun? '
            : 'You already have an account? '}
          <Link to={'/'} className="link-login">
            <span>{locale === 'id' ? 'Masuk disini. ' : 'Login here. '}</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
