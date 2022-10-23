import React from 'react';
import PropTypes from 'prop-types';
import { MdArchive, MdUnarchive } from 'react-icons/md';

const ChecklistNoteButton = ({ id, archived, onChecklistNote }) => {
  return archived === false ? (
    <MdArchive
      className="archive-icon note-button__effect"
      onClick={() => onChecklistNote(id)}
      title="Archive"
    />
  ) : (
    <MdUnarchive
      className="unarchive-icon note-button__effect"
      onClick={() => onChecklistNote(id)}
      title="Unarchive"
    />
  );
};

ChecklistNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onChecklistNote: PropTypes.func.isRequired,
};

export default ChecklistNoteButton;
