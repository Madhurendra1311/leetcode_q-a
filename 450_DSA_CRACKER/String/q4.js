// Write a Code to check whether one string is a rotation of another

// link: https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/

const checkString = (s1, s2) => {
    if(s1.length !== s2.length) {
        return false;
    }
    let target = s1 + s1;
    return target.includes(s2)
}

let res = checkString('ABCD', 'CDAB')
console.log(res);