import React from 'react';
import ArchivedNotes from '../components/ArchivedNotes';
import {
  // getInitialData,
  // deleteNote,
  // archiveNote,
  editNote,
  editSubmitNote,
} from '../utils/index';

import {
  getArchivedNotes,
  deleteNote,
  // archiveNote,
  unarchiveNote,
} from '../utils/network-data';

const ArchivedPage = () => {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  const onDeleteNoteHandler = async (id) => {
    await deleteNote(id);

    const { data } = await getArchivedNotes();
    setNotes(data);
  };

  const onUnarchiveNoteHandler = async (id) => {
    await unarchiveNote(id);

    const { data } = await getArchivedNotes();
    setNotes(data);
  };

  const onEditNoteHandler = (id) => {
    const newNotes = editNote(id);

    this.setState({ newNotes });
  };

  const onSubmitEditNoteHandler = ({ id, title, note, archived }) => {
    const newNotesSubmitted = editSubmitNote(id, title, note, archived);
    this.setState({ newNotesSubmitted });
  };

  return (
    <div>
      <ArchivedNotes
        notes={notes}
        onDeleteNote={onDeleteNoteHandler}
        onEditNote={onEditNoteHandler}
        editSubmitNote={onSubmitEditNoteHandler}
        onUnarchiveNote={onUnarchiveNoteHandler}
      />
    </div>
  );
};

// class ArchivedPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getInitialData(),
//     };

//     this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
//     this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
//     this.onEditNoteHandler = this.onEditNoteHandler.bind(this);
//     this.onSubmitEditNoteHandler = this.onSubmitEditNoteHandler.bind(this);
//     this.onChecklistNoteHandler = this.onChecklistNoteHandler.bind(this);
//   }

//   onAddNoteHandler({ title, note }) {
//     if (note === '') {
//       note = <i>Not Described</i>;
//     }

//     this.setState((prevState) => {
//       return {
//         notes: [
//           ...prevState.notes,
//           {
//             id: +new Date(),
//             title,
//             note,
//             date: +new Date(),
//             archived: false,
//             edit: false,
//           },
//         ],
//       };
//     });
//   }

//   onDeleteNoteHandler = (id) => {
//     deleteNote(id);

//     this.setState(() => {
//       return {
//         notes: getInitialData(),
//       };
//     });
//   };

//   onChecklistNoteHandler = (id) => {
//     const newNotes = archiveNote(id);

//     this.setState({ newNotes });
//   };

//   onEditNoteHandler = (id) => {
//     const newNotes = editNote(id);

//     this.setState({ newNotes });
//   };

//   onSubmitEditNoteHandler({ id, title, note, archived }) {
//     const newNotesSubmitted = editSubmitNote(id, title, note, archived);
//     this.setState({ newNotesSubmitted });
//   }

//   render() {
//     return (
//       <div>
//         <ArchivedNotes
//           notes={this.state.notes}
//           onDeleteNote={this.onDeleteNoteHandler}
//           onEditNote={this.onEditNoteHandler}
//           editSubmitNote={this.onSubmitEditNoteHandler}
//           onChecklistNote={this.onChecklistNoteHandler}
//         />
//       </div>
//     );
//   }
// }

export default ArchivedPage;
