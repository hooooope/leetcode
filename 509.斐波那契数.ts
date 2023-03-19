/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/* function fib(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
} */

// 滚动数组
/* function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
} */

function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  const matrixPow = (matrix: number[][], pow: number) => {
    const m = matrix.length;
    const n = matrix[0].length;
    let ret = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // 初始化单位矩阵
    for (let i = 0; i < m; i++) {
      ret[i][i] = 1;
    }
    for (let temp = matrix; pow !== 0; pow >>= 1) {
      if ((pow & 1) !== 0) {
        ret = matrixMul(ret, temp);
      }
      temp = matrixMul(temp, temp);
    }
    return ret;
  };
  const matrixMul = (matrix1: number[][], matrix2: number[][]) => {
    const ret = new Array(matrix1.length)
      .fill(0)
      .map(() => new Array(matrix2[0].length).fill(0));
    for (let i = 0; i < matrix1.length; i++) {
      for (let j = 0; j < matrix2[0].length; j++) {
        for (let k = 0; k < matrix2.length; k++) {
          ret[i][j] += matrix1[i][k] * matrix2[k][j];
        }
      }
    }
    return ret;
  };
  const base = [
    [1, 1],
    [1, 0],
  ];
  const ret = matrixPow(base, n - 2);
  return ret[0][0] + ret[1][0];
}

// @lc code=end
