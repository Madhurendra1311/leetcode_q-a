// link: https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

// Union of two arrays

// Approach:
// 1) Use two index variables i and j, initial values i = 0, j = 0 
// 2) If arr1[i] is smaller than arr2[j] then print arr1[i] and increment i. 
// 3) If arr1[i] is greater than arr2[j] then print arr2[j] and increment j. 
// 4) If both are same then print any of them and increment both i and j. 
// 5) Print remaining elements of the larger array.

const printUnion = (arr1, arr2) => {
    let temp = []
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            temp.push(arr1[i])
            i++;
        }
        else if(arr2[j] < arr1[i]) {
            temp.push(arr2[j])
            j++;
        }
        else {
            temp.push(arr2[j])
            j++;
            i++;
        }
    }
    while(i < arr1.length) {
        temp.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        temp.push(arr2[j])
        j++;
    }

    return temp;
} 

let arr1 = [1, 3, 4, 5, 7];
let arr2 = [2, 3, 5, 6];
let res = printUnion(arr1, arr2);
// console.log(res);

// Approach 2:

let array1 = [1, 3, 4, 5, 7];
let array2 = [2, 3, 5, 6];
let result = [...new Set([...array1, ...array2])].sort((a, b) => a - b);
// console.log(result);

// Approach 3:

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

const unionArray = (arr1, arr2) => {
    let obj = {}
    for(let i = arr1.length - 1; i >= 0; i--) {
        obj[arr1[i]] = arr1[i];
    }
    for(let i = arr2.length - 1; i >= 0; i--) {
        obj[arr2[i]] = arr2[i];
    }
    let res = []
    for(var k in obj) {
        if(obj.hasOwnProperty(k)) {
            res.push(obj[k])
        }
    }

    return res;
}

let arr01 = [1, 3, 4, 5, 7];
let arr02 = [2, 3, 5, 6];

let results = unionArray(arr01, arr02);
console.log(results);


