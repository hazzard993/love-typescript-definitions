/**
 * Keeps two bodies at the same distance.
 * @link [DistanceJoint](https://love2d.org/wiki/DistanceJoint)
 */
declare interface DistanceJoint extends Joint {
	/**
	 * Gets the damping ratio.
	 *
	 * @return {number} ratio, The damping ratio.
	 */
    getDampingRatio(): number;

	/**
	 * Gets the response speed.
	 *
	 * @return {number} Hz, The response speed.
	 */
    getFrequency(): number;

	/**
	 * Gets the equilibrium distance between the two Bodies.
	 *
	 * @return {number} l, The length between the two Bodies.
	 */
    getLength(): number;

	/**
	 * Sets the damping ratio.
	 *
	 * @param ratio The damping ratio.
	 */
    setDampingRatio(ratio: number): void;

	/**
	 * Sets the response speed.
	 *
	 * @param Hz The response speed.
	 */
    setFrequency(Hz: number): void;

	/**
	 * Sets the equilibrium distance between the two Bodies.
	 *
	 * @param l The length between the two Bodies.
	 */
    setLength(l: number): void;

}
