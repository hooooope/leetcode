/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
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

/* function countNodes(root: TreeNode | null): number {
  let ret = 0;
  const queue: (TreeNode | null)[] = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift()!;
    if (node === null) {
      break;
    }
    queue.push(node.left);
    queue.push(node.right);
    ret++;
  }
  return ret;
} */

// 递归
/* function countNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  // 根据树中某个节点的高度，计算完全二叉树的高度
  const treeHeight = (root: TreeNode | null, height: number): number => {
    if (root === null) {
      return height - 1;
    }
    while (root.left) {
      height++;
      root = root.left;
    }
    return height;
  };
  // 计算完全二叉树的节点个数
  const process = (
    root: TreeNode,
    currentH: number,
    totalH: number
  ): number => {
    if (currentH === totalH) {
      return 1;
    }
    if (treeHeight(root.right, currentH + 1) === totalH) {
      // 说明左子树为满二叉树
      return (
        (1 << (totalH - currentH)) + process(root.right, currentH + 1, totalH)
      );
    } else {
      // 说明右子树为满二叉树
      return (
        (1 << (totalH - currentH - 1)) +
        process(root.left, currentH + 1, totalH)
      );
    }
  };
  const totalH = treeHeight(root, 1);
  return process(root, 1, totalH);
} */

// 二分查找+位运算
function countNodes(root: TreeNode | null): number {
  const exists = (root: TreeNode, level: number, k: number): boolean => {
    // 每一层节点二进制编号的第一位都为1
    // 从二进制编号的第二位开始，0表示向左移动，1表示向右移动
    // 例：第3层第1个节点的二进制编号为1000
    // 树中第12个节点的二进制编号为1100
    // bits从0100开始，每次与1100相与后右移一位
    // 依次取出第二位到最后一位，也就是从根节点到12号节点的路径
    let bits = 1 << (level - 1);
    let node = root;
    // 边界条件为bits > 0，而不是bits !== 0
    // 当level为0时，bits = 1 << (-1)，是一个很大的负数
    while (node && bits > 0) {
      if (!(bits & k)) {
        node = node.left;
      } else {
        node = node.right;
      }
      bits >>= 1;
    }
    return node !== null;
  };
  if (root === null) {
    return 0;
  }
  // 总层数（根节点在第0层）
  let level = 0;
  let node = root;
  while (node.left) {
    level++;
    node = node.left;
  }
  // 最后一层第一个节点的编号（根节点的编号为1）
  let low = 1 << level;
  // 最后一层最后一个节点的编号
  let high = (1 << (level + 1)) - 1;
  while (low < high) {
    const mid = low + Math.floor((high - low + 1) / 2);
    if (exists(root, level, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return low;
}
// @lc code=end
