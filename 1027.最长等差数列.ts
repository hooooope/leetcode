/*
 * @lc app=leetcode.cn id=1027 lang=typescript
 *
 * [1027] 最长等差数列
 */

// @lc code=start
// 动态规划
/* 
  记f[i][d][num]表示使用数组nums中下标小于等于i的元素，构造公差为d的等差数列，并且最后一个元素为num时，等差数列长度的最大值
  在进行状态转移时，我们考虑是否将当前的第i个元素作为末项加入等差数列
  1.如果不加入等差数列，那么每一项的答案应该与使用下标等于i-1的元素对应的答案相同，即：f[i][d][num] = f[i-1][d][num]
  2.如果加入等差数列，那么有两种情况
    2.1.第一种是等差数列的长度至少为2，即然末项是nums[i]，那么倒数第二项就是nums[i]-d，这样我们就可以得到状态转移方程：
    f[i][d][nums[i]] = f[i-1][d][nums[i]-d]+1
    这里需要保证nums[i]-d落在满足要求的范围内，即必须在数组nums中最小值和最大值之间。并且f[i-1][d][nums[i]-d]本身也需要是一个合法的状态，即必须要存在以nums[i]-d为末项的等差数列
    2.2.第二种是等差数列的长度为1，即nums[i]单独形成一个等差数组，即：
    f[i][d][nums[i]]=1
  由于我们需要求出的是最大值，因此所有的状态转移都会取二者的较大值
  如果我们使用数组表示f，可以将所有状态的初始值均设置为-1，表示不合法的状态
  最终的答案即为f[n-1][..][..]中的最大值，其中n是数组nums的长度
  需要注意的是，d的取值范围是[-diff,diff]，其中diff是数组nums中最大值与最小值的差
  在上面的状态转移方程中，我们发现，当状态的第一维从i-1变成i后，实际上只有f[i][d][nums[i]]可能会相较于f[i-1][d][nums[i]]的值发生变化，而其余的值均保持不变。因此，我们可以省去第一维，在状态转移时只需要修改最多一个状态的值
  此时，状态变为f[d][num]，当我们遍历到数组nums的第i个元素时，只需要进行：
  f[d][nums[i]] = f[d][nums[i]-d]+1
  以及：
  f[d][nums[i]] = 1
  这两个状态转移即可。进一步我们发现，f[d][..]只会从f[d][..]转移而来，因此我们可以继续省去当前的第一维，使用一个外层循环枚举d，而在内层循环中，只需要进行：
  f[nums[i]]=f[nums[i]-d]+1
  以及：
  f[nums[i]] = 1
  这两个状态转移即可
*/
function longestArithSeqLength(nums: number[]): number {
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  let ret = 1;
  const diff = max - min;
  for (let d = -diff; d <= diff; d++) {
    const f = new Array(max + 1).fill(-1);
    for (const num of nums) {
      let pre = num - d;
      if (pre >= min && pre <= max && f[pre] !== -1) {
        f[num] = f[pre] + 1;
        ret = Math.max(ret, f[num]);
      }
      f[num] = Math.max(f[num], 1);
    }
  }
  return ret;
}
// @lc code=end
