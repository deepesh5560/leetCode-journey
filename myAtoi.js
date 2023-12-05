var myAtoi = function(s) {
    let result = ""
    for(let i = 0; i < s.length; i++ ){
        if(   !isNaN(parseFloat(s[i])) ){
            result = result + s[i]
        }
    }
return parseInt(result)

};

console.log(myAtoi("words and 987"))