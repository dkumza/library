// form selectors
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll("input");
// MODAL
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector("#cancel");

// library selectors
const library = document.querySelector("#library-wrap");

const myLibrary = [
  // {
  //   title: "The Hobbit",
  //   author: "J. R. R. Tolkien",
  //   year: "1937-09-21",
  //   pages: 310,
  //   read: "Not Read",
  // },
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
});

// prevent for dublicating from array
function noDublicate() {
  const bookToRemove = document.querySelectorAll(".book");
  bookToRemove.forEach((book) => library.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

// create book DOM:
function createBook(item) {
  // create elements
  const book = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookYear = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookRead = document.createElement("button");
  const bookRemove = document.createElement("button");
  const bookStatus = document.createElement("div");

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

  bookStatus.textContent = "Status: ";
  bookStatus.classList.add("book-status");
  book.appendChild(bookStatus);

  if (item.read === "Read") {
    bookRead.textContent = item.read;
    bookRead.classList.add("status");
    bookStatus.appendChild(bookRead);
  } else {
    bookRead.textContent = item.read;
    bookRead.classList.add("status", "status-n");
    bookStatus.appendChild(bookRead);
  }

  bookRemove.textContent = "Remove";
  bookRemove.classList.add("btn", "btn-center", "remove-book");
  bookRemove.setAttribute("id", "cancel");
  book.appendChild(bookRemove);

  // remove book function
  bookRemove.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    library.removeChild(book);
    // noDublicate();
  });

  // change read status
  bookRead.addEventListener("click", () => {
    if (item.read === "Read") {
      item.read = "Not Read";
      bookRead.textContent = item.read;
      bookRead.classList.add("status-n");
    } else {
      item.read = "Read";
      bookRead.textContent = item.read;
      bookRead.classList.remove("status-n");
      bookRead.classList.add("status");
    }
  });
  library.appendChild(book);
  closeModal();
}

// MODAL
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
