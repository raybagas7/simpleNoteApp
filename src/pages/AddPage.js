import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/index';
import InputNote from '../components/InputNote';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/simpleNoteApp/');
  }

  return (
    <section>
      <InputNote addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
