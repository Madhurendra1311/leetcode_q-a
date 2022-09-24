// Search an element in a matriix

// link: https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function(matrix, target) {
    let left = matrix.length; // row length
    let right = matrix[0].length; // column length
    
    let i = 0; // first row
    let j = right-1; // last column
    
    // till i < n (row o to n) AND j >= 0 (col m to 0)
    while(i < left && j >= 0){ 
        if(matrix[i][j] == target){
            return true;
        }
        if(matrix[i][j] > target){
            // we'll be moving towards left if the value of target is smaller 
            j--;
        }else{
            // otherwise we'll be moving downwards if the target is greater than
            i++;
        }
    }
    return false;
};

let res = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
console.log(res);