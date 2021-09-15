// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

var head1;
var head2;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Linked List 1
head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(4);


// Linked List 2
head2 = new Node(1);
head2.next = new Node(3);
head2.next.next = new Node(4);


var mergeTwoLists = function (l1, l2) {
    let ans = []

    while (l1 !== null && l2 !== null) {

        if (l1.val < l2.val) {
            ans.push(l1.val)
            l1 = l1.next
        } else if (l2.val < l1.val) {
            ans.push(l2.val)
            l2 = l2.next
        } else if (l1.val === l2.val) {
            ans.push(l1.val)
            ans.push(l2.val)
            l1 = l1.next
            l2 = l2.next
        }
    }
    while (l1 !== null) {
        ans.push(l1.val)
    }
    while (l2 !== null) {
        ans.push(l2.val)
    }
    return ans
};

// console.log(mergeTwoLists(head1, head2))

/*

TIME COMPLEXITY - O(N + M) 
SPACE COMPLEXITY - O(N + M)

*/

// CREATING A NEW SORTED LINKED LIST 
var mergeTwoLists2 = function (l1, l2) {

    let tempNode = new Node(0, null);
    let currentNode = tempNode;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2;
            l2 = l2.next
        }
        // Move the current pointer
        currentNode = currentNode.next;

    }
    // Left out node 
    currentNode.next = l1 || l2;

    return tempNode.next;

};

// console.log(mergeTwoLists2(head1, head2))


/*

TIME COMPLEXITY - O(N + M) 
SPACE COMPLEXITY - O(N + M)

*/


// IN PLACE SORTING 
var mergeTwoLists3 = function (l1, l2) {
    // Need To Complete

};

console.log(mergeTwoLists3(head1, head2))
