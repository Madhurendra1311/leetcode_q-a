// Minimum swaps and K together
// link: https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1

const minSwap = (arr, k) => {
    let fav = 0;
    let nonFav = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= k) {
            fav++;
        }
    }
    for(let j = 0; j < fav; j++) {
        if(arr[j] > k) {
            nonFav++;
        }
    }
    let l = 0;
    let r = fav - 1;
    let result = Infinity;
    while(r<arr.length) {
        result = Math.min(result, nonFav)
        r++;
        if(r < arr.length && arr[r] > k) {
            nonFav++;
        }
        if(l < arr.length && arr[l] > k) {
            nonFav--;
        }
        l++;
    }
    return (result === Infinity) ? 0 : result;
}

let res = minSwap([2, 1, 5, 6, 3], 3)

console.log(res);