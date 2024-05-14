//? Date: 5/132024

//? Major Concepts: Array, Greedy, Bit Manipulation, Matrix

//? Prompt: 
/*
You are given an m x n binary matrix grid.

A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score after making any number of moves (including zero moves).

Example 1:


Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
Example 2:

Input: grid = [[0]]
Output: 1

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 20
grid[i][j] is either 0 or 1.
*/

//? Test Cases:
matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]])
matrixScore([[0]])

//? Solution:
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Greedily toggle the rows to make the leftmost bit of each row 1
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < n; j++) {
                grid[i][j] ^= 1;
            }
        }
    }

    // Greedily toggle the columns to make more 1's in each column
    for (let j = 1; j < n; j++) {
        let count_1s = 0;
        for (let i = 0; i < m; i++) {
            count_1s += grid[i][j];
        }
        if (count_1s < m / 2) { // If there are more 0's than 1's, toggle the column
            for (let i = 0; i < m; i++) {
                grid[i][j] ^= 1;
            }
        }
    }

    // Calculate the final score
    let score = 0;
    for (let i = 0; i < m; i++) {
        score += parseInt(grid[i].join(''), 2);
    }

    return score;
};
//? Explanation:
/*
    - Greedily toggle the rows to make the leftmost bit of each row 1
    - Greedily toggle the columns to make more 1's in each column
    - Calculate the final score
*/

//? Time Complexity:
// O(M * N) where M is the number of rows and N is the number of columns in the grid    