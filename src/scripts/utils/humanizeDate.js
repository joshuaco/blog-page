import humanize from './humanize.js';
import capitalize from './capitalize.js';

const humanizeDate = ($date) => {
  const dateTime = $date.dateTime;
  const humanizedDate = humanize(dateTime);
  $date.textContent = capitalize(humanizedDate);
};

export default humanizeDate;
