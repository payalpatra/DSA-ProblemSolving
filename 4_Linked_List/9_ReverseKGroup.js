// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var head;
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


var reverseKGroup = function (head, k) {
    if (head === null || k === 1) return head

    // Create a dummy node
    let dummy = new Node(false)
    dummy.next = head;

    // Create a curr node
    let curr = new Node(false)
    curr = dummy;

    // Point pre and next to the dummy node
    let next = dummy;
    let pre = dummy

    // To find the length of the linked lidt
    let count = 0;
    while (curr.next !== null) {
        curr = curr.next;
        count++
    }

    while (count >= k) {
        curr = pre.next;
        next = curr.next;

        for (let i = 1; i < k; i++) {
            curr.next = next.next;
            next.next = pre.next;
            pre.next = next;
            next = curr.next
        }
        pre = curr;
        count = count - k
    }
    return dummy.next

};
console.log(reverseKGroup(head, 2));


// Node {
//     val: 2,
//     next: Node { val: 1, next: Node { val: 4, next: [Node] } }
//   }


/*

TIME COMPLEXITY - O(N /k * K) = O(N)
SPACE COMPLEXITY - O(1)

*/
