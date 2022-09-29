// Longest Common Prefix
// link: https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    let res = '';
    let first = strs[0];
    for(let i = 0; i < first.length; i++){
        for(let j = 1; j < strs.length; j++){
            // console.log(strs[j][i] !== first[i], "str")
            // console.log(strs[j][i], "str1")
            if(strs[j][i] !== first[i]){
                // console.log(res, 'res')
                return res;
            }
        }
        res += first[i];
        // console.log(res, "1")
    }
    return res;
};

let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs));