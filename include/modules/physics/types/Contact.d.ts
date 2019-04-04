/**
 * Contacts are objects created to manage collisions in worlds.
 *
 * @link [Contact](https://love2d.org/wiki/Contact)
 */
declare interface Contact extends Object {
    /**
     * Gets the child indices of the shapes of the two colliding fixtures.
     * For ChainShapes, an index of 1 is the first edge in the chain.
     *
     * Used together with Fixture:rayCast or ChainShape:getChildEdge.
     *
     * @return {number} indexA, The child index of the first fixture's shape.
     * @return {number} indexB, The child index of the second fixture's shape.
     * @tupleReturn
     */
    getChildren(): [number, number];

    /**
     * Gets the two Fixtures that hold the shapes that are in contact.
     *
     * @return {Fixture} fixtureA, The first Fixture.
     * @return {Fixture} fixtureB, The second Fixture.
     * @tupleReturn
     */
    getFixtures(): [Fixture, Fixture];

    /**
     * Get the friction between two shapes that are in contact.
     *
     * @return {number} The friction of the contact.
     */
    getFriction(): number;

    /**
     * Get the normal vector between two shapes that are in contact.
     *
     * @return {number} nx: The x component of the normal vector.
     * @return {number} ny: The y component of the normal vector.
     * @tupleReturn
     */
    getNormal(): [number, number];

    /**
     * Returns the contact points of the two colliding fixtures. There can be one or two points.
     *
     * @return {number} x1: The x coordinate of the first contact point.
     * @return {number} y1: The y coordinate of the first contact point.
     * @return {number?} x2: The x coordinate of the second contact point.
     * @return {number?} y2: The y coordinate of the second contact point.
     * @tupleReturn
     */
    getPositions(): [number, number, number?, number?]

    /**
     * Get the restitution between two shapes that are in contact.
     *
     * @return {number} restitution, The restitution between the two shapes.
     */
    getRestitution(): number;

    /**
     * Returns whether the contact is enabled. The collision will be ignored if a contact gets disabled in the preSolve callback.
     *
     * @return {boolean} enabled, True if enabled, false otherwise.
     */
    isEnabled(): boolean;

    /**
     * Returns whether the two colliding fixtures are touching each other.
     *
     * @return {boolean} touching, True if they touch or false if not.
     */
    isTouching(): boolean;

    /**
     * Resets the contact friction to the mixture value of both fixtures.
     */
    resetFriction(): void;

    /**
     * Resets the contact restitution to the mixture value of both fixtures.
     */
    resetRestitution(): void;

    /**
     * Enables or disables the contact.
     *
     * @param enabled True to enable or false to disable.
     */
    setEnabled(enabled: boolean): void;

    /**
     * Sets the contact friction.
     *
     * @param friction The contact friction.
     */
    setFriction(friction: number): void;

    /**
     * Sets the contact restitution.
     *
     * @param restitution The contact restitution.
     */
    setRestitution(restitution: number): void;
}