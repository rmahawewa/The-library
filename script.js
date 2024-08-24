let container = document.querySelector(".book-list");
const myLibrary = [];
const books = ['Mage sarasavi', 'Lamaviya', 'Zippi', 'Lord of the rings', 'Hobbit'];

function Book(){
    const book = new Book();
    return book;
}

function addBookToLibrary(){
    myLibrary.push(Book());    
}

function display_book_list(){
    books.map(display_book);
}

function display_book(b){
 const paragraph = document.createElement("p");
 paragraph.innerHTML=b;
 container.appendChild(paragraph);
}

display_book_list();

// const add_btn = document.querySelector("#submit-button");

// let add_book = add_btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     add_new_book;
// });

// function add_new_book(){
//     const book_name = document.querySelector("#book_name");
//     const author = document.querySelector("#author");
//     const number_of_pages = document.querySelector("#number_of_pages");
//     const is_read = document.querySelector("#is_read");

//     console.log("test 12345");
// }
