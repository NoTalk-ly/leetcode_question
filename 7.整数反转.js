/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // let positive = x >= 0;
    // let nums = x.toString().split('')
    // nums = positive ? nums : nums.splice(1)

    // let temp;
    // for(let i = 0; i < nums.length / 2; i++) {
    //   let otherIndex = nums.length - 1 - i;
    //   temp = nums[i];
    //   nums[i] = nums[otherIndex];
    //   nums[otherIndex] = temp;
    // }
    // let res = parseInt((positive ? '+' : '-' ) + nums.join(''))
    // // 32的原因
    // if( (positive && res > 2 ** 31 - 1) || (!positive && res < 0 - (2 ** 31)) ) {
    //   return 0
    // } else {
    //   return res
    // }

    // 实现2
    let reverse = Math.abs(x).toString().split('').reverse().join('');
    let positive = x >= 0;
    if(reverse.length === 10 && ((positive && parseInt(reverse) >= 2 ** 31 -1 ) || (!positive && parseInt(reverse) >= 2 ** 31))) {
      return 0
    } else {
      return parseInt((positive ? '+' : '-') + reverse);
    }
  };



