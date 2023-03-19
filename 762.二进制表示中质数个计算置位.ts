/*
 * @lc app=leetcode.cn id=762 lang=typescript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/* function countPrimeSetBits(left: number, right: number): number {
  let ret = 0;
  for (let i = left; i <= right; i++) {
    let n = i;
    let cnt = 0;
    while (n) {
      n &= n - 1;
      cnt++;
    }
    if (cnt < 2) {
      continue;
    }
    let isPrime = true;
    for (let j = 2; j * j <= cnt; j++) {
      if (cnt % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      ret++;
    }
  }
  return ret;
} */

/* function countPrimeSetBits(left: number, right: number): number {
  const isPrime = (x: number) => {
    if (x < 2) {
      return false;
    }
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  };
  const bitCount = (x: number) => {
    let ret = 0;
    while (x) {
      ret++;
      x &= x - 1;
    }
    return ret;
  };
  let ret = 0;
  for (let i = left; i <= right; i++) {
    if (isPrime(bitCount(i))) {
      ret++;
    }
  }
  return ret;
} */

function countPrimeSetBits(left: number, right: number): number {
  const bitCount = (x: number) => {
    let ret = 0;
    while (x) {
      ret++;
      x &= x - 1;
    }
    return ret;
  };
  let ret = 0;
  for (let i = left; i <= right; i++) {
    if (((1 << bitCount(i)) & 665772) !== 0) {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
