/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

// 深度优先
/* function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
} */

// 广度优先
/* function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 0;
  let node: TreeNode = null;
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    let length = queue.length;
    while (length) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      length--;
    }
    ans++;
  }
  return ans;
} */
// @lc code=end
