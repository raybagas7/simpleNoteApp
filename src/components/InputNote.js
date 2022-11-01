import React from 'react';
import PropTypes from 'prop-types';

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
          <h2>Add Note</h2>
          <p className="remaining-characters">
            Remaining characters:{' '}
            {this.state.remain_char - this.state.title.length}
          </p>
          <input
            type="text"
            placeholder="Title"
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
          <button type="submit">Add Note</button>
        </form>
      </>
    );
  }
}

InputNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default InputNote;
