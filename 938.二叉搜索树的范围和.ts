/*
 * @lc app=leetcode.cn id=938 lang=typescript
 *
 * [938] 二叉搜索树的范围和
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

// dfs
/* function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let ret = 0;
  const travel = (root: TreeNode | null) => {
    if (root === null || root.val) {
      return;
    }
    travel(root.left);
    if (root.val >= low && root.val <= high) {
      ret += root.val;
    }
    travel(root.right);
  };
  travel(root);
  return ret;
} */

// dfs
/* function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root === null) {
    return 0;
  }
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }
  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }
  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
} */

// bfs
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let ret = 0;
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    if (node === null) {
      continue;
    }
    if (node.val < low) {
      queue.push(node.right);
    } else if (node.val > high) {
      queue.push(node.left);
    } else {
      ret += node.val;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return ret;
}
// @lc code=end
