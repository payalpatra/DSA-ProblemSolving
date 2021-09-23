// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var head;
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);



var isPalindrome = function (head) {
    let array = new Array()
    while (head) {
        array.push(head.val)
        head = head.next;
    }

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] !== array[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true

};

/*

TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(N)

*/

// console.log(isPalindrome(head));

var isPalindrome2 = function (head) {
    if (head === null || head.next === null) return true;
    let slow = new Node(false);
    slow = head;
    let fast = new Node(false)
    fast = head;

    //Find the middle of Linked List
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Move the pointer to the point where the LinkedList needs to be reversed
    slow = slow.next;

    // Reverse the right half 
    let prev = null;
    let next = null;

    while(slow !== null){
        next = slow.next;
        slow.next = prev;
        prev = slow
        slow = next;
    }

    // Slow points to the reverse of the Linkedlist (Right half of the Linked list)
    slow = prev 

    //Check if the left half is equal to the right hald or not
    while(slow !== null ){
        if(head.val !== slow.val){
            return false;
        }

        slow = slow.next;
        head = head.next
    }
    return true;

};

console.log(isPalindrome2(head));

/*

TIME COMPLEXITY - O(N/2) + O(N/2) + O(N/2)
SPACE COMPLEXITY - O(1)

*/