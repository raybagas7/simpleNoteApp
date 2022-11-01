import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { addNote } from '../utils/index';
import { addNote } from '../utils/network-data';
import InputNote from '../components/InputNote';

function AddPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate('/');
  };

  return (
    <section>
      <InputNote addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
