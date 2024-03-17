/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

let threeSum = (nums) => {
  //sorted array easy for left and right search
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1,
      sum = 0;

    //condition loop
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        //condition loop if left is equal to next right and increase left by left++
        while (nums[i] === nums[left + 1]) left++;
        //condition loop if right is equal to next left and decrease right by right--
        while (nums[i] === nums[right + 1]) right--;
        //increment and decrement after sum = 0
        left++;
        right--;
      } else if (sum < left) {
        // sum != 0 mean check the sum<left
        left++;
      } else {
        // else part sum>left
        right--;
      }
      //condition loop if "nums[i]" is equal to nums[i + 1] and increase i by i++
      while (nums[i] === nums[i + 1]) i++;
    }
  }

  return result;
};

let array = [0, 1, -1];

console.log(threeSum(array));
