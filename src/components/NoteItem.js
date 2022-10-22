import React from 'react';
import NoteItemBody from './NoteItemBody';
import PropTypes from 'prop-types';

const NoteItem = ({
  title,
  note,
  date,
  archived,
  id,
  edit,
  onDeleteNote,
  onEditNote,
  editSubmitNote,
  onChecklistNote,
}) => {
  return (
    <div className="notes-item" id={id}>
      <NoteItemBody
        title={title}
        note={note}
        date={date}
        archived={archived}
        edit={edit}
        id={id}
        editSubmitNote={editSubmitNote}
        onDeleteNote={onDeleteNote}
        onEditNote={onEditNote}
        onChecklistNote={onChecklistNote}
      />
    </div>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  archived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  editSubmitNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onChecklistNote: PropTypes.func.isRequired,
};
export default NoteItem;
