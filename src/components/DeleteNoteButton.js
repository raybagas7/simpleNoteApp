import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

const DeleteNoteButton = ({ id, onDeleteNote }) => {
  return (
    <MdDeleteForever
      onClick={() => onDeleteNote(id)}
      className="delete-icon note-button__effect"
      title="Delete"
    />
  );
};

DeleteNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default DeleteNoteButton;
