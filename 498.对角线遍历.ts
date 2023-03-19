/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/* function findDiagonalOrder(mat: number[][]): number[] {
  const process = (
    mat: number[][],
    ret: number[],
    r1: number,
    c1: number,
    r2: number,
    c2: number,
    flag: boolean
  ) => {
    if (flag) {
      while (r1 <= r2) {
        ret.push(mat[r1][c1]);
        r1++;
        c1--;
      }
    } else {
      while (r2 >= r1) {
        ret.push(mat[r2][c2]);
        r2--;
        c2++;
      }
    }
  };
  const ret: number[] = [];
  const m = mat.length;
  const n = mat[0].length;
  // A点：（r1, c1）
  let r1 = 0;
  let c1 = 0;
  // B点：（r2, c2）
  let r2 = 0;
  let c2 = 0;
  // flag为true，表示遍历从右上到左下的对角线
  // flag为false，表示遍历从左下到右上的对角线
  let flag = false;
  while (r1 < m) {
    process(mat, ret, r1, c1, r2, c2, flag);
    // A点一直向右移动，到达边界后开始向下移动
    if (c1 === n - 1) {
      r1++;
    } else {
      c1++;
    }
    // A点一直向下移动，到达边界后开始向右移动
    if (r2 === m - 1) {
      c2++;
    } else {
      r2++;
    }
    flag = !flag;
  }
  return ret;
} */

function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;
  const ret: number[] = [];
  for (let i = 0; i < m + n - 1; i++) {
    if (i % 2 === 0) {
      // 左下到右上
      let r = i < m ? i : m - 1;
      let c = i < m ? 0 : i - m + 1;
      while (r >= 0 && c < n) {
        ret.push(mat[r][c]);
        r--;
        c++;
      }
    } else {
      // 右上到左下
      let r = i < n ? 0 : i - n + 1;
      let c = i < n ? i : n - 1;
      while (r < m && c >= 0) {
        ret.push(mat[r][c]);
        r++;
        c--;
      }
    }
  }
  return ret;
}
// @lc code=end
