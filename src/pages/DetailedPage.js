import React from 'react';
import { getNote } from '../utils/network-data';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
// import PropTypes from 'prop-types';

// function DetailPageWrapper() {
//   const { id } = useParams();
//   return <DetailedPage id={String(id)} />;
// }

const DetailedPage = (props) => {
  const { id } = useParams();
  const [note, setNote] = React.useState({});

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  if (note === null) {
    return <h1>Note not found!</h1>;
  }

  return (
    <section>
      <NoteDetail {...note} />
    </section>
  );
};

// DetailedPage.propTypes = {
//   id: PropTypes.string.isRequired,
// };
export default DetailedPage;
