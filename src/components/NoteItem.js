import React from 'react';
import NoteItemBody from './NoteItemBody';

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

export default NoteItem;
