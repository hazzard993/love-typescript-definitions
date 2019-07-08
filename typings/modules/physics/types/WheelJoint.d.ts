/**
 * Restricts a point on the second body to a line on the first body.
 * @link [WheelJoint](https://love2d.org/wiki/WheelJoint)
 */
declare interface WheelJoint extends Joint {
    /**
     * Gets the world-space axis vector of the Wheel Joint.
     *
     * @return x, The x-axis coordinate of the world-space axis vector.
     * @return y, The y-axis coordinate of the world-space axis vector.
     * @tupleReturn
     */
    getAxis(): [number, number];

    /**
     * Returns the current joint translation speed.
     *
     * @return speed, The translation speed of the joint in meters per second.
     */
    getJointSpeed(): number;

    /**
     * Returns the current joint translation.
     *
     * @return position, The translation of the joint in meters.
     */
    getJointTranslation(): number;

    /**
     * Returns the maximum motor torque.
     *
     * @return maxTorque, The maximum torque of the joint motor in newton meters.
     */
    getMaxMotorTorque(): number;

    /**
     * Returns the speed of the motor.
     *
     * @return speed, The speed of the joint motor in radians per second.
     */
    getMotorSpeed(): number;

    /**
     * Returns the current torque on the motor.
     *
     * @param invdt How long the force applies. Usually the inverse time step or 1/dt.
     * @return torque, The torque on the motor in newton meters.
     */
    getMotorTorque(invdt: number): number;

    /**
     * Returns the damping ratio.
     *
     * @return ratio, The damping ratio.
     */
    getSpringDampingRatio(): number;

    /**
     * Returns the spring frequency.
     *
     * @return freq, The frequency in hertz.
     */
    getSpringFrequency(): number;

    /**
     * Checks if the joint motor is running.
     * @return on, The status of the joint motor.
     * @link [WheelJoint:isMotorEnabled](https://love2d.org/wiki/WheelJoint:isMotorEnabled)
     */
    isMotorEnabled(): boolean;

    /**
     * Sets a new maximum motor torque.
     *
     * @param maxTorque The new maximum torque for the joint motor in newton meters.
     */
    setMaxMotorTorque(maxTorque: number): void;

    /**
     * Starts and stops the joint motor.
     *
     * @param enable True turns the motor on and false turns it off.
     */
    setMotorEnabled(enable: boolean): void;

    /**
     * Sets a new speed for the motor.
     *
     * @param speed The new speed for the joint motor in radians per second.
     */
    setMotorSpeed(speed: number): void;

    /**
     * Sets a new damping ratio.
     *
     * @param ratio The new damping ratio.
     */
    setSpringDampingRatio(ratio: number): void;

    /**
     * Sets a new spring frequency.
     *
     * @param freq The new frequency in hertz.
     */
    setSpringFrequency(freq: number): void;

}
