/*
 * @lc app=leetcode.cn id=1616 lang=typescript
 *
 * [1616] 分割两个字符串得到回文串
 */

// @lc code=start
function checkPalindromeFormation(a: string, b: string): boolean {
  const checkConcatenation = (a: string, b: string): boolean => {
    const n = a.length;
    let left = 0;
    let right = n - 1;
    while (left < right && a[left] === b[right]) {
      left++;
      right--;
    }
    // 直接在中间位置切割，由a的前半部分和b的后半部分组成回文串
    if (left >= right) {
      return true;
    }
    return (
      // 如果分割点为右指针，要求a的[left...right]为回文
      checkSelfPalindrome(a, left, right) ||
      // 如果分割点为左指针，要求b的[left...right]为回文
      checkSelfPalindrome(b, left, right)
    );
  };
  const checkSelfPalindrome = (
    a: string,
    left: number,
    right: number
  ): boolean => {
    while (left < right && a[left] === a[right]) {
      left++;
      right--;
    }
    return left >= right;
  };
  return checkConcatenation(a, b) || checkConcatenation(b, a);
}
// @lc code=end
