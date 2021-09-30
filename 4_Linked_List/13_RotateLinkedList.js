// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

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

var rotateRight = function (head, k) {
    // EDGE CASE
    if (!head || !head.next || k === 0) return head;

    // Compute the length
    let len = 1;
    let dummy = new Node(false);
    dummy = head

    while (dummy.next !== null) {
        dummy = dummy.next
        len++
    }

    // Create a circular linked list
    // Point the last node to the head 
    dummy.next = head;

    // Suppose length is 5 then we get the same linked List if we rotate the Linked List (n * len) times.           (i.e : 5, 10, 15, 20)
    // Hence we find the % of K & len of Linked List

    k = k % len

    // Difference of length and k 
    // To find the node from which the rotaion will start
    k = len - k
    let count = 0;

    // Go till len - k 
    while (count !== k) {
        dummy = dummy.next
        count++
    }

    // Point the head to the next of len - k 
    head = dummy.next
    // Break the circle
    dummy.next = null

    return head

};

console.log(rotateRight(head, 2))

// Note: Suppose length is 5 then we get the same linked List if we rotate the Linked List (n * len) times. (i.e : 5, 10, 15, 20)

/*

TIME COMPLEXITY - O(N) + O(N - N % K) = O(N)
SPACE COMPLEXITY - O(1)

*/