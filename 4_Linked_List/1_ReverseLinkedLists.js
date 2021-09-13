// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

var head;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


var reverseList = function (head) {
    var prev = null;
    var next = null;
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    head = prev;
    return head;
}

console.log(reverseList(head))

// OUTPUT

// Node {
//     val: 5,
//     next: Node { val: 4, next: Node { val: 3, next: [Node] } }
//   }

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(1)

*/