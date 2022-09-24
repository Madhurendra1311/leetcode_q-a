// Find Duplicate characters in a string

// link: https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/

const allCharCount = (str) => {
		
	if(str) {
		var obj = {};
		for(let i = 0; i < str.length; i++) {
			if(obj[str[i]]){
				// obj[str[i]] += obj[str[i]]; 
                // or
                obj[str[i]] += 1;
			}else {
				obj[str[i]] = 1;
			}
		}
		return obj;
	}
			
}

let res = allCharCount("aaabcdd")
console.log(res);

const duplicateCharCount = (str) => {
    var count = {};
    for (var i = 0; i < str.length; i++) {
        count[str[i]] = 0;
    }
    for (var i = 0; i < str.length; i++) {
        count[str[i]]++;
    }
    // console.log(count, 'o');
    for (var it in count) {
        // console.log(it, count[it]);
        if (count[it] > 1) {
            console.log(`${it} - ${count[it]}`);
        }
    }
}

let res1 = duplicateCharCount("test string")
console.log(res1);
