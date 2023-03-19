/*
 * @lc app=leetcode.cn id=999 lang=typescript
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
/* function numRookCaptures(board: string[][]): number {
  let ret = 0;
  let x = 0;
  let y = 0;
  const n = board.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "R") {
        x = i;
        y = j;
        break;
      }
    }
  }
  // 向右走
  for (let j = y + 1; j < n; j++) {
    if (board[x][j] === "B") {
      break;
    } else if (board[x][j] === "p") {
      ret++;
      break;
    }
  }
  // 向左走
  for (let j = y - 1; j >= 0; j--) {
    if (board[x][j] === "B") {
      break;
    } else if (board[x][j] === "p") {
      ret++;
      break;
    }
  }
  // 向上走
  for (let i = x - 1; i >= 0; i--) {
    if (board[i][y] === "B") {
      break;
    } else if (board[i][y] === "p") {
      ret++;
      break;
    }
  }
  // 向下走
  for (let i = x + 1; i < n; i++) {
    if (board[i][y] === "B") {
      break;
    } else if (board[i][y] === "p") {
      ret++;
      break;
    }
  }
  return ret;
} */

function numRookCaptures(board: string[][]): number {
  let ret = 0;
  let x = 0;
  let y = 0;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const n = board.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "R") {
        x = i;
        y = j;
        break;
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let step = 1; ; step++) {
      const tx = x + dx[i] * step;
      const ty = y + dy[i] * step;
      if (tx < 0 || tx >= n || ty < 0 || ty >= n || board[tx][ty] === "B") {
        break;
      }
      if (board[tx][ty] === "p") {
        ret++;
        break;
      }
    }
  }
  return ret;
}
// @lc code=end
