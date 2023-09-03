declare module "love.physics" {
  /**
   * Allow two Bodies to revolve around a shared point.
   * @link [RevoluteJoint](https://love2d.org/wiki/RevoluteJoint)
   */
  interface RevoluteJoint extends Joint<"RevoluteJoint"> {
    /**
     * Checks whether the limits are enabled.
     *
     * @return enabled, True if enabled, false otherwise.
     * @link [RevoluteJoint:areLimitsEnabled](https://love2d.org/wiki/RevoluteJoint:areLimitsEnabled)
     */
    areLimitsEnabled(): boolean;

    /**
     * Enables or disables the joint limits.
     *
     * @param enable True to enable, false to disable.
     * @link [RevoluteJoint:setLimitsEnabled](https://love2d.org/wiki/RevoluteJoint:setLimitsEnabled)
     */
    setLimitsEnabled(enable: boolean): void;

    /**
     * Starts or stops the joint motor.
     *
     * @param enable True to enable, false to disable.
     * @link [RevoluteJoint:setMotorEnabled](https://love2d.org/wiki/RevoluteJoint:setMotorEnabled)
     */
    setMotorEnabled(enable: boolean): void;

    /**
     * Get the current joint angle.
     *
     * @return angle, The joint angle in radians.
     * @link [RevoluteJoint:getJointAngle](https://love2d.org/wiki/RevoluteJoint:getJointAngle)
     */
    getJointAngle(): number;

    /**
     * Get the current joint angle speed.
     *
     * @return s, Joint angle speed in radians/second.
     * @link [RevoluteJoint:getJointSpeed](https://love2d.org/wiki/RevoluteJoint:getJointSpeed)
     */
    getJointSpeed(): number;

    /**
     * Gets the joint limits.
     *
     * @return lower, The lower limit, in radians.
     * @return upper, The upper limit, in radians.
     * @link [RevoluteJoint:getLimits](https://love2d.org/wiki/RevoluteJoint:getLimits)
     */
    getLimits(): LuaMultiReturn<[lower: number, upper: number]>;

    /**
     * Gets the lower limit.
     *
     * @return lower, The lower limit, in radians.
     * @link [RevoluteJoint:getLowerLimit](https://love2d.org/wiki/RevoluteJoint:getLowerLimit)
     */
    getLowerLimit(): number;

    /**
     * Gets the maximum motor force.
     *
     * @return f, The maximum motor force, in Nm.
     * @link [RevoluteJoint:getMaxMotorTorque](https://love2d.org/wiki/RevoluteJoint:getMaxMotorTorque)
     */
    getMaxMotorTorque(): number;

    /**
     * Gets the motor speed.
     *
     * @return s, The motor speed, radians per second.
     * @link [RevoluteJoint:getMotorSpeed](https://love2d.org/wiki/RevoluteJoint:getMotorSpeed)
     */
    getMotorSpeed(): number;

    /**
     * Get the current motor force.
     *
     * @return f, The current motor force, in Nm.
     * @link [RevoluteJoint:getMotorTorque](https://love2d.org/wiki/RevoluteJoint:getMotorTorque)
     */
    getMotorTorque(): number;

    /**
     * Gets the upper limit.
     *
     * @return upper, The upper limit, in radians.
     * @link [RevoluteJoint:getUpperLimit](https://love2d.org/wiki/RevoluteJoint:getUpperLimit)
     */
    getUpperLimit(): number;

    /**
     * Checks whether limits are enabled.
     * @return enabled, True if enabled, false otherwise.
     * @link [RevoluteJoint:hasLimitsEnabled](https://love2d.org/wiki/RevoluteJoint:hasLimitsEnabled)
     * @deprecated since 11.0. This function has been renamed to RevoluteJoint:areLimitsEnabled.
     */
    hasLimitsEnabled(): boolean;

    /**
     * Checks whether the motor is enabled.
     *
     * @return enabled, True if enabled, false if disabled.
     * @link [RevoluteJoint:isMotorEnabled](https://love2d.org/wiki/RevoluteJoint:isMotorEnabled)
     */
    isMotorEnabled(): boolean;

    /**
     * Sets the limits.
     *
     * @param lower The lower limit, in radians.
     * @param upper The upper limit, in radians.
     * @link [RevoluteJoint:setLimits](https://love2d.org/wiki/RevoluteJoint:setLimits)
     */
    setLimits(lower: number, upper: number): void;

    /**
     * Sets the lower limit.
     *
     * @param lower The lower limit, in radians.
     * @link [RevoluteJoint:setLowerLimit](https://love2d.org/wiki/RevoluteJoint:setLowerLimit)
     */
    setLowerLimit(lower: number): void;

    /**
     * Set the maximum motor force.
     *
     * @param f The maximum motor force, in Nm.
     * @link [RevoluteJoint:setMaxMotorTorque](https://love2d.org/wiki/RevoluteJoint:setMaxMotorTorque)
     */
    setMaxMotorTorque(f: number): void;

    /**
     * Sets the motor speed.
     *
     * @param s The motor speed, radians per second.
     * @link [RevoluteJoint:setMotorSpeed](https://love2d.org/wiki/RevoluteJoint:setMotorSpeed)
     */
    setMotorSpeed(s: number): void;

    /**
     * Sets the upper limit.
     *
     * @param upper The upper limit, in radians.
     * @link [RevoluteJoint:setUpperLimit](https://love2d.org/wiki/RevoluteJoint:setUpperLimit)
     */
    setUpperLimit(upper: number): void;
  }
}
