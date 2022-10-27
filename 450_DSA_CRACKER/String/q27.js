// link: https://practice.geeksforgeeks.org/problems/isomorphic-strings-1587115620/1

// Isomorphic Strings

var isIsomorphic = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let sMap = {};
    let tMap = {};
    for(let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];
        
        if(sMap[sChar] === undefined) {
            sMap[sChar] = tChar;
        }
        
        if(tMap[tChar] === undefined) {
            tMap[tChar] = sChar;
        }
        
        if(sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
            return false;
        }
    }
    return true;
};

let res = isIsomorphic('egg', 'add');
console.log(res);