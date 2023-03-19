/*
 * @lc app=leetcode.cn id=700 lang=typescript
 *
 * [700] 二叉搜索树中的搜索
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
// 递归
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    return root;
  }
  if (val === root.val) {
    return root;
  }
  return val < root.val
    ? searchBST(root.left, val)
    : searchBST(root.right, val);
}

// 迭代
/* function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let cur = root;
  while (cur && cur.val !== val) {
    cur = val < cur.val ? cur.left : cur.right;
  }
  return cur;
} */
// @lc code=end
