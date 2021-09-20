// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1 :

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2 :

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var head;
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(1);
head.next.next.next = new Node(4);
head.next.next.next.next = head.next;

var hasCycle0 = function (head) {
    const seen = new Set();

    function traverse(node) {
        if (seen.has(node)) return true;
        if (!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    return traverse(head);
};

var hasCycle = function (head) {
    let hashMap = {};
    let dummy = new Node(false);
    dummy = head;
    let cycle = false;

    while (dummy !== null) {
        if (!hashMap[dummy.val]) {
            hashMap[dummy.val] = 1;
        } else {
            cycle = true;
            break;
        }
        dummy = dummy.next;
    }
    return cycle;
};

// console.log(hasCycle(head));

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(N)

*/


var hasCycle2 = function (head) {
    let slow = new Node(false);
    let fast = new Node(false);

    slow = head
    fast = head
    let cycle = false;

    // Move slow pointer by one step 
    // Move fast pointer by two step
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === null && cycle === false) {
            cycle = false;
            break;
        }
        if (slow === fast) {
            cycle = true;
            break;
        }

    }
    return cycle;

};

console.log(hasCycle2(head))


/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(1)

*/
