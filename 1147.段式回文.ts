/*
 * @lc app=leetcode.cn id=1147 lang=typescript
 *
 * [1147] 段式回文
 */

// @lc code=start
function longestDecomposition(text: string): number {
  // l为前缀字符串的‘开始’索引
  // r为后缀字符串的‘开始’索引
  const judge = (text: string, l: number, r: number, len: number) => {
    while (len > 0) {
      if (text[l] !== text[r]) {
        return false;
      }
      l++;
      r++;
      len--;
    }
    return true;
  };
  const n = text.length;
  let ret = 0;
  // 前缀字符串的‘开始’索引
  let l = 0;
  // 后缀字符串的‘结束’索引
  let r = n - 1;
  while (l <= r) {
    let len = 1;
    // 找到长度最短的能满足相同且无重叠的前后缀进行分割
    // 1.前后缀无重叠
    while (l + len - 1 < r - len + 1) {
      // 2.前后缀长度最短
      // 3.前后缀相同
      if (judge(text, l, r - len + 1, len)) {
        // 若找到了，此时该字符串可以被分割为前缀，中间部分与后缀字符串组成
        // 若中间部分字符串非空，则返回中间部分字符串能分割成的段式回文的最大数目加2
        // 否则字符串text[l,r]最多只能拆分为前后缀2个段式回文，直接返回2即可
        ret += 2;
        break;
      }
      len++;
    }
    // 若找不到，则text[l,r]整体作为一个段式回文直接返回1
    if (l + len - 1 >= r - len + 1) {
      ret++;
    }
    l += len;
    r -= len;
  }
  return ret;
}
// @lc code=end
