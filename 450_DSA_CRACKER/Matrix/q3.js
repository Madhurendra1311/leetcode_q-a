

const medianMatrix = (matrix, row, col) => {
    let median = []
    // const median = new Array().fill([row*col]);

    let index = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        median[index] = matrix[i][j];
        index++;
      }
    }
    median.sort((a,b) => a - b)
    let m = Math.floor((row*col)/2)
    let res = median[m]

    return res;
}

let arr = [[1, 3, 5], [2, 6, 9], [3, 6, 9]]
let arr1 = [[1], [2], [3]]

let res = medianMatrix(arr1, 3, 1)

console.log(res);