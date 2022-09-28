// Longest Prefix Suffix

// link: https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1

const printSequence = (arr, input) => {
    let res = '';
    for(let i = 0; i < input.length; i++) {
        if(input[i] === '') {
            res += '0'.charCodeAt(0)
        }else {
            let pos = input[i].charCodeAt(0) - 'A'.charCodeAt(0);
            res += arr[pos]
        }
    }
    return res;
}

let str = ["2", "22", "222",
       "3", "33", "333",
       "4", "44", "444",
       "5", "55", "555",
       "6", "66", "666",
       "7", "77", "777", "7777",
       "8", "88", "888",
       "9", "99", "999", "9999" ]

let ans = printSequence(str, "GEEKSFORGEEKS")
console.log(ans);