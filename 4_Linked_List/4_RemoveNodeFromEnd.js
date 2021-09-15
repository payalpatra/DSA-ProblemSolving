// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]


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

var removeNthFromEnd = function (head, n) {

    if (!head.next) return null;
    let newHead = new Node(null);
    newHead.next = head
    let slow = newHead;
    let fast = newHead;

    // Move the fast pointer till Nth node
    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }

    // Then move the fast and slow pointer together till the end of the list
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return newHead.next;
};

console.log(removeNthFromEnd(head, 2))


/*

TIME COMPLEXITY - O(N )
SPACE COMPLEXITY - O(1)

*/