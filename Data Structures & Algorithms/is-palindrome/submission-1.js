class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // My Second Try
    isAlphaNumeric(char){
        if(char >= "a" && char <="z"){
            return true
        }else if(char >= "A" && char <="Z"){
            return true
        }else if(char >= "0" && char <="9"){
            return true
        }else{
            return false
        }
    }

    isPalindrome(s) {
        let finalString = ""

        for(let c of s){
            if(this.isAlphaNumeric(c)){
                finalString += c.toLowerCase()
            }
        }

        return finalString == finalString.split("").reverse().join("")

    }


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
