/*
 * @lc app=leetcode.cn id=901 lang=typescript
 *
 * [901] 股票价格跨度
 */

// @lc code=start
/* class StockSpanner {
  private prices: number[];
  constructor() {
    this.prices = [];
  }

  next(price: number): number {
    this.prices.push(price);

    let ret = 0;
    let i = this.prices.length - 1;
    while (this.prices[i] <= price) {
      ret++;
      i--;
    }
    return ret;
  }
} */

/* class StockSpanner {
  private stack: number[];
  private map: Map<number, number>;
  constructor() {
    this.stack = [];
    this.map = new Map();
  }

  next(price: number): number {
    const { stack, map } = this;
    let span = 1;
    while (stack.length && price >= stack[stack.length - 1]) {
      const top = stack.pop()!;
      span += map.get(top) ?? 0;
    }
    map.set(price, span);
    stack.push(price);
    return span;
  }
} */

class StockSpanner {
  private idx: number;
  private stack: number[][];

  constructor() {
    this.idx = -1;
    this.stack = [];
    this.stack.push([-1, Number.MAX_VALUE]);
  }

  next(price: number): number {
    const { stack } = this;
    while (price >= stack[stack.length - 1][1]) {
      stack.pop();
    }
    let span = ++this.idx - stack[stack.length - 1][0];
    stack.push([this.idx, price]);
    return span;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
