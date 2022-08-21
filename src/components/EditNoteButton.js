import React from 'react';

const EditNoteButton = ({ id, onEditNote }) => {
  return (
    <button
      className="notes-item__edit  note-button__effect"
      onClick={() => onEditNote(id)}
    >
      E
    </button>
  );
};

export default EditNoteButton;
