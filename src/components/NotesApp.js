import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
// import {
//   getInitialData,
//   deleteNote,
//   archiveNote,
//   editNote,
//   editSubmitNote,
// } from '../utils/index';
import Navigation from './Navigation';
import AddPage from '../pages/AddPage';
import ArchivedPage from '../pages/ArchivedPage';

const NotesApp = () => {
  return (
    <div className="notes-app">
      <header>
        <h1>Notes App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/archived" element={<ArchivedPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default NotesApp;
