import React from 'react';
import InputNote from './InputNote';
import NoteList from './NoteList';
import {
  getInitialData,
  deleteNote,
  archiveNote,
  editNote,
  editSubmitNote,
} from '../utils/index';
import ButtonInfo from './ButtonInfo';

class NotesApp extends React.Component {
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
      <div className="notes-app">
        <h1>Notes App</h1>
        <h2>Add Note</h2>
        <InputNote addNotes={this.onAddNoteHandler} />
        <ButtonInfo />
        <NoteList
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

export default NotesApp;
