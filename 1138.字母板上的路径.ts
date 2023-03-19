/*
 * @lc app=leetcode.cn id=1138 lang=typescript
 *
 * [1138] 字母板上的路径
 */

// @lc code=start
function alphabetBoardPath(target: string): string {
  const ret: string[] = [];
  let cx = 0;
  let cy = 0;
  for (let i = 0; i < target.length; i++) {
    const c = target[i];
    const nx = Math.floor((c.charCodeAt(0) - "a".charCodeAt(0)) / 5);
    const ny = Math.floor((c.charCodeAt(0) - "a".charCodeAt(0)) % 5);
    // 为了保证含有字符'z'时能够正常移动，
    // 每次移动时优先保证选择上移和左移即可
    if (nx < cx) {
      for (let i = 0; i < cx - nx; i++) {
        ret.push("U");
      }
    }
    if (ny < cy) {
      for (let i = 0; i < cy - ny; i++) {
        ret.push("L");
      }
    }
    if (nx > cx) {
      for (let i = 0; i < nx - cx; i++) {
        ret.push("D");
      }
    }
    if (ny > cy) {
      for (let i = 0; i < ny - cy; i++) {
        ret.push("R");
      }
    }
    ret.push("!");
    cx = nx;
    cy = ny;
  }
  return ret.join("");
}
// @lc code=end
