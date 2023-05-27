/*
 * @lc app=leetcode.cn id=841 lang=typescript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
// DFS
/* function canVisitAllRooms(rooms: number[][]): boolean {
  const process = (x: number) => {
    i++;
    seen[x] = true;
    for (const key of rooms[x]) {
      if (!seen[key]) {
        process(key);
      }
    }
  };
  const n = rooms.length;
  let i = 0;
  const seen: boolean[] = new Array(n).fill(false);
  process(0);
  return i === n;
} */

// BFS
function canVisitAllRooms(rooms: number[][]): boolean {
  const n = rooms.length;
  let i = 0;
  const seen: boolean[] = new Array(n).fill(false);
  const queue: number[] = [];
  seen[0] = true;
  queue.push(0);
  while (queue.length) {
    const x = queue.shift()!;
    i++;
    for (const key of rooms[x]) {
      if (!seen[key]) {
        seen[key] = true;
        queue.push(key);
      }
    }
  }
  return i === n;
}
// @lc code=end
