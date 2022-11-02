import React from 'react';
import NoteItem from './NoteItem';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const ActiveNotesWrapper = ({
  notes,
  editSubmitNote,
  onDeleteNote,
  onEditNote,
  onArchiveNote,
}) => {
  const { locale } = React.useContext(LocaleContext);
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
      editSubmitNote={editSubmitNote}
      onDeleteNote={onDeleteNote}
      onEditNote={onEditNote}
      onArchiveNote={onArchiveNote}
      locale={locale}
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
        <h3>{this.props.locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h3>
        <form className="search-note ">
          <input
            type="text"
            placeholder={
              this.props.locale === 'id'
                ? 'Cari berdasarkan judul'
                : 'Search by title'
            }
            value={this.state.search}
            onChange={this.onSearchChangeHandler}
          />
        </form>
        <p>
          {this.props.locale === 'id'
            ? 'Tidak Ada Catatan Aktif'
            : 'No Active Notes'}
        </p>
      </div>
    ) : (
      <>
        <div className="notes-list__contain-active">
          <h3>
            {this.props.locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}
          </h3>
          <form className="search-note ">
            <input
              type="text"
              placeholder={
                this.props.locale === 'id'
                  ? 'Cari berdasarkan judul'
                  : 'Search by title'
              }
              value={this.state.search}
              onChange={this.onSearchChangeHandler}
            />
          </form>
          <div className="notes-list">
            {this.onSearchNotesHandler().map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                // edit={note.edit}
                onDeleteNote={this.props.onDeleteNote}
                onEditNote={this.props.onEditNote}
                editSubmitNote={this.props.editSubmitNote}
                onArchiveNote={this.props.onArchiveNote}
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
  onArchiveNote: PropTypes.func.isRequired,
};

ActiveNotes.propTypes = {
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  editSubmitNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
};
export default ActiveNotesWrapper;
