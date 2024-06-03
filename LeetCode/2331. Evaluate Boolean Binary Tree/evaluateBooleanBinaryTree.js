//? Date: 5/23/2024

//? Major Concepts: Tree, Depth-First Search, Binary Tree

//? Prompt: 
/*
You are given the root of a full binary tree with the following properties:

Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
The evaluation of a node is as follows:

If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
Return the boolean result of evaluating the root node.

A full binary tree is a binary tree where each node has either 0 or 2 children.

A leaf node is a node that has zero children.

Example 1:


Input: root = [2,1,3,null,null,0,1]
Output: true
Explanation: The above diagram illustrates the evaluation process.
The AND node evaluates to False AND True = False.
The OR node evaluates to True OR False = True.
The root node evaluates to True, so we return true.
Example 2:

Input: root = [0]
Output: false
Explanation: The root node is a leaf node and it evaluates to false, so we return false.

Constraints:

The number of nodes in the tree is in the range [1, 1000].
0 <= Node.val <= 3
Every node has either 0 or 2 children.
Leaf nodes have a value of 0 or 1.
Non-leaf nodes have a value of 2 or 3.
*/

//? Test Cases:


//? Solution:
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    // Base case: if the node is a leaf, return its value (0 for false, 1 for true)
    if (root.left === null && root.right === null) {
        return root.val === 1;
    }

    // Recursively evaluate left and right subtrees
    const leftVal = evaluateTree(root.left);
    const rightVal = evaluateTree(root.right);

    // Apply the boolean operation based on the current node's value
    if (root.val === 2) { // OR operation
        return leftVal || rightVal;
    } else if (root.val === 3) { // AND operation
        return leftVal && rightVal;
    }

    // In case of invalid input (this should not happen given the constraints), return false
    return false;
};

//? Explanation:
/*
    - The problem is asking us to evaluate a boolean binary tree
    - The tree is a full binary tree
    - The tree has leaf nodes that have either 0 or 1
    - The tree has non-leaf nodes that have either 2 or 3
    - The evaluation of a node is as follows:
        - If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
        - Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
    - Return the boolean result of evaluating the root node.
    - The function takes in the root node of the tree as an argument
    - The function will return a boolean value
    - The function will recursively evaluate the left and right subtrees
    - The function will apply the boolean operation based on the current node's value
    - The function will return false in case of invalid input
    - The function will return the boolean result of evaluating the root node
*/

//? Time Complexity:
// The time complexity is O(n) because we are visiting each node in the tree once