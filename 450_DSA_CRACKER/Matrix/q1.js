// Spirally traversing a matrix

// link: https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1

// link: https://leetcode.com/problems/spiral-matrix/

const spirallyTraverse = (matrix) => {
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    //Find the direction of the loop to run.
    let dir = 0;
    let res = [];

    while(top <= bottom && left <= right) {
        //For the left to right movement.
        if (dir == 0) {
            for (let i = left; i <= right; i++) {
                res.push(matrix[top][i]);
            }
            top += 1;
        }

        //For the top to bottom movement.
        else if (dir == 1) {
            for (let i = top; i <= bottom; i++) {
                res.push(matrix[i][right]);
            }
            right -= 1;
        }

        //For the right to left movement.
        else if (dir == 2) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom -= 1;
        }

        //For the bottom to top.
        else if (dir == 3) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left += 1;
        }

        dir = (dir+1) % 4;
    }
    return res;
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
let res = spirallyTraverse(arr)
console.log(res);