import React from 'react';
// import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

const NoteDetail = ({ title, note, date }) => {
  return (
    <div className="notes-item__body-detailed">
      <article>
        <h1>{title}</h1>
        <p className="notes-item__date">{showFormattedDate(date)}</p>
        <p className="notes-item__note-detailed">{note}</p>
      </article>
    </div>
  );
};

export default NoteDetail;
