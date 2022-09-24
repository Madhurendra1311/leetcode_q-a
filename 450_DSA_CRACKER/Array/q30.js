// Three way partitioning

// link: https://practice.geeksforgeeks.org/problems/three-way-partitioning/1

const threeWayPartition = (arr, a, b) => {
    let l = 0;
    let r = arr.length - 1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < a) {
            let temp = arr[i];
            arr[i] = arr[l];
            arr[l] = temp;
            i++;
        } else if(arr[i] > b) {
            let temp1 = arr[i];
            arr[i] = arr[r];
            arr[r] = temp1;
            r--;
            i--;
        }
    }
    return arr;
}

// let res = threeWayPartition([6,3,2,1,5])
// console.log(res);