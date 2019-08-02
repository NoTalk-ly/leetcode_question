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
  let originX = x;
  let tenLen = 1;
  while(x/ 10 >= 1) {
    tenLen *= 10;
    x = Math.floor(x / 10);
  }

  let anotherDivisor = 10;
  // 什么时候截止
    while(originX > 10) {
      if(Math.floor(originX / tenLen) === Math.floor(originX % 10)) {
        originX = (( originX - ( originX % 10 ) ) % tenLen ) / anotherDivisor;
        tenLen /= 100;
        continue;
      } else {
        return false;
      }
    }
    if((originX === 0) || (originX < 10 && tenLen < 100) ) return true;
    else return false;
};

console.log(isPalindrome(1000030001))
10000031
121
11

