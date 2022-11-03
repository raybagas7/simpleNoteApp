import React from 'react';
import { getNote } from '../utils/network-data';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';

const DetailedPage = () => {
  const { id } = useParams();
  const [note, setNote] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, [id]);

  if (note === null) {
    return <h1>Note not found!</h1>;
  }

  if (loading) {
    return null;
  }

  return (
    <section>
      <NoteDetail {...note} />
    </section>
  );
};

export default DetailedPage;
