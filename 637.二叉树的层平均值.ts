/*
 * @lc app=leetcode.cn id=637 lang=typescript
 *
 * [637] 二叉树的层平均值
 */

import { count } from "console";

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
// DFS
function averageOfLevels(root: TreeNode | null): number[] {
  const counts: number[] = []; // 记录每一层的节点数
  const sums: number[] = []; // 记录每一层的节点和
  const dfs = (root: TreeNode | null, level: number) => {
    if (!root) {
      return;
    }
    if (level < counts.length) {
      counts[level] = counts[level] + 1;
      sums[level] = sums[level] + root.val;
    } else {
      counts.push(1);
      sums.push(root.val);
    }
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  };
  dfs(root, 0);
  const n = counts.length;
  const ret: number[] = [];
  for (let i = 0; i < n; i++) {
    ret[i] = sums[i] / counts[i];
  }
  return ret;
}

// BFS
/* function averageOfLevels(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    let sum = 0;
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ret.push(sum / n);
  }
  return ret;
} */
// @lc code=end
