// Find the first repeated word in a string

// link: https://www.geeksforgeeks.org/find-first-repeated-word-string/

const getDuplicate = (str) => {
    const arr=str.split(/\W+/g);// This is a Regular Expression - See it in use at https://regex101.com/r/X0Cyxx/1
    return arr.find( (word,index) =>
      arr.slice(0,index).includes(word)
    );
  }
  
  let Sentence = "Ravi had been saying that he had been there";
  console.log(getDuplicate(Sentence))


  const wordRepeat = (str) => {
    let splitStr = str.split(' ');
    let list = [];
  
    for (let i = 0; i < splitStr.length; i++) {
      for (let j = i + 1; j < splitStr.length; j++) {
        if (splitStr[i] === (splitStr[j])) {
          //repeat = splitStr[i];
          list.push(splitStr[i]);
        }
      }
    }
    //console.log(list);
    return list[0];
  }
  
  console.log(wordRepeat(Sentence));