// Linear Search in C

// Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.

function searchElement(arr){
    for(let i=0; i<n; i++) {
        if(arr[i]==num)
            return i;
        }
        return -1;
}

console.log(searchElement([8,7,6,3]))