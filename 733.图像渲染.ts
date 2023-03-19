/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
// 广度优先
/* function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  const currColor = image[sr][sc];
  // 无需上色
  if (currColor === color) {
    return image;
  }
  const n = image.length;
  const m = image[0].length;
  const queue: [number, number][] = [];
  queue.push([sr, sc]);
  image[sr][sc] = color;
  while (queue.length) {
    const [x, y] = queue.shift()!;
    for (let i = 0; i < 4; i++) {
      const mx = x + dx[i];
      const my = y + dy[i];
      if (
        mx >= 0 &&
        mx < n &&
        my >= 0 &&
        my < m &&
        image[mx][my] === currColor
      ) {
        queue.push([mx, my]);
        image[mx][my] = color;
      }
    }
  }
  return image;
} */

// 深度优先
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const dfs = (
    image: number[][],
    x: number,
    y: number,
    currColor: number,
    color: number
  ) => {
    if (image[x][y] === currColor) {
      image[x][y] = color;
      const n = image.length;
      const m = image[0].length;
      for (let i = 0; i < 4; i++) {
        const mx = x + dx[i];
        const my = y + dy[i];
        if (mx >= 0 && mx < n && my >= 0 && my < m) {
          dfs(image, mx, my, currColor, color);
        }
      }
    }
  };
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  const currColor = image[sr][sc];
  if (currColor !== color) {
    dfs(image, sr, sc, currColor, color);
  }
  return image;
}
// @lc code=end
