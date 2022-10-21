import React from 'react';
import ActiveNotes from './ActiveNotes';
import ArchivedNotes from './ArchivedNotes';
import ButtonInfo from './ButtonInfo';

const NoteList = ({
  notes,
  onDeleteNote,
  onEditNote,
  editSubmitNote,
  onChecklistNote,
}) => {
  return (
    <div>
      <ButtonInfo />
      <ActiveNotes
        notes={notes}
        onDeleteNote={onDeleteNote}
        onEditNote={onEditNote}
        editSubmitNote={editSubmitNote}
        onChecklistNote={onChecklistNote}
      />
      <ArchivedNotes
        notes={notes}
        onDeleteNote={onDeleteNote}
        onEditNote={onEditNote}
        editSubmitNote={editSubmitNote}
        onChecklistNote={onChecklistNote}
      />
    </div>
  );
};

export default NoteList;
