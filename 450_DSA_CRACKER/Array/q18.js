// Common elements

// link: https://practice.geeksforgeeks.org/problems/common-elements1132/1

// A simple solution is to first find intersection of two arrays and store the intersection in a temporary array, then find the intersection of third array and temporary array. 
// Time complexity of this solution is O(n1 + n2 + n3) where n1, n2 and n3 are sizes of ar1[], ar2[] and ar3[] respectively.
// The above solution requires extra space and two loops, we can find the common elements using a single loop and without extra space. The idea is similar to intersection of two arrays. Like two arrays loop, we run a loop and traverse three arrays. 
// Let the current element traversed in ar1[] be x, in ar2[] be y and in ar3[] be z. We can have following cases inside the loop. 

// If x, y and z are same, we can simply print any of them as common element and move ahead in all three arrays.
// Else If x < y, we can move ahead in ar1[] as x cannot be a common element.
// Else If x > z and y > z), we can simply move ahead in ar3[] as z cannot be a common element.

const findCommon = (arr1, arr2, arr3) => {
    let n1 = arr1.length;
    let n2 = arr2.length;
    let n3 = arr3.length
    
    let i = 0, j = 0, k = 0;
    
    while(i < n1 && j < n2 && k < n3) {
        if(arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            console.log(arr1[i])
            i++;
            j++;
            k++
        }
        else if(arr1[i] < arr2[j]) {
            i++;
        }
        else if(arr2[j] < arr3[k]){
            j++
        }else {
            k++
        }
    }
}

let arr1 = [1, 5, 10, 20, 40, 80]
let arr2 = [6, 7, 20, 80, 100]
let arr3 = [3, 4, 15, 20, 30, 70, 80, 120]

findCommon(arr1, arr2, arr3)