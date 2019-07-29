/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let indexs = [];
  for(let i = 0; i < nums.length; i++) {
    indexs[0] = i;
    let surplus = target - nums[i];
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[j] === surplus) { 
        indexs[1] = j; 
        return indexs;
      }
    }
  }
};

