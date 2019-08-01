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
    let lastChangeIndex = nums.length - 1;
    while(nums[lastChangeIndex] === val) lastChangeIndex--;

    // 将lastChangeIndex作为交换元素的位置

    // 从前向后遍历，碰到和val相同的就用lastChangeIndex交换。
    // 直到遍历的游标和lastChangeIndex相同，就表示数组遍历完了

};

