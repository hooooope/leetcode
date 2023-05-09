/*
 * @lc app=leetcode.cn id=1015 lang=typescript
 *
 * [1015] 可被 K 整除的最小整数
 */

// @lc code=start
/* function smallestRepunitDivByK(k: number): number {
  // 如果k是偶数或者是5的倍数，则无法整除，直接返回-1
  if (k % 2 === 0 || k % 5 === 0) {
    return -1;
  }
  // 初始化循环所需的余数resid为1%k，数位长度len为1
  let len = 1;
  let resid = 1 % k;
  // 使用set数据结构存储出现过的余数
  const set = new Set();
  set.add(resid);
  // 当余数不为0时，继续循环
  while (resid !== 0) {
    // 数位长度加1
    len++;
    // 计算下一个余数
    resid = (resid * 10 + 1) % k;
    // 若该余数已经出现过，则说明出现了循环，直接返回-1
    if (set.has(resid)) {
      return -1;
    }
    // 将新的余数加入set中
    set.add(resid);
  }
  // 当余数为0时，表示找到了一个长度最短的可被整除的数字，返回长度len
  return len;
} */

function smallestRepunitDivByK(k: number): number {
  // 如果k是偶数或者是5的倍数，则无法整除，直接返回-1
  if (k % 2 === 0 || k % 5 === 0) {
    return -1;
  }
  // 初始化循环所需的余数resid为1%k，数位长度len为1
  let len = 1;
  let resid = 1 % k;
  // 当余数不为0时，继续循环
  while (resid !== 0) {
    // 数位长度加1
    len++;
    // 计算下一个余数
    resid = (resid * 10 + 1) % k;
  }
  // 当余数为0时，表示找到了一个长度最短的可被整除的数字，返回长度len
  return len;
}
// @lc code=end
