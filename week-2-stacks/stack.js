class Stack {
  constructor() {
    this.storage = [];
  }

  push(book) {
    this.storage.push(book);
  }
}

const books = new Stack();
books.push("Dark Matter");
console.log(books);
