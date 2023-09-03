declare module "love.physics" {
  /**
   * Restricts relative motion between Bodies to one shared axis.
   * @link [PrismaticJoint](https://love2d.org/wiki/PrismaticJoint)
   */
  interface PrismaticJoint extends Joint<"PrismaticJoint"> {
    /**
     * Checks whether the limits are enabled.
     *
     * @return enabled, True if enabled, false otherwise.
     * @link [PrismaticJoint:areLimitsEnabled](https://love2d.org/wiki/PrismaticJoint:areLimitsEnabled)
     */
    areLimitsEnabled(): boolean;

    /**
     * Gets the world-space axis vector of the Prismatic Joint.
     *
     * @return x, The x-axis coordinate of the world-space axis vector.
     * @return y, The y-axis coordinate of the world-space axis vector.
     * @link [PrismaticJoint:getAxis](https://love2d.org/wiki/PrismaticJoint:getAxis)
     */
    getAxis(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Get the current joint angle speed.
     *
     * @return s, Joint angle speed in meters/second.
     * @link [PrismaticJoint:getJointSpeed](https://love2d.org/wiki/PrismaticJoint:getJointSpeed)
     */
    getJointSpeed(): number;

    /**
     * Get the current joint translation.
     *
     * @return t, Joint translation, usually in meters.
     * @link [PrismaticJoint:getJointTranslation](https://love2d.org/wiki/PrismaticJoint:getJointTranslation)
     */
    getJointTranslation(): number;

    /**
     * Gets the joint limits.
     *
     * @return lower, The lower limit, usually in meters.
     * @return upper, The upper limit, usually in meters.
     * @link [PrismaticJoint:getLimits](https://love2d.org/wiki/PrismaticJoint:getLimits)
     */
    getLimits(): LuaMultiReturn<[lower: number, upper: number]>;

    /**
     * Gets the lower limit.
     *
     * @return lower, The lower limit, usually in meters.
     * @link [PrismaticJoint:getLowerLimit](https://love2d.org/wiki/PrismaticJoint:getLowerLimit)
     */
    getLowerLimit(): number;

    /**
     * Gets the maximum motor force.
     *
     * @return f, The maximum motor force, usually in N.
     * @link [PrismaticJoint:getMaxMotorForce](https://love2d.org/wiki/PrismaticJoint:getMaxMotorForce)
     */
    getMaxMotorForce(): number;

    /**
     * Get the current motor force.
     *
     * @return f, The current motor force, usually in N.
     * @link [PrismaticJoint:getMotorForce](https://love2d.org/wiki/PrismaticJoint:getMotorForce)
     */
    getMotorForce(): number;

    /**
     * Gets the motor speed.
     *
     * @return s, The motor speed, usually in meters per second.
     * @link [PrismaticJoint:getMotorSpeed](https://love2d.org/wiki/PrismaticJoint:getMotorSpeed)
     */
    getMotorSpeed(): number;

    /**
     * Gets the upper limit.
     *
     * @return upper, The upper limit, usually in meters.
     * @link [PrismaticJoint:getUpperLimit](https://love2d.org/wiki/PrismaticJoint:getUpperLimit)
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
     * @link [PrismaticJoint:isMotorEnabled](https://love2d.org/wiki/PrismaticJoint:isMotorEnabled)
     */
    isMotorEnabled(): boolean;

    /**
     * Sets the limits.
     *
     * @param lower The lower limit, usually in meters.
     * @param upper The upper limit, usually in meters.
     * @link [PrismaticJoint:setLimits](https://love2d.org/wiki/PrismaticJoint:setLimits)
     */
    setLimits(lower: number, upper: number): void;

    /**
     * Enables or disables the limits of the joint.
     *
     * @param enable True to enable, false to disable.
     * @link [PrismaticJoint:setLimitsEnabled](https://love2d.org/wiki/PrismaticJoint:setLimitsEnabled)
     */
    setLimitsEnabled(enable: boolean): void;

    /**
     * Sets the lower limit.
     *
     * @param lower The lower limit, usually in meters.
     * @link [PrismaticJoint:setLowerLimit](https://love2d.org/wiki/PrismaticJoint:setLowerLimit)
     */
    setLowerLimit(lower: number): void;

    /**
     * Set the maximum motor force.
     *
     * @param f The maximum motor force, usually in N.
     * @link [PrismaticJoint:setMaxMotorForce](https://love2d.org/wiki/PrismaticJoint:setMaxMotorForce)
     */
    setMaxMotorForce(f: number): void;

    /**
     * Starts or stops the joint motor.
     *
     * @param enable True to enable, false to disable.
     * @link [PrismaticJoint:setMotorEnabled](https://love2d.org/wiki/PrismaticJoint:setMotorEnabled)
     */
    setMotorEnabled(enable: boolean): void;

    /**
     * Sets the motor speed.
     *
     * @param s The motor speed, usually in meters per second.
     * @link [PrismaticJoint:setMotorSpeed](https://love2d.org/wiki/PrismaticJoint:setMotorSpeed)
     */
    setMotorSpeed(s: number): void;

    /**
     * Sets the upper limit.
     *
     * @param upper The upper limit, usually in meters.
     * @link [PrismaticJoint:setUpperLimit](https://love2d.org/wiki/PrismaticJoint:setUpperLimit)
     */
    setUpperLimit(upper: number): void;
  }
}
