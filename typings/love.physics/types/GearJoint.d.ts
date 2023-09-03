declare module "love.physics" {
  /**
   * Keeps bodies together in such a way that they act like gears.
   * @link [GearJoint](https://love2d.org/wiki/GearJoint)
   */
  interface GearJoint extends Joint<"GearJoint"> {
    /**
     * Get the Joints connected by this GearJoint.
     *
     * @return joints, The connected joints.
     * @link [GearJoint:getJoints](https://love2d.org/wiki/GearJoint:getJoints)
     */
    getJoints(): LuaMultiReturn<Joint[]>;

    /**
     * Get the ratio of a gear joint.
     *
     * @return ratio, The ratio of the joint.
     * @link [GearJoint:getRatio](https://love2d.org/wiki/GearJoint:getRatio)
     */
    getRatio(): number;

    /**
     * Set the ratio of a gear joint.
     *
     * @param ratio The new ratio of the joint.
     * @link [GearJoint:setRatio](https://love2d.org/wiki/GearJoint:setRatio)
     */
    setRatio(ratio: number): void;
  }
}
