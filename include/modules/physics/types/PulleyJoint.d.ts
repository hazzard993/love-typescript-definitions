/**
 * Allows you to simulate bodies connected through pulleys.
 * @link [PulleyJoint](https://love2d.org/wiki/PulleyJoint)
 */
declare interface PulleyJoint extends Joint {
    /**
     * Get the total length of the rope.
     *
     * @return length, The length of the rope in the joint.
     */
    getConstant(): number;

    /**
     * Get the ground anchor positions in world coordinates.
     *
     * @return a1x, The x coordinate of the first anchor.
     * @return a1y, The y coordinate of the first anchor.
     * @return a2x, The x coordinate of the second anchor.
     * @return a2y, The y coordinate of the second anchor.
     */
    /** @tupleReturn */
    getGroundAnchors(): [number, number, number, number];

    /**
     * Get the current length of the rope segment attached to the first body.
     *
     * @return length, The length of the rope segment.
     */
    getLengthA(): number;

    /**
     * Get the current length of the rope segment attached to the second body.
     *
     * @return length, The length of the rope segment.
     */
    getLengthB(): number;

    /**
     * Get the maximum lengths of the rope segments.
     *
     * @return len1, The maximum length of the first rope segment.
     * @return len2, The maximum length of the second rope segment.
     */
    /** @tupleReturn */
    getMaxLengths(): [number, number];

    /**
     * Get the pulley ratio.
     *
     * @return ratio, The pulley ratio of the joint.
     */
    getRatio(): number;

    /**
     * Set the total length of the rope.
     *
     *
     * Setting a new length for the rope updates the maximum length values of the
     * joint.
     *
     * @param length The new length of the rope in the joint.
     */
    setConstant(length: number): void;

    /**
     * Set the maximum lengths of the rope segments.
     *
     *
     * The physics module also imposes maximum values for the rope segments. If the
     * parameters exceed these values, the maximum values are set instead of the
     * requested values.
     *
     * @param max1 The new maximum length of the first segment.
     * @param max2 The new maximum length of the second segment.
     */
    setMaxLengths(max1: number, max2: number): void;

    /**
     * Set the pulley ratio.
     *
     * @param ratio The new pulley ratio of the joint.
     */
    setRatio(ratio: number): void;

}
