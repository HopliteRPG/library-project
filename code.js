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
const output = document.querySelector("output");
const closeBtn = dialog.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const bookNameInput = dialog.querySelector(".book_name_input")



  showBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    output.innerHTML = bookNameInput.value
  });


  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  
  })