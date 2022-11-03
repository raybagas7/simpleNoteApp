import React from 'react';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const NoteDetail = ({ title, createdAt, body }) => {
  const { locale } = React.useContext(LocaleContext);
  const lang = locale === 'id' ? 'id-ID' : 'en-EN';
  return (
    <div className="notes-item__body-detailed">
      <article>
        <h1>{title}</h1>
        <p className="notes-item__date">{showFormattedDate(createdAt, lang)}</p>
        <div className="notes-item__note-detailed">{parser(body)}</div>
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
