// Merge Two Sorted Arrays Without Extra Space

const mergeTwoSortedArray = (arr1, arr2) => {
    let n = arr1.length;
    let m = arr2.length;
    let i = n - 1;
    let j = 0

    while(i >= 0 && j < m) {
        if(arr1[i] > arr2[j]) {
            let temp = arr1[i];
            arr1[i] = arr2[j];
            arr2[j] = temp;
        }
        i--;
        j++
    }

    arr1.sort();
    arr2.sort();

    return [...arr1, ...arr2];
}

let arr1 = [1, 5, 9, 10, 15, 20]
let arr2 = [2, 3, 8, 13]

let res = mergeTwoSortedArray(arr1, arr2)
console.log(res);