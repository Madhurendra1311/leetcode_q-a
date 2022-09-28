// Split the binary string into substrings with equal number of 0s and 1s
// link: https://practice.geeksforgeeks.org/problems/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/1


const maxSubStr = (str) => {
    let x = 0;
    let y = 0;
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '0') {
            x++;
        } else {
            y++;
        }
        if(x === y) {
            count++;
        }
    }

    if(x != y) {
        return -1;
    }
    return count;
}

let res = maxSubStr("0100110101")
console.log(res);