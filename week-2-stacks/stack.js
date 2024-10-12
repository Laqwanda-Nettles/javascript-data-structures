class Stack {
  #storage;

  constructor() {
    this.#storage = [];
  }

  push(book) {
    this.#storage.push(book);
  }

  pop() {
    return this.#storage.pop();
  }

  peek() {
    return this.#storage[this.#storage.length - 1];
  }

  isEmpty() {
    return this.#storage.length === 0 ? true : false;
  }
}

const books = new Stack();
books.push("Dark Matter");
books.push("Naked Lunch");
books.push("The Ultimate Hithiker's Guide to the Galaxy");
books.push("Burroughs");
console.log(books);

let read = books.pop();
console.log(read);

let nextBook = books.peek();
console.log(nextBook);

console.log(books.isEmpty());

read = books.pop();
read = books.pop();
read = books.pop();

console.log(books.isEmpty());
//console.log(books.#storage);
