// Find the Majority Element that occurs more than N/2 times


// 93

// 0
// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

// Example 1:
// Input Format
// : N = 3, nums[] = {3,2,3}
// Result
// : 3
// Explanation
// : When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

// Example 2:
// Input Format:
//   N = 7, nums[] = {2,2,1,1,1,2,2}

// Result
// : 2

// Explanation
// : After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Example 3:
// Input Format:
//   N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

// Result
// : 4
// Disclaimer: Don’t jump directly to the solution, try it out yourself first.

// Brute Force Approach
// Algorithm / Intuition
// Naive Approach: 
// Approach:
// The steps are as follows:

// We will run a loop that will select the elements of the array one by one.
// Now, for each element, we will run another loop and count its occurrence in the given array.
// If any element occurs more than the floor of (N/2), we will simply return it.

function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Selected element is arr[i]
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            // Counting the frequency of arr[i]
            if (arr[j] === arr[i]) {
                cnt++;
            }
        }

        // Check if frequency is greater than n/2
        if (cnt > Math.floor(n / 2)) {
            return arr[i];
        }
    }

    return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityElement(arr);
console.log("The majority element is:", ans);


// Solution 2 (Better):
// Intuition:
// Use a better data structure to reduce the number of look-up operations and hence the time complexity. Moreover, we have been calculating the count of the same element again and again - so we have to reduce that also.

// Approach: 
// Use a hashmap and store as (key, value) pairs. (Can also use frequency array based on the size of nums) 
// Here the key will be the element of the array and the value will be the number of times it occurs. 
// Traverse the array and update the value of the key. Simultaneously check if the value is greater than the floor of N/2. 
// If yes, return the key 
// Else iterate forward.

function majorityElement(arr) {
    // Size of the given array
    const n = arr.length;

    // Creating a Map
    const map = new Map();

    // Storing the elements with their occurrences
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    // Searching for the majority element
    for (const [num, count] of map) {
        if (count > Math.floor(n / 2)) {
            return num;
        }
    }

    return -1;
}

const arr2 = [2, 2, 1, 1, 1, 2, 2];
const ans2 = majorityElement(arr2);
console.log("The majority element is:", ans2);

