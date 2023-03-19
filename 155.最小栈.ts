/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
// 辅助栈
/* class MinStack {
  numStack: number[] = [];
  minStack: number[] = [];
  constructor() {}

  push(val: number): void {
    this.numStack.push(val);
    this.minStack.push(
      Math.min(val, this.minStack[this.minStack.length - 1] ?? Number.MAX_VALUE)
    );
  }

  pop(): void {
    this.numStack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.numStack[this.numStack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
} */

// 记录差值
class MinStack {
  min: number = -1;
  stack: number[] = [];
  constructor() {}

  push(val: number): void {
    if (this.stack.length === 0) {
      this.min = val;
      this.stack.push(0);
    } else {
      const diff = val - this.min;
      this.stack.push(diff);
      if (diff < 0) {
        this.min = val;
      }
    }
  }

  pop(): void {
    const diff = this.stack.pop()!;
    if (diff < 0) {
      this.min = this.min - diff;
    }
  }

  top(): number {
    if (this.stack[this.stack.length - 1] < 0) {
      return this.min;
    } else {
      return this.stack[this.stack.length - 1] + this.min;
    }
  }

  getMin(): number {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
