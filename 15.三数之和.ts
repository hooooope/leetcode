/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
// 排序+双指针
function threeSum(nums: number[]): number[][] {
  const ret: number[][] = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);
  // 枚举a
  for (let first = 0; first < n; first++) {
    // 需要和上一次枚举的数不相同
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    // c对应的指针初始指向数组的最右端
    let third = n - 1;
    const target = -nums[first];
    // 枚举b
    for (let second = first + 1; second < n; second++) {
      // 需要和上一次枚举的数不相同
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      // 如果我们固定了前两重循环枚举到的元素a和b，那么只有唯一的c满足a + b + c = 0
      // 当二重循环往后枚举一个元素b'时，由于b' > b，那么满足a + b' + c' = 0的c'一定有c' < c，即c'在数组中一定出现在c的左侧
      // 也就是说，我们可以从小到大枚举b，同时从大到小枚举c，即第二重循环和第三重循环实际上是并列的关系
      // 需要保证b的指针在c的指针的左侧
      while (second < third && nums[second] + nums[third] > target) {
        third--;
      }
      // 如果指针重合，随着b后续的增加
      // 就不会有满足a + b + c = 0并且b < c的c了，可以退出循环
      if (second === third) {
        break;
      }
      if (nums[second] + nums[third] === target) {
        ret.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return ret;
}
// @lc code=end
