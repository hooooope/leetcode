/*
 * @lc app=leetcode.cn id=832 lang=typescript
 *
 * [832] 翻转图像
 */

// @lc code=start
/* function flipAndInvertImage(image: number[][]): number[][] {
  const row = image.length;
  const col = image[0].length;
  const ret: number[][] = new Array(row)
    .fill(0)
    .map(() => new Array(col).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = col - 1, k = 0; j >= 0; j--, k++) {
      ret[i][k] = image[i][j] ^ 1;
    }
  }
  return ret;
} */

/* 
  image[i][left] === image[i][right]，两端反转
  image[i][left] = 0，image[i][right] = 0，翻转并反转后，image[i][left] = 1，image[i][right] = 1
  image[i][left] = 1，image[i][right] = 1，翻转并反转后，image[i][left] = 0，image[i][right] = 0

  image[i][left] !== image[i][right]，不做修改
  image[i][left] = 0，image[i][right] = 1，翻转并反转后，image[i][left] = 0，image[i][right] = 1
  image[i][left] = 1，image[i][right] = 0，翻转并反转后，image[i][left] = 1，image[i][right] = 0
*/
function flipAndInvertImage(image: number[][]): number[][] {
  const n = image.length;
  for (let i = 0; i < n; i++) {
    let l = 0;
    let r = n - 1;
    while (l < r) {
      if (image[i][l] === image[i][r]) {
        image[i][l] ^= 1;
        image[i][r] ^= 1;
      }
      l++;
      r--;
    }
    if (l === r) {
      image[i][l] ^= 1;
    }
  }
  return image;
}
// @lc code=end
