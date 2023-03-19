/*
 * @lc app=leetcode.cn id=1124 lang=typescript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
// 贪心
/* function longestWPI(hours: number[]): number {
  const n = hours.length;
  // 记工作小时数大于8的为1分，否则为-1分
  // 那么原问题可以看做求解区间分数和大于0的最长区间长度
  // 为了方便计算区间分数和，首先预处理分数的前缀和s
  const s: number[] = new Array(n + 1).fill(0);
  // 求解最长的一段区间[l,r]，使得s[r] - s[l] > 0，其中0 <= l <= r <= n
  // 固定r，目标找到一个最小的l使得s[l] < s[r]
  // 倘若有l1 <= l2，并且s[l1] <= s[l2]，那么l1比l2更优，l2永远不为成为任意一个r的候选
  // 因此，维护一个栈stk，栈中元素为s[0]~s[r-1]的递减项
  // 求解l时，不断地弹出栈顶元素，直到栈顶元素是最后一个小于s[r]的元素
  const stk: number[] = [0];
  for (let i = 1; i < s.length; i++) {
    s[i] = s[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
    if (s[stk[stk.length - 1]] > s[i]) {
      stk.push(i);
    }
  }
  let ret = 0;
  // 由于过程中弹出的元素值都要比当前栈顶元素值小
  // 因此这些弹出的元素仍然可能成为后面r的候选
  // 不妨试试从大到小遍历r
  // 1.如果有r1<r2，并且s[r1]>s[r2]，那么r1所匹配的左端点l1和r2所匹配的左端点l2一定有l1<=l2。
  // 在stk中，l2相比l1更靠近栈顶，倘若求解l2的过程中弹出了某些元素，也不会影响l1的求解。
  // 对于l1=l2的情况，由于此时满足r2-l2 > r1-l1，因此将l2弹出栈也不会影响最终答案的求解。
  // 2.如果有r1<r2，并且s[r1]<=s[r2]，那么r1永远不会成为最优答案的右端点。
  for (let r = n; r >= 1; r--) {
    while (stk.length && s[stk[stk.length - 1]] < s[r]) {
      ret = Math.max(ret, r - stk.pop()!);
    }
  }
  return ret;
} */

// 哈希表
function longestWPI(hours: number[]): number {
  const n = hours.length;
  const map = new Map<number, number>();
  let ret = 0;
  let s = 0; // 前缀和
  for (let i = 0; i < n; i++) {
    s += hours[i] > 8 ? 1 : -1;
    if (s > 0) {
      // 如果s[i]>0，那么前i+1项元素之和大于0，
      // 表示有一个长度为i+1的大于0的区间
      ret = Math.max(ret, i + 1);
    } else {
      // 如果s[i]<0，我们在前面试图寻找一个下标j，满足s[j]=s[i]-1。
      // 如果有，则表示区间[j+1,i]是我们要找的以i结尾的最长区间。
      // 为什么第2种情况要找s[i]-1，而不是s[i]-2或者更小的一项？
      // 因为在本题种分数只有1或者-1，且前缀和从0开始累加，
      // 如果存在s[i]-2或者更小的一项，那么前面一定存在s[i]-1，
      // 从而获得以s[i]-1为左端点的更长区间。
      if (map.has(s - 1)) {
        ret = Math.max(ret, i - map.get(s - 1)!);
      }
    }
    if (!map.has(s)) {
      map.set(s, i);
    }
  }
  return ret;
}
// @lc code=end
