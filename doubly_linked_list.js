function Node(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
}

function DoublyLinkedList() {
  this._length = 0;
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype.isEmpty = function() {
  return this._length === 0;
};

DoublyLinkedList.prototype.printLinkedList = function() {
  if(this.isEmpty()){
    console.log("empty list");
  } else {
    var current = this.head;
    while(current.next !== null){
      console.log(current.data);
      current = current.next;
    }
    console.log(current.data);
  }
};

DoublyLinkedList.prototype.push = function(node) {
  switch(this._length) {
    case 0:
      this.head = node;
      this.tail = node;
      this._length++;
      break;
    default:
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
      this._length++;
      break;
  }
};

DoublyLinkedList.prototype.pop = function() {
  if(this.isEmpty()){
    return -1;
  }
  var node = this.head;
  this.head = node.next;
  this.head.previous = null;
  node.next = null;
  this._length--;
  return node;
};

/**********************
** Testing Functions **
**********************/

var ll = new DoublyLinkedList();
ll.printLinkedList();
var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
ll.push(a);
ll.printLinkedList();
console.log("****");
ll.push(b);
ll.printLinkedList();
console.log("****");
ll.push(c);
ll.printLinkedList();
console.log("****");
ll.pop();
ll.printLinkedList();
