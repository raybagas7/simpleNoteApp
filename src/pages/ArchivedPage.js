import React from 'react';
import ArchivedNotes from '../components/ArchivedNotes';
import {
  getInitialData,
  deleteNote,
  archiveNote,
  editNote,
  editSubmitNote,
} from '../utils/index';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const ArchivedPageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <ArchivedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onEditNoteHandler = this.onEditNoteHandler.bind(this);
    this.onSubmitEditNoteHandler = this.onSubmitEditNoteHandler.bind(this);
    this.onChecklistNoteHandler = this.onChecklistNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, note }) {
    if (note === '') {
      note = <i>Not Described</i>;
    }

    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            note,
            date: +new Date(),
            archived: false,
            edit: false,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler = (id) => {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getInitialData(),
      };
    });
  };

  onChecklistNoteHandler = (id) => {
    const newNotes = archiveNote(id);

    this.setState({ newNotes });
  };

  onEditNoteHandler = (id) => {
    const newNotes = editNote(id);

    this.setState({ newNotes });
  };

  onSubmitEditNoteHandler({ id, title, note, archived }) {
    const newNotesSubmitted = editSubmitNote(id, title, note, archived);
    this.setState({ newNotesSubmitted });
  }

  render() {
    return (
      <div>
        <ArchivedNotes
          notes={this.state.notes}
          onDeleteNote={this.onDeleteNoteHandler}
          onEditNote={this.onEditNoteHandler}
          editSubmitNote={this.onSubmitEditNoteHandler}
          onChecklistNote={this.onChecklistNoteHandler}
        />
      </div>
    );
  }
}

ArchivedPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivedPageWrapper;
