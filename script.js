

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

const theHobit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');

console.log(theHobit.info());