import React from 'react';
import PropTypes from 'prop-types';
import { MdModeEdit } from 'react-icons/md';

const EditNoteButton = ({ id, onEditNote }) => {
  return (
    <MdModeEdit
      className="edit-icon note-button__effect"
      onClick={() => onEditNote(id)}
      title="Edit"
    />
  );
};

EditNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onEditNote: PropTypes.func.isRequired,
};

export default EditNoteButton;
