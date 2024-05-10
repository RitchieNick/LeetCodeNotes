//? Date: 5/10/2024

//? Major Concepts: Hash Table, Array

//? Prompt:
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

//? Test Cases:
twoSum([2,7,11,15], 9); // [0, 1]
twoSum([3,2,4], 6); // [1, 2]
twoSum([3,3], 6); // [0, 1]

//? Solution: 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndexMap.hasOwnProperty(complement)) {
            return [numIndexMap[complement], i];
        }
        numIndexMap[nums[i]] = i;
    }
    
    // If no solution found, return an empty array or throw an error as per your requirement.
    return [];
};

//? Explanation:
/*
    - Create an empty object to store the index of the numbers.
    - Iterate through the input array.
    - Calculate the complement of the current number.
    - Check if the complement exists in the object.
    - If it exists, return the index of the complement and the current index.
    - If it doesn't exist, add the current number to the object.
    - If no solution found, return an empty array.
*/

//? Time Complexity:
// Linear Time Complexity: O(n)