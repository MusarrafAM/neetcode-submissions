class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sortA = s.split("").sort().join("")
        let sortB = t.split("").sort().join("")

        if(sortA === sortB){
            return true
        }else{
            return false
        }

    }


}
