/**
 * For controlling objects with the mouse.
 * @link [MouseJoint](https://love2d.org/wiki/MouseJoint)
 */
declare interface MouseJoint extends Joint {
	/**
	 * Returns the damping ratio.
	 *
	 * @return {number} ratio, The new damping ratio.
	 */
    getDampingRatio(): number;

	/**
	 * Returns the frequency.
	 *
	 * @return {number} freq, The frequency in hertz.
	 */
    getFrequency(): number;

	/**
	 * Gets the highest allowed force.
	 *
	 * @return {number} f, The max allowed force.
	 */
    getMaxForce(): number;

	/**
	 * Gets the target point.
	 *
	 * @return {number} x, The x component of the target.
	 * @return {number} y, The x component of the target.
	 */
    /** @tupleReturn */
    getTarget(): [number, number];

	/**
	 * Sets a new damping ratio.
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

	/**
	 * Sets the highest allowed force.
	 *
	 * @param f The max allowed force.
	 */
    setMaxForce(f: number): void;

	/**
	 * Sets the target point.
	 *
	 * @param x The x component of the target.
	 * @param y The y component of the target.
	 */
    setTarget(x: number, y: number): void;

}
