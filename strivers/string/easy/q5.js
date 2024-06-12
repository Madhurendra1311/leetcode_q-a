// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    // Create two dictionaries to store the mappings
    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // If charS is already mapped to a different character, return false
        if (mapS[charS] && mapS[charS] !== charT) {
            return false;
        }

        // If charT is already mapped to a different character, return false
        if (mapT[charT] && mapT[charT] !== charS) {
            return false;
        }

        // Create the mapping between charS and charT
        mapS[charS] = charT;
        mapT[charT] = charS;
    }

    return true;
}

// Example 1
let s1 = "egg";
let t1 = "add";
console.log(isIsomorphic(s1, t1)); // Output: true