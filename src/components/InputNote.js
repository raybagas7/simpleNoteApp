import React from 'react';

class InputNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      note: ' ',
      remain_char: 50,
    };

    this.onChangeNoteHandler = this.onChangeNoteHandler.bind(this);
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

  onChangeNoteHandler(event) {
    this.setState(() => {
      return {
        note: event.target.innerHTML,
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
        <h2>Add Note</h2>
        <form onSubmit={this.onSubmitNoteEventHandler} className="notes-input">
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
            onInput={this.onChangeNoteHandler}
          />
          <button type="submit">Add Note</button>
        </form>
      </>
    );
  }
}

export default InputNote;
