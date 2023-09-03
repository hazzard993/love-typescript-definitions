declare module "love.physics" {
  /**
   * A FrictionJoint applies friction to a body.
   * @link [FrictionJoint](https://love2d.org/wiki/FrictionJoint)
   */
  interface FrictionJoint extends Joint<"FrictionJoint"> {
    /**
     * Gets the maximum friction force in Newtons.
     *
     * @return force, Maximum force in Newtons.
     * @link [FrictionJoint:getMaxForce](https://love2d.org/wiki/FrictionJoint:getMaxForce)
     */
    getMaxForce(): number;

    /**
     * Gets the maximum friction torque in Newton-meters.
     *
     * @return torque, Maximum torque in Newton-meters.
     * @link [FrictionJoint:getMaxForce](https://love2d.org/wiki/FrictionJoint:getMaxForce)
     */
    getMaxTorque(): number;

    /**
     * Sets the maximum friction force in Newtons.
     *
     * @param maxForce Max force in Newtons.
     * @link [FrictionJoint:setMaxForce](https://love2d.org/wiki/FrictionJoint:setMaxForce)
     */
    setMaxForce(maxForce: number): void;

    /**
     * Sets the maximum friction torque in Newton-meters.
     *
     * @param torque Maximum torque in Newton-meters.
     * @link [FrictionJoint:setMaxTorque](https://love2d.org/wiki/FrictionJoint:setMaxTorque)
     */
    setMaxTorque(torque: number): void;
  }
}
