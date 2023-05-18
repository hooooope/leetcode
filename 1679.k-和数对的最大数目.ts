/*
 * @lc app=leetcode.cn id=1679 lang=typescript
 *
 * [1679] K 和数对的最大数目
 */

// @lc code=start
// 排序+双指针
/* function maxOperations(nums: number[], k: number): number {
  let ret = 0
  let left = 0;
  let right = nums.length - 1
  nums.sort((a, b) => a - b)
  while (left < right) {
    const sum = nums[left] + nums[right]
    if (sum === k) {
      ret++
      left++
      right--
    } else if (sum < k) {
      left++
    } else {
      right--
    }
  }
  return ret
}; */

// 哈希表+两次循环
/* function maxOperations(nums: number[], k: number): number {
  let ret = 0
  const map = new Map<number, number>()
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }
  for (const n1 of nums) {
    if (!map.has(n1)) {
      continue
    }
    const c1 = map.get(n1)!
    if (c1 === 1) {
      map.delete(n1)
    } else {
      map.set(n1, c1 - 1)
    }
    const n2 = k - n1
    if (map.has(n2)) {
      ret++
      const c2 = map.get(n2)!
      if (c2 === 1) {
        map.delete(n2)
      } else {
        map.set(n2, c2 - 1)
      }
    }
  }
  return ret
}; */

// 哈希表+一次循环
function maxOperations(nums: number[], k: number): number {
  let ret = 0
  const map = new Map<number, number>()
  for (const n1 of nums) {
    const n2 = k - n1
    if (map.has(n2)) {
      ret++
      const c2 = map.get(n2)!
      if (c2 === 1) {
        map.delete(n2)
      } else {
        map.set(n2, c2 - 1)
      }
      continue
    }
    map.set(n1, (map.get(n1) ?? 0) + 1)
  }
  return ret
};
// @lc code=end

