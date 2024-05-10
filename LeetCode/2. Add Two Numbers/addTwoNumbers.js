//? Date: 5/10/2024

//? Major Concepts: Linked List, Math, Recursion

//? Prompt: 
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

//? Test Cases:
addTwoNumbers([2,4,3], [5,6,4]); // [7,0,8]
addTwoNumbers([0], [0]); // [0]
addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]); // [8,9,9,9,0,0,0,1]

//? Solution:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;
    
    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return dummyHead.next;
};

//? Explanation:
/*
    - Create a dummyHead node to store the sum of the two linked lists
    - Create pointers p and q to traverse the linked lists
    - Create a current pointer to keep track of the current node
    - Create a carry variable to store the carry value
    - Iterate through the linked lists while p or q is not null
    - Calculate the sum of the current nodes of p and q along with the carry value
    - Update the carry value and the current node with the sum % 10
    - Move the pointers p and q to the next nodes
    - If there is a carry value after the loop, add a new node with the carry value
    - Return the next node of the dummyHead
*/

//? Time Complexity:
// O(max(m, n)) where m is the length of l1 and n is the length of l2