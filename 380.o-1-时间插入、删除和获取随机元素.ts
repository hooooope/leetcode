/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
// 哈希表+哈希表
/* class RandomizedSet {
  private size: number;
  private val2Index: Map<number, number>;
  private index2Val: Map<number, number>;
  constructor() {
    this.size = 0;
    this.val2Index = new Map();
    this.index2Val = new Map();
  }

  insert(val: number): boolean {
    if (this.val2Index.has(val)) {
      return false;
    }
    this.val2Index.set(val, this.size);
    this.index2Val.set(this.size++, val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.val2Index.has(val)) {
      return false;
    }
    const delIndex = this.val2Index.get(val)!;
    const lastIndex = --this.size;
    const lastVal = this.index2Val.get(lastIndex)!;
    this.val2Index.set(lastVal, delIndex);
    this.index2Val.set(delIndex, lastVal);
    this.val2Index.delete(val);
    this.index2Val.delete(lastIndex);
    return true;
  }

  getRandom(): number {
    return this.index2Val.get(Math.floor(Math.random() * this.size))!;
  }
}
 */

// 数组+哈希表
class RandomizedSet {
  private nums: number[];
  private num2Index: Map<number, number>;
  constructor() {
    this.nums = [];
    this.num2Index = new Map();
  }

  insert(val: number): boolean {
    if (this.num2Index.has(val)) {
      return false;
    }
    const index = this.nums.length;
    this.nums.push(val);
    this.num2Index.set(val, index);
    return true;
  }

  remove(val: number): boolean {
    if (!this.num2Index.has(val)) {
      return false;
    }
    const delIndex = this.num2Index.get(val)!;
    this.nums[delIndex] = this.nums[this.nums.length - 1];
    this.num2Index.set(this.nums[delIndex], delIndex);
    this.nums.pop();
    this.num2Index.delete(val);
    return true;
  }

  getRandom(): number {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
