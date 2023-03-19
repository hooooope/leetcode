/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
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

/* function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const process = (
    root: TreeNode | null,
    parentMap: Map<TreeNode, TreeNode>
  ) => {
    if (root === null) {
      return;
    }
    if (root.left) {
      parentMap.set(root.left, root);
    }
    if (root.right) {
      parentMap.set(root.right, root);
    }
    process(root.left, parentMap);
    process(root.right, parentMap);
  };
  const parentMap = new Map<TreeNode, TreeNode>();
  parentMap.set(root, root);
  process(root, parentMap);
  const path = new Set();
  path.add(root);
  let cur = p;
  while (cur !== parentMap.get(cur)) {
    path.add(cur);
    cur = parentMap.get(cur);
  }
  cur = q;
  while (!path.has(cur)) {
    path.add(cur);
    cur = parentMap.get(cur);
  }
  return cur;
} */

// 两次遍历
/* function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const getPath = (root: TreeNode, target: TreeNode) => {
    const path: TreeNode[] = [];
    let node = root;
    while (node !== target) {
      path.push(node);
      if (target.val < node.val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    path.push(node);
    return path;
  };
  const path_p = getPath(root, p);
  const path_q = getPath(root, q);
  let ret = null;
  for (let i = 0; i < path_p.length && i < path_q.length; i++) {
    if (path_p[i] === path_q[i]) {
      ret = path_p[i];
    } else {
      break;
    }
  }
  return ret;
} */

// 一次遍历
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let ret = root;
  while (true) {
    if (p.val < ret.val && q.val < ret.val) {
      ret = ret.left;
    } else if (p.val > ret.val && q.val > ret.val) {
      ret = ret.right;
    } else {
      break;
    }
  }
  return ret;
}
// @lc code=end
