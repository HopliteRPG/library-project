const addBookBtn = document.querySelector(".add-book-btn");

const hobbit = new Book('The Hobbit', 'JRR Tolkein','300','read')

let myLibrary = [hobbit];

function Book(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title,author,pages,readStatus){
    title = prompt("enter title");
    author = prompt("enter an author");
    pages = prompt("enter the amount of pages");
    readStatus = prompt("have you read it");
    let addNewBook = new Book(title,author,pages,readStatus);
    myLibrary.push(addNewBook);
    listOutLibrary(myLibrary);
}

function listOutLibrary(library){
    library.forEach(book => {
        console.log(book)
    });
}




listOutLibrary(myLibrary);
