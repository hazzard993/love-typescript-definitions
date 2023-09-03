declare module "love.graphics" {
  /**
   * A ParticleSystem can be used to create particle effects like fire or smoke.
   * @link [ParticleSystem](https://love2d.org/wiki/ParticleSystem)
   */
  interface ParticleSystem extends Drawable {
    /**
     * Creates an identical copy of the ParticleSystem in the stopped state.
     *
     * Cloned ParticleSystem inherit all the set-able state of the original
     * ParticleSystem, but they are initialized stopped.
     *
     * @return particlesystem, The new identical copy of this ParticleSystem.
     * @link [ParticleSystem:clone](https://love2d.org/wiki/ParticleSystem:clone)
     */
    clone(): ParticleSystem;

    /**
     * Emits a burst of particles from the particle emitter.
     *
     * @param numparticles The amount of particles to emit. The number of emitted particles will be truncated if the particle system's max buffer size is reached.
     * @link [ParticleSystem:emit](https://love2d.org/wiki/ParticleSystem:emit)
     */
    emit(numparticles: number): void;

    /**
     * Gets the amount of particles that are currently in the system.
     *
     * @return count, The current number of live particles.
     * @link [ParticleSystem:getCount](https://love2d.org/wiki/ParticleSystem:getCount)
     */
    getCount(): number;

    /**
     * Gets the size of the buffer (the max allowed amount of particles in the
     * system).
     *
     * @return buffer, The buffer size.
     * @link [ParticleSystem:getBufferSize](https://love2d.org/wiki/ParticleSystem:getBufferSize)
     */
    getBufferSize(): number;

    /**
     * Gets the series of colors applied to the particle sprite.
     *
     * @return A repeating `[rgba]` tuple for the first colour, second colour and so on.
     * @link [ParticleSystem:getColors](https://love2d.org/wiki/ParticleSystem:getColors)
     * @since 0.9.0
     */
    getColors(): LuaMultiReturn<number[]>;

    /**
     * Gets the direction the particles will be emitted in.
     *
     * @return direction, The direction of the particles (in radians).
     * @link [ParticleSystem:getDirection](https://love2d.org/wiki/ParticleSystem:getDirection)
     */
    getDirection(): number;

    /**
     * Gets the area-based spawn parameters for the particles.
     *
     * @return distribution, The type of distribution for new particles.
     * @return dx, The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.
     * @return dy, The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.
     * @return angle, The angle in radians of the emission area.
     * @return directionRelativeToCenter, True if newly spawned particles will be oriented relative to the center of the emission area, false otherwise.
     * @link [ParticleSystem:getEmissionArea](https://love2d.org/wiki/ParticleSystem:getEmissionArea)
     * @since 11.0
     */
    getEmissionArea(): LuaMultiReturn<
      [
        distribution: AreaSpreadDistribution,
        dx: number,
        dy: number,
        angle: number,
        directionRelativeToCenter: boolean,
      ]
    >;

    /**
     * Gets the amount of particles emitted per second.
     *
     * @return rate, The amount of particles per second.
     * @link [ParticleSystem:getEmissionRate](https://love2d.org/wiki/ParticleSystem:getEmissionRate)
     * @since 0.9.0
     */
    getEmissionRate(): number;

    /**
     * Gets the mode to use when the ParticleSystem adds new particles.
     *
     * @return mode, The mode to use when the ParticleSystem adds new particles.
     * @link [ParticleSystem:getInsertMode](https://love2d.org/wiki/ParticleSystem:getInsertMode)
     * @since 0.9.0
     */
    getInsertMode(): ParticleInsertMode;

    /**
     * Gets the linear acceleration (acceleration along the x and y axes) for
     * particles.
     *
     * Every particle created will accelerate along the x and y axes between xmin,ymin
     * and xmax,ymax.
     *
     * @return xmin, The minimum acceleration along the x axis.
     * @return ymin, The minimum acceleration along the y axis.
     * @return xmax, The maximum acceleration along the x axis.
     * @return ymax, The maximum acceleration along the y axis.
     * @link [ParticleSystem:getLinearAcceleration](https://love2d.org/wiki/ParticleSystem:getLinearAcceleration)
     * @since 0.9.0
     */
    getLinearAcceleration(): LuaMultiReturn<
      [xmin: number, ymin: number, xmax: number, ymax: number]
    >;

    /**
     * Gets the amount of linear damping (constant deceleration) for particles.
     *
     * @return min, The minimum amount of linear damping applied to particles.
     * @return max, The maximum amount of linear damping applied to particles.
     * @link [ParticleSystem:getLinearDamping](https://love2d.org/wiki/ParticleSystem:getLinearDamping)
     * @since 0.9.2
     */
    getLinearDamping(): LuaMultiReturn<[min: number, max: number]>;

    /**
     * Gets how long the particle system should emit particles (if -1 then it emits
     * particles forever).
     *
     * @return life, The lifetime of the emitter (in seconds).
     * @link [ParticleSystem:getEmitterLifetime](https://love2d.org/wiki/ParticleSystem:getEmitterLifetime)
     * @since 0.9.0
     */
    getEmitterLifetime(): number;

    /**
     * Get the offset position which the particle sprite is rotated around. If this
     * function is not used, the particles rotate around their center.
     *
     * @return x, The x coordinate of the rotation offset.
     * @return y, The y coordinate of the rotation offset.
     * @link [ParticleSystem:getOffset](https://love2d.org/wiki/ParticleSystem:getOffset)
     * @since 0.9.0
     */
    getOffset(): LuaMultiReturn<[ox: number, oy: number]>;

    /**
     * Gets the life of the particles.
     *
     * @return min, The minimum life of the particles (seconds).
     * @return max, The maximum life of the particles (seconds).
     * @link [ParticleSystem:getParticleLifetime](https://love2d.org/wiki/ParticleSystem:getParticleLifetime)
     * @since 0.9.0
     */
    getParticleLifetime(): LuaMultiReturn<[min: number, max: number]>;

    /**
     * Gets the series of Quads used for the particle sprites.
     *
     * @return quads, A table containing the Quads used.
     * @link [ParticleSystem:getQuads](https://love2d.org/wiki/ParticleSystem:getQuads)
     */
    getQuads(): Quad[];

    /**
     * Gets the position of the emitter.
     *
     * @return x, Position along x-axis.
     * @return y, Position along y-axis.
     * @link [ParticleSystem:getPosition](https://love2d.org/wiki/ParticleSystem:getPosition)
     */
    getPosition(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Get the radial acceleration (away from the emitter).
     *
     * @return min, The minimum acceleration.
     * @return max, The maximum acceleration.
     * @link [ParticleSystem:getRadialAcceleration](https://love2d.org/wiki/ParticleSystem:getRadialAcceleration)
     * @since 0.9.0
     */
    getRadialAcceleration(): LuaMultiReturn<[min: number, max: number]>;

    /**
     * Gets the rotation of the image upon particle creation (in radians).
     *
     * @return min, The minimum initial angle (radians).
     * @return max, The maximum initial angle (radians).
     * @link [ParticleSystem:getRotation](https://love2d.org/wiki/ParticleSystem:getRotation)
     * @since 0.9.0
     */
    getRotation(): LuaMultiReturn<[min: number, max: number]>;

    /**
     * Gets a series of sizes by which to scale a particle sprite. 1.0 is normal size.
     * The particle system will interpolate between each size evenly over the
     * particle's lifetime.
     *
     * At least one size must be specified. A maximum of eight may be used.
     *
     * @return size1, The first size.
     * @return size2, The second size.
     * @return ..., Etc.
     * @link [ParticleSystem:getSizes](https://love2d.org/wiki/ParticleSystem:getSizes)
     * @since 0.9.0
     */
    getSizes(): LuaMultiReturn<number[]>;

    /**
     * Gets the degree of variation (0 meaning no variation and 1 meaning full
     * variation between start and end).
     *
     * @return variation, The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     * @link [ParticleSystem:getSizeVariation](https://love2d.org/wiki/ParticleSystem:getSizeVariation)
     * @since 0.9.0
     */
    getSizeVariation(): number;

    /**
     * Gets the speed of the particles.
     *
     * @return min, The minimum linear speed of the particles.
     * @return max, The maximum linear speed of the particles.
     * @link [ParticleSystem:getSpeed](https://love2d.org/wiki/ParticleSystem:getSpeed)
     * @since 0.9.0
     */
    getSpeed(): LuaMultiReturn<[min: number, max: number]>;

    /**
     * Gets the spin of the sprite.
     *
     * @returns min, The minimum spin (radians per second).
     * @returns max, The maximum spin (radians per second).
     * @returns variation, The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     * @link [ParticleSystem:getSpin](https://love2d.org/wiki/ParticleSystem:getSpin)
     * @since 0.9.0
     */
    getSpin(): LuaMultiReturn<[min: number, max: number, variation: number]>;

    /**
     * Gets the degree of variation (0 meaning no variation and 1 meaning full
     * variation between start and end).
     *
     * @return variation, The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     * @link [ParticleSystem:getSpinVariation](https://love2d.org/wiki/ParticleSystem:getSpinVariation)
     * @since 0.9.0
     */
    getSpinVariation(): number;

    /**
     * Gets the amount of spread for the system.
     *
     * @return spread, The amount of spread (radians).
     * @link [ParticleSystem:getSpread](https://love2d.org/wiki/ParticleSystem:getSpread)
     */
    getSpread(): number;

    /**
     * Gets the Image or Canvas which is to be emitted.
     *
     * @return texture, An Image or Canvas to use for the particle.
     * @link [ParticleSystem:getTexture](https://love2d.org/wiki/ParticleSystem:getTexture)
     * @since 0.9.1
     */
    getTexture(): Texture;

    /**
     * Gets the tangential acceleration (acceleration perpendicular to the particle's
     * direction).
     *
     * @return min, The minimum acceleration.
     * @return max, The maximum acceleration.
     * @link [ParticleSystem:getTangentialAcceleration](https://love2d.org/wiki/ParticleSystem:getTangentialAcceleration)
     * @since 0.9.0
     */
    getTangentialAcceleration(): LuaMultiReturn<[min: number, max: number]>;

    /**
     * Gets whether particle angles and rotations are relative to their velocities. If
     * enabled, particles are aligned to the angle of their velocities and rotate
     * relative to that angle.
     *
     * @return enabled, True if relative particle rotation is enabled, false if it's disabled.
     * @link [ParticleSystem:hasRelativeRotation](https://love2d.org/wiki/ParticleSystem:hasRelativeRotation)
     * @since 0.9.1
     */
    hasRelativeRotation(): boolean;

    /**
     * Checks whether the particle system is actively emitting particles.
     *
     * @return active, True if system is active, false otherwise.
     * @link [ParticleSystem:isActive](https://love2d.org/wiki/ParticleSystem:isActive)
     */
    isActive(): boolean;

    /**
     * Checks whether the particle system is paused.
     *
     * @return paused, True if system is paused, false otherwise.
     * @link [ParticleSystem:isPaused](https://love2d.org/wiki/ParticleSystem:isPaused)
     * @since 0.9.0
     */
    isPaused(): boolean;

    /**
     * Checks whether the particle system is stopped.
     *
     * @return stopped, True if system is stopped, false otherwise.
     * @link [ParticleSystem:isStopped](https://love2d.org/wiki/ParticleSystem:isStopped)
     * @since 0.9.0
     */
    isStopped(): boolean;

    /**
     * Moves the position of the emitter. This results in smoother particle spawning
     * behaviour than if ParticleSystem:setPosition is used every frame.
     *
     * @param x Position along x-axis.
     * @param y Position along y-axis.
     * @link [ParticleSystem:moveTo](https://love2d.org/wiki/ParticleSystem:moveTo)
     * @since 0.9.1
     */
    moveTo(x: number, y: number): void;

    /**
     * Pauses the particle emitter.
     *
     * @link [ParticleSystem:pause](https://love2d.org/wiki/ParticleSystem:pause)
     */
    pause(): void;

    /**
     * Resets the particle emitter, removing any existing particles and resetting the
     * lifetime counter.
     *
     * @link [ParticleSystem:reset](https://love2d.org/wiki/ParticleSystem:reset)
     */
    reset(): void;

    /**
     * Sets the size of the buffer (the max allowed amount of particles in the
     * system).
     *
     * @param buffer The buffer size.
     * @link [ParticleSystem:setBufferSize](https://love2d.org/wiki/ParticleSystem:setBufferSize)
     */
    setBufferSize(buffer: number): void;

    /**
     * Sets a series of colors to apply to the particle sprite. The particle system
     * will interpolate between each color evenly over the particle's lifetime. Color
     * modulation needs to be activated for this function to have any effect.
     *
     * Arguments are passed in groups of four, representing the components of the
     * desired RGBA value. At least one color must be specified. A maximum of eight
     * may be used.
     *
     * @param rgbas rgba values. First set is for the first colour and so on.
     * @param ... Etc.
     * @link [ParticleSystem:setColors](https://love2d.org/wiki/ParticleSystem:setColors)
     */
    setColors(...rgbas: number[]): void;

    /**
     * Sets the direction the particles will be emitted in.
     *
     * @param direction The direction of the particles (in radians).
     * @link [ParticleSystem:setDirection](https://love2d.org/wiki/ParticleSystem:setDirection)
     */
    setDirection(direction: number): void;

    /**
     * Sets area-based spawn parameters for the particles. Newly created particles will spawn in an area around the emitter based on the parameters to this function.
     * @param distribution The type of distribution for new particles.
     * @param dx The type of distribution for new particles.
     * @param dy The type of distribution for new particles.
     * @param angle The angle in radians of the emission area. (Default 0)
     * @param directionRelativeToCenter The type of distribution for new particles. (Default false)
     * @link [ParticleSystem:setEmissionArea](https://love2d.org/wiki/ParticleSystem:setEmissionArea)
     * @since 11.0
     */
    setEmissionArea(
      distribution: AreaSpreadDistribution,
      dx: number,
      dy: number,
      angle?: number,
      directionRelativeToCenter?: boolean,
    ): void;

    /**
     * Sets the amount of particles emitted per second.
     *
     * @param rate The amount of particles per second.
     * @link [ParticleSystem:setEmissionRate](https://love2d.org/wiki/ParticleSystem:setEmissionRate)
     */
    setEmissionRate(rate: number): void;

    /**
     * Sets how long the particle system should emit particles (if -1 then it emits
     * particles forever).
     *
     * @param life The lifetime of the emitter (in seconds).
     * @link [ParticleSystem:setEmitterLifetime](https://love2d.org/wiki/ParticleSystem:setEmitterLifetime)
     * @since 0.9.0
     */
    setEmitterLifetime(life: number): void;

    /**
     * Sets the mode to use when the ParticleSystem adds new particles.
     *
     * @param mode The mode to use when the ParticleSystem adds new particles.
     * @link [ParticleSystem:setInsertMode](https://love2d.org/wiki/ParticleSystem:setInsertMode)
     * @since 0.9.0
     */
    setInsertMode(mode: ParticleInsertMode): void;

    /**
     * Sets the linear acceleration (acceleration along the x and y axes) for
     * particles.
     *
     * Every particle created will accelerate along the x and y axes between xmin,ymin
     * and xmax,ymax.
     *
     * @param xmin The minimum acceleration along the x axis.
     * @param ymin The minimum acceleration along the y axis.
     * @param xmax The maximum acceleration along the x axis. (Default: xmin)
     * @param ymax The maximum acceleration along the y axis. (Default: ymin)
     * @link [ParticleSystem:setLinearAcceleration](https://love2d.org/wiki/ParticleSystem:setLinearAcceleration)
     * @since 0.9.0
     */
    setLinearAcceleration(
      xmin: number,
      ymin: number,
      xmax?: number,
      ymax?: number,
    ): void;

    /**
     * Sets the amount of linear damping (constant deceleration) for particles.
     *
     * @param min The minimum amount of linear damping applied to particles.
     * @param max The maximum amount of linear damping applied to particles.
     * @link [ParticleSystem:setLinearDamping](https://love2d.org/wiki/ParticleSystem:setLinearDamping)
     * @since 0.9.2
     */
    setLinearDamping(min: number, max: number): void;

    /**
     * Set the offset position which the particle sprite is rotated around. If this
     * function is not used, the particles rotate around their center.
     *
     * @param x The x coordinate of the rotation offset.
     * @param y The y coordinate of the rotation offset.
     * @link [ParticleSystem:setOffset](https://love2d.org/wiki/ParticleSystem:setOffset)
     */
    setOffset(x: number, y: number): void;

    /**
     * Sets the life of the particles.
     *
     * @param min The minimum life of the particles (seconds).
     * @param max The maximum life of the particles (seconds).
     * @link [ParticleSystem:setParticleLifetime](https://love2d.org/wiki/ParticleSystem:setParticleLifetime)
     * @since 0.9.0
     */
    setParticleLifetime(min: number, max?: number): void;

    /**
     * Sets the position of the emitter.
     *
     * @param x Position along x-axis.
     * @param y Position along y-axis.
     * @link [ParticleSystem:setPosition](https://love2d.org/wiki/ParticleSystem:setPosition)
     */
    setPosition(x: number, y: number): void;

    /**
     * Sets a series of Quads to use for the particle sprites. Particles will choose a
     * Quad from the list based on the particle's current lifetime, allowing for the
     * use of animated sprite sheets with ParticleSystems.
     *
     * @param quads All Quads to use.
     * @link [ParticleSystem:setQuads](https://love2d.org/wiki/ParticleSystem:setQuads)
     * @since 0.9.2
     */
    setQuads(...quads: Quad[]): void;

    /**
     * Set the radial acceleration (away from the emitter).
     *
     * @param min The minimum acceleration.
     * @param max The maximum acceleration.
     * @link [ParticleSystem:setRadialAcceleration](https://love2d.org/wiki/ParticleSystem:setRadialAcceleration)
     */
    setRadialAcceleration(min: number, max?: number): void;

    /**
     * Sets whether particle angles and rotations are relative to their velocities. If
     * enabled, particles are aligned to the angle of their velocities and rotate
     * relative to that angle.
     *
     * @param enable True to enable relative particle rotation, false to disable it.
     * @link [ParticleSystem:setRelativeRotation](https://love2d.org/wiki/ParticleSystem:setRelativeRotation)
     * @since 0.9.1
     */
    setRelativeRotation(enable: boolean): void;

    /**
     * Sets the rotation of the image upon particle creation (in radians).
     *
     * @param min The minimum initial angle (radians).
     * @param max The maximum initial angle (radians).
     * @link [ParticleSystem:setRotation](https://love2d.org/wiki/ParticleSystem:setRotation)
     */
    setRotation(min: number, max?: number): void;

    /**
     * Sets a series of sizes by which to scale a particle sprite. 1.0 is normal size.
     * The particle system will interpolate between each size evenly over the
     * particle's lifetime.
     *
     * At least one size must be specified. A maximum of eight may be used.
     *
     * @param sizes All sizes to use.
     * @link [ParticleSystem:setSizes](https://love2d.org/wiki/ParticleSystem:setSizes)
     * @since 0.8.0
     */
    setSizes(...sizes: number[]): void;

    /**
     * Sets the degree of variation (0 meaning no variation and 1 meaning full
     * variation between start and end).
     *
     * @param variation The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     * @link [ParticleSystem:setSizeVariation](https://love2d.org/wiki/ParticleSystem:setSizeVariation)
     */
    setSizeVariation(variation: number): void;

    /**
     * Sets the speed of the particles.
     *
     * @param min The minimum linear speed of the particles.
     * @param max The maximum linear speed of the particles.
     * @link [ParticleSystem:setSpeed](https://love2d.org/wiki/ParticleSystem:setSpeed)
     */
    setSpeed(min: number, max?: number): void;

    /**
     * Sets the spin of the sprite.
     *
     * @param min The minimum spin (radians per second).
     * @param max The maximum spin (radians per second).
     * @link [ParticleSystem:setSpin](https://love2d.org/wiki/ParticleSystem:setSpin)
     */
    setSpin(min: number, max?: number): void;

    /**
     * Sets the degree of variation (0 meaning no variation and 1 meaning full
     * variation between start and end).
     *
     * @param variation The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     * @link [ParticleSystem:setSpinVariation](https://love2d.org/wiki/ParticleSystem:setSpinVariation)
     */
    setSpinVariation(variation: number): void;

    /**
     * Sets the amount of spread for the system.
     *
     * @param spread The amount of spread (radians).
     * @link [ParticleSystem:setSpread](https://love2d.org/wiki/ParticleSystem:setSpread)
     */
    setSpread(spread: number): void;

    /**
     * Sets the Image or Canvas which is to be emitted.
     *
     * @param texture An Image or Canvas to use for the particle.
     * @link [ParticleSystem:setTexture](https://love2d.org/wiki/ParticleSystem:setTexture)
     * @since 0.9.1
     */
    setTexture(texture: Texture): void;

    /**
     * Sets the tangential acceleration (acceleration perpendicular to the particle's
     * direction).
     *
     * @param min The minimum acceleration.
     * @param max The maximum acceleration.
     * @link [ParticleSystem:setTangentialAcceleration](https://love2d.org/wiki/ParticleSystem:setTangentialAcceleration)
     */
    setTangentialAcceleration(min: number, max?: number): void;

    /**
     * Starts the particle emitter.
     *
     * @link [ParticleSystem:start](https://love2d.org/wiki/ParticleSystem:start)
     */
    start(): void;

    /**
     * Stops the particle emitter, resetting the lifetime counter.
     *
     * @link [ParticleSystem:stop](https://love2d.org/wiki/ParticleSystem:stop)
     */
    stop(): void;

    /**
     * Updates the particle system; moving, creating and killing particles.
     *
     * @param dt The time (seconds) since last frame.
     * @link [ParticleSystem:update](https://love2d.org/wiki/ParticleSystem:update)
     */
    update(dt: number): void;
  }
}
