class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // My First Solution
    // hasDuplicate(nums) {
    //     let sorted = nums.sort((a,b)=> a-b)
    //     let curr = sorted[0]
    //     for(let i=1; i<sorted.length; i++){
    //         if(curr == sorted[i]){
    //             return true
    //         }
    //         curr =  sorted[i]
    //     }

    //     return false
    // }

    // Second Solution
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}
