// Best Time to Buy and Sell Stock
// link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


var maxProfit = function(prices) {
    let n = prices.length
    let maxRight = prices[n-1]
    let maxProfit = 0;
    for(let i = n - 2; i >= 0; i--){
        maxRight = Math.max(prices[i], maxRight);
        maxProfit = Math.max(maxProfit, maxRight-prices[i]);
    }
    return maxProfit;
};

let arr = [7,1,5,3,6,4]
let res = maxProfit(arr);
console.log(res);
