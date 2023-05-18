/*
 * @lc app=leetcode.cn id=1073 lang=typescript
 *
 * [1073] 负二进制数相加
 */

// @lc code=start
// 模拟
function addNegabinary(arr1: number[], arr2: number[]): number[] {
  const ret: number[] = []
  let i = arr1.length - 1
  let j = arr2.length - 1
  // 本题是负二进制，第i位对应的是(-2)^i，而第i+1位对应的是(-2)^(i+1)，是第i位的-2倍。因此，当第i位发生进位时，carry应当置为-1，而不是1
  // 此时，由于arr1[i]和arr2[i]的范围都是{0,1}，而carry的范围从{0,1}变成了{-1,0}，因此x的范围从{0,1,2,3}变成了{-1,0,1,2}。
  let carry = 0
  while (i >= 0 || j >= 0 || carry !== 0) {
    // x=arr1[i]+arr2[i]+carry
    // x的范围为{-1,0,1,2}
    let x = carry
    // arr1和arr2长度可能不一致，需要进行边界判断
    if (i >= 0) {
      x += arr1[i]
    }
    if (j >= 0) {
      x += arr2[j]
    }
    if (x >= 2) {
      // 如果x=2,3，第i位的结果是x-2，需要进位，将carry置为-1
      x -= 2
      carry = -1
    } else if (x >= 0) {
      // 如果x=0,1，第i位的结果就是x，并且将carry置为0
      carry = 0
    } else {
      // -(-2)^i = (-2)^(i+1) + (-2)^i
      // 等式左侧表示第i位为-1的值，右侧表示第i和i+1位为1的值
      // 如果x=-1，此时第i位的结果应当为1，同时需要进位，将carry置为1
      // 最终，carry的范围为{-1,0,1}，会多出x=3的情况，但它与x=2的情况是一致的
      x = 1
      carry = 1
    }
    ret.unshift(x)
    i--
    j--
  }
  // 移除前导零
  while (ret.length > 1 && ret[0] === 0) {
    ret.splice(0, 1)
  }
  return ret
};
// @lc code=end

