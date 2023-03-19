/*
 * @lc app=leetcode.cn id=1603 lang=typescript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
class ParkingSystem {
  private counter: number[];
  constructor(big: number, medium: number, small: number) {
    this.counter = [0, big, medium, small];
  }

  addCar(carType: number): boolean {
    return this.counter[carType]-- > 0;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
