/*
 * @lc app=leetcode.cn id=925 lang=typescript
 *
 * [925] 长按键入
 */

import { type } from "os";

// @lc code=start
function isLongPressedName(name: string, typed: string): boolean {
  const n = name.length;
  const m = typed.length;
  let i = 0;
  let j = 0;
  while (j < m) {
    if (name[i] === typed[j]) {
      i++;
      j++;
    } else if (name[i - 1] === typed[j]) {
      j++;
    } else {
      return false;
    }
  }
  return i === n;
}
// @lc code=end
