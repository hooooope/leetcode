/*
 * @lc app=leetcode.cn id=2069 lang=typescript
 *
 * [2069] 模拟行走机器人 II
 */

// @lc code=start
class Robot {
  private moved = false;
  private idx = 0;
  private pos: [number, number][] = [];
  private dir: number[] = [];
  private static readonly to_dir = ["East", "North", "West", "South"];

  constructor(width: number, height: number) {
    for (let i = 0; i < width; i++) {
      this.pos.push([i, 0]);
      this.dir.push(0);
    }
    for (let i = 1; i < height; i++) {
      this.pos.push([width - 1, i]);
      this.dir.push(1);
    }
    for (let i = width - 2; i >= 0; i--) {
      this.pos.push([i, height - 1]);
      this.dir.push(2);
    }
    for (let i = height - 2; i > 0; i--) {
      this.pos.push([0, i]);
      this.dir.push(3);
    }
    this.dir[0] = 3;
  }

  step(num: number): void {
    this.moved = true;
    this.idx = (this.idx + num) % this.pos.length;
  }

  getPos(): number[] {
    return [this.pos[this.idx][0], this.pos[this.idx][1]];
  }

  getDir(): string {
    if (!this.moved) {
      return "East";
    }
    return Robot.to_dir[this.dir[this.idx]];
  }
}

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
// @lc code=end
