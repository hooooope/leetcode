/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

import { isRegularExpressionLiteral } from "typescript";

// @lc code=start
// 利用一个队列
/* class MyStack {
  private q1: number[];
  private q2: number[];
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x: number): void {
    this.q2.push(x);
    while (this.q1.length) {
      this.q2.push(this.q1.shift()!);
    }
    while (this.q2.length) {
      this.q1.push(this.q2.shift()!);
    }
  }

  pop(): number {
    return this.q1.shift()!;
  }

  top(): number {
    return this.q1[0];
  }

  empty(): boolean {
    return this.q1.length === 0;
  }
} */

// 利用两个队列
class MyStack {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    const n = this.queue.length;
    this.queue.push(x);
    for (let i = 0; i < n; i++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number {
    return this.queue.shift()!;
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
