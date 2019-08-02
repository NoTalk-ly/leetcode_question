/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    // 根据 字符串长度为字符串数组排序
    strs = strs.sort((a, b) => {
      return a.length < b.length;
    })
    let commonPrefix = strs[0];

    for(let i = 1; i < strs.length; i++) {
      // 两个字符串，commonPrefix 短， strs[i] 长， 获取公共前缀
      let lastIndex = getCommonPrefix(commonPrefix, strs[i]);
      if(lastIndex == 0 ) return '';
      commonPrefix = commonPrefix.slice(0, lastIndex);
    }

    return commonPrefix;

    function getCommonPrefix(short, long) {
      let lastIndex = 0;
      for(; lastIndex < short.length; lastIndex++) {
        if(short[lastIndex] === long[lastIndex]) {
          continue;
        }
        else {
          break;
        }
      }
      return lastIndex;
    }

  
};

