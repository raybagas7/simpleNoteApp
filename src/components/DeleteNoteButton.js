import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContext';

const DeleteNoteButton = ({ id, onDeleteNote }) => {
  const { locale } = React.useContext(LocaleContext);
  return (
    <MdDeleteForever
      onClick={() => onDeleteNote(id)}
      className="delete-icon note-button__effect"
      title={locale === 'id' ? 'Hapus' : 'Delete'}
    />
  );
};

DeleteNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default DeleteNoteButton;
