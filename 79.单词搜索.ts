/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const d = [-1, 0, 1, 0, -1];
  const visited: boolean[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(false));
  const process = (
    board: string[][],
    word: string,
    i: number,
    j: number,
    index: number
  ) => {
    if (board[i][j] !== word[index]) {
      return false;
    }
    if (index === word.length - 1) {
      return true;
    }
    let ret = false;
    const m = board.length;
    const n = board[0].length;
    visited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      const di = i + d[k];
      const dj = j + d[k + 1];
      if (di >= 0 && di < m && dj >= 0 && dj < n && !visited[di][dj]) {
        if (process(board, word, di, dj, index + 1)) {
          ret = true;
          break;
        }
      }
    }
    visited[i][j] = false;
    return ret;
  };
  let ret = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (process(board, word, i, j, 0)) {
        ret = true;
        break;
      }
    }
  }
  return ret;
}
// @lc code=end
