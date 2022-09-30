// Minimum Swaps for Bracket Balancing

// link: https://practice.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing2704/1

const minimumNumberOfSwaps = (str) => {
    let close = 0;
    let maxClose = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '[') {
            close -= 1;
        } else {
            close += 1;
        } 
        maxClose = Math.max(close, maxClose)
    }
    return Math.floor((maxClose + 1) / 2);
}

let str = "[[][]]"
let res = minimumNumberOfSwaps(str);
console.log(res);