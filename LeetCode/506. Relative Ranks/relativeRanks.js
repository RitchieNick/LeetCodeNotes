//? Date: 5/10/2024

//? Major Concepts: Array, Sorting, Heap (Priority Queue)

//? Prompt: 
/*
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete.

Example 1:

Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
Example 2:

Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

Constraints:

n == score.length
1 <= n <= 104
0 <= score[i] <= 106
All the values in score are unique.
*/

//? Test Cases:
findRelativeRanks([5,4,3,2,1]); // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
findRelativeRanks([10,3,8,9,4]); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

//? Solution:
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // Clone the original scores array to avoid mutating the original input
    const sortedScores = [...score];
    // Sort the scores in descending order
    sortedScores.sort((a, b) => b - a);

    const ranks = {};

    // Assign ranks based on the sorted scores
    for (let i = 0; i < sortedScores.length; i++) {
        if (i === 0) {
            ranks[sortedScores[i]] = "Gold Medal";
        } else if (i === 1) {
            ranks[sortedScores[i]] = "Silver Medal";
        } else if (i === 2) {
            ranks[sortedScores[i]] = "Bronze Medal";
        } else {
            ranks[sortedScores[i]] = (i + 1).toString();
        }
    }

    // Map the ranks to the original scores array
    const result = score.map(score => ranks[score]);

    return result;
};

//? Explanation:
/*
    - Clone the original scores array to avoid mutating the original input
    - Sort the scores in descending order
    - Create a ranks object to store the ranks of the athletes
    - Assign ranks based on the sorted scores
    - Map the ranks to the original scores array
*/

//? Time Complexity:
// Linear Time Complexity: O(n)