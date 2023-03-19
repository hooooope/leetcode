/*
 * @lc app=leetcode.cn id=1441 lang=typescript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/* function buildArray(target: number[], n: number): string[] {
  const ret: string[] = [];
  const len: number = target[target.length - 1];
  for (let i = 1; i <= len; i++) {
    ret.push("Push");
    if (!target.includes(i)) {
      ret.push("Pop");
    }
  }
  return ret;
} */

function buildArray(target: number[], n: number): string[] {
  const ret: string[] = [];
  let prev: number = 0;
  for (const number of target) {
    for (let i = 0; i < number - prev - 1; i++) {
      ret.push("Push");
      ret.push("Pop");
    }
    ret.push("Push");
    prev = number;
  }
  return ret;
}
// @lc code=end
