const permutation = (string) => {
    if (string.length < 2) {
        return string; // This is our break condition
    }
    let permutations = []; // This array will hold our permutations
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
    
        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue; // skip it this time
        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
    
        for (var subPermutation of permutation(remainingString))
            permutations.push(char + subPermutation)
    }
    return permutations;
  }

  let res = permutation("abc");
  console.log(res);