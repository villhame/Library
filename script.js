
let myLibrary = [];

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
const theBible = new Book('The Bible', 'God', 7777, 'read');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        // return "The book, " + this.title + " by " + this.author + ", " + this.pages + " pages, read yet: " + this.read
        return `The book, ${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`
    };
}

function addBookToLibrary() {
  // do stuff here
  myLibrary.push(book);
}





// Now we add the books to the library
myLibrary.push(theHobbit, theBible);

function displayBooks() {
    const blogsElement = document.getElementById('blogs');
    // Clear existing content
    blogsElement.innerHTML = '<div id="blog-title">Books:</div>';
    
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('blog-grid-item');
        
        bookCard.innerHTML = `
            <div class="blog-item">
                <h2>${book.title}</h2>
                Author: ${book.author}<br>
                Pages: ${book.pages}<br>
                Status: ${book.read}
            </div>
        `;
        
        blogsElement.appendChild(bookCard);
    });
}

console.log(myLibrary);

// Call displayBooks to update the UI
displayBooks();