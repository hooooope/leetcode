/*
 * @lc app=leetcode.cn id=706 lang=typescript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
/* class MyHashMap {
  private map: any;
  constructor() {
    this.map = {};
  }

  put(key: number, value: number): void {
    this.map[key] = value;
  }

  get(key: number): number {
    if (this.map[key] === undefined) {
      return -1;
    }
    return this.map[key];
  }

  remove(key: number): void {
    if (this.map[key] === undefined) {
      return;
    }
    delete this.map[key];
  }
} */

class MyHashMap {
  private BASE: number;
  private data: [number, number][][];
  constructor() {
    this.BASE = 769;
    this.data = new Array(this.BASE).fill(0).map(() => new Array());
  }

  put(key: number, value: number): void {
    const h = this.hash(key);
    for (const it of this.data[h]) {
      if (it[0] === key) {
        it[1] = value;
        return;
      }
    }
    this.data[h].push([key, value]);
  }

  get(key: number): number {
    const h = this.hash(key);
    for (const it of this.data[h]) {
      if (it[0] === key) {
        return it[1];
      }
    }
    return -1;
  }

  remove(key: number): void {
    const h = this.hash(key);
    for (const [idx, it] of this.data[h].entries()) {
      if (it[0] === key) {
        this.data[h].splice(idx, 1);
        return;
      }
    }
  }

  hash(key: number) {
    return key % this.BASE;
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
