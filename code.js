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

const bookReadCheckboxDiv = document.createElement("div");
bookReadCheckboxDiv.classList.add("bookReadCheckboxDiv");

const bookReadCheckbox = document.createElement("input");
bookReadCheckbox.setAttribute("type", "checkbox");
bookReadCheckbox.classList.add("bookReadCheckbox");

const bookReadP = document.createElement("p");
bookReadP.classList.add("bookReadP");




const deleteBookButton = document.createElement("button");

let myLibrary = [];

let idBookNumber = 0;






//Book Object Constructor

function Book(title,author,pages,readStatus,id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;
}

//If its on it displays Read if not it displays Not Read (Modal)
function readOrNot(readStatus,cloneBookReadCheckbox){
    if (readStatus === "on"){
      cloneBookReadCheckbox.checked = true;
      return "Read"
    }

    else if(readStatus === "Read"){
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

    const cloneBookReadCheckboxDiv = bookReadCheckboxDiv.cloneNode(true);
  
    const cloneBookReadP = bookReadP.cloneNode(true);

    const cloneDeleteBookButton = deleteBookButton.cloneNode(true);

    
    myLibrary.forEach(book => {
      if(book.id === undefined){
          //Adds clone book and clone variables to topMainDiv
          topMainDiv.appendChild(cloneBookHtml);
      
          cloneBookHtml.appendChild(cloneBookNameP);
        
          cloneBookNameP.textContent = `Book: ${book.title}`;
        
          cloneBookHtml.appendChild(cloneBookAuthorP);
        
          cloneBookAuthorP.textContent = `Author: ${book.author}`;
        
          cloneBookHtml.appendChild(cloneBookPagesP);
        
          cloneBookPagesP.textContent = `Page Count: ${book.pages}`;
  
          cloneBookHtml.appendChild(cloneBookReadCheckboxDiv);
  
          cloneBookReadCheckboxDiv.appendChild(cloneBookReadCheckbox);
        
          cloneBookReadCheckboxDiv.appendChild(cloneBookReadP);
          book.readStatus = readOrNot(book.readStatus, cloneBookReadCheckbox)
        
          cloneBookReadP.textContent = book.readStatus;
  
          book.id = idBookNumber;

          //Adding Id
          cloneBookHtml.setAttribute("id", idBookNumber);
          idBookNumber++;
            
          console.log(cloneBookHtml.id)
  

      };

              //When Checkbox is clicked the text will change (clonebook)
              cloneBookReadCheckbox.addEventListener("change", function(){    
                if(cloneBookReadCheckbox.checked){
                  book.readStatus = "Read"
                  cloneBookReadP.innerText = book.readStatus;
                }
                else{
                  book.readStatus = "Not Read"
                  cloneBookReadP.innerText = book.readStatus;
                }
      })
      
     
    });
  
 










    //Delete button 
    cloneBookHtml.appendChild(cloneDeleteBookButton);
    cloneDeleteBookButton.innerText = "Delete";
    cloneDeleteBookButton.classList.add("delete-book-button");

    cloneDeleteBookButton.addEventListener("click", () =>{
      let tempIdHolder = document.getElementById(cloneBookHtml.id)
      console.log(cloneBookHtml.id)
      tempIdHolder.remove();

      const indexOfBook = myLibrary.findIndex(book => {
        return book.id == cloneBookHtml.id;
      });

      myLibrary.splice(indexOfBook, 1)

      console.log(myLibrary)

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
    addBookToLibrary(new Book(formData.get("book_name"),formData.get("author_name"),formData.get("pages_number"),formData.get("read_status")));
    dialog.close();
  });
  



  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
  });


  