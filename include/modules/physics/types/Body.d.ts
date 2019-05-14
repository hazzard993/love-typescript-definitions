/**
 * @link [Body](https://love2d.org/wiki/Body)
 */
declare interface Body extends LoveObject {
    /**
     * Applies an angular impulse to a body. This makes a single, instantaneous
     * addition to the body momentum.
     *
     *
     * A body with with a larger mass will react less. The reaction does not depend on
     * the timestep, and is equivalent to applying a force continuously for 1 second.
     * Impulses are best used to give a single push to a body. For a continuous push
     * to a body it is better to use Body:applyForce.
     *
     * @param impulse The impulse in kilogram-square meter per second.
     */
    applyAngularImpulse(impulse: number): void;

    /**
     * Apply force to a Body.
     *
     *
     * A force pushes a body in a direction. A body with with a larger mass will react
     * less. The reaction also depends on how long a force is applied: since the force
     * acts continuously over the entire timestep, a short timestep will only push the
     * body for a short time. Thus forces are best used for many timesteps to give a
     * continuous push to a body (like gravity). For a single push that is independent
     * of timestep, it is better to use Body:applyLinearImpulse.
     *
     *
     * If the position to apply the force is not given, it will act on the center of
     * mass of the body. The part of the force not directed towards the center of mass
     * will cause the body to spin (and depends on the rotational inertia).
     *
     *
     * Note that the force components and position must be given in world coordinates.
     *
     * @param fx The x component of force to apply to the center of mass.
     * @param fy The y component of force to apply to the center of mass.
     */
    applyForce(fx: number, fy: number): void;

    /**
     * Apply force to a Body.
     *
     *
     * A force pushes a body in a direction. A body with with a larger mass will react
     * less. The reaction also depends on how long a force is applied: since the force
     * acts continuously over the entire timestep, a short timestep will only push the
     * body for a short time. Thus forces are best used for many timesteps to give a
     * continuous push to a body (like gravity). For a single push that is independent
     * of timestep, it is better to use Body:applyLinearImpulse.
     *
     *
     * If the position to apply the force is not given, it will act on the center of
     * mass of the body. The part of the force not directed towards the center of mass
     * will cause the body to spin (and depends on the rotational inertia).
     *
     *
     * Note that the force components and position must be given in world coordinates.
     *
     * @param fx The x component of force to apply.
     * @param fy The y component of force to apply.
     * @param x The x position to apply the force.
     * @param y The y position to apply the force.
     */
    applyForce(fx: number, fy: number, x: number, y: number): void;

    /**
     * Applies an impulse to a body. This makes a single, instantaneous addition to
     * the body momentum.
     *
     *
     * An impulse pushes a body in a direction. A body with with a larger mass will
     * react less. The reaction does not depend on the timestep, and is equivalent to
     * applying a force continuously for 1 second. Impulses are best used to give a
     * single push to a body. For a continuous push to a body it is better to use
     * Body:applyForce.
     *
     *
     * If the position to apply the impulse is not given, it will act on the center of
     * mass of the body. The part of the impulse not directed towards the center of
     * mass will cause the body to spin (and depends on the rotational inertia).
     *
     *
     * Note that the impulse components and position must be given in world
     * coordinates.
     *
     * @param ix The x component of the impulse applied to the center of mass.
     * @param iy The y component of the impulse applied to the center of mass.
     */
    applyLinearImpulse(ix: number, iy: number): void;

    /**
     * Applies an impulse to a body. This makes a single, instantaneous addition to
     * the body momentum.
     *
     *
     * An impulse pushes a body in a direction. A body with with a larger mass will
     * react less. The reaction does not depend on the timestep, and is equivalent to
     * applying a force continuously for 1 second. Impulses are best used to give a
     * single push to a body. For a continuous push to a body it is better to use
     * Body:applyForce.
     *
     *
     * If the position to apply the impulse is not given, it will act on the center of
     * mass of the body. The part of the impulse not directed towards the center of
     * mass will cause the body to spin (and depends on the rotational inertia).
     *
     *
     * Note that the impulse components and position must be given in world
     * coordinates.
     *
     * @param ix The x component of the impulse.
     * @param iy The y component of the impulse.
     * @param x The x position to apply the impulse.
     * @param y The y position to apply the impulse.
     */
    applyLinearImpulse(ix: number, iy: number, x: number, y: number): void;

    /**
     * Apply torque to a body.
     *
     *
     * Torque is like a force that will change the angular velocity (spin) of a body.
     * The effect will depend on the rotational inertia a body has.
     *
     * @param torque The torque to apply.
     */
    applyTorque(torque: number): void;

    /**
     * Explicitly destroys the Body. When you don't have time to wait for garbage
     * collection, this function may be used to free the object immediately, but note
     * that an error will occur if you attempt to use the object after calling this
     * function.
     *
     */
    destroy(): void;

    /**
     * Get the angle of the body.
     *
     *
     * The angle is measured in radians. If you need to transform it to degrees, use
     * math.deg.
     *
     *
     * A value of 0 radians will mean "looking to the right". Although radians
     * increase counter-clockwise, the y-axis points down so it becomes clockwise from
     * our point of view.
     *
     * @return angle, The angle in radians.
     */
    getAngle(): number;

    /**
     * Gets the Angular damping of the Body
     *
     *
     * The angular damping is the rate of decrease of the angular velocity over time:
     * A spinning body with no damping and no external forces will continue spinning
     * indefinitely. A spinning body with damping will gradually stop spinning.
     *
     *
     * Damping is not the same as friction - they can be modelled together. However,
     * only damping is provided by Box2D (and LÖVE).
     *
     *
     * Damping parameters should be between 0 and infinity, with 0 meaning no damping,
     * and infinity meaning full damping. Normally you will use a damping value
     * between 0 and 0.1.
     *
     * @return damping, The value of the angular damping.
     */
    getAngularDamping(): number;

    /**
     * Get the angular velocity of the Body.
     *
     *
     * The angular velocity is the rate of change of angle over time.
     *
     *
     * It is changed in World:update by applying torques, off centre forces/impulses,
     * and angular damping. It can be set directly with Body:setAngularVelocity.
     *
     *
     * If you need the rate of change of position over time, use
     * Body:getLinearVelocity.
     *
     * @return w, The angular velocity in radians/second.
     */
    getAngularVelocity(): number;

    /**
     * Gets a list of all Contacts attached to the Body.
     *
     * @return contacts, A list with all contacts associated with the Body.
     */
    getContactList(): table;

    /**
     * @deprecated renamed to Body.getFixtures()
     * Returns a table with all fixtures.
     *
     * @return fixtures, A sequence with all fixtures.
     */
    getFixtureList(): table;

    /**
     * Returns a table with all fixtures.
     *
     * @return fixtures, A sequence with all fixtures.
     */
    getFixtures(): table;

    /**
     * Returns the gravity scale factor.
     *
     * @return scale, The gravity scale factor.
     */
    getGravityScale(): number;

    /**
     * Gets the rotational inertia of the body.
     *
     *
     * The rotational inertia is how hard is it to make the body spin.
     *
     * @return inertia, The rotational inertial of the body.
     */
    getInertia(): number;

    /**
     * Returns a table containing the Joints attached to this Body.
     *
     * @return joints, A sequence with the Joints attached to the Body.
     */
    getJointList(): table;

    /**
     * Gets the linear damping of the Body.
     *
     *
     * The linear damping is the rate of decrease of the linear velocity over time. A
     * moving body with no damping and no external forces will continue moving
     * indefinitely, as is the case in space. A moving body with damping will
     * gradually stop moving.
     *
     *
     * Damping is not the same as friction - they can be modelled together. However,
     * only damping is provided by Box2D (and LÖVE).
     *
     * @return damping, The value of the linear damping.
     */
    getLinearDamping(): number;

    /**
     * Gets the linear velocity of the Body from its center of mass.
     *
     *
     * The linear velocity is the rate of change of position over time.
     *
     *
     * If you need the rate of change of angle over time, use Body:getAngularVelocity.
     * If you need to get the linear velocity of a point different from the center of
     * mass:
     *
     *
     * Body:getLinearVelocityFromLocalPoint allows you to specify the point in local
     * coordinates.
     *
     *
     * Body:getLinearVelocityFromWorldPoint allows you to specify the point in world
     * coordinates.
     *
     * @return x, The x component of the velocity vector.
     * @return y, The y component of the velocity vector.
     * @tupleReturn
     */
    getLinearVelocity(): [number, number];

    /**
     * Get the linear velocity of a point on the body.
     *
     *
     * The linear velocity for a point on the body is the velocity of the body center
     * of mass plus the velocity at that point from the body spinning.
     *
     *
     * The point on the body must given in local coordinates. Use
     * Body:getLinearVelocityFromWorldPoint to specify this with world coordinates.
     *
     * @param x The x position to measure velocity.
     * @param y The y position to measure velocity.
     * @return vx, The x component of velocity at point (x,y).
     * @return vy, The y component of velocity at point (x,y).
     * @tupleReturn
     */
    getLinearVelocityFromLocalPoint(x: number, y: number): [number, number];

    /**
     * Get the linear velocity of a point on the body.
     *
     *
     * The linear velocity for a point on the body is the velocity of the body center
     * of mass plus the velocity at that point from the body spinning.
     *
     *
     * The point on the body must given in world coordinates. Use
     * Body:getLinearVelocityFromLocalPoint to specify this with local coordinates.
     *
     * @param x The x position to measure velocity.
     * @param y The y position to measure velocity.
     * @return vx, The x component of velocity at point (x,y).
     * @return vy, The y component of velocity at point (x,y).
     * @tupleReturn
     */
    getLinearVelocityFromWorldPoint(x: number, y: number): [number, number];

    /**
     * Get the center of mass position in local coordinates.
     *
     *
     * Use Body:getWorldCenter to get the center of mass in world coordinates.
     *
     * @return x, The x coordinate of the center of mass.
     * @return y, The y coordinate of the center of mass.
     * @tupleReturn
     */
    getLocalCenter(): [number, number];

    /**
     * Transform a point from world coordinates to local coordinates.
     *
     * @param worldX The x position in world coordinates.
     * @param worldY The y position in world coordinates.
     * @return localX, The x position in local coordinates.
     * @return localY, The y position in local coordinates.
     * @tupleReturn
     */
    getLocalPoint(worldX: number, worldY: number): [number, number];

    /**
     * Transform a vector from world coordinates to local coordinates.
     *
     * @param worldX The vector x component in world coordinates.
     * @param worldY The vector y component in world coordinates.
     * @return localX, The vector x component in local coordinates.
     * @return localY, The vector y component in local coordinates.
     * @tupleReturn
     */
    getLocalVector(worldX: number, worldY: number): [number, number];

    /**
     * Get the mass of the body.
     *
     * @return mass, The mass of the body (in kilograms).
     */
    getMass(): number;

    /**
     * Returns the mass, its center, and the rotational inertia.
     *
     * @return x, The x position of the center of mass.
     * @return y, The y position of the center of mass.
     * @return mass, The mass of the body.
     * @return inertia, The rotational inertia.
     * @tupleReturn
     */
    getMassData(): [number, number, number, number];

    /**
     * Get the position of the body.
     *
     *
     * Note that this may not be the center of mass of the body.
     *
     * @return x, The x position.
     * @return y, The y position.
     * @tupleReturn
     */
    getPosition(): [number, number];

    /**
     * Returns the type of the body.
     *
     * @return type, The body type.
     */
    getType(): BodyType;

    /**
     * Returns the Lua value associated with this Body.
     *
     * @return value, The Lua value associated with the Body.
     */
    getUserData(): any;

    /**
     * Gets the World the body lives in.
     *
     * @return world, The world the body lives in.
     */
    getWorld(): World;

    /**
     * Get the center of mass position in world coordinates.
     *
     *
     * Use Body:getLocalCenter to get the center of mass in local coordinates.
     *
     * @return x, The x coordinate of the center of mass.
     * @return y, The y coordinate of the center of mass.
     * @tupleReturn
     */
    getWorldCenter(): [number, number];

    /**
     * Transform a point from local coordinates to world coordinates.
     *
     * @param localX The x position in local coordinates.
     * @param localY The y position in local coordinates.
     * @return worldX, The x position in world coordinates.
     * @return worldY, The y position in world coordinates.
     * @tupleReturn
     */
    getWorldPoint(localX: number, localY: number): [number, number];

    /**
     * Transforms multiple points from local coordinates to world coordinates.
     *
     * @param xys The x followed by the y position of each point.
     * @return xys, The transformed points.
     * @tupleReturn
     */
    getWorldPoints(...xys: Array<number>): Array<number>;

    /**
     * Transform a vector from local coordinates to world coordinates.
     *
     * @param localX The vector x component in local coordinates.
     * @param localY The vector y component in local coordinates.
     * @return worldX, The vector x component in world coordinates.
     * @return worldY, The vector y component in world coordinates.
     * @tupleReturn
     */
    getWorldVector(localX: number, localY: number): [number, number];

    /**
     * Get the x position of the body in world coordinates.
     *
     * @return x, The x position in world coordinates.
     */
    getX(): number;

    /**
     * Get the y position of the body in world coordinates.
     *
     * @return y, The y position in world coordinates.
     */
    getY(): number;

    /**
     * Returns whether the body is actively used in the simulation.
     *
     * @return status, True if the body is active or false if not.
     */
    isActive(): boolean;

    /**
     * Returns the sleep status of the body.
     *
     * @return status, True if the body is awake or false if not.
     */
    isAwake(): boolean;

    /**
     * Get the bullet status of a body.
     *
     *
     * There are two methods to check for body collisions:
     *
     *
     * at their location when the world is updated (default)
     *
     *
     * using continuous collision detection (CCD)
     *
     *
     * The default method is efficient, but a body moving very quickly may sometimes
     * jump over another body without producing a collision. A body that is set as a
     * bullet will use CCD. This is less efficient, but is guaranteed not to jump when
     * moving quickly.
     *
     *
     * Note that static bodies (with zero mass) always use CCD, so your walls will not
     * let a fast moving body pass through even if it is not a bullet.
     *
     * @return status, The bullet status of the body.
     */
    isBullet(): boolean;

    /**
     * Gets whether the Body is destroyed. Destroyed bodies cannot be used.
     *
     * @return destroyed, Whether the Body is destroyed.
     */
    isDestroyed(): boolean;

    /**
     * Returns whether the body rotation is locked.
     *
     * @return fixed, True if the body's rotation is locked or false if not.
     */
    isFixedRotation(): boolean;

    /**
     * Returns the sleeping behaviour of the body.
     *
     * @return status, True if the body is allowed to sleep or false if not.
     */
    isSleepingAllowed(): boolean;

    /**
     * Gets whether the Body is touching the given other Body.
     * @param otherbody The other body to check.
     * @return touching, True if this body is touching the other body, false otherwise.
     * @link [Body:isTouching](https://love2d.org/wiki/Body:isTouching)
     */
    isTouching(otherbody: Body): boolean;

    /**
     * Resets the mass of the body by recalculating it from the mass properties of the
     * fixtures.
     *
     */
    resetMassData(): void;

    /**
     * Sets whether the body is active in the world.
     *
     *
     * An inactive body does not take part in the simulation. It will not move or
     * cause any collisions.
     *
     * @param active If the body is active or not.
     */
    setActive(active: boolean): void;

    /**
     * Set the angle of the body.
     *
     *
     * The angle is measured in radians. If you need to transform it from degrees, use
     * math.rad.
     *
     *
     * A value of 0 radians will mean "looking to the right". Although radians
     * increase counter-clockwise, the y-axis points down so it becomes clockwise from
     * our point of view.
     *
     *
     * It is possible to cause a collision with another body by changing its angle.
     *
     * @param angle The angle in radians.
     */
    setAngle(angle: number): void;

    /**
     * Sets the angular damping of a Body.
     *
     *
     * See Body:getAngularDamping for a definition of angular damping.
     *
     *
     * Angular damping can take any value from 0 to infinity. It is recommended to
     * stay between 0 and 0.1, though. Other values will look unrealistic.
     *
     * @param damping The new angular damping.
     */
    setAngularDamping(damping: number): void;

    /**
     * Sets the angular velocity of a Body.
     *
     *
     * The angular velocity is the rate of change of angle over time.
     *
     *
     * This function will not accumulate anything; any impulses previously applied
     * since the last call to World:update will be lost.
     *
     * @param w The new angular velocity, in radians per second
     */
    setAngularVelocity(w: number): void;

    /**
     * Wakes the body up or puts it to sleep.
     *
     * @param awake The body sleep status.
     */
    setAwake(awake: boolean): void;

    /**
     * Set the bullet status of a body.
     *
     *
     * There are two methods to check for body collisions:
     *
     *
     * at their location when the world is updated (default)
     *
     *
     * using continuous collision detection (CCD)
     *
     *
     * The default method is efficient, but a body moving very quickly may sometimes
     * jump over another body without producing a collision. A body that is set as a
     * bullet will use CCD. This is less efficient, but is guaranteed not to jump when
     * moving quickly.
     *
     *
     * Note that static bodies (with zero mass) always use CCD, so your walls will not
     * let a fast moving body pass through even if it is not a bullet.
     *
     * @param status The bullet status of the body.
     */
    setBullet(status: boolean): void;

    /**
     * Set whether a body has fixed rotation.
     *
     *
     * Bodies with fixed rotation don't vary the speed at which they rotate.
     *
     * @param fixed Whether the body should have fixed rotation.
     */
    setFixedRotation(fixed: boolean): void;

    /**
     * Sets a new gravity scale factor for the body.
     *
     * @param scale The new gravity scale factor.
     */
    setGravityScale(scale: number): void;

    /**
     * Set the inertia of a body.
     *
     * @param inertia The new moment of inertia, in kilograms per meter squared.
     */
    setInertia(inertia: number): void;

    /**
     * Sets the linear damping of a Body
     *
     *
     * See Body:getLinearDamping for a definition of linear damping.
     *
     *
     * Linear damping can take any value from 0 to infinity. It is recommended to stay
     * between 0 and 0.1, though. Other values will make the objects look "floaty".
     *
     * @param ld The new linear damping.
     */
    setLinearDamping(ld: number): void;

    /**
     * Sets a new linear velocity for the Body.
     *
     *
     * This function will not accumulate anything; any impulses previously applied
     * since the last call to World:update will be lost.
     *
     * @param x The x component of the velocity vector.
     * @param y The y component of the velocity vector.
     */
    setLinearVelocity(x: number, y: number): void;

    /**
     * Sets the mass in kilograms.
     *
     * @param mass The mass, in kilograms.
     */
    setMass(mass: number): void;

    /**
     * Overrides the calculated mass data.
     *
     * @param x The x component of the center of mass in local coordinates.
     * @param y The y component of the center of mass in local coordinates.
     * @param mass The mass, in kilograms.
     * @param inertia The rotational inertia, in kilograms per squared meter.
     */
    setMassData(x: number, y: number, mass: number, inertia: number): void;

    /**
     * Set the position of the body.
     *
     *
     * Note that this may not be the center of mass of the body.
     *
     * @param x The x position.
     * @param y The y position.
     */
    setPosition(x: number, y: number): void;

    /**
     * Sets the sleeping behaviour of the body.
     *
     * @param allowed True if the body is allowed to sleep or false if not.
     */
    setSleepingAllowed(allowed: boolean): void;

    /**
     * Sets a new body type.
     *
     * @param type The new type.
     */
    setType(type: BodyType): void;

    /**
     * Associates a Lua value with the Body.
     *
     *
     * To delete the reference, explicitly pass _nil/null_.
     *
     * @param value The Lua value to associate with the Body.
     */
    setUserData(value: any): void;

    /**
     * Set the x position of the body.
     *
     * @param x The x position.
     */
    setX(x: number): void;

    /**
     * Set the y position of the body.
     *
     * @param y The y position.
     */
    setY(y: number): void;

}
