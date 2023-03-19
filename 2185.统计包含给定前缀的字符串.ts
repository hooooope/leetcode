/*
 * @lc app=leetcode.cn id=2185 lang=typescript
 *
 * [2185] 统计包含给定前缀的字符串
 */

// @lc code=start
/* function prefixCount(words: string[], pref: string): number {
  let ret = 0;
  for (const word of words) {
    let flag = true;
    for (let i = 0; i < pref.length; i++) {
      if (pref[i] !== word[i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      ret++;
    }
  }
  return ret;
} */

function prefixCount(words: string[], pref: string): number {
  let ret = 0;
  for (const word of words) {
    if (word.startsWith(pref)) {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
