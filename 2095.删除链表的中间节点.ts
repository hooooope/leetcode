/*
 * @lc app=leetcode.cn id=2095 lang=typescript
 *
 * [2095] 删除链表的中间节点
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

function deleteMiddle(head: ListNode): ListNode | null {
  if (head.next === null) {
    return null;
  }
  let pre: ListNode = head;
  let slow = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    pre = slow!;
    slow = slow.next!;
  }
  pre.next = pre.next!.next;
  return head;
}
// @lc code=end
