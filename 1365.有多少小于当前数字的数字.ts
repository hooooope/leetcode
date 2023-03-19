/*
 * @lc app=leetcode.cn id=1365 lang=typescript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/* function smallerNumbersThanCurrent(nums: number[]): number[] {
  const n = nums.length;
  const ret = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const a = nums[i];
    for (let j = 0; j < n; j++) {
      const b = nums[j];
      a > b && ret[i]++;
    }
  }
  return ret;
} */

/* 
  data[][]: 记录原数组的值和索引
  data[i][0]: 原数组的值
  data[i][1]: 原数组的索引
  1.构建二维数组data
  2.data按升序排序
  3.遍历data获得原数组的值、索引和当前索引
    3.1.若当前值不等于（即大于）上一个值
    3.2.记录小于当前值的数字个数（即当前遍历索引）
    3.3.ret[data[i][1]]=i （结果数组[二维数组[当前遍历索引][1]]=当前遍历索引）
*/
/* function smallerNumbersThanCurrent(nums: number[]): number[] {
  const n = nums.length;
  const data = new Array(n).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    data[i][0] = nums[i];
    data[i][1] = i;
  }
  data.sort((a, b) => a[0] - b[0]);
  let prev = -1;
  const ret = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (prev === -1 || data[i][0] !== data[i - 1][0]) {
      prev = i;
    }
    ret[data[i][1]] = prev;
  }
  return ret;
} */

/* 
  0.输入数组的值域[0, 100]
  1.构建数组记录每个数字出现的次数
  2.将上述数组转化为前缀和数组
  3.遍历输入数组，从前缀和数组中获取小于当前值的数字个数
*/
function smallerNumbersThanCurrent(nums: number[]): number[] {
  const n = nums.length;
  const ret = new Array(n).fill(0);
  const cnt = new Array(101).fill(0);
  for (const n of nums) {
    cnt[n]++;
  }
  for (let i = 1; i < cnt.length; i++) {
    cnt[i] += cnt[i - 1];
  }
  for (let i = 0; i < n; i++) {
    ret[i] = nums[i] ? cnt[nums[i] - 1] : 0;
  }
  return ret;
}
// @lc code=end
