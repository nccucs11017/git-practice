import Stack from './stack.js'; // Node.js 預設是用 CommonJS，所以加了一個 package.json 來讓他用 ES module

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();
console.log();

console.log(stack.pop());
stack.print();
console.log();

stack.push(7);
console.log(stack.peek());
stack.print();
console.log(stack.size());
console.log(stack.isEmpty());
console.log();

stack.clear();
stack.print();
console.log(stack.size());
console.log(stack.isEmpty());
console.log();

console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();
console.log(stack.peek());
stack.push(6);
stack.print();
