//? Date: 5/10/2024

//? Major Concepts: Array, Two Pointers, Binary Search, Sorting, Heap (Priority Queue)

//? Prompt: 
/*
You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.

For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].

Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

Example 1:

Input: arr = [1,2,3,5], k = 3
Output: [2,5]
Explanation: The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.
Example 2:

Input: arr = [1,7], k = 1
Output: [1,7]

Constraints:

2 <= arr.length <= 1000
1 <= arr[i] <= 3 * 104
arr[0] == 1
arr[i] is a prime number for i > 0.
All the numbers of arr are unique and sorted in strictly increasing order.
1 <= k <= arr.length * (arr.length - 1) / 2

Follow up: Can you solve the problem with better than O(n2) complexity?
*/

//? Test Cases:
kthSmallestPrimeFraction([5,4,3,2,1])
kthSmallestPrimeFraction([1, 7])

//? Solution:
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    const n = arr.length;
    let left = 0, right = 1; // Initialize boundaries for binary search

    // Perform binary search
    while (left < right) {
        let mid = (left + right) / 2; // Calculate midpoint
        let count = 0; // Initialize count of fractions smaller than or equal to mid
        let maxFraction = [0, 1]; // Initialize maxFraction to track the current maximum fraction found

        // Count fractions smaller than or equal to mid
        for (let i = 0, j = 1; i < n - 1; i++) {
            while (j < n && arr[i] / arr[j] > mid) j++; // Move j pointer until arr[i] / arr[j] <= mid
            count += n - j; // Increment count by the count of fractions smaller than or equal to arr[i] / arr[j]
            
            // Update maxFraction if arr[i] / arr[j] forms a larger fraction than the current maxFraction
            if (j < n && arr[i] * maxFraction[1] > maxFraction[0] * arr[j]) {
                maxFraction = [arr[i], arr[j]];
            }
        }

        // Adjust boundaries based on count
        if (count < k) {
            left = mid; // If count is less than k, move left boundary to mid
        } else if (count > k) {
            right = mid; // If count is greater than k, move right boundary to mid
        } else {
            return maxFraction; // If count is equal to k, return maxFraction
        }
    }
};

//? Explanation:
/*
    - Initialize boundaries for binary search
    - Perform binary search
    - Calculate midpoint
    - Initialize count of fractions smaller than or equal to mid
    - Initialize maxFraction to track the current maximum fraction found
    - Count fractions smaller than or equal to mid
    - Move j pointer until arr[i] / arr[j] <= mid
    - Increment count by the count of fractions smaller than or equal to arr[i] / arr[j]
    - Update maxFraction if arr[i] / arr[j] forms a larger fraction than the current maxFraction
    - Adjust boundaries based on count
    - If count is less than k, move left boundary to mid
    - If count is greater than k, move right boundary to mid
    - If count is equal to k, return maxFraction
*/

//? Time Complexity:
// O(n log W) 