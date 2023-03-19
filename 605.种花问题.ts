/*
 * @lc app=leetcode.cn id=605 lang=typescript
 *
 * [605] 种花问题
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let prev = -1;
  let count = 0;
  const m = flowerbed.length;
  for (let i = 0; i < m; i++) {
    if (flowerbed[i] === 1) {
      if (prev < 0) {
        count += i >> 1;
      } else {
        count += (i - prev - 2) >> 1;
      }
      if (count >= n) {
        return true;
      }
      prev = i;
    }
  }
  if (prev < 0) {
    count += (m + 1) >> 1;
  } else {
    count += (m - prev - 1) >> 1;
  }
  return count >= n;
}

/* function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i + 1 === flowerbed.length || flowerbed[i + 1] === 0)
    ) {
      n--;
      i++;
    } else if (flowerbed[i] === 1) {
      i++; // 因为1后面必定是0，所以i可以累加两次
    }
  }
  return n <= 0;
} */

/* function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  let zeros = 1; // 头部预设一个0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      zeros++;
    } else {
      count += (zeros - 1) >> 1;
      if (count >= n) {
        return true;
      }
      zeros = 0;
    }
  }
  zeros++; // 尾部预设一个0
  count += (zeros - 1) >> 1;
  return count >= n;
} */
// @lc code=end
