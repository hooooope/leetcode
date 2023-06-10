/*
 * @lc app=leetcode.cn id=1171 lang=typescript
 *
 * [1171] 从链表中删去总和值为零的连续节点
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
/* class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
} */

// 哈希表
function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let prefix = 0;
  const seen: Record<number, ListNode> = {};
  const dummy = new ListNode(0);
  dummy.next = head;
  for (let node: ListNode | null = dummy; node !== null; node = node.next) {
    prefix += node.val;
    seen[prefix] = node;
  }
  prefix = 0;
  for (let node: ListNode | null = dummy; node !== null; node = node.next) {
    prefix += node.val;
    node.next = seen[prefix].next;
  }
  return dummy.next;
}
// @lc code=end
