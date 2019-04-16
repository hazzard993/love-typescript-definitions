/**
 * Restricts relative motion between Bodies to one shared axis.
 * @link [PrismaticJoint](https://love2d.org/wiki/PrismaticJoint)
 */
declare interface PrismaticJoint extends Joint {
    /**
     * Checks whether the limits are enabled.
     *
     * @return enabled, True if enabled, false otherwise.
     */
    areLimitsEnabled(): boolean;

    /**
     * Gets the world-space axis vector of the Prismatic Joint.
     *
     * @return x, The x-axis coordinate of the world-space axis vector.
     * @return y, The y-axis coordinate of the world-space axis vector.
     */
    /** @tupleReturn */
    getAxis(): [number, number];

    /**
     * Get the current joint angle speed.
     *
     * @return s, Joint angle speed in meters/second.
     */
    getJointSpeed(): number;

    /**
     * Get the current joint translation.
     *
     * @return t, Joint translation, usually in meters.
     */
    getJointTranslation(): number;

    /**
     * Gets the joint limits.
     *
     * @return lower, The lower limit, usually in meters.
     * @return upper, The upper limit, usually in meters.
     */
    /** @tupleReturn */
    getLimits(): [number, number];

    /**
     * Gets the lower limit.
     *
     * @return lower, The lower limit, usually in meters.
     */
    getLowerLimit(): number;

    /**
     * Gets the maximum motor force.
     *
     * @return f, The maximum motor force, usually in N.
     */
    getMaxMotorForce(): number;

    /**
     * Get the current motor force.
     *
     * @return f, The current motor force, usually in N.
     */
    getMotorForce(): number;

    /**
     * Gets the motor speed.
     *
     * @return s, The motor speed, usually in meters per second.
     */
    getMotorSpeed(): number;

    /**
     * Gets the upper limit.
     *
     * @return upper, The upper limit, usually in meters.
     */
    getUpperLimit(): number;

    /**
     * Checks whether limits are enabled.
     * @return enabled, True if enabled, false otherwise.
     * @link [PrismaticJoint:hasLimitsEnabled](https://love2d.org/wiki/PrismaticJoint:hasLimitsEnabled)
     * @deprecated since 11.0. This function has been renamed to PrismaticJoint:areLimitsEnabled.
     */
    hasLimitsEnabled(): boolean;

    /**
     * Checks whether the motor is enabled.
     *
     * @return enabled, True if enabled, false if disabled.
     */
    isMotorEnabled(): boolean;

    /**
     * Sets the limits.
     *
     * @param lower The lower limit, usually in meters.
     * @param upper The upper limit, usually in meters.
     */
    setLimits(lower: number, upper: number): void;

    /**
     * Enables or disables the limits of the joint.
     *
     * @param enable True to enable, false to disable.
     */
    setLimitsEnabled(enable: boolean): void;

    /**
     * Sets the lower limit.
     *
     * @param lower The lower limit, usually in meters.
     */
    setLowerLimit(lower: number): void;

    /**
     * Set the maximum motor force.
     *
     * @param f The maximum motor force, usually in N.
     */
    setMaxMotorForce(f: number): void;

    /**
     * Starts or stops the joint motor.
     *
     * @param enable True to enable, false to disable.
     */
    setMotorEnabled(enable: boolean): void;

    /**
     * Sets the motor speed.
     *
     * @param s The motor speed, usually in meters per second.
     */
    setMotorSpeed(s: number): void;

    /**
     * Sets the upper limit.
     *
     * @param upper The upper limit, usually in meters.
     */
    setUpperLimit(upper: number): void;

}
