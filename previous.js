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