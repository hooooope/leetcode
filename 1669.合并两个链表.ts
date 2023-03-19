/*
 * @lc app=leetcode.cn id=1669 lang=typescript
 *
 * [1669] 合并两个链表
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

/* function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let i = 0;
  // 寻找list1中第a-1个节点
  let cur = list1;
  while (i < a - 1) {
    cur = cur.next;
    i++;
  }
  // 保留list1中第a个节点
  let next = cur.next;
  // 将list1中第a-1个节点指向list2的头节点
  cur.next = list2;
  // 寻找list1中第b+1个节点
  while (i < b) {
    next = next.next;
    i++;
  }
  // 寻找list2的尾节点
  cur = list2;
  while (cur.next) {
    cur = cur.next;
  }
  // 将list2的尾节点指向list1中第b+1个节点
  cur.next = next;
  return list1;
} */

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let preA = list1;
  for (let i = 0; i < a - 1; i++) {
    preA = preA.next;
  }
  let preB = preA;
  for (let i = 0; i < b - a + 2; i++) {
    preB = preB.next;
  }
  preA.next = list2;
  while (list2.next) {
    list2 = list2.next;
  }
  list2.next = preB;
  return list1;
}
// @lc code=end
