/*
 * @lc app=leetcode.cn id=2379 lang=typescript
 *
 * [2379] 得到 K 个黑块的最少涂色次数
 */

import { count } from "console";

// @lc code=start
function minimumRecolors(blocks: string, k: number): number {
  let l = 0;
  let r = 0;
  let cnt = 0;
  while (r < k) {
    cnt += blocks[r] === "W" ? 1 : 0;
    r++;
  }
  let ret = cnt;
  while (r < blocks.length) {
    cnt += blocks[r] === "W" ? 1 : 0;
    cnt -= blocks[l] === "W" ? 1 : 0;
    ret = Math.min(ret, cnt);
    l++;
    r++;
  }
  return ret;
}
// @lc code=end
