import Queue from "./queue.js";
import Stack from "./stack.js";

// Queue Count
let q = new Queue();

// adding items to queue
q.enqueue("pistacio");
q.enqueue("choco");
q.enqueue("pistacio");
q.enqueue("choco");
q.enqueue("choco");
q.enqueue("pistacio");
q.enqueue("choco");

console.log(q); //array of items in queue

let count = 0;
while (!q.isEmpty()) {
  let order = q.dequeue();
  count++;
  console.log(order);
}
console.log(count);

//Stack Count

let s = new Stack();
//add items to stack
s.push("pistacio");
s.push("choco");
s.push("pistacio");
s.push("choco");
s.push("choco");
s.push("pistacio");
s.push("choco");

console.log(s);

let count2 = 0;
while (!s.isEmpty()) {
  s.pop();
  count2++;
}
console.log(count2);

// Number 3: Count number of pistacio ice cream for two queues

let pq2 = new Queue();
let pq3 = new Queue();
let pq4 = new Queue();

pq2.enqueue("pistacio");
pq2.enqueue("choco");
pq2.enqueue("pistacio");
pq2.enqueue("pistacio");
pq2.enqueue("choco");
pq2.enqueue("pistacio");
pq2.enqueue("pistacio");

pq3.enqueue("choco");
pq3.enqueue("pistacio");
pq3.enqueue("choco");
pq3.enqueue("pistacio");
pq3.enqueue("pistacio");
pq3.enqueue("choco");
pq3.enqueue("pistacio");

pq4.enqueue("pistacio");
pq4.enqueue("choco");
pq4.enqueue("pistacio");
pq4.enqueue("choco");
pq4.enqueue("pistacio");
pq4.enqueue("choco");
pq4.enqueue("pistacio");

let pcount = 0;
let pcount2 = 0;

while (!pq2.isEmpty() && !pq3.isEmpty()) {
  let iceCream = pq2.dequeue();
  let iceCream2 = pq3.dequeue();
  if (iceCream === "pistacio") {
    pcount++;
  }
  if (iceCream2 === "pistacio") {
    pcount2++;
  }
}

let result = pcount === pcount2 ? true : false;
console.log(result);

// Number 4 : stack comparing aces in two deck of cards

let card1 = new Stack();
let card2 = new Stack();

card1.push("ace");
card1.push("ace");
card1.push("king");
card1.push("king");
card1.push("ace");
card1.push("king");
card1.push("king");
card1.push("king");
card1.push("ace");
card1.push("ace");
card1.push("ace");

card2.push("ace");
card2.push("king");
card2.push("king");
card2.push("ace");
card2.push("king");
card2.push("ace");
card2.push("king");
card2.push("ace");
card2.push("ace");
card2.push("ace");
card2.push("king");

let cardCount1 = 0;
let cardCount2 = 0;

while (!card1.isEmpty() && !card2.isEmpty()) {
  let checkCard1 = card1.peek();
  card1.pop();
  let checkCard2 = card2.peek();
  card2.pop();
  if (checkCard1 === "ace") {
    cardCount1++;
  }
  if (checkCard2 === "ace") {
    cardCount2++;
  }
}

let result2 = cardCount1 === cardCount2 ? true : false;
console.log("Checking for dek for same amount of Aces: ", result2);

// Number 5: Equal Halloween Queues

let costume1 = new Queue();
let costume2 = new Queue();

costume1.enqueue("witch");
costume1.enqueue("ghost");
costume1.enqueue("witch");
costume1.enqueue("ghost");
costume1.enqueue("ghost");
costume1.enqueue("witch");
costume1.enqueue("ghost");
costume1.enqueue("witch");
costume1.enqueue("witch");

costume2.enqueue("witch");
costume2.enqueue("ghost");
costume2.enqueue("witch");
costume2.enqueue("ghost");
costume2.enqueue("ghost");
costume2.enqueue("witch");
costume2.enqueue("ghost");
costume2.enqueue("witch");
costume2.enqueue("ghost");

let checkPairs;

while (!costume1.isEmpty() && !costume2.isEmpty()) {
  let pair1 = costume1.dequeue();
  let pair2 = costume2.dequeue();
  checkPairs = pair1 === pair2 ? true : false;
}

console.log("Checking Halloween Pairs: ", checkPairs);

// Number 6 Equal Card Stacks
let card3 = new Stack();
let card4 = new Stack();

card3.push("ace");
card3.push("ace");
card3.push("king");
card3.push("king");
card3.push("ace");
card3.push("king");

card4.push("ace");
card4.push("king");
card4.push("king");
card4.push("ace");
card4.push("king");
card4.push("ace");

let checkCards = true;

while (!card3.isEmpty() && !card4.isEmpty()) {
  let cardStack1 = card3.pop();
  let cardStack2 = card4.pop();
  if (cardStack1 !== cardStack2) {
    checkCards = false;
  }
}
console.log("Checking Card Stacks: ", checkCards);

// Number 7: Think of Another practical application of stacks or queues and write a question about it.
/*
Queue: 
Handling request for a call center, where customers request are handled in the order they arrive.
    - adding a customer
    - remove served customers
    - checking current length of the queue.

    How many have been served?
*/
