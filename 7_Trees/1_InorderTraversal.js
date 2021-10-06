// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:

// Input: root = []
// Output: []

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var root;
root = new Node(1);
root.left = new Node(4);
root.right = new Node(2);
root.right.left = new Node(3)

// With Recursion
var inorderTraversal = function (root) {
    if (root === null) return []
    let current = root;
    let visited = [];

    function Traverse(node) {
        // Traverse Left
        if (node.left) Traverse(node.left)
        // Visit
        visited.push(node.val)
        // Traverse Right
        if (node.right) Traverse(node.right)
    }

    Traverse(current)
    return visited
};

// console.log(inorderTraversal(root))


// Without Recursion
var inorderTraversal2 = function (root) {
    if (!root) return false;

    const stack = [];
    const res = [];

    while (root || stack.length) {
      
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }

    return res

};

console.log(inorderTraversal2(root))