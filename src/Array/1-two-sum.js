const twoSum = function (nums, target) {
  let result = new Map(); //creating new map object for searching key value pair

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    //find the key based on diff value
    if (result.has(diff)) {
      return [result.get(diff), i]; //get the key of value and i of index value
    }
    result.set(nums[i], i); //set the key value pair to the result object
  }
  return result;
};

console.log(twoSum([2, 3, 1, 34, 5, 7], 10));
