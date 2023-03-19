/*
 * @lc app=leetcode.cn id=958 lang=typescript
 *
 * [958] 二叉树的完全性检验
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

/* function isCompleteTree(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  let leaf = false; // 是否遇到左右孩子不双全的节点
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift()!;
    if (
      (node.left === null && node.right !== null) ||
      (leaf && (node.left !== null || node.right !== null))
    ) {
      return false;
    }
    if (node.left === null || node.right === null) {
      leaf = true;
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return true;
} */

function isCompleteTree(root: TreeNode | null): boolean {
  const queue: (TreeNode | null)[] = [];
  queue.push(root);
  let end = false; // 遍历完所有非空节点时变为true
  while (queue.length) {
    const node = queue.shift()!;
    if (node === null) {
      end = true;
    } else {
      if (end) {
        return false;
      }
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return true;
}
// @lc code=end
