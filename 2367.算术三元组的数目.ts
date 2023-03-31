/*
 * @lc app=leetcode.cn id=2367 lang=typescript
 *
 * [2367] 算术三元组的数目
 */

// @lc code=start
// 暴力枚举
/* function arithmeticTriplets(nums: number[], diff: number): number {
  let ret = 0;
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (nums[j] - nums[i] !== diff) {
        continue;
      }
      for (let k = j + 1; k < n; k++) {
        if (nums[k] - nums[j] === diff) {
          ret++;
        }
      }
    }
  }
  return ret;
} */

// 哈希集合（两次遍历）
/* function arithmeticTriplets(nums: number[], diff: number): number {
  let ret = 0;
  // 由于数组严格递增，因此不会出现两个重复的数字
  const set = new Set<number>();
  for (const n of nums) {
    set.add(n);
  }
  for (const n of nums) {
    if (set.has(n + diff) && set.has(n + 2 * diff)) {
      ret++;
    }
  }
  return ret;
} */

// 哈希集合（一次遍历）
function arithmeticTriplets(nums: number[], diff: number): number {
  let ret = 0;
  // 由于数组严格递增，因此不会出现两个重复的数字
  const set = new Set<number>();
  for (const n of nums) {
    set.add(n);
    if (set.has(n - diff) && set.has(n - 2 * diff)) {
      ret++;
    }
  }
  return ret;
}

// 三指针
/* function arithmeticTriplets(nums: number[], diff: number): number {
  // 利用数组nums严格递增的条件，可以使用三指针遍历数组得到算数三元组
  let ret = 0;
  const n = nums.length;
  for (let i = 0, j = 1, k = 2; i < n - 2 && j < n - 1 && k < n; i++) {
    // 定位j，为了确保j>i，如果j<=i则将j更新为i+1
    j = Math.max(j, i + 1);
    // 如果j<n-1且nums[j]-nums[i]<diff，则只有将j向右移动才可能满足nums[j]-nums[i]=diff，因此将j向右移动
    while (j < n - 1 && nums[j] - nums[i] < diff) {
      j++;
    }
    // 直到j>=n-1或nums[j]-nums[i]>=diff
    // 如果此时j>=n-1或nums[j]-nums[i]>diff，则对于当前的i不存在j和k可以组成算数三元组，因此继续枚举下一个i
    if (j >= n - 1 || nums[j] - nums[i] > diff) {
      continue;
    }
    // 定位k，为了确保k>j，如果k<=j则将k更新为j+1
    k = Math.max(k, j + 1);
    // 如果k<n且nums[k]-nums[j]<diff，则只有将k向右移动才可能满足nums[k]-nums[j]=diff，因此将k向右移动
    while (k < n && nums[k] - nums[j] < diff) {
      k++;
    }
    // 直到k>=n或nums[k]-nums[j]>=diff
    // 如果此时k<n且nums[k]-nums[j]=diff，则当前的(i,j,k)是算数三元组
    if (k < n && nums[k] - nums[j] === diff) {
      ret++;
    }
  }
  return ret;
} */

// @lc code=end
