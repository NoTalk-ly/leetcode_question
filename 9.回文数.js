/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 先获取数字的位数
  if(x < 0) return false;
  let tenLen = 1;
  while(x/ 10 >= 1) {
    tenLen *= 10;
    x = Math.floor(x / 10);
  }

  let anotherDivisor = 10;
  // 什么时候截止
    while(x != 0 || x > 10) {
      if(Math.floor(x / tenLen) === Math.floor(x % 10)) {
        x = Math.floor(( x - ( x % 10 ) ) / tenLen);
        continue;
      }
    }
    if(x == 0 || x < 10) return true;
    else return false;
};

console.log(isPalindrome(121))


