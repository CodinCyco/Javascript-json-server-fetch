document.getElementById('message').style.display = "none";


/**
 *
 * @param id
 * @param title
 * @param author
 * @param isbn
 * @Book_constructor
 */

function Book(id,title,author,isbn){
    this.id=id;
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}


/**
 *
 * @constructor
 */
function Ui(){}

/**
 *
 * @param book
 * Add book to list
 */
Ui.prototype.addBookToList = function (book) {

    let table = document.getElementById('bookListTable').getElementsByTagName('tbody')[0];
    let row = table.insertRow(table.rows.length);
    let cellId = row.insertCell(0)
    let cellTitle = row.insertCell(1);
    let cellAuthor = row.insertCell(2);
    let cellIsbn = row.insertCell(3);
    let cellActions = row.insertCell(4);
    cellId.innerHTML = book.id;
    cellTitle.innerHTML = book.title;
    cellAuthor.innerHTML = book.author;
    cellIsbn.innerHTML = book.isbn;
    cellActions.innerHTML = "<button class='btn btn-danger delete'>X</button>";

};

/**
 *Clear fields
 */
Ui.prototype.clearFields = function () {
    document.getElementById('title').value="";
    document.getElementById('author').value="";
    document.getElementById('isbn').value="";
};


/**
 *
 * @param message
 * @param type
 *
 * Display alert
 */
Ui.prototype.displayAlert = function (message,type) {
    let classN;
    if(type=="error")
         classN = "alert alert-danger";
    else
        classN = "alert alert-success";




    document.getElementById('message').innerHTML=message;
    document.getElementById('message').className="";
    document.getElementById('message').className = classN;
    document.getElementById('message').style.display = "block";
        setTimeout(function(){
            document.getElementById('message').style.display = "none";

        }, 2000);
};

Ui.prototype.deleteBook = function (target) {
    target.parentElement.parentElement.remove();
};
let i = 0;
/**
 * Submission
 */
document.getElementById('formAdd').addEventListener("submit", function (e) {
    e.preventDefault();
    let ui = new Ui();
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;
    if(title==""||author==""||isbn=="")
    {
        ui.displayAlert("Must fill all fields","error");
    }else
    {
        i++;
        let book = new Book(i,title,author,isbn);
        ui.addBookToList(book);
        ui.clearFields();
        ui.displayAlert("Book added successfully","success");
    }



});


function deleteBook(book_id) {
    let ui = new Ui();
    ui.deleteBook(book_id);
}

let all = document.getElementsByClassName('delete');
for (let i =0;i<all.length;i++){
    all[i].addEventListener('click',deleteBook(),false);
} ;
