class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let profit = 0
        
        for(let i=0; i<prices.length; i++){
            for(let j=i+1; j<prices.length; j++){
                profit = prices[j] - prices[i]
                if(profit > maxProfit){
                    maxProfit = profit
                }
            }
        }

        return maxProfit
        
    }
}
