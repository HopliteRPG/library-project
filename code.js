//Making Book Code

//Declare Variables

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


const deleteBookButton = document.createElement("button");

let idBookNumber = 0;






//Book Object Constructor

function Book(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

//Adds a Book to library
function addBookToLibrary(title,author,pages,readStatus){
  //Declaring Clone Variables
    const cloneBookHtml = bookHtml.cloneNode(true);
  
    const cloneBookNameP = bookNameP.cloneNode(true);
  
    const cloneBookAuthorP = bookAuthorP.cloneNode(true);
  
    const cloneBookPagesP = bookPagesP.cloneNode(true);
  
    const cloneBookReadP = bookReadP.cloneNode(true);

    const cloneDeleteBookButton = deleteBookButton.cloneNode(true);

    
  
  //Adds clone book and clone variables to topMainDiv
    topMainDiv.appendChild(cloneBookHtml);
  
    cloneBookHtml.appendChild(cloneBookNameP);
  
    cloneBookNameP.textContent = title;
  
    cloneBookHtml.appendChild(cloneBookAuthorP);
  
    cloneBookAuthorP.textContent = author;
  
    cloneBookHtml.appendChild(cloneBookPagesP);
  
    cloneBookPagesP.textContent = pages;
  
    cloneBookHtml.appendChild(cloneBookReadP);
  
    cloneBookReadP.textContent = readStatus;

    //Adding Id
    cloneBookHtml.setAttribute("id", idBookNumber);
    idBookNumber++;

    console.log(cloneBookHtml.id)


    //Delete button 
    cloneBookHtml.appendChild(cloneDeleteBookButton);
    cloneDeleteBookButton.innerText = "Clone Delete";
    cloneDeleteBookButton.classList.add("delete-book-button");

    cloneDeleteBookButton.addEventListener("click", () =>{
      let tempIdHolder = document.getElementById(cloneBookHtml.id)
      console.log(cloneBookHtml.id)
      tempIdHolder.remove();
    })
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


  