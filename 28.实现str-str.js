/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === '') return 0;
  if(!needle || (needle && haystack.length < needle.length)) return -1;
  let strIndex = 0, subIndex = 0;
  while(subIndex < needle.length && strIndex < haystack.length) {
    if(haystack[strIndex] === needle[subIndex]) {
      subIndex++;
    } else {
      // 找到
      subIndex = 0;
    }
    strIndex++;
  }
  if(subIndex == needle.length) return strIndex - needle.length;
  else return -1;
}

