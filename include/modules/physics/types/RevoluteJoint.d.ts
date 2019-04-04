/**
 * Allow two Bodies to revolve around a shared point.
 * @link [RevoluteJoint](https://love2d.org/wiki/RevoluteJoint)
 */
declare interface RevoluteJoint extends Joint {
    /**
     * Checks whether the limits are enabled.
     *
     * @return {boolean} enabled, True if enabled, false otherwise.
     */
    areLimitsEnabled(): boolean;

    /**
     * Enables or disables the joint limits.
     *
     * @param enable True to enable, false to disable.
     */
    setLimitsEnabled(enable: boolean): void;

    /**
     * Starts or stops the joint motor.
     *
     * @param enable True to enable, false to disable.
     */
    setMotorEnabled(enable: boolean): void;

    /**
     * Get the current joint angle.
     *
     * @return {number} angle, The joint angle in radians.
     */
    getJointAngle(): number;

    /**
     * Get the current joint angle speed.
     *
     * @return {number} s, Joint angle speed in radians/second.
     */
    getJointSpeed(): number;

    /**
     * Gets the joint limits.
     *
     * @return {number} lower, The lower limit, in radians.
     * @return {number} upper, The upper limit, in radians.
     */
    /** @tupleReturn */
    getLimits(): [number, number];

    /**
     * Gets the lower limit.
     *
     * @return {number} lower, The lower limit, in radians.
     */
    getLowerLimit(): number;

    /**
     * Gets the maximum motor force.
     *
     * @return {number} f, The maximum motor force, in Nm.
     */
    getMaxMotorTorque(): number;

    /**
     * Gets the motor speed.
     *
     * @return {number} s, The motor speed, radians per second.
     */
    getMotorSpeed(): number;

    /**
     * Get the current motor force.
     *
     * @return {number} f, The current motor force, in Nm.
     */
    getMotorTorque(): number;

    /**
     * Gets the upper limit.
     *
     * @return {number} upper, The upper limit, in radians.
     */
    getUpperLimit(): number;

    /**
     * Checks whether limits are enabled.
     * @return {boolean} enabled, True if enabled, false otherwise.
     * @link [RevoluteJoint:hasLimitsEnabled](https://love2d.org/wiki/RevoluteJoint:hasLimitsEnabled)
     * @deprecated since 11.0. This function has been renamed to RevoluteJoint:areLimitsEnabled.
     */
    hasLimitsEnabled(): boolean;

    /**
     * Checks whether the motor is enabled.
     *
     * @return {boolean} enabled, True if enabled, false if disabled.
     */
    isMotorEnabled(): boolean;

    /**
     * Sets the limits.
     *
     * @param lower The lower limit, in radians.
     * @param upper The upper limit, in radians.
     */
    setLimits(lower: number, upper: number): void;

    /**
     * Sets the lower limit.
     *
     * @param lower The lower limit, in radians.
     */
    setLowerLimit(lower: number): void;

    /**
     * Set the maximum motor force.
     *
     * @param f The maximum motor force, in Nm.
     */
    setMaxMotorTorque(f: number): void;

    /**
     * Sets the motor speed.
     *
     * @param s The motor speed, radians per second.
     */
    setMotorSpeed(s: number): void;

    /**
     * Sets the upper limit.
     *
     * @param upper The upper limit, in radians.
     */
    setUpperLimit(upper: number): void;

}
