class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // 2 Pointer Method
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    isPalindrome(s) {
        let l = 0
        let r = s.length -1

        while(l < r){
            //is left pointer alphanumberic
            while(l < r && !this.isAlphanumeric(s[l])){
                l++
            }
            //is right pointer alphanumberic
            while(l < r && !this.isAlphanumeric(s[r])){
                r--
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false
            }

            l++
            r--
        }

        return true
    }



    // My Second Try
    // isAlphaNumeric(char){
    //     if(char >= "a" && char <="z"){
    //         return true
    //     }else if(char >= "A" && char <="Z"){
    //         return true
    //     }else if(char >= "0" && char <="9"){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    // isPalindrome(s) {
    //     let finalString = ""

    //     for(let c of s){
    //         if(this.isAlphaNumeric(c)){
    //             finalString += c.toLowerCase()
    //         }
    //     }

    //     return finalString == finalString.split("").reverse().join("")

    // }


    // isAlphanumeric(char) {
    //     return (
    //         (char >= 'a' && char <= 'z') ||
    //         (char >= 'A' && char <= 'Z') ||
    //         (char >= '0' && char <= '9')
    //     );
    // }


    // isPalindrome(s) {
    //     let mystring = ""
    //     for(let c of s){
    //         if(this.isAlphanumeric(c)){
    //             mystring += c.toLowerCase();
    //         }
    //     }

    //     let reversed = mystring.split("").reverse().join("")
    //     return mystring == reversed

    // }
}
