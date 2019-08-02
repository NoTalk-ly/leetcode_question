/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let lastExchangeIndex = nums.length - 1;
  
  function getExchangeIndex(lastExchangeIndex) {
    while(nums[lastExchangeIndex] === val && lastExchangeIndex >= 0) lastExchangeIndex--;
    return lastExchangeIndex;
  }
  function exchange(a, b, arr) {
    let temp;
    temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
  }

  lastExchangeIndex = getExchangeIndex(lastExchangeIndex);
  for(let i = 0; (i < nums.length && i <= lastExchangeIndex && lastExchangeIndex >= 0); i++) {
    if(nums[i] === val) {
      exchange(i, lastExchangeIndex, nums);
      lastExchangeIndex = getExchangeIndex(lastExchangeIndex--);
    }
  }
  if(lastExchangeIndex < 0) {
    return [];
  }
  console.log(nums);
  return ++lastExchangeIndex;

  // 将lastExchangeIndex作为交换元素的位置

  // 从前向后遍历，碰到和val相同的就用lastExchangeIndex交换。
  // 直到遍历的游标和lastExchangeIndex相同，就表示数组遍历完了


};
