/*
 * @lc app=leetcode.cn id=381 lang=typescript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */

// @lc code=start
class RandomizedCollection {
  private nums: number[];
  private num2Index: Map<number, Set<number>>;
  constructor() {
    this.nums = [];
    this.num2Index = new Map();
  }

  insert(val: number): boolean {
    this.nums.push(val);
    const set = this.num2Index.has(val)
      ? this.num2Index.get(val)!
      : new Set<number>();
    set.add(this.nums.length - 1);
    this.num2Index.set(val, set);
    return set.size === 1;
  }

  remove(val: number): boolean {
    if (!this.num2Index.has(val)) {
      return false;
    }
    let delIndex: number;
    for (const index of this.num2Index.get(val)!) {
      delIndex = index;
      break;
    }
    const lastNum = this.nums[this.nums.length - 1];
    this.nums[delIndex!] = lastNum;
    this.num2Index.get(val)!.delete(delIndex!);
    this.num2Index.get(lastNum)!.delete(this.nums.length - 1);
    if (delIndex! < this.nums.length - 1) {
      this.num2Index.get(lastNum)!.add(delIndex!);
    }
    if (this.num2Index.get(val)!.size === 0) {
      this.num2Index.delete(val);
    }
    this.nums.pop();
    return true;
  }

  getRandom(): number {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
