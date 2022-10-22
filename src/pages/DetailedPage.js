import React from 'react';
import { getNote } from '../utils/index';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailedPage id={String(id)} />;
}

class DetailedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === null) {
      return <h1>Note not found!</h1>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
