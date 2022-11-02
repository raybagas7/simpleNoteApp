import React from 'react';
import PropTypes from 'prop-types';
import { MdArchive, MdUnarchive } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';

const ChecklistNoteButton = ({
  id,
  archived,
  onArchiveNote,
  onUnarchiveNote,
}) => {
  const { locale } = React.useContext(LocaleContext);
  return archived === false ? (
    <MdArchive
      className="archive-icon note-button__effect"
      onClick={() => onArchiveNote(id)}
      title={locale === 'id' ? 'Arsipkan' : 'Archive'}
    />
  ) : (
    <MdUnarchive
      className="unarchive-icon note-button__effect"
      onClick={() => onUnarchiveNote(id)}
      title={locale === 'id' ? 'Aktifkan Catatan' : 'Unarchive'}
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
