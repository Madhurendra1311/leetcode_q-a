// string 0 0 0 1 0 1 0 1 1 1
// case1 0 1 0 1 0 1 0 1 0 1 even 1 odd 0
// case2 1 0 1 0 1 0 1 0 1 0 even 0 odd 1
var minFlips = function(s) {
    let c1 = 0;
    let c2 = 0;
    for(let i = 0; i < s.length; i++) {
        if(i&1 && s[i] === '0') {
            c1++;
        }
        if(i%2 === 0 && s[i] === '1') {
            c1++;
        }
        if(i&1 && s[i] === '1') {
            c2++;
        }
        if(i%2 === 0 && s[i] === '0') {
            c2++;
        }
    }
    let count = Math.min(c1, c2)
    return count;
};

// let res = minFlips("01001001101")
// console.log(res);

const minFlips1 = (S) => {
    // Code here
    let flips=0;
//         idea is to calculate string flips when the string starts from 1 and then use (length - calculated) to get the flips when the string starts from 0
//         finally return the minimum
    for(let i=0;i<S.length;i++)
    {
//             If there is a 0 at even index then we need to flip it
        if(i%2==0)
        {
            if(S.charAt(i)=='0') {
                flips++;
            }
        }
//             If there is a 1 at odd index then we need to flip it
        else if(i%2!=0)
        {
            if(S.charAt(i)=='1') {
                flips++;
            }
        }
    }
//         minmum flips would either be the flips in making string start with 1 or with 0
    return Math.min(flips, S.length-flips);
}

let res = minFlips1("01001001101")
console.log(res);