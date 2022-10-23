import React from 'react';
import SubmitEditNote from './SubmitEditNote';
import DeleteNoteButton from './DeleteNoteButton';
import EditNoteButton from './EditNoteButton';
import ChecklistNoteButton from './ChecklistNoteButton';
import { showFormattedDate } from '../utils/index';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

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
      <article>
        <h3 className="notes-item__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p className="notes-item__date">{showFormattedDate(date)}</p>
        <div className="notes-item__note">{parser(note)}</div>
        <div className="notes-item__body-button">
          <DeleteNoteButton id={id} onDeleteNote={onDeleteNote} />
          <EditNoteButton id={id} onEditNote={onEditNote} />
          <ChecklistNoteButton
            id={id}
            archived={archived}
            onChecklistNote={onChecklistNote}
          />
        </div>
      </article>
    </div>
  );
};

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  archived: PropTypes.bool.isRequired,
  note: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  editSubmitNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onChecklistNote: PropTypes.func.isRequired,
};
export default NoteItemBody;
