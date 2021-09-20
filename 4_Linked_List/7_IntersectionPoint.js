// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// Example 1:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

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
head1.next.next = new Node(8);
head1.next.next.next = new Node(7);
head1.next.next.next.next = new Node(6);

// Linked List 2
head2 = new Node(2);
head2.next = new Node(8);
head2.next.next = new Node(1);
head2.next.next.next = new Node(3);
head2.next.next.next.next = new Node(8);
head2.next.next.next.next.next = new Node(7);
head2.next.next.next.next.next.next = new Node(6);


var getIntersectionNode = function (headA, headB) {
    let dummy1 = new Node(0);
    dummy1 = headA;

    let dummy2 = new Node(0);
    dummy2 = headB;

    let l1 = 0;
    let l2 = 0;

    while (dummy1 || dummy2) {
        if (dummy1 !== null) {
            dummy1 = dummy1.next;
            l1++;
        }
        if (dummy2 !== null) {
            dummy2 = dummy2.next;
            l2++;
        }
    }

    // Find The Difference
    let dif = Math.max(l1, l2) - Math.min(l1, l2);

    // Dummy1 is the larger linked list
    dummy1 = Math.max(l1, l2) === l1 ? headA : headB;
    dummy2 = Math.min(l1, l2) === l1 ? headA : headB;

    while (dif > 0) {
        dummy1 = dummy1.next;
        dif--;
    }

    // we traverse both the linked list untill the intersection node is visited
    while (dummy1.val !== null && dummy2.val !== null) {
        dummy1 = dummy1.next;
        dummy2 = dummy2.next;

        if (dummy1.val === dummy2.val) {
            break;
        }
    }
    return dummy2;
};

console.log(getIntersectionNode(head1, head2));

/*

TIME COMPLEXITY - O(M) + O(M - N) + O(N) = O(2M)
SPACE COMPLEXITY - O(1)

*/
