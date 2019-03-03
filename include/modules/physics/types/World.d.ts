/**
 * A world is an object that contains all bodies and joints.
 * @link [World](https://love2d.org/wiki/World)
 */
declare interface World extends Object {
	/**
	 * Destroys the world, taking all bodies, joints, fixtures and their shapes with
	 * it.
	 *
	 *
	 * An error will occur if you attempt to use any of the destroyed objects after
	 * calling this function.
	 *
	 */
    destroy(): void;

    /**
     * Returns a table with all bodies.
     * @return {Body[]} bodies, A sequence with all bodies.
     * @link [World:getBodies](https://love2d.org/wiki/World:getBodies)
     */
    getBodies(): Body[];

	/**
	 * Get the number of bodies in the world.
	 *
	 * @return {number} n, The number of bodies in the world.
	 */
    getBodyCount(): number;

	/**
	 * Returns a table with all bodies.
	 *
	 * @return {table} bodies, A sequence with all bodies.
	 */
    getBodyList(): table;

	/**
	 * Returns functions for the callbacks during the world update.
	 *
	 * @return {Function} beginContact, Gets called when two fixtures begin to overlap.
	 * @return {Function} endContact, Gets called when two fixtures cease to overlap.
	 * @return {Function} preSolve, Gets called before a collision gets resolved.
	 * @return {Function} postSolve, Gets called after the collision has been resolved.
	 */
    /** @tupleReturn */
    getCallbacks(): [Function, Function, Function, Function];

	/**
	 * Returns the number of contacts in the world.
	 *
	 * @return {number} n, The number of contacts in the world.
	 */
    getContactCount(): number;

	/**
	 * Returns the function for collision filtering.
	 *
	 * @return {Function} contactFilter, The function that handles the contact filtering.
	 */
    getContactFilter(): Function;

	/**
	 * Returns a table with all contacts.
	 *
	 * @return {table} contacts, A sequence with all contacts.
	 */
    getContactList(): table;

	/**
	 * Get the gravity of the world.
	 *
	 * @return {number} x, The x component of gravity.
	 * @return {number} y, The y component of gravity.
	 */
    /** @tupleReturn */
    getGravity(): [number, number];

	/**
	 * Get the number of joints in the world.
	 *
	 * @return {number} n, The number of joints in the world.
	 */
    getJointCount(): number;

	/**
	 * Returns a table with all joints.
	 *
	 * @return {table} joints, A sequence with all joints.
	 */
    getJointList(): table;

	/**
	 * Gets whether the World is destroyed. Destroyed worlds cannot be used.
	 *
	 * @return {boolean} destroyed, Whether the World is destroyed.
	 */
    isDestroyed(): boolean;

	/**
	 * Returns if the world is updating its state.
	 *
	 *
	 * This will return true inside the callbacks from World:setCallbacks.
	 *
	 * @return {boolean} locked, Will be true if the world is in the process of updating its state.
	 */
    isLocked(): boolean;

	/**
	 * Returns the sleep behaviour of the world.
	 *
	 * @return {boolean} allowSleep, True if the bodies are allowed to sleep or false if not.
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
	 */
    queryBoundingBox(topLeftX: number, topLeftY: number, bottomRightX: number, bottomRightY: number, callback: Function): void;

	/**
	 * Casts a ray and calls a function for each fixtures it intersects.
	 *
	 * @param x1 The x position of the starting point of the ray.
	 * @param y1 The y position of the starting point of the ray.
	 * @param x2 The x position of the end point of the ray.
	 * @param y2 The y position of the end point of the ray.
	 * @param callback This function gets six arguments and should return a number.
	 */
    rayCast(x1: number, y1: number, x2: number, y2: number, callback: Function): void;

	/**
	 * Sets functions for the collision callbacks during the world update.
	 *
	 *
	 * Four Lua functions can be given as arguments. The value nil removes a function.
	 *
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
	 */
    setCallbacks(beginContact?: Function, endContact?: Function, preSolve?: Function, postSolve?: Function): void;

	/**
	 * Sets a function for collision filtering.
	 *
	 *
	 * If the group and category filtering doesn't generate a collision decision, this
	 * function gets called with the two fixtures as arguments. The function should
	 * return a boolean value where true means the fixtures will collide and false
	 * means they will pass through each other.
	 *
	 * @param filter The function handling the contact filtering.
	 */
    setContactFilter(filter: Function): void;

	/**
	 * Set the gravity of the world.
	 *
	 * @param x The x component of gravity.
	 * @param y The y component of gravity.
	 */
    setGravity(x: number, y: number): void;

	/**
	 * Set the sleep behaviour of the world.
	 *
	 *
	 * A sleeping body is much more efficient to simulate than when awake.
	 *
	 *
	 * If sleeping is allowed, any body that has come to rest will sleep.
	 *
	 * @param allowSleep True if the bodies are allowed to sleep or false if not.
	 */
    setSleepingAllowed(allowSleep: boolean): void;

	/**
	 * Translates the World's origin. Useful in large worlds where floating point
	 * precision issues become noticeable at far distances from the origin.
	 *
	 * @param x The x component of the new origin with respect to the old origin.
	 * @param y The y component of the new origin with respect to the old origin.
	 */
    translateOrigin(x: number, y: number): void;

	/**
	 * Update the state of the world.
	 *
	 * @param dt The time (in seconds) to advance the physics simulation.
	 * @param velocityiterations The maximum number of steps used to determine the new velocities when resolving a collision.
	 * @param positioniterations The maximum number of steps used to determine the new positions when resolving a collision.
	 */
    update(dt: number, velocityiterations?: number, positioniterations?: number): void;

}
