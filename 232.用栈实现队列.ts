/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
  public s1: number[];
  public s2: number[];

  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x: number): void {
    this.s1.push(x);
  }

  pop(): number {
    this.move();
    return this.s2.pop()!;
  }

  peek(): number {
    this.move();
    return this.s2[this.s2.length - 1];
  }

  empty(): boolean {
    return !this.s1.length && !this.s2.length;
  }

  // move s1 to s2
  move() {
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop()!);
      }
    }
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
