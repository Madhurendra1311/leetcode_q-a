// Subarray with 0 sum

// link: https://practice.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1

let subWithZero = (arr) => {
    //loop through the array
    for(let i = 0; i < arr.length; i++){
      let sum = arr[i];
      //Check if initial item is zero then return true 
      if(sum === 0){
        return true;
      }
      
      for(let j = i; j < arr.length; j++){
        //If there is any subarray with zero then return true
        sum += arr[j];
        if(sum === 0){
          return true;
        }
      }
    }
    
    //Else return false
    return false;
  }

console.log(subWithZero([1, 2, 3, 4, 5]));