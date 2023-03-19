/*
 * @lc app=leetcode.cn id=1742 lang=typescript
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
/* function countBalls(lowLimit: number, highLimit: number): number {
  // hightLimit <= 10^5，即最大的box编号为45
  const cnt: number[] = new Array(46).fill(0);
  for (let i = lowLimit; i <= highLimit; i++) {
    const index = addDigits(i);
    cnt[index]++;
  }
  cnt.sort((a, b) => b - a);
  return cnt[0];
}
function addDigits(num: number): number {
  const _addDigits = (n: number): number => {
    let ret = 0;
    while (n) {
      ret += n % 10;
      n = Math.floor(n / 10);
    }
    return ret;
  };
  if (num >= 10) {
    num = _addDigits(num);
  }
  return num;
} */

function countBalls(lowLimit: number, highLimit: number): number {
  let ret = 0;
  const map = new Map<number, number>();
  for (let i = lowLimit; i <= highLimit; i++) {
    let n = i;
    let box = 0;
    while (n) {
      box += n % 10;
      n = Math.floor(n / 10);
    }
    map.set(box, (map.get(box) ?? 0) + 1);
    ret = Math.max(ret, map.get(box)!);
  }
  return ret;
}
// @lc code=end
