/**
 * Keeps bodies together in such a way that they act like gears.
 * @link [GearJoint](https://love2d.org/wiki/GearJoint)
 */
declare interface GearJoint extends Joint {
	/**
	 * Get the Joints connected by this GearJoint.
	 *
	 * @return {Joint} joint1, The first connected Joint.
	 * @return {Joint} joint2, The second connected Joint.
	 */
    /** @tupleReturn */
    getJoints(): [Joint, Joint];

	/**
	 * Get the ratio of a gear joint.
	 *
	 * @return {number} ratio, The ratio of the joint.
	 */
    getRatio(): number;

	/**
	 * Set the ratio of a gear joint.
	 *
	 * @param ratio The new ratio of the joint.
	 */
    setRatio(ratio: number): void;

}
