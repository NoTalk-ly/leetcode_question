/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split(''), index = 0
    var stack = [], topIndex = -1;
    s = s.split('');
    while(arr.length) {
      if(match(stack[topIndex], arr[index])) {
        stack.pop()
        topIndex--;
      } else {
        stack.push(arr[index]);
        topIndex++
      }
      arr.shift();
    }
    return stack.length ? false : true;


    function match(a, b) {
      if( (a === '(' && b === ')') ||  (a === '[' && b === ']') || (a === '{' && b === '}'))
      return true 
    }
};

