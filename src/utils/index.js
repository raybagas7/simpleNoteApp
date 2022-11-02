let notes = [
  {
    id: 'notes-1',
    title: 'Babel',
    note: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    date: '2022-04-14T04:27:34.572Z',
    archived: false,
    edit: false,
  },
  {
    id: 'notes-2',
    title: 'Functional Component',
    note: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    date: '2022-04-14T04:27:34.572Z',
    archived: false,
    edit: false,
  },
  {
    id: 'notes-3',
    title: 'Modularization',
    note: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    date: '2022-04-14T04:27:34.572Z',
    archived: false,
    edit: false,
  },
  {
    id: 'notes-4',
    title: 'Lifecycle',
    note: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    date: '2022-04-14T04:27:34.572Z',
    archived: false,
    edit: false,
  },
  {
    id: 'notes-5',
    title: 'ESM',
    note: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    date: '2022-04-14T04:27:34.572Z',
    archived: false,
    edit: false,
  },
  {
    id: 'notes-6',
    title: 'Module Bundler',
    note: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    date: '2022-04-14T04:27:34.572Z',
    archived: false,
    edit: false,
  },
];

const getInitialData = () => {
  return notes;
};

const addNote = (noteData) => {
  if (noteData.note === '') {
    noteData.note = <i>Not Described</i>;
  }

  notes = [
    ...notes,
    {
      id: `notes-${+new Date()}`,
      title: noteData.title,
      note: noteData.note,
      date: +new Date(),
      archived: false,
      edit: false,
    },
  ];
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
    note = ' ';
  }
  const findNote = notes.findIndex((note) => note.id === id);
  const copyNotes = notes;
  const newNotesSubmitted = (copyNotes[findNote] = {
    id: id,
    title: title,
    note: note,
    date: +new Date(),
    archived: archived,
    edit: false,
  });

  return newNotesSubmitted;
};

const showFormattedDate = (date, lang) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    new Date(date).toLocaleDateString(lang, options) +
    ', ' +
    [
      new Date(date).getHours(),
      new Date(date).getMinutes(),
      new Date(date).getSeconds(),
    ].join(':')
  );
};

const getNote = (id) => {
  if (!id) {
    return null;
  }

  const filteredNotes = notes.filter((movie) => movie.id === id);

  if (!filteredNotes.length) {
    return null;
  }

  return filteredNotes[0];
};

const searchNotes = (keyword) => {
  const searchNotesActiveNotes = notes.filter(
    (note) => note.archived === false
  );
  const filterByName = searchNotesActiveNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return filterByName;
};

export {
  getInitialData,
  showFormattedDate,
  deleteNote,
  archiveNote,
  editNote,
  editSubmitNote,
  addNote,
  getNote,
  searchNotes,
};
