/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
// 暴力
/* function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const ret: number[] = new Array(n).fill(0);
  const next: number[] = new Array(101).fill(Number.MAX_VALUE);
  for (let i = n - 1; i >= 0; i--) {
    let warmerIndex = Number.MAX_VALUE;
    for (let j = temperatures[i] + 1; j <= 100; j++) {
      if (next[j] < warmerIndex) {
        warmerIndex = next[j];
      }
    }
    if (warmerIndex < Number.MAX_VALUE) {
      ret[i] = warmerIndex - i;
    }
    next[temperatures[i]] = i;
  }
  return ret;
} */

// 单调栈
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const ret: number[] = new Array(n).fill(0);
  // 维护一个存储下标的单调栈，
  // 从栈底到栈顶的下标对应的温度列表中的温度依次递减。
  // 如果一个下标在单调栈里，则表示尚未找到下一次温度更高的下标。
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const j = stack.pop()!;
      ret[j] = i - j;
    }
    stack.push(i);
  }
  return ret;
}
// @lc code=end
