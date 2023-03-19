/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

// 递归（深度优先）
/* function isSymmetric(root: TreeNode | null): boolean {
  const check = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (!p && !q) {
      // 左右节点都不存在
      return true;
    } else if (!p || !q) {
      // 左右节点只有一个存在
      return false;
    } else if (p.val !== q.val) {
      // 左右节点都存在但不相等
      return false;
    } else {
      // 左右节点都存在且相等
      return check(p.left, q.right) && check(p.right, q.left);
    }
  };
  return check(root.left, root.right);
} */

// 迭代（广度优先）
/* function isSymmetric(root: TreeNode | null): boolean {
  const check = (p: TreeNode | null, q: TreeNode | null): boolean => {
    const queue: (TreeNode | null)[] = [];
    queue.push(p);
    queue.push(q);
    while (queue.length) {
      p = queue.shift();
      q = queue.shift();
      if (!p && !q) continue;
      if (!p || !q || p.val !== q.val) return false;
      queue.push(p.left);
      queue.push(q.right);
      queue.push(p.right);
      queue.push(q.left);
    }
    return true;
  };
  return check(root.left, root.right);
} */
// @lc code=end
