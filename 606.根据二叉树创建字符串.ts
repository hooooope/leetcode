/*
 * @lc app=leetcode.cn id=606 lang=typescript
 *
 * [606] 根据二叉树创建字符串
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
/* 
  124442213331
  左 右 √
  左 空 x
  空 右 √
  空·空 x
*/
/* function tree2str(root: TreeNode | null): string {
  let ret: string[] = [];
  const travel = (root: TreeNode | null) => {
    if (root === null) {
      return;
    }
    ret.push(String(root.val));
    if (root.left || root.right) {
      ret.push("(");
      travel(root.left);
      ret.push(")");
    }
    if (root.right) {
      ret.push("(");
      travel(root.right);
      ret.push(")");
    }
  };
  travel(root);
  return ret.join("");
} */

/* function tree2str(root: TreeNode | null): string {
  if (!root) {
    return "";
  }
  if (!root.left && !root.right) {
    return "" + root.val;
  }
  // 由于上一个if的收敛，当右子节点不存在时，左子节点一定存在
  if (!root.right) {
    return `${root.val}(${tree2str(root.left)})`;
  }
  return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
} */

function tree2str(root: TreeNode | null): string {
  let ret = "";
  const stack: TreeNode[] = [root];
  const visited = new Set<TreeNode>();
  while (stack.length) {
    const node = stack[stack.length - 1];
    if (visited.has(node)) {
      if (node !== root) {
        ret += ")";
      }
      stack.pop();
    } else {
      visited.add(node);
      if (node !== root) {
        ret += "(";
      }
      ret += node.val;
      if (!node.left && node.right) {
        ret += "()";
      }
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }
  return ret;
}
// @lc code=end
