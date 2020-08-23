function createLibrary(name) {
  var fantasy = [];
  var fiction = [];
  var nonFiction = [];
  return {
    name: name,
    shelves: {fantasy, fiction, nonFiction}
  };
}

function addBook(library, book) {
  if (book.genre == 'fantasy') {
    library.shelves.fantasy.push(book);
  }
  else if (book.genre == 'fiction') {
    library.shelves.fiction.push(book);
  }
  else if (book.genre == 'nonFiction') {
    library.shelves.nonFiction.push(book);
  }
}

function checkoutBook(library, title) {
  for (var i = 0; i < library.shelves.fiction.length; i ++) {
    if (title == library.shelves.fiction[i].title) {
      var result = `You have now checked out ${title} from the ${library.name}`;
      console.log(result);
      library.shelves.fiction.splice(i, 1);
      return result;
    }
  }
  for (var i = 0; i < library.shelves.nonFiction.length; i ++) {
    if (title == library.shelves.nonFiction[i].title) {
      var result = `You have now checked out ${title} from the ${library.name}`;
      console.log(result);
      library.shelves.fiction.splice(i, 1);
      return result;
    }
  }
  for (var i = 0; i < library.shelves.fantasy.length; i ++) {
    if (title == library.shelves.fantasy[i].title) {
      var result = `You have now checked out ${title} from the ${library.name}`;
      console.log(result);
      library.shelves.fiction.splice(i, 1);
      return result;
    }
  }
  var error = `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  return error;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
