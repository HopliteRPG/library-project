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

}

function listOutLibrary(library){
    library.forEach(book => {
        console.log(book)
    });
}




listOutLibrary(myLibrary);


//modal test
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector(".show-dialog-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const bookPHolder = document.querySelector(".book_p_holder");
const bookNameInput = document.querySelector(".book_name_input")



  showBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  submitBtn.addEventListener("click", () => {
    bookPHolder.value = favDialog.returnValue;

  })
  
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
  