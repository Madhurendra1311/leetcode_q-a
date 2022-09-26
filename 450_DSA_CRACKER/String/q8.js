// Print all subsequences of a string

const getAllSubstrings = (str) => {
    var res = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        // console.log(str.substring(2,4))
        res.push(str.substring(i, j));
      }
    }
    return res;
  }
  var word = "abc";
  console.log(getAllSubstrings(word));