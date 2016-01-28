// Defining our Node class
function Node(data) {
  this.data = data;
  this.next = null;
}

// Defining our Singly Linked List class
function SinglyLinkedList() {
  this._length = 0;
  this.head = null;
}

// Function to print out the contents of the linked list
// in a digestible manner
SinglyLinkedList.prototype.printLinkedList = function() {
  var current = this.head;
  while(current !== null) {
    console.log(current.data);
    current = current.next;
  }
};

/***********************
**  Stack Operations  **
***********************/

SinglyLinkedList.prototype.push = function(node) {
  node.next = this.head;
  this.head = node;
  this._length++;
};

SinglyLinkedList.prototype.pop = function() {
  if(this._length === 0){
    return -1;
  }
  var node = this.head;
  if(this._length > 1) {
    this.head = this.head.next;
  }
  node.next = null;
  this._length--;
  return node;
};

SinglyLinkedList.prototype.top = function() {
  if(this._length === 0){
    return -1;
  }
  return this.head;
};

/***********************
**  Queue Operations  **
***********************/

SinglyLinkedList.prototype.enqueue = function(node) {
  node.next = this.head;
  this.head = node;
  this._length++;
};

SinglyLinkedList.prototype.dequeue = function() {
  var current = this.head;
  switch(this._length) {
    case 0:
      return -1;
    case 1:
      this._length--;
      this.head = null;
      return current;
    default:
      while(current.next.next !== null) {
        current = current.next;
      }
      break;
  }
  node = current.next;
  current.next = null;
  this._length--;
  return node;
};

SinglyLinkedList.prototype.peek = function() {
  var current = this.head;
  switch(this._length) {
    case 0:
      return -1;
    case 1:
      return current;
    default:
      while(current.next !== null) {
        current = current.next;
      }
      return current;
  }
};

/**************************
** Generic LL Functions  **
**************************/

// Function to add a node to the end of the linked list
SinglyLinkedList.prototype.add = function(node) {
  var current = this.head;
  if (this._length === 0){
    this.head = node;
  } else {
      while(current.next !== null){
        current = current.next;
      }
      current.next = node;
    }
  this._length++;
};


// Function to delete a specific node
SinglyLinkedList.prototype.deleteNode = function(node) {
  var current = this.head;
  var found = false;
  while(!found && current !== null) {
    if(current === node) {
      node.data = node.next.data;
      node.next = node.next.next;
      found = true;
    } else {
      current = current.next;
    }
  }
};

/**********************
** Testing Functions **
**********************/

// Creating Nodes
var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
// Array to store nodes for quick testing of .enqueue(node) and .push(node)
var nodes = [a,b,c,d,e,f];
// Creating a Singly-Linked-List
var ll = new SinglyLinkedList();

// Testing out Queue functions
// Loop to enqueue nodes
console.log("**** Queue Functions ****");

for(var i = 0; i < nodes.length; i++) {
  console.log("*************************");
  console.log("- Enqueue " + nodes[i].data + " -");
  console.log("Current Queue:");
  console.log("(back)");
  ll.enqueue(nodes[i]);
  ll.printLinkedList();
  console.log("(front)\n");
}
console.log("*************************");

// variable to store the node that has been dequeued
var temp;

// Loop to  dequeue nodes
while(ll._length > 0){
  console.log("- Dequeue -");
  console.log("Current Queue:");
  console.log("(back)");
  temp = ll.dequeue();
  ll.printLinkedList();
  console.log("(front)");
  console.log("dequeued node:" + temp.data + "\n");
  console.log("*************************");
}


