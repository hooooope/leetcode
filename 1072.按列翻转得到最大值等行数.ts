/*
 * @lc app=leetcode.cn id=1072 lang=typescript
 *
 * [1072] 按列翻转得到最大值等行数
 */

// @lc code=start
function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const map = new Map<string, number>();
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    const arr: string[] = new Array(m).fill("0");
    for (let j = 0; j < n; j++) {
      // 如果matrix[i][0]为1，则对该行元素进行翻转
      arr[j] = "0" + (matrix[i][j] ^ matrix[i][0]);
    }
    const s = arr.join("");
    map.set(s, (map.get(s) ?? 0) + 1);
  }
  let ret = 0;
  for (const [s, c] of map) {
    ret = Math.max(ret, c);
  }
  return ret;
}
// @lc code=end
