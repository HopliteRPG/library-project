//Making Book Code

//Add delete button
const topMainDiv = document.querySelector(".top-main-div");


const bookHtml = document.createElement("div");
bookHtml.classList.add("book-div");

const bookNameP = document.createElement("p");
bookNameP.classList.add("bookNameP");

const bookAuthorP = document.createElement("p");
bookAuthorP.classList.add("bookAuthorP");

const bookPagesP = document.createElement("p");
bookPagesP.classList.add("bookPagesP");

const bookReadP = document.createElement("p");
bookReadP.classList.add("bookReadP");







/////////////////////////
let myLibrary = [];


function Book(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title,author,pages,readStatus){
  myLibrary.push(new Book(title, author,pages,readStatus))
  listOutLibrary(myLibrary);

    const cloneBookHtml = bookHtml.cloneNode(true);
  
    const cloneBookNameP = bookNameP.cloneNode(true);
  
    const cloneBookAuthorP = bookAuthorP.cloneNode(true);
  
    const cloneBookPagesP = bookPagesP.cloneNode(true);
  
    const cloneBookReadP = bookReadP.cloneNode(true);
    
  
  
    topMainDiv.appendChild(cloneBookHtml);
  
    cloneBookHtml.appendChild(cloneBookNameP);
  
    cloneBookNameP.textContent = title;
  
    cloneBookHtml.appendChild(cloneBookAuthorP);
  
    cloneBookAuthorP.textContent = author;
  
    cloneBookHtml.appendChild(cloneBookPagesP);
  
    cloneBookPagesP.textContent = pages;
  
    cloneBookHtml.appendChild(cloneBookReadP);
  
    cloneBookReadP.textContent = readStatus;
  
  
  }


function listOutLibrary(library){
    library.forEach(book => {
        console.log(book)
    });
}


//Dialong and Modal Code 
  const dialog = document.querySelector("dialog");
  const showBtn = document.querySelector(".show-dialog-btn");
  const output = document.querySelector("output");
  const closeBtn = document.querySelector(".close-btn");
  const submitBtn = document.querySelector(".submit-btn");
  const form = document.querySelector("form");



  showBtn.addEventListener("click", () => {
    dialog.showModal();
  });



  form.addEventListener("submit",(event) => {
    event.preventDefault();
    const formData = new FormData(form);
    addBookToLibrary(formData.get("book_name"),formData.get("author_name"),formData.get("pages_number"),formData.get("read_status"));

    dialog.close();
  });
  



  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
  });


  