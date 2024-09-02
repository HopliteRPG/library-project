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

const bookReadCheckbox = document.createElement("input");
bookReadCheckbox.setAttribute("type", "checkbox");
bookReadCheckbox.classList.add("bookReadCheckbox");

const bookReadP = document.createElement("p");
bookReadP.classList.add("bookReadP");




const deleteBookButton = document.createElement("button");

let myLibrary = [];

let idBookNumber = 0;






//Book Object Constructor

function Book(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

//If its on it displays Read if not it displays Not Read
function readOrNot(readStatus,cloneBookReadCheckbox){
    if (readStatus === "on"){
      cloneBookReadCheckbox.checked = true;
      return "Read"
    }

    else {
      return "Not Read"
    }
  };



//Adds a Book to library
function addBookToLibrary(tempBook){
  
  //Adding tempBookObj to array
  myLibrary.push(tempBook);
  console.log(myLibrary);






  //Declaring Clone Variables
    const cloneBookHtml = bookHtml.cloneNode(true);
  
    const cloneBookNameP = bookNameP.cloneNode(true);
  
    const cloneBookAuthorP = bookAuthorP.cloneNode(true);
  
    const cloneBookPagesP = bookPagesP.cloneNode(true);

    const cloneBookReadCheckbox = bookReadCheckbox.cloneNode(true);
  
    const cloneBookReadP = bookReadP.cloneNode(true);

    const cloneDeleteBookButton = deleteBookButton.cloneNode(true);

    
  
  //Adds clone book and clone variables to topMainDiv
    topMainDiv.appendChild(cloneBookHtml);
  
    cloneBookHtml.appendChild(cloneBookNameP);
  
    cloneBookNameP.textContent = tempBook.title;
  
    cloneBookHtml.appendChild(cloneBookAuthorP);
  
    cloneBookAuthorP.textContent = tempBook.author;
  
    cloneBookHtml.appendChild(cloneBookPagesP);
  
    cloneBookPagesP.textContent = tempBook.pages;

    cloneBookHtml.appendChild(cloneBookReadCheckbox);
  
    cloneBookHtml.appendChild(cloneBookReadP);
    tempBook.readStatus = readOrNot(tempBook.readStatus, cloneBookReadCheckbox)
  
    cloneBookReadP.textContent = tempBook.readStatus;





    //When Checkbox is clicked the text will change using the prototype
    cloneBookReadCheckbox.addEventListener("change", function(){    
      if(cloneBookReadCheckbox.checked){
        tempBook.readStatus = "Read"
        cloneBookReadP.innerText = tempBook.readStatus;
      }
      else{
        tempBook.readStatus = "Not Read"
        cloneBookReadP.innerText = tempBook.readStatus;
      }
    });

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

          // //Prototype function that changes read status
          // Book.prototype.changeReadStatus = function(){
          //   if (this.readStatus === "on"){
          //     this.readStatus = "Read"
          //     return this.readStatus;
          //   }
        
          //   else {
          //     return "Not Read"
          //   }
          // }
      


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
    addBookToLibrary(new Book(formData.get("book_name"),formData.get("author_name"),formData.get("pages_number"),formData.get("read_status")));
    dialog.close();
  });
  



  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
  });


  