/*
 * @lc app=leetcode.cn id=2042 lang=typescript
 *
 * [2042] 检查句子中的数字是否递增
 */

// @lc code=start
/* function areNumbersAscending(s: string): boolean {
  const isDigit = (c: string) => {
    return (
      c &&
      c.charCodeAt(0) >= "0".charCodeAt(0) &&
      c.charCodeAt(0) <= "9".charCodeAt(0)
    );
  };
  let pre = -1;
  let cur = "";
  for (let i = 0; i <= s.length; i++) {
    const c = s[i];
    if (isDigit(c)) {
      cur += c;
    } else {
      if (cur.length) {
        if (pre !== -1 && pre >= Number(cur)) {
          return false;
        }
        pre = Number(cur);
        cur = "";
      }
    }
  }
  return true;
} */

function areNumbersAscending(s: string): boolean {
  const isDigit = (c: string) => {
    return parseInt(c).toString() === "NaN" ? false : true;
  };
  let i = 0;
  let pre = -1;
  const n = s.length;
  while (i < n) {
    if (isDigit(s[i])) {
      let cur = 0;
      while (i < n && isDigit(s[i])) {
        cur += cur * 10 + s[i].charCodeAt(0) - "0".charCodeAt(0);
        i++;
      }
      if (cur <= pre) {
        return false;
      }
      pre = cur;
    } else {
      i++;
    }
  }
  return true;
}
// @lc code=end
