declare module "love.physics" {
  /**
   * Allows you to simulate bodies connected through pulleys.
   * @link [PulleyJoint](https://love2d.org/wiki/PulleyJoint)
   */
  interface PulleyJoint extends Joint<"PulleyJoint"> {
    /**
     * Get the total length of the rope.
     *
     * @return length, The length of the rope in the joint.
     * @link [PulleyJoint:getConstant](https://love2d.org/wiki/PulleyJoint:getConstant)
     */
    getConstant(): number;

    /**
     * Get the ground anchor positions in world coordinates.
     *
     * @return a1x, The x coordinate of the first anchor.
     * @return a1y, The y coordinate of the first anchor.
     * @return a2x, The x coordinate of the second anchor.
     * @return a2y, The y coordinate of the second anchor.
     * @link [PulleyJoint:getGroundAnchors](https://love2d.org/wiki/PulleyJoint:getGroundAnchors)
     */
    getGroundAnchors(): LuaMultiReturn<
      [a1x: number, a1y: number, a2x: number, a2y: number]
    >;

    /**
     * Get the current length of the rope segment attached to the first body.
     *
     * @return length, The length of the rope segment.
     * @link [PulleyJoint:getLengthA](https://love2d.org/wiki/PulleyJoint:getLengthA)
     */
    getLengthA(): number;

    /**
     * Get the current length of the rope segment attached to the second body.
     *
     * @return length, The length of the rope segment.
     * @link [PulleyJoint:getLengthB](https://love2d.org/wiki/PulleyJoint:getLengthB)
     */
    getLengthB(): number;

    /**
     * Get the maximum lengths of the rope segments.
     *
     * @return len1, The maximum length of the first rope segment.
     * @return len2, The maximum length of the second rope segment.
     * @link [PulleyJoint:getMaxLengths](https://love2d.org/wiki/PulleyJoint:getMaxLengths)
     */
    getMaxLengths(): LuaMultiReturn<[len1: number, len2: number]>;

    /**
     * Get the pulley ratio.
     *
     * @return ratio, The pulley ratio of the joint.
     * @link [PulleyJoint:getRatio](https://love2d.org/wiki/PulleyJoint:getRatio)
     */
    getRatio(): number;

    /**
     * Set the total length of the rope.
     *
     * Setting a new length for the rope updates the maximum length values of the
     * joint.
     *
     * @param length The new length of the rope in the joint.
     * @link [PulleyJoint:setConstant](https://love2d.org/wiki/PulleyJoint:setConstant)
     */
    setConstant(length: number): void;

    /**
     * Set the maximum lengths of the rope segments.
     *
     * The physics module also imposes maximum values for the rope segments. If the
     * parameters exceed these values, the maximum values are set instead of the
     * requested values.
     *
     * @param max1 The new maximum length of the first segment.
     * @param max2 The new maximum length of the second segment.
     * @link [PulleyJoint:setMaxLengths](https://love2d.org/wiki/PulleyJoint:setMaxLengths)
     */
    setMaxLengths(max1: number, max2: number): void;

    /**
     * Set the pulley ratio.
     *
     * @param ratio The new pulley ratio of the joint.
     * @link [PulleyJoint:setRatio](https://love2d.org/wiki/PulleyJoint:setRatio)
     */
    setRatio(ratio: number): void;
  }
}
