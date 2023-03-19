/*
 * @lc app=leetcode.cn id=1290 lang=typescript
 *
 * [1290] 二进制链表转整数
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

/* function getDecimalValue(head: ListNode | null): number {
  let ret = "";
  while (head) {
    ret += head.val;
    head = head.next;
  }
  return parseInt(ret, 2);
} */

function getDecimalValue(head: ListNode | null): number {
  let ret = 0;
  while (head) {
    ret = (ret << 1) + head.val;
    head = head.next;
  }
  return ret;
}
// @lc code=end
