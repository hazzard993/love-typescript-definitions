/**
 * A WeldJoint essentially glues two bodies together.
 * @link [WeldJoint](https://love2d.org/wiki/WeldJoint)
 */
declare interface WeldJoint extends Joint {
	/**
	 * Returns the damping ratio of the joint.
	 *
	 * @return {number} ratio, The damping ratio.
	 */
    getDampingRatio(): number;

	/**
	 * Returns the frequency.
	 *
	 * @return {number} freq, The frequency in hertz.
	 */
    getFrequency(): number;

	/**
	 * The new damping ratio.
	 *
	 * @param ratio The new damping ratio.
	 */
    setDampingRatio(ratio: number): void;

	/**
	 * Sets a new frequency.
	 *
	 * @param freq The new frequency in hertz.
	 */
    setFrequency(freq: number): void;

}
