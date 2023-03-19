/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
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

// 中序遍历+哈希表
/* function findMode(root: TreeNode | null): number[] {
  let max = Number.MIN_VALUE;
  const map = new Map<number, number>();
  const travel = (root: TreeNode | null) => {
    if (!root) return root;
    const key = root.val;
    const val = map.has(root.val) ? map.get(root.val)! + 1 : 1;
    map.set(key, val);
    if (val > max) {
      max = val;
    }
    travel(root.left);
    travel(root.right);
  };
  travel(root);

  const ret: number[] = [];
  for (const [key, val] of map.entries()) {
    if (val === max) {
      ret.push(key);
    }
  }
  return ret;
} */

// 中序遍历+BST的有序性
/* function findMode(root: TreeNode | null): number[] {
  let base = 0;
  let count = 0;
  let maxCount = 0;
  let ret: number[] = [];
  const travel = (root: TreeNode | null) => {
    if (!root) return root;
    travel(root.left);
    update(root.val);
    travel(root.right);
  };
  const update = (n: number) => {
    if (n === base) {
      count++;
    } else {
      base = n;
      count = 1;
    }
    if (count === maxCount) {
      ret.push(n);
    }
    if (count > maxCount) {
      maxCount = count;
      ret = [n];
    }
  };
  travel(root);
  return ret;
} */

// Morris中序遍历+BST的有序性
function findMode(root: TreeNode | null): number[] {
  let base = 0;
  let count = 0;
  let maxCount = 0;
  let ret: number[] = [];
  const update = (n: number) => {
    if (n === base) {
      count++;
    } else {
      base = n;
      count = 1;
    }
    if (count === maxCount) {
      ret.push(n);
    }
    if (count > maxCount) {
      maxCount = count;
      ret = [n];
    }
  };
  while (root) {
    if (root.left) {
      let predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }
      if (predecessor.right) {
        update(root.val);
        predecessor.right = null;
        root = root.right;
      } else {
        predecessor.right = root;
        root = root.left;
      }
    } else {
      update(root.val);
      root = root.right;
    }
  }
  return ret;
}
// @lc code=end
