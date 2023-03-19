/*
 * @lc app=leetcode.cn id=1030 lang=typescript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
// 直接排序
/* function allCellsDistOrder(
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number
): number[][] {
  const ret: number[][] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ret.push([i, j]);
    }
  }
  ret.sort((a, b) => {
    return (
      Math.abs(a[0] - rCenter) +
      Math.abs(a[1] - cCenter) -
      (Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter))
    );
  });
  return ret;
} */

// 桶排序
/* function allCellsDistOrder(
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number
): number[][] {
  const dist = (r1: number, c1: number, r2: number, c2: number) => {
    return Math.abs(r1 - r2) + Math.abs(c1 - c2);
  };
  const ret: [number, number][] = [];
  const maxDist =
    Math.max(rCenter, rows - 1 - rCenter) +
    Math.max(cCenter, cols - 1 - cCenter);
  const bucket = new Array(maxDist + 1)
    .fill(0)
    .map(() => new Array<[number, number]>());
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const d = dist(i, j, rCenter, cCenter);
      bucket[d].push([i, j]);
    }
  }
  for (let i = 0; i <= maxDist; i++) {
    for (let j = 0; j < bucket[i].length; j++) {
      ret.push(bucket[i][j]);
    }
  }
  return ret;
} */

// 几何法
function allCellsDistOrder(
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number
): number[][] {
  const ret: [number, number][] = new Array(rows * cols);
  const dr = [1, 1, -1, -1];
  const dc = [1, -1, -1, 1];
  // 距离[rCenter, cCenter]最远的曼哈顿距离
  const maxDist =
    Math.max(rCenter, rows - 1 - rCenter) +
    Math.max(cCenter, cols - 1 - cCenter);
  let row = rCenter;
  let col = cCenter;
  let index = 0;
  ret[index++] = [row, col];
  for (let dist = 1; dist <= maxDist; dist++) {
    /* 
      从[rCenter, cCenter]的上一个位置开始，按斜正方形框的顺时针方向开始遍历，
      每一次遍历，起点都会向上移动一个位置，直到与rCenter的距离等于maxDist,
      (斜正方形边上每一点与[rCenter, cCenter]的曼哈顿距离相等)
      斜正方形的边长都会加1（遍历轨迹会超过矩阵的边界）
    */
    row--;
    for (let i = 0; i < 4; i++) {
      /* 
        dr、dc的顺序依次为：
        向右下、左下、左上、右上移动一圈
        当向右下/左上移动至与rCenter同行时，切换下一个方向
        当向左下、右上移动至与cCenter同列时，切换下一个方向
      */
      while (
        (i % 2 === 0 && row !== rCenter) ||
        (i % 2 !== 0 && col !== cCenter)
      ) {
        // 越界的位置不加入结果
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
          ret[index++] = [row, col];
        }
        // 沿斜正方形方向移动至下一个位置
        row += dr[i];
        col += dc[i];
      }
    }
  }
  return ret;
}
// @lc code=end
