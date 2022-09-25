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


const check_rotation = (s, goal) => {
    if (s.length != goal.length){
        return false;
    }
    let q1 = []
    for(let i=0;i<s.length;i++) {
        q1.push(s[i])
    }
 
    let q2 = []
    for(let i=0;i<goal.length;i++) {
        q2.push(goal[i])
    }
 
    let k = goal.length
    while (k--){
        let ch = q2[0]
        // console.log(ch, '34');
        q2.shift()
        // console.log(q2, '36');
        q2.push(ch)
        // console.log(q2, '38');
        if (JSON.stringify(q2) == JSON.stringify(q1)) {
            return true
        }
    }
    return false
}

let res1 = check_rotation("ABCD", "CDAB")
console.log(res1);