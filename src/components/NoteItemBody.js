import React from 'react';
// import SubmitEditNote from './SubmitEditNote';
import DeleteNoteButton from './DeleteNoteButton';
// import EditNoteButton from './EditNoteButton';
import ChecklistNoteButton from './ChecklistNoteButton';
import { showFormattedDate } from '../utils/index';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

const NoteItemBody = ({
  id,
  title,
  body,
  createdAt,
  archived,
  // editSubmitNote,
  onDeleteNote,
  // onEditNote,
  onArchiveNote,
  onUnarchiveNote,
}) => {
  return (
    <div className="notes-item__body">
      <article>
        <h3 className="notes-item__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
        <div className="notes-item__note">{parser(body)}</div>
        <div className="notes-item__body-button">
          <DeleteNoteButton id={id} onDeleteNote={onDeleteNote} />
          {/* <EditNoteButton id={id} onEditNote={onEditNote} /> */}
          <ChecklistNoteButton
            id={id}
            archived={archived}
            onArchiveNote={onArchiveNote}
            onUnarchiveNote={onUnarchiveNote}
          />
        </div>
      </article>
    </div>
  );
};

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  archived: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  // edit: PropTypes.bool.isRequired,
  // editSubmitNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  // onEditNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func,
  onUnarchiveNote: PropTypes.func,
};
export default NoteItemBody;
