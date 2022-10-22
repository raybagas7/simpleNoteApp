import React from 'react';
import {
  getInitialData,
  deleteNote,
  archiveNote,
  editNote,
  editSubmitNote,
} from '../utils/index';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import ActiveNotes from '../components/ActiveNotes';

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

class HomePage extends React.Component {
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
        <Link to="/add">
          <div class="float-add"></div>
        </Link>
        <Link to="/archived">
          <div class="float-archived"></div>
        </Link>

        <ActiveNotes
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

export default HomePageWrapper;
