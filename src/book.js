function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
    return {
      name: name,
      age: age,
      pronouns: pronouns,
    };
}

function saveReview(review, reviews) {
  if (reviews.includes(review) === true) {
    return reviews;
  }
  return reviews.push(review);
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
}

// THIS FUNCTION IS FOR NOT HAVING THE PAGECOUNT VAR
// function editBook(ghoulBook) {
//   ghoulBook.pageCount = calculatePageCount(ghoulBook.title) * .75;
// }

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * .75;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
