declare module "love.physics" {
  /**
   * A WeldJoint essentially glues two bodies together.
   * @link [WeldJoint](https://love2d.org/wiki/WeldJoint)
   */
  interface WeldJoint extends Joint<"WeldJoint"> {
    /**
     * Returns the damping ratio of the joint.
     *
     * @return ratio, The damping ratio.
     * @link [WeldJoint:getDampingRatio](https://love2d.org/wiki/WeldJoint:getDampingRatio)
     */
    getDampingRatio(): number;

    /**
     * Returns the frequency.
     *
     * @return freq, The frequency in hertz.
     * @link [WeldJoint:getFrequency](https://love2d.org/wiki/WeldJoint:getFrequency)
     */
    getFrequency(): number;

    /**
     * The new damping ratio.
     *
     * @param ratio The new damping ratio.
     * @link [WeldJoint:setDampingRatio](https://love2d.org/wiki/WeldJoint:setDampingRatio)
     */
    setDampingRatio(ratio: number): void;

    /**
     * Sets a new frequency.
     *
     * @param freq The new frequency in hertz.
     * @link [WeldJoint:setFrequency](https://love2d.org/wiki/WeldJoint:setFrequency)
     */
    setFrequency(freq: number): void;
  }
}
