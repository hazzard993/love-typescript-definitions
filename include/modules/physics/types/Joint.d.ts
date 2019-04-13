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
     * @return {number} x1, The x component of the anchor on Body 1.
     * @return {number} y1, The y component of the anchor on Body 1.
     * @return {number} x2, The x component of the anchor on Body 2.
     * @return {number} y2, The y component of the anchor on Body 2.
     */
    /** @tupleReturn */
    getAnchors(): [number, number, number, number];

    /**
     * Gets the bodies that the Joint is attached to.
     *
     * @return {Body} bodyA, The first Body.
     * @return {Body} bodyB, The second Body.
     */
    /** @tupleReturn */
    getBodies(): [Body, Body];

    /**
     * Gets whether the connected Bodies collide.
     *
     * @return {boolean} c, True if they collide, false otherwise.
     */
    getCollideConnected(): boolean;

    /**
     * Gets the reaction force on Body 2 at the joint anchor.
     *
     * @return {number} x, The x component of the force.
     * @return {number} y, The y component of the force.
     */
    /** @tupleReturn */
    getReactionForce(): [number, number];

    /**
     * Returns the reaction torque on the second body.
     *
     * @param invdt How long the force applies. Usually the inverse time step or 1/dt.
     * @return {number} torque, The reaction torque on the second body.
     */
    getReactionTorque(invdt: number): number;

    /**
     * Gets a string representing the type.
     *
     * @return {JointType} type, A string with the name of the Joint type.
     */
    getType(): JointType;

    /**
     * Returns the Lua value associated with this Joint.
     *
     * @return {any} value, The Lua value associated with the Joint.
     */
    getUserData(): any;

    /**
     * Gets whether the Joint is destroyed. Destroyed joints cannot be used.
     *
     * @return {boolean} destroyed, Whether the Joint is destroyed.
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
