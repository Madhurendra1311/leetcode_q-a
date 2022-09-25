	
// Count and Say problem

// link: https://leetcode.com/problems/count-and-say/submissions/

var countAndSay = function(n) {
    let i = 1;
    let res = '1'; //intialize the base case
    while (i <= n-1) { //run the loop for n-1 times are base case of 1 is already intiaziled
        let count = 1;
        let temp=''; //counter and temp string variables for evry iteration
        for (let j = 1; j < res.length+1; j++) {
            if (res[j] === res[j - 1]) {
                count++; //if the number is same as hthe previous increment the counter
            } else { //else add the number to the string and reintazie the counter
                temp += (count + res[j - 1])
                count = 1;
            }
        }
        res=temp; //assign the final temp string to res and increment the i variable.
        i++
    }
    return res //return the final answer.
};

let res = countAndSay(4)
console.log(res);