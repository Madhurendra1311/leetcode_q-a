// Maximum Product Subarray

// link: https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1

const maxProduct = (arr) => {
    let globalMaxProduct = arr[0];

    for (let i = 0; i < arr.length; i++) {
        // On every iteration of i, we reset the localMaxProduct to 1. 
        // The reason we do this is because we have to multiply every combination of arr[j].
        let localMaxProduct = 1;
        for (let j = i; j < arr.length; j++) {
        localMaxProduct *= arr[j];

        if (localMaxProduct > globalMaxProduct) {
            globalMaxProduct = localMaxProduct;
        }
        }
    }

    return globalMaxProduct;
}

console.log(maxProduct([6, -3, -10, 0, 2]));