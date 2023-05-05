/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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
/* function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) {
    return 0;
  }
  const process = (root: TreeNode | null, targetSum: number): number => {
    if (root === null) {
      return 0;
    }
    let ret = 0;
    if (targetSum - root.val === 0) {
      ret++;
    }
    ret += process(root.left, targetSum - root.val);
    ret += process(root.right, targetSum - root.val);
    return ret;
  };
  let ret = process(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
} */

/* 
  前缀和
  解法一中存在许多重复计算。
  定义节点的前缀和为：由根节点到当前节点的路径上所有节点的和。
  利用先序遍历二叉树，记录下根节点root到当前节点p的路径上除当前节点以外所有节点的前缀和，在已保存的路径前缀和中查找是否存在前缀和刚好等于当前节点到根节点的前缀和currentSum减去targetSum(可能存在多个)
*/
function pathSum(root: TreeNode | null, targetSum: number): number {
  // key: 前缀和, value: 该前缀和出现的次数
  const prefix = new Map<number, number>();
  // 初始化前缀和为0出现了1次
  prefix.set(0, 1);
  const dfs = (
    root: TreeNode | null,
    prefix: Map<number, number>,
    currentSum: number,
    targetSum: number
  ) => {
    if (root === null) {
      return 0;
    }
    let ret = 0;
    currentSum += root.val;
    ret += prefix.get(currentSum - targetSum) ?? 0;
    prefix.set(currentSum, (prefix.get(currentSum) ?? 0) + 1);
    ret += dfs(root.left, prefix, currentSum, targetSum);
    ret += dfs(root.right, prefix, currentSum, targetSum);
    prefix.set(currentSum, (prefix.get(currentSum) ?? 0) - 1);
    return ret;
  };
  return dfs(root, prefix, 0, targetSum);
}
// @lc code=end
