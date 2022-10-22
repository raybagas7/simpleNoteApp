import React from 'react';
import NoteItem from './NoteItem';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ActiveNotesWrapper = ({
  notes,
  editSubmitNote,
  onDeleteNote,
  onEditNote,
  onChecklistNote,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  return (
    <ActiveNotes
      onSearch={changeSearchParams}
      activeKeyword={title}
      notes={notes}
      onDeleteNote={onDeleteNote}
      onEditNote={onEditNote}
      editSubmitNote={editSubmitNote}
      onChecklistNote={onChecklistNote}
    />
  );
};
class ActiveNotes extends React.Component {
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
      (notesearch) => notesearch.archived === false
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
      <div className="notes-list__empty">
        <h3>Active Notes</h3>
        <form className="search-note ">
          <input
            type="text"
            placeholder="Search by title"
            value={this.state.search}
            onChange={this.onSearchChangeHandler}
          />
        </form>
        <p>No Active Notes</p>
      </div>
    ) : (
      <>
        <div className="notes-list__contain-active">
          <h3>Active Notes</h3>
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
                onChecklistNote={this.props.onChecklistNote}
                {...note}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

ActiveNotesWrapper.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  editSubmitNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onChecklistNote: PropTypes.func.isRequired,
};
export default ActiveNotesWrapper;
