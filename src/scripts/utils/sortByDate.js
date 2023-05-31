const sortByDate = ($a, $b) => {
  const dateA = new Date($a.querySelector('time').getAttribute('datetime'));
  const dateB = new Date($b.querySelector('time').getAttribute('datetime'));
  return dateB - dateA;
};

export default sortByDate;