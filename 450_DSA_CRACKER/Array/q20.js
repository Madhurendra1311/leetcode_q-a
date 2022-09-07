// Subarray with 0 sum

// link: https://practice.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1

const subWithZero = (arr) => {
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

const subWithZeros = (arr) => {
    //create a new set
    let set = new Set();
   
    //add 0 to handle the case when first  element in array is 0 
    set.add(0);
    
     //To calculate the sum
     let sum = 0;
   
     //loop through the array
     for(let i = 0; i < arr.length; i++){
   
       //calculate the sum of the subarrays
       sum += arr[i];
       
       //if sum is already there, then subarray with 0 is found
       if(set.has(sum)){
          return true;
       }
       
       //Add sum to the set
       set.add(sum);
     }
     
     //Return false by default
     return false;
   }

   console.log(subWithZeros([1, 2, 3, 4, 5]));