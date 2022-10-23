import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import ArchivedPage from '../pages/ArchivedPage';
import DetailPage from '../pages/DetailedPage';
import { Link } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';

const NotesApp = () => {
  return (
    <div className="notes-app">
      <header>
        <h1 className="apps-name">
          <Link to="/">Notes App</Link>
        </h1>
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
  );
};

export default NotesApp;
