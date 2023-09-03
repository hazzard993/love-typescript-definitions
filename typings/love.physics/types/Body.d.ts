declare module "love.physics" {
  import { Type } from "love";

  /**
   * Bodies are objects with velocity and position.
   *
   * @link [Body](https://love2d.org/wiki/Body)
   */
  interface Body extends Type<"Body"> {
    /**
     * Applies an angular impulse to a body. This makes a single, instantaneous
     * addition to the body momentum.
     *
     * A body with with a larger mass will react less. The reaction does not depend on
     * the timestep, and is equivalent to applying a force continuously for 1 second.
     * Impulses are best used to give a single push to a body. For a continuous push
     * to a body it is better to use Body:applyForce.
     *
     * @param impulse The impulse in kilogram-square meter per second.
     * @link [Body:applyAngularImpulse](https://love2d.org/wiki/Body:applyAngularImpulse)
     */
    applyAngularImpulse(impulse: number): void;

    /**
     * Apply force to a Body.
     *
     * A force pushes a body in a direction. A body with with a larger mass will react
     * less. The reaction also depends on how long a force is applied: since the force
     * acts continuously over the entire timestep, a short timestep will only push the
     * body for a short time. Thus forces are best used for many timesteps to give a
     * continuous push to a body (like gravity). For a single push that is independent
     * of timestep, it is better to use Body:applyLinearImpulse.
     *
     * If the position to apply the force is not given, it will act on the center of
     * mass of the body. The part of the force not directed towards the center of mass
     * will cause the body to spin (and depends on the rotational inertia).
     *
     * Note that the force components and position must be given in world coordinates.
     *
     * @param fx The x component of force to apply to the center of mass.
     * @param fy The y component of force to apply to the center of mass.
     * @link [Body:applyForce](https://love2d.org/wiki/Body:applyForce)
     */
    applyForce(fx: number, fy: number): void;

    /**
     * Apply force to a Body.
     *
     * A force pushes a body in a direction. A body with with a larger mass will react
     * less. The reaction also depends on how long a force is applied: since the force
     * acts continuously over the entire timestep, a short timestep will only push the
     * body for a short time. Thus forces are best used for many timesteps to give a
     * continuous push to a body (like gravity). For a single push that is independent
     * of timestep, it is better to use Body:applyLinearImpulse.
     *
     * If the position to apply the force is not given, it will act on the center of
     * mass of the body. The part of the force not directed towards the center of mass
     * will cause the body to spin (and depends on the rotational inertia).
     *
     * Note that the force components and position must be given in world coordinates.
     *
     * @param fx The x component of force to apply.
     * @param fy The y component of force to apply.
     * @param x The x position to apply the force.
     * @param y The y position to apply the force.
     * @link [Body:applyForce](https://love2d.org/wiki/Body:applyForce)
     */
    applyForce(fx: number, fy: number, x: number, y: number): void;

    /**
     * Applies an impulse to a body. This makes a single, instantaneous addition to
     * the body momentum.
     *
     * An impulse pushes a body in a direction. A body with with a larger mass will
     * react less. The reaction does not depend on the timestep, and is equivalent to
     * applying a force continuously for 1 second. Impulses are best used to give a
     * single push to a body. For a continuous push to a body it is better to use
     * Body:applyForce.
     *
     * If the position to apply the impulse is not given, it will act on the center of
     * mass of the body. The part of the impulse not directed towards the center of
     * mass will cause the body to spin (and depends on the rotational inertia).
     *
     * Note that the impulse components and position must be given in world
     * coordinates.
     *
     * @param ix The x component of the impulse applied to the center of mass.
     * @param iy The y component of the impulse applied to the center of mass.
     * @link [Body:applyLinearImpulse](https://love2d.org/wiki/Body:applyLinearImpulse)
     */
    applyLinearImpulse(ix: number, iy: number): void;

    /**
     * Applies an impulse to a body. This makes a single, instantaneous addition to
     * the body momentum.
     *
     * An impulse pushes a body in a direction. A body with with a larger mass will
     * react less. The reaction does not depend on the timestep, and is equivalent to
     * applying a force continuously for 1 second. Impulses are best used to give a
     * single push to a body. For a continuous push to a body it is better to use
     * Body:applyForce.
     *
     * If the position to apply the impulse is not given, it will act on the center of
     * mass of the body. The part of the impulse not directed towards the center of
     * mass will cause the body to spin (and depends on the rotational inertia).
     *
     * Note that the impulse components and position must be given in world
     * coordinates.
     *
     * @param ix The x component of the impulse.
     * @param iy The y component of the impulse.
     * @param x The x position to apply the impulse.
     * @param y The y position to apply the impulse.
     * @link [Body:applyLinearImpulse](https://love2d.org/wiki/Body:applyLinearImpulse)
     */
    applyLinearImpulse(ix: number, iy: number, x: number, y: number): void;

    /**
     * Apply torque to a body.
     *
     * Torque is like a force that will change the angular velocity (spin) of a body.
     * The effect will depend on the rotational inertia a body has.
     *
     * @param torque The torque to apply.
     * @link [Body:applyTorque](https://love2d.org/wiki/Body:applyTorque)
     */
    applyTorque(torque: number): void;

    /**
     * Explicitly destroys the Body. When you don't have time to wait for garbage
     * collection, this function may be used to free the object immediately, but note
     * that an error will occur if you attempt to use the object after calling this
     * function.
     *
     * @link [Body:destroy](https://love2d.org/wiki/Body:destroy)
     */
    destroy(): void;

    /**
     * Get the angle of the body.
     *
     * The angle is measured in radians. If you need to transform it to degrees, use
     * math.deg.
     *
     * A value of 0 radians will mean "looking to the right". Although radians
     * increase counter-clockwise, the y-axis points down so it becomes clockwise from
     * our point of view.
     *
     * @return angle, The angle in radians.
     * @link [Body:getAngle](https://love2d.org/wiki/Body:getAngle)
     */
    getAngle(): number;

    /**
     * Gets the Angular damping of the Body
     *
     * The angular damping is the rate of decrease of the angular velocity over time:
     * A spinning body with no damping and no external forces will continue spinning
     * indefinitely. A spinning body with damping will gradually stop spinning.
     *
     * Damping is not the same as friction - they can be modelled together. However,
     * only damping is provided by Box2D (and LÃ–VE).
     *
     * Damping parameters should be between 0 and infinity, with 0 meaning no damping,
     * and infinity meaning full damping. Normally you will use a damping value
     * between 0 and 0.1.
     *
     * @return damping, The value of the angular damping.
     * @link [Body:getAngularDamping](https://love2d.org/wiki/Body:getAngularDamping)
     */
    getAngularDamping(): number;

    /**
     * Get the angular velocity of the Body.
     *
     * The angular velocity is the rate of change of angle over time.
     *
     * It is changed in World:update by applying torques, off centre forces/impulses,
     * and angular damping. It can be set directly with Body:setAngularVelocity.
     *
     * If you need the rate of change of position over time, use
     * Body:getLinearVelocity.
     *
     * @return w, The angular velocity in radians/second.
     * @link [Body:getAngularVelocity](https://love2d.org/wiki/Body:getAngularVelocity)
     */
    getAngularVelocity(): number;

    /**
     * @deprecated renamed to Body:getContacts.
     *
     * Gets a list of all Contacts attached to the Body.
     *
     * @return contacts, A list with all contacts associated with the Body.
     * @link [Body:getContactList](https://love2d.org/wiki/Body:getContactList)
     * @since 0.9.2
     */
    getContactList(): Contact[];

    /**
     * Gets a list of all Contacts attached to the Body.
     *
     * @return contacts, A list with all contacts associated with the Body.
     * @link [Body:getContacts](https://love2d.org/wiki/Body:getContacts)
     * @since 11.0
     */
    getContacts(): Contact[];

    /**
     * @deprecated renamed to Body.getFixtures()
     *
     * Returns a table with all fixtures.
     *
     * @return fixtures, A sequence with all fixtures.
     * @link [Body:getFixtureList](https://love2d.org/wiki/Body:getFixtureList)
     * @since 0.8.0
     */
    getFixtureList(): Fixture[];

    /**
     * Returns a table with all fixtures.
     *
     * @returns fixtures, A sequence with all fixtures.
     * @link [Body:getFixtures](https://love2d.org/wiki/Body:getFixtures)
     * @since 11.0
     */
    getFixtures(): Fixture[];

    /**
     * Returns the gravity scale factor.
     *
     * @return scale, The gravity scale factor.
     * @link [Body:getGravityScale](https://love2d.org/wiki/Body:getGravityScale)
     */
    getGravityScale(): number;

    /**
     * Gets the rotational inertia of the body.
     *
     * The rotational inertia is how hard is it to make the body spin.
     *
     * @return inertia, The rotational inertial of the body.
     * @link [Body:getInertia](https://love2d.org/wiki/Body:getInertia)
     */
    getInertia(): number;

    /**
     * @deprecated renamed to Body:getJoints.
     *
     * Returns a table containing the Joints attached to this Body.
     *
     * @return joints, A sequence with the Joints attached to the Body.
     * @link [Body:getJointList](https://love2d.org/wiki/Body:getJointList)
     * @since 0.9.2
     */
    getJointList(): Joint[];

    /**
     * Returns a table containing the Joints attached to this Body.
     *
     * @returns A sequence with the Joints attached to the Body.
     * @link [Body:getJoints](https://love2d.org/wiki/Body:getJoints)
     * @since 11.0
     */
    getJoints(): Joint[];

    /**
     * Gets the linear damping of the Body.
     *
     * The linear damping is the rate of decrease of the linear velocity over time. A
     * moving body with no damping and no external forces will continue moving
     * indefinitely, as is the case in space. A moving body with damping will
     * gradually stop moving.
     *
     * Damping is not the same as friction - they can be modelled together. However,
     * only damping is provided by Box2D (and LÃ–VE).
     *
     * @return damping, The value of the linear damping.
     * @link [Body:getLinearDamping](https://love2d.org/wiki/Body:getLinearDamping)
     */
    getLinearDamping(): number;

    /**
     * Gets the linear velocity of the Body from its center of mass.
     *
     * The linear velocity is the rate of change of position over time.
     *
     * If you need the rate of change of angle over time, use Body:getAngularVelocity.
     * If you need to get the linear velocity of a point different from the center of
     * mass:
     *
     * Body:getLinearVelocityFromLocalPoint allows you to specify the point in local
     * coordinates.
     *
     * Body:getLinearVelocityFromWorldPoint allows you to specify the point in world
     * coordinates.
     *
     * @return x, The x component of the velocity vector.
     * @return y, The y component of the velocity vector.
     * @link [Body:getLinearVelocity](https://love2d.org/wiki/Body:getLinearVelocity)
     */
    getLinearVelocity(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Get the linear velocity of a point on the body.
     *
     * The linear velocity for a point on the body is the velocity of the body center
     * of mass plus the velocity at that point from the body spinning.
     *
     * The point on the body must given in local coordinates. Use
     * Body:getLinearVelocityFromWorldPoint to specify this with world coordinates.
     *
     * @param x The x position to measure velocity.
     * @param y The y position to measure velocity.
     * @return vx, The x component of velocity at point (x,y).
     * @return vy, The y component of velocity at point (x,y).
     * @link [Body:getLinearVelocityFromLocalPoint](https://love2d.org/wiki/Body:getLinearVelocityFromLocalPoint)
     */
    getLinearVelocityFromLocalPoint(
      x: number,
      y: number,
    ): LuaMultiReturn<[vx: number, vy: number]>;

    /**
     * Get the linear velocity of a point on the body.
     *
     * The linear velocity for a point on the body is the velocity of the body center
     * of mass plus the velocity at that point from the body spinning.
     *
     * The point on the body must given in world coordinates. Use
     * Body:getLinearVelocityFromLocalPoint to specify this with local coordinates.
     *
     * @param x The x position to measure velocity.
     * @param y The y position to measure velocity.
     * @return vx, The x component of velocity at point (x,y).
     * @return vy, The y component of velocity at point (x,y).
     * @link [Body:getLinearVelocityFromWorldPoint](https://love2d.org/wiki/Body:getLinearVelocityFromWorldPoint)
     */
    getLinearVelocityFromWorldPoint(
      x: number,
      y: number,
    ): LuaMultiReturn<[vx: number, vy: number]>;

    /**
     * Get the center of mass position in local coordinates.
     *
     * Use Body:getWorldCenter to get the center of mass in world coordinates.
     *
     * @return x, The x coordinate of the center of mass.
     * @return y, The y coordinate of the center of mass.
     * @link [Body:getLocalCenter](https://love2d.org/wiki/Body:getLocalCenter)
     */
    getLocalCenter(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Transform a point from world coordinates to local coordinates.
     *
     * @param worldX The x position in world coordinates.
     * @param worldY The y position in world coordinates.
     * @return localX, The x position in local coordinates.
     * @return localY, The y position in local coordinates.
     * @link [Body:getLocalPoint](https://love2d.org/wiki/Body:getLocalPoint)
     */
    getLocalPoint(
      worldX: number,
      worldY: number,
    ): LuaMultiReturn<[localX: number, localY: number]>;

    /**
     * Transform local points from world coordinates to local coordinates.
     *
     * @param xys All x and y world coordinates to convert.
     * @returns All the points converted to local coordinates.
     * @link [Body:getLocalPoints](https://love2d.org/wiki/Body:getLocalPoints)
     * @since 11.4
     */
    getLocalPoints(...xys: number[]): number[];

    /**
     * Transform a vector from world coordinates to local coordinates.
     *
     * @param worldX The vector x component in world coordinates.
     * @param worldY The vector y component in world coordinates.
     * @return localX, The vector x component in local coordinates.
     * @return localY, The vector y component in local coordinates.
     * @link [Body:getLocalVector](https://love2d.org/wiki/Body:getLocalVector)
     */
    getLocalVector(
      worldX: number,
      worldY: number,
    ): LuaMultiReturn<[localX: number, localY: number]>;

    /**
     * Get the mass of the body.
     *
     * @return mass, The mass of the body (in kilograms).
     * @link [Body:getMass](https://love2d.org/wiki/Body:getMass)
     */
    getMass(): number;

    /**
     * Returns the mass, its center, and the rotational inertia.
     *
     * @return x, The x position of the center of mass.
     * @return y, The y position of the center of mass.
     * @return mass, The mass of the body.
     * @return inertia, The rotational inertia.
     * @link [Body:getMassData](https://love2d.org/wiki/Body:getMassData)
     */
    getMassData(): LuaMultiReturn<
      [x: number, y: number, mass: number, inertia: number]
    >;

    /**
     * Get the position of the body.
     *
     * Note that this may not be the center of mass of the body.
     *
     * @return x, The x position.
     * @return y, The y position.
     * @link [Body:getPosition](https://love2d.org/wiki/Body:getPosition)
     */
    getPosition(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Returns the type of the body.
     *
     * @return type, The body type.
     * @link [Body:getType](https://love2d.org/wiki/Body:getType)
     */
    getType(): BodyType;

    /**
     * Returns the Lua value associated with this Body.
     *
     * @return value, The Lua value associated with the Body.
     * @link [Body:getUserData](https://love2d.org/wiki/Body:getUserData)
     */
    getUserData(): any;

    /**
     * Gets the World the body lives in.
     *
     * @return world, The world the body lives in.
     * @link [Body:getWorld](https://love2d.org/wiki/Body:getWorld)
     */
    getWorld(): World;

    /**
     * Get the center of mass position in world coordinates.
     *
     * Use Body:getLocalCenter to get the center of mass in local coordinates.
     *
     * @return x, The x coordinate of the center of mass.
     * @return y, The y coordinate of the center of mass.
     * @link [Body:getWorldCenter](https://love2d.org/wiki/Body:getWorldCenter)
     */
    getWorldCenter(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Transform a point from local coordinates to world coordinates.
     *
     * @param localX The x position in local coordinates.
     * @param localY The y position in local coordinates.
     * @return worldX, The x position in world coordinates.
     * @return worldY, The y position in world coordinates.
     * @link [Body:getWorldPoint](https://love2d.org/wiki/Body:getWorldPoint)
     */
    getWorldPoint(
      localX: number,
      localY: number,
    ): LuaMultiReturn<[worldX: number, worldY: number]>;

    /**
     * Transforms multiple points from local coordinates to world coordinates.
     *
     * @param xys The x followed by the y position of each point.
     * @return xys, The transformed points.
     * @link [Body:getWorldPoints](https://love2d.org/wiki/Body:getWorldPoints)
     */
    getWorldPoints(...xys: number[]): LuaMultiReturn<number[]>;

    /**
     * Transform a vector from local coordinates to world coordinates.
     *
     * @param localX The vector x component in local coordinates.
     * @param localY The vector y component in local coordinates.
     * @return worldX, The vector x component in world coordinates.
     * @return worldY, The vector y component in world coordinates.
     * @link [Body:getWorldVector](https://love2d.org/wiki/Body:getWorldVector)
     */
    getWorldVector(
      localX: number,
      localY: number,
    ): LuaMultiReturn<[worldX: number, worldY: number]>;

    /**
     * Get the x position of the body in world coordinates.
     *
     * @return x, The x position in world coordinates.
     * @link [Body:getX](https://love2d.org/wiki/Body:getX)
     */
    getX(): number;

    /**
     * Get the y position of the body in world coordinates.
     *
     * @return y, The y position in world coordinates.
     * @link [Body:getY](https://love2d.org/wiki/Body:getY)
     */
    getY(): number;

    /**
     * Returns whether the body is actively used in the simulation.
     *
     * @return status, True if the body is active or false if not.
     * @link [Body:isActive](https://love2d.org/wiki/Body:isActive)
     */
    isActive(): boolean;

    /**
     * Returns the sleep status of the body.
     *
     * @return status, True if the body is awake or false if not.
     * @link [Body:isAwake](https://love2d.org/wiki/Body:isAwake)
     */
    isAwake(): boolean;

    /**
     * Get the bullet status of a body.
     *
     * There are two methods to check for body collisions:
     *
     * at their location when the world is updated (default)
     *
     * using continuous collision detection (CCD)
     *
     * The default method is efficient, but a body moving very quickly may sometimes
     * jump over another body without producing a collision. A body that is set as a
     * bullet will use CCD. This is less efficient, but is guaranteed not to jump when
     * moving quickly.
     *
     * Note that static bodies (with zero mass) always use CCD, so your walls will not
     * let a fast moving body pass through even if it is not a bullet.
     *
     * @return status, The bullet status of the body.
     * @link [Body:isBullet](https://love2d.org/wiki/Body:isBullet)
     */
    isBullet(): boolean;

    /**
     * Gets whether the Body is destroyed. Destroyed bodies cannot be used.
     *
     * @return destroyed, Whether the Body is destroyed.
     * @link [Body:isDestroyed](https://love2d.org/wiki/Body:isDestroyed)
     */
    isDestroyed(): boolean;

    /**
     * Returns whether the body rotation is locked.
     *
     * @return fixed, True if the body's rotation is locked or false if not.
     * @link [Body:isFixedRotation](https://love2d.org/wiki/Body:isFixedRotation)
     */
    isFixedRotation(): boolean;

    /**
     * Returns the sleeping behaviour of the body.
     *
     * @return status, True if the body is allowed to sleep or false if not.
     * @link [Body:isSleepingAllowed](https://love2d.org/wiki/Body:isSleepingAllowed)
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
     * @link [Body:resetMassData](https://love2d.org/wiki/Body:resetMassData)
     */
    resetMassData(): void;

    /**
     * Sets whether the body is active in the world.
     *
     * An inactive body does not take part in the simulation. It will not move or
     * cause any collisions.
     *
     * @param active If the body is active or not.
     * @link [Body:setActive](https://love2d.org/wiki/Body:setActive)
     */
    setActive(active: boolean): void;

    /**
     * Set the angle of the body.
     *
     * The angle is measured in radians. If you need to transform it from degrees, use
     * math.rad.
     *
     * A value of 0 radians will mean "looking to the right". Although radians
     * increase counter-clockwise, the y-axis points down so it becomes clockwise from
     * our point of view.
     *
     * It is possible to cause a collision with another body by changing its angle.
     *
     * @param angle The angle in radians.
     * @link [Body:setAngle](https://love2d.org/wiki/Body:setAngle)
     */
    setAngle(angle: number): void;

    /**
     * Sets the angular damping of a Body.
     *
     * See Body:getAngularDamping for a definition of angular damping.
     *
     * Angular damping can take any value from 0 to infinity. It is recommended to
     * stay between 0 and 0.1, though. Other values will look unrealistic.
     *
     * @param damping The new angular damping.
     * @link [Body:setAngularDamping](https://love2d.org/wiki/Body:setAngularDamping)
     */
    setAngularDamping(damping: number): void;

    /**
     * Sets the angular velocity of a Body.
     *
     * The angular velocity is the rate of change of angle over time.
     *
     * This function will not accumulate anything; any impulses previously applied
     * since the last call to World:update will be lost.
     *
     * @param w The new angular velocity, in radians per second
     * @link [Body:setAngularVelocity](https://love2d.org/wiki/Body:setAngularVelocity)
     */
    setAngularVelocity(w: number): void;

    /**
     * Wakes the body up or puts it to sleep.
     *
     * @param awake The body sleep status.
     * @link [Body:setAwake](https://love2d.org/wiki/Body:setAwake)
     */
    setAwake(awake: boolean): void;

    /**
     * Set the bullet status of a body.
     *
     * There are two methods to check for body collisions:
     *
     * at their location when the world is updated (default)
     *
     * using continuous collision detection (CCD)
     *
     * The default method is efficient, but a body moving very quickly may sometimes
     * jump over another body without producing a collision. A body that is set as a
     * bullet will use CCD. This is less efficient, but is guaranteed not to jump when
     * moving quickly.
     *
     * Note that static bodies (with zero mass) always use CCD, so your walls will not
     * let a fast moving body pass through even if it is not a bullet.
     *
     * @param status The bullet status of the body.
     * @link [Body:setBullet](https://love2d.org/wiki/Body:setBullet)
     */
    setBullet(status: boolean): void;

    /**
     * Set whether a body has fixed rotation.
     *
     * Bodies with fixed rotation don't vary the speed at which they rotate.
     *
     * @param fixed Whether the body should have fixed rotation.
     * @link [Body:setFixedRotation](https://love2d.org/wiki/Body:setFixedRotation)
     */
    setFixedRotation(fixed: boolean): void;

    /**
     * Sets a new gravity scale factor for the body.
     *
     * @param scale The new gravity scale factor.
     * @link [Body:setGravityScale](https://love2d.org/wiki/Body:setGravityScale)
     */
    setGravityScale(scale: number): void;

    /**
     * Set the inertia of a body.
     *
     * @param inertia The new moment of inertia, in kilograms per meter squared.
     * @link [Body:setInertia](https://love2d.org/wiki/Body:setInertia)
     */
    setInertia(inertia: number): void;

    /**
     * Sets the linear damping of a Body
     *
     * See Body:getLinearDamping for a definition of linear damping.
     *
     * Linear damping can take any value from 0 to infinity. It is recommended to stay
     * between 0 and 0.1, though. Other values will make the objects look "floaty".
     *
     * @param ld The new linear damping.
     * @link [Body:setLinearDamping](https://love2d.org/wiki/Body:setLinearDamping)
     */
    setLinearDamping(ld: number): void;

    /**
     * Sets a new linear velocity for the Body.
     *
     * This function will not accumulate anything; any impulses previously applied
     * since the last call to World:update will be lost.
     *
     * @param x The x component of the velocity vector.
     * @param y The y component of the velocity vector.
     * @link [Body:setLinearVelocity](https://love2d.org/wiki/Body:setLinearVelocity)
     */
    setLinearVelocity(x: number, y: number): void;

    /**
     * Sets the mass in kilograms.
     *
     * @param mass The mass, in kilograms.
     * @link [Body:setMass](https://love2d.org/wiki/Body:setMass)
     */
    setMass(mass: number): void;

    /**
     * Overrides the calculated mass data.
     *
     * @param x The x component of the center of mass in local coordinates.
     * @param y The y component of the center of mass in local coordinates.
     * @param mass The mass, in kilograms.
     * @param inertia The rotational inertia, in kilograms per squared meter.
     * @link [Body:setMassData](https://love2d.org/wiki/Body:setMassData)
     */
    setMassData(x: number, y: number, mass: number, inertia: number): void;

    /**
     * Set the position of the body.
     *
     * Note that this may not be the center of mass of the body.
     *
     * @param x The x position.
     * @param y The y position.
     * @link [Body:setPosition](https://love2d.org/wiki/Body:setPosition)
     */
    setPosition(x: number, y: number): void;

    /**
     * Sets the sleeping behaviour of the body.
     *
     * @param allowed True if the body is allowed to sleep or false if not.
     * @link [Body:setSleepingAllowed](https://love2d.org/wiki/Body:setSleepingAllowed)
     */
    setSleepingAllowed(allowed: boolean): void;

    /**
     * Sets a new body type.
     *
     * @param type The new type.
     * @link [Body:setType](https://love2d.org/wiki/Body:setType)
     */
    setType(type: BodyType): void;

    /**
     * Associates a Lua value with the Body.
     *
     * To delete the reference, explicitly pass _nil/undefined_.
     *
     * @param value The Lua value to associate with the Body.
     * @link [Body:setUserData](https://love2d.org/wiki/Body:setUserData)
     */
    setUserData(value: any): void;

    /**
     * Set the x position of the body.
     *
     * @param x The x position.
     * @link [Body:setX](https://love2d.org/wiki/Body:setX)
     */
    setX(x: number): void;

    /**
     * Set the y position of the body.
     *
     * @param y The y position.
     * @link [Body:setY](https://love2d.org/wiki/Body:setY)
     */
    setY(y: number): void;
  }
}
