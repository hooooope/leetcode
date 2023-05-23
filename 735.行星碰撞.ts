/*
 * @lc app=leetcode.cn id=735 lang=typescript
 *
 * [735] 行星碰撞
 */

// @lc code=start
function asteroidCollision(asteroids: number[]): number[] {
  const n = asteroids.length;
  const stack: number[] = [];
  for (const asteroid of asteroids) {
    let alive = true;
    while (
      alive &&
      stack.length &&
      stack[stack.length - 1] > 0 &&
      asteroid < 0
    ) {
      alive = stack[stack.length - 1] < Math.abs(asteroid);
      if (stack[stack.length - 1] <= Math.abs(asteroid)) {
        stack.pop();
      }
    }
    if (alive) {
      stack.push(asteroid);
    }
  }
  return stack;
}
// @lc code=end
