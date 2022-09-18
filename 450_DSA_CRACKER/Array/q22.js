// Longest consecutive subsequence

// link: https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1

const findLongestConseqSubseq = (arr) => {
    let n = arr.length;
    let ans = 0;
    let count = 0;
    // sort the array
    arr.sort((a,b) => a-b);
    let dist = [];
    dist.push(arr[0]);
    //insert repeated elements only once in the vector
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i-1]) {
            dist.push(arr[i]);
        }
    }
    // find the maximum length
    // by traversing the array
    for(let i = 0; i < dist.length; i++){
        // Check if the current element is equal
        // to previous element +1
        if(i > 0 && dist[i] === dist[i-1]+1) {
            count++;
            // reset the count
        }else{
            count = 1;
        }

        // update the maximum
        ans = Math.max(ans, count);
    }
    return ans;
}

let res = findLongestConseqSubseq([1, 2, 2, 3])
console.log(res);

// Time complexity: O(Nlog(N)), Time to sort the array is O(Nlog(N)).
// Auxiliary space: O(N). Extra space is needed for storing distinct elements.