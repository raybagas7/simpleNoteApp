import React from 'react';

class InputNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      note: '',
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
        note: event.target.value,
      };
    });
  }

  onSubmitNoteEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <>
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
          <textarea
            rows="4"
            cols="50"
            name="note"
            placeholder="Type your note"
            value={this.state.note}
            onChange={this.onChangeNoteHandler}
          />
          <button type="submit">Add Note</button>
        </form>
      </>
    );
  }
}

export default InputNote;