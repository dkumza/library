// form selectors
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll("input");

// library selectors
const library = document.querySelector("#library-wrap");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    year: "1937-09-21",
    pages: 310,
    read: "no",
  },
];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book(
    title.value,
    author.value,
    year.value,
    pages.value,
    read.value
  );
  if (
    newBook.author === "" ||
    newBook.title === "" ||
    newBook.pages === "" ||
    newBook.year === ""
  ) {
    alert("All fields must be filled out");
  } else myLibrary.push(newBook);
  inputs.forEach((input) => (input.value = ""));
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  noDublicate();
  console.log(myLibrary);
});

// prevent for dublicating from array
function noDublicate() {
  const bookToRemove = document.querySelectorAll(".book");
  bookToRemove.forEach((book) => library.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

function createBook(item) {
  // create elements
  const book = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookYear = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookRead = document.createElement("div");

  //   append elements
  book.setAttribute("id", myLibrary.indexOf(item));
  book.classList.add("book");

  bookTitle.textContent = item.title;
  bookTitle.classList.add("book-title");
  book.appendChild(bookTitle);

  bookAuthor.textContent = `Author: ${item.author}`;
  bookAuthor.classList.add("book-author");
  book.appendChild(bookAuthor);

  bookYear.textContent = `Year: ${item.year}`;
  bookYear.classList.add("book-year");
  book.appendChild(bookYear);

  bookPages.textContent = `Pages: ${item.pages}`;
  bookPages.classList.add("book-pages");
  book.appendChild(bookPages);

  bookRead.textContent = `Read: ${item.read}`;
  bookRead.classList.add("book-read");
  book.appendChild(bookRead);

  library.appendChild(book);
}
