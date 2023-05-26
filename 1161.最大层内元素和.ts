/*
 * @lc app=leetcode.cn id=1161 lang=typescript
 *
 * [1161] 最大层内元素和
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
/* class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
} */

// DFS
function maxLevelSum(root: TreeNode): number {
  const sum: number[] = [];
  const dfs = (node: TreeNode, level: number) => {
    if (level === sum.length) {
      sum.push(node.val);
    } else {
      sum[level] += node.val;
    }
    if (node.left) {
      dfs(node.left, level + 1);
    }
    if (node.right) {
      dfs(node.right, level + 1);
    }
  };
  dfs(root, 0);
  let ret = 0;
  for (let i = 0; i < sum.length; i++) {
    if (sum[i] > sum[ret]) {
      ret = i;
    }
  }
  // 层号从 1 开始
  return ret + 1;
}

// BFS
/* function maxLevelSum(root: TreeNode): number {
  let ret = 1;
  let max = -Infinity;
  const queue: TreeNode[] = [root];
  for (let level = 1; queue.length > 0; level++) {
    let sum = 0;
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (sum > max) {
      max = sum;
      ret = level;
    }
  }
  return ret;
} */
// @lc code=end
