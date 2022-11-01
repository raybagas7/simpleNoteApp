import React from 'react';
import {
  // getInitialData,
  // deleteNote,
  // archiveNote,
  editNote,
  editSubmitNote,
} from '../utils/index';
import { Link } from 'react-router-dom';
import ActiveNotes from '../components/ActiveNotes';
import { GiArchiveResearch } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  getActiveNotes,
  deleteNote,
  archiveNote,
  // unarchiveNote,
} from '../utils/network-data';

const HomePage = () => {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  const onDeleteNoteHandler = async (id) => {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    setNotes(data);
  };

  const onArchiveNoteHandler = async (id) => {
    await archiveNote(id);

    const { data } = await getActiveNotes();
    setNotes(data);
  };

  const onEditNoteHandler = (id) => {
    const newNotes = editNote(id);

    setNotes(newNotes);
  };

  const onSubmitEditNoteHandler = ({ id, title, note, archived }) => {
    const newNotesSubmitted = editSubmitNote(id, title, note, archived);
    setNotes(newNotesSubmitted);
  };

  return (
    <div>
      <Link to="/add">
        <div className="float-add">
          <AiOutlinePlus className="add-icon" title="Add Note" />
        </div>
      </Link>
      <Link to="/archived">
        <div className="float-archived">
          <GiArchiveResearch className="archived-icon" title="Archived Notes" />
        </div>
      </Link>

      <ActiveNotes
        notes={notes}
        onDeleteNote={onDeleteNoteHandler}
        onEditNote={onEditNoteHandler}
        editSubmitNote={onSubmitEditNoteHandler}
        onArchiveNote={onArchiveNoteHandler}
      />
    </div>
  );
};
// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getInitialData(),
//     };

//     this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
//     this.onEditNoteHandler = this.onEditNoteHandler.bind(this);
//     this.onSubmitEditNoteHandler = this.onSubmitEditNoteHandler.bind(this);
//     this.onChecklistNoteHandler = this.onChecklistNoteHandler.bind(this);
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
//         <Link to="/add">
//           <div className="float-add">
//             <AiOutlinePlus className="add-icon" title="Add Note" />
//           </div>
//         </Link>
//         <Link to="/archived">
//           <div className="float-archived">
//             <GiArchiveResearch
//               className="archived-icon"
//               title="Archived Notes"
//             />
//           </div>
//         </Link>

//         <ActiveNotes
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

export default HomePage;
