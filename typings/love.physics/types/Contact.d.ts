declare module "love.physics" {
  import { Type } from "love";

  /**
   * Contacts are objects created to manage collisions in worlds.
   *
   * @link [Contact](https://love2d.org/wiki/Contact)
   */
  interface Contact extends Type<"Contact"> {
    /**
     * Gets the child indices of the shapes of the two colliding fixtures.
     * For ChainShapes, an index of 1 is the first edge in the chain.
     *
     * Used together with Fixture:rayCast or ChainShape:getChildEdge.
     *
     * @return indexA, The child index of the first fixture's shape.
     * @return indexB, The child index of the second fixture's shape.
     * @link [Contact:getChildren](https://love2d.org/wiki/Contact:getChildren)
     */
    getChildren(): LuaMultiReturn<[indexA: number, indexB: number]>;

    /**
     * Gets the two Fixtures that hold the shapes that are in contact.
     *
     * @return fixtureA, The first Fixture.
     * @return fixtureB, The second Fixture.
     * @link [Contact:getFixtures](https://love2d.org/wiki/Contact:getFixtures)
     */
    getFixtures(): LuaMultiReturn<[fixtureA: Fixture, fixtureB: Fixture]>;

    /**
     * Get the friction between two shapes that are in contact.
     *
     * @return The friction of the contact.
     * @link [Contact:getFriction](https://love2d.org/wiki/Contact:getFriction)
     */
    getFriction(): number;

    /**
     * Get the normal vector between two shapes that are in contact.
     *
     * @return nx, The x component of the normal vector.
     * @return ny, The y component of the normal vector.
     * @link [Contact:getNormal](https://love2d.org/wiki/Contact:getNormal)
     */
    getNormal(): LuaMultiReturn<[nx: number, ny: number]>;

    /**
     * Returns the contact points of the two colliding fixtures. There can be one or two points.
     *
     * @return x1, The x coordinate of the first contact point.
     * @return y1, The y coordinate of the first contact point.
     * @return x2, The x coordinate of the second contact point.
     * @return y2, The y coordinate of the second contact point.
     * @link [Contact:getPositions](https://love2d.org/wiki/Contact:getPositions)
     */
    getPositions(): LuaMultiReturn<
      [...p1: [x1: number, y1: number], ...p2: [x2?: number, y2?: number]]
    >;

    /**
     * Get the restitution between two shapes that are in contact.
     *
     * @return restitution, The restitution between the two shapes.
     * @link [Contact:getRestitution](https://love2d.org/wiki/Contact:getRestitution)
     */
    getRestitution(): number;

    /**
     * Returns whether the contact is enabled. The collision will be ignored if a contact gets disabled in the preSolve callback.
     *
     * @return enabled, True if enabled, false otherwise.
     * @link [Contact:isEnabled](https://love2d.org/wiki/Contact:isEnabled)
     */
    isEnabled(): boolean;

    /**
     * Returns whether the two colliding fixtures are touching each other.
     *
     * @return touching, True if they touch or false if not.
     * @link [Contact:isTouching](https://love2d.org/wiki/Contact:isTouching)
     */
    isTouching(): boolean;

    /**
     * Resets the contact friction to the mixture value of both fixtures.
     * @link [Contact:resetFriction](https://love2d.org/wiki/Contact:resetFriction)
     */
    resetFriction(): void;

    /**
     * Resets the contact restitution to the mixture value of both fixtures.
     * @link [Contact:resetRestitution](https://love2d.org/wiki/Contact:resetRestitution)
     */
    resetRestitution(): void;

    /**
     * Enables or disables the contact.
     *
     * @param enabled True to enable or false to disable.
     * @link [Contact:setEnabled](https://love2d.org/wiki/Contact:setEnabled)
     */
    setEnabled(enabled: boolean): void;

    /**
     * Sets the contact friction.
     *
     * @param friction The contact friction.
     * @link [Contact:setFriction](https://love2d.org/wiki/Contact:setFriction)
     */
    setFriction(friction: number): void;

    /**
     * Sets the contact restitution.
     *
     * @param restitution The contact restitution.
     * @link [Contact:setRestitution](https://love2d.org/wiki/Contact:setRestitution)
     */
    setRestitution(restitution: number): void;
  }
}
