/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 */

// @lc code=start
// 模拟
/* function rotateString(s: string, goal: string): boolean {
  const n = s.length;
  const m = goal.length;
  if (n !== m) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (s[(j + i) % n] !== goal[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return true;
    }
  }
  return false;
} */

// 搜索字符串
/* function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).indexOf(goal) !== -1;
} */

// KMP
function rotateString(s: string, goal: string): boolean {
  const getNext = (s: string) => {
    const n = s.length;
    const next: number[] = new Array(n);
    next[0] = -1;
    next[1] = 0;
    let i = 2;
    let cn = 0;
    while (i < n) {
      if (s[i - 1] === s[cn]) {
        next[i++] = ++cn;
      } else if (cn > 0) {
        cn = next[cn];
      } else {
        next[i++] = 0;
      }
    }
    return next;
  };
  const next = getNext(goal);
  let i = 0;
  let j = 0;
  const ss = s + s;
  while (i < ss.length && j < goal.length) {
    if (ss[i] === goal[j]) {
      i++;
      j++;
    } else if (next[j] !== -1) {
      j = next[j];
    } else {
      i++;
    }
  }
  return s.length === goal.length && j === goal.length;
  // return j === goal.length ? i - j : -1;
}
// @lc code=end
