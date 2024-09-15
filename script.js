const read = document.querySelector("#is_read");
const add_btn = document.querySelector("#submit-button");
const book_view = document.querySelector(".book-list");

const r = read.addEventListener("click", function(){
    let valu = Number(this.value);
    valu = valu * (-1);
    this.value = valu;
    console.log(valu);
});

const myLibrary = [];
var count = 1;

let add_book = add_btn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();

    make_view();
});

function make_view(){
    book_view.innerHTML="";
    myLibrary.map(add_new_book);
}

// function Book(book_name, author, number_of_pages, is_read, code){
//     this.book_name = book_name;
//     this.author = author;
//     this.number_of_pages = number_of_pages;
//     this.is_read = is_read;
//     this.code = code;

// }

class Book{
    constructor(book_name, author, number_of_pages, is_read, code){
        this.book_name = book_name;
        this.author = author;
        this.number_of_pages = number_of_pages;
        this.is_read = is_read;
        this.code = code;
    }
}

function addBookToLibrary(){
    const book_name = document.querySelector("#book_name").value;
    const author = document.querySelector("#author").value;
    const number_of_pages = document.querySelector("#number_of_pages").value;
    const is_read = document.querySelector("#is_read").value;

    if(book_name.toString().length > 0 && author.toString().length > 0 && number_of_pages.toString().length > 0){
        let b = new Book(book_name, author, number_of_pages, is_read, count);
        myLibrary.push(b);
        count++;
    }    
}

function add_new_book(bk){

    const card = document.createElement("div");
    card.setAttribute("style", "padding:1rem; display:flex; flex-direction:column; gap:0.5rem; color:dimgray; border: 0.5rem solid cornflowerblue; box-shadow: 6px 6px 6px white");
    
    const topic = document.createElement("h4");
    topic.innerHTML = bk.book_name;
    topic.setAttribute("style", "display:flex; align-items:center; justify-content:center;");
    card.appendChild(topic);

    const written_by = document.createElement("label");
    written_by.setAttribute("style", "display: flex; align-items:center; justify-content:left");
    written_by.innerHTML = "Written by - " + bk.author;
    card.appendChild(written_by);

    const page_count = document.createElement("label");
    page_count.setAttribute("style", "display: flex; align-items:center; justify-content:left");
    page_count.innerHTML= " Number of pages - " + bk.number_of_pages;
    card.appendChild(page_count);

    const is_read = document.createElement("div");
    is_read.setAttribute("style", "display:flex; align-items: center;");
    const lbl_ir = document.createElement("label");
    lbl_ir.innerHTML = "Is read - ";
    const read_status = document.createElement("div");
    read_status.setAttribute("class","read_status");
    read_status.setAttribute("style","display: flex; background-color:cornflowerblue; padding:0.5rem; border-radius: 4rem; margin-left: 0.5rem; width: 8rem; gap: 1rem; align-items:center;");
    read_status.setAttribute("code", bk.code);
    read_status.setAttribute("is_read", bk.is_read);
    const lbl_yes = document.createElement("label");
    lbl_yes.setAttribute("style","width:3rem; border:none; border-radius: 4rem; padding-left:0.5rem;");
    lbl_yes.setAttribute("id","y");
    lbl_yes.innerHTML="yes";
    const lbl_no = document.createElement("label");
    lbl_no.innerHTML="not yet";
    lbl_no.setAttribute("style","width:5rem; border:none; border-radius: 4rem; padding-left:0.5rem;");
    lbl_no.setAttribute("id", "n");

    if(bk.is_read == 1){
        lbl_yes.style.background = "white";
        lbl_no.style.color = "cornflowerblue";
    }else{
        lbl_yes.style.color = "cornflowerblue";
        lbl_no.style.background = "white";
    }

    read_status.appendChild(lbl_yes);
    read_status.appendChild(lbl_no);
    is_read.appendChild(lbl_ir);
    is_read.appendChild(read_status);

    card.appendChild(is_read);

    const remove_btn = document.createElement("button");
    remove_btn.setAttribute("style", "width: 10rem; border: none; border-radius: 4rem; padding: 0.5rem; margin-top: 1rem; background-color: dimgray; color: white; font-weight: bold;");
    remove_btn.setAttribute("class", "remove-btn");
    remove_btn.setAttribute("code", bk.code);
    remove_btn.innerHTML = "remove book";
    card.appendChild(remove_btn);

    card.setAttribute("is_read", bk.is_read);

    card.setAttribute("code", bk.count);

    book_view.appendChild(card);

    
}

let view = document.querySelector(".book-list");

view.addEventListener("click", function(e){
    console.log(e.target);
    console.log(e.target.parentNode.getAttribute("class"));
    let book_read = "";
    let point = 0;
    if(!(e.target.getAttribute("class") == null) && e.target.getAttribute("class").toString().localeCompare("read_status") === 0){
        book_read = e.target;
        point = 1;
    }
    if(!(e.target.parentNode.getAttribute("class") == null) && e.target.parentNode.getAttribute("class").toString().localeCompare("read_status") === 0){
        book_read = e.target.parentNode;
        point = 1;
    }
    if(point === 1){
        let valu = Number(book_read.getAttribute("is_read"));
        valu *= -1;
        book_read.setAttribute("is_read", valu);

        console.log("value: " + valu);
    
        let code = book_read.getAttribute("code");
        updateBookArray(code,valu);

        label_yes = book_read.firstChild;
        label_no = book_read.lastChild;
        changeToggle(valu, label_yes, label_no);
    }

    if(!(e.target.getAttribute("class") == null) && e.target.getAttribute("class").toString().localeCompare("remove-btn") === 0){
        const code = e.target.getAttribute("code").toString();
        remove_book(code);
        make_view();
    }


});

    function updateBookArray(code,valu){
        myLibrary.map(function(v) {
            if(v.code == code){
                v['is_read'] = valu;
                console.log(v);
            }
        });
    }

    function changeToggle(valu,lbl_yes,lbl_no){
        if(valu == 1){
            lbl_yes.style.background = "white";
            lbl_yes.style.color = "dimgray";
            lbl_no.style.background = "cornflowerblue";
            lbl_no.style.color = "cornflowerblue";
        }else{
            lbl_yes.style.background = "cornflowerblue";
            lbl_yes.style.color = "cornflowerblue";
            lbl_no.style.background = "white";
            lbl_no.style.color = "dimgray";
        }
    }

    function remove_book(code){
        myLibrary.map(function(c){
            if(c.code == code){
                const index = myLibrary.indexOf(c);
                if(index > -1){
                    myLibrary.splice(index, 1);
                }
            }
        });
    }
