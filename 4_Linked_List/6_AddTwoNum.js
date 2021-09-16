// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]


var head1;
var head2;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Linked List 1
head1 = new Node(2);
head1.next = new Node(4);
head1.next.next = new Node(3);


// Linked List 2
head2 = new Node(5);
head2.next = new Node(6);
head2.next.next = new Node(4);



var addTwoNumbers = function (l1, l2) {
    // Create a dummy Node
    let dummy = new Node(0);
    let temp = dummy;

    // Keeps a track of the carry value
    let carry = 0;
    let sum = 0

    while (l1 !== null || l2 !== null || sum > 0) {


        // Add current l1 value to sum
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next
        }

        // Add current l2 value to sum 
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next
        }

        // Add carry to the sum
        sum = sum + carry;

        // If the sum is 2 digit then first digit is the carry
        carry = Math.floor(sum / 10);

        // New Node is the last digt of the sum
        let newNode = new Node(Math.floor(sum % 10));

        // Assign the the new node to the next of the current node of temp
        temp.next = newNode

        // we add the carry to the sum and assign 0 to carry
        sum = carry
        carry = 0

        // Move the temp pointer
        temp = temp.next

    }

    return dummy.next

};

console.log(addTwoNumbers(head1, head2))

/*

TIME COMPLEXITY - O(Math.max(n , m) ) 
SPACE COMPLEXITY - O(N)

*/