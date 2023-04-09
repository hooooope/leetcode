/*
 * @lc app=leetcode.cn id=1019 lang=typescript
 *
 * [1019] 链表中的下一个更大节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nextLargerNodes(head: ListNode | null): number[] {
  const ret: number[] = [];
  // 从栈底到栈顶保持单调递减的单调栈
  const stack: [number, number][] = [];
  let i = 0;
  let cur = head;
  while (cur) {
    // 若找到下一个更大的元素，则将其值覆盖
    // 否则其默认值为0，表示找不到下一个更大的元素
    ret.push(0);
    // 若当前元素严格大于栈顶元素，说明栈顶元素找到了下一个更大的元素
    // 弹出栈顶元素，将当前元素作为它的下一个更大的元素
    while (stack.length && stack[stack.length - 1][0] < cur.val) {
      ret[stack.pop()![1]] = cur.val;
    }
    // 压入单调栈时，记录每一个节点的值和索引，方便后续操作
    stack.push([cur.val, i++]);
    cur = cur.next;
  }
  return ret;
}
// @lc code=end
