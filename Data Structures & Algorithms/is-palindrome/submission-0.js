class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }


    isPalindrome(s) {
        let mystring = ""
        for(let c of s){
            if(this.isAlphanumeric(c)){
                mystring += c.toLowerCase();
            }
        }

        let reversed = mystring.split("").reverse().join("")
        return mystring == reversed

    }
}
