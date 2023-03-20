/*
 * @lc app=leetcode.cn id=1012 lang=typescript
 *
 * [1012] 至少有 1 位重复的数字
 */

// @lc code=start
// 由互斥原理可知，至少有1位重复的数字的正整数个数等于总个数减去没有重复数字的正整数个数。
// 为了方便计算，我们首先求出在整数区间[0, n]之间的没有重复数字的正整数个数x，那么结果等于n + 1 - x。
function numDupDigitsAtMostN(n: number): number {
  const sn = "" + n;
  // dp[i][mask]表示在填写第i位数字时，已经使用了mask二进制中对应的数字，利用剩余的数字可以组合出没有重复数字的正整数个数。
  const dp: number[][] = new Array(sn.length)
    .fill(0)
    .map(() => new Array(1 << 10).fill(-1));
  // 从最高位开始填入各个数字，使用整数掩码mask记录前面已经填入过的数字（注意前缀0不计入已填入的数字）
  // sn是固定参数，表示输入数字的字符类型
  // i表示当前要填写第i位数字
  // same表示第i位之前的数字是否与sn相同
  const f = (mask: number, sn: string, i: number, same: boolean): number => {
    // 成功组合出一个没有重复数字的正整数
    if (i === sn.length) {
      return 1;
    }
    // 当前需要填入第i位，且前面填入的数字与n对应位置的数字不相同，那么需要求得的不重复数字的正整数个数只与mask相关
    if (!same && dp[i][mask] >= 0) {
      return dp[i][mask];
    }
    let ret = 0;
    // 当前填入第i位，如果前面填入的数字与n对应位置的数字相同，那么可选的填入数字小于等于n在第i位的数字，否则可填入全部数字
    let t = same ? sn[i].charCodeAt(0) - "0".charCodeAt(0) : 9;
    // 记可填入的最大数字为t，依次尝试填入数字[0...t]
    for (let k = 0; k <= t; k++) {
      // 如果k已经出现在mask中，那么说明填入数字k不合法
      if ((mask & (1 << k)) !== 0) {
        continue;
      }
      // 可以填入数字k，那么尝试填入第i+1位的数字
      ret += f(
        // 在填入第i+1位数字时，如果掩码mask(i)=0且k=0成立，那么说明前面都是前缀0，掩码mask(i+1)为0，否则mask(i+1)等于mask(i)在第k位设为1后的值
        mask === 0 && k === 0 ? mask : mask | (1 << k),
        sn,
        i + 1,
        // 如果在填入第i位时，前面填入的数字与n对应位置的数字相同，且在第i位填入的数字为t，那么填入第i+1位时，前面填入的数字也与n对应位置的数字相同
        same && k === t
      );
    }
    // 使用备忘录dp记录该结果，避免重复计算
    if (!same) {
      dp[i][mask] = ret;
    }
    return ret;
  };
  return n + 1 - f(0, sn, 0, true);
}
// @lc code=end
