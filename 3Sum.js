let inp = [-1,0,1,2,-1,-4]

var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first pointer
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate values for the second pointer
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                // Skip duplicate values for the third pointer
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};


console.log(threeSum(inp))