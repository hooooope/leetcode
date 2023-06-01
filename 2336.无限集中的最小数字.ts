/*
 * @lc app=leetcode.cn id=2336 lang=typescript
 *
 * [2336] 无限集中的最小数字
 */

// @lc code=start
class SmallestInfiniteSet {
  prev = 1;
  deleted = new Set<number>();
  constructor() {}

  popSmallest(): number {
    let ret = -1;
    for (let i = this.prev; ; i++) {
      if (!this.deleted.has(i)) {
        ret = i;
        this.prev = i + 1;
        this.deleted.add(i);
        break;
      }
    }
    return ret;
  }

  addBack(num: number): void {
    this.prev = Math.min(this.prev, num);
    this.deleted.delete(num);
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
// @lc code=end
