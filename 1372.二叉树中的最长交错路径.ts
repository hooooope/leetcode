/*
 * @lc app=leetcode.cn id=1372 lang=typescript
 *
 * [1372] 二叉树中的最长交错路径
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

// 动态规划
/* function longestZigZag(root: TreeNode): number {
  const f = new Map<TreeNode, number>()
  const g = new Map<TreeNode, number>()
  const q: [TreeNode, TreeNode | null][] = []
  const dp = (o: TreeNode) => {
    f.set(o, 0)
    g.set(o, 0)
    q.push([o, null])
    while (q.length) {
      const [u, x] = q.shift()!
      f.set(u, 0)
      g.set(u, 0)
      if (x) {
        if (x.left === u) {
          f.set(u, g.get(x)! + 1)
        }
        if (x.right === u) {
          g.set(u, f.get(x)! + 1)
        }
      }
      if (u.left) {
        q.push([u.left, u])
      }
      if (u.right) {
        q.push([u.right, u])
      }
    }
  }
  dp(root)
  let ret = 0
  for (const u of f.keys()) {
    ret = Math.max(ret, f.get(u)!, g.get(u)!)
  }
  return ret
}; */

// DFS
function longestZigZag(root: TreeNode): number {
  if (root === null) {
    return 0;
  }
  const dfs = (root: TreeNode, dir: boolean, len: number) => {
    ret = Math.max(ret, len);
    if (dir) {
      if (root.left) {
        dfs(root.left, !dir, len + 1);
      }
      if (root.right) {
        dfs(root.right, dir, 1);
      }
    } else {
      if (root.right) {
        dfs(root.right, !dir, len + 1);
      }
      if (root.left) {
        dfs(root.left, dir, 1);
      }
    }
  };
  let ret = 0;
  dfs(root, true, 0);
  dfs(root, false, 0);
  return ret;
}
// @lc code=end
