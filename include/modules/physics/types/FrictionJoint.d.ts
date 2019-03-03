/**
 * A FrictionJoint applies friction to a body.
 * @link [FrictionJoint](https://love2d.org/wiki/FrictionJoint)
 */
declare interface FrictionJoint extends Joint {
	/**
	 * Gets the maximum friction force in Newtons.
	 *
	 * @return {number} force, Maximum force in Newtons.
	 */
    getMaxForce(): number;

	/**
	 * Gets the maximum friction torque in Newton-meters.
	 *
	 * @return {number} torque, Maximum torque in Newton-meters.
	 */
    getMaxTorque(): number;

	/**
	 * Sets the maximum friction force in Newtons.
	 *
	 * @param maxForce Max force in Newtons.
	 */
    setMaxForce(maxForce: number): void;

	/**
	 * Sets the maximum friction torque in Newton-meters.
	 *
	 * @param torque Maximum torque in Newton-meters.
	 */
    setMaxTorque(torque: number): void;

}
