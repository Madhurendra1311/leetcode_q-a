// Triplet Sum in Array

// link: https://practice.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1

const find3Numbers = (arr, sum) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            for(let k = j+1; k < arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] === sum){
                    return true
                }
            }
        }
    }
    return false;
}

let res = find3Numbers([1, 4, 45, 6, 10, 8], 22);
console.log(res);