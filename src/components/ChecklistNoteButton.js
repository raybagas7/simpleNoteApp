import React from 'react';

const ChecklistNoteButton = ({ id, onChecklistNote }) => {
  return (
    <button
      className="note-button__effect notes-item__checklist"
      onClick={() => onChecklistNote(id)}
    >
      <span></span>
    </button>
  );
};

export default ChecklistNoteButton;
