import React from 'react';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

const NoteDetail = ({ title, createdAt, body }) => {
  console.log(title);
  return (
    <div className="notes-item__body-detailed">
      <article>
        <h1>{title}</h1>
        <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
        <p className="notes-item__note-detailed">{parser(String(body))}</p>
      </article>
    </div>
  );
};

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
