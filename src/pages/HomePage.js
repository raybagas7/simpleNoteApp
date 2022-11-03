import React from 'react';
import { Link } from 'react-router-dom';
import ActiveNotes from '../components/ActiveNotes';
import { GiArchiveResearch } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';

const HomePage = () => {
  const [loading, setLoading] = React.useState(true);
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
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

  if (loading) {
    return (
      <div className="notes-list__empty">
        <h3>Loading...</h3>
      </div>
    );
  }

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
        onArchiveNote={onArchiveNoteHandler}
      />
    </div>
  );
};

export default HomePage;
