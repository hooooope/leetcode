/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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
// 哈希表
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
      process(root.left, parentMap);
    }
    if (root.right) {
      parentMap.set(root.right, root);
      process(root.right, parentMap);
    }
  };
  const parentMap = new Map<TreeNode, TreeNode>();
  parentMap.set(root, null);
  process(root, parentMap);
  const path = new Set<TreeNode>();
  let node = p;
  while (node !== null) {
    path.add(node);
    node = parentMap.get(node);
  }
  node = q;
  while (!path.has(node)) {
    node = parentMap.get(node);
  }
  return node;
} */

// 递归
/* 
  后序遍历，寻找目标节点p和q
  左子树与右子树中，至少找到一个目标节点
  若只找到一个目标节点，则说明两个节点在同一条路径上，因为找到了其中一个节点提前返回，而另一个节点在其下面
  若找到两个目标节点，则说明两个节点不在同一条路径上，当前节点即为最近公共祖先
*/
/* function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  return left === null ? right : left;
} */

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let ret: TreeNode = root;
  const dfs = (
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ) => {
    if (root === null) {
      return false;
    }
    const leftRet = dfs(root.left, p, q);
    const rightRet = dfs(root.right, p, q);
    /* 
      1.左子树和右子树均包含p节点或q节点
      2.当前节点是p节点或q节点且它的左子树或右子树有一个包含了另一个节点
    */
    if (
      (leftRet && rightRet) ||
      ((root === p || root === q) && (leftRet || rightRet))
    ) {
      ret = root;
    }
    return root === p || root === q || leftRet || rightRet;
  };
  dfs(root, p, q);
  return ret;
}
// @lc code=end
