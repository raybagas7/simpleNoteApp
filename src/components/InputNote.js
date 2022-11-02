import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const InputNoteWrapper = ({ addNote }) => {
  const { locale } = React.useContext(LocaleContext);

  return <InputNote locale={locale} addNote={addNote} />;
};

class InputNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ' ',
      remain_char: 50,
    };

    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    this.onChangeTilteHandler = this.onChangeTilteHandler.bind(this);
    this.onSubmitNoteEventHandler = this.onSubmitNoteEventHandler.bind(this);
  }

  onChangeTilteHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onChangeBodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitNoteEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitNoteEventHandler} className="notes-input">
          <h2>{this.props.locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</h2>
          <p className="remaining-characters">
            {this.props.locale === 'id'
              ? 'Karakter tersisa: '
              : 'Remaining characters: '}

            {this.state.remain_char - this.state.title.length}
          </p>
          <input
            type="text"
            placeholder={this.props.locale === 'id' ? 'Judul' : 'Title'}
            value={this.state.title}
            onChange={this.onChangeTilteHandler}
            maxLength={this.state.remain_char}
            required
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Type note...."
            contentEditable
            required
            onInput={this.onChangeBodyHandler}
          />
          <button type="submit">
            {this.props.locale === 'id' ? 'Tambahkan Catatan' : 'Add Note'}
          </button>
        </form>
      </>
    );
  }
}

InputNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default InputNoteWrapper;
