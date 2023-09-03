declare module "love.physics" {
  import { Type } from "love";

  /**
   * A world is an object that contains all bodies and joints.
   * @link [World](https://love2d.org/wiki/World)
   */
  interface World extends Type<"World"> {
    /**
     * Destroys the world, taking all bodies, joints, fixtures and their shapes with
     * it.
     *
     * An error will occur if you attempt to use any of the destroyed objects after
     * calling this function.
     *
     * @link [World:destroy](https://love2d.org/wiki/World:destroy)
     */
    destroy(): void;

    /**
     * Returns a table with all bodies.
     * @return bodies, A sequence with all bodies.
     * @link [World:getBodies](https://love2d.org/wiki/World:getBodies)
     */
    getBodies(): Array<Body>;

    /**
     * Get the number of bodies in the world.
     *
     * @return n, The number of bodies in the world.
     * @link [World:getBodyCount](https://love2d.org/wiki/World:getBodyCount)
     */
    getBodyCount(): number;

    /**
     * Returns functions for the callbacks during the world update.
     *
     * @return beginContact, Gets called when two fixtures begin to overlap.
     * @return endContact, Gets called when two fixtures cease to overlap.
     * @return preSolve, Gets called before a collision gets resolved.
     * @return postSolve, Gets called after the collision has been resolved.
     * @link [World:getCallbacks](https://love2d.org/wiki/World:getCallbacks)
     */
    getCallbacks(): LuaMultiReturn<
      [
        beginContact: (
          this: void,
          fixture1: Fixture,
          fixture2: Fixture,
          contact: Contact,
        ) => void,
        endContact: (
          this: void,
          fixture1: Fixture,
          fixture2: Fixture,
          contact: Contact,
        ) => void,
        preSolve: (
          this: void,
          fixture1: Fixture,
          fixture2: Fixture,
          contact: Contact,
        ) => void,
        postSolve: (
          this: void,
          fixture1: Fixture,
          fixture2: Fixture,
          contact: Contact,
          normalimpulse: number,
          tangentimpulse: number,
        ) => void,
      ]
    >;

    /**
     * Returns the number of contacts in the world.
     *
     * @return n, The number of contacts in the world.
     * @link [World:getContactCount](https://love2d.org/wiki/World:getContactCount)
     */
    getContactCount(): number;

    /**
     * Returns the function for collision filtering.
     *
     * @return contactFilter, The function that handles the contact filtering.
     * @link [World:getContactFilter](https://love2d.org/wiki/World:getContactFilter)
     */
    getContactFilter(): Function;

    /**
     * Returns a sequence of all the contacts in this world
     *
     * @return contacts
     * @link [World:getContacts](https://love2d.org/wiki/World:getContacts)
     */
    getContacts(): Contact[];

    /**
     * Get the gravity of the world.
     *
     * @return x, The x component of gravity.
     * @return y, The y component of gravity.
     * @link [World:getGravity](https://love2d.org/wiki/World:getGravity)
     */
    getGravity(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Get the number of joints in the world.
     *
     * @return n, The number of joints in the world.
     * @link [World:getJointCount](https://love2d.org/wiki/World:getJointCount)
     */
    getJointCount(): number;

    /**
     * Returns a table with all joints
     *
     * @return An array with all joints
     * @link [World.getJoints](https://love2d.org/wiki/World:getJoints)
     */
    getJoints(): Joint[];

    /**
     * Gets whether the World is destroyed. Destroyed worlds cannot be used.
     *
     * @return destroyed, Whether the World is destroyed.
     * @link [World:isDestroyed](https://love2d.org/wiki/World:isDestroyed)
     */
    isDestroyed(): boolean;

    /**
     * Returns if the world is updating its state.
     *
     * This will return true inside the callbacks from World:setCallbacks.
     *
     * @return locked, Will be true if the world is in the process of updating its state.
     * @link [World:isLocked](https://love2d.org/wiki/World:isLocked)
     */
    isLocked(): boolean;

    /**
     * Returns the sleep behaviour of the world.
     *
     * @return allowSleep, True if the bodies are allowed to sleep or false if not.
     * @link [World:isSleepingAllowed](https://love2d.org/wiki/World:isSleepingAllowed)
     */
    isSleepingAllowed(): boolean;

    /**
     * Calls a function for each fixture inside the specified area.
     *
     * @param topLeftX The x position of the top-left point.
     * @param topLeftY The y position of the top-left point.
     * @param bottomRightX The x position of the bottom-right point.
     * @param bottomRightY The y position of the bottom-right point.
     * @param callback This function gets passed one argument, the fixture, and should return a boolean. The search will continue if it is true or stop if it is false.
     * @link [World:queryBoundingBox](https://love2d.org/wiki/World:queryBoundingBox)
     */
    queryBoundingBox(
      topLeftX: number,
      topLeftY: number,
      bottomRightX: number,
      bottomRightY: number,
      callback: Function,
    ): void;

    /**
     * Casts a ray and calls a function for each fixtures it intersects.
     *
     * @param x1 The x position of the starting point of the ray.
     * @param y1 The y position of the starting point of the ray.
     * @param x2 The x position of the end point of the ray.
     * @param y2 The y position of the end point of the ray.
     * @param callback This function gets six arguments and should return a number.
     * @link [World:rayCast](https://love2d.org/wiki/World:rayCast)
     */
    rayCast(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      callback: (
        this: void,
        fix: Fixture,
        x: number,
        y: number,
        xn: number,
        yn: number,
        frac: number,
      ) => number,
    ): void;

    /**
     * Sets functions for the collision callbacks during the world update.
     *
     * Four Lua functions can be given as arguments. The value _nil/undefined/undefined_ removes a function.
     *
     * When called, each function will be passed three arguments. The first two
     * arguments are the colliding fixtures and the third argument is the Contact
     * between them. The PostSolve callback additionally gets the normal and tangent
     * impulse for each contact point.
     *
     * @param beginContact Gets called when two fixtures begin to overlap.
     * @param endContact Gets called when two fixtures cease to overlap.
     * @param preSolve Gets called before a collision gets resolved.
     * @param postSolve Gets called after the collision has been resolved.
     * @link [World:setCallbacks](https://love2d.org/wiki/World:setCallbacks)
     */
    setCallbacks(
      beginContact?: (
        this: void,
        fixture1: Fixture,
        fixture2: Fixture,
        contact: Contact,
      ) => void,
      endContact?: (
        this: void,
        fixture1: Fixture,
        fixture2: Fixture,
        contact: Contact,
      ) => void,
      preSolve?: (
        this: void,
        fixture1: Fixture,
        fixture2: Fixture,
        contact: Contact,
      ) => void,
      postSolve?: (
        this: void,
        fixture1: Fixture,
        fixture2: Fixture,
        contact: Contact,
        normalimpulse: number,
        tangentimpulse: number,
      ) => void,
    ): void;

    /**
     * Sets a function for collision filtering.
     *
     * If the group and category filtering doesn't generate a collision decision, this
     * function gets called with the two fixtures as arguments. The function should
     * return a boolean value where true means the fixtures will collide and false
     * means they will pass through each other.
     *
     * @param filter The function handling the contact filtering.
     * @link [World:setContactFilter](https://love2d.org/wiki/World:setContactFilter)
     */
    setContactFilter(
      filter: (this: void, fixtureA: Fixture, fixtureB: Fixture) => boolean,
    ): void;

    /**
     * Set the gravity of the world.
     *
     * @param x The x component of gravity.
     * @param y The y component of gravity.
     * @link [World:setGravity](https://love2d.org/wiki/World:setGravity)
     */
    setGravity(x: number, y: number): void;

    /**
     * Set the sleep behaviour of the world.
     *
     * A sleeping body is much more efficient to simulate than when awake.
     *
     * If sleeping is allowed, any body that has come to rest will sleep.
     *
     * @param allowSleep True if the bodies are allowed to sleep or false if not.
     * @link [World:setSleepingAllowed](https://love2d.org/wiki/World:setSleepingAllowed)
     */
    setSleepingAllowed(allowSleep: boolean): void;

    /**
     * Translates the World's origin. Useful in large worlds where floating point
     * precision issues become noticeable at far distances from the origin.
     *
     * @param x The x component of the new origin with respect to the old origin.
     * @param y The y component of the new origin with respect to the old origin.
     * @link [World:translateOrigin](https://love2d.org/wiki/World:translateOrigin)
     */
    translateOrigin(x: number, y: number): void;

    /**
     * Update the state of the world.
     *
     * @param dt The time (in seconds) to advance the physics simulation.
     * @param velocityiterations The maximum number of steps used to determine the new velocities when resolving a collision.
     * @param positioniterations The maximum number of steps used to determine the new positions when resolving a collision.
     * @link [World:update](https://love2d.org/wiki/World:update)
     */
    update(
      dt: number,
      velocityiterations?: number,
      positioniterations?: number,
    ): void;
  }
}
