import React from 'react';

const DeleteNoteButton = ({ id, onDeleteNote }) => {
  return (
    <button
      className="note-item__delete note-button__effect"
      onClick={() => onDeleteNote(id)}
    >
      X
    </button>
  );
};

export default DeleteNoteButton;
