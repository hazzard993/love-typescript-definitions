/**
 * Attach multiple bodies together to interact in unique ways.
 * @link [Joint](https://love2d.org/wiki/Joint)
 */
declare interface Joint extends Object {
    /**
     * Explicitly destroys the Joint. When you don't have time to wait for garbage
     * collection, this function may be used to free the object immediately, but note
     * that an error will occur if you attempt to use the object after calling this
     * function.
     *
     */
    destroy(): void;

    /**
     * Get the anchor points of the joint.
     *
     * @return x1, The x component of the anchor on Body 1.
     * @return y1, The y component of the anchor on Body 1.
     * @return x2, The x component of the anchor on Body 2.
     * @return y2, The y component of the anchor on Body 2.
     * @tupleReturn
     */
    getAnchors(): [number, number, number, number];

    /**
     * Gets the bodies that the Joint is attached to.
     *
     * @return bodyA, The first Body.
     * @return bodyB, The second Body.
     * @tupleReturn
     */
    getBodies(): [Body, Body];

    /**
     * Gets whether the connected Bodies collide.
     *
     * @return c, True if they collide, false otherwise.
     */
    getCollideConnected(): boolean;

    /**
     * Gets the reaction force on Body 2 at the joint anchor.
     *
     * @return x, The x component of the force.
     * @return y, The y component of the force.
     * @tupleReturn
     */
    getReactionForce(): [number, number];

    /**
     * Returns the reaction torque on the second body.
     *
     * @param invdt How long the force applies. Usually the inverse time step or 1/dt.
     * @return torque, The reaction torque on the second body.
     */
    getReactionTorque(invdt: number): number;

    /**
     * Gets a string representing the type.
     *
     * @return type, A string with the name of the Joint type.
     */
    getType(): JointType;

    /**
     * Returns the Lua value associated with this Joint.
     *
     * @return value, The Lua value associated with the Joint.
     */
    getUserData(): any;

    /**
     * Gets whether the Joint is destroyed. Destroyed joints cannot be used.
     *
     * @return destroyed, Whether the Joint is destroyed.
     */
    isDestroyed(): boolean;

    /**
     * Associates a Lua value with the Joint.
     *
     *
     * To delete the reference, explicitly pass _nil/null_.
     *
     * @param value The Lua value to associate with the Joint.
     */
    setUserData(value: any): void;

}
