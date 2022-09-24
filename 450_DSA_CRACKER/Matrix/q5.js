// Sorted matrix
// link: https://www.geeksforgeeks.org/print-elements-sorted-order-row-column-wise-sorted-matrix/

const sortedMatrix = (N, mat) => {
    let temp = [];
    // Store all elements of matrix into temp
    for (var i=0; i < N; i++) {
        for (var j=0; j < N; j++) {
            temp.push(mat[i][j])
        }
    }
    // Sort the temp
    temp.sort();
    // Print the values of temp
    for (var i =0; i < temp.length; i++) {
        console.log(temp[i]);
    }
}

let arr = [[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]];
let res = sortedMatrix(4, arr);
console.log(res);