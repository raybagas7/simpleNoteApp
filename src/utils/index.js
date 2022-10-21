let notes = [
  {
    id: 1,
    title: 'Example1',
    note: "You can try to delete, edit, or move it to 'Archived Notes' by checklist it to the bottom",
    date: '2022-08-10T04:27:34.572Z',
    archived: false,
    edit: false,
  },
  {
    id: 2,
    title: 'Example2',
    note: "You can try to delete, edit, or move it to 'Active Notes' by undo it to the top",
    date: '2022-08-10T04:27:34.572Z',
    archived: true,
    edit: false,
  },
];

const getInitialData = () => {
  return notes;
};

const addNote = ({ title, note }) => {
  if (note === '') {
    note = <i>Not Described</i>;
  }

  const newNotes = [
    ...notes,
    {
      id: +new Date(),
      title,
      note,
      date: +new Date(),
      archived: false,
      edit: false,
    },
  ];

  return newNotes;
};

const deleteNote = (id) => {
  notes = notes.filter((note) => note.id !== id);
};

const archiveNote = (id) => {
  const findNote = notes.findIndex((note) => note.id === id);
  const copyNotes = notes;
  const newNotes = (copyNotes[findNote].archived =
    !copyNotes[findNote].archived);
  return newNotes;
};

const editNote = (id) => {
  const findNote = notes.findIndex((note) => note.id === id);
  const copyNotes = notes;
  const newNotes = (copyNotes[findNote].edit = true);
  return newNotes;
};

const editSubmitNote = (id, title, note, archived) => {
  if (note === '') {
    note = <i>Not Described</i>;
  }
  const findNote = notes.findIndex((note) => note.id === id);
  const copyNotes = notes;
  const newNotesSubmitted = (copyNotes[findNote] = {
    id: id,
    title: title,
    note: note,
    date: new Date(),
    archived: archived,
    edit: false,
  });

  return newNotesSubmitted;
};

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    new Date(date).toLocaleDateString('id-ID', options) +
    ', ' +
    [
      new Date(date).getHours(),
      new Date(date).getMinutes(),
      new Date(date).getSeconds(),
    ].join(':')
  );
};

const showFormattedDateEdited = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    'Telah diedit pada: ' +
    new Date(date).toLocaleDateString('id-ID', options) +
    ', ' +
    [
      new Date(date).getHours(),
      new Date(date).getMinutes(),
      new Date(date).getSeconds(),
    ].join(':')
  );
};

export {
  getInitialData,
  showFormattedDate,
  showFormattedDateEdited,
  deleteNote,
  archiveNote,
  editNote,
  editSubmitNote,
  addNote,
};
