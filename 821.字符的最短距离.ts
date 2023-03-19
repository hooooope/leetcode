/*
 * @lc app=leetcode.cn id=821 lang=typescript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/* function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const ret: number[] = [];
  const positions: number[] = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      positions.push(i);
    }
  }
  for (let i = 0; i < n; i++) {
    let distance = Number.MAX_VALUE;
    for (let j = 0; j < positions.length; j++) {
      distance = Math.min(distance, Math.abs(i - positions[j]));
    }
    ret.push(distance);
  }
  return ret;
} */

function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const ret: number[] = new Array(n).fill(0);
  // 1.求s[i]到其左侧最近的字符c的距离
  // 在开始遍历的时候idx可能不存在，为了简化逻辑，可以用-n表示
  for (let i = 0, idx = -n; i < n; i++) {
    if (s[i] === c) {
      idx = i;
    }
    ret[i] = i - idx;
  }
  // 2.求s[i]到其右侧最近的字符c的距离
  for (let i = n - 1, idx = 2 * n; i >= 0; i--) {
    if (s[i] === c) {
      idx = i;
    }
    // 取1和2的最小值
    ret[i] = Math.min(ret[i], idx - i);
  }
  return ret;
}
// @lc code=end
