function shelfBook(name, shelf) {
  if (shelf.length >= 3) {
    return;
  }
  shelf.unshift(name);
}

function unshelfBook(name, shelf) {
  for (i = 0; i < shelf.length; i ++) {
    if (shelf[i].title === name) {
      shelf.splice(i, 1);
      return;
    }
  }
}

function listTitles(shelf) {
  var titles = ""
  for (i = 0; i < shelf.length; i ++) {
    titles += `${shelf[i].title}`;
    if ((i + 1) < shelf.length) {
      titles += ", ";
    }
  }
  return titles;
}

function searchShelf(shelf, title) {
  for (i = 0; i < shelf.length; i ++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
