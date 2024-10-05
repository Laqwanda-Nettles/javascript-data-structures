class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    let item = this.storage.shift();
    return item;
  }

  peek() {
    return this.storage[0];
  }

  isEmpty() {
    let size = this.storage.length;
    if (size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

let brands = new Queue();
brands.enqueue("Nike");
brands.enqueue("Fila");
brands.enqueue("Kellog");
brands.enqueue("Pepsi");
console.log(brands);
let first = brands.dequeue();
console.log(first);
console.log(brands);
let next = brands.peek();
console.log(next);
console.log(brands);
let checkIsEmpty = brands.isEmpty();
console.log(checkIsEmpty);
