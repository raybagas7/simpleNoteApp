import React from 'react';
import PropTypes from 'prop-types';
import { MdArchive, MdUnarchive } from 'react-icons/md';

const ChecklistNoteButton = ({
  id,
  archived,
  onArchiveNote,
  onUnarchiveNote,
}) => {
  return archived === false ? (
    <MdArchive
      className="archive-icon note-button__effect"
      onClick={() => onArchiveNote(id)}
      title="Archive"
    />
  ) : (
    <MdUnarchive
      className="unarchive-icon note-button__effect"
      onClick={() => onUnarchiveNote(id)}
      title="Unarchive"
    />
  );
};

ChecklistNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchiveNote: PropTypes.func,
  onUnarchiveNote: PropTypes.func,
};

export default ChecklistNoteButton;
