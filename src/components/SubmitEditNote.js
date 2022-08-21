import React from 'react';

class SubmitEditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      note: props.note,
      archived: props.archived,
    };

    this.onChangeNoteEditHandler = this.onChangeNoteEditHandler.bind(this);
    this.onChangeTitleEditHandler = this.onChangeTitleEditHandler.bind(this);
    this.onSubmitEditHandler = this.onSubmitEditHandler.bind(this);
  }

  onChangeTitleEditHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onChangeNoteEditHandler(event) {
    this.setState(() => {
      return {
        note: event.target.value,
      };
    });
  }

  onSubmitEditHandler(event) {
    event.preventDefault();
    this.props.editSubmitNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEditHandler} className="notes-input__edit">
        <p>Title</p>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onChangeTitleEditHandler}
          required
        />
        <p>Description</p>
        <textarea
          rows="4"
          cols="50"
          name="note"
          placeholder="Type your note"
          value={this.state.note}
          onChange={this.onChangeNoteEditHandler}
        />
        <button type="submit">Edit Note</button>
      </form>
    );
  }
}
export default SubmitEditNote;
