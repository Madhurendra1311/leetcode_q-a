// 

// Example 1:
// Input Format:
//  arr[] = {2,2,1}
// Result:
//  1
// Explanation:
//  In this array, only the element 1 appear once and so it is the answer.

// Example 2:
// Input Format:
//  arr[] = {4,1,2,1,2}
// Result:
//  4
// Explanation:
//  In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.

// Naive Approach(Brute-force approach): 
// Intuition:
// For every element present in the array, we will do a linear search and count the occurrence. If for any element, the occurrence is 1, we will return it.

// Approach:
// The steps are as follows:

// First, we will run a loop(say i) to select the elements of the array one by one.
// For every element arr[i], we will perform a linear search using another loop and count its occurrence.
// If for any element the occurrence is 1, we will return it.

function getSingleElement(arr) {
    // Size of the array:
    const n = arr.length;
  
    // Run a loop for selecting elements:
    for (let i = 0; i < n; i++) {
      const num = arr[i]; // selected element
      let cnt = 0;
  
      // Find the occurrence using linear search:
      for (let j = 0; j < n; j++) {
        if (arr[j] === num) {
          cnt++;
        }
      }
  
      // If the occurrence is 1, return the number:
      if (cnt === 1) {
        return num;
      }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
  }
  
  function main() {
    const arr = [4, 1, 2, 1, 2];
    const ans = getSingleElement(arr);
    console.log("The single element is:", ans);
  }
  
  main();

  
//   Better Approach(Using Hashing): 
// Intuition:
// In the previous approach, we were finding the occurrence of an element using linear search. We can optimize this using hashing technique. We can simply hash the elements along with their occurrences in the form of (key, value) pair. Thus, we can reduce the cost of finding the occurrence and hence the time complexity.

// Now, hashing can be done in two different ways and they are the following:

// Array hashing(not applicable if the array contains negatives or very large numbers)
// Hashing using the map data structure

// Approach:

// The steps are as follows:

// First, we will find the maximum element(say maxElement) to know the size of the hash array.
// Then we will declare a hash array of size maxElement+1.
// Now, using another loop we will store the elements of the array along with their frequency in the hash array. (i.e. hash[arr[i]]++)
// After that, using another loop we will iterate over the hash array, and try to find the element for which the frequency is 1, and finally, we will return that particular element.
// Note: While searching for the answer finally, we can either use a loop from 0 to n(i.e. Size of the array) or use a loop from 0 to maxElement. So, the time complexity will change accordingly.

// Now, using array hashing it is difficult to hash the elements of the array if it contains negative numbers or a very large number. So to avoid these problems, we will be using the map data structure to hash the array elements.

function getSingleElement(arr) {
    // Size of the array:
    let n = arr.length;

    // Find the maximum element:
    let maxi = arr[0];
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, arr[i]);
    }

    // Declare hash array of size maxi+1
    // And hash the given array:
    let hash = new Array(maxi + 1).fill(0);
    for (let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }

    // Find the single element and return the answer:
    for (let i = 0; i < n; i++) {
        if (hash[arr[i]] === 1) {
            return arr[i];
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

function main() {
    let arr = [4, 1, 2, 1, 2];
    let ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();


// Optimal Approach(Using XOR): 
// Intuition:
// Two important properties of XOR are the following:

// XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
// XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2

// Here all the numbers except the single number appear twice and so will form a pair. Now, if we perform XOR of all elements of the array, the XOR of each pair will result in 0 according to the XOR property 1. The result will be = 0 ^ (single number) = single number (according to property 2).

// So, if we perform the XOR of all the numbers of the array elements, we will be left with a single number.

// Approach:
// We will just perform the XOR of all elements of the array using a loop and the final XOR will be the answer.
// Dry run:

// Assume the given array is: [4,1,2,1,2]
// XOR of all elements = 4^1^2^1^2
//       = 4 ^ (1^1) ^ (2^2)
//       = 4 ^ 0 ^ 0 = 4^0 = 4
// Hence, 4 is the single element in the array.

function getSingleElement(arr) {
    // XOR all the elements:
    let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
}

function main() {
    let arr = [4, 1, 2, 1, 2];
    let ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();