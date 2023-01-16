let bookCollection = [];

// load book collection from local storage
if (localStorage.getItem('bookCollection')) {
  bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
}

function addBookToCollection(title, author) {
  const newBook = {
    id: Date.now(),
    title,
    author,
  };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  displayBooks();
}

function removeBookFromCollection(id) {
  bookCollection = bookCollection.filter((book) => book.id !== id);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  displayBooks();
}

const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('book-title').value;
  const authorName = document.getElementById('author-name').value;
  addBookToCollection(bookTitle, authorName);
});

function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  bookCollection.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.id = `book-${book.id}`;
    bookDiv.innerHTML = `
      <h2 class="author-name">${book.author}</h2>
      <h3 class="book-title">${book.title}</h3>
      <button class="remove-button" onClick="removeBookFromCollection(${book.id})" >Remove</button>
      <hr>
    `;
    bookList.appendChild(bookDiv);
  });
}

displayBooks();
