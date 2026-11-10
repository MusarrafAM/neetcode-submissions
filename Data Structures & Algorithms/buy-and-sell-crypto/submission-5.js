class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    

    //Sliding window method.
    maxProfit(prices) {
        let l = 0,
            r = 1;
        let maxP = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            } else {
                l = r;
            }
            r++;
        }
        return maxP;
    }



    // My First Solution
    // maxProfit(prices) {
    //     let maxProfit = 0
    //     let profit = 0
        
    //     for(let i=0; i<prices.length; i++){
    //         for(let j=i+1; j<prices.length; j++){
    //             profit = prices[j] - prices[i]
    //             if(profit > maxProfit){
    //                 maxProfit = profit
    //             }
    //         }
    //     }

    //     return maxProfit
        
    // }
}
