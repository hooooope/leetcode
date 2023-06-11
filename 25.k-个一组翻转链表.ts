/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const reverse = (head: ListNode, tail: ListNode) => {
    let curr = head;
    let prev = tail.next;
    while (prev !== tail) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next!;
    }
    return [tail, head];
  };
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  while (head) {
    let tail: ListNode | null = prev;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return dummy.next;
      }
    }
    const next = tail.next;
    [head, tail] = reverse(head, tail);
    prev.next = head;
    tail.next = next;
    prev = tail;
    head = tail.next;
  }
  return dummy.next;
}
// @lc code=end
