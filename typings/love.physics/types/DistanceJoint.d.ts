declare module "love.physics" {
  /**
   * Keeps two bodies at the same distance.
   * @link [DistanceJoint](https://love2d.org/wiki/DistanceJoint)
   */
  interface DistanceJoint extends Joint<"DistanceJoint"> {
    /**
     * Gets the damping ratio.
     *
     * @return ratio, The damping ratio.
     * @link [DistanceJoint:getDampingRatio](https://love2d.org/wiki/DistanceJoint:getDampingRatio)
     */
    getDampingRatio(): number;

    /**
     * Gets the response speed.
     *
     * @return Hz, The response speed.
     * @link [DistanceJoint:getFrequency](https://love2d.org/wiki/DistanceJoint:getFrequency)
     */
    getFrequency(): number;

    /**
     * Gets the equilibrium distance between the two Bodies.
     *
     * @return l, The length between the two Bodies.
     * @link [DistanceJoint:getLength](https://love2d.org/wiki/DistanceJoint:getLength)
     */
    getLength(): number;

    /**
     * Sets the damping ratio.
     *
     * @param ratio The damping ratio.
     * @link [DistanceJoint:setDampingRatio](https://love2d.org/wiki/DistanceJoint:setDampingRatio)
     */
    setDampingRatio(ratio: number): void;

    /**
     * Sets the response speed.
     *
     * @param Hz The response speed.
     * @link [DistanceJoint:setFrequency](https://love2d.org/wiki/DistanceJoint:setFrequency)
     */
    setFrequency(Hz: number): void;

    /**
     * Sets the equilibrium distance between the two Bodies.
     *
     * @param l The length between the two Bodies.
     * @link [DistanceJoint:setLength](https://love2d.org/wiki/DistanceJoint:setLength)
     */
    setLength(l: number): void;
  }
}
