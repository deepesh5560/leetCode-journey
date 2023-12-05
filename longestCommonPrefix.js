var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        console.log(strs[i].indexOf(ans))
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            // console.log(ans)
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};
strs = ["flower","flow","flghts"]
console.log(longestCommonPrefix(strs))