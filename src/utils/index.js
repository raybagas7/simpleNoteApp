const getInitialData = () => [
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

export { getInitialData, showFormattedDate, showFormattedDateEdited };
