// Roman Number to Integer
// link: https://practice.geeksforgeeks.org/problems/roman-number-to-integer3201/1

var romanToInt = function(s) {
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i=0; i < s.length; i++){
        const cur = sym[s[i]];
        const next = sym[s[i+1]];

        if (cur < next){
            result += next - cur // IV -> 5 - 1 = 4
            i++
        } else {
            result += cur
        }
    }

    return result; 
};

let res = romanToInt("III")
console.log(res);

var romanToInt1 = function(s) {
    const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let ans = 0
    for(let i = 0; i < s.length; i++){
        if(roman[s[i]] < roman[s[i+1]]){
            ans -= roman[s[i]]
        } else {
            ans += (roman[s[i]]) 
        }
    }
    return ans;
};