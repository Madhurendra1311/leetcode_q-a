// length of longest substring

const lengthOfLongestSubstring = (str) => {
    //object to store the last seen index of each character
    const charIndexMap = {}
    //Initialize the starting point of the current substring
    let start = 0;
    //Initialize the maximum length of substring found
    let maxLength = 0;

    //Loop through each character in the string.
    for(let end = 0; end < str.length; end++) {
        const char = str[end]
        //if the character is already in the map and is within the current window.
        if(charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            //move the start pointer right after the last occurance of the current character
            start = charIndexMap[char] + 1
        }
        //update the last seen index of the current character
        charIndexMap[char] = end
        //calculate the length of the current substring and update maxlength if necessary
        maxLength = Math.max(maxLength, end - start + 1)
    }
    //Return the length of the longest substring without repeating character
    return maxLength;
}

const str = "abcabcbb"
console.log(lengthOfLongestSubstring(str))