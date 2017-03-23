/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  nums.forEach(item=>{
    if(~nums.indexOf(target-item)){
      console.log(target-item);
      console.log(nums.indexOf(target-item));
      return [item,nums[nums.indexOf(target-item)]]
    }
  })
};

const nums = [3,2,4]
const target = 6

console.log(twoSum(nums,target));
