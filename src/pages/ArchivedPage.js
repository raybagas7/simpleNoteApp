import React from 'react';
import ArchivedNotes from '../components/ArchivedNotes';
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from '../utils/network-data';

const ArchivedPage = () => {
  const [loading, setLoading] = React.useState(true);
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
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

  if (loading) {
    return (
      <div className="notes-list__empty-archived">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div>
      <ArchivedNotes
        notes={notes}
        onDeleteNote={onDeleteNoteHandler}
        onUnarchiveNote={onUnarchiveNoteHandler}
      />
    </div>
  );
};

export default ArchivedPage;
