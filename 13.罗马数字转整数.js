/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // I X C 可叠加
    // III 
    // I 和 V X 可联系
    // X 和 L C 可联系
    // C 和 D M 可联系
    let result = 0;
    let prev;
    let map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    for(let i = 0; i < s.length; i++) {
      if(['I', 'X', 'C'].indexOf(prev) > -1) {
        switch(prev) {
          case 'I': {
            if(s[i] === 'V') result += 4;
            if(s[i] === 'X') result += 9;
            else { result += 1; }
            break;
          }
          case 'X': {
            if(s[i] === 'L') result += 40;
            if(s[i] === 'C') result += 90;
            else { result += 10; }
            break;
          }
          case 'C': {
            if(s[i] === 'D') result += 400;
            if(s[i] === 'M') result += 900;
            else { result += 100; }
          }
        }
        prev = undefined;
      }
      if(['I', 'X', 'C'].indexOf(s[i]) > -1) {
        prev = s[i];
      } else {
        result += map[s[i]];
      }
    }
    return result;
};

romanToInt("MCMXCIV")

