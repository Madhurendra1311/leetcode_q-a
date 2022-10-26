// Remove Consecutive Characters

// link: https://practice.geeksforgeeks.org/problems/consecutive-elements2306/1

const removeDuplicates = (s) => {
 
    let n = s.length;
    let str = "";
    // We don't need to do anything for
    // empty string.
    if (n == 0) {
        return str;
    }

    // Traversing string
    for (let i = 0; i < n - 1; i++) {
        //checking if s[i] is not same as s[i+1] then add it into str
        if (s[i] != s[i + 1]) {
            str += s[i];
        }
    }
    //Since the last character will not be inserted in the loop we add it at the end
     
    str += s[n-1];
    return str;
}

let result = removeDuplicates('aabb')
console.log(result);