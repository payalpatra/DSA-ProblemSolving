// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

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


var middleNode = function (head) {
    // 
    let length = 0;
    let middle;
    let count = 0;
    let current = head

    // Find the length of the linked list
    while (current) {
        current = current.next
        length++;
    }
    // The middle value from which we want to find rest of the nodes
    middle = Math.floor(length / 2)

    // Finding the value of the middle node
    while (count !== middle) {
        head = head.next;
        count++
    }
    return head

};

console.log("OUTPUT 1 :", middleNode(head))

// Node {
//     val: 3,
//     next: Node { val: 4, next: Node { val: 5, next: null } }
//   }

/*

TIME COMPLEXITY - O(N) + O(N)
SPACE COMPLEXITY - O(1)

*/

var middleNode2 = function (head) {
    let slow = head;
    let fast = head;
    while (slow !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow

};

console.log("OUTPUT 2 :", middleNode2(head))

/*

TIME COMPLEXITY - O(N/2)
SPACE COMPLEXITY - O(1)

*/