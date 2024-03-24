
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

Book.prototype.toggleReadStatus = function() {
    this.read = this.read === "read" ? "not read" : "read";
};

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}





// Now we add the books to the library
myLibrary.push(theHobbit, theBible);

//form
document.getElementById('signup-form').addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Get the value of each input field
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readValue = document.querySelector('input[name="read"]:checked').value;
    const read = readValue === 'yes' ? 'read' : 'not read';
    
    // Create a new Book instance
    const newBook = new Book(title, author, pages, read);
    
    // Add the new book to the myLibrary array
    addBookToLibrary(newBook);
    
    // Optionally, update the UI to include the new book
    displayBooks();
    
    // Clear the form fields for the next entry
    document.getElementById('signup-form').reset();
});

function displayBooks() {
    const blogsElement = document.getElementById('blogs');

    // Clear existing content
    while (blogsElement.firstChild) {
        blogsElement.removeChild(blogsElement.firstChild);
    }

    // Create and append the blog title
    const blogTitle = document.createElement('div');
    blogTitle.id = 'blog-title';
    blogTitle.textContent = 'Books:';
    blogsElement.appendChild(blogTitle);

    // Iterate over each book in the library
    myLibrary.forEach((book, index) => { // Include the index here
        const bookCard = document.createElement('div');
        bookCard.classList.add('blog-grid-item');

        // Create the book item container
        const bookItem = document.createElement('div');
        bookItem.classList.add('blog-item');

        // Create and append the title element
        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title;
        bookItem.appendChild(titleElement);

        // Create and append the author element
        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${book.author}`;
        bookItem.appendChild(authorElement);

        // Create and append the pages element
        const pagesElement = document.createElement('p');
        pagesElement.textContent = `Pages: ${book.pages}`;
        bookItem.appendChild(pagesElement);

        // Create and append the read status element
        const readElement = document.createElement('p');
        readElement.textContent = `Status: ${book.read}`;
        bookItem.appendChild(readElement);

        // Create and append the delete button
        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('delete');

        // Toggle Read Status Button
        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle Read Status';
        toggleReadButton.classList.add('toggle-read-button');
        toggleReadButton.onclick = function() {
            book.toggleReadStatus();
            displayBooks(); // Refresh the display
        };
        bookItem.appendChild(toggleReadButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function() {
            myLibrary.splice(index, 1); // Remove the book from the array
            displayBooks(); // Re-display the updated library
        };


        deleteDiv.appendChild(deleteButton);
        bookCard.appendChild(bookItem); // Add the book details to the card
        bookCard.appendChild(deleteDiv); // Add the delete button to the card
        blogsElement.appendChild(bookCard);
    });
}
// Call displayBooks to update the UI
displayBooks();
console.log(myLibrary);