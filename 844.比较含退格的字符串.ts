/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
// 重构字符串
/* function backspaceCompare(s: string, t: string): boolean {
  const build = (s: string) => {
    const ret: string[] = [];
    for (const c of s) {
      c === "#" ? ret.pop() : ret.push(c);
    }
    return ret.join("");
  };
  return build(s) === build(t);
} */

// 双指针
function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;
  let skipS = 0;
  let skipT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === "#") {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        // 找到s串的有效字符
        break;
      }
    }
    while (j >= 0) {
      if (t[j] === "#") {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        // 找到t串的有效字符
        break;
      }
    }
    if (i >= 0 && j >= 0) {
      if (s[i] !== t[j]) {
        return false;
      }
      i--;
      j--;
    } else if (i >= 0 || j >= 0) {
      // 存在较短字符串提前遍历结束
      return false;
    }
  }
  return true;
}
// @lc code=end
