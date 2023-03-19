/*
 * @lc app=leetcode.cn id=2287 lang=typescript
 *
 * [2287] 重排字符形成目标字符串
 */

// @lc code=start
function rearrangeCharacters(s: string, target: string): number {
  let ret = Number.MAX_VALUE;
  const sCounter = new Map<string, number>();
  const targetCounter = new Map<string, number>();
  for (const c of s) {
    sCounter.set(c, (sCounter.get(c) ?? 0) + 1);
  }
  for (const c of target) {
    targetCounter.set(c, (targetCounter.get(c) ?? 0) + 1);
  }
  for (const [c, count] of targetCounter.entries()) {
    const totalCount = sCounter.get(c) ?? 0;
    ret = Math.min(ret, Math.floor(totalCount / count));
  }
  return ret;
}
// @lc code=end
