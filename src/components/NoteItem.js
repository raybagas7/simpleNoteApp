import React from 'react';
import NoteItemBody from './NoteItemBody';
import PropTypes from 'prop-types';

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onDeleteNote,
  onArchiveNote,
  onUnarchiveNote,
}) => {
  return (
    <div className="notes-item" id={id}>
      <NoteItemBody
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        id={id}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        onUnarchiveNote={onUnarchiveNote}
      />
    </div>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  archived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func,
  onUnarchiveNote: PropTypes.func,
};
export default NoteItem;
