/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
/* class RecentCounter {
  private requests: number[];
  constructor() {
    this.requests = [];
  }

  ping(t: number): number {
    let ret = 0;
    const { requests } = this;
    requests.push(t);
    for (let i = requests.length - 1; i >= 0; i--) {
      const request = requests[i];
      if (request >= t - 3000 && request <= t) {
        ret++;
      } else {
        break;
      }
    }
    return ret;
  }
} */

class RecentCounter {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    const { queue } = this;
    queue.push(t);
    while (queue[0] < t - 3000) {
      queue.shift();
    }
    return queue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
