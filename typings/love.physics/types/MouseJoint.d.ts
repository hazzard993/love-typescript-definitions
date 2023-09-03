declare module "love.physics" {
  /**
   * For controlling objects with the mouse.
   * @link [MouseJoint](https://love2d.org/wiki/MouseJoint)
   */
  interface MouseJoint extends Joint<"MouseJoint"> {
    /**
     * Returns the damping ratio.
     *
     * @return ratio, The new damping ratio.
     * @link [MouseJoint:getDampingRatio](https://love2d.org/wiki/MouseJoint:getDampingRatio)
     */
    getDampingRatio(): number;

    /**
     * Returns the frequency.
     *
     * @return freq, The frequency in hertz.
     * @link [MouseJoint:getFrequency](https://love2d.org/wiki/MouseJoint:getFrequency)
     */
    getFrequency(): number;

    /**
     * Gets the highest allowed force.
     *
     * @return f, The max allowed force.
     * @link [MouseJoint:getMaxForce](https://love2d.org/wiki/MouseJoint:getMaxForce)
     */
    getMaxForce(): number;

    /**
     * Gets the target point.
     *
     * @return x, The x component of the target.
     * @return y, The x component of the target.
     * @link [MouseJoint:getTarget](https://love2d.org/wiki/MouseJoint:getTarget)
     */
    getTarget(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Sets a new damping ratio.
     *
     * @param ratio The new damping ratio.
     * @link [MouseJoint:setDampingRatio](https://love2d.org/wiki/MouseJoint:setDampingRatio)
     */
    setDampingRatio(ratio: number): void;

    /**
     * Sets a new frequency.
     *
     * @param freq The new frequency in hertz.
     * @link [MouseJoint:setFrequency](https://love2d.org/wiki/MouseJoint:setFrequency)
     */
    setFrequency(freq: number): void;

    /**
     * Sets the highest allowed force.
     *
     * @param f The max allowed force.
     * @link [MouseJoint:setMaxForce](https://love2d.org/wiki/MouseJoint:setMaxForce)
     */
    setMaxForce(f: number): void;

    /**
     * Sets the target point.
     *
     * @param x The x component of the target.
     * @param y The y component of the target.
     * @link [MouseJoint:setTarget](https://love2d.org/wiki/MouseJoint:setTarget)
     */
    setTarget(x: number, y: number): void;
  }
}
