/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
// 基于集合的回溯
/* function solveNQueens(n: number): string[][] {
  const generateBoard = (queens: number[], n: number) => {
    const board: string[] = new Array(n).fill("");
    for (let i = 0; i < n; i++) {
      const row = new Array(n).fill(".");
      row[queens[i]] = "Q";
      board[i] = row.join("");
    }
    return board;
  };
  const backtrack = (
    solutions: string[][],
    queens: number[],
    n: number,
    row: number,
    columns: Set<number>,
    diagonals1: Set<number>,
    diagonals2: Set<number>
  ) => {
    // 成功尝试到结束（最后一行的下一行）
    if (row === n) {
      // 将本次皇后摆放方案转化为字符串数组，加入答案
      const board = generateBoard(queens, n);
      solutions.push(board);
    } else {
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
        // 当前列可以摆放皇后
        queens[row] = i;
        columns.add(i);
        diagonals1.add(diagonal1);
        diagonals2.add(diagonal2);
        // 在当前列摆放皇后的基础上，尝试下一行
        backtrack(
          solutions,
          queens,
          n,
          row + 1,
          columns,
          diagonals1,
          diagonals2
        );
        // 回溯至当前行，尝试下一列
        queens[row] = -1;
        columns.delete(i);
        diagonals1.delete(diagonal1);
        diagonals2.delete(diagonal2);
      }
    }
  };
  const solutions: string[][] = [];
  // 第i行的皇后摆放在第queues[i]列上
  const queens = new Array(n).fill(-1);
  // 存放摆放皇后的列号
  const columns = new Set<number>();
  // 存放摆放皇后的斜线号(左上到右下，同一条斜线的行号减列号相等)
  const diagonals1 = new Set<number>();
  // 存放摆放皇后的斜线号(右上到左下，同一条斜线的行号加列号相等)
  const diagonals2 = new Set<number>();
  // 开始回溯
  backtrack(solutions, queens, n, 0, columns, diagonals1, diagonals2);
  return solutions;
} */

// 基于位运算的回溯
function solveNQueens(n: number): string[][] {
  const generateBoard = (queens: number[], n: number) => {
    const board: string[] = new Array(n).fill("");
    for (let i = 0; i < n; i++) {
      const row = new Array(n).fill(".");
      row[queens[i]] = "Q";
      board[i] = row.join("");
    }
    return board;
  };
  // 计算二进制中1的个数
  const bitCount = (n: number) => {
    let ret = 0;
    while (n) {
      n >>= 1;
      ret++;
    }
    return ret;
  };
  const backtrack = (
    solutions: string[][],
    queens: number[],
    n: number,
    row: number,
    columns: number,
    diagonals1: number,
    diagonals2: number
  ) => {
    if (row === n) {
      const board = generateBoard(queens, n);
      solutions.push(board);
    } else {
      // 二进制中的1为可以摆放皇后的位置
      let availablePosition =
        ((1 << n) - 1) & ~(columns | diagonals1 | diagonals2);
      while (availablePosition) {
        // 获取二进制中最低位的1
        const position = availablePosition & -availablePosition;
        // 将二进制中最低位的1置0
        availablePosition = availablePosition & (availablePosition - 1);
        // 获取二进制中最低位1的位置（索引）
        const column = bitCount(position - 1);
        // 在第row行第column列摆放皇后
        queens[row] = column;
        backtrack(
          solutions,
          queens,
          n,
          row + 1,
          columns | position,
          (diagonals1 | position) << 1,
          (diagonals2 | position) >> 1
        );
        queens[row] = -1;
      }
    }
  };
  const solutions: string[][] = [];
  // 第i行的皇后摆放在第queues[i]列上
  const queens = new Array(n).fill(-1);
  backtrack(solutions, queens, n, 0, 0, 0, 0);
  return solutions;
}
// @lc code=end
