import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import ArchivedPage from '../pages/ArchivedPage';
import DetailPage from '../pages/DetailedPage';
import { Link } from 'react-router-dom';

const NotesApp = () => {
  return (
    <div className="notes-app">
      <header>
        <h1 className="apps-name">
          <Link to="/simpleNoteApp/">Notes App</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/simpleNoteApp/" element={<HomePage />} />
          <Route path="/simpleNoteApp/add" element={<AddPage />} />
          <Route path="/simpleNoteApp/archived" element={<ArchivedPage />} />
          <Route path="/simpleNoteApp/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default NotesApp;
