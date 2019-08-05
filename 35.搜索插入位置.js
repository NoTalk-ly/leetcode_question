/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 二分法
    if(!Array.isArray(nums)) return new Error('非数组');
    let len = nums.length, start = 0, end = len -1, middleIndex = parseInt((start + end - 1) / 2);
    if(nums[end] < target) return len;
    else if(nums[0] > target) return 0;
    if(nums.length = 1) {
      if(nums[start] <= target) return 0;
      else return 1;
    }
    else {
      while(start != end) {
      // while(start <= middleIndex || middleIndex >= end) {
        if(nums[middleIndex] < target) {
          start = middleIndex + 1;
        } else if(nums[middleIndex] === target) {
          return middleIndex;
        } else {
          end = middleIndex;
        }
        middleIndex = parseInt((start + end - 1) / 2);
      }
      if(target < nums[middleIndex]) { return middleIndex }
      else { return middleIndex + 1;}
    }
};

