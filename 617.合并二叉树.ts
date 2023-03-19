/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] 合并二叉树
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
// 深度优先
/* function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null || root2 === null) {
    return root1 || root2;
  }
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
} */

// 广度优先
function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null || root2 === null) {
    return root1 || root2;
  }
  const merged: TreeNode = {
    val: root1.val + root2.val,
    left: null,
    right: null,
  };
  const queue: TreeNode[] = [merged];
  const queue1: TreeNode[] = [root1];
  const queue2: TreeNode[] = [root2];
  while (queue1.length && queue2.length) {
    const node = queue.shift();
    const node1 = queue1.shift();
    const node2 = queue2.shift();
    const left1 = node1.left;
    const right1 = node1.right;
    const left2 = node2.left;
    const right2 = node2.right;
    if (left1 !== null || left2 !== null) {
      // 两个左子节点都存在，创建新节点后，将三个节点分别入队
      if (left1 !== null && left2 !== null) {
        const left: TreeNode = {
          val: left1.val + left2.val,
          left: null,
          right: null,
        };
        node.left = left;
        queue.push(left);
        queue1.push(left1);
        queue2.push(left2);
      } else if (left1 !== null) {
        // 第一个左子节点存在，则无需入队，直接将其赋值为当前节点的左子节点
        node.left = left1;
      } else if (left2 !== null) {
        // 第二个左子节点存在，则无需入队，直接将其赋值为当前节点的左子节点
        node.left = left2;
      }
    }
    if (right1 !== null || right2 !== null) {
      if (right1 !== null && right2 !== null) {
        const right: TreeNode = {
          val: right1.val + right2.val,
          left: null,
          right: null,
        };
        node.right = right;
        queue.push(right);
        queue1.push(right1);
        queue2.push(right2);
      } else if (right1 !== null) {
        node.right = right1;
      } else if (right2 !== null) {
        node.right = right2;
      }
    }
  }
  return merged;
}
// @lc code=end
