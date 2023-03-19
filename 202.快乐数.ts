/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
// 哈希集合检测循环
/* function isHappy(n: number): boolean {
  const map = new Map<number, boolean>();
  while (n !== 1 && !map.has(n)) {
    map.set(n, true);
    let tmp = 0;
    while (n) {
      tmp += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = tmp;
  }
  return n === 1;
} */

// 快慢指针模拟检测链表是否有环
function isHappy(n: number): boolean {
  let slow = n;
  let fast = getNext(n);
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
}
function getNext(n: number): number {
  let ret = 0;
  while (n) {
    let d = n % 10;
    n = Math.floor(n / 10);
    ret += d * d;
  }
  return ret;
}
// @lc code=end
