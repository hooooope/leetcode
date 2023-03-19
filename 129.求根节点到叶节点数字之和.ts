/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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
/* function sumNumbers(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null, sum: number) => {
    if (root === null) {
      return 0;
    }
    sum = sum * 10 + root.val;
    if (root.left === null && root.right === null) {
      return sum;
    }
    return dfs(root.left, sum) + dfs(root.right, sum);
  };
  return dfs(root, 0);
} */

// bfs
function sumNumbers(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let ret = 0;
  const nodeQueue: TreeNode[] = [root];
  const sumQueue: number[] = [root.val];
  while (nodeQueue.length) {
    const node = nodeQueue.shift()!;
    const sum = sumQueue.shift()!;
    if (node.left) {
      nodeQueue.push(node.left);
      sumQueue.push(sum * 10 + node.left.val);
    }
    if (node.right) {
      nodeQueue.push(node.right);
      sumQueue.push(sum * 10 + node.right.val);
    }
    if (node.left === null && node.right === null) {
      ret += sum;
    }
  }
  return ret;
}
// @lc code=end
