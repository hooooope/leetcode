/*
 * @lc app=leetcode.cn id=914 lang=typescript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/* function hasGroupsSizeX(deck: number[]): boolean {
  const n = deck.length;
  const counts = new Array(10000).fill(0);
  for (const num of deck) {
    counts[num]++;
  }
  const values: number[] = [];
  for (const c of counts) {
    // 由于X必须大于等于2，且组内所有的牌子都写着相同的整数
    // 因此存在只出现一次的数字，就不可能符合条件，可以提前结束流程
    if (c === 1) {
      return false;
    }
    if (c > 0) {
      values.push(c);
    }
  }
  for (let x = 2; x <= n; x++) {
    if (n % x === 0) {
      let flag = true;
      for (const v of values) {
        if (v % x !== 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return true;
      }
    }
  }
  return false;
} */

function hasGroupsSizeX(deck: number[]): boolean {
  // 欧几里得算法（求两个正整数的最大公约数）
  const gcd = (x: number, y: number) => {
    // 余数等于0时，当前除数就是最大公约数
    return y === 0 ? x : gcd(y, x % y);
    // return x === 0 ? y : gcd(y % x, x);
  };
  const count = new Array(10000).fill(0);
  for (const num of deck) {
    count[num]++;
  }
  let g = -1;
  for (const c of count) {
    if (c > 0) {
      if (g === -1) {
        g = c;
      } else {
        g = gcd(g, c);
      }
    }
  }
  return g >= 2;
}
// @lc code=end
