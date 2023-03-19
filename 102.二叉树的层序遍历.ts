/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const ret: number[][] = [];
  if (root === null) {
    return ret;
  }
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    let n = queue.length;
    const nums: number[] = [];
    while (n) {
      const node = queue.shift()!;
      nums.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      n--;
    }
    ret.push(nums);
  }
  return ret;
}
// @lc code=end
