// link: https://practice.geeksforgeeks.org/problems/print-anagrams-together/1
// https://leetcode.com/problems/group-anagrams/

// Print Anagrams Together

var groupAnagrams = function(strs) {
    let obj = {}
    
    for(let str of strs) {
        let sortedKey = str.split('').sort().join('');
        (!obj[sortedKey]) ? obj[sortedKey] = [str] : obj[sortedKey].push(str)
        
    }
    return Object.values(obj)
};

let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(strs);