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
// const book = document.querySelector(".book");
// const bookTitle = document.querySelector(".title");
// const bookAuthor = document.querySelector(".author");
// const bookYear = document.querySelector(".year");
// const bookPages = document.querySelector(".pages");
// const bookRead = document.querySelector(".read");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: "1937 - 09 - 21",
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

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

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

  console.log(myLibrary);
}
