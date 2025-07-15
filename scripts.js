const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function () {
        return (`${this.title} by ${this.author}, ${pages} pages, ${this.read}`);
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);

function createBookTable(myLibrary) {
    myLibrary.forEach(book => {
        // Select the <tbody> element
        const tableBody = document.querySelector("#library-table tbody");

        // Create a new row
        const row = document.createElement("tr");

        // Create and add 4 cells (title, author, pages, read)
        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;

        const pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;

        const readCell = document.createElement("td");
        readCell.textContent = book.read;

        // Append all cells to the row
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

createBookTable(myLibrary);

const dialog = document.querySelector("dialog");

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

document.getElementById("addBook").addEventListener("click", openDialog);
document.getElementById("cancel").addEventListener("click", closeDialog);

const submit = document.getElementById('submit');

function submitBook() {
    
}

submit.addEventListener("click", addBookToLibrary);