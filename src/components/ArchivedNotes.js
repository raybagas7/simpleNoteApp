import React from 'react';
import NoteItem from './NoteItem';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArchivedNotesWrapper = ({
  notes,
  editSubmitNote,
  onDeleteNote,
  onEditNote,
  onUnarchiveNote,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  return (
    <ArchivedNotes
      onSearch={changeSearchParams}
      activeKeyword={title}
      notes={notes}
      onDeleteNote={onDeleteNote}
      onEditNote={onEditNote}
      editSubmitNote={editSubmitNote}
      onUnarchiveNote={onUnarchiveNote}
    />
  );
};
class ArchivedNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.activeKeyword ? props.activeKeyword : '',
    };
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this);
  }

  onSearchNotesHandler = () => {
    const activeNotes = this.props.notes.filter(
      (notesearch) => notesearch.archived === true
    );
    const filterByName = activeNotes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return filterByName;
  };

  onSearchChangeHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });

    this.props.onSearch(event.target.value);
  }

  render() {
    return this.onSearchNotesHandler().length === 0 ? (
      <div className="notes-list__empty-archived">
        <h3>Archived Notes</h3>
        <form className="search-note ">
          <input
            type="text"
            placeholder="Search by title"
            value={this.state.search}
            onChange={this.onSearchChangeHandler}
          />
        </form>
        <p>No Archived Notes</p>
      </div>
    ) : (
      <div className="notes-list__contain-archived">
        <h3>Archived Notes</h3>
        <form className="search-note ">
          <input
            type="text"
            placeholder="Search by title"
            value={this.state.search}
            onChange={this.onSearchChangeHandler}
          />
        </form>
        <div className="notes-list">
          {this.onSearchNotesHandler().map((note) => (
            <NoteItem
              key={note.id}
              id={note.note}
              edit={note.edit}
              onDeleteNote={this.props.onDeleteNote}
              onEditNote={this.props.onEditNote}
              editSubmitNote={this.props.editSubmitNote}
              onUnarchiveNote={this.props.onUnarchiveNote}
              {...note}
            />
          ))}
        </div>
      </div>
    );
  }
}

ArchivedNotesWrapper.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  editSubmitNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onUnarchiveNote: PropTypes.func.isRequired,
};

ArchivedNotes.propTypes = {
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  editSubmitNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onEditNote: PropTypes.func,
  onUnarchiveNote: PropTypes.func,
};
export default ArchivedNotesWrapper;
