/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rob(root: TreeNode | null): number {
  const process = (root: TreeNode | null) => {
    if (root === null) {
      return {
        yes: 0,
        no: 0,
      };
    }
    const leftInfo = process(root.left);
    const rightInfo = process(root.right);
    // 当前节点行窃，左右子节点不能行窃
    const yes = root.val + leftInfo.no + rightInfo.no;
    // 当前节点不行切，左右子节点可以行窃，也可以不行窃，取最大值
    const no =
      Math.max(leftInfo.yes, leftInfo.no) +
      Math.max(rightInfo.yes, rightInfo.no);
    return {
      yes,
      no,
    };
  };
  const info = process(root);
  return Math.max(info.yes, info.no);
}
// @lc code=end
