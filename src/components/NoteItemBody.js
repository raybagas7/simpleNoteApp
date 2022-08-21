import React from 'react';
import SubmitEditNote from './SubmitEditNote';
import DeleteNoteButton from './DeleteNoteButton';
import EditNoteButton from './EditNoteButton';
import ChecklistNoteButton from './ChecklistNoteButton';
import { showFormattedDate } from '../utils/index';

const NoteItemBody = ({
  id,
  title,
  date,
  archived,
  note,
  edit,
  editSubmitNote,
  onDeleteNote,
  onEditNote,
  onChecklistNote,
}) => {
  return edit ? (
    <SubmitEditNote
      id={id}
      title={title}
      note={note}
      archived={archived}
      editSubmitNote={editSubmitNote}
    />
  ) : (
    <div className="notes-item__body">
      <h3 className="notes-item__title">{title}</h3>
      <p className="notes-item__date">{showFormattedDate(date)}</p>
      <p className="notes-item__note">{note}</p>
      <div className="notes-item__body-button">
        <DeleteNoteButton id={id} onDeleteNote={onDeleteNote} />
        <EditNoteButton id={id} onEditNote={onEditNote} />
        <ChecklistNoteButton id={id} onChecklistNote={onChecklistNote} />
      </div>
    </div>
  );
};

export default NoteItemBody;
