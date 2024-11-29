export default class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
  }
  pop() {
    return this.storage.pop();
  }
  peek() {
    return this.storage[this.storage.length - 1];
  }
  isEmpty() {
    return this.storage.length === 0;
  }
}
