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
  const $postList = document.querySelector('.post-list');

  [...$postList.children].forEach(($child) => $child.remove());
  $postList.append(...$cardsSorted);
};

const addClassToCards = () => {
  const $postList = document.querySelectorAll('.post-list')[0];
  const $cards = [...$postList.children];
  const $extendedCards = $cards.filter((_, index) => (index + 1) % 4 === 0);
  const $reversedCards = $cards.filter((_, index) => (index + 1) % 8 == 0);

  $extendedCards.forEach(($card) => {
    $card.classList.add('card-extended');
  });

  $reversedCards.forEach(($card) => {
    $card.classList.add('card-reversed');
  });
};

const main = () => {
  humanizeArticlesDate();
  sortArticleByDate();
  addClassToCards();
};

main();
