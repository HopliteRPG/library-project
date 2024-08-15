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
  myLibrary.push(new Book(title, author,pages,readStatus))
  listOutLibrary(myLibrary);

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


  })
  



  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
  })

