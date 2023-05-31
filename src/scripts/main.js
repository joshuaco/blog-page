import humanizeDate from './utils/humanizeDate.js';
import sortByDate from './utils/sortByDate.js';

const humanizeArticlesDate = () => {
  const $dates = document.querySelectorAll('time');
  $dates.forEach(humanizeDate); // ARRAY-LIKE
};

const sortArticleByDate = () => {
  const $cards = document.querySelectorAll('.post-list .card');
  // Technique to convert an array-like object to an array
  const $cardsSorted = [...$cards].sort(sortByDate);
  const $postList = document.querySelector(".post-list");

  [...$postList.children].forEach($child => $child.remove());
  $postList.append(...$cardsSorted);
}

const main = () => {
  humanizeArticlesDate();
  sortArticleByDate();
};

main();
