/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */

// @lc code=start
// 基于集合的回溯
function totalNQueens(n: number): number {
  const backtrack = (
    n: number,
    row: number,
    columns: Set<number>,
    diagonals1: Set<number>,
    diagonals2: Set<number>
  ) => {
    // 成功尝试到结束（最后一行的下一行）
    if (row === n) {
      return 1;
    } else {
      let count = 0;
      for (let i = 0; i < n; i++) {
        // 存在同列
        if (columns.has(i)) {
          continue;
        }
        // 当前斜线（左上到右下）
        const diagonal1 = row - i;
        // 存在同斜线
        if (diagonals1.has(diagonal1)) {
          continue;
        }
        // 当前斜线（右上到左下）
        const diagonal2 = row + i;
        // 存在同斜线
        if (diagonals2.has(diagonal2)) {
          continue;
        }
        columns.add(i);
        diagonals1.add(diagonal1);
        diagonals2.add(diagonal2);
        // 在当前列摆放皇后的基础上，尝试下一行
        count += backtrack(n, row + 1, columns, diagonals1, diagonals2);
        // 回溯至当前行，尝试下一列
        columns.delete(i);
        diagonals1.delete(diagonal1);
        diagonals2.delete(diagonal2);
      }
      return count;
    }
  };
  // 存放摆放皇后的列号
  const columns = new Set<number>();
  // 存放摆放皇后的斜线号(左上到右下，同一条斜线的行号减列号相等)
  const diagonals1 = new Set<number>();
  // 存放摆放皇后的斜线号(右上到左下，同一条斜线的行号加列号相等)
  const diagonals2 = new Set<number>();
  // 开始回溯
  return backtrack(n, 0, columns, diagonals1, diagonals2);
}

// 基于位运算的回溯
/* function totalNQueens(n: number): number {
  const backtrack = (
    n: number,
    row: number,
    columns: number,
    diagonals1: number,
    diagonals2: number
  ) => {
    if (row === n) {
      return 1;
    } else {
      let count = 0;
      // 二进制中的1为可以摆放皇后的位置
      let availablePosition =
        ((1 << n) - 1) & ~(columns | diagonals1 | diagonals2);
      while (availablePosition) {
        // 获取二进制中最低位的1
        const position = availablePosition & -availablePosition;
        // 将二进制中最低位的1置0
        availablePosition = availablePosition & (availablePosition - 1);
        // 在第row行第column列摆放皇后
        count += backtrack(
          n,
          row + 1,
          columns | position,
          (diagonals1 | position) << 1,
          (diagonals2 | position) >> 1
        );
      }
      return count;
    }
  };
  // 第i行的皇后摆放在第queues[i]列上
  return backtrack(n, 0, 0, 0, 0);
} */
// @lc code=end
