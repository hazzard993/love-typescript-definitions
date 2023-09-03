declare module "love.physics" {
  /**
   * Controls the relative motion between two Bodies.
   * @link [MotorJoint](https://love2d.org/wiki/MotorJoint)
   */
  interface MotorJoint extends Joint<"MotorJoint"> {
    /**
     * Gets the target angular offset between the two Bodies the Joint is attached to.
     *
     * @return angularoffset, The target angular offset in radians: the second body's angle minus the first body's angle.
     * @link [MotorJoint:getAngularOffset](https://love2d.org/wiki/MotorJoint:getAngularOffset)
     */
    getAngularOffset(): number;

    /**
     * Gets the target linear offset between the two Bodies the Joint is attached to.
     *
     * @return x, The x component of the target linear offset, relative to the first Body.
     * @return y, The y component of the target linear offset, relative to the first Body.
     * @link [MotorJoint:getLinearOffset](https://love2d.org/wiki/MotorJoint:getLinearOffset)
     */
    getLinearOffset(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Sets the target angular offset between the two Bodies the Joint is attached to.
     *
     * @param angularoffset The target angular offset in radians: the second body's angle minus the first body's angle.
     * @link [MotorJoint:setAngularOffset](https://love2d.org/wiki/MotorJoint:setAngularOffset)
     */
    setAngularOffset(angularoffset: number): void;

    /**
     * Sets the target linear offset between the two Bodies the Joint is attached to.
     *
     * @param x The x component of the target linear offset, relative to the first Body.
     * @param y The y component of the target linear offset, relative to the first Body.
     * @link [MotorJoint:setLinearOffset](https://love2d.org/wiki/MotorJoint:setLinearOffset)
     */
    setLinearOffset(x: number, y: number): void;
  }
}
