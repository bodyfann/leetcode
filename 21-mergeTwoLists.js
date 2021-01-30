class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let output = null;
  let previous;

  while (l1 || l2) {
    if (!l2 || (l1 && l1.val < l2.val)) {
      node = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      node = new ListNode(l2.val);
      l2 = l2.next;
    }

    if (output) {
      previous.next = node;
      previous = previous.next;
    } else {
      output = node;
      previous = output;
    }
  }
  return output;
};

let l1_node1 = new ListNode(1, null);
let l1_node2 = new ListNode(2, null);
let l1_node3 = new ListNode(4, null);
l1_node2.next = l1_node3;
l1_node1.next = l1_node2;
let l1 = new LinkedList(l1_node1);

let l2_node1 = new ListNode(1);
let l2_node2 = new ListNode(3);
let l2_node3 = new ListNode(4);
l2_node1.next = l2_node2;
l2_node2.next = l2_node3;
let l2 = new LinkedList(l2_node1);

//console.log(l1.head);
//console.log(l2.head);

console.log(mergeTwoLists(l1.head, l2.head));

//https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
