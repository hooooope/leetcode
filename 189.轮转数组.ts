/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// 使用额外的数组
/* function rotate(nums: number[], k: number): void {
  const n = nums.length;
  const newArr = new Array(n);
  for (let i = 0; i < n; i++) {
    newArr[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = newArr[i];
  }
} */

// 环状替换
/* function rotate(nums: number[], k: number): void {
  const gcd = (x: number, y: number) => (y ? gcd(y, x % y) : x);
  const n = nums.length;
  const count = gcd(k, n);
  for (let start = 0; start < count; start++) {
    let curr = start;
    let prev = nums[start];
    do {
      const next = (curr + k) % n;
      const temp = nums[next];
      nums[next] = prev;
      curr = next;
      prev = temp;
    } while (curr !== start);
  }
} */

// 数组翻转
/* 
  我们将数组的元素向后移动k次后，
  尾部k mod n个元素会移动至数组头部，
  其余元素向后移动k mod n个位置，
  我们可以先将所有元素翻转，这样尾部的k mod n个元素就被移至数组头部，
  然后我们再翻转[0, (k mod n) - 1]区间的元素和
  [k mod n, n-1]区间的元素即能得到最后的答案
  
  nums = "----->-->"; k =3
  result = "-->----->";

  reverse "----->-->" we can get "<--<-----"
  reverse "<--" we can get "--><-----"
  reverse "<-----" we can get "-->----->"

*/
function rotate(nums: number[], k: number): void {
  const reverse = (nums: number[], start: number, end: number) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  const n = nums.length;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, (k % n) - 1);
  reverse(nums, k % n, n - 1);
}
// @lc code=end
