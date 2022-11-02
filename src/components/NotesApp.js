import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import ArchivedPage from '../pages/ArchivedPage';
import DetailPage from '../pages/DetailedPage';
import { Link } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import Navigation from './Navigation';
import LocaleContext from '../contexts/LocaleContext';

const NotesApp = () => {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState(
    localStorage.getItem('locale') || 'id'
  );

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';

      localStorage.setItem('locale', newLocale);

      return newLocale;
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);

    putAccessToken('');
  };

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  if (initializing) {
    return null;
  }

  return authedUser === null ? (
    <LocaleContext.Provider value={localeContextValue}>
      <div className="notes-app">
        <header>
          <h1 className="apps-name">
            <Link to="/">Notes App</Link>
          </h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </LocaleContext.Provider>
  ) : (
    <LocaleContext.Provider value={localeContextValue}>
      <div className="notes-app">
        <header>
          <h1 className="apps-name">
            <Link to="/">
              {locale === 'id'
                ? `Catatan ${authedUser.name}`
                : `${authedUser.name}'s Notes`}
            </Link>
          </h1>
          <Navigation logout={onLogout} name={authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/archived" element={<ArchivedPage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </LocaleContext.Provider>
  );
};

export default NotesApp;
