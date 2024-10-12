class Stack {
  constructor() {
    this.storage = [];
  }

  push(book) {
    this.storage.push(book);
  }

  pop() {
    return this.storage.pop();
  }
}

const books = new Stack();
books.push("Dark Matter");
books.push("Naked Lunch");
books.push("The Ultimate Hithiker's Guide to the Galaxy");
books.push("Burroughs");
console.log(books);

let b = books.pop();
console.log(b);
