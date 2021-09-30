// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.


var head;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(4);
head.next.next.next.next = head.next;

var detectCycle = function (head) {

    let hashTable = new Map();
    let node = null;

    while (head) {
        let ele = head.val;

        if (!hashTable[ele]) {
            hashTable[ele] = true;
        } else {
            node = head
            break
        }
        head = head.next;

    }
    return node;
};

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(N)

*/

console.log("OUPUT 1", detectCycle(head));


var detectCycle2 = function (head) {

    if (head == null || head.next === null) return null;

    let slow = new Node(false);
    let fast = new Node(false);
    let entry = new Node(false);

    slow = head
    fast = head
    entry = head

    // To Find the Collision Point
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        // Break out of the loop at the meeting point
        if (slow === fast) {
            // To find the start of the cycle
            while (entry !== slow) {
                entry = entry.next
                slow = slow.next;
            }
            return entry;
        }
    }

    return null;
};


console.log("OUPUT 2", detectCycle2(head));

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(1)

*/