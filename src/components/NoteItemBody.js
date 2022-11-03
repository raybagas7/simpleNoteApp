import React from 'react';
import DeleteNoteButton from './DeleteNoteButton';
import ChecklistNoteButton from './ChecklistNoteButton';
import { showFormattedDate } from '../utils/index';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const NoteItemBody = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onDeleteNote,
  onArchiveNote,
  onUnarchiveNote,
}) => {
  const { locale } = React.useContext(LocaleContext);
  const lang = locale === 'id' ? 'id-ID' : 'en-EN';
  return (
    <div className="notes-item__body">
      <article>
        <h3 className="notes-item__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p className="notes-item__date">{showFormattedDate(createdAt, lang)}</p>
        <div className="notes-item__note">{parser(body)}</div>
        <div className="notes-item__body-button">
          <DeleteNoteButton id={id} onDeleteNote={onDeleteNote} />
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
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func,
  onUnarchiveNote: PropTypes.func,
};
export default NoteItemBody;
